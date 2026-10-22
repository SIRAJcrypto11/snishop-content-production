const fs = require('fs');

const rows = [
  ['TARGET_AUDIENCE', 'Deskripsi pembeli yang dituju: siapa, di mana, kondisinya', 'Ibu usia 28-40 di Bekasi yang belanja bulanan lewat WhatsApp'],
  ['PRODUK', 'Produk yang sedang dipromosikan', 'Keripik singkong balado toples 250 gram'],
  ['TOPIK', 'Pokok bahasan konten yang akan dibuat', 'Cara menyimpan keripik agar renyah seminggu'],
  ['CTA', 'Ajakan bertindak yang ingin pembaca lakukan', 'Pesan sekarang lewat link bio'],
  ['DURASI', 'Lama waktu dalam naskah, acara, atau penawaran', '30 detik'],
  ['NAMA_PELANGGAN', 'Nama pelanggan yang menerima pesan', 'Bapak Hartono'],
  ['NAMA_PRODUK', 'Nama resmi produk yang dibahas', 'Kopi Gayo Organik 250g'],
  ['TUJUAN', 'Sasaran yang ingin dicapai dari konten atau kampanye', 'Menambah 50 pesanan baru dalam sebulan'],
  ['PRODUK_LAYANAN', 'Produk atau jasa yang menjadi pembahasan', 'Layanan cuci setrika kilat 3 jam'],
  ['PLATFORM', 'Media sosial atau kanal tempat konten tayang', 'Instagram, TikTok'],
  ['TOPIK_VIDEO', 'Pokok bahasan video yang akan direkam', 'Tur dapur produksi keripik'],
  ['NAMA_PENGGUNA', 'Nama pengguna aplikasi atau layanan yang menerima pesan', 'Sari Dewi'],
  ['SOLUSI', 'Jawaban atau produk yang menyelesaikan masalah', 'Paket cuci setrika same-day'],
  ['NAMA_PODCAST', 'Judul acara podcast yang dibuat', 'Warung Kopi Santai'],
  ['NAMA_BRAND', 'Nama merek yang dipromosikan', 'Keripik Bu Ratna'],
  ['CTA_UTAMA', 'Ajakan bertindak utama dalam satu materi', 'Checkout sekarang'],
  ['MANFAAT', 'Keuntungan yang didapat pembeli', 'Hemat 3 jam per hari tanpa harus memasak'],
  ['HARGA', 'Harga jual yang disebut dalam materi', 'Rp 85.000'],
  ['BATAS_WAKTU', 'Tenggat penawaran atau aksi berakhir', '23 Oktober jam 23.59'],
  ['NAMA_PERUSAHAAN', 'Nama badan usaha yang menerbitkan materi', 'Katering Sehat Nusantara'],
  ['INSENTIF', 'Imbalan yang diberikan agar orang beraksi', 'Potongan Rp 10.000'],
  ['MANFAAT_UTAMA', 'Keuntungan terbesar yang ditekankan', 'Makan sehat tanpa ribet masak'],
  ['FITUR_UTAMA', 'Fitur paling penting dari produk', 'Pengiriman gratis area Bandung'],
  ['BRAND', 'Merek yang menjadi identitas materi', 'Keripik Bu Ratna'],
  ['NAMA_FITUR', 'Nama fitur yang dijelaskan', 'Pelacak pesanan waktu nyata'],
  ['MASALAH', 'Keluhan atau kesulitan yang dihadapi audiens', 'Bingung menyiapkan menu sehat tiap hari'],
  ['PENAWARAN', 'Paket atau promo yang ditawarkan', 'Bundling 3 rasa hemat'],
  ['MASALAH_YANG_DISELESAIKAN', 'Masalah spesifik yang dijawab produk', 'Pakaian kerja kembali dalam 3 jam'],
  ['JENIS_KONTEN', 'Format konten yang dibuat', 'Carousel, reel, story'],
  ['INDUSTRI', 'Bidang usaha yang menjadi konteks pembahasan', 'Kuliner rumahan'],
  ['TONE', 'Nada bahasa yang dipakai', 'Hangat dan membumi'],
  ['BENEFIT', 'Keuntungan yang disorot pada materi', 'Lebih awet hingga 2 minggu'],
  ['CTA_SEKUNDER', 'Ajakan bertindak cadangan bagi yang belum siap beli', 'Simpan postingan ini dulu'],
  ['KATA_KUNCI', 'Kata kunci pencarian yang ditarget', 'keripik balado bandung'],
  ['HOOK', 'Kalimat pembuka yang menahan perhatian', 'Keripik enak belum tentu mahal'],
  ['URGENCY', 'Alasan mengapa harus bertindak sekarang', 'Stok batch hari ini tersisa 40 toples'],
  ['FORMAT', 'Bentuk keluaran yang diminta dari AI', 'Daftar bernomor, maksimal 100 kata'],
  ['TOPIK_EPISODE', 'Pokok bahasan satu episode podcast', 'Cerita di balik resep balado'],
  ['RATING', 'Nilai bintang atau penilaian pelanggan', '4,8 dari 5'],
  ['DEADLINE', 'Batas waktu penyelesaian', 'Jumat, 25 Oktober'],
  ['KEUNGGULAN', 'Hal yang membuat produk unggul', 'Singkong dipilih langsung dari petani'],
  ['DISKON', 'Potongan harga yang diberikan', '20 persen'],
  ['KOMPETITOR', 'Pesaing yang datanya dibandingkan', 'Tiga toko keripik teratas di Shopee'],
  ['PRODUK_YANG_DIBELI', 'Produk yang baru dibeli pelanggan', 'Kopi Gayo 250g'],
  ['DURASI_PENGGUNAAN', 'Lama pemakaian produk oleh pelanggan', '3 bulan'],
  ['HASIL_KONKRET', 'Hasil terukur yang dicapai', 'Omzet naik 35 persen'],
  ['JENIS', 'Kategori atau tipe hal yang dibahas', 'Bundling, gratis ongkir'],
  ['INSENTIF_KEMBALI', 'Imbalan agar pelanggan datang kembali', 'Voucher Rp 15.000'],
  ['STATISTIK', 'Angka data yang dipakai sebagai bukti', '12.000 toples terjual tahun lalu'],
  ['PENCAPAIAN', 'Prestasi yang dirayakan', 'Pelanggan ke-1000'],
  ['JUMLAH_PERTANYAAN', 'Banyaknya pertanyaan yang diminta', '10 pertanyaan'],
  ['KATEGORI', 'Kelompok produk atau konten', 'Camilan pedas'],
  ['TAGLINE', 'Kalimat singkat identitas merek', 'Renyahnya sampai ke hati'],
  ['VISUAL', 'Unsur gambar atau video yang disebut', 'Foto dari dekat irisan keripik'],
  ['HASIL', 'Keluaran yang diharapkan dari materi', '3 opsi caption siap pakai'],
  ['TIMESTAMP', 'Penanda waktu pada video atau audio', '00:00-00:15'],
  ['TARGET_PASAR', 'Segmen pasar yang dituju', 'Pecinta camilan pedas di Jawa Barat'],
  ['MISI', 'Pernyataan tujuan merek', 'Menaikkan camilan lokal ke panggung nasional'],
  ['MASALAH_AWAL', 'Kondisi buruk sebelum memakai produk', 'Pesanan kacau masuk lewat DM'],
  ['FITUR_BARU', 'Fitur yang baru diluncurkan', 'Pembayaran QRIS'],
  ['MOMEN', 'Peristiwa atau suasana yang dipakai', 'Momentum Lebaran'],
  ['SITUASI', 'Kondisi yang menjadi latar cerita', 'Dapur penuh pesanan akhir bulan'],
  ['KONTEN_UTAMA', 'Isi inti yang menjadi bahan konten', 'Video proses penggorengan'],
  ['OFFER', 'Paket penawaran yang diluncurkan', 'Beli 2 gratis 1 akhir pekan'],
  ['JUDUL_VIDEO', 'Judul video yang akan dibuat', '5 Rahasia Keripik Tahan Sebulan'],
  ['FREKUENSI', 'Seberapa sering sesuatu dilakukan', '4 kali seminggu'],
  ['TOPIK_EDUKASI', 'Bahasan edukasi untuk audiens', 'Beda balado asli dan taburan cabai bubuk'],
  ['VARIASI', 'Banyaknya versi yang diminta', '5 variasi'],
  ['VALUE_PROPOSITION', 'Janji nilai utama merek kepada pelanggan', 'Camilan enak dengan harga jujur'],
  ['TEMA_SERI', 'Tema rangkaian konten berkelanjutan', 'Sehari bersama dapur kami'],
  ['JUMLAH_EPISODE', 'Banyaknya episode yang direncanakan', '8 episode'],
  ['SUMBER', 'Asal data atau kutipan', 'Laporan penjualan Oktober'],
  ['LOKASI', 'Tempat terjadinya peristiwa atau layanan', 'Bandung dan sekitarnya'],
  ['CARA_KERJA', 'Penjelasan mekanisme produk', 'Pesan, kami goreng, kirim di hari yang sama'],
  ['METODE_PEMBAYARAN', 'Cara bayar yang diterima', 'QRIS, transfer, COD'],
  ['KONTAK_SUPPORT', 'Kanal layanan bantuan pelanggan', 'Nomor WhatsApp bisnis yang tertera di katalog'],
  ['NAMA_PAKET', 'Nama paket yang dijual', 'Paket Hemat Keluarga'],
  ['JUMLAH_TESTIMONI', 'Banyaknya ulasan yang dipakai', '5 testimoni'],
  ['TAMU', 'Narasumber undangan acara', 'Pemilik kedai kopi lokal'],
  ['FITUR_UNIK', 'Fitur yang tidak dimiliki pesaing', 'Label tanggal goreng di tiap toples'],
  ['TARGET_USER', 'Pengguna yang dituju suatu fitur', 'Pemilik toko online pemula'],
  ['HARGA_NORMAL', 'Harga sebelum diskon', 'Rp 95.000'],
  ['ROI', 'Hasil atas biaya yang dikeluarkan', '3 kali lipat dari biaya iklan'],
  ['TANGGAL', 'Tanggal peristiwa atau batas', '23 Oktober 2026'],
  ['RINGKASAN', 'Ikhtisar isi yang dipakai sebagai bahan', 'Rangkuman chat pelanggan seminggu'],
  ['LINK_RELEVAN', 'Tautan terkait yang disertakan', 'Tautan produk di bio'],
  ['JUMLAH_TIPS', 'Banyaknya tips yang diminta', '7 tips'],
  ['NILAI_BRAND', 'Nilai yang dipegang merek', 'Jujur pada takaran dan harga'],
  ['PERIODE', 'Rentang waktu pembahasan', '1-31 Oktober'],
  ['CUSTOMER_PROFILE', 'Gambaran pelanggan ideal', 'Wanita 25-35 tahun, aktif di Instagram, suka camilan pedas'],
  ['HEADLINE', 'Judul besar yang menarik perhatian', 'Keripik Se-Toples, Bahagia Se-Perut'],
];

const oldBlocks = [
  `### Lampiran C: Daftar Variabel Baku

Berikut adalah variabel yang paling sering digunakan di seluruh buku dengan sinonim dan alternatif yang bisa Anda gunakan.

**Variabel Produk/Layanan:**
- [PRODUK] = produk, item, barang
- [LAYANAN] = service, jasa, layanan
- [PRODUK_LAYANAN] = produk atau layanan, offering
- [NAMA_PRODUK] = nama produk, nama layanan
- [FITUR] = feature, kemampuan, fungsi
- [FITUR_UTAMA] = fitur utama, key feature
- [MANFAAT] = benefit, keuntungan, nilai
- [MANFAAT_UTAMA] = manfaat utama, primary benefit
- [HARGA] = price, biaya, tarif
- [HARGA_NORMAL] = harga reguler
- [HARGA_PROMO] = harga promosi, diskon

**Variabel Audiens:**
- [TARGET_AUDIENCE] = target pasar, audiens target
- [TARGET_PELANGGAN] = customer target
- [TARGET_USER] = pengguna target
- [TARGET_PEMBACA] = pembaca target
- [TARGET_PENONTON] = penonton target
- [CUSTOMER_PROFILE] = profil pelanggan
- [PERSONA] = buyer persona

**Variabel Konten:**
- [KONTEN] = content, materi
- [COPY] = teks, tulisan
- [HEADLINE] = judul, title
- [SUBHEADLINE] = subjudul, subtitle
- [CTA] = call-to-action, ajakan bertindak
- [CAPTION] = keterangan, deskripsi
- [DESKRIPSI] = description, penjelasan
- [BODY] = isi konten

**Variabel Platform:**
- [PLATFORM] = media sosial, channel
- [INSTAGRAM] = IG
- [TIKTOK] = TT
- [FACEBOOK] = FB
- [LINKEDIN] = LI
- [TWITTER] = X
- [YOUTUBE] = YT
- [WHATSAPP] = WA
- [TELEGRAM] = TG
- [EMAIL] = surat elektronik

**Variabel Metrik:**
- [JUMLAH] = total, banyaknya
- [PANJANG] = length, durasi
- [DURASI] = lama waktu
- [UKURAN] = size, dimensi
- [RATING] = penilaian, skor
- [SCORE] = nilai, poin

**Variabel Waktu:**
- [TANGGAL] = date, hari
- [WAKTU] = time, jam
- [DEADLINE] = batas waktu
- [DURASI_WAKTU] = lama waktu
- [PERIODE] = masa, jangka waktu

**Variabel Aksi:**
- [AKSI] = tindakan, action
- [LANGKAH] = step, tahap
- [PROSES] = process, cara
- [METODE] = method, teknik
- [STRATEGI] = strategy, pendekatan

**Variabel Hasil:**
- [HASIL] = result, outcome
- [OUTPUT] = keluaran, produk
- [KONVERSI] = conversion, penjualan
- [ROI] = return on investment
- [IMPACT] = dampak, pengaruh`,
];

const table = rows.map(([t, a, c]) => `| [${t}] | ${a} | ${c} |`).join('\n');

const newBlock = `### Lampiran C: Daftar Variabel Baku

Berikut variabel yang paling sering dipakai di seluruh buku beserta arti dan contoh pengisiannya. Setiap prompt juga mencantumkan variabelnya sendiri di bagian Variabel, jadi daftar ini menjadi panduan baku ketika satu variabel muncul di banyak prompt. Variabel yang tidak ada di daftar ini bersifat kontekstual: artinya sudah dijelaskan pada prompt tempat variabel itu dipakai.

| Variabel | Arti | Contoh |
|---|---|---|
${table}

Cara memakai daftar ini: cari variabel yang muncul di prompt Anda, baca kolom Arti untuk memastikan maknanya, lalu isi dengan data usaha Anda sendiri mengikuti pola kolom Contoh. Semakin spesifik isi variabel Anda, semakin tajam hasil AI.`;

for (const file of [
  'drafts/300-prompt-ai-untuk-copywriting-dan-iklan-digital.md',
  'drafts/300-prompt-copywriting-premium.md',
  'drafts/300-prompt-copywriting-ultimate.md',
]) {
  let md = fs.readFileSync(file, 'utf8');
  const old = oldBlocks[0];
  if (!md.includes(old)) {
    console.log(`${file}: OLD LAMPIRAN C NOT FOUND — skipping`);
    continue;
  }
  md = md.replace(old, newBlock);
  fs.writeFileSync(file, md);
  console.log(`${file}: Lampiran C rewritten with ${rows.length} variables`);
}
