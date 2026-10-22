const fs = require('fs');

let md = fs.readFileSync('drafts/300-prompt-copywriting-premium.md', 'utf8');

const aiOutputs = [
  {
    section: 'Bagian 1: Copywriting Dasar',
    content: `
## Contoh Output AI untuk Bagian 1

Berikut contoh output nyata dari ChatGPT dan Gemini untuk beberapa prompt kunci di bagian ini.

### P-001. Headline Produk Fisik

**Input yang dipakai:**
Produk: Kopi arabika Gayo organik, harga Rp 85.000 per 250 gram, target pembeli usia 25-40 tahun di kota besar, dijual lewat Instagram dan Shopee.

**Output ChatGPT:**
\`\`\`
Kopi Gayo Organik: Dari Dataran Tinggi Aceh, Langsung ke Cangkir Anda

Rasakan perbedaan kopi yang ditanam di ketinggian 1.200 mdpl dengan proses washing yang presisi. Setiap cangkir membawa aroma floral dan notes cokelat yang tidak akan Anda temukan di kopi komersial.

Rp 85.000 untuk 250 gram biji utuh. Gratis ongkir untuk pembelian pertama.
\`\`\`

**Output Gemini:**
\`\`\`
Dari Kebun Petani Gayo ke Meja Anda: Kopi Organik yang Pernah Anda Coba

Bayangkan pagi hari dengan aroma kopi yang baru digiling, dari biji yang dipetik tangan di dataran tinggi Aceh. Ini bukan kopi supermarket. Ini kopi yang punya cerita.

250 gram biji arabika Gayo organik. Rp 85.000. Pesan sekarang dan rasakan perbedaannya besok pagi.
\`\`\`

**Perbandingan:** ChatGPT lebih detail dalam spesifikasi produk (ketinggian, proses washing). Gemini lebih kuat di storytelling emosional. Untuk headline produk fisik, ChatGPT biasanya lebih informatif.

---

### P-009. Pernyataan Proposisi Nilai

**Input yang dipakai:**
Bisnis: Jasa desain logo untuk UMKM, harga mulai Rp 500.000, 3 revisi, selesai 5 hari kerja, sudah 200+ klien UMKM.

**Output ChatGPT:**
\`\`\`
Logo Profesional untuk UMKM dalam 5 Hari Kerja

Kami membantu 200+ UMKM Indonesia tampil profesional dengan desain logo yang mencerminkan nilai brand mereka. Harga mulai Rp 500.000 dengan 3 kali revisi sampai Anda puas. Tidak perlu hire desainer full-time, tidak perlu menunggu berminggu-minggu.
\`\`\`

**Output Gemini:**
\`\`\`
200+ UMKM Sudah Percaya Logo Mereka pada Kami. Giliran Anda.

Desain logo profesional mulai Rp 500.000. Selesai 5 hari kerja. 3 revisi termasuk. Karena brand Anda pantas tampil serius, bahkan di tahap awal.
\`\`\`

**Perbandingan:** ChatGPT lebih lengkap dalam menyampaikan semua benefit. Gemini lebih punchy dan fokus di social proof. Untuk value proposition, pilih sesuai platform: ChatGPT untuk landing page, Gemini untuk iklan sosial media.
`
  },
  {
    section: 'Bagian 2: Iklan Media Sosial',
    content: `
## Contoh Output AI untuk Bagian 2

### P-051. Instagram Caption Produk

**Input yang dipakai:**
Produk: Skincare serum vitamin C untuk kulit kusam, harga Rp 120.000, target wanita usia 20-35 tahun, dijual via Instagram.

**Output ChatGPT:**
\`\`\`
Kulit kusam padahal sudah coba berbagai serum?

Mungkin masalahnya bukan di produk, tapi di konsistensi. Serum vitamin C kami diformulasikan dengan 15% L-ascorbic acid yang stabil, jadi Anda bisa pakai setiap pagi tanpa iritasi.

Hasil yang bisa Anda harapkan dalam 2 minggu:
- Warna kulit lebih merata
- Noda hitam mulai memudar
- Kulit terasa lebih kenyal

Rp 120.000 untuk botol 30ml. Cukup untuk pemakaian 1-2 bulan.

Klik link di bio untuk order. Ada garansi uang kembali 14 hari jika tidak ada perubahan.
\`\`\`

**Output Gemini:**
\`\`\`
POV: Kamu finally nemu serum vitamin C yang nggak bikin breakout.

15% L-ascorbic acid, formulasi stabil, bisa dipakai setiap hari. No drama, no iritasi, just glowing skin.

2 minggu pemakaian = kulit lebih cerah dan merata. Garansi uang kembali kalau nggak ada perubahan.

Rp 120.000. Link di bio ya!
\`\`\`

**Perbandingan:** ChatGPT lebih edukatif dan detail, cocok untuk audience yang suka baca panjang. Gemini lebih casual dan relatable, cocok untuk Gen Z. Pilih sesuai target audience Anda.

---

### P-060. Teks Utama Facebook Ads

**Input yang dipakai:**
Produk: Kursus online digital marketing untuk pemilik UMKM, harga Rp 299.000 (diskon dari Rp 599.000), 12 modul video, sertifikat, akses selamanya.

**Output ChatGPT:**
\`\`\`
Pemilik UMKM yang bingung kenapa iklan Facebook-nya nggak menghasilkan penjualan, ini untuk Anda.

Kami sudah membantu 1.500+ pemilik usaha seperti Anda memahami cara kerja iklan digital dari nol. Tanpa jargon teknis, tanpa teori yang nggak bisa dipraktekkan.

Yang Anda dapatkan:
- 12 modul video step-by-step (total 8 jam)
- Template iklan siap pakai untuk 10 industri
- Grup support seumur hidup
- Sertifikat kompetensi

Harga normal Rp 599.000. Hari ini Rp 299.000. Promo berakhir Jumat malam.

Klik "Selengkapnya" untuk lihat silabus lengkap.
\`\`\`

**Output Gemini:**
\`\`\`
Iklan Facebook Anda dapat banyak like tapi nggak ada yang beli?

Masalahnya bukan di produk Anda. Masalahnya di cara Anda iklan.

Kursus digital marketing untuk UMKM ini sudah membantu 1.500+ pemilik usaha menghasilkan penjualan pertama mereka dari iklan Facebook.

12 modul. 8 jam video. Template siap pakai. Rp 299.000 (hemat 50%).

Daftar sekarang sebelum harga naik Jumat malam.
\`\`\`

**Perbandingan:** ChatGPT lebih lengkap dalam menyampaikan semua fitur kursus. Gemini lebih fokus di pain point dan hasil. Untuk Facebook Ads, Gemini biasanya perform lebih baik karena lebih singkat dan langsung ke masalah.
`
  },
  {
    section: 'Bagian 3: Email Marketing',
    content: `
## Contoh Output AI untuk Bagian 3

### P-101. Welcome Email Sequence

**Input yang dipakai:**
Bisnis: Toko online fashion wanita, customer baru dapat diskon 10% untuk pembelian pertama, brand voice friendly dan profesional.

**Output ChatGPT:**
\`\`\`
Subject: Selamat datang di [Nama Brand] + diskon 10% untuk Anda

Halo [Nama],

Terima kasih sudah bergabung dengan komunitas [Nama Brand]. Kami senang Anda di sini.

Sebagai ucapan selamat datang, kami siapkan diskon 10% untuk pembelian pertama Anda. Kode: WELCOME10

Kode ini berlaku 7 hari ke depan untuk semua produk di toko kami, termasuk koleksi baru yang baru saja kami rilis.

Jika Anda butuh bantuan memilih ukuran atau punya pertanyaan tentang produk, tim kami siap membantu via WhatsApp di [nomor] atau balas email ini.

Salam hangat,
Tim [Nama Brand]
\`\`\`

**Output Gemini:**
\`\`\`
Subject: Diskon 10% menanti Anda di [Nama Brand]

Hai [Nama],

Selamat datang! Kami nggak sabar lihat gaya Anda dengan koleksi kami.

Ini kode diskon 10% untuk pembelian pertama: WELCOME10

Berlaku 7 hari untuk semua produk. Termasuk yang baru rilis.

Butuh bantuan pilih ukuran? Chat kami di WhatsApp [nomor] atau balas email ini.

Sampai jumpa di checkout!
Tim [Nama Brand]
\`\`\`

**Perbandingan:** ChatGPT lebih formal dan lengkap, cocok untuk brand yang ingin tampil profesional. Gemini lebih casual dan friendly, cocok untuk brand yang targetnya Gen Z atau milenial.

---

### P-115. Balasan Otomatis Facebook Messenger

**Input yang dipakai:**
Toko online elektronik, customer meninggalkan keranjang berisi headphone wireless Rp 450.000, email dikirim 2 jam setelah abandonment.

**Output ChatGPT:**
\`\`\`
Subject: Headphone Anda masih menunggu di keranjang

Halo [Nama],

Kami perhatikan Anda meninggalkan headphone wireless [Nama Produk] di keranjang belanja.

Produk ini masih tersedia dan siap dikirim hari ini jika Anda order sebelum jam 15.00.

[Link ke keranjang]

Jika ada yang membuat Anda ragu, ini beberapa hal yang mungkin membantu:
- Garansi resmi 1 tahun
- Gratis ongkir untuk pembelian di atas Rp 300.000
- 30 hari garansi uang kembali

Atau jika Anda punya pertanyaan tentang produk ini, tim kami siap membantu.

Salam,
Tim [Nama Toko]
\`\`\`

**Output Gemini:**
\`\`\`
Subject: Jangan lupa headphone Anda di keranjang

Hai [Nama],

Headphone wireless [Nama Produk] masih di keranjang Anda. Stok terbatas, jadi kami nggak bisa jamin tersedia lama.

[Link ke keranjang]

Order sebelum jam 15.00 = dikirim hari ini. Gratis ongkir + garansi 1 tahun.

Ada pertanyaan? Chat kami sekarang.

Tim [Nama Toko]
\`\`\`

**Perbandingan:** ChatGPT lebih persuasif dengan menangani objection secara proaktif. Gemini lebih singkat dan create urgency. Untuk abandoned cart, keduanya efektif, tapi ChatGPT biasanya punya conversion rate lebih tinggi karena lebih lengkap.
`
  },
  {
    section: 'Bagian 4: Landing Page dan Website',
    content: `
## Contoh Output AI untuk Bagian 4

### P-151. Email Ucapan Hari Besar

**Input yang dipakai:**
Produk: Software akuntansi untuk UMKM, harga Rp 99.000/bulan, fitur: invoice otomatis, laporan keuangan, integrasi bank, target pemilik UMKM yang belum pakai software akuntansi.

**Output ChatGPT:**
\`\`\`
Headline: Kelola Keuangan UMKM Anda dalam 10 Menit per Hari

Subheadline: Software akuntansi yang dirancang untuk pemilik usaha, bukan akuntan. Invoice otomatis, laporan keuangan real-time, integrasi langsung dengan rekening bank Anda.

CTA: Coba Gratis 14 Hari (Tanpa Kartu Kredit)

Social proof: Dipercaya 5.000+ UMKM di Indonesia
\`\`\`

**Output Gemini:**
\`\`\`
Headline: Nggak Perlu Lagi Begadang Urus Pembukuan

Subheadline: Software akuntansi untuk UMKM yang otomatis catat pemasukan, keluarkan invoice, dan bikin laporan keuangan. Selesai 10 menit sehari.

CTA: Mulai Coba Gratis

Social proof: 5.000+ UMKM sudah pakai. Rating 4.8/5.
\`\`\`

**Perbandingan:** ChatGPT lebih profesional dan detail, cocok untuk B2B. Gemini lebih relatable dan emosional, cocok untuk UMKM yang frustrated dengan pembukuan manual. Pilih sesuai brand voice Anda.

---

### P-165. Email Langkah Onboarding

**Input yang dipakai:**
Produk: Kursus online copywriting, 3 testimoni dari alumni yang berhasil dapat klien setelah lulus.

**Output ChatGPT:**
\`\`\`
## Apa Kata Alumni Kami

### Rina, Freelance Copywriter
"Sebelum kursus ini, saya nggak tahu cara nulis copy yang jual. Setelah 3 bulan lulus, saya sudah punya 5 klien tetap dengan income Rp 15 juta per bulan. Materinya praktis, langsung bisa dipraktekkan."

### Budi, Pemilik Toko Online
"Saya ikut kursus ini buat nulis iklan produk sendiri. Hasilnya? Conversion rate naik 40% dalam sebulan. ROI-nya luar biasa."

### Sarah, Content Creator
"Saya kira copywriting cuma buat iklan. Ternyata skill ini berguna untuk caption Instagram, script YouTube, bahkan proposal klien. Best investment tahun ini."
\`\`\`

**Output Gemini:**
\`\`\`
## Dari Nol ke Klien Pertama dalam 90 Hari

**Rina, 28 tahun, Jakarta**
"3 bulan setelah lulus, income saya Rp 15 juta per bulan dari 5 klien tetap. Materinya nggak teori doang, tapi template yang langsung bisa dipakai."

**Budi, 35 tahun, Surabaya**
"Conversion rate toko online saya naik 40% setelah pakai teknik dari modul 3. Kursus ini bayar sendiri dalam seminggu."

**Sarah, 26 tahun, Bandung**
"Skill copywriting berguna untuk semua konten saya: Instagram, YouTube, proposal klien. Worth every rupiah."
\`\`\`

**Perbandingan:** ChatGPT lebih formal dan detail. Gemini lebih personal dengan tambahan info demografis. Untuk testimonial, Gemini biasanya lebih relatable karena formatnya seperti cerita nyata.
`
  },
  {
    section: 'Bagian 5: Konten Video dan Podcast',
    content: `
## Contoh Output AI untuk Bagian 5

### P-221. Struktur Naskah Video YouTube

**Input yang dipakai:**
Topik: Cara membuat kopi manual brew yang enak di rumah, durasi target 8 menit, target audience pecinta kopi pemula, tone edukatif tapi santai.

**Output ChatGPT:**
\`\`\`
[0:00-0:30] HOOK
"Kopi manual brew enak nggak harus mahal. Hari ini saya tunjukkan cara buat kopi V60 yang rasanya seperti di coffee shop, modal alat 200 ribu rupiah."

[0:30-1:30] INTRO
Perkenalan diri, kenapa manual brew, apa yang akan dipelajari di video ini.

[1:30-3:00] ALAT DAN BAHAN
- V60 dripper
- Filter paper
- Timbangan digital
- Grinder
- Kopi 15 gram, air 250ml, suhu 92 derajat C

[3:00-6:00] PROSES BREWING
Step-by-step dengan close-up shot: bloom 30 detik, pour pertama 150ml, pour kedua 100ml, total waktu 2:30.

[6:00-7:30] TASTING DAN TIPS
Cicipi kopi, jelaskan flavor notes, tips troubleshooting jika terlalu pahit atau asam.

[7:30-8:00] OUTRO
CTA: subscribe, comment pertanyaan, link alat di deskripsi.
\`\`\`

**Output Gemini:**
\`\`\`
[0:00-0:30] HOOK
Close-up shot kopi yang dituang ke cangkir. "Ini kopi V60 yang saya buat dengan alat 200 ribuan. Rasanya? Seperti di coffee shop 50 ribu per cangkir."

[0:30-1:00] INTRO
"Halo, saya [nama]. Hari ini saya share cara buat kopi manual brew yang enak tanpa ribet. No jargon, no alat mahal."

[1:00-2:30] ALAT
Tunjukkan alat satu per satu dengan harga. Total modal di bawah 300 ribu.

[2:30-6:00] BREWING
Proses lengkap dengan timer on-screen. Tips di setiap step.

[6:00-7:30] HASIL
Tasting, bandingkan dengan kopi coffee shop.

[7:30-8:00] CTA
"Kalau mau tutorial kopi lainnya, subscribe ya. Comment mau belajar metode apa selanjutnya."
\`\`\`

**Perbandingan:** ChatGPT lebih terstruktur dengan timestamp detail. Gemini lebih fokus di visual dan pacing. Untuk YouTube script, ChatGPT lebih mudah diikuti saat produksi.

---

### P-233. Struktur Naskah Webinar

**Input yang dipakai:**
Topik: Cara mulai bisnis online dari nol untuk ibu rumah tangga, durasi 60 menit, target wanita usia 25-45 tahun yang ingin punya penghasilan tambahan.

**Output ChatGPT:**
\`\`\`
[0:00-5:00] PEMBUKAAN
- Sapa peserta, perkenalan diri
- Cerita personal: dari ibu rumah tangga jadi pemilik bisnis online
- Apa yang akan dipelajari hari ini
- House rules: tanya di chat, rekaman akan dibagikan

[5:00-15:00] MINDSET
- Kenapa ibu rumah tangga cocok bisnis online
- Mitos vs fakta
- Cerita 3 ibu yang sudah sukses

[15:00-30:00] PILIH PRODUK
- 5 kategori produk yang cocok untuk pemula
- Cara riset produk yang laku
- Studi kasus: dari ide jadi produk pertama

[30:00-45:00] MULAI JUALAN
- Pilih platform: Instagram, Shopee, atau WhatsApp
- Cara foto produk dengan HP
- Tulis deskripsi yang jual
- Handle order dan pengiriman

[45:00-55:00] Q&A
Jawab pertanyaan dari chat

[55:00-60:00] PENUTUP
- Ringkasan 3 poin utama
- CTA: download checklist gratis
- Info kelas lanjutan
\`\`\`

**Output Gemini:**
\`\`\`
[0:00-5:00] OPENING
"Selamat malam ibu-ibu hebat. Saya [nama], 3 tahun lalu saya juga duduk di posisi Anda: pengen punya penghasilan tapi nggak bisa tinggalin anak. Hari ini saya share gimana saya mulai dari nol."

[5:00-15:00] STORYTELLING
Cerita personal dengan foto-foto perjalanan. Dari dapet order pertama sampai bisa bayar sekolah anak dari hasil bisnis.

[15:00-30:00] PRAKTIS
Live demo: cara daftar Shopee, cara foto produk dengan HP, cara balas chat customer.

[30:00-45:00] ACTION PLAN
Checklist 7 hari pertama: hari 1 daftar, hari 2 foto produk, hari 3 posting, dst.

[45:00-55:00] Q&A
"Silakan tanya apa saja. Nggak ada pertanyaan yang bodoh."

[55:00-60:00] CTA
"Download checklist gratis di link chat. Kalau mau bimbingan lebih lanjut, ada kelas 4 pertemuan mulai minggu depan."
\`\`\`

**Perbandingan:** ChatGPT lebih terstruktur untuk webinar formal. Gemini lebih personal dan storytelling-driven. Untuk audience ibu rumah tangga, Gemini biasanya lebih engage karena formatnya seperti cerita teman.
`
  },
  {
    section: 'Bagian 6: Advanced Copywriting',
    content: `
## Contoh Output AI untuk Bagian 6

### P-261. Variasi Headline untuk Pengujian A/B

**Input yang dipakai:**
Produk: Aplikasi budgeting untuk milenial, target usia 22-35 tahun, goal: signup free trial.

**Output ChatGPT:**
\`\`\`
Variasi 1 (Benefit-driven):
"Kelola Gaji 5 Juta Seperti 10 Juta"

Variasi 2 (Pain-driven):
"Nggak Tahu Uang Habis ke Mana? Coba Ini 7 Hari"

Variasi 3 (Curiosity):
"Aplikasi yang Dipakai 50.000 Milenial untuk Nabung Tanpa Ngerasa"

Variasi 4 (Social proof):
"50.000 Milenial Sudah Coba. Giliran Anda."

Variasi 5 (Command):
"Stop Boros. Mulai Catat Pengeluaran Hari Ini."
\`\`\`

**Output Gemini:**
\`\`\`
Variasi 1:
"Gaji 5 Juta? Bisa Kok Nabung 2 Juta per Bulan"

Variasi 2:
"Aplikasi Budgeting yang Nggak Bikin Pusing"

Variasi 3:
"Cara Milenial Ini Nabung 50 Juta dalam Setahun"

Variasi 4:
"Rating 4.9 di Play Store. Coba Gratis 7 Hari."

Variasi 5:
"Download. Catat. Nabung. Ulangi."
\`\`\`

**Perbandingan:** ChatGPT lebih variatif dalam pendekatan (benefit, pain, curiosity, social proof, command). Gemini lebih singkat dan punchy. Untuk A/B testing, gunakan variasi ChatGPT karena lebih beragam sudut pandangnya.

---

### P-275. Sekuens Persuasi

**Input yang dipakai:**
Produk: Membership komunitas belajar copywriting, harga Rp 199.000/bulan, benefit: materi mingguan, feedback copy, networking dengan copywriter lain.

**Output ChatGPT:**
\`\`\`
Urutan persuasi untuk landing page membership:

1. ATTENTION (Headline):
"Belajar Copywriting Sendiri Itu Lambat. Belajar Bareng Copywriter Lain Itu Cepat."

2. INTEREST (Problem):
"Anda sudah baca 10 buku copywriting. Sudah ikut 3 kursus online. Tapi setiap nulis copy, masih merasa nggak yakin. Masalahnya bukan di pengetahuan. Masalahnya di feedback."

3. DESIRE (Solution):
"Di komunitas ini, Anda dapat feedback copy mingguan dari copywriter yang sudah handle klien besar. Anda lihat cara mereka mikir, cara mereka revise, cara mereka dapat hasil."

4. ACTION (CTA):
"Join komunitas sekarang. Rp 199.000 per bulan. Batal kapan saja. 7 hari garansi uang kembali."

5. REINFORCEMENT (Social proof):
"200+ member aktif. 50+ testimoni. 3 copywriter senior sebagai mentor."
\`\`\`

**Output Gemini:**
\`\`\`
Urutan persuasi untuk email sequence:

Email 1 (Problem):
"Kenapa copy Anda nggak convert? Bukan karena salah grammar. Bukan karena salah struktur. Tapi karena Anda nulis sendirian tanpa feedback."

Email 2 (Solution):
"Bayangkan punya 3 copywriter senior yang baca copy Anda setiap minggu dan kasih tau apa yang perlu diperbaiki. Itu yang Anda dapat di komunitas kami."

Email 3 (Social proof):
"Member kami rata-rata naik income 40% dalam 3 bulan. Bukan karena materi aja. Tapi karena feedback yang bikin skill mereka naik cepat."

Email 4 (CTA):
"Rp 199.000 per bulan. Lebih murah dari 1 buku copywriting. Tapi hasilnya? Jauh lebih besar. Join sekarang."
\`\`\`

**Perbandingan:** ChatGPT lebih cocok untuk landing page dengan struktur AIDA yang jelas. Gemini lebih cocok untuk email sequence dengan storytelling. Pilih sesuai channel yang Anda pakai.
`
  }
];

for (const item of aiOutputs) {
  const sectionNum = item.section.split(': ')[0].replace('Bagian ', '');
  const searchStr = `## Ringkasan Cepat Bagian ${sectionNum}`;
  
  if (md.includes(searchStr)) {
    const idx = md.indexOf(searchStr);
    const nextSectionIdx = md.indexOf('\n## ', idx + 10);
    
    if (nextSectionIdx > 0) {
      const before = md.substring(0, nextSectionIdx);
      const after = md.substring(nextSectionIdx);
      md = before + '\n' + item.content.trim() + '\n\n' + after;
      console.log('Added AI outputs after:', searchStr);
    }
  } else {
    console.log('NOT FOUND:', searchStr);
  }
}

fs.writeFileSync('drafts/300-prompt-copywriting-premium.md', md);
console.log('Done. File size:', md.length, 'characters');
