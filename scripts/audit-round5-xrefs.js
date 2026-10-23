const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const D = (f) => path.join(ROOT, 'drafts', f);

const issues = [];

// 1. P-code references in P1U automation sections
console.log('=== P1U P-code references ===');
const p1u = fs.readFileSync(D('150-prompt-umkm-ultimate.md'), 'utf8');
const p1uCodes = new Set();
for (const m of p1u.matchAll(/^### P-(\d+)\./gm)) p1uCodes.add(m[1]);
const p1uRefs = new Set();
for (const m of p1u.matchAll(/prompt\s+P-(\d+)/gi)) p1uRefs.add(m[1]);
console.log(`  P1U has ${p1uCodes.size} P-codes, references ${p1uRefs.size} unique P-codes`);
for (const ref of p1uRefs) {
  if (!p1uCodes.has(ref)) issues.push(`P1U references P-${ref} but it doesn't exist`);
}

// 2. P-code references in P2U automation sections
console.log('\n=== P2U P-code references ===');
const p2u = fs.readFileSync(D('300-prompt-copywriting-ultimate.md'), 'utf8');
const p2uCodes = new Set();
for (const m of p2u.matchAll(/^### P-(\d+)\./gm)) p2uCodes.add(m[1]);
const p2uRefs = new Set();
for (const m of p2u.matchAll(/prompt\s+P-(\d+)/gi)) p2uRefs.add(m[1]);
console.log(`  P2U has ${p2uCodes.size} P-codes, references ${p2uRefs.size} unique P-codes`);
for (const ref of p2uRefs) {
  if (!p2uCodes.has(ref)) issues.push(`P2U references P-${ref} but it doesn't exist`);
}

// 3. T-code references in P3 xlsx calendar
console.log('\n=== P3 xlsx calendar T-code references ===');
const p3xlsx = JSON.parse(fs.readFileSync(D('200-template-social-media.xlsx.json'), 'utf8'));
const calendarSheet = p3xlsx.sheets.find((s) => s.name === 'Kalender Konten');
const p3basic = fs.readFileSync(D('200-template-social-media-basic.md'), 'utf8');
const p3Codes = new Set();
for (const m of p3basic.matchAll(/^### T-(\d+)\./gm)) p3Codes.add(m[1]);
console.log(`  P3 basic has ${p3Codes.size} T-codes`);
if (calendarSheet) {
  const calRefs = new Set();
  for (const row of calendarSheet.rows) {
    const codeMatch = row[3] && row[3].match(/T-(\d+)/);
    if (codeMatch) calRefs.add(codeMatch[1]);
  }
  console.log(`  Calendar references ${calRefs.size} unique T-codes`);
  for (const ref of calRefs) {
    if (!p3Codes.has(ref)) issues.push(`P3 calendar references T-${ref} but it doesn't exist`);
  }
}

// 4. Lampiran references in P3 basic
console.log('\n=== P3 Lampiran references ===');
const p3LampiranRefs = new Set();
for (const m of p3basic.matchAll(/Lampiran\s+[A-F]/gi)) p3LampiranRefs.add(m[0].toUpperCase());
const p3LampiranSections = new Set();
for (const m of p3basic.matchAll(/^### Lampiran\s+([A-F]):/gm)) p3LampiranSections.add('LAMPiran ' + m[1]);
console.log(`  P3 basic references: ${[...p3LampiranRefs].join(', ')}`);
console.log(`  P3 basic has sections: ${[...p3LampiranSections].join(', ')}`);

// 5. Bagian references in P3
console.log('\n=== P3 Bagian references ===');
const p3BagianRefs = new Set();
for (const m of p3basic.matchAll(/Bagian\s+\d/g)) p3BagianRefs.add(m[0]);
const p3BagianSections = new Set();
for (const m of p3basic.matchAll(/^## Bagian\s+(\d):/gm)) p3BagianSections.add('Bagian ' + m[1]);
console.log(`  P3 basic references: ${[...p3BagianRefs].join(', ')}`);
console.log(`  P3 basic has sections: ${[...p3BagianSections].join(', ')}`);

// Report
if (issues.length === 0) {
  console.log('\nALL CROSS-REFERENCES VALID');
} else {
  console.log(`\n${issues.length} ISSUES:`);
  issues.forEach((i) => console.log('  ' + i));
}
