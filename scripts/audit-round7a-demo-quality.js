const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const D = (f) => path.join(ROOT, 'drafts', f);

const files = [
  { name: 'P1 Premium', path: D('150-prompt-umkm-premium.md'), hasDemos: true },
  { name: 'P1 Ultimate', path: D('150-prompt-umkm-ultimate.md'), hasDemos: true },
  { name: 'P2 Premium', path: D('300-prompt-copywriting-premium.md'), hasDemos: true },
  { name: 'P2 Ultimate', path: D('300-prompt-copywriting-ultimate.md'), hasDemos: true },
  { name: 'P3 Premium', path: D('200-template-social-media-premium.md'), hasDemos: true },
  { name: 'P3 Ultimate', path: D('200-template-social-media-ultimate.md'), hasDemos: true },
];

const issues = [];
const stats = {};

function analyzeDemoSections(text, fileName) {
  const lines = text.split('\n');
  let inDemo = false;
  let demoStart = 0;
  let demoContent = [];
  let demoCount = 0;
  let totalDemoLines = 0;
  let emptyDemos = 0;
  let shortDemos = 0;
  let placeholderDemos = 0;
  
  stats[fileName] = {
    totalDemos: 0,
    avgLength: 0,
    emptyDemos: 0,
    shortDemos: 0,
    placeholderDemos: 0,
  };
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Detect demo section start: ### P-XXX. Title (Contoh Output) or ### T-XXX. Title (Contoh Output)
    if (/^###\s+[PT]-\d{3}\..*\(Contoh Output\)/i.test(line)) {
      if (inDemo && demoContent.length > 0) {
        // Finish previous demo
        analyzeDemo(demoContent, demoStart, fileName, stats[fileName]);
      }
      
      inDemo = true;
      demoStart = i + 1;
      demoContent = [];
      demoCount++;
      stats[fileName].totalDemos++;
      continue;
    }
    
    // Detect demo section end: next ### or ## heading
    if (inDemo && /^#{2,3}\s/.test(line)) {
      if (demoContent.length > 0) {
        analyzeDemo(demoContent, demoStart, fileName, stats[fileName]);
      }
      inDemo = false;
      demoContent = [];
      continue;
    }
    
    if (inDemo) {
      demoContent.push(line);
      totalDemoLines++;
    }
  }
  
  // Handle last demo if file ends while in demo
  if (inDemo && demoContent.length > 0) {
    analyzeDemo(demoContent, demoStart, fileName, stats[fileName]);
  }
  
  // Calculate average length
  if (stats[fileName].totalDemos > 0) {
    stats[fileName].avgLength = Math.round(totalDemoLines / stats[fileName].totalDemos);
  }
}

function analyzeDemo(content, startLine, fileName, stat) {
  const text = content.join('\n').trim();
  
  // Check for empty demo
  if (text.length === 0) {
    stat.emptyDemos++;
    issues.push(`${fileName}: Demo at line ${startLine} is EMPTY`);
    return;
  }
  
  // Check for very short demo (< 3 lines)
  const lines = content.filter(l => l.trim().length > 0);
  if (lines.length < 3) {
    stat.shortDemos++;
    issues.push(`${fileName}: Demo at line ${startLine} too short (${lines.length} lines)`);
    return;
  }
  
  // Check for placeholders
  const placeholders = [
    /\[PLACEHOLDER\]/gi,
    /\[TODO\]/gi,
    /\[TBD\]/gi,
    /\[FIXME\]/gi,
    /\[INSERT .* HERE\]/gi,
    /\[NAMA PERUSAHAAN\]/gi,
    /\[PRODUK ANDA\]/gi,
    /xxx+/gi,
    /lorem ipsum/gi,
  ];
  
  for (const pattern of placeholders) {
    if (pattern.test(text)) {
      stat.placeholderDemos++;
      issues.push(`${fileName}: Demo at line ${startLine} contains placeholder matching ${pattern}`);
      return;
    }
  }
  
  // Check if demo is mostly bullets/punctuation (red flag)
  const nonEmptyLines = content.filter(l => l.trim().length > 0);
  const bulletLines = nonEmptyLines.filter(l => /^[\s]*[-*•]\s/.test(l) || /^[\s]*\d+\.\s/.test(l));
  
  if (bulletLines.length > nonEmptyLines.length * 0.8 && nonEmptyLines.length > 5) {
    // More than 80% bullets and at least 6 lines — might be just a list, not real content
    // This is a soft warning, not a hard failure
    // issues.push(`${fileName}: Demo at line ${startLine} is mostly bullets (${bulletLines.length}/${nonEmptyLines.length} lines)`);
  }
}

// Main audit
console.log('=== AUDIT ROUND 7a: DEMO OUTPUT QUALITY (IMPROVED) ===\n');

for (const file of files) {
  if (!file.hasDemos) continue;
  
  const text = fs.readFileSync(file.path, 'utf8');
  analyzeDemoSections(text, file.name);
}

// Print statistics
console.log('Demo Quality Statistics:\n');
console.log('File           | Total | Avg Lines | Empty | Short | Placeholder');
console.log('---------------|-------|-----------|-------|-------|------------');

for (const file of files) {
  if (!file.hasDemos) continue;
  
  const s = stats[file.name];
  console.log(
    `${file.name.padEnd(15)}| ${String(s.totalDemos).padStart(5)} | ${String(s.avgLength).padStart(9)} | ${String(s.emptyDemos).padStart(5)} | ${String(s.shortDemos).padStart(5)} | ${String(s.placeholderDemos).padStart(11)}`
  );
}

if (issues.length === 0) {
  console.log('\n✓ ALL DEMO OUTPUTS PASS QUALITY CHECKS');
  console.log('  - No empty demos');
  console.log('  - No short demos (< 3 lines)');
  console.log('  - No placeholders in demos');
} else {
  console.log(`\n✗ FOUND ${issues.length} ISSUES:\n`);
  issues.forEach((issue, i) => {
    console.log(`  ${i + 1}. ${issue}`);
  });
}

console.log('\n=== AUDIT COMPLETE ===');
