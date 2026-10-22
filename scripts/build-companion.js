#!/usr/bin/env node
/**
 * Builds the companion workbook spec straight from the manuscript.
 *
 * The spreadsheet is derived from the same source as the PDF so the two
 * deliverables cannot drift apart. Prompt entries follow the manuscript
 * convention: a numbered heading, then Kapan pakai, a blockquoted prompt,
 * Variabel, and Hasil yang diharapkan.
 *
 * Usage: node scripts/build-companion.js --manuscript drafts/foo.md --out drafts/foo.xlsx.json
 */

const fs = require('fs');
const path = require('path');

const ENTRY_HEADING = /^### (P-\d+)\.\s+(.+)$/;
const CHAPTER_HEADING = /^## (.+)$/;

function parseManuscript(markdown) {
  const lines = markdown.split(/\r?\n/);
  const entries = [];
  const chapters = [];

  let currentChapter = null;
  let current = null;
  let buffer = [];

  const flush = () => {
    if (!current) return;
    current.prompt = buffer.join(' ').replace(/\s+/g, ' ').trim();
    entries.push(current);
    current = null;
    buffer = [];
  };

  for (const line of lines) {
    const chapterMatch = line.match(CHAPTER_HEADING);
    if (chapterMatch && !chapterMatch[1].startsWith('Lampiran')) {
      flush();
      currentChapter = chapterMatch[1].trim();
      chapters.push({ title: currentChapter, codes: [] });
      continue;
    }

    const entryMatch = line.match(ENTRY_HEADING);
    if (entryMatch) {
      flush();
      current = {
        code: entryMatch[1],
        title: entryMatch[2].trim(),
        chapter: currentChapter,
        whenToUse: '',
        prompt: '',
        variables: '',
        expected: '',
      };
      chapters[chapters.length - 1].codes.push(current.code);
      continue;
    }

    if (!current) continue;

    if (line.startsWith('> ')) {
      buffer.push(line.slice(2));
      continue;
    }
    if (line.startsWith('Kapan pakai:')) {
      current.whenToUse = line.slice('Kapan pakai:'.length).trim();
      continue;
    }
    if (line.startsWith('Variabel:')) {
      current.variables = line.slice('Variabel:'.length).trim();
      continue;
    }
    if (line.startsWith('Hasil yang diharapkan:')) {
      current.expected = line.slice('Hasil yang diharapkan:'.length).trim();
    }
  }
  flush();

  return { entries, chapters };
}

/**
 * Reads the standard variable table out of Lampiran C. Rows are recognised by a
 * first cell that opens a variable name.
 */
function parseVariableGlossary(markdown) {
  const section = markdown.split(/^## Lampiran C/m)[1];
  if (!section) return [];
  const rows = [];
  for (const line of section.split(/\r?\n/)) {
    if (!line.startsWith('| {')) continue;
    const cells = line.split('|').slice(1, -1).map((cell) => cell.trim());
    if (cells.length >= 3) rows.push(cells);
  }
  return rows;
}

function buildSpec(markdown, title) {
  const { entries, chapters } = parseManuscript(markdown);
  if (entries.length === 0) {
    throw new Error('No prompt entries found. Expected headings like "### P-001. Judul".');
  }

  const library = entries.map((entry) => [
    entry.code,
    entry.chapter || '',
    entry.title,
    entry.whenToUse,
    entry.prompt,
    entry.variables,
    entry.expected,
  ]);

  const index = chapters
    .filter((chapter) => chapter.codes.length > 0)
    .map((chapter) => [chapter.title, chapter.codes.length, chapter.codes.join(', ')]);

  const glossary = parseVariableGlossary(markdown);

  const tracker = [
    ['2026-10-22', 'P-031', 'ChatGPT', 'Toko kue rumahan, Bandung, omzet Rp 18.000.000', 'Dipakai untuk batas biaya iklan November', 'Hasil terlalu panjang, tambah batas 250 kata di versi berikutnya'],
  ];

  return {
    title,
    sheets: [
      {
        name: 'Library',
        headers: ['Kode', 'Bab', 'Judul', 'Kapan Pakai', 'Isi Prompt', 'Variabel', 'Hasil yang Diharapkan'],
        rows: library,
      },
      {
        name: 'Indeks Bab',
        headers: ['Bab', 'Jumlah Prompt', 'Kode'],
        rows: index,
      },
      {
        name: 'Variabel',
        headers: ['Variabel', 'Arti', 'Contoh'],
        rows: glossary,
      },
      {
        name: 'Pelacak',
        headers: ['Tanggal', 'Kode Prompt', 'Alat', 'Konteks yang Diisi', 'Hasil dan Pemakaiannya', 'Catatan Perbaikan'],
        rows: tracker,
      },
    ],
  };
}

function main() {
  const argv = process.argv.slice(2);
  const flag = (name) => {
    const i = argv.indexOf(`--${name}`);
    return i >= 0 ? argv[i + 1] : null;
  };

  const manuscriptPath = flag('manuscript');
  const outPath = flag('out');
  if (!manuscriptPath || !outPath) {
    console.error('Usage: node scripts/build-companion.js --manuscript <file.md> --out <file.json>');
    process.exit(1);
  }

  const markdown = fs.readFileSync(path.resolve(manuscriptPath), 'utf8');
  const titleLine = markdown.match(/^#\s+(.+)$/m);
  const title = titleLine ? titleLine[1].trim() : path.basename(manuscriptPath, '.md');

  const spec = buildSpec(markdown, title);
  fs.mkdirSync(path.dirname(path.resolve(outPath)), { recursive: true });
  fs.writeFileSync(path.resolve(outPath), JSON.stringify(spec, null, 2));

  const counts = spec.sheets.map((sheet) => `${sheet.name}=${sheet.rows.length}`).join(', ');
  console.log(`Companion spec for "${title}": ${counts}`);
}

module.exports = { parseManuscript, buildSpec };

if (require.main === module) main();
