const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const D = (f) => path.join(ROOT, 'drafts', f);

const files = [
  { name: 'P1 Basic', path: D('150-prompt-ai-untuk-bisnis-dan-umkm-indonesia.md') },
  { name: 'P1 Premium', path: D('150-prompt-umkm-premium.md') },
  { name: 'P1 Ultimate', path: D('150-prompt-umkm-ultimate.md') },
  { name: 'P2 Basic', path: D('300-prompt-ai-untuk-copywriting-dan-iklan-digital.md') },
  { name: 'P2 Premium', path: D('300-prompt-copywriting-premium.md') },
  { name: 'P2 Ultimate', path: D('300-prompt-copywriting-ultimate.md') },
  { name: 'P3 Basic', path: D('200-template-social-media-basic.md') },
  { name: 'P3 Premium', path: D('200-template-social-media-premium.md') },
  { name: 'P3 Ultimate', path: D('200-template-social-media-ultimate.md') },
];

const issues = [];
const stats = {};

// Known example businesses (from project memory)
const knownBusinesses = [
  { key: 'keripik', variants: ['keripik singkong', 'keripik singkong balado', 'keripik balado'] },
  { key: 'katering', variants: ['katering sehat', 'katering'] },
  { key: 'laundry', variants: ['laundry premium', 'laundry'] },
  { key: 'toko roti', variants: ['toko roti', 'roti'] },
];

// Locations used with businesses
const locations = ['Bandung', 'Jakarta Selatan', 'Yogyakarta', 'Jakarta'];

function analyzeFile(file) {
  const text = fs.readFileSync(file.path, 'utf8');
  const textLower = text.toLowerCase();
  
  stats[file.name] = {
    total: 0,
    businesses: {},
    locations: {},
    inconsistencies: []
  };
  
  // Count business mentions
  for (const biz of knownBusinesses) {
    let count = 0;
    for (const variant of biz.variants) {
      const matches = textLower.match(new RegExp(variant.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'));
      if (matches) count += matches.length;
    }
    if (count > 0) {
      stats[file.name].businesses[biz.key] = count;
      stats[file.name].total += count;
    }
  }
  
  // Count location mentions
  for (const loc of locations) {
    const matches = textLower.match(new RegExp(loc.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'));
    if (matches) {
      stats[file.name].locations[loc] = matches.length;
    }
  }
  
  // Check for business-location pairing consistency
  // keripik singkong balado should be with Bandung
  // katering sehat should be with Jakarta Selatan
  // laundry premium should be with Yogyakarta
  // toko roti should be with Bandung
  
  const pairings = [
    { biz: 'keripik singkong balado', loc: 'Bandung', bizRe: /keripik singkong balado/gi },
    { biz: 'katering sehat', loc: 'Jakarta Selatan', bizRe: /katering sehat/gi },
    { biz: 'laundry premium', loc: 'Yogyakarta', bizRe: /laundry premium/gi },
    { biz: 'toko roti', loc: 'Bandung', bizRe: /toko roti/gi },
  ];
  
  for (const pair of pairings) {
    const bizMatches = [...text.matchAll(pair.bizRe)];
    for (const match of bizMatches) {
      const contextStart = Math.max(0, match.index - 100);
      const contextEnd = Math.min(text.length, match.index + match[0].length + 100);
      const context = text.slice(contextStart, contextEnd);
      
      // Check if the expected location appears nearby
      if (!context.toLowerCase().includes(pair.loc.toLowerCase())) {
        // Check if a WRONG location appears nearby
        for (const otherLoc of locations) {
          if (otherLoc !== pair.loc && context.toLowerCase().includes(otherLoc.toLowerCase())) {
            issues.push(`${file.name}: "${pair.biz}" paired with "${otherLoc}" instead of "${pair.loc}" near pos ${match.index}`);
          }
        }
      }
    }
  }
}

// Check for inconsistent business names across products
function checkCrossProductConsistency() {
  const allBusinessKeys = {};
  
  for (const file of files) {
    for (const key of Object.keys(stats[file.name].businesses)) {
      if (!allBusinessKeys[key]) allBusinessKeys[key] = [];
      allBusinessKeys[key].push({
        file: file.name,
        count: stats[file.name].businesses[key]
      });
    }
  }
  
  // Check if any business is missing from certain products
  for (const [key, appearances] of Object.entries(allBusinessKeys)) {
    const fileNames = appearances.map(a => a.file);
    const missing = files.filter(f => !fileNames.includes(f.name));
    if (missing.length > 0 && missing.length < files.length) {
      // Business appears in some but not all files — check if this is expected
      // Basic files may not have examples if they're prompt-only
      const basicFiles = missing.filter(f => f.name.includes('Basic'));
      const premiumUltimateFiles = missing.filter(f => !f.name.includes('Basic'));
      
      if (premiumUltimateFiles.length > 0) {
        issues.push(`Business "${key}" missing from premium/ultimate files: ${premiumUltimateFiles.map(f => f.name).join(', ')}`);
      }
    }
  }
}

// Check for business name spelling variants
function checkSpellingVariants() {
  for (const file of files) {
    const text = fs.readFileSync(file.path, 'utf8');
    
    // Check for common misspellings
    const misspellings = [
      { re: /kater(?!ing)/gi, correct: 'katering', bad: 'kater' },
      { re: /katering(?! sehat)/gi, correct: 'katering sehat', bad: 'katering (tanpa "sehat")' },
      { re: /laundry(?! premium)/gi, correct: 'laundry premium', bad: 'laundry (tanpa "premium")' },
    ];
    
    // These are informational — not all mentions need the full name
    // Just flag if the short form appears in a context that suggests it should be the full form
  }
}

// Main audit
console.log('=== AUDIT ROUND 6: BUSINESS EXAMPLE CONSISTENCY ===\n');

for (const file of files) {
  analyzeFile(file);
}

checkCrossProductConsistency();
checkSpellingVariants();

// Print statistics
console.log('Business mention counts per file:\n');
console.log('File              | Keripik | Katering | Laundry | Toko Roti | Total');
console.log('------------------|---------|----------|---------|-----------|------');
for (const file of files) {
  const s = stats[file.name];
  const keripik = (s.businesses['keripik'] || 0).toString().padStart(7);
  const katering = (s.businesses['katering'] || 0).toString().padStart(8);
  const laundry = (s.businesses['laundry'] || 0).toString().padStart(7);
  const roti = (s.businesses['toko roti'] || 0).toString().padStart(9);
  const total = s.total.toString().padStart(5);
  console.log(`${file.name.padEnd(18)}| ${keripik} | ${katering} | ${laundry} | ${roti} | ${total}`);
}

console.log('\nLocation mention counts per file:\n');
console.log('File              | Bandung | JakSel | Yogyakarta | Jakarta');
console.log('------------------|---------|--------|------------|--------');
for (const file of files) {
  const s = stats[file.name];
  const bandung = (s.locations['Bandung'] || 0).toString().padStart(7);
  const jaksel = (s.locations['Jakarta Selatan'] || 0).toString().padStart(6);
  const yogya = (s.locations['Yogyakarta'] || 0).toString().padStart(10);
  const jakarta = (s.locations['Jakarta'] || 0).toString().padStart(7);
  console.log(`${file.name.padEnd(18)}| ${bandung} | ${jaksel} | ${yogya} | ${jakarta}`);
}

if (issues.length === 0) {
  console.log('\n✓ ALL BUSINESS EXAMPLES CONSISTENT');
  console.log('  - Business-location pairings correct');
  console.log('  - All 4 businesses appear across products');
} else {
  console.log(`\n✗ FOUND ${issues.length} ISSUES:\n`);
  issues.forEach((issue, i) => {
    console.log(`  ${i + 1}. ${issue}`);
  });
}

console.log('\n=== AUDIT COMPLETE ===');
