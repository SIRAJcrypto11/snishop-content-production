const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');
const D = (f) => path.join(ROOT, 'drafts', f);

const issues = [];

// 1. Check manuscript lampiran descriptions vs xlsx.json specs
console.log('=== Workbook description accuracy ===');

// P1: check Lampiran B (or wherever it describes the workbook)
const p1md = fs.readFileSync(D('150-prompt-ai-untuk-bisnis-dan-umkm-indonesia.md'), 'utf8');
const p1xlsx = JSON.parse(fs.readFileSync(D('150-prompt-ai-untuk-bisnis-dan-umkm-indonesia.xlsx.json'), 'utf8'));
console.log('P1 xlsx sheets:', p1xlsx.sheets.map(s => s.name).join(', '));
// Look for workbook description in P1 lampiran
const p1WorkbookDesc = p1md.match(/Workbook Excel[\s\S]{0,500}/i);
if (p1WorkbookDesc) {
  console.log('P1 mentions workbook:', p1WorkbookDesc[0].slice(0, 100));
}

// P2
const p2md = fs.readFileSync(D('300-prompt-ai-untuk-copywriting-dan-iklan-digital.md'), 'utf8');
const p2xlsx = JSON.parse(fs.readFileSync(D('300-prompt-ai-untuk-copywriting-dan-iklan-digital.xlsx.json'), 'utf8'));
console.log('\nP2 xlsx sheets:', p2xlsx.sheets.map(s => s.name).join(', '));
const p2WorkbookDesc = p2md.match(/Workbook Excel[\s\S]{0,500}/i);
if (p2WorkbookDesc) {
  console.log('P2 mentions workbook:', p2WorkbookDesc[0].slice(0, 100));
}

// P3
const p3md = fs.readFileSync(D('200-template-social-media-basic.md'), 'utf8');
const p3xlsx = JSON.parse(fs.readFileSync(D('200-template-social-media.xlsx.json'), 'utf8'));
console.log('\nP3 xlsx sheets:', p3xlsx.sheets.map(s => s.name).join(', '));
const p3WorkbookDesc = p3md.match(/Workbook Excel[\s\S]{0,500}/i);
if (p3WorkbookDesc) {
  console.log('P3 mentions workbook:', p3WorkbookDesc[0].slice(0, 100));
  // Check if it mentions sheet count
  const sheetCountMatch = p3WorkbookDesc[0].match(/(\d+)\s*sheet/i);
  if (sheetCountMatch) {
    const mentionedCount = parseInt(sheetCountMatch[1]);
    const actualCount = p3xlsx.sheets.length;
    console.log(`P3 mentions ${mentionedCount} sheets, actual: ${actualCount}`);
    if (mentionedCount !== actualCount) {
      issues.push(`P3 workbook description says ${mentionedCount} sheets but xlsx has ${actualCount}`);
    }
  }
}

// 2. Readback produced .xlsx files
console.log('\n=== Produced xlsx readback ===');
const ExcelJS = require('exceljs');
const productsDir = path.join(ROOT, 'products');
const xlsxFiles = [
  '150-prompt-umkm-premium-premium.xlsx',
  '300-prompt-copywriting-premium-premium.xlsx',
  '200-template-sosmed-premium-premium.xlsx',
];

(async () => {
  for (const file of xlsxFiles) {
    const filePath = path.join(productsDir, file);
    if (!fs.existsSync(filePath)) {
      issues.push(`Missing xlsx: ${file}`);
      continue;
    }
    const wb = new ExcelJS.Workbook();
    await wb.xlsx.readFile(filePath);
    const sheetNames = wb.worksheets.map(ws => ws.name);
    console.log(`${file}: ${sheetNames.length} sheets - ${sheetNames.join(', ')}`);
  }

  // 3. Manifest accuracy
  console.log('\n=== Manifest accuracy ===');
  const manifest = JSON.parse(fs.readFileSync(path.join(productsDir, 'manifest.json'), 'utf8'));
  console.log(`Manifest has ${manifest.products.length} products`);
  
  for (const p of manifest.products) {
    // Check all outputs exist
    if (p.outputs) {
      for (const output of p.outputs) {
        const outputPath = path.join(ROOT, output.file);
        if (!fs.existsSync(outputPath)) {
          issues.push(`Manifest references missing file: ${output.file}`);
        } else {
          // Verify file size matches
          const stat = fs.statSync(outputPath);
          if (stat.size !== output.bytes) {
            issues.push(`File size mismatch: ${output.file} (manifest: ${output.bytes}, actual: ${stat.size})`);
          }
        }
      }
    }
  }

  // Report
  if (issues.length === 0) {
    console.log('\nALL WORKBOOK/MANIFEST CHECKS PASS');
  } else {
    console.log(`\n${issues.length} ISSUES:`);
    issues.forEach((i) => console.log('  ' + i));
  }
})();
