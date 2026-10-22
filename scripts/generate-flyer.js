#!/usr/bin/env node
/**
 * FlyerGenerator - Generates 2-page marketing flyers for digital products.
 *
 * Produces A4 portrait PDFs with SNISHOP branding, pricing, CTA, and QRIS code.
 * Each flyer is exactly 2 pages: Page 1 (Hook + Value), Page 2 (Details + CTA).
 */

const path = require('path');
const fs = require('fs');
const logger = require('../src/utils/logger');

const LOGO_PATH = path.join(__dirname, '..', '..', '..', '..', '..', 'LOGO', 'Logo snishop biru panjang.png');
const QRIS_PATH = path.join(__dirname, '..', '..', '..', '..', '..', 'LOGO', 'QRIS SNISHOP.ID.jpeg');

function ROOT_DIR() {
  return path.join(__dirname, '..');
}

function formatRupiah(amount) {
  return `Rp ${amount.toLocaleString('id-ID')}`;
}

function getTierBadge(tier) {
  const badges = {
    basic: { label: 'BASIC', color: '#10B981', bg: '#ECFDF5' },
    premium: { label: 'PREMIUM', color: '#7C3AED', bg: '#F5F3FF' },
    ultimate: { label: 'ULTIMATE', color: '#1E40AF', bg: '#EFF6FF' },
  };
  return badges[tier] || badges.basic;
}

function getProductShape(title) {
  const match = title.match(/(\d+)\s+(Prompt|Template)/i);
  const n = match ? Number(match[1]) : null;
  const kind = match ? match[2] : 'Prompt';
  return { n, kind };
}

function getTierBenefits(tier, title) {
  const { n, kind } = getProductShape(title);
  const kindLower = kind.toLowerCase();
  const benefits = {
    basic: [
      `${n} ${kindLower} siap pakai yang teruji untuk kebutuhan usaha nyata`,
      'Hemat 100+ jam brainstorming dari nol',
      'Cocok untuk pemula maupun profesional',
      'Update gratis selamanya',
    ],
    premium: [
      'Semua keuntungan Basic, plus:',
      `Contoh output nyata dari ChatGPT dan Gemini untuk ${kindLower} kunci di tiap bagian`,
      'Perbandingan hasil ChatGPT vs Gemini beserta kapan masing-masing lebih unggul',
      'Workbook Excel pendamping untuk mencatat pemakaian dan hasil',
      'Glossary variabel baku agar hasil AI tetap konsisten',
    ],
    ultimate: [
      'Semua keuntungan Premium, plus:',
      'Panduan otomasi langkah demi langkah dari input sampai konten jadi',
      'Studi kasus bisnis kecil yang sudah menerapkan alurnya',
      'Template kode integrasi khusus (Node.js, Python, PHP)',
      'Checklist implementasi dan panduan troubleshooting sebelum dipakai rutin',
    ],
  };
  return benefits[tier] || benefits.basic;
}

function getTierWhatsInside(tier, title) {
  const { n, kind } = getProductShape(title);
  const kindLower = kind.toLowerCase();
  const workflowClaim = /Copywriting|Iklan/i.test(title)
    ? '10 workflow otomasi konten dengan Make.com, Zapier, dan n8n'
    : /Template|Social Media/i.test(title)
      ? '10 workflow otomasi media sosial dari bank caption sampai laporan performa'
      : '10 workflow otomasi pekerjaan bisnis harian berbasis Google Sheets';
  const contents = {
    basic: [
      `${n} ${kindLower} AI siap pakai, terorganisir per kategori`,
      'Glossary variabel baku untuk kustomisasi mudah',
      'Checklist mutu sebelum dipakai di depan pelanggan',
      'Format PDF yang bisa dibaca di semua device',
    ],
    premium: [
      'Semua yang ada di Basic, plus:',
      'Contoh output nyata (bukan placeholder)',
      'Perbandingan hasil ChatGPT vs Gemini per contoh',
      'Workbook Excel pendamping dengan sheet kerja siap isi',
      'Tips memilih hasil terbaik untuk disalin ke pelanggan',
    ],
    ultimate: [
      'Semua yang ada di Premium, plus:',
      workflowClaim,
      'Studi kasus penerapan pada bisnis kecil nyata',
      'Template kode Node.js, Python, dan PHP untuk integrasi khusus',
      'Checklist implementasi otomasi dari nol sampai berjalan',
    ],
  };
  return contents[tier] || contents.basic;
}

class FlyerGenerator {
  async generate(config) {
    const { title, tier, pricing, slug } = config;
    const badge = getTierBadge(tier);
    const benefits = getTierBenefits(tier, title);
    const whatsInside = getTierWhatsInside(tier, title);
    const savingsPercent = Math.round((1 - pricing.launch / pricing.normal) * 100);

    const puppeteer = require('puppeteer');
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();

    const html = this.renderHTML({ title, tier, badge, benefits, whatsInside, pricing, savingsPercent, slug });
    await page.setContent(html, { waitUntil: 'domcontentloaded' });
    try {
      await page.waitForNetworkIdle({ idleTime: 500, timeout: 8000 });
    } catch {
      // offline or slow CDN: proceed with the system font stack
    }
    await page.evaluateHandle('document.fonts.ready');

    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: { top: '0', bottom: '0', left: '0', right: '0' },
    });

    await browser.close();

    logger.info('Flyer generated', {
      title,
      tier,
      sizeBytes: pdfBuffer.length,
    });

    return pdfBuffer;
  }

  renderHTML(config) {
    const { title, tier, badge, benefits, whatsInside, pricing, savingsPercent, slug } = config;
    const logoDataUri = this.embedImage(LOGO_PATH);
    const qrisDataUri = this.embedImage(QRIS_PATH);

    const benefitsHTML = benefits.map((b) => `<li>${b}</li>`).join('');
    const whatsInsideHTML = whatsInside.map((w) => `<li>${w}</li>`).join('');

    return `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <title>Flyer: ${title} [${tier.toUpperCase()}]</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap');

    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
      background: #ffffff;
      color: #1f2937;
      font-size: 11pt;
      line-height: 1.6;
    }

    .page {
      width: 210mm;
      min-height: 297mm;
      padding: 12mm 15mm;
      position: relative;
      page-break-after: always;
    }

    .page:last-child { page-break-after: auto; }

    /* Header */
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 8mm;
      border-bottom: 2px solid #1E40AF;
      margin-bottom: 8mm;
    }

    .header img {
      height: 14mm;
      width: auto;
    }

    .badge {
      display: inline-block;
      padding: 3pt 10pt;
      border-radius: 4pt;
      font-size: 9pt;
      font-weight: 800;
      letter-spacing: 1pt;
    }

    /* Hero */
    .hero {
      text-align: center;
      padding: 8mm 0;
      margin-bottom: 8mm;
    }

    .hero h1 {
      font-size: 22pt;
      font-weight: 900;
      color: #1E40AF;
      line-height: 1.3;
      margin-bottom: 4pt;
    }

    .hero .subheadline {
      font-size: 12pt;
      color: #4b5563;
      font-weight: 400;
    }

    /* Pain Points */
    .pain-points {
      background: #FEF2F2;
      border-left: 4px solid #EF4444;
      padding: 6mm 8mm;
      border-radius: 0 6pt 6pt 0;
      margin-bottom: 8mm;
    }

    .pain-points h2 {
      font-size: 13pt;
      color: #991B1B;
      margin-bottom: 4pt;
    }

    .pain-points ul {
      list-style: none;
      padding: 0;
    }

    .pain-points li {
      padding: 2pt 0;
      font-size: 10.5pt;
      color: #7F1D1D;
    }

    .pain-points li::before {
      content: '\\2717 ';
      color: #EF4444;
      font-weight: bold;
    }

    /* Solution */
    .solution {
      margin-bottom: 8mm;
    }

    .solution h2 {
      font-size: 13pt;
      color: #1E40AF;
      margin-bottom: 4pt;
    }

    .solution ul {
      list-style: none;
      padding: 0;
    }

    .solution li {
      padding: 3pt 0;
      font-size: 10.5pt;
      text-align: justify;
    }

    .solution li::before {
      content: '\\2713 ';
      color: #10B981;
      font-weight: bold;
      font-size: 12pt;
    }

    /* Pricing Box */
    .pricing-box {
      background: linear-gradient(135deg, #1E40AF 0%, #7C3AED 100%);
      color: white;
      padding: 8mm 10mm;
      border-radius: 8pt;
      text-align: center;
      margin: 6mm 0;
    }

    .pricing-box .normal-price {
      font-size: 11pt;
      text-decoration: line-through;
      opacity: 0.7;
    }

    .pricing-box .launch-price {
      font-size: 22pt;
      font-weight: 900;
      display: block;
      margin: 4pt 0;
    }

    .pricing-box .savings {
      font-size: 10pt;
      background: #10B981;
      display: inline-block;
      padding: 2pt 8pt;
      border-radius: 3pt;
      font-weight: 700;
    }

    /* CTA */
    .cta-section {
      text-align: center;
      padding: 6mm 0;
    }

    .cta-button {
      display: inline-block;
      background: #10B981;
      color: white;
      font-size: 14pt;
      font-weight: 800;
      padding: 5mm 15mm;
      border-radius: 6pt;
      text-decoration: none;
      letter-spacing: 1pt;
    }

    .cta-url {
      font-size: 9pt;
      color: #6b7280;
      margin-top: 4pt;
    }

    /* Guarantee */
    .guarantee {
      background: #F0FDF4;
      border: 1px solid #86EFAC;
      border-radius: 6pt;
      padding: 4mm 6mm;
      text-align: center;
      font-size: 10pt;
      color: #166534;
      margin: 4mm 0;
    }

    /* Footer */
    .footer {
      position: absolute;
      bottom: 10mm;
      left: 15mm;
      right: 15mm;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-top: 1px solid #e5e7eb;
      padding-top: 4mm;
    }

    .footer img {
      height: 8mm;
    }

    .support-section {
      text-align: right;
    }

    .support-section p {
      font-size: 8pt;
      color: #6b7280;
      margin-bottom: 2pt;
    }

    .support-section img {
      height: 15mm;
      width: 15mm;
    }

    /* Page 2 specific */
    .whats-inside h2 {
      font-size: 13pt;
      color: #1E40AF;
      margin-bottom: 4pt;
    }

    .whats-inside ul {
      list-style: none;
      padding: 0;
    }

    .whats-inside li {
      padding: 3pt 0;
      font-size: 10.5pt;
      text-align: justify;
    }

    .whats-inside li::before {
      content: '\\25B6 ';
      color: #7C3AED;
      font-size: 8pt;
    }

    .social-proof {
      background: #F5F3FF;
      border-radius: 6pt;
      padding: 4mm 6mm;
      margin: 4mm 0;
      text-align: center;
    }

    .social-proof p {
      font-size: 10.5pt;
      color: #5B21B6;
      font-weight: 600;
    }
  </style>
</head>
<body>

<!-- PAGE 1: Hook & Value Proposition -->
<div class="page">
  <div class="header">
    ${logoDataUri ? `<img src="${logoDataUri}" alt="SNISHOP" />` : '<span style="font-size:16pt;font-weight:900;color:#1E40AF;">SNISHOP</span>'}
    <span class="badge" style="background:${badge.bg};color:${badge.color};">${badge.label}</span>
  </div>

  <div class="hero">
    <h1>${title}</h1>
    <p class="subheadline">Kumpulan ${getProductShape(title).kind.toLowerCase()} AI teruji untuk hasil maksimal dalam waktu minimal</p>
  </div>

  <div class="pain-points">
    <h2>Apakah Anda mengalami ini?</h2>
    <ul>
      <li>Bingung harus ngetik apa di ChatGPT untuk dapat hasil yang bagus</li>
      <li>Sudah coba berbagai ${getProductShape(title).kind.toLowerCase()} tapi hasilnya selalu kurang memuaskan</li>
      <li>Butuh berjam-jam hanya untuk membuat satu konten yang berkualitas</li>
    </ul>
  </div>

  <div class="solution">
    <h2>Dengan produk ini, Anda mendapat:</h2>
    <ul>${benefitsHTML}</ul>
  </div>

  <div class="footer">
    ${logoDataUri ? `<img src="${logoDataUri}" alt="SNISHOP" />` : '<span style="font-size:10pt;font-weight:700;color:#1E40AF;">SNISHOP</span>'}
    <div class="support-section">
      <p>Dukung Tim SNISHOP</p>
      ${qrisDataUri ? `<img src="${qrisDataUri}" alt="QRIS SNISHOP.ID" />` : ''}
    </div>
  </div>
</div>

<!-- PAGE 2: Details, Pricing & CTA -->
<div class="page">
  <div class="header">
    ${logoDataUri ? `<img src="${logoDataUri}" alt="SNISHOP" />` : '<span style="font-size:16pt;font-weight:900;color:#1E40AF;">SNISHOP</span>'}
    <span class="badge" style="background:${badge.bg};color:${badge.color};">${badge.label}</span>
  </div>

  <div class="whats-inside">
    <h2>Produk ini berisi:</h2>
    <ul>${whatsInsideHTML}</ul>
  </div>

  <div class="pricing-box">
    <span class="normal-price">Harga Normal: ${formatRupiah(pricing.normal)}</span>
    <span class="launch-price">${formatRupiah(pricing.launch)}</span>
    <span class="savings">HEMAT ${savingsPercent}% - PROMO LAUNCHING!</span>
  </div>

  <div class="social-proof">
    <p>Diproduksi langsung oleh tim SNISHOP: semua contoh nyata, tanpa placeholder, dan sudah diperiksa baris demi baris sebelum rilis.</p>
  </div>

  <div class="cta-section">
    <a href="https://app.snishop.com" class="cta-button">BELI SEKARANG</a>
    <p class="cta-url">app.snishop.com atau scan QR code di bawah</p>
  </div>

  <div class="guarantee">
    <strong>Garansi 30 Hari Uang Kembali 100%</strong><br />
    Tidak puas? Chat kami dan refund langsung, tanpa pertanyaan.
  </div>

  <div class="footer">
    ${logoDataUri ? `<img src="${logoDataUri}" alt="SNISHOP" />` : '<span style="font-size:10pt;font-weight:700;color:#1E40AF;">SNISHOP</span>'}
    <div class="support-section">
      <p>Dukung Tim SNISHOP</p>
      ${qrisDataUri ? `<img src="${qrisDataUri}" alt="QRIS SNISHOP.ID" />` : ''}
    </div>
  </div>
</div>

</body>
</html>`;
  }

  embedImage(filePath) {
    if (!fs.existsSync(filePath)) return null;
    const ext = path.extname(filePath).toLowerCase();
    const mimeMap = { '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg' };
    const mime = mimeMap[ext];
    if (!mime) return null;
    const data = fs.readFileSync(filePath).toString('base64');
    return `data:${mime};base64,${data}`;
  }
}

module.exports = FlyerGenerator;
