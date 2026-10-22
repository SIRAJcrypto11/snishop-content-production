const fs = require('fs');

const tables = {
  1: `| P-001 s/d P-002 | Headline | Membuat judul produk/jasa |
| P-003 s/d P-004 | Deskripsi Produk | Katalog, marketplace, landing page |
| P-005 s/d P-006 | Call-to-Action | Tombol pembelian atau nurturing |
| P-007 s/d P-008 | Storytelling | About page, testimoni |
| P-009 s/d P-014 | Brand Messaging | Positioning, tagline, mission |
| P-015 s/d P-017 | Value Proposition | USP, benefit list, feature translation |
| P-018 s/d P-020 | Objection Handling | FAQ, pricing justification, offers |
| P-021 s/d P-024 | Announcements | Launch, update, promotion, bundle |
| P-025 s/d P-028 | Sales Tactics | Cross-sell, upsell, guarantee |
| P-029 s/d P-030 | Trust Building | Social proof, authority |
| P-031 s/d P-040 | Framework Copy | PAS, BAB, AIDA, emotional, logical |
| P-041 s/d P-045 | Headline Formulas | Curiosity, how-to, listicle, question |
| P-046 s/d P-050 | Advanced Content | Testimonial, case study, press release |`,
};

const localized = {
  1: `| P-001 s/d P-002 | Headline | Membuat judul produk/jasa |
| P-003 s/d P-004 | Deskripsi Produk | Katalog, marketplace, landing page |
| P-005 s/d P-006 | Call-to-Action | Tombol pembelian atau merawat prospek |
| P-007 s/d P-008 | Storytelling | Halaman tentang kami, testimoni |
| P-009 s/d P-014 | Pesan Merek | Positioning, tagline, misi |
| P-015 s/d P-017 | Proposisi Nilai | USP, daftar manfaat, penerjemahan fitur |
| P-018 s/d P-020 | Penanganan Keberatan | FAQ, justifikasi harga, penawaran |
| P-021 s/d P-024 | Pengumuman | Peluncuran, pembaruan, promosi, bundel |
| P-025 s/d P-028 | Taktik Penjualan | Cross-sell, upsell, jaminan |
| P-029 s/d P-030 | Membangun Kepercayaan | Social proof, otoritas |
| P-031 s/d P-040 | Kerangka Copy | PAS, BAB, AIDA, emosional, logis |
| P-041 s/d P-045 | Rumus Headline | Rasa penasaran, how-to, listicle, pertanyaan |
| P-046 s/d P-050 | Konten Tingkat Lanjut | Testimoni, studi kasus, siaran pers |`,
};

tables[2] = `| P-051 s/d P-055 | Instagram | Caption, Story, Reel, Carousel, Bio |
| P-056 s/d P-059 | TikTok | Script, Trend, Hook, Caption |
| P-060 s/d P-063 | Facebook | Ads, Post Organik |
| P-064 s/d P-065 | Twitter/X | Thread, Single Tweet |
| P-066 s/d P-067 | LinkedIn | Post, Article |
| P-068 s/d P-070 | YouTube | Title, Description, Shorts |
| P-071 s/d P-072 | Messaging | WhatsApp, Telegram |
| P-073 s/d P-075 | Lainnya | Pinterest, Calendar, Bio Link |
| P-076 s/d P-100 | Advanced | Edukasi, Series, Group, Event |
| P-101 s/d P-120 | Specialized | Cross-platform, SEO, Campaign |`;

localized[2] = `| P-051 s/d P-055 | Instagram | Caption, Story, Reel, Carousel, Bio |
| P-056 s/d P-059 | TikTok | Naskah, Tren, Hook, Caption |
| P-060 s/d P-063 | Facebook | Iklan, Post Organik |
| P-064 s/d P-065 | Twitter/X | Thread, Tweet Tunggal |
| P-066 s/d P-067 | LinkedIn | Post, Artikel |
| P-068 s/d P-070 | YouTube | Judul, Deskripsi, Shorts |
| P-071 s/d P-072 | Pesan Langsung | WhatsApp, Telegram |
| P-073 s/d P-075 | Lainnya | Pinterest, Kalender, Bio Link |
| P-076 s/d P-100 | Tingkat Lanjut | Edukasi, Seri, Grup, Acara |
| P-101 s/d P-120 | Terkhusus | Lintas platform, SEO, Kampanye |`;

tables[3] = `| P-121 s/d P-125 | Lifecycle | Welcome, promo, newsletter, cart, re-engagement |
| P-126 s/d P-130 | Post-Purchase | Follow-up, launch, flash sale, edukasi, testimoni |
| P-131 s/d P-135 | Growth | Referral, seasonal, win-back, upsell, cross-sell |
| P-136 s/d P-140 | Relationship | Birthday, milestone, survey, event, update |
| P-141 s/d P-145 | Operational | Maintenance, security, invoice, reminder, renewal |
| P-146 s/d P-150 | Administrative | Cancellation, loyalty, VIP, feedback, announcement |
| P-151 s/d P-155 | Special | Holiday, year review, stock alert, back stock, price |
| P-156 s/d P-160 | Support | Feature request, bug fix, verification, password, 2FA |
| P-161 s/d P-165 | Security & Data | Login alert, export, trial, onboarding, achievement |
| P-166 s/d P-170 | Engagement | Milestone, inactivity, feature, integration, success story |`;

localized[3] = `| P-121 s/d P-125 | Siklus Hidup | Sambutan, promo, newsletter, keranjang, pengaktifan ulang |
| P-126 s/d P-130 | Pascabeli | Tindak lanjut, peluncuran, flash sale, edukasi, testimoni |
| P-131 s/d P-135 | Pertumbuhan | Referral, musiman, win-back, upsell, cross-sell |
| P-136 s/d P-140 | Relasi | Ulang tahun, tonggak pencapaian, survei, acara, pembaruan |
| P-141 s/d P-145 | Operasional | Pemeliharaan, keamanan, invoice, pengingat, perpanjangan |
| P-146 s/d P-150 | Administratif | Pembatalan, loyalitas, VIP, umpan balik, pengumuman |
| P-151 s/d P-155 | Khusus | Liburan, rekap tahun, peringatan stok, stok kembali, harga |
| P-156 s/d P-160 | Dukungan | Permintaan fitur, perbaikan bug, verifikasi, kata sandi, 2FA |
| P-161 s/d P-165 | Keamanan & Data | Peringatan login, ekspor, uji coba, onboarding, pencapaian |
| P-166 s/d P-170 | Keterlibatan | Tonggak pencapaian, tidak aktif, fitur, integrasi, kisah sukses |`;

tables[4] = `| P-171 s/d P-185 | Landing Page | Hero, problem, solution, social proof, feature, pricing, FAQ, testimonial, CTA, about, homepage |
| P-186 s/d P-189 | Pricing Page | Header, package card, comparison table, FAQ |
| P-190 s/d P-193 | Feature Page | Hero, benefits, how it works, use cases |
| P-194 s/d P-197 | About Page | Hero, story, team, values |
| P-198 s/d P-200 | Contact Page | Hero, form, map |
| P-201 s/d P-203 | Blog Post | Hero, introduction, conclusion |
| P-204 s/d P-207 | Product Page | Hero, description, gallery, reviews |
| P-208 s/d P-210 | Checkout Page | Header, form, summary |
| P-211 s/d P-220 | Special Pages | 404, thank you, comparison, guarantee, urgency, video, demo, newsletter, popup, chat |`;

localized[4] = `| P-171 s/d P-185 | Landing Page | Hero, masalah, solusi, social proof, fitur, harga, FAQ, testimoni, CTA, tentang kami, homepage |
| P-186 s/d P-189 | Halaman Harga | Header, kartu paket, tabel perbandingan, FAQ |
| P-190 s/d P-193 | Halaman Fitur | Hero, manfaat, cara kerja, studi penggunaan |
| P-194 s/d P-197 | Halaman Tentang Kami | Hero, kisah, tim, nilai |
| P-198 s/d P-200 | Halaman Kontak | Hero, formulir, peta |
| P-201 s/d P-203 | Artikel Blog | Hero, pendahuluan, kesimpulan |
| P-204 s/d P-207 | Halaman Produk | Hero, deskripsi, galeri, ulasan |
| P-208 s/d P-210 | Halaman Checkout | Header, formulir, ringkasan |
| P-211 s/d P-220 | Halaman Khusus | 404, ucapan terima kasih, perbandingan, jaminan, urgensi, video, demo, newsletter, popup, chat |`;

tables[5] = `| P-221 s/d P-227 | YouTube | Script, hook, intro, outro, title, description, Shorts |
| P-228 s/d P-232 | Podcast | Episode outline, intro, outro, interview, solo |
| P-233 s/d P-235 | Webinar | Script, opening, pitch |
| P-236 s/d P-240 | Live & Tutorial | Live streaming, tutorial, demo, testimonial, case study |
| P-241 s/d P-244 | Video Ads | Explainer, 15s, 30s, 60s |
| P-245 s/d P-250 | Support | Show notes, caption, teaser, B-roll, ad read |
| P-251 s/d P-260 | Optimization | Title, thumbnail, CTA, engagement, series, recap, Q&A, end screen |`;

localized[5] = `| P-221 s/d P-227 | YouTube | Naskah, hook, intro, outro, judul, deskripsi, Shorts |
| P-228 s/d P-232 | Podcast | Kerangka episode, intro, outro, wawancara, solo |
| P-233 s/d P-235 | Webinar | Naskah, pembukaan, pitch |
| P-236 s/d P-240 | Live & Tutorial | Live streaming, tutorial, demo, testimoni, studi kasus |
| P-241 s/d P-244 | Iklan Video | Penjelasan, 15 detik, 30 detik, 60 detik |
| P-245 s/d P-250 | Pendukung | Show notes, caption, teaser, B-roll, pembacaan iklan |
| P-251 s/d P-260 | Optimasi | Judul, thumbnail, CTA, interaksi, seri, rekap, tanya jawab, layar akhir |`;

tables[6] = `| P-261 s/d P-264 | Testing | A/B testing headline, CTA, scarcity, urgency |
| P-265 s/d P-269 | Psychological Triggers | Social proof, authority, reciprocity, commitment, liking |
| P-270 s/d P-274 | Frameworks | Consistency, brand voice, emotional, logical, storytelling |
| P-275 s/d P-279 | Strategy | Persuasion sequence, objection handling, value prop, journey, optimization |
| P-280 s/d P-284 | Tools | Headline formulas, power words, editing checklist, swipe file, analysis |
| P-285 s/d P-289 | Specialized | Competitor, localization, accessibility, multilingual, testing |
| P-290 s/d P-294 | Advanced | ROI calculator, persona, messaging hierarchy, tone variation, framework selection |
| P-295 s/d P-300 | Management | Optimization playbook, QA, handoff, style guide, dashboard, portfolio |`;

localized[6] = `| P-261 s/d P-264 | Pengujian | A/B testing headline, CTA, kelangkaan, urgensi |
| P-265 s/d P-269 | Pemicu Psikologis | Social proof, otoritas, resiprositas, komitmen, kesukaan |
| P-270 s/d P-274 | Kerangka | Konsistensi, gaya bahasa merek, emosional, logis, storytelling |
| P-275 s/d P-279 | Strategi | Sekuens persuasi, penanganan keberatan, proposisi nilai, perjalanan pelanggan, optimasi |
| P-280 s/d P-284 | Peralatan | Rumus headline, power words, checklist penyuntingan, swipe file, analisis |
| P-285 s/d P-289 | Terkhusus | Kompetitor, lokalisasi, aksesibilitas, multibahasa, pengujian |
| P-290 s/d P-294 | Tingkat Lanjut | Kalkulator ROI, persona, hierarki pesan, variasi nada, pemilihan kerangka |
| P-295 s/d P-300 | Manajemen | Playbook optimasi, QA, serah terima, panduan gaya bahasa, dasbor, portofolio |`;

const extras = [
  ['Buat thank you page content untuk [NAMA_PELANGGAN]', 'Buat konten halaman ucapan terima kasih (thank you page) untuk [NAMA_PELANGGAN]'],
  ['Thank you page harus celebratif dan informatif.', 'Halaman ini harus celebratif dan informatif.'],
  ['(1) Opening text: "Best of [periode]"', '(1) Teks pembuka: "Best of [periode]"'],
  ['(6) Closing dengan thank you atau CTA.', '(6) Penutup dengan ucapan terima kasih atau CTA.'],
  ['Buatkan email thank you untuk {customer_name}', 'Buatkan email ucapan terima kasih untuk {customer_name}'],
];

const files = [
  'drafts/300-prompt-ai-untuk-copywriting-dan-iklan-digital.md',
  'drafts/300-prompt-copywriting-premium.md',
  'drafts/300-prompt-copywriting-ultimate.md',
];

for (const file of files) {
  let md = fs.readFileSync(file, 'utf8');
  let tableHits = 0;
  for (const n of [1, 2, 3, 4, 5, 6]) {
    if (md.includes(tables[n])) {
      md = md.replace(tables[n], localized[n]);
      tableHits++;
    }
  }
  let extraHits = 0;
  for (const [from, to] of extras) {
    while (md.includes(from)) {
      md = md.replace(from, to);
      extraHits++;
    }
  }
  fs.writeFileSync(file, md);
  console.log(`${file}: ${tableHits}/6 tables localized, ${extraHits} extra replacements`);
}
