#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

const PRODUCTS = [
  ['150-prompt-umkm-basic-basic.pdf', 150, /P-\d{3}/g],
  ['150-prompt-umkm-premium-premium.pdf', 150, /P-\d{3}/g],
  ['150-prompt-umkm-ultimate-ultimate.pdf', 150, /P-\d{3}/g],
  ['300-prompt-copywriting-basic-basic.pdf', 300, /P-\d{3}/g],
  ['300-prompt-copywriting-premium-premium.pdf', 300, /P-\d{3}/g],
  ['300-prompt-copywriting-ultimate-ultimate.pdf', 300, /P-\d{3}/g],
  ['200-template-sosmed-basic-basic.pdf', 200, /T-\d{3}/g],
  ['200-template-sosmed-premium-premium.pdf', 200, /T-\d{3}/g],
  ['200-template-sosmed-ultimate-ultimate.pdf', 200, /T-\d{3}/g],
];

const ENGLISH_TELLS = [
  'Every bean tells a story',
  'Continuing with',
  'Continuing for all',
  '[PREMIUM] [PREMIUM]',
  '[BASIC] [BASIC]',
  '[ULTIMATE] [ULTIMATE]',
];

(async () => {
  let failures = 0;
  for (const [file, expected, counter] of PRODUCTS) {
    const p = path.join(__dirname, '..', 'products', file);
    const buf = fs.readFileSync(p);
    const parser = new PDFParse({ data: new Uint8Array(buf) });
    const result = await parser.getText();
    await parser.destroy();
    const doc = { text: result.text, numpages: result.total };
    const text = doc.text;
    const codes = new Set();
    let m;
    while ((m = counter.exec(text)) !== null) codes.add(m[0]);

    const problems = [];
    for (const tell of ENGLISH_TELLS) {
      if (text.includes(tell)) problems.push(`found "${tell}"`);
    }
    if (codes.size < expected) {
      problems.push(`only ${codes.size}/${expected} unique codes`);
    }
    const status = problems.length === 0 ? 'OK' : 'FAIL';
    if (problems.length) failures++;
    console.log(`${status}  ${file}  pages=${doc.numpages} codes=${codes.size}/${expected}${problems.length ? '  ' + problems.join('; ') : ''}`);
  }
  process.exit(failures ? 1 : 0);
})();
