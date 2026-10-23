const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const D = (f) => path.join(ROOT, 'drafts', f);

const files = [
  '150-prompt-ai-untuk-bisnis-dan-umkm-indonesia.md',
  '150-prompt-umkm-premium.md',
  '150-prompt-umkm-ultimate.md',
  '300-prompt-ai-untuk-copywriting-dan-iklan-digital.md',
  '300-prompt-copywriting-premium.md',
  '300-prompt-copywriting-ultimate.md',
  '200-template-social-media-basic.md',
  '200-template-social-media-premium.md',
  '200-template-social-media-ultimate.md',
];

const problems = [];

for (const f of files) {
  const full = fs.readFileSync(D(f), 'utf8');
  const lines = full.split('\n');
  const label = f.slice(0, 28);

  const fences = (full.match(/^```/gm) || []).length;
  if (fences % 2 !== 0) problems.push(`${label}: ODD fence count ${fences}`);

  let inFence = false;
  let prevHeadingLevel = 0;
  const tableRows = [];

  lines.forEach((line, i) => {
    if (/^```/.test(line)) { inFence = !inFence; return; }

    if (inFence) return;

    // Heading monotonicity (outside fences only)
    const hm = line.match(/^(#{1,6}) /);
    if (hm) {
      const level = hm[1].length;
      if (prevHeadingLevel && level > prevHeadingLevel + 1) {
        problems.push(`${label}: heading skip H${prevHeadingLevel}->H${level} at line ${i + 1}: ${line.slice(0, 60)}`);
      }
      prevHeadingLevel = level;
    }

    // Table rows (outside fences)
    if (/^\s*\|.*\|\s*$/.test(line) || /^\|/.test(line)) {
      tableRows.push({ i: i + 1, line, pipes: (line.match(/\|/g) || []).length });
    }

    // Placeholders (outside fences)
    const placeholderRes = [
      [/\bTODO\b/, 'TODO'],
      [/\bTBD\b/, 'TBD'],
      [/\bFIXME\b/, 'FIXME'],
      [/\blorem ipsum\b/i, 'lorem ipsum'],
      [/\[nama placeholder\]/i, 'nama placeholder'],
      [/\bXXX\b/, 'XXX'],
      [/\.\.\.\.\.\./, '6-dot ellipsis'],
    ];
    for (const [re, tag] of placeholderRes) {
      if (re.test(line)) problems.push(`${label}: ${tag} at line ${i + 1}: ${line.slice(0, 80)}`);
    }

    // Double spaces in prose (outside fences, skip list alignment / table rows / headings)
    if (/^\||^\s*[-*] \[ \]|^#/.test(line)) return;
    const m = line.match(/\S {2,}\S/);
    if (m) problems.push(`${label}: double space at line ${i + 1}: ${line.trim().slice(0, 70)}`);
  });

  // Table block integrity
  let block = [];
  const flush = () => {
    if (block.length >= 2) {
      const counts = new Set(block.map((r) => r.pipes));
      if (counts.size > 1) problems.push(`${label}: table at line ${block[0].i} has inconsistent pipes: ${[...counts].join(',')}`);
      const hasSep = block.some((r) => /^\|[\s:|-]+\|$/.test(r.line.trim()));
      if (!hasSep) problems.push(`${label}: table at line ${block[0].i} missing separator row`);
    }
    block = [];
  };
  for (const r of tableRows) {
    if (block.length && r.i !== block[block.length - 1].i + 1) flush();
    block.push(r);
  }
  flush();

  // Mojibake
  const mojibake = full.match(/Ã©|Ã¨|â€|Â|ï¿½/g);
  if (mojibake) problems.push(`${label}: mojibake sequences: ${mojibake.length}`);
}

if (problems.length === 0) {
  console.log('ALL CLEAN');
} else {
  console.log(`${problems.length} problems:`);
  problems.forEach((p) => console.log('  ' + p));
}
