#!/usr/bin/env node
/**
 * Offline content production runner with multi-tier support.
 *
 * Takes a finished Markdown manuscript plus an optional companion-data JSON
 * and emits sellable product folders: PDF, Excel, and flyer per tier.
 *
 * Tiers:
 *   basic     - Prompts only (Rp 19.000)
 *   premium   - Prompts + real AI outputs + Excel workbook (Rp 69.000)
 *   ultimate  - All premium + screenshots + automation guides (Rp 149.000)
 *
 * Usage:
 *   node scripts/produce.js --manuscript drafts/foo.md --tier premium --slug foo
 *   node scripts/produce.js --manuscript drafts/foo.md --tier basic --flyer
 *   node scripts/produce.js --manuscript drafts/foo.md --data foo.xlsx.json --tier premium
 */

const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const PDFGenerator = require('../src/agents/design/PDFGenerator');
const ExcelGenerator = require('../src/agents/design/ExcelGenerator');
const FlyerGenerator = require('./generate-flyer');

const ROOT = path.join(__dirname, '..');
const PRODUCTS_DIR = path.join(ROOT, 'products');
const MANIFEST_PATH = path.join(PRODUCTS_DIR, 'manifest.json');

const VALID_TIERS = ['basic', 'premium', 'ultimate'];
const TIER_PRICING = {
  basic: { normal: 49000, launch: 19000, flash: 10000 },
  premium: { normal: 149000, launch: 69000, flash: 49000 },
  ultimate: { normal: 299000, launch: 149000, flash: 99000 },
};

function parseArgs(argv) {
  const args = {};
  for (let i = 0; i < argv.length; i += 2) {
    const key = argv[i];
    if (!key || !key.startsWith('--')) break;
    args[key.slice(2)] = argv[i + 1];
  }
  return args;
}

/**
 * Rejects the visual tells of machine-generated filler before anything ships.
 * Returns a list of violations; an empty list means the draft may proceed.
 */
function lintManuscript(markdown) {
  const violations = [];
  const prose = markdown.replace(/```[\s\S]*?```/g, '');

  if (markdown.includes('—') || markdown.includes(' – ')) {
    violations.push('contains em-dash or spaced en-dash');
  }

  const proseWithoutBold = prose.replace(/\*\*[^*]+\*\*/g, '');
  const strayAsterisks = proseWithoutBold.match(/\*/g);
  if (strayAsterisks) {
    violations.push(`contains ${strayAsterisks.length} asterisk marker(s) outside code blocks`);
  }

  const emoji = markdown.match(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u);
  if (emoji) {
    violations.push(`contains emoji glyph "${emoji[0]}"`);
  }

  const filler = [
    /\bdalam era (?:digital|modern) yang\b/i,
    /\bpenting untuk dicatat bahwa\b/i,
    /\bkesimpulannya,?\s/i,
    /\bdi dunia yang semakin cepat\b/i,
  ];
  for (const pattern of filler) {
    if (pattern.test(markdown)) {
      violations.push(`contains filler phrase matching ${pattern}`);
    }
  }

  const placeholders = markdown.match(/\b(?:TBD|TODO|lorem ipsum|placeholder|XXX+)\b/i);
  if (placeholders) {
    violations.push(`contains placeholder text "${placeholders[0]}"`);
  }

  return violations;
}

const MIME = {
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
};

/**
 * Puppeteer renders from an in-memory HTML string, so relative image paths have
 * no base URL to resolve against. Images are inlined as data URIs instead.
 */
function inlineImages(markdown, manuscriptDir) {
  return markdown.replace(/!\[([^\]]*)\]\(([^)\s]+)\)/g, (match, alt, src) => {
    if (/^(https?:|data:)/.test(src)) return match;
    const candidates = [path.resolve(manuscriptDir, src), path.resolve(ROOT, src)];
    const file = candidates.find((candidate) => fs.existsSync(candidate));
    if (!file) throw new Error(`Image asset not found for "${src}"`);
    const ext = path.extname(file).toLowerCase();
    const mime = MIME[ext];
    if (!mime) throw new Error(`Unsupported image format "${ext}" for "${src}"`);
    const data = fs.readFileSync(file).toString('base64');
    return `![${alt}](data:${mime};base64,${data})`;
  });
}

/**
 * Chrome writes its page tree inside compressed object streams, so the raw PDF
 * bytes rarely contain a readable /Count. Streams are inflated first and any
 * that fail to decompress are kept as-is.
 */
function readPdfObjects(pdfInput) {
  const raw = Buffer.from(pdfInput).toString('latin1');
  const chunks = [raw];
  const re = /stream\r?\n/g;
  let match;
  while ((match = re.exec(raw)) !== null) {
    const start = match.index + match[0].length;
    const end = raw.indexOf('endstream', start);
    if (end < 0) break;
    const bytes = Buffer.from(raw.slice(start, end), 'latin1');
    try {
      chunks.push(zlib.inflateSync(bytes).toString('latin1'));
    } catch {
      chunks.push(bytes.toString('latin1'));
    }
  }
  return chunks.join('\n');
}

/**
 * The root page tree carries the total in /Count, so the largest value found is
 * the rendered page count. Falls back to counting page objects.
 */
function countPdfPages(pdfBuffer) {
  const haystack = readPdfObjects(pdfBuffer);
  let max = 0;
  const counts = haystack.matchAll(/\/Count\s+(\d+)/g);
  for (const entry of counts) max = Math.max(max, Number(entry[1]));
  if (max > 0) return max;
  return (haystack.match(/\/Type\s*\/Page\b/g) || []).length;
}

function readManifest() {
  if (!fs.existsSync(MANIFEST_PATH)) return { products: [] };
  try {
    return JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'));
  } catch {
    return { products: [] };
  }
}

function writeManifest(manifest) {
  fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2));
}

async function main() {
  const args = parseArgs(process.argv.slice(2));

  if (!args.manuscript) {
    console.error('Usage: node scripts/produce.js --manuscript <file.md> [--data <file.json>] [--slug <name>] [--tier basic|premium|ultimate] [--flyer]');
    process.exit(1);
  }

  const tier = args.tier || 'basic';
  if (!VALID_TIERS.includes(tier)) {
    console.error(`Invalid tier "${tier}". Must be one of: ${VALID_TIERS.join(', ')}`);
    process.exit(1);
  }

  const manuscriptPath = path.resolve(args.manuscript);
  if (!fs.existsSync(manuscriptPath)) {
    console.error(`Manuscript not found: ${manuscriptPath}`);
    process.exit(1);
  }

  const markdown = fs.readFileSync(manuscriptPath, 'utf8');
  const titleLine = markdown.match(/^#\s+(.+)$/m);
  const title = titleLine ? titleLine[1].trim() : path.basename(manuscriptPath, '.md');
  const slug = args.slug || title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const tierSlug = `${slug}-${tier}`;

  const violations = lintManuscript(markdown);
  if (violations.length > 0) {
    console.error(`Lint failed for "${title}" (${tier}):`);
    violations.forEach((v) => console.error(`  - ${v}`));
    process.exit(1);
  }

  const pdfPath = path.join(PRODUCTS_DIR, `${tierSlug}.pdf`);
  if (pdfPath.length > 240) {
    console.error(`Slug too long for a Windows-safe output path (${pdfPath.length} chars). Pass --slug with 40 characters or fewer.`);
    process.exit(1);
  }
  fs.mkdirSync(PRODUCTS_DIR, { recursive: true });

  const pdf = new PDFGenerator();
  const bodyMarkdown = markdown.replace(/^#\s+.+$/m, '');
  const renderSource = inlineImages(bodyMarkdown, path.dirname(manuscriptPath));
  const pdfBuffer = await pdf.generate({ title: `${title} [${tier.toUpperCase()}]`, markdown: renderSource, tier });
  fs.writeFileSync(pdfPath, pdfBuffer);

  const outputs = [{ file: path.relative(ROOT, pdfPath), kind: 'pdf', bytes: pdfBuffer.length }];
  const pdfPages = countPdfPages(pdfBuffer);

  if (args.data && (tier === 'premium' || tier === 'ultimate')) {
    const dataPath = path.resolve(args.data);
    if (!fs.existsSync(dataPath)) {
      console.error(`Companion data not found: ${dataPath}`);
      process.exit(1);
    }
    const workbookSpec = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    const excel = new ExcelGenerator();
    const xlsxBuffer = await excel.generate(workbookSpec);
    const xlsxPath = path.join(PRODUCTS_DIR, `${tierSlug}.xlsx`);
    fs.writeFileSync(xlsxPath, xlsxBuffer);
    outputs.push({ file: path.relative(ROOT, xlsxPath), kind: 'excel', bytes: xlsxBuffer.length });
  }

  if (args.flyer) {
    const flyerGen = new FlyerGenerator();
    const pricing = TIER_PRICING[tier];
    const flyerBuffer = await flyerGen.generate({
      title,
      tier,
      pricing,
      slug: tierSlug,
    });
    const flyerPath = path.join(PRODUCTS_DIR, `${tierSlug}-flyer.pdf`);
    fs.writeFileSync(flyerPath, flyerBuffer);
    outputs.push({ file: path.relative(ROOT, flyerPath), kind: 'flyer', bytes: flyerBuffer.length });
  }

  const wordCount = markdown.split(/\s+/).filter(Boolean).length;
  const manifest = readManifest();
  const entry = {
    slug: tierSlug,
    title: `${title} [${tier.toUpperCase()}]`,
    tier,
    pricing: TIER_PRICING[tier],
    outputs,
    wordCount,
    pages: pdfPages,
    producedAt: new Date().toISOString(),
    status: 'produced',
  };

  const existingIndex = manifest.products.findIndex((p) => p.slug === tierSlug);
  if (existingIndex >= 0) manifest.products[existingIndex] = entry;
  else manifest.products.push(entry);
  writeManifest(manifest);

  console.log(`Produced "${title}" [${tier.toUpperCase()}]`);
  outputs.forEach((o) => console.log(`  ${o.kind}: ${o.file} (${(o.bytes / 1024).toFixed(1)} KB)`));
  console.log(`  words: ${wordCount}, pages: ${pdfPages}`);
}

main().catch((err) => {
  console.error('Production failed:', err.message);
  process.exit(1);
});
