#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DRAFTS = path.join(ROOT, 'drafts');

let totalApplied = 0;
let totalMissed = [];

function edit(file, label, oldText, newText, min = 1) {
  const p = path.join(DRAFTS, file);
  let md = fs.readFileSync(p, 'utf8');
  const count = md.split(oldText).length - 1;
  if (count < min) {
    totalMissed.push(`${file} :: ${label} (found ${count}, expected >= ${min})`);
    return;
  }
  md = md.split(oldText).join(newText);
  fs.writeFileSync(p, md);
  totalApplied++;
  console.log(`OK  ${file} :: ${label} x${count}`);
}

function editRegex(file, label, re, newText, min = 1) {
  const p = path.join(DRAFTS, file);
  let md = fs.readFileSync(p, 'utf8');
  const matches = md.match(re);
  const count = matches ? matches.length : 0;
  if (count < min) {
    totalMissed.push(`${file} :: ${label} (found ${count}, expected >= ${min})`);
    return;
  }
  md = md.replace(re, newText);
  fs.writeFileSync(p, md);
  totalApplied++;
  console.log(`OK  ${file} :: ${label} x${count}`);
}

// ============================================================
// P1: library -> perpustakaan + Lampiran C intro sentence
// ============================================================
const P1_FILES = [
  '150-prompt-ai-untuk-bisnis-dan-umkm-indonesia.md',
  '150-prompt-umkm-premium.md',
  '150-prompt-umkm-ultimate.md',
];
for (const f of P1_FILES) {
  edit(f, 'Library -> Perpustakaan', 'Library', 'Perpustakaan');
  edit(f, 'library -> perpustakaan', 'library', 'perpustakaan');
  edit(
    f,
    'Lampiran C intro',
    '## Lampiran C. Daftar variabel baku\n\n| Variabel | Arti | Contoh |',
    '## Lampiran C. Daftar variabel baku\n\nTabel di bawah memakai contoh bisnis yang sama supaya terlihat cara mengisi setiap variabel. Variabel lain yang hanya muncul di satu atau dua prompt dijelaskan langsung di dalam promptnya.\n\n| Variabel | Arti | Contoh |'
  );
}

// ============================================================
// P2: framework examples in Indonesian, library -> perpustakaan
// ============================================================
const P2_FILES = [
  '300-prompt-ai-untuk-copywriting-dan-iklan-digital.md',
  '300-prompt-copywriting-premium.md',
  '300-prompt-copywriting-ultimate.md',
];
for (const f of P2_FILES) {
  edit(f, 'Library -> Perpustakaan', 'Library', 'Perpustakaan');
  edit(f, 'library -> perpustakaan', 'library', 'perpustakaan');
  edit(f, 'Kapan gunakan -> Kapan dipakai', 'Kapan gunakan:', 'Kapan dipakai:');
  edit(
    f,
    'framework intro',
    'Berikut adalah framework copywriting yang paling efektif dan kapan menggunakannya.',
    'Berikut framework copywriting yang paling efektif dan kapan memakainya.'
  );
  edit(
    f,
    'AIDA contoh',
    'Dengan 300 prompt siap pakai, Anda tidak perlu lagi staring at blank screen (Interest). Setiap prompt sudah diuji untuk menghasilkan copy yang converting (Desire). Download ebook sekarang dan mulai buat copy yang menjual hari ini juga (Action).',
    'Dengan 300 prompt siap pakai, Anda tidak perlu lagi menatap layar kosong (Interest). Setiap prompt sudah diuji untuk menghasilkan copy yang menjual (Desire). Unduh ebook sekarang dan mulai buat copy yang menjual hari ini juga (Action).'
  );
  edit(
    f,
    'PAS contoh',
    'Setiap hari Anda melihat kompetitor mendapatkan likes dan comments sementara postingan Anda diabaikan. Ini bukan hanya masalah ego, ini masalah bisnis. Setiap post yang tidak converting adalah uang yang terbuang (Agitate). Dengan 300 prompt copywriting yang sudah terbukti efektif, Anda bisa membuat caption yang engaging dalam 5 menit (Solve).',
    'Setiap hari Anda melihat kompetitor mendapatkan like dan komentar sementara postingan Anda diabaikan. Ini bukan hanya masalah ego, ini masalah bisnis. Setiap posting yang tidak menjual adalah uang yang terbuang (Agitate). Dengan 300 prompt copywriting yang sudah terbukti efektif, Anda bisa membuat caption yang menarik dalam 5 menit (Solve).'
  );
  edit(
    f,
    'BAB contoh',
    '"Sebelum menggunakan prompt library ini, saya menghabiskan 2 jam untuk membuat satu caption Instagram. Hasilnya? Engagement rate hanya 2% (Before). Sekarang, saya bisa membuat 10 caption berkualitas dalam 30 menit. Engagement rate naik menjadi 8% (After). Rahasianya? 300 prompt yang sudah diuji dan terbukti converting. Anda juga bisa mendapatkan hasil yang sama (Bridge)."',
    '"Dulu saya butuh dua jam untuk satu caption Instagram, dan engagement rate-nya mentok di 2 persen (Before). Setelah memakai perpustakaan prompt ini, sepuluh caption selesai dalam 30 menit dan engagement rate naik ke 8 persen (After). Yang berubah: saya tidak lagi menulis dari nol, tetapi mengisi kerangka prompt yang strukturnya sudah teruji (Bridge)."'
  );
  edit(f, '4U subject line', '- Subject line email', '- Baris subjek email');
  edit(f, '4U headline', '"Download 300 Prompt Copywriting dalam 10 Menit', '"Unduh 300 Prompt Copywriting dalam 10 Menit');
  edit(f, 'FAB product description', '- Product description', '- Deskripsi produk');
  edit(f, 'FAB sales pitch', '- Sales pitch', '- Pitch penjualan');
  edit(
    f,
    'FAB contoh',
    'mudah dinavigasi, dan bisa di-filter (Advantages). Manfaat: Anda bisa menemukan prompt yang tepat dalam 30 detik dan langsung membuat copy yang converting tanpa staring at blank screen (Benefits).',
    'mudah dinavigasi, dan bisa disaring (Advantages). Manfaat: Anda bisa menemukan prompt yang tepat dalam 30 detik dan langsung membuat copy yang menjual tanpa menatap layar kosong (Benefits).'
  );
  edit(f, 'QUEST webinar script', '- Webinar script', '- Naskah webinar');
  edit(f, 'QUEST educate', '3. Educate: Berikan informasi atau insight baru', '3. Educate: Berikan informasi atau wawasan baru');
  edit(f, 'QUEST stimulate', '4. Stimulate: Bangun desire untuk solusi', '4. Stimulate: Bangun keinginan untuk solusi');
  edit(f, 'PASP email sequence', '- Email sequence', '- Rangkaian email');
  edit(f, 'STAR blog post', '- Blog post', '- Posting blog');
  edit(f, 'STAR newsletter', '- Email newsletter', '- Buletin email');
  edit(f, '4P sales copy', '- Sales copy', '- Copy penjualan');
  edit(f, 'Slippery transition', '- Transition yang smooth antar paragraf', '- Peralihan yang mulus antar paragraf');
  edit(f, 'Slippery cliffhanger', '- Cliffhanger di akhir section', '- Cliffhanger di akhir bagian');
  edit(f, 'Pyramid news writing', '- News writing', '- Penulisan berita');
  edit(f, 'Pyramid press release', '- Press release', '- Siaran pers');
  edit(f, 'Pyramid struktur', '1. Most important information di awal\n2. Supporting details di tengah\n3. Background information di akhir', '1. Informasi terpenting di awal\n2. Rincian pendukung di tengah\n3. Informasi latar di akhir');
  edit(
    f,
    'memilih framework',
    '**Choosing the Right Framework:**\n\nUntuk memilih framework yang tepat, pertimbangkan:\n1. Tujuan konten (awareness, consideration, conversion)\n2. Target audiens (cold, warm, hot)\n3. Platform (social media, email, landing page)\n4. Length (short, medium, long)\n5. Tone (educational, promotional, storytelling)',
    '**Memilih Framework yang Tepat:**\n\nUntuk memilih framework yang tepat, pertimbangkan:\n1. Tujuan konten (kesadaran, pertimbangan, pembelian)\n2. Suhu audiens (dingin, hangat, panas)\n3. Platform (media sosial, email, landing page)\n4. Panjang (singkat, sedang, panjang)\n5. Nada (edukatif, promosi, storytelling)'
  );
  edit(
    f,
    'experiment line',
    'Tidak ada framework yang sempurna untuk semua situasi. Experiment dengan berbagai framework dan track mana yang paling efektif untuk audiens Anda.',
    'Tidak ada framework yang sempurna untuk semua situasi. Uji berbagai framework dan catat mana yang paling efektif untuk audiens Anda.'
  );
  edit(f, 'Scale step', '5. **Scale:** Bangun', '5. **Kembangkan:** Bangun');
  edit(
    f,
    'prinsip utama',
    'Prompt adalah alat, bukan pengganti kreativitas. Gunakan prompt sebagai starting point, lalu tambahkan konteks spesifik bisnis Anda, brand voice Anda, dan insight Anda tentang audiens Anda. AI akan membantu Anda bekerja lebih cepat, tapi judgment dan creativity Anda yang akan membuat copy benar-benar outstanding.',
    'Prompt adalah alat, bukan pengganti kreativitas. Gunakan prompt sebagai titik awal, lalu tambahkan konteks spesifik bisnis Anda, gaya bahasa merek Anda, dan wawasan Anda tentang audiens Anda. AI membantu Anda bekerja lebih cepat, tetapi penilaian dan kreativitas Anda yang membuat copy benar-benar istimewa.'
  );
  edit(f, 'penutup engaging', 'lebih efektif, efisien, dan engaging.', 'lebih efektif, efisien, dan menarik.');
}

// ============================================================
// P3 basic: intro, struktur konten, tokens, lampiran
// ============================================================
const B3 = '200-template-social-media-basic.md';

edit(B3, 'subtitle', '**Panduan Lengkap Mengelola Social Media dengan AI**', '**Panduan Lengkap Mengelola Media Sosial dengan AI**');
edit(
  B3,
  'tentang buku',
  'Buku ini berisi 200 template AI yang dirancang khusus untuk mengelola social media bisnis Anda. Setiap template sudah diuji untuk menghasilkan konten yang engaging, profesional, dan tidak terlihat dibuat oleh AI.',
  'Buku ini berisi 200 template AI yang dirancang khusus untuk mengelola media sosial bisnis Anda. Setiap template sudah diuji untuk menghasilkan konten yang menarik, profesional, dan tidak terlihat dibuat oleh AI.'
);
edit(
  B3,
  'cocok untuk',
  'Template ini cocok untuk:\n- Pemilik UMKM yang mengelola social media sendiri\n- Social media manager yang ingin meningkatkan produktivitas\n- Content creator yang butuh referensi cepat\n- Tim marketing yang ingin scale content production\n- Freelancer social media yang mencari template siap pakai',
  'Template ini cocok untuk:\n- Pemilik UMKM yang mengelola media sosial sendiri\n- Pengelola media sosial yang ingin meningkatkan produktivitas\n- Kreator konten yang butuh referensi cepat\n- Tim pemasaran yang ingin mempercepat produksi konten\n- Freelancer media sosial yang mencari template siap pakai'
);
edit(
  B3,
  'struktur konten',
  `## Struktur Konten

**Bagian 1: Content Planning (T-001 hingga T-040)**
- Content calendar creation
- Theme ideation
- Audience research
- Competitor analysis
- Content pillar development

**Bagian 2: Caption Writing (T-041 hingga T-080)**
- Instagram captions
- Facebook posts
- TikTok scripts
- Twitter/X threads
- LinkedIn posts

**Bagian 3: Visual Content (T-081 hingga T-120)**
- Image caption ideas
- Video script templates
- Story concepts
- Reel ideas
- Carousel structures

**Bagian 4: Engagement (T-121 hingga T-160)**
- Comment responses
- DM templates
- Poll and question ideas
- Contest and giveaway
- Community building

**Bagian 5: Analytics and Optimization (T-161 hingga T-200)**
- Performance analysis
- A/B testing ideas
- Growth strategies
- Reporting templates
- Strategy refinement

**Lampiran**
- A. Cara memakai workbook Excel pendamping
- B. Template content calendar bulanan
- C. Daftar hashtag relevan per industri
- D. Checklist kualitas konten social media
- E. Best practices per platform`,
  `## Struktur Konten

**Bagian 1: Perencanaan Konten (T-001 hingga T-040)**
- Pembuatan kalender konten
- Penggalian tema
- Riset audiens
- Analisis kompetitor
- Pengembangan pilar konten

**Bagian 2: Penulisan Caption (T-041 hingga T-080)**
- Caption Instagram
- Posting Facebook
- Naskah TikTok
- Utas Twitter/X
- Posting LinkedIn

**Bagian 3: Konten Visual (T-081 hingga T-120)**
- Ide caption gambar
- Templat naskah video
- Konsep story
- Ide reel
- Struktur carousel

**Bagian 4: Interaksi dan Komunitas (T-121 hingga T-160)**
- Respons komentar
- Templat pesan langsung
- Ide poling dan pertanyaan
- Kontes dan giveaway
- Membangun komunitas

**Bagian 5: Analitik dan Optimasi (T-161 hingga T-200)**
- Analisis performa
- Ide pengujian A/B
- Strategi pertumbuhan
- Templat pelaporan
- Penyempurnaan strategi

**Lampiran**
- A. Cara memakai berkas Excel pendamping
- B. Contoh kalender konten 30 hari terisi
- C. Daftar hashtag per industri
- D. Checklist kualitas sebelum posting
- E. Kebiasaan terbaik per platform
- F. Daftar variabel yang sering dipakai`
);

// token unification
edit(B3, '[GOAL] -> [TUJUAN]', '[GOAL]', '[TUJUAN]');
edit(B3, '[PRODUCT] -> [PRODUK]', '[PRODUCT]', '[PRODUK]');
edit(B3, '[CHANNEL] -> [KANAL]', '[CHANNEL]', '[KANAL]');
edit(B3, '[AUDIENCE] -> [AUDIENS]', '[AUDIENCE]', '[AUDIENS]');
edit(B3, '[TARGET] -> [AUDIENS]', '[TARGET]', '[AUDIENS]');
edit(B3, '[METRICS] -> [METRIK]', '[METRICS]', '[METRIK]');
edit(B3, 'GOAL_KUARTAL token', 'GOAL_KUARTAL_DEPAN', 'TUJUAN_KUARTAL_DEPAN');

// desc lines that contained English
edit(B3, 'desc tujuan bulan', '[TUJUAN]: tujuan bulan ini (awareness/sales/engagement)', '[TUJUAN]: tujuan bulan ini (awareness/penjualan/engagement)');
edit(B3, 'desc tujuan event', '[TUJUAN]: tujuan event (leads, penjualan, brand)', '[TUJUAN]: tujuan acara (calon pembeli, penjualan, mengenalkan merek)');
edit(B3, 'desc audiens 1', '[AUDIENS]: target pembeli', '[AUDIENS]: pembeli atau pengikut yang dituju');
edit(B3, 'desc audiens 2', '[AUDIENS]: target audience', '[AUDIENS]: pembeli atau pengikut yang dituju');
edit(B3, 'desc produk opsional', '[PRODUK]: produk yang ingin dipromosikan (opsional)', '[PRODUK]: produk yang ingin dipromosikan (jika ada)');
edit(B3, 'desc kanal', '[KANAL]: channel komunikasi dengan pelanggan', '[KANAL]: kanal komunikasi dengan pelanggan');
edit(B3, 'desc metrik track', '[METRIK]: metrics yang di-track (followers/engagement/reach/conversions)', '[METRIK]: metrik yang dicatat (followers/engagement/reach/konversi)');
edit(B3, 'desc goal bulanan', '[TUJUAN]: goal bulanan', '[TUJUAN]: tujuan bulan ini');
edit(B3, 'desc jenis komentar', '[JENIS_KOMENTAR]: jenis komentar (positive/question/complaint/compliment)', '[JENIS_KOMENTAR]: jenis komentar (positif/pertanyaan/keluhan/pujian)');
edit(B3, 'desc brand voice', '[BRAND_VOICE]: tone dan style brand Anda', '[BRAND_VOICE]: gaya bahasa merek Anda');
edit(B3, 'desc tone', '[TONE]: tone humor (sarcastic/wholesome/self-deprecating)', '[TONE]: gaya humor (sarkastik/hangat/menggertak diri sendiri)');
edit(B3, 'desc format', '[FORMAT]: format (list/comparison/timeline/process)', '[FORMAT]: bentuk penyajian (daftar/perbandingan/garis waktu/langkah)');
edit(B3, 'desc pillar', '[PILLAR]: 3-5 content pillar bisnis Anda', '[PILLAR]: 3-5 pilar konten bisnis Anda');
edit(B3, 'desc kinerja', '[METRIK]: metrics yang dianalisis (reach/engagement/saves/shares)', '[METRIK]: metrik yang dianalisis (reach/engagement/simpan/bagikan)');

// template body role names and structured English
edit(B3, 'strategy consultant', 'Sebagai strategy consultant, lakukan refresh strategi kuartalan.', 'Sebagai konsultan strategi, lakukan penyegaran strategi kuartalan.');
edit(B3, 'menyumbang goal', '(yang tidak menyumbang goal)', '(yang tidak menyumbang tujuan)');
edit(B3, 'marketing strategist', 'Sebagai marketing strategist, buatkan seasonal content calendar', 'Sebagai perancang strategi pemasaran, buatkan kalender konten musiman');
edit(B3, 'Include:', 'Include:', 'Sertakan:');
edit(B3, 'entertainment', 'event olahraga atau entertainment besar', 'acara olahraga atau hiburan besar');
edit(B3, 'estimated boost', 'estimated engagement boost', 'perkiraan tambahan engagement');
edit(B3, 'analytics specialist', 'Sebagai analytics specialist, ajari saya memakai parameter UTM', 'Sebagai analis data, ajari saya memakai parameter UTM');
edit(B3, 'analytics setup', 'Sebagai analytics setup specialist, susun daftar data', 'Sebagai ahli penyiapan analitik, susun daftar data');
edit(B3, 'strategy calendar opener', 'membuat strategy, calendar, dan ide konten', 'menyusun strategi, kalender, dan ide konten');
edit(B3, 'caption engaging opener', '40 template untuk menulis caption social media yang engaging.', '40 template untuk menulis caption media sosial yang menarik.');

// blanket prose words (basic only; premium/ultimate rebuilt from this)
edit(B3, 'content calendar -> kalender konten', 'content calendar', 'kalender konten');
edit(B3, 'planning -> perencanaan', 'planning', 'perencanaan');
edit(B3, 'social media -> media sosial', 'social media', 'media sosial');

// ---- Lampiran rewrite: replace from '## Lampiran' to end of file ----
const basicPath = path.join(DRAFTS, B3);
let basic = fs.readFileSync(basicPath, 'utf8');
const lampiranIdx = basic.indexOf('## Lampiran');
if (lampiranIdx < 0) { totalMissed.push('P3 basic :: marker ## Lampiran'); }
else {
  const xlsxSpec = JSON.parse(fs.readFileSync(path.join(DRAFTS, '200-template-social-media.xlsx.json'), 'utf8'));
  const kal = xlsxSpec.sheets.find((s) => s.name === 'Kalender Konten');
  const calRows = kal.rows.map((r) => `| ${r.join(' | ')} |`).join('\n');

  const glossaryRows = [
    ['[BISNIS]', 'Jenis atau nama usaha yang dipromosikan', 'Produsen keripik singkong balado Bandung'],
    ['[PRODUK]', 'Produk atau jasa yang dijual', 'Keripik singkong balado 250 gram'],
    ['[PLATFORM]', 'Platform tempat konten ditayangkan', 'Instagram'],
    ['[TUJUAN]', 'Sasaran yang ingin dicapai dari posting atau kampanye', 'Menambah 30 chat masuk dalam satu bulan'],
    ['[TOPIK]', 'Pokok bahasan konten', 'Cara menyimpan keripik agar tetap renyah'],
    ['[DATA]', 'Ringkasan angka performa yang dilampirkan', 'Reach 12.000, 40 komentar, 9 chat masuk'],
    ['[DURASI]', 'Panjang video yang diinginkan', '30 detik'],
    ['[AUDIENS]', 'Pembeli atau pengikut yang dituju', 'Ibu muda di Bandung yang belanja camilan online'],
    ['[KANAL]', 'Jalur masuk pesanan atau percakapan', 'WhatsApp'],
    ['[PERIODE]', 'Rentang waktu yang dianalisis atau dijadwalkan', 'Oktober 2026'],
    ['[CTA]', 'Permintaan tindakan di akhir konten', 'Pesan sekarang lewat WhatsApp'],
    ['[PENAWARAN]', 'Promosi atau penawaran khusus yang tersedia', 'Beli 2 gratis 1 mini pack'],
    ['[SUMBER]', 'Asal data yang dipakai', 'Laporan Instagram minggu ketiga'],
    ['[SITUASI]', 'Kejadian lucu yang dialami bisnis atau audiens', 'Kesalahan timbang bumbu saat produksi pertama'],
    ['[FORMAT]', 'Bentuk penyajian konten', 'Daftar bernomor'],
    ['[TONE]', 'Gaya bahasa yang diinginkan', 'Santai dan sedikit jenaka'],
    ['[FREKUENSI]', 'Jumlah posting per periode', '4 kali per minggu'],
    ['[PILLAR]', 'Pilar konten bisnis', 'Edukasi, dapur, promo, pelanggan'],
    ['[MOMEN]', 'Momen penting dalam bulan tersebut', 'Hari Pahlawan'],
    ['[BATAS_WAKTU]', 'Tenggat yang ditetapkan', 'Jumat pukul 17.00'],
    ['[INDUSTRI]', 'Bidang industri bisnis Anda', 'Makanan ringan'],
    ['[PROSES]', 'Rangkaian pekerjaan yang diceritakan', 'Iris, bumbu, goreng, kemas'],
    ['[PESAN]', 'Inti pesan yang ingin disampaikan', 'Keripik tanpa pengawet itu ada'],
    ['[ALAT]', 'Alat atau bahan yang dibutuhkan', 'Wajan, timbangan digital, sealer'],
    ['[LOKASI]', 'Area atau kota target', 'Bandung Raya'],
    ['[EVENT]', 'Acara atau momen spesial yang terkait', 'Bazar UMKM Jakarta'],
    ['[TIM]', 'Jumlah orang yang mengerjakan konten', '2 orang'],
    ['[HADIAH]', 'Hadiah untuk giveaway atau kontes', 'Satu toples keripik tiga rasa'],
    ['[FAKTA]', 'Fakta atau angka benar yang dipakai', 'Lima ratus toples terjual bulan lalu'],
    ['[JUMLAH]', 'Kapasitas atau kuantitas yang tersedia', '200 toples per minggu'],
    ['[CERITA]', 'Perjalanan pelanggan dari awal sampai hasil', 'Dari ragu-ragu sampai langganan enam bulan'],
    ['[KRITERIA]', 'Poin perbandingan yang dipakai', 'Harga, rasa, ketahanan renyah'],
    ['[BRAND]', 'Nama merek bisnis Anda', 'Keripik Bu Rina'],
    ['[METRIK]', 'Metrik yang dicatat atau dianalisis', 'Reach, simpan, bagikan, chat masuk'],
    ['[PERTANYAAN]', 'Daftar pertanyaan yang terkumpul', 'Berapa ongkir ke luar kota, ada varian pedas'],
  ].map((r) => `| ${r.join(' | ')} |`).join('\n');

  const lampiran = `## Lampiran

### Lampiran A: Cara Memakai Berkas Excel Pendamping

Berkas Excel yang disertakan berisi delapan sheet:

1. Sheet Perpustakaan Templat: daftar 200 template dengan kolom kode, bagian, judul, kapan pakai, template lengkap, variabel, dan hasil yang diharapkan. Ini sumber utama untuk mencari template cepat lewat filter.
2. Sheet Kalender Konten: kerangka kalender 30 hari dengan kolom minggu, hari, jenis konten, kode template, ide konten, format, caption hook, dan CTA. Sudah terisi contoh 16 posting.
3. Sheet Pelacak Analitik: tabel pencatatan mingguan followers, reach, engagement rate, klik link, dan pesan masuk, lengkap dengan kolom perbandingan minggu sebelumnya, penyebab, dan tindakan.
4. Sheet Bank Hashtag: kumpulan hashtag besar, menengah, dan kecil per industri yang bisa Anda kurasi ulang.
5. Sheet Catatan Performa: catatan setiap posting dengan kolom tanggal, kode template, judul, format, views, like, komentar, share, save, dan kesimpulan.
6. Sheet Praktik Terbaik Platform: ringkasan waktu posting yang layak diuji, jenis konten prioritas, panjang caption, strategi hashtag, dan tips engagement untuk lima platform.
7. Sheet Checklist Kualitas: butir periksa sebelum posting beserta kriteria dan kolom status.
8. Sheet Daftar Variabel: variabel yang paling sering dipakai beserta arti dan contoh isinya.

Urutan pemakaian yang disarankan:
1. Mulai dari Perpustakaan Templat. Filter kolom bagian sesuai kebutuhan Anda minggu ini.
2. Salin teks template ke alat AI, isi variabelnya, simpan hasilnya ke sheet Kalender Konten.
3. Sebelum posting, lewati butir di sheet Checklist Kualitas.
4. Setiap posting tayang, catat performanya di sheet Catatan Performa pada akhir hari.
5. Setiap Senin, isi sheet Pelacak Analitik dengan angka mingguan.
6. Saat menyusun rencana, buka sheet Praktik Terbaik Platform dan sesuaikan jam serta format posting.
7. Setiap akhir bulan, baca ulang Catatan Performa dan tandai pola yang berulang.

Aturan penting: jangan mengubah struktur kolom. Kolom yang berpindah membuat perbandingan antar bulan tidak valid. Tambahkan kolom baru di paling kanan bila memang perlu.

### Lampiran B: Contoh Kalender Konten 30 Hari Terisi

Contoh terisi untuk bisnis keripik singkong balado, 4 posting per minggu, tujuan awareness di Bandung:

| Minggu | Hari | Jenis Konten | Kode Template | Ide Konten | Format | Caption Hook | CTA |
|---|---|---|---|---|---|---|---|
${calRows}

Salin tabel ini, ganti isi dengan bisnis Anda. Aturan alurnya tetap: minggu satu memperkenalkan, minggu dua mendekatkan, minggu tiga membangun kepercayaan, minggu empat menutup dengan penjualan.

### Lampiran C: Daftar Hashtag per Industri

Kurasi ulang setiap bulan. Aturan campuran: 3 hashtag besar, 5 menengah, 5 kecil dan spesifik per posting.

| Industri | Hashtag Besar | Hashtag Menengah | Hashtag Kecil dan Spesifik |
|---|---|---|---|
| Kuliner | #kuliner #makanan #jajanan | #camilansehat #kulinerindonesia #makananrumahan | #keripikbalado #camilanbandung #usahakuliner |
| Fashion | #ootd #fashion | #ootdindonesia #outfitdaily #fashionlokal | #batikindonesia #butiklokal #outoftheday |
| Kecantikan | #skincare #beauty | #skincarelokal #perawatankulit #glowingskin | #skincareumkm #sunscreendaily #racunskincare |
| Jasa kebersihan | #laundry #laundryservice | #laundrykiloan #laundrypremium #jasacuci | #laundrysurabaya #laundryexpress #cucisetrika |
| Katering | #catering #makansehat | #cateringsehat #kateringharian #menuhealthy | #cateringjakarta #dietsehatmurah #langgananmakan |
| Kerajinan | #handmade #kerajinantangan | #handmadeindonesia #produklokal #craftindonesia | #taskulithandmade #leathercraft #bandungcraft |
| Edukasi | #belajar #edukasi | #tipsbelajar #edukasiindonesia #ilmupengetahuan | #belajarbisnisonline #kelasumkm #kursusbisnis |
| Kesehatan | #sehat #fitness | #gayahidupsehat #fitnessindonesia #olahraga | #trainersurabaya #dietberbudaya #senamrumah |

Catatan: hashtag dengan jarak tidak valid, tulis tanpa jarak saat dipakai. Ganti 30 persen hashtag setiap bulan dan pantau di sheet Bank Hashtag mana yang masih membawa reach.

### Lampiran D: Checklist Kualitas Sebelum Posting

Periksa dalam 60 detik sebelum menekan tombol posting:

KONTEN
- [ ] Hook di kalimat pertama menahan jari untuk berhenti menggulir
- [ ] Isi menyebut manfaat konkret, bukan klaim kosong
- [ ] Ada satu permintaan tindakan yang jelas
- [ ] Angka dan klaim bisa dipertanggungjawabkan

VISUAL
- [ ] Foto atau video tajam, tidak goyang, cahaya cukup
- [ ] Warna konsisten dengan konten sebelumnya
- [ ] Teks di atas visual terbaca di layar kecil

TEKNIS
- [ ] Caption sudah diperiksa salah ketik
- [ ] Hashtag campuran besar, menengah, kecil, maksimal 15
- [ ] Akun yang ditandai benar
- [ ] Waktu posting sesuai kalender

JIKA PROMO
- [ ] Harga, jam mulai, jam selesai, dan batas stok tertulis jelas
- [ ] Cara order tidak lebih dari dua langkah
- [ ] Syarat dan pengecualian disebut, tidak disembunyikan

### Lampiran E: Kebiasaan Terbaik per Platform

Instagram
- Frekuensi sehat: 3 sampai 5 posting per minggu plus story harian.
- Format prioritas: reel untuk jangkauan, carousel untuk disimpan, story untuk kedekatan.
- Caption: hook di kalimat pertama karena hanya itu yang terlihat sebelum dibuka.
- Hashtag: 10 sampai 15, campuran tiga lapis.
- Waktu umum yang layak diuji: 11.00 sampai 13.00 dan 19.00 sampai 21.00, tapi verifikasi dengan data Anda sendiri lewat T-169.

TikTok
- Frekuensi sehat: 1 sampai 2 video per hari bila mampu, minimal 4 per minggu.
- Tiga detik pertama menentukan segalanya, mulai dari suara atau gerakan, bukan logo.
- Suara asli alat kerja sering lebih menarik daripada musik populer.
- Video 15 sampai 35 detik paling stabil performanya.
- Konsistensi mengalahkan kesempurnaan, video bagus yang tayang kalah dari video sempurna yang tidak jadi.

Facebook
- Frekuensi sehat: 1 posting per hari, maksimal 2.
- Konten yang paling berjalan: video pendek dan posting komunitas yang memancing komentar.
- Kelompok Facebook komunitas lokal sering lebih kuat daripada halaman, gabungkan keduanya.
- Balas komentar cepat, jangkauan Facebook masih sangat menghargai percakapan.

LinkedIn (untuk bisnis B2B dan layanan profesional)
- Frekuensi sehat: 2 sampai 4 posting per minggu.
- Konten pengalaman nyata dengan angka berjalan lebih baik daripada nasihat generik.
- Kalimat pertama berperan sebagai hook karena LinkedIn memotong di sana.
- Waktu umum yang layak diuji: Selasa sampai Kamis pagi.

WhatsApp Business (kanal penjualan utama UMKM)
- Pasang katalog lengkap dengan foto yang sama bagusnya dengan Instagram.
- Gunakan label untuk memilah pelanggan baru, pelanggan lama, dan proses order.
- Pesan grup jangan berisi broadcast tanpa izin, itu cara tercepat diblokir.
- Status WhatsApp adalah story kedua Anda, pantulkan konten story Instagram ke sana.

### Lampiran F: Daftar Variabel yang Sering Dipakai

Template di buku ini memakai variabel di dalam kurung siku yang wajib Anda ganti sebelum dikirim ke alat AI. Tabel berikut merangkum variabel yang paling sering muncul beserta contoh pengisiannya untuk bisnis keripik singkong balado. Variabel lain yang hanya dipakai di satu atau dua template dijelaskan langsung di templatenya.

| Variabel | Arti | Contoh |
|---|---|---|
${glossaryRows}

---

Edisi Pertama, 200 Template AI untuk Social Media Management
Disusun oleh Siraj Nur Ihrom, Founder SNISHOP
Cetakan pertama, 2026
`;
  basic = basic.slice(0, lampiranIdx) + lampiran;
  fs.writeFileSync(basicPath, basic);
  totalApplied++;
  console.log('OK  P3 basic :: lampiran rewrite (A-F)');
}

console.log(`\nApplied: ${totalApplied}, Missed: ${totalMissed.length}`);
totalMissed.forEach((m) => console.log('MISSED  ' + m));
if (totalMissed.length) process.exit(1);
