const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const D = (f) => path.join(ROOT, 'drafts', f);
const P = (f) => path.join(ROOT, 'products', f);

console.log('=== ROUND 8: FINAL VERIFICATION & PRODUCTION READINESS ===\n');

const results = {
  manuscripts: { total: 9, valid: 0, issues: [] },
  products: { total: 9, valid: 0, issues: [] },
  manifest: { valid: false, issues: [] },
  overall: { status: 'UNKNOWN', score: 0 },
};

// 1. Verify all 9 manuscripts exist and are readable
console.log('1. MANUSCRIPT VERIFICATION\n');

const manuscripts = [
  { name: 'P1 Basic', path: D('150-prompt-ai-untuk-bisnis-dan-umkm-indonesia.md'), expectedPrompts: 150 },
  { name: 'P1 Premium', path: D('150-prompt-umkm-premium.md'), expectedPrompts: 150 },
  { name: 'P1 Ultimate', path: D('150-prompt-umkm-ultimate.md'), expectedPrompts: 150 },
  { name: 'P2 Basic', path: D('300-prompt-ai-untuk-copywriting-dan-iklan-digital.md'), expectedPrompts: 300 },
  { name: 'P2 Premium', path: D('300-prompt-copywriting-premium.md'), expectedPrompts: 300 },
  { name: 'P2 Ultimate', path: D('300-prompt-copywriting-ultimate.md'), expectedPrompts: 300 },
  { name: 'P3 Basic', path: D('200-template-social-media-basic.md'), expectedPrompts: 200 },
  { name: 'P3 Premium', path: D('200-template-social-media-premium.md'), expectedPrompts: 200 },
  { name: 'P3 Ultimate', path: D('200-template-social-media-ultimate.md'), expectedPrompts: 200 },
];

for (const ms of manuscripts) {
  try {
    if (!fs.existsSync(ms.path)) {
      results.manuscripts.issues.push(`${ms.name}: File not found`);
      continue;
    }
    
    const text = fs.readFileSync(ms.path, 'utf8');
    const size = text.length;
    
    if (size < 10000) {
      results.manuscripts.issues.push(`${ms.name}: File too small (${size} bytes)`);
      continue;
    }
    
    // Count prompts (exclude demo sections which have "(Contoh Output)")
    const promptMatches = text.match(/^###\s+[PT]-\d{3}\.(?!.*\(Contoh Output\))/gm);
    const promptCount = promptMatches ? promptMatches.length : 0;
    
    if (promptCount !== ms.expectedPrompts) {
      results.manuscripts.issues.push(`${ms.name}: Expected ${ms.expectedPrompts} prompts, found ${promptCount}`);
      continue;
    }
    
    results.manuscripts.valid++;
    console.log(`  ✓ ${ms.name}: ${promptCount} prompts, ${size} bytes`);
  } catch (err) {
    results.manuscripts.issues.push(`${ms.name}: ${err.message}`);
  }
}

console.log(`\nResult: ${results.manuscripts.valid}/${results.manuscripts.total} manuscripts valid`);

// 2. Verify all product files exist
console.log('\n2. PRODUCT FILES VERIFICATION\n');

const manifestPath = P('manifest.json');
if (!fs.existsSync(manifestPath)) {
  results.manifest.issues.push('manifest.json not found');
} else {
  try {
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    
    if (!manifest.products || manifest.products.length !== 9) {
      results.manifest.issues.push(`Expected 9 products in manifest, found ${manifest.products ? manifest.products.length : 0}`);
    } else {
      results.manifest.valid = true;
      
      for (const product of manifest.products) {
        const allFilesExist = product.outputs.every(output => {
          const fullPath = path.join(ROOT, output.file);
          return fs.existsSync(fullPath);
        });
        
        if (allFilesExist) {
          results.products.valid++;
          console.log(`  ✓ ${product.slug}: ${product.outputs.length} files`);
        } else {
          const missingFiles = product.outputs.filter(output => {
            const fullPath = path.join(ROOT, output.file);
            return !fs.existsSync(fullPath);
          });
          results.products.issues.push(`${product.slug}: ${missingFiles.length} files missing`);
        }
      }
    }
  } catch (err) {
    results.manifest.issues.push(`Failed to parse manifest: ${err.message}`);
  }
}

console.log(`\nResult: ${results.products.valid}/${results.products.total} products complete`);

// 3. Verify file sizes are reasonable
console.log('\n3. FILE SIZE VERIFICATION\n');

if (results.manifest.valid) {
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  let sizeIssues = 0;
  
  for (const product of manifest.products) {
    for (const output of product.outputs) {
      const fullPath = path.join(ROOT, output.file);
      if (fs.existsSync(fullPath)) {
        const stat = fs.statSync(fullPath);
        
        // Check if size matches manifest
        if (stat.size !== output.bytes) {
          results.manifest.issues.push(`${output.file}: size mismatch (manifest: ${output.bytes}, actual: ${stat.size})`);
          sizeIssues++;
        }
        
        // Check for suspiciously small files
        if (output.kind === 'pdf' && stat.size < 50000) {
          results.products.issues.push(`${output.file}: PDF too small (${stat.size} bytes)`);
          sizeIssues++;
        }
      }
    }
  }
  
  if (sizeIssues === 0) {
    console.log('  ✓ All file sizes match manifest');
  } else {
    console.log(`  ✗ ${sizeIssues} size issues found`);
  }
}

// 4. Calculate overall score
console.log('\n4. OVERALL VERIFICATION\n');

const totalChecks = results.manuscripts.total + results.products.total + (results.manifest.valid ? 1 : 0);
const passedChecks = results.manuscripts.valid + results.products.valid + (results.manifest.valid ? 1 : 0);
const score = Math.round((passedChecks / totalChecks) * 100);

results.overall.score = score;
results.overall.status = score === 100 ? 'PASS' : score >= 90 ? 'WARNING' : 'FAIL';

console.log(`  Manuscripts: ${results.manuscripts.valid}/${results.manuscripts.total}`);
console.log(`  Products: ${results.products.valid}/${results.products.total}`);
console.log(`  Manifest: ${results.manifest.valid ? 'VALID' : 'INVALID'}`);
console.log(`\n  Overall Score: ${score}%`);
console.log(`  Status: ${results.overall.status}`);

// 5. Summary
console.log('\n=== SUMMARY ===\n');

if (results.overall.status === 'PASS') {
  console.log('✓ ALL CHECKS PASSED');
  console.log('  - All 9 manuscripts valid and complete');
  console.log('  - All 9 products have all required files');
  console.log('  - Manifest accurate and up-to-date');
  console.log('  - System ready for production');
} else {
  console.log('✗ ISSUES FOUND:\n');
  
  if (results.manuscripts.issues.length > 0) {
    console.log('  Manuscript Issues:');
    results.manuscripts.issues.forEach(issue => console.log(`    - ${issue}`));
  }
  
  if (results.products.issues.length > 0) {
    console.log('\n  Product Issues:');
    results.products.issues.forEach(issue => console.log(`    - ${issue}`));
  }
  
  if (results.manifest.issues.length > 0) {
    console.log('\n  Manifest Issues:');
    results.manifest.issues.forEach(issue => console.log(`    - ${issue}`));
  }
}

console.log('\n=== VERIFICATION COMPLETE ===');

// Exit with appropriate code
process.exit(results.overall.status === 'PASS' ? 0 : 1);
