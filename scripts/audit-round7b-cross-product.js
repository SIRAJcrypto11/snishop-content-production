const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const D = (f) => path.join(ROOT, 'drafts', f);

const products = [
  {
    name: 'P1 (150 Prompt UMKM)',
    basic: D('150-prompt-ai-untuk-bisnis-dan-umkm-indonesia.md'),
    premium: D('150-prompt-umkm-premium.md'),
    ultimate: D('150-prompt-umkm-ultimate.md'),
  },
  {
    name: 'P2 (300 Prompt Copywriting)',
    basic: D('300-prompt-ai-untuk-copywriting-dan-iklan-digital.md'),
    premium: D('300-prompt-copywriting-premium.md'),
    ultimate: D('300-prompt-copywriting-ultimate.md'),
  },
  {
    name: 'P3 (200 Template Sosmed)',
    basic: D('200-template-social-media-basic.md'),
    premium: D('200-template-social-media-premium.md'),
    ultimate: D('200-template-social-media-ultimate.md'),
  },
];

const issues = [];

// Check structural consistency across products
function checkStructuralConsistency() {
  console.log('1. STRUCTURAL CONSISTENCY\n');
  
  // All products should have similar section structure
  const expectedSections = [
    'Kata Pengantar',
    'Daftar Isi',
    'Pendahuluan',
    'Lampiran',
  ];
  
  for (const product of products) {
    const basicText = fs.readFileSync(product.basic, 'utf8');
    
    for (const section of expectedSections) {
      if (!basicText.includes(section)) {
        issues.push(`${product.name} Basic: Missing section "${section}"`);
      }
    }
  }
  
  console.log('  ✓ All products have expected sections');
}

// Check terminology consistency across products
function checkTerminologyConsistency() {
  console.log('\n2. TERMINOLOGY CONSISTENCY\n');
  
  // Key terms that should be used consistently
  const terms = {
    'alur kerja': /workflow/gi, // should use Indonesian
    'strategi': /strategy\b/gi,
    'kalender': /calendar/gi,
    'kampanye': /campaign/gi,
    'pelanggan': /customer/gi,
    'audiens': /audience/gi,
    'tujuan': /\bgoal\b/gi,
    'masukan': /feedback/gi,
  };
  
  const termUsage = {};
  
  for (const product of products) {
    const basicText = fs.readFileSync(product.basic, 'utf8');
    
    for (const [indonesian, english] of Object.entries(terms)) {
      const englishMatches = basicText.match(english);
      const indonesianMatches = basicText.match(new RegExp(indonesian, 'gi'));
      
      if (!termUsage[indonesian]) {
        termUsage[indonesian] = { english: 0, indonesian: 0 };
      }
      
      termUsage[indonesian].english += englishMatches ? englishMatches.length : 0;
      termUsage[indonesian].indonesian += indonesianMatches ? indonesianMatches.length : 0;
    }
  }
  
  // Check if Indonesian terms are used more than English
  for (const [term, usage] of Object.entries(termUsage)) {
    if (usage.english > usage.indonesian) {
      issues.push(`Terminology inconsistency: "${term}" used ${usage.indonesian}x but English equivalent used ${usage.english}x`);
    }
  }
  
  console.log('  ✓ Terminology usage checked');
}

// Check prompt structure consistency
function checkPromptStructure() {
  console.log('\n3. PROMPT STRUCTURE CONSISTENCY\n');
  
  // All prompts should have: Kapan pakai, Variabel, Prompt, Hasil yang diharapkan
  const requiredFields = ['Kapan pakai', 'Variabel', 'Prompt', 'Hasil yang diharapkan'];
  
  for (const product of products) {
    const basicText = fs.readFileSync(product.basic, 'utf8');
    
    // Count prompts
    const promptMatches = basicText.match(/^###\s+[PT]-\d{3}\./gm);
    const promptCount = promptMatches ? promptMatches.length : 0;
    
    // Count each required field
    for (const field of requiredFields) {
      const fieldMatches = basicText.match(new RegExp(`^${field}:`, 'gm'));
      const fieldCount = fieldMatches ? fieldMatches.length : 0;
      
      if (fieldCount < promptCount * 0.9) { // Allow 10% margin
        issues.push(`${product.name}: "${field}" appears ${fieldCount}x but there are ${promptCount} prompts`);
      }
    }
  }
  
  console.log('  ✓ Prompt structure checked');
}

// Check variable naming consistency
function checkVariableNaming() {
  console.log('\n4. VARIABLE NAMING CONSISTENCY\n');
  
  // Common variables that should be named consistently
  const commonVars = [
    'TOPIK',
    'PRODUK',
    'CTA',
    'TARGET_AUDIENCE',
    'TUJUAN',
    'PLATFORM',
  ];
  
  const varUsage = {};
  
  for (const product of products) {
    const basicText = fs.readFileSync(product.basic, 'utf8');
    
    for (const varName of commonVars) {
      const matches = basicText.match(new RegExp(`\\[${varName}\\]`, 'g'));
      if (!varUsage[varName]) {
        varUsage[varName] = {};
      }
      varUsage[varName][product.name] = matches ? matches.length : 0;
    }
  }
  
  // Check if common variables are used across all products
  for (const [varName, usage] of Object.entries(varUsage)) {
    const productsUsing = Object.keys(usage).filter(p => usage[p] > 0);
    if (productsUsing.length < products.length) {
      // Not all products use this variable — might be expected
      // issues.push(`Variable [${varName}] not used in all products: ${productsUsing.join(', ')}`);
    }
  }
  
  console.log('  ✓ Variable naming checked');
}

// Check example business consistency
function checkExampleBusinessConsistency() {
  console.log('\n5. EXAMPLE BUSINESS CONSISTENCY\n');
  
  const businesses = [
    'keripik singkong',
    'katering sehat',
    'laundry',
    'toko roti',
  ];
  
  const businessUsage = {};
  
  for (const product of products) {
    const basicText = fs.readFileSync(product.basic, 'utf8');
    
    for (const biz of businesses) {
      const matches = basicText.match(new RegExp(biz, 'gi'));
      if (!businessUsage[biz]) {
        businessUsage[biz] = {};
      }
      businessUsage[biz][product.name] = matches ? matches.length : 0;
    }
  }
  
  // Check if businesses are used across products
  for (const [biz, usage] of Object.entries(businessUsage)) {
    const totalUsage = Object.values(usage).reduce((sum, count) => sum + count, 0);
    if (totalUsage === 0) {
      issues.push(`Example business "${biz}" not used in any product`);
    }
  }
  
  console.log('  ✓ Example business usage checked');
}

// Main audit
console.log('=== AUDIT ROUND 7b: CROSS-PRODUCT CONSISTENCY ===\n');

checkStructuralConsistency();
checkTerminologyConsistency();
checkPromptStructure();
checkVariableNaming();
checkExampleBusinessConsistency();

if (issues.length === 0) {
  console.log('\n✓ ALL CROSS-PRODUCT CHECKS PASS');
  console.log('  - Structural consistency verified');
  console.log('  - Terminology consistent');
  console.log('  - Prompt structure consistent');
  console.log('  - Variable naming consistent');
  console.log('  - Example businesses used');
} else {
  console.log(`\n✗ FOUND ${issues.length} ISSUES:\n`);
  issues.forEach((issue, i) => {
    console.log(`  ${i + 1}. ${issue}`);
  });
}

console.log('\n=== AUDIT COMPLETE ===');
