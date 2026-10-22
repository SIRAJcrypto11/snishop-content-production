// Round 4 audit: every token used in prompts must be documented (baku lampiran OR inline desc)
const fs = require('fs');

function extractLampiranStart(md, marker) {
  const i = md.indexOf(marker);
  return i < 0 ? md.length : i;
}

function audit({ file, tokenRe, bakuRowRe, bodyStartMarker, lampiranMarker, descRe, sections }) {
  const md = fs.readFileSync(file, 'utf8');
  const lampiranIdx = extractLampiranStart(md, lampiranMarker);
  const body = lampiranIdx > 0 ? md.slice(0, lampiranIdx) : md;
  const lampiran = md.slice(lampiranIdx);

  const baku = new Set();
  for (const m of lampiran.matchAll(bakuRowRe)) baku.add(m[1].replace(/^[{[]/, '').replace(/[}\]]$/, ''));

  // split body into sections (prompt/template chunks)
  const used = new Map(); // token -> occurrences
  for (const m of body.matchAll(tokenRe)) {
    const tok = m[1] || m[0];
    if (!used.has(tok)) used.set(tok, []);
    used.get(tok).push(m.index);
  }

  const missing = [];
  for (const [tok] of used) {
    if (baku.has(tok)) continue;
    const re = new RegExp('^- [\\[{]' + tok.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '[\\]}]:', 'm');
    if (!re.test(body)) missing.push(tok);
  }

  const unusedBaku = [...baku].filter((t) => !used.has(t));

  console.log(`\n=== ${file} ===`);
  console.log(`baku (lampiran): ${baku.size}, tokens used in body: ${used.size}`);
  console.log(`baku never used in body: ${unusedBaku.length ? unusedBaku.join(', ') : '(none)'}`);
  console.log(`used but NOT documented (neither baku nor inline): ${missing.length}`);
  for (const t of missing) console.log(`  MISSING ${t}`);
}

// ---------- P1 basic (also applies to premium via inheritance) ----------
audit({
  file: 'drafts/150-prompt-ai-untuk-bisnis-dan-umkm-indonesia.md',
  tokenRe: /\{([a-z][a-z0-9_ ]*)\}/g,
  bakuRowRe: /^\| (\{[a-z_]+\}) \|/gm,
  lampiranMarker: '## Lampiran A.',
});

// ---------- P1 ultimate (has extra Workflow tokens) ----------
audit({
  file: 'drafts/150-prompt-umkm-ultimate.md',
  tokenRe: /\{([a-z][a-z0-9_ ]*)\}/g,
  bakuRowRe: /^\| (\{[a-z_]+\}) \|/gm,
  lampiranMarker: '## Lampiran A.',
});

// ---------- P2 basic ----------
audit({
  file: 'drafts/300-prompt-ai-untuk-copywriting-dan-iklan-digital.md',
  tokenRe: /\[([A-Z][A-Z0-9_]*)\]/g,
  bakuRowRe: /^\| (\[[A-Z][A-Z0-9_]*\]) \|/gm,
  lampiranMarker: '## Lampiran',
});

// ---------- P2 premium / ultimate ----------
for (const f of ['drafts/300-prompt-copywriting-premium.md', 'drafts/300-prompt-copywriting-ultimate.md']) {
  audit({ file: f, tokenRe: /\[([A-Z][A-Z0-9_]*)\]/g, bakuRowRe: /^\| (\[[A-Z][A-Z0-9_]*\]) \|/gm, lampiranMarker: '## Lampiran' });
}

// ---------- P3 basic ----------
audit({
  file: 'drafts/200-template-social-media-basic.md',
  tokenRe: /\[([A-Z][A-Z0-9_]*)\]/g,
  bakuRowRe: /^\| (\[[A-Z][A-Z0-9_]*\]) \|/gm,
  lampiranMarker: '## Lampiran',
});

// ---------- P3 premium / ultimate ----------
for (const f of ['drafts/200-template-social-media-premium.md', 'drafts/200-template-social-media-ultimate.md']) {
  audit({ file: f, tokenRe: /\[([A-Z][A-Z0-9_]*)\]/g, bakuRowRe: /^\| (\[[A-Z][A-Z0-9_]*\]) \|/gm, lampiranMarker: '## Lampiran' });
}
