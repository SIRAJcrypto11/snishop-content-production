const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const manuscriptPath = path.join(ROOT, 'drafts', '200-template-social-media-basic.md');
const partsDir = path.join(ROOT, 'drafts', 'parts');

const replacements = [
  ['[Continuing with T-006 through T-040...]', 'p3-batch-1-planning.md'],
  ['[Continuing with T-046 through T-080...]', 'p3-batch-2-caption.md'],
  ['[Continuing with T-086 through T-120...]', 'p3-batch-3-visual.md'],
  ['[Continuing with T-126 through T-160...]', 'p3-batch-4-engagement.md'],
  ['[Continuing with T-166 through T-200...]', 'p3-batch-5-analytics.md'],
];

let md = fs.readFileSync(manuscriptPath, 'utf8');

for (const [placeholder, file] of replacements) {
  let content = fs.readFileSync(path.join(partsDir, file), 'utf8').trim();
  if (!content.endsWith('---')) content += '\n\n---';
  if (!md.includes(placeholder)) throw new Error(`Placeholder not found: ${placeholder}`);
  md = md.replace(placeholder, content);
  console.log(`Merged ${file} (replaced "${placeholder}")`);
}

fs.writeFileSync(manuscriptPath, md);

const headers = (md.match(/^### T-\d+\./gm) || []).length;
const continuing = (md.match(/Continuing/g) || []).length;
console.log(`Total T-headers: ${headers}`);
console.log(`Remaining placeholders: ${continuing}`);

const numbers = md.match(/^### T-(\d+)\./gm)
  .map((h) => Number(h.match(/\d+/)[0]))
  .sort((a, b) => a - b);
const missing = [];
for (let i = 1; i <= 200; i++) {
  if (!numbers.includes(i)) missing.push(i);
}
console.log(missing.length === 0 ? 'All 200 template numbers present (T-001 to T-200)' : `MISSING: ${missing.join(', ')}`);
const dupes = numbers.filter((n, i) => numbers.indexOf(n) !== i);
if (dupes.length) console.log(`DUPLICATES: ${[...new Set(dupes)].join(', ')}`);
