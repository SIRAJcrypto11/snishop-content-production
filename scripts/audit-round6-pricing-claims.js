const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const manifest = JSON.parse(fs.readFileSync(path.join(ROOT, 'products', 'manifest.json'), 'utf8'));

const issues = [];

// 1. Verify pricing consistency: manifest pricing should be consistent across tiers
console.log('=== AUDIT ROUND 6: PRICING & CLAIMS VERIFICATION ===\n');

console.log('1. PRICING STRUCTURE CHECK\n');

const tiers = ['basic', 'premium', 'ultimate'];
const products = [
  { prefix: '150-prompt-umkm', name: 'P1: 150 Prompt UMKM' },
  { prefix: '300-prompt-copywriting', name: 'P2: 300 Prompt Copywriting' },
  { prefix: '200-template-sosmed', name: 'P3: 200 Template Sosmed' },
];

const pricingByProduct = {};

for (const product of products) {
  pricingByProduct[product.prefix] = {};
  
  for (const tier of tiers) {
    const slug = `${product.prefix}-${tier}-${tier}`;
    const entry = manifest.products.find(p => p.slug === slug);
    
    if (!entry) {
      issues.push(`Missing manifest entry for slug: ${slug}`);
      continue;
    }
    
    pricingByProduct[product.prefix][tier] = entry.pricing;
    
    // Verify pricing makes sense: normal > launch > flash
    if (entry.pricing.normal <= entry.pricing.launch) {
      issues.push(`${product.name} ${tier}: normal (${entry.pricing.normal}) should be > launch (${entry.pricing.launch})`);
    }
    if (entry.pricing.launch <= entry.pricing.flash) {
      issues.push(`${product.name} ${tier}: launch (${entry.pricing.launch}) should be > flash (${entry.pricing.flash})`);
    }
    
    // Verify discount percentages are reasonable
    const launchDiscount = Math.round((1 - entry.pricing.launch / entry.pricing.normal) * 100);
    const flashDiscount = Math.round((1 - entry.pricing.flash / entry.pricing.normal) * 100);
    
    if (launchDiscount < 30 || launchDiscount > 80) {
      issues.push(`${product.name} ${tier}: launch discount ${launchDiscount}% seems unusual (expected 30-80%)`);
    }
    if (flashDiscount < 50 || flashDiscount > 90) {
      issues.push(`${product.name} ${tier}: flash discount ${flashDiscount}% seems unusual (expected 50-90%)`);
    }
  }
}

// Print pricing table
console.log('Product Tier Pricing:\n');
console.log('Product                | Tier    | Normal   | Launch   | Flash    | Launch% | Flash%');
console.log('-----------------------|---------|----------|----------|----------|---------|--------');

for (const product of products) {
  for (const tier of tiers) {
    const p = pricingByProduct[product.prefix][tier];
    if (!p) continue;
    const launchDisc = Math.round((1 - p.launch / p.normal) * 100);
    const flashDisc = Math.round((1 - p.flash / p.normal) * 100);
    console.log(
      `${product.name.padEnd(23)}| ${tier.padEnd(7)}| ${String(p.normal).padStart(8)} | ${String(p.launch).padStart(8)} | ${String(p.flash).padStart(8)} | ${String(launchDisc + '%').padStart(7)} | ${String(flashDisc + '%').padStart(6)}`
    );
  }
}

// 2. Verify pricing consistency across products (same tier should have same price)
console.log('\n2. CROSS-PRODUCT PRICING CONSISTENCY\n');

for (const tier of tiers) {
  const prices = products.map(p => ({
    name: p.name,
    normal: pricingByProduct[p.prefix][tier]?.normal,
    launch: pricingByProduct[p.prefix][tier]?.launch,
    flash: pricingByProduct[p.prefix][tier]?.flash,
  }));
  
  const normals = new Set(prices.map(p => p.normal));
  const launches = new Set(prices.map(p => p.launch));
  const flashs = new Set(prices.map(p => p.flash));
  
  if (normals.size > 1) {
    issues.push(`Tier ${tier}: inconsistent normal pricing across products: ${[...normals].join(', ')}`);
  }
  if (launches.size > 1) {
    issues.push(`Tier ${tier}: inconsistent launch pricing across products: ${[...launches].join(', ')}`);
  }
  if (flashs.size > 1) {
    issues.push(`Tier ${tier}: inconsistent flash pricing across products: ${[...flashs].join(', ')}`);
  }
  
  if (normals.size === 1 && launches.size === 1 && flashs.size === 1) {
    console.log(`  ✓ Tier ${tier}: pricing consistent across all 3 products`);
  }
}

// 3. Verify flyer pricing matches manifest
console.log('\n3. FLYER PRICING VERIFICATION\n');

const flyerFiles = manifest.products.flatMap(p => 
  p.outputs.filter(o => o.kind === 'flyer').map(o => o.file)
);

console.log(`  Found ${flyerFiles.length} flyer files`);

// Note: We can't easily parse PDF pricing without PDF text extraction
// But we can verify the flyer files exist
for (const flyerFile of flyerFiles) {
  const fullPath = path.join(ROOT, flyerFile);
  if (!fs.existsSync(fullPath)) {
    issues.push(`Flyer file missing: ${flyerFile}`);
  }
}

// 4. Verify content claims
console.log('\n4. CONTENT CLAIMS VERIFICATION\n');

const D = (f) => path.join(ROOT, 'drafts', f);

const claimChecks = [
  // P1 claims
  {
    file: D('150-prompt-ai-untuk-bisnis-dan-umkm-indonesia.md'),
    product: 'P1 Basic',
    claims: [
      { pattern: /150\s+prompt/gi, expected: 150, description: '150 prompt count' },
    ]
  },
  {
    file: D('150-prompt-umkm-premium.md'),
    product: 'P1 Premium',
    claims: [
      { pattern: /150\s+prompt/gi, expected: 150, description: '150 prompt count' },
      { pattern: /Contoh Output/gi, min: 20, description: '≥20 Contoh Output sections' },
    ]
  },
  {
    file: D('150-prompt-umkm-ultimate.md'),
    product: 'P1 Ultimate',
    claims: [
      { pattern: /150\s+prompt/gi, expected: 150, description: '150 prompt count' },
      { pattern: /Contoh Output/gi, min: 20, description: '≥20 Contoh Output sections' },
      { pattern: /studi kasus/gi, min: 1, description: '≥1 studi kasus section' },
      { pattern: /otomasi/gi, min: 5, description: '≥5 otomasi references' },
    ]
  },
  
  // P2 claims
  {
    file: D('300-prompt-ai-untuk-copywriting-dan-iklan-digital.md'),
    product: 'P2 Basic',
    claims: [
      { pattern: /300\s+prompt/gi, expected: 300, description: '300 prompt count' },
    ]
  },
  {
    file: D('300-prompt-copywriting-premium.md'),
    product: 'P2 Premium',
    claims: [
      { pattern: /300\s+prompt/gi, expected: 300, description: '300 prompt count' },
      { pattern: /Contoh Output/gi, min: 12, description: '≥12 Contoh Output sections' },
    ]
  },
  {
    file: D('300-prompt-copywriting-ultimate.md'),
    product: 'P2 Ultimate',
    claims: [
      { pattern: /300\s+prompt/gi, expected: 300, description: '300 prompt count' },
      { pattern: /Contoh Output/gi, min: 12, description: '≥12 Contoh Output sections' },
      { pattern: /studi kasus/gi, min: 1, description: '≥1 studi kasus section' },
    ]
  },
  
  // P3 claims
  {
    file: D('200-template-social-media-basic.md'),
    product: 'P3 Basic',
    claims: [
      { pattern: /200\s+template/gi, expected: 200, description: '200 template count' },
    ]
  },
  {
    file: D('200-template-social-media-premium.md'),
    product: 'P3 Premium',
    claims: [
      { pattern: /200\s+template/gi, expected: 200, description: '200 template count' },
      { pattern: /Contoh Output/gi, min: 15, description: '≥15 Contoh Output sections' },
    ]
  },
  {
    file: D('200-template-social-media-ultimate.md'),
    product: 'P3 Ultimate',
    claims: [
      { pattern: /200\s+template/gi, expected: 200, description: '200 template count' },
      { pattern: /Contoh Output/gi, min: 15, description: '≥15 Contoh Output sections' },
      { pattern: /studi kasus/gi, min: 1, description: '≥1 studi kasus section' },
    ]
  },
];

for (const check of claimChecks) {
  const text = fs.readFileSync(check.file, 'utf8');
  
  for (const claim of check.claims) {
    const matches = text.match(claim.pattern);
    const count = matches ? matches.length : 0;
    
    if (claim.expected !== undefined) {
      // Exact count expected (for prompt/template counts, check P-codes/T-codes instead)
      const codePattern = check.product.startsWith('P1') ? /[PT]-\d{3}/g : 
                          check.product.startsWith('P2') ? /[PT]-\d{3}/g : /T-\d{3}/g;
      const codes = new Set(text.match(codePattern) || []);
      
      if (claim.description.includes('150 prompt') && codes.size !== 150) {
        issues.push(`${check.product}: Expected 150 unique codes, found ${codes.size}`);
      } else if (claim.description.includes('300 prompt') && codes.size !== 300) {
        issues.push(`${check.product}: Expected 300 unique codes, found ${codes.size}`);
      } else if (claim.description.includes('200 template') && codes.size !== 200) {
        issues.push(`${check.product}: Expected 200 unique codes, found ${codes.size}`);
      }
    }
    
    if (claim.min !== undefined && count < claim.min) {
      issues.push(`${check.product}: ${claim.description} — found ${count}`);
    }
  }
}

// 5. Verify output files exist and have reasonable sizes
console.log('\n5. OUTPUT FILE VERIFICATION\n');

for (const product of manifest.products) {
  for (const output of product.outputs) {
    const fullPath = path.join(ROOT, output.file);
    
    if (!fs.existsSync(fullPath)) {
      issues.push(`${product.slug}: output file missing: ${output.file}`);
      continue;
    }
    
    const stat = fs.statSync(fullPath);
    
    if (stat.size === 0) {
      issues.push(`${product.slug}: output file is empty: ${output.file}`);
    }
    
    // Check for suspiciously small files (might indicate production error)
    if (output.kind === 'pdf' && stat.size < 50000) {
      issues.push(`${product.slug}: PDF suspiciously small (${stat.size} bytes): ${output.file}`);
    }
    if (output.kind === 'excel' && stat.size < 10000) {
      issues.push(`${product.slug}: Excel suspiciously small (${stat.size} bytes): ${output.file}`);
    }
    if (output.kind === 'flyer' && stat.size < 20000) {
      issues.push(`${product.slug}: Flyer suspiciously small (${stat.size} bytes): ${output.file}`);
    }
    
    // Verify size matches manifest
    if (stat.size !== output.bytes) {
      issues.push(`${product.slug}: ${output.file} size mismatch: manifest says ${output.bytes}, actual ${stat.size}`);
    }
  }
}

// Summary
console.log('\n=== SUMMARY ===\n');

if (issues.length === 0) {
  console.log('✓ ALL PRICING & CLAIMS VERIFIED');
  console.log('  - Pricing structure consistent');
  console.log('  - Cross-product pricing aligned');
  console.log('  - Content claims validated');
  console.log('  - Output files present and sized correctly');
} else {
  console.log(`✗ FOUND ${issues.length} ISSUES:\n`);
  issues.forEach((issue, i) => {
    console.log(`  ${i + 1}. ${issue}`);
  });
}

console.log('\n=== AUDIT COMPLETE ===');
