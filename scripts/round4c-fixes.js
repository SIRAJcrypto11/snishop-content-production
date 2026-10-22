const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const D = (f) => path.join(ROOT, 'drafts', f);

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

const workflowFixes = [
  [/### Workflow (\d+):/g, '### Alur Kerja $1:'],
  [/Sepuluh workflow/g, 'Sepuluh alur kerja'],
  [/10 workflow/g, '10 alur kerja'],
  [/\bworkflow\b/g, 'alur kerja'],
  [/\bWorkflow\b/g, 'Alur Kerja'],
];

const p2Fixes = [
  ['Thank you page dengan pesan personal dan next step.', 'Halaman ucapan terima kasih dengan pesan personal dan langkah berikutnya.'],
];

const targets = [
  D('150-prompt-umkm-ultimate.md'),
  path.join(ROOT, 'scripts', 'build-p1-ultimate.js'),
  path.join(ROOT, 'scripts', 'build-p3-ultimate.js'),
];

for (const f of targets) {
  const r = apply(f, workflowFixes);
  console.log(`${path.basename(f)}: ${r.applied}/${r.total} applied${r.misses.length ? '  MISS: ' + r.misses.join(' | ') : ''}`);
}

for (const f of [
  D('300-prompt-ai-untuk-copywriting-dan-iklan-digital.md'),
  D('300-prompt-copywriting-premium.md'),
  D('300-prompt-copywriting-ultimate.md'),
]) {
  const r = apply(f, p2Fixes);
  console.log(`${path.basename(f)}: ${r.applied}/${r.total} applied${r.misses.length ? '  MISS: ' + r.misses.join(' | ') : ''}`);
}
