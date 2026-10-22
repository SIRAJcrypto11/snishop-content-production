#!/usr/bin/env node
/**
 * Renders the figures used inside the prompt-library product with node-canvas.
 *
 * Figures are drawn from the brand tokens so every illustration in a product
 * carries the same visual identity as the PDF itself.
 *
 * Usage: node scripts/draw-diagrams.js [--out assets]
 */

const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

const BRAND = {
  primary: '#1E40AF',
  secondary: '#7C3AED',
  accent: '#10B981',
  ink: '#111827',
  muted: '#6B7280',
  line: '#D1D5DB',
  paper: '#F5F7FB',
  white: '#FFFFFF',
  warn: '#B45309',
};

const SANS = '"Segoe UI", "Helvetica Neue", Arial, sans-serif';
const MONO = '"Consolas", "Courier New", monospace';

function roundedRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function wrapText(ctx, text, font, maxWidth) {
  ctx.font = font;
  const words = text.split(/\s+/);
  const lines = [];
  let current = '';
  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (ctx.measureText(candidate).width > maxWidth && current) {
      lines.push(current);
      current = word;
    } else {
      current = candidate;
    }
  }
  if (current) lines.push(current);
  return lines;
}

function drawWrapped(ctx, text, x, y, font, maxWidth, lineHeight) {
  const lines = wrapText(ctx, text, font, maxWidth);
  lines.forEach((line, index) => ctx.fillText(line, x, y + index * lineHeight));
  return lines.length;
}

function card(ctx, { x, y, w, h, fill, stroke, radius = 14, lineWidth = 2 }) {
  roundedRect(ctx, x, y, w, h, radius);
  if (fill) {
    ctx.fillStyle = fill;
    ctx.fill();
  }
  if (stroke) {
    ctx.strokeStyle = stroke;
    ctx.lineWidth = lineWidth;
    ctx.stroke();
  }
}

function arrow(ctx, fromX, fromY, toX, toY, color = BRAND.primary, width = 3) {
  const angle = Math.atan2(toY - fromY, toX - fromX);
  const head = 14;
  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  ctx.beginPath();
  ctx.moveTo(fromX, fromY);
  ctx.lineTo(toX - head * Math.cos(angle), toY - head * Math.sin(angle));
  ctx.stroke();
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(toX, toY);
  ctx.lineTo(toX - head * Math.cos(angle - Math.PI / 7), toY - head * Math.sin(angle - Math.PI / 7));
  ctx.lineTo(toX - head * Math.cos(angle + Math.PI / 7), toY - head * Math.sin(angle + Math.PI / 7));
  ctx.closePath();
  ctx.fill();
}

function titleBar(ctx, text, subtitle, width) {
  ctx.textBaseline = 'alphabetic';
  ctx.textAlign = 'left';
  ctx.fillStyle = BRAND.ink;
  ctx.font = `bold 40px ${SANS}`;
  ctx.fillText(text, 60, 76);
  if (subtitle) {
    ctx.fillStyle = BRAND.muted;
    ctx.font = `24px ${SANS}`;
    ctx.fillText(subtitle, 60, 112);
  }
  ctx.fillStyle = BRAND.primary;
  ctx.fillRect(60, 128, width - 120, 4);
}

function save(canvas, outDir, name) {
  fs.writeFileSync(path.join(outDir, name), canvas.toBuffer('image/png'));
  console.log(`written ${name}`);
}

// -----------------------------------------------------------------------------
// Figure 1: the five components of a prompt that produces usable output
// -----------------------------------------------------------------------------
function anatomyFigure(outDir) {
  const W = 1600;
  const H = 880;
  const canvas = createCanvas(W, H);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = BRAND.white;
  ctx.fillRect(0, 0, W, H);
  titleBar(ctx, 'Anatomi Prompt 5 Komponen', 'Setiap kolom wajib diisi. Prompt yang kehilangan satu kolom hampir selalu menghasilkan jawaban umum.', W);

  const components = [
    { label: '1. PERAN', body: 'Siapa AI saat menjawab. Contoh: auditor pajak UMKM, copywriter marketplace.', color: BRAND.primary },
    { label: '2. KONTEKS', body: 'Fakta bisnis yang benar: produk, harga, kota, skala omzet, alat yang dipakai.', color: BRAND.secondary },
    { label: '3. TUGAS', body: 'Satu kerjaan nyata dengan kata kerja tunggal: susun, bandingkan, hitung, tulis.', color: BRAND.accent },
    { label: '4. FORMAT', body: 'Bentuk keluaran: tabel 5 kolom, poin 7 langkah, pesan WhatsApp 40 kata.', color: BRAND.warn },
    { label: '5. BATASAN', body: 'Larangan dan ambang: tanpa klaim berlebihan, maksimal 200 kata, bahasa Indonesia.', color: '#0F766E' },
  ];

  const boxW = 268;
  const boxH = 262;
  const gap = 22;
  const startX = 60;
  const startY = 190;

  components.forEach((component, index) => {
    const x = startX + index * (boxW + gap);
    card(ctx, { x, y: startY, w: boxW, h: boxH, fill: BRAND.paper, stroke: component.color, lineWidth: 3 });
    ctx.fillStyle = component.color;
    ctx.fillRect(x, startY, boxW, 8);

    ctx.fillStyle = component.color;
    ctx.font = `bold 28px ${SANS}`;
    ctx.textAlign = 'left';
    ctx.fillText(component.label, x + 22, startY + 62);

    ctx.fillStyle = BRAND.ink;
    ctx.font = `22px ${SANS}`;
    drawWrapped(ctx, component.body, x + 22, startY + 112, `22px ${SANS}`, boxW - 44, 32);

    if (index < components.length - 1) {
      ctx.fillStyle = BRAND.muted;
      ctx.font = `bold 30px ${SANS}`;
      ctx.textAlign = 'center';
      ctx.fillText('+', x + boxW + gap / 2, startY + 60);
    }
  });

  const fy = startY + boxH + 56;
  card(ctx, { x: 60, y: fy, w: W - 120, h: 236, fill: BRAND.white, stroke: BRAND.line, lineWidth: 2 });
  ctx.fillStyle = BRAND.ink;
  ctx.font = `bold 26px ${SANS}`;
  ctx.textAlign = 'left';
  ctx.fillText('Gabungan lima komponen menjadi satu prompt siap pakai', 90, fy + 48);
  ctx.font = `21px ${MONO}`;
  ctx.fillStyle = BRAND.primary;
  const sampleLines = [
    'Anda auditor pajak UMKM (PERAN). Saya punya toko kue rumahan di Bandung, omzet',
    'Rp 18 juta per bulan, belum pernah lapor pajak, pakai buku kas manual (KONTEKS).',
    'Susun langkah pertama pengurusan NPWP dan PPh final (TUGAS). Buat tabel 4 kolom:',
    'tahap, biaya, durasi, risiko kalau dilewatkan (FORMAT). Maksimal 350 kata, tanpa',
    'istilah hukum yang tidak dijelaskan, bahasa Indonesia santai (BATASAN).',
  ];
  sampleLines.forEach((line, index) => ctx.fillText(line, 90, fy + 92 + index * 30));

  save(canvas, outDir, 'anatomi-prompt.png');
}

// -----------------------------------------------------------------------------
// Figure 2: the six-step working loop from a vague need to a reusable prompt
// -----------------------------------------------------------------------------
function workflowFigure(outDir) {
  const W = 1600;
  const H = 820;
  const canvas = createCanvas(W, H);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = BRAND.white;
  ctx.fillRect(0, 0, W, H);
  titleBar(ctx, 'Siklus Kerja Enam Langkah', 'Dari kebutuhan yang masih kabur sampai prompt yang bisa dipakai ulang dan diwariskan ke karyawan.', W);

  const steps = [
    { n: '01', t: 'Tujuan', d: 'Tuliskan hasil akhir yang ingin dipegang besok pagi, bukan topik yang ingin dibahas.' },
    { n: '02', t: 'Konteks', d: 'Kumpulkan angka dan fakta nyata: produk, harga, pelanggan, alat, wilayah.' },
    { n: '03', t: 'Tugas', d: 'Pecah tujuan jadi satu perintah kerja yang bisa diselesaikan dalam satu balasan.' },
    { n: '04', t: 'Format', d: 'Tentukan bentuk keluaran supaya bisa langsung ditempel ke spreadsheet atau chat.' },
    { n: '05', t: 'Uji', d: 'Jalankan dua kali dengan konteks berbeda. Bandingkan, catat mana yang goyah.' },
    { n: '06', t: 'Simpan', d: 'Simpan versi final dengan variabel {kurung} di library internal beserta tanggal uji.' },
  ];

  const cols = 3;
  const boxW = 470;
  const boxH = 230;
  const gapX = 40;
  const gapY = 46;
  const startX = 60;
  const startY = 190;

  steps.forEach((step, index) => {
    const col = index % cols;
    const row = Math.floor(index / cols);
    const x = startX + col * (boxW + gapX);
    const y = startY + row * (boxH + gapY);

    card(ctx, { x, y, w: boxW, h: boxH, fill: BRAND.paper, stroke: BRAND.line });
    ctx.fillStyle = row === 0 ? BRAND.primary : BRAND.secondary;
    ctx.font = `bold 54px ${SANS}`;
    ctx.textAlign = 'left';
    ctx.fillText(step.n, x + 24, y + 68);

    ctx.fillStyle = BRAND.ink;
    ctx.font = `bold 30px ${SANS}`;
    ctx.fillText(step.t, x + 122, y + 62);

    ctx.font = `21px ${SANS}`;
    const bodyLines = wrapText(ctx, step.d, `21px ${SANS}`, boxW - 48);
    bodyLines.forEach((line, i) => {
      ctx.fillStyle = BRAND.ink;
      ctx.fillText(line, x + 24, y + 118 + i * 30);
    });

    const next = index + 1;
    if (next < steps.length) {
      const nextCol = next % cols;
      const nextRow = Math.floor(next / cols);
      const nx = startX + nextCol * (boxW + gapX);
      const ny = startY + nextRow * (boxH + gapY);
      if (nextCol > col) arrow(ctx, x + boxW + 2, y + boxH / 2, nx - 4, y + boxH / 2, BRAND.accent);
      else arrow(ctx, x + boxW / 2, y + boxH + 2, x + boxW / 2, ny - 4, BRAND.accent);
    }
  });

  const ly = startY + 2 * (boxH + gapY) + 12;
  ctx.fillStyle = BRAND.warn;
  ctx.font = `bold 24px ${SANS}`;
  ctx.textAlign = 'left';
  ctx.fillText('Langkah 05 yang dilewati adalah penyebab utama prompt terasa gagal padahal strukturnya benar.', 60, ly + 40);

  save(canvas, outDir, 'siklus-kerja-prompt.png');
}

// -----------------------------------------------------------------------------
// Figure 3: quality matrix, generic versus specific prompting
// -----------------------------------------------------------------------------
function matrixFigure(outDir) {
  const W = 1600;
  const H = 880;
  const canvas = createCanvas(W, H);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = BRAND.white;
  ctx.fillRect(0, 0, W, H);
  titleBar(ctx, 'Matriks Kualitas Prompt', 'Sumbu horizontal: seberapa spesifik tugas. Sumbu vertikal: seberapa kaya konteks bisnis yang diberikan.', W);

  const ox = 230;
  const oy = 190;
  const size = 560;
  const cell = size / 2;

  ctx.strokeStyle = BRAND.line;
  ctx.lineWidth = 2;
  for (let i = 0; i <= 2; i += 1) {
    ctx.beginPath();
    ctx.moveTo(ox + i * cell, oy);
    ctx.lineTo(ox + i * cell, oy + size);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(ox, oy + i * cell);
    ctx.lineTo(ox + size, oy + i * cell);
    ctx.stroke();
  }

  const zones = [
    { x: 0, y: 0, head: 'Dibuang', body: 'Konteks kaya, tugas kabur. AI menulis esai panjang yang tidak bisa dipakai.', color: '#FEE2E2', ink: BRAND.warn },
    { x: 1, y: 0, head: 'Dipakai', body: 'Konteks kaya dan tugas spesifik. Keluaran bisa langsung dieksekusi hari itu juga.', color: '#DCFCE7', ink: '#047857' },
    { x: 0, y: 1, head: 'Berbahaya', body: 'Tugas kabur tanpa konteks. Hasil terlihat rapi tapi salah untuk bisnis Anda.', color: '#FEF3C7', ink: BRAND.warn },
    { x: 1, y: 1, head: 'Ditingkatkan', body: 'Tugas spesifik tanpa konteks. Struktur benar, angka dan saran tidak membumi.', color: '#E0E7FF', ink: BRAND.primary },
  ];

  zones.forEach((zone) => {
    const x = ox + zone.x * cell;
    const y = oy + zone.y * cell;
    card(ctx, { x: x + 6, y: y + 6, w: cell - 12, h: cell - 12, fill: zone.color, radius: 10 });
    ctx.fillStyle = zone.ink;
    ctx.font = `bold 34px ${SANS}`;
    ctx.textAlign = 'left';
    ctx.fillText(zone.head, x + 30, y + 62);
    ctx.fillStyle = BRAND.ink;
    ctx.font = `22px ${SANS}`;
    const lines = wrapText(ctx, zone.body, `22px ${SANS}`, cell - 60);
    lines.forEach((line, i) => ctx.fillText(line, x + 30, y + 118 + i * 32));
  });

  ctx.fillStyle = BRAND.muted;
  ctx.font = `bold 22px ${SANS}`;
  ctx.textAlign = 'center';
  ctx.fillText('Tugas tidak spesifik', ox + cell / 2, oy + size + 44);
  ctx.fillText('Tugas spesifik', ox + cell * 1.5, oy + size + 44);
  ctx.save();
  ctx.translate(ox - 40, oy + cell * 0.5);
  ctx.rotate(-Math.PI / 2);
  ctx.fillText('Konteks kaya', 0, 0);
  ctx.restore();
  ctx.save();
  ctx.translate(ox - 40, oy + cell * 1.5);
  ctx.rotate(-Math.PI / 2);
  ctx.fillText('Tanpa konteks', 0, 0);
  ctx.restore();

  const rx = ox + size + 60;
  card(ctx, { x: rx, y: oy, w: W - rx - 60, h: size, fill: BRAND.paper, stroke: BRAND.line });
  ctx.fillStyle = BRAND.primary;
  ctx.font = `bold 28px ${SANS}`;
  ctx.textAlign = 'left';
  ctx.fillText('Ciri kuadran Dipakai', rx + 26, oy + 54);
  ctx.fillStyle = BRAND.ink;
  ctx.font = `22px ${SANS}`;
  const checklist = [
    'Ada angka milik bisnis sendiri',
    'Ada satu kata kerja utama',
    'Ada bentuk keluaran yang jelas',
    'Ada batas panjang dan larangan',
    'Bisa diulang besok dengan data baru',
    'Hasilnya bisa langsung diverifikasi',
  ];
  checklist.forEach((item, i) => {
    ctx.fillStyle = BRAND.accent;
    ctx.fillRect(rx + 26, oy + 92 + i * 52, 16, 16);
    ctx.fillStyle = BRAND.ink;
    ctx.font = `23px ${SANS}`;
    ctx.fillText(item, rx + 56, oy + 107 + i * 52);
  });

  save(canvas, outDir, 'matriks-kualitas-prompt.png');
}

function main() {
  const argv = process.argv.slice(2);
  const outIndex = argv.indexOf('--out');
  const outDir = path.resolve(ROOT_DIR, outIndex >= 0 ? argv[outIndex + 1] : 'assets');
  fs.mkdirSync(outDir, { recursive: true });

  anatomyFigure(outDir);
  workflowFigure(outDir);
  matrixFigure(outDir);
}

const ROOT_DIR = path.join(__dirname, '..');

main();
