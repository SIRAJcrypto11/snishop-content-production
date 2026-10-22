const fs = require('fs');

const files = [
  ['drafts/150-prompt-umkm-premium.md', 'P', 20],
  ['drafts/150-prompt-umkm-ultimate.md', 'P', 20],
  ['drafts/300-prompt-copywriting-premium.md', 'P', 12],
  ['drafts/300-prompt-copywriting-ultimate.md', 'P', 12],
  ['drafts/200-template-social-media-premium.md', 'T', 15],
  ['drafts/200-template-social-media-ultimate.md', 'T', 15],
];

for (const [file, kind, expected] of files) {
  const lines = fs.readFileSync(file, 'utf8').split(/\r?\n/);
  const seen = new Set();
  let marked = 0;
  const headerRe = new RegExp(`^### ${kind}-(\\d{3})\\. (.+)$`);
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(headerRe);
    if (!m) continue;
    const code = `${kind}-${m[1]}`;
    if (seen.has(code)) {
      lines[i] = `### ${code}. ${m[2]} (Contoh Output)`;
      marked++;
    } else {
      seen.add(code);
    }
  }
  if (marked !== expected) {
    console.log(`${file}: MISMATCH marked=${marked} expected=${expected} — NOT saved`);
    continue;
  }
  fs.writeFileSync(file, lines.join('\n'));
  console.log(`${file}: ${marked} demo headers marked`);
}
