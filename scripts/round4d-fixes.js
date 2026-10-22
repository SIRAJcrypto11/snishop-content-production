const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');

const workflowFixes = [
  [/### Workflow (\d+):/g, '### Alur Kerja $1:'],
  [/Sepuluh workflow/g, 'Sepuluh alur kerja'],
  [/10 workflow/g, '10 alur kerja'],
  [/\bworkflow\b/g, 'alur kerja'],
  [/\bWorkflow\b/g, 'Alur Kerja'],
];

function apply(file, fixes) {
  let content = fs.readFileSync(file, 'utf8');
  let applied = 0;
  const misses = [];
  for (const [from, to] of fixes) {
    if (from instanceof RegExp) {
      const before = content;
      content = content.replace(from, to);
      if (content !== before) applied++;
      else misses.push(String(from).slice(0, 80));
    } else if (content.includes(from)) {
      content = content.split(from).join(to);
      applied++;
    } else {
      misses.push(from.slice(0, 80));
    }
  }
  fs.writeFileSync(file, content);
  return { applied, total: fixes.length, misses };
}

for (const f of [
  path.join(ROOT, 'drafts', '300-prompt-copywriting-ultimate.md'),
  path.join(ROOT, 'scripts', 'expand-ultimate.js'),
]) {
  const r = apply(f, workflowFixes);
  console.log(`${path.basename(f)}: ${r.applied}/${r.total} applied${r.misses.length ? '  MISS: ' + r.misses.join(' | ') : ''}`);
}
