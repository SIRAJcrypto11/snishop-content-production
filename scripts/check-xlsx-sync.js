const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');

const checks = [
  {
    name: 'P1',
    md: path.join(ROOT, 'drafts', '150-prompt-ai-untuk-bisnis-dan-umkm-indonesia.md'),
    xlsx: path.join(ROOT, 'drafts', '150-prompt-ai-untuk-bisnis-dan-umkm-indonesia.xlsx.json'),
    marker: '## Lampiran A',
    sheet: 'Variabel',
  },
  {
    name: 'P2',
    md: path.join(ROOT, 'drafts', '300-prompt-ai-untuk-copywriting-dan-iklan-digital.md'),
    xlsx: path.join(ROOT, 'drafts', '300-prompt-ai-untuk-copywriting-dan-iklan-digital.xlsx.json'),
    marker: '## Lampiran C',
    sheet: 'Variabel',
  },
];

function parseLampiranTable(md, marker) {
  const start = md.indexOf(marker);
  if (start < 0) throw new Error('marker not found: ' + marker);
  const chunk = md.slice(start, start + 120000);
  const rows = [];
  for (const m of chunk.matchAll(/^\| (\[[A-Za-z_ ]+\]|\{[a-z_ ]+\}) \| (.+?) \| (.+?) \|$/gm)) {
    rows.push([m[1], m[2], m[3]]);
  }
  return rows;
}

for (const c of checks) {
  const md = fs.readFileSync(c.md, 'utf8');
  const wb = JSON.parse(fs.readFileSync(c.xlsx, 'utf8'));
  const sheet = wb.sheets.find((s) => s.name === c.sheet);
  if (!sheet) { console.log(`${c.name}: sheet '${c.sheet}' NOT FOUND`); continue; }
  const lamp = parseLampiranTable(md, c.marker);
  console.log(`${c.name}: lampiran rows=${lamp.length}, xlsx rows=${sheet.rows.length}`);
  const diffs = [];
  const n = Math.max(lamp.length, sheet.rows.length);
  for (let i = 0; i < n; i++) {
    const a = lamp[i] || ['(missing)', '', ''];
    const b = sheet.rows[i] || ['(missing)', '', ''];
    if (a[0] !== b[0]) diffs.push(`row ${i + 1} token: md='${a[0]}' xlsx='${b[0]}'`);
    else if (a[1] !== b[1]) diffs.push(`row ${i + 1} (${a[0]}) arti: md='${a[1]}' xlsx='${b[1]}'`);
    else if (a[2] !== b[2]) diffs.push(`row ${i + 1} (${a[0]}) contoh: md='${a[2]}' xlsx='${b[2]}'`);
  }
  if (diffs.length === 0) console.log(`${c.name}: IN SYNC`);
  else { console.log(`${c.name}: ${diffs.length} DIFFS`); diffs.slice(0, 30).forEach((d) => console.log('  ' + d)); }
}
