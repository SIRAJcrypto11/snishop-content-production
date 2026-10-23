const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const D = (f) => path.join(ROOT, 'drafts', f);

const products = [
  {
    name: 'P1',
    codePrefix: 'P-',
    basic: '150-prompt-ai-untuk-bisnis-dan-umkm-indonesia.md',
    premium: '150-prompt-umkm-premium.md',
    ultimate: '150-prompt-umkm-ultimate.md',
  },
  {
    name: 'P2',
    codePrefix: 'P-',
    basic: '300-prompt-ai-untuk-copywriting-dan-iklan-digital.md',
    premium: '300-prompt-copywriting-premium.md',
    ultimate: '300-prompt-copywriting-ultimate.md',
  },
  {
    name: 'P3',
    codePrefix: 'T-',
    basic: '200-template-social-media-basic.md',
    premium: '200-template-social-media-premium.md',
    ultimate: '200-template-social-media-ultimate.md',
  },
];

function extractSections(md, codePrefix) {
  const sections = new Map();
  const re = new RegExp(`^### ${codePrefix.replace('-', '\\-')}(\\d+)\\.`, 'gm');
  let match;
  const matches = [];
  while ((match = re.exec(md)) !== null) {
    matches.push({ code: match[1], index: match.index });
  }
  for (let i = 0; i < matches.length; i++) {
    const code = matches[i].code;
    if (sections.has(code)) continue; // skip duplicates (demo sections)
    const start = matches[i].index;
    const end = i + 1 < matches.length ? matches[i + 1].index : md.length;
    const text = md.slice(start, end);
    sections.set(code, text);
  }
  return sections;
}

const issues = [];

for (const p of products) {
  console.log(`\n=== ${p.name} ===`);
  const basicMd = fs.readFileSync(D(p.basic), 'utf8');
  const premiumMd = fs.readFileSync(D(p.premium), 'utf8');
  const ultimateMd = fs.readFileSync(D(p.ultimate), 'utf8');

  const basicSections = extractSections(basicMd, p.codePrefix);
  const premiumSections = extractSections(premiumMd, p.codePrefix);
  const ultimateSections = extractSections(ultimateMd, p.codePrefix);

  console.log(`  Basic: ${basicSections.size} sections`);
  console.log(`  Premium: ${premiumSections.size} sections`);
  console.log(`  Ultimate: ${ultimateSections.size} sections`);

  // Check basic ⊂ premium
  for (const [code, basicText] of basicSections) {
    const premiumText = premiumSections.get(code);
    if (!premiumText) {
      issues.push(`${p.name} ${p.codePrefix}${code}: missing in premium`);
      continue;
    }
    // Check if basic text (first 300 chars) appears in premium
    const basicHead = basicText.slice(0, 300);
    if (!premiumText.includes(basicHead)) {
      issues.push(`${p.name} ${p.codePrefix}${code}: basic head not in premium (content drift)`);
    }
  }

  // Check premium ⊂ ultimate
  for (const [code, premiumText] of premiumSections) {
    const ultimateText = ultimateSections.get(code);
    if (!ultimateText) {
      issues.push(`${p.name} ${p.codePrefix}${code}: missing in ultimate`);
      continue;
    }
    const premiumHead = premiumText.slice(0, 300);
    if (!ultimateText.includes(premiumHead)) {
      issues.push(`${p.name} ${p.codePrefix}${code}: premium head not in ultimate (content drift)`);
    }
  }
}

if (issues.length === 0) {
  console.log('\nALL TIERS IN SYNC');
} else {
  console.log(`\n${issues.length} ISSUES:`);
  issues.forEach((i) => console.log('  ' + i));
}
