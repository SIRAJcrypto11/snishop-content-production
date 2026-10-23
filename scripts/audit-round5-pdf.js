const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');
const ROOT = path.join(__dirname, '..');
const productsDir = path.join(ROOT, 'products');

const pdfs = [
  '150-prompt-umkm-basic-basic.pdf',
  '150-prompt-umkm-premium-premium.pdf',
  '150-prompt-umkm-ultimate-ultimate.pdf',
  '300-prompt-copywriting-basic-basic.pdf',
  '300-prompt-copywriting-premium-premium.pdf',
  '300-prompt-copywriting-ultimate-ultimate.pdf',
  '200-template-sosmed-basic-basic.pdf',
  '200-template-sosmed-premium-premium.pdf',
  '200-template-sosmed-ultimate-ultimate.pdf',
];

const issues = [];

(async () => {
  for (const file of pdfs) {
    const filePath = path.join(productsDir, file);
    const buffer = fs.readFileSync(filePath);
    const parser = new PDFParse({ data: new Uint8Array(buffer) });
    const result = await parser.getText();
    await parser.destroy();
    const data = { text: result.text, numpages: result.total };
    const text = data.text;
    
    console.log(`\n=== ${file} ===`);
    console.log(`  Pages: ${data.numpages}, Words: ${text.split(/\s+/).length}`);
    
    // Check first 500 chars for cover title
    const first500 = text.slice(0, 500);
    console.log('  Cover preview:', first500.replace(/\n/g, ' ').slice(0, 100));
    
    // Scan for raw markdown leakage
    const backticks = (text.match(/```/g) || []).length;
    const doubleAsterisks = (text.match(/\*\*/g) || []).length;
    const doubleHash = (text.match(/##[^#]/g) || []).length;
    
    if (backticks > 0) {
      console.log(`  ⚠ Found ${backticks} backtick sequences (raw code fence)`);
      issues.push(`${file}: ${backticks} backtick sequences`);
    }
    if (doubleAsterisks > 10) {
      console.log(`  ⚠ Found ${doubleAsterisks} ** sequences (raw bold)`);
      issues.push(`${file}: ${doubleAsterisks} ** sequences`);
    }
    if (doubleHash > 5) {
      console.log(`  ⚠ Found ${doubleHash} ## sequences (raw heading)`);
      issues.push(`${file}: ${doubleHash} ## sequences`);
    }
    
    // Scan for mojibake
    const mojibake = text.match(/Ã©|Ã¨|â€|Â|ï¿½/g);
    if (mojibake) {
      console.log(`  ⚠ Found ${mojibake.length} mojibake sequences`);
      issues.push(`${file}: ${mojibake.length} mojibake`);
    }
    
    // Check for empty pages (very short text between page breaks)
    const pages = text.split(/\f/);
    const emptyPages = pages.filter(p => p.trim().length < 50).length;
    if (emptyPages > 0) {
      console.log(`  ⚠ Found ${emptyPages} nearly empty pages`);
      issues.push(`${file}: ${emptyPages} empty pages`);
    }
  }
  
  if (issues.length === 0) {
    console.log('\n✓ ALL PDF CHECKS PASS');
  } else {
    console.log(`\n✗ ${issues.length} ISSUES:`);
    issues.forEach((i) => console.log('  ' + i));
  }
})();
