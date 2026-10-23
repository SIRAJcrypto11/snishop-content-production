const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const D = (f) => path.join(ROOT, 'drafts', f);

const issues = [];

console.log('=== AUDIT ROUND 6: DOCUMENTATION ACCURACY ===\n');

// 1. Check README exists and has required sections
console.log('1. README VERIFICATION\n');

const readmePath = path.join(ROOT, 'README.md');
if (!fs.existsSync(readmePath)) {
  issues.push('README.md not found at project root');
} else {
  const readme = fs.readFileSync(readmePath, 'utf8');
  
  const requiredSections = [
    { pattern: /#.*SNISHOP/i, description: 'Project title' },
    { pattern: /##.*Deskripsi|##.*Description/i, description: 'Description section' },
    { pattern: /##.*Produk|##.*Products/i, description: 'Products section' },
    { pattern: /##.*Cara.*Pakai|##.*Usage/i, description: 'Usage section' },
    { pattern: /##.*Instalasi|##.*Installation/i, description: 'Installation section' },
  ];
  
  for (const section of requiredSections) {
    if (!section.pattern.test(readme)) {
      issues.push(`README missing: ${section.description}`);
    }
  }
  
  // Check for 9 products mentioned
  const productMentions = readme.match(/150.*prompt|300.*prompt|200.*template/gi) || [];
  if (productMentions.length < 3) {
    issues.push(`README should mention all 3 product lines (found ${productMentions.length})`);
  }
  
  // Check for tier mentions
  const tierMentions = readme.match(/basic|premium|ultimate/gi) || [];
  if (tierMentions.length < 3) {
    issues.push(`README should mention all 3 tiers (found ${tierMentions.length})`);
  }
  
  console.log(`  ✓ README exists (${readme.length} chars)`);
  console.log(`  ✓ Found ${productMentions.length} product mentions`);
  console.log(`  ✓ Found ${tierMentions.length} tier mentions`);
}

// 2. Check Lampiran sections match actual content
console.log('\n2. LAMPIRAN SECTION VERIFICATION\n');

const lampiranChecks = [
  {
    file: D('150-prompt-ai-untuk-bisnis-dan-umkm-indonesia.md'),
    product: 'P1 Basic',
    expectedLampiran: ['A', 'B', 'C'],
  },
  {
    file: D('150-prompt-umkm-premium.md'),
    product: 'P1 Premium',
    expectedLampiran: ['A', 'B', 'C', 'D'],
  },
  {
    file: D('150-prompt-umkm-ultimate.md'),
    product: 'P1 Ultimate',
    expectedLampiran: ['A', 'B', 'C', 'D', 'E', 'F'],
  },
  {
    file: D('300-prompt-ai-untuk-copywriting-dan-iklan-digital.md'),
    product: 'P2 Basic',
    expectedLampiran: ['A', 'B', 'C'],
  },
  {
    file: D('300-prompt-copywriting-premium.md'),
    product: 'P2 Premium',
    expectedLampiran: ['A', 'B', 'C', 'D'],
  },
  {
    file: D('300-prompt-copywriting-ultimate.md'),
    product: 'P2 Ultimate',
    expectedLampiran: ['A', 'B', 'C', 'D', 'E', 'F'],
  },
  {
    file: D('200-template-social-media-basic.md'),
    product: 'P3 Basic',
    expectedLampiran: ['A', 'B', 'C', 'D', 'E', 'F'],
  },
  {
    file: D('200-template-social-media-premium.md'),
    product: 'P3 Premium',
    expectedLampiran: ['A', 'B', 'C', 'D', 'E', 'F'],
  },
  {
    file: D('200-template-social-media-ultimate.md'),
    product: 'P3 Ultimate',
    expectedLampiran: ['A', 'B', 'C', 'D', 'E', 'F'],
  },
];

for (const check of lampiranChecks) {
  const text = fs.readFileSync(check.file, 'utf8');
  
  // Find all Lampiran sections
  const lampiranPattern = /##\s+Lampiran\s+([A-Z])[:\s]/gi;
  const matches = [...text.matchAll(lampiranPattern)];
  const foundLampiran = matches.map(m => m[1]);
  
  // Check if all expected lampiran are present
  for (const expected of check.expectedLampiran) {
    if (!foundLampiran.includes(expected)) {
      issues.push(`${check.product}: Missing Lampiran ${expected}`);
    }
  }
  
  // Check for unexpected lampiran
  for (const found of foundLampiran) {
    if (!check.expectedLampiran.includes(found)) {
      issues.push(`${check.product}: Unexpected Lampiran ${found} (expected: ${check.expectedLampiran.join(', ')})`);
    }
  }
  
  console.log(`  ${check.product}: Found Lampiran ${foundLampiran.join(', ')}`);
}

// 3. Check Bagian sections in P3
console.log('\n3. BAGIAN SECTION VERIFICATION (P3)\n');

const p3Files = [
  { file: D('200-template-social-media-basic.md'), product: 'P3 Basic' },
  { file: D('200-template-social-media-premium.md'), product: 'P3 Premium' },
  { file: D('200-template-social-media-ultimate.md'), product: 'P3 Ultimate' },
];

for (const p3 of p3Files) {
  const text = fs.readFileSync(p3.file, 'utf8');
  
  const bagianPattern = /##\s+Bagian\s+(\d+)[:\s]/gi;
  const matches = [...text.matchAll(bagianPattern)];
  const foundBagian = matches.map(m => parseInt(m[1])).sort((a, b) => a - b);
  
  const expectedBagian = [1, 2, 3, 4, 5];
  
  for (const expected of expectedBagian) {
    if (!foundBagian.includes(expected)) {
      issues.push(`${p3.product}: Missing Bagian ${expected}`);
    }
  }
  
  console.log(`  ${p3.product}: Found Bagian ${foundBagian.join(', ')}`);
}

// 4. Check variable glossary sections
console.log('\n4. VARIABLE GLOSSARY VERIFICATION\n');

const glossaryChecks = [
  {
    file: D('150-prompt-ai-untuk-bisnis-dan-umkm-indonesia.md'),
    product: 'P1 Basic',
    expectedVars: 13,
    tokenFormat: 'snake_case',
  },
  {
    file: D('300-prompt-ai-untuk-copywriting-dan-iklan-digital.md'),
    product: 'P2 Basic',
    expectedVars: 91,
    tokenFormat: 'UPPER_SNAKE',
  },
  {
    file: D('200-template-social-media-basic.md'),
    product: 'P3 Basic',
    expectedVars: 35,
    tokenFormat: 'UPPER_SNAKE',
  },
];

for (const check of glossaryChecks) {
  const text = fs.readFileSync(check.file, 'utf8');
  
  // Find variable glossary section (usually in Lampiran C or F)
  const glossaryPattern = check.product.startsWith('P1') ? 
    /##\s+Lampiran\s+C[:\s].*?Variabel\s+Baku/is :
    check.product.startsWith('P2') ?
    /##\s+Lampiran\s+C[:\s].*?Variabel\s+Baku/is :
    /##\s+Lampiran\s+F[:\s].*?Variabel\s+Baku/is;
  
  const glossaryMatch = text.match(glossaryPattern);
  
  if (!glossaryMatch) {
    issues.push(`${check.product}: Could not find variable glossary section`);
    continue;
  }
  
  const glossary = glossaryMatch[0];
  
  // Count variable definitions (lines with {VAR_NAME} or [VAR_NAME])
  const varPattern = check.tokenFormat === 'snake_case' ? 
    /\{[a-z_]+\}/g : /\[[A-Z_]+\]/g;
  const vars = glossary.match(varPattern) || [];
  const uniqueVars = new Set(vars);
  
  console.log(`  ${check.product}: Found ${uniqueVars.size} unique variables (expected ~${check.expectedVars})`);
  
  if (Math.abs(uniqueVars.size - check.expectedVars) > check.expectedVars * 0.2) {
    issues.push(`${check.product}: Variable count ${uniqueVars.size} deviates significantly from expected ${check.expectedVars}`);
  }
}

// 5. Check cross-references between sections
console.log('\n5. CROSS-REFERENCE VERIFICATION\n');

const xrefChecks = [
  {
    file: D('150-prompt-umkm-ultimate.md'),
    product: 'P1 Ultimate',
    refs: [
      { pattern: /Lampiran\s+[A-F]/g, description: 'Lampiran references' },
      { pattern: /Bagian\s+\d/g, description: 'Bagian references' },
    ],
  },
  {
    file: D('300-prompt-copywriting-ultimate.md'),
    product: 'P2 Ultimate',
    refs: [
      { pattern: /Lampiran\s+[A-F]/g, description: 'Lampiran references' },
      { pattern: /P-\d{3}/g, description: 'P-code references' },
    ],
  },
  {
    file: D('200-template-social-media-ultimate.md'),
    product: 'P3 Ultimate',
    refs: [
      { pattern: /Lampiran\s+[A-F]/g, description: 'Lampiran references' },
      { pattern: /Bagian\s+\d/g, description: 'Bagian references' },
      { pattern: /T-\d{3}/g, description: 'T-code references' },
    ],
  },
];

for (const check of xrefChecks) {
  const text = fs.readFileSync(check.file, 'utf8');
  
  for (const ref of check.refs) {
    const matches = text.match(ref.pattern) || [];
    if (matches.length === 0) {
      issues.push(`${check.product}: No ${ref.description} found`);
    } else {
      console.log(`  ${check.product}: Found ${matches.length} ${ref.description}`);
    }
  }
}

// 6. Check for orphaned references (references to sections that don't exist)
console.log('\n6. ORPHANED REFERENCE CHECK\n');

for (const check of lampiranChecks) {
  const text = fs.readFileSync(check.file, 'utf8');
  
  // Find all "see Lampiran X" or "lihat Lampiran X" references
  const refPattern = /(?:lihat|see|refer to)\s+Lampiran\s+([A-Z])/gi;
  const refs = [...text.matchAll(refPattern)];
  
  for (const ref of refs) {
    const lampiranLetter = ref[1];
    
    // Check if this Lampiran actually exists in the file
    const lampiranExists = new RegExp(`##\\s+Lampiran\\s+${lampiranLetter}[:\\s]`, 'i').test(text);
    
    if (!lampiranExists) {
      issues.push(`${check.product}: References Lampiran ${lampiranLetter} but it doesn't exist`);
    }
  }
}

// Summary
console.log('\n=== SUMMARY ===\n');

if (issues.length === 0) {
  console.log('✓ ALL DOCUMENTATION CHECKS PASS');
  console.log('  - README complete');
  console.log('  - Lampiran sections match expectations');
  console.log('  - Bagian sections present (P3)');
  console.log('  - Variable glossaries accurate');
  console.log('  - Cross-references valid');
  console.log('  - No orphaned references');
} else {
  console.log(`✗ FOUND ${issues.length} DOCUMENTATION ISSUES:\n`);
  issues.forEach((issue, i) => {
    console.log(`  ${i + 1}. ${issue}`);
  });
}

console.log('\n=== AUDIT COMPLETE ===');
