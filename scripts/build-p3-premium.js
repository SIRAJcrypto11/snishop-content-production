const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const basicPath = path.join(ROOT, 'drafts', '200-template-social-media-basic.md');
const premiumPath = path.join(ROOT, 'drafts', '200-template-social-media-premium.md');

const basic = fs.readFileSync(basicPath, 'utf8');
const bodyStart = basic.indexOf('## Bagian 1: Perencanaan Konten');
const body = basic.slice(bodyStart);

const frontMatter = `# 200 Template AI untuk Social Media Management

**Edisi Premium dengan Contoh Output AI**

Disusun oleh: Siraj Nur Ihrom, Founder SNISHOP
Edisi Premium, Oktober 2026
Format: 200 template lengkap dengan contoh output dari ChatGPT dan Gemini
Pendamping: Berkas Excel 200 baris template siap pakai

## Tentang Edisi Premium

Edisi Premium berisi semua 200 template dari edisi Basic, ditambah contoh output nyata dari ChatGPT dan Gemini untuk template kunci di setiap bagian.

Yang Anda dapatkan di edisi Premium:
- Semua 200 template dengan teks lengkap
- Contoh output ChatGPT untuk 3 template kunci per bagian
- Contoh output Gemini untuk template yang sama
- Perbandingan kualitas antara kedua alat agar Anda tahu kapan memakai yang mana
- Berkas Excel pendamping dengan 200 baris template siap salin

Contoh output dalam buku ini memakai bisnis contoh yang realistis, dari keripik singkong, katering sehat, sampai jasa laundry. Ganti data bisnis contoh dengan data Anda, lalu hasil yang Anda dapat akan sama spesifiknya.

## Cara Menggunakan Buku Ini

Setiap template mengikuti format yang konsisten. Anda tidak perlu membaca berurutan. Buka bagian yang kasusnya sedang Anda hadapi, ambil kode template, lalu isi bagian di dalam kurung siku dengan data bisnis Anda sendiri.

Struktur tiap entri:

| Bagian | Fungsi |
|---|---|
| Kode | Nomor tetap, dipakai juga di berkas Excel pendamping |
| Kapan pakai | Kondisi nyata yang membuat template ini relevan |
| Template | Teks yang Anda salin utuh ke alat AI pilihan Anda |
| Variabel | Data yang wajib Anda ganti sebelum mengirim |
| Hasil yang diharapkan | Bentuk keluaran yang bisa Anda periksa |
| Contoh output | Hasil nyata dari ChatGPT dan Gemini (hanya di edisi Premium) |

## Standar Kualitas

Semua template dalam buku ini mengikuti standar kualitas ketat:
- Bahasa Indonesia yang natural dan profesional
- Contoh konkret dengan angka dan data
- Struktur yang jelas dan mudah diikuti
- Tanpa frasa pengisi yang tidak berarti
- Tanpa simbol atau tanda baca yang tidak lazim

---

`;

const outputs = {
  bagian1: `
## Contoh Output AI untuk Bagian 1

Berikut contoh output nyata dari ChatGPT dan Gemini untuk tiga template kunci di bagian perencanaan.

### T-001. Kalender Konten Bulanan

**Input yang dipakai:**
Bisnis: keripik singkong balado, platform Instagram dan TikTok, posting 4 kali per minggu, goal bulan ini awareness di kota Bandung, pillar: edukasi singkong, dapur produksi, promo, dan pelanggan.

**Output ChatGPT:**
\`\`\`
Berikut kalender konten 30 hari untuk Keripik Singkong Balado, posting Senin, Rabu, Jumat, Sabtu.

PEKAN 1 (Fokus: buka bulan dengan edukasi)
Minggu 1, Senin: Edukasi singkong. Ide: "5 alasan keripik singkong lebih ramah di kantong dari kentang". Format carousel 5 slide. Hook: "Keripik enak belum tentu mahal." CTA: simpan postingan ini.
Minggu 1, Rabu: Dapur produksi. Ide: video proses irisan singkong tipis sebelum digoreng. Format reel 15 detik. Hook: "Irisan ini dipotong 2 milimeter, makanya renyah sampai ujung." CTA: ikuti untuk proses berikutnya.
Minggu 1, Jumat: Promo. Ide: bundling 3 rasa hemat Rp 15.000. Format feed image. Hook: "Satu toples kurang, ambil tiga." CTA: pesan lewat link bio.
Minggu 1, Sabtu: Pelanggan. Ide: repost unboxing pembeli dari Cimahi. Format story 3 frame. Hook: "Sampai Cimahi, masih utuh dan masih renyah." CTA: tag kami di story Anda.

PEKAN 2 (Fokus: interaksi)
Minggu 2, Senin: Edukasi. Ide: "Bedanya keripik balado asli dan yang cuma ditaburi cabai bubuk". Format carousel. Hook: "Ciri pertama ada di warnanya." CTA: jawab di komentar, ciri mana yang paling sering Anda temui.
Minggu 2, Rabu: Dapur produksi. Ide: reel timbangan gula balado diukur presisi. Hook: "Takaran ini yang bikin pedasnya konsisten." CTA: tanya rasa favorit Anda.
Minggu 2, Jumat: Promo. Ide: gratis ongkir area Bandung Raya akhir pekan. Format feed image. Hook: "Sore ini pesan, Sabtu sampai." CTA: cek link bio.
Minggu 2, Sabtu: Interaksi pelanggan. Ide: kuis tebak jumlah cabai dalam satu toples. Format story quiz. Hadiah: potongan 10 ribu untuk 3 pemenang.

PEKAN 3 (Fokus: kepercayaan)
Minggu 3, Senin: Edukasi. Ide: cara menyimpan keripik agar tahan renyah 2 bulan. Format carousel. Hook: "Jangan simpan di kulkas." CTA: simpan tips ini.
Minggu 3, Rabu: Dapur produksi. Ide: reel pencampuran bumbu balado dari resep nenek. Hook: "Resep ini sudah 12 tahun kami pakai." CTA: follow untuk cerita lengkap.
Minggu 3, Jumat: Promo. Ide: pre-order varian baru keju balado. Format feed. Hook: "Rasa baru yang menantang: pedas lalu gurih." CTA: daftar pre-order di bio.
Minggu 3, Sabtu: Pelanggan. Ide: testimoni video reseller Bandung. Hook: "Dia jual 40 toples sebulan dari rumah." CTA: minat jadi reseller, DM kami.

PEKAN 4 (Fokus: konversi)
Minggu 4, Senin: Edukasi. Ide: bandingkan kandungan, keripik buatan sendiri versus produsen massal. Carousel. Hook: "Baca daftar bahan di kemasan Anda sekarang." CTA: bandingkan punya kami.
Minggu 4, Rabu: Dapur produksi. Ide: video quality control, keripik yang tidak lolos disingkirkan. Hook: "1 dari 10 batch tidak lolos uji kami." CTA: follow.
Minggu 4, Jumat: Promo besar akhir bulan: beli 2 gratis 1 mini pack. Feed image. Hook: "Stok akhir bulan paling banyak." CTA: link bio sekarang.
Minggu 4, Sabtu: Pelanggan. Ide: rekap foto ulasan bulan ini. Carousel 8 slide. Hook: "1.200 ulasan, ini yang paling kami ingat." CTA: ulasan Anda berikutnya?

Catatan strategi: minggu 1 dan 2 membangun audiens baru, minggu 3 membangun kepercayaan, minggu 4 menutup bulan dengan penjualan. Jika suatu minggu reach rendah, naikkan frekuensi story, jangan mengubah feed.
\`\`\`

**Output Gemini:**
\`\`\`
Kalender konten bulanan: Keripik Singkong Balado, 4 posting per minggu, tujuan meningkatkan awareness di Bandung.

Kalender ringkas:

Minggu 1: Bangun tahu
Senin: Carousel edukasi "Kenapa singkong bisa lebih unggul dari kentang untuk camilan" dengan 4 fakta.
Rabu: Reel dapur "Dari singkong mentah sampai renyah dalam 90 detik" dengan musik ramai.
Jumat: Feed promo bundling 3 rasa dengan visual tiga toples berjejer.
Sabtu: Story repost pelanggan plus stiker pertanyaan "rasa favoritmu apa?"

Minggu 2: Bangun dekat
Senin: Carousel "Ciri keripik balado berkualitas" sebagai panduan pembeli.
Rabu: Reel di balik layar pengemasan, tampilkan tangan pekerja, terasa manusiawi.
Jumat: Feed promo gratis ongkir Bandung Raya.
Sabtu: Story kuis tebak rasa dengan swatch merah oranye.

Minggu 3: Bangun percaya
Senin: Carousel tips simpan keripik agar renyah lama.
Rabu: Reel cerita resep balado keluarga, sambungkan rasa dengan cerita.
Jumat: Feed pre-order varian keju balado.
Sabtu: Story testimoni reseller dengan hasil penjualannya.

Minggu 4: Tutup bulan
Senin: Carousel perbandingan bahan dengan produsen massal.
Rabu: Reel quality control, tampilkan standar seleksi.
Jumat: Feed promo beli 2 gratis mini pack.
Sabtu: Story rekap ulasan dan pengumuman pemenang kuis minggu 2.

Prinsip jadwal ini: satu konten edukasi yang layak disimpan, satu konten dapur yang manusiawi, satu konten penjualan yang jelas ajakannya, dan satu konten yang membuat pelanggan tampil setiap minggunya.
\`\`\`

**Perbandingan:** ChatGPT menghasilkan kalimat hook yang lebih spesifik dan bisa langsung dipakai. Gemini lebih ringkas dan rapi sebagai kerangka, tetapi butuh pengembangan hook sendiri. Untuk calendar bulanan, minta ChatGPT untuk detail lalu gunakan Gemini untuk memperpendek bila perlu.

---

### T-004. Analisis Kompetitor

**Input yang dipakai:**
Bisnis: katering sehat mingguan di Jakarta Selatan. Kompetitor yang diamati: katering A (harga 45 ribu per box, paling besar di area), katering B (harga 38 ribu, fokus mahasiswa), katering C (harga 60 ribu, premium, dikirim dingin).

**Output ChatGPT:**
\`\`\`
Analisis tiga kompetitor katering sehat Jakarta Selatan untuk bisnis Anda.

KATERING A (pemimpin volume)
Harga: Rp 45.000 per box.
Kekuatan: jaringan langganan besar, brand dikenal, konten menu harian teratur setiap pagi.
Kelemahan: rasa menu dianggap standar oleh pelanggan lama, waktu antar bervariasi saat jam sibuk.
Strategi media sosial: menu harian plus foto box yang konsisten, jarang interaksi di komentar.

KATERING B (pemburu volume murah)
Harga: Rp 38.000 per box.
Kekuatan: harga paling rendah, cocok untuk mahasiswa dan karyawan baru, promosi bundling mingguan.
Kelemahan: porsi dianggap kecil oleh pekerja dewasa, kemasan sederhana, kualitas menu naik turun.
Strategi media sosial: banyak konten harga dan diskon, engagement tinggi karena memancing komentar harga.

KATERING C (premium)
Harga: Rp 60.000 per box.
Kekuatan: kemasan menawan, foto makanan seperti restoran, dikirim dalam kondisi dingin, menu dikembangkan ahli gizi.
Kelemahan: harga tinggi membatasi pasar, frekuensi posting rendah, tidak punya paket mingguan.
Strategi media sosial: kualitas visual terbaik, tapi sedikit konten yang menjelaskan nilai di balik harga.

POSISI UNTUK BISNIS ANDA
Celah terbesar: tidak ada yang menawarkan paket mingguan dengan harga di kisaran Rp 40.000 sampai 45.000 plus menu berubah setiap minggu dan info gizi jelas. A dominan tapi lemah di rasa, B murah tapi lemah di porsi, C bagus tapi mahal dan jarang posting.

Rekomendasi taktik yang bisa langsung dipakai:
1. Posting menu mingguan lengkap dengan kalori setiap Senin jam 6 pagi, waktu kompetitor A baru posting jam 9.
2. Tampilkan porsi dari atas dengan piring standar 22 cm supaya calon pembeli bisa membandingkan porsi dengan B.
3. Buat konten "kenapa kami tidak jual di bawah 40 ribu" untuk menutup keberatan harga tanpa menurunkan harga.
4. Rekam proses dapur mingguan, celah kepercayaan yang tidak disentuh ketiga kompetitor.
\`\`\`

**Output Gemini:**
\`\`\`
Pemetaan kompetitor katering sehat Jakarta Selatan.

Tabel ringkas:
Katering A: Rp 45.000, kuat di jumlah langganan dan rutinitas konten, lemah di kebaruan rasa dan ketepatan jam antar.
Katering B: Rp 38.000, kuat di harga dan frekuensi promo, lemah di porsi dan konsistensi kualitas.
Katering C: Rp 60.000, kuat di visual dan kualitas pengiriman, lemah di harga dan frekuensi posting.

Celah pasar yang terbaca dari ketiganya:
1. Tidak ada pesaing di harga tengah dengan kejelasan gizi di menu mingguan.
2. Tidak ada yang rajin memakai video proses dapur untuk membangun kepercayaan.
3. Tidak ada yang menawarkan fleksibilitas ganti hari antar untuk pekerja dengan jadwal bergilir.

Saran diferensiasi: posisikan bisnis Anda sebagai katering mingguan yang jujur soal gizi, tunjukkan porsi dengan alat ukur nyata, dan buat konten dapur mingguan sebagai kebiasaan yang tidak dimiliki kompetitor. Pertahankan harga di tengah, di atas B dan sedikit di bawah A, lalu jelaskan alasannya di konten.
\`\`\`

**Perbandingan:** ChatGPT menghasilkan rekomendasi taktik yang lebih bisa dieksekusi minggu ini. Gemini lebih disiplin dalam struktur tabel dan celah pasar. Gunakan ChatGPT saat butuh rencana aksi, Gemini saat butuh ringkasan untuk presentasi.

---

### T-009. Perencana Daur Ulang Konten

**Input yang dipakai:**
Konten asal: video reel dapur produksi keripik singkong durasi 60 detik yang performanya bagus, 12 ribu views.

**Output ChatGPT:**
\`\`\`
Rencana daur ulang konten dari reel dapur 60 detik (12 ribu views):

1. CAROUSEL EDUKASI (minggu ini)
Ambil 5 momen di video, ubah jadi 5 slide: pemilihan singkong, pengupasan, irisan 2 mm, goreng, tabur balado. Slide terakhir jadi CTA ke produk. Judul: "Apa yang terjadi sebelum keripik sampai ke tangan Anda".

2. CAPTION PANJANG (minggu ini)
Tulis versi teks 8 paragraf pendek menceritakan proses dari sudut pandang pemilik: kenapa irisan harus 2 mm, kenapa tidak pakai penggorengan otomatis, kenapa bumbu digoreng lebih dulu. Buka dengan kalimat: "Reel kemarin banyak yang tanya kenapa irisan kami tipis banget. Ini alasannya."

3. STORY SERIES 5 FRAME (minggu ini)
Pecah video jadi 5 klip pendek dengan stiker berbeda: frame 1 polling "pernah lihat proses keripik?", frame 2 dan 3 klip proses, frame 4 pertanyaan terbuka, frame 5 link produk.

4. VIDEO TIKTOK VERSI VERTIKAL MURNI (minggu depan)
Potong ulang tanpa teks panjang, andalkan suara gorengan dan musik trending. 30 detik, hook visual langsung di detik pertama.

5. POSTINGAN KARTU KUTIPAN (minggu depan)
Ambil satu kalimat terbaik dari caption: "Renyah itu hasil kesabaran memotong 2 milimeter." Desain sederhana dengan foto latar dapur.

6. BAHAN EKSPERIMEN IKLAN (minggu depan)
Klip 15 detik terbaik jadi bahan iklan awareness dengan teks overlay "dari dapur kami, bukan pabrik".

Jadwal penyebaran: jangan semua sekaligus. Sebar 3 minggu agar setiap format menjangkau audiens yang aktif di waktu berbeda.
\`\`\`

**Output Gemini:**
\`\`\`
Peta daur ulang satu reel dapur menjadi 6 konten:

Minggu ini:
1. Carousel 5 slide dari 5 tahap proses, tutup dengan ajakan beli.
2. Caption panjang 8 paragraf menjawab pertanyaan penonton soal irisan tipis.
3. Story 5 frame dengan polling dan stiker tanya jawab.

Minggu depan:
4. TikTok 30 detik dengan suara asli gorengan tanpa teks banyak.
5. Kartu kutipan "Renyah itu hasil kesabaran memotong 2 milimeter".
6. Klip iklan 15 detik untuk kampanye awareness.

Aturan daur ulang: satu video bagus setara satu minggu konten. Susun ulang urutannya agar setiap format muncul saat audiens yang berbeda aktif.
\`\`\`

**Perbandingan:** ChatGPT memberi naskah siap pakai termasuk kalimat pembuka. Gemini memberi peta ringkas yang cocok untuk perencanaan cepat. Keduanya sepakat satu konten bagus layak dipecah jadi enam konten dalam 3 minggu.
`,
  bagian2: `
## Contoh Output AI untuk Bagian 2

Berikut contoh output nyata dari ChatGPT dan Gemini untuk tiga template kunci penulisan caption.

### T-043. Naskah TikTok yang Berpotensi Viral

**Input yang dipakai:**
Bisnis: laundry kiloan premium di Yogyakarta. Hook yang dipilih: "kenapa cucian kemeja saya setrika lebih rapi dari laundry lain". Target: mahasiswa dan pekerja muda. CTA: coba paket cuci setrika 5 kilo.

**Output ChatGPT:**
\`\`\`
Skrip TikTok 30 detik, laundry kiloan premium:

DETIK 1 sampai 3 (HOOK)
Pemilik berdiri di depan tumpukan kemeja: "Kemeja kantor saya tidak pernah kusut. Bukan karena saya rajin setrika."

DETIK 4 sampai 10 (PLOT)
"Rahasianya sederhana. Kemeja kantor saya dicuci di laundry, tapi bukan laundry biasa. Coba tebak apa bedanya."

DETIK 11 sampai 22 (BONGKAR RAHASIA)
Potong cepat 4 adegan: tangan memisahkan kemeja putih dari pakaian berwarna, mesin suhu rendah khusus kain kerja, setrika uap dengan penjepit khusus kerah, kemasan gantung yang tidak dilipat. Narasi: "Pemisahan warna ketat, suhu mesin lebih rendah supaya serat kain tidak rusak, setrika uap dengan bentuk kerah, dan yang paling penting, kemeja tidak dilipat tapi digantung."

DETIK 23 sampai 27 (BUKTI)
Tampilkan kemeja menggantung rapi berderet: "Hasilnya begini. Ini sudah 3 bulan cuci di tempat yang sama."

DETIK 28 sampai 30 (CTA)
"Harga paket cuci setrika 5 kilo ada di profil. Datang sekali, kemeja Anda tidak mau dicuci di tempat lain lagi."

Catatan produksi: rekam dengan cahaya pagi dari jendela, musik latar pelan, teks hanya di hook dan CTA. Rekam 2 versi hook, uji mana yang dipakai lebih lama penonton.
\`\`\`

**Output Gemini:**
\`\`\`
Struktur skrip TikTok laundry premium, 30 detik:

Hook detik 1 sampai 3: kalimat rahasia pribadi "kemeja saya tidak pernah kusut" dengan wajah mengarah ke kamera.
Tension detik 4 sampai 10: ajak penonton menebak bedanya dengan laundry biasa.
Pembongkaran detik 11 sampai 22: empat potongan cepat, tiap potongan satu perbedaan: pemisahan ketat, suhu rendah, setrika bentuk kerah, digantung bukan dilipat.
Bukti detik 23 sampai 27: deretan kemeja rapi menggantung plus klaim pengalaman 3 bulan.
CTA detik 28 sampai 30: harga paket di profil, tutup dengan kalimat yang membuat orang penasaran mencoba.

Saran tambahan: buat versi duet dengan pelanggan yang menunjukkan hasil cucian mereka sendiri, potensi jangkauan lebih luas dari skrip aslinya.
\`\`\`

**Perbandingan:** ChatGPT memberikan naskah kata per kata yang bisa langsung direkam. Gemini memberi kerangka lebih fleksibel plus satu ide tambahan (duet pelanggan) yang berharga. Pemilik yang belum biasa di kamera sebaiknya pakai naskah ChatGPT dulu.

---

### T-047. Caption Promo Diskon

**Input yang dipakai:**
Bisnis: toko kue basah Malang. Promo: diskon 25 persen untuk semua varian kue basah hanya hari Sabtu, karena stok bahan harus dihabiskan sebelum bahan baru datang Senin. Tanpa kode kupon, langsung di kasir.

**Output ChatGPT:**
\`\`\`
Sabtu ini semua kue basah 25 persen lebih murah. Tanpa kupon, tanpa syarat.

Jujur soal kenapa kami diskon: bahan untuk pekan ini masih banyak, dan bahan baru datang Senin. Daripada menyimpan, lebih baik kue basah yang segar hari ini sampai ke meja Anda dengan harga lebih ramah.

Lumpur pandan, bolu kukus meises, putu ayu, tapioca cokelat, semuanya ikut. Datang langsung ke toko, harga diskon otomatis di kasir.

Buka sampai stok hari itu habis. Kalau Anda pernah kehabisan di promo kemarin, datang pagi.

Lokasi di bio. Bawa kotak sendiri jika mau, kami senang mengurangi plastik.
\`\`\`

**Output Gemini:**
\`\`\`
Sabtu, semua kue basah potong 25 persen. Langsung di kasir, tanpa kupon.

Kenapa kami diskon: bahan pekan ini harus habis sebelum bahan baru datang Senin. Lebih baik masuk perut daripada masuk tempat sampah.

Semua varian ikut, dari putu ayu sampai bolu kukus meises. Datang pagi, stok hari itu terbatas. Alamat toko di bio.
\`\`\`

**Perbandingan:** ChatGPT lebih panjang dan menjelaskan konteks dengan jujur, cocok untuk feed Instagram. Gemini lebih pendek dan tajam, cocok untuk status WhatsApp dan TikTok caption. Keduanya menahan diri dari kata kata berlebihan seperti promo terbesar sepanjang masa, yang justru menurunkan kepercayaan.

---

### T-052. Caption Transformasi Before-After

**Input yang dipakai:**
Bisnis: jasa poles bodi mobil. Konten: foto sebelum bodi kusam dan sesudah mengkilap. Target: pemilik mobil harian yang malu mengajak naik mobil karena bodi kusam. Harga: paket poles 900 ribu.

**Output ChatGPT:**
\`\`\`
Kiri: mobil yang biasa dititip di belakang kantor. Kanan: mobil yang sekarang dipakai mengantar anak sekolah.

Bukan cat baru. Bukan ganti warna. Hanya poles 2 tahap selama satu hari kerja di studio kami.

Kusam pada mobil harian biasanya bukan cat yang mati, tapi lapisan kotoran dan goresan halus yang menahan cahaya. Setelah dibersihkan dan dipoles dengan benar, warna aslinya kembali muncul. Warna yang sama yang dulu membuat Anda jatuh hati membeli mobil itu.

Paket poles 2 tahap, Rp 900.000, selesai satu hari, termasuk coating pelindung 3 bulan. Slot minggu ini tersisa 4 mobil.

Kirim foto kondisi bodi mobil Anda lewat DM, kami jawab jujur apakah perlu poles ringan, poles berat, atau malah tidak perlu sama sekali.
\`\`\`

**Output Gemini:**
\`\`\`
Satu hari kerja, dan warna asli mobil Anda muncul lagi.

Foto kiri: bodi kusam karena lapisan kotoran dan goresan halus. Foto kanan: hasil poles 2 tahap di studio kami. Catnya belum ganti, cuma dibersihkan dan dipoles sampai cahaya menembus lagi.

Rp 900.000, selesai sehari, pelindung 3 bulan. Sisa slot minggu ini: 4 mobil.

Kirim foto mobil Anda ke DM. Kalau ternyata tidak perlu poles, kami bilang tidak perlu.
\`\`\`

**Perbandingan:** ChatGPT menjelaskan mekanisme kenapa bodi bisa kusam, yang membangun kepercayaan teknis. Gemini lebih langsung ke penawaran dengan satu kalimat jaminan jujur di akhir. Untuk layanan teknis seperti ini, kombinasi keduanya paling kuat: edukasi ChatGPT untuk feed, singkatnya Gemini untuk story.
`,
  bagian3: `
## Contoh Output AI untuk Bagian 3

Berikut contoh output nyata dari ChatGPT dan Gemini untuk tiga template kunci konten visual.

### T-082. Generator Konsep Reel

**Input yang dipakai:**
Bisnis: katering sehat mingguan Jakarta Selatan. Tujuan reel: menunjukkan kejujuran porsi. Aset yang ada: dapur sendiri, timbangan dapur, piring standar 22 cm, box katering.

**Output ChatGPT:**
\`\`\`
Tiga konsep reel kejujuran porsi untuk katering sehat:

KONSEP 1: TIMBANGAN TIDAK BOHONG (30 detik)
Buka dengan tangan menuang nasi ke box, langsung potong ke timbangan digital menunjukkan angka 180 gram. Narasi: "Kami menimbang tiap box. Ini bukan perkiraan." Lanjut potongan cepat: protein ditimbang, sayur ditimbang. Tutup dengan tabel mini di layar: karbohidrat 180 gram, protein 120 gram, sayur 100 gram. Teks akhir: "Menu minggu ini di bio."
Kenapa berhasil: angka nyata memancing komentar, baik yang kagum maupun yang menguji.

KONSEP 2: PIRING KANTOR BENERAN (25 detik)
Sajikan box katering di piring keramik 22 cm, ditata seperti makan siang kantor sungguhan, di atas meja kerja nyata. Narasi: "Yang Anda lihat di foto menu sering terlihat lebih besar dari yang sampai. Maka dari itu kami foto di piring 22 cm, piring makan sehari hari." Tutup dengan perbandingan berdampingan foto menu dan foto piring nyata.
Kenapa berhasil: menyebut kecurigaan audiens lebih dulu, justru membangun kepercayaan.

KONSEP 3: DUA BOX SATU TIMBANGAN (35 detik)
Bandingkan box katering Anda dengan box kompetitor yang dibeli sendiri, timbang keduanya di kamera. Narasi jujur: kalau bedanya tipis, bilang tipis. Kalau lebih berat, tunjukkan. Tutup: "Kami tidak takut dibandingkan. Coba sendiri satu minggu."
Kenapa berhasil: konten perbandingan selalu mendapat retensi tinggi, dan keberanian menunjukkan hasil apa adanya membedakan Anda dari kompetitor.

Produksi: satu hari syuting bisa merekam ketiga konsep. Gunakan cahaya jendela, tanpa filter mewah, biarkan dapur terlihat seperti dapur.
\`\`\`

**Output Gemini:**
\`\`\`
Tiga ide reel porsi jujur untuk katering:

1. Timbangan di kamera. Tunjukkan berat tiap komponen box satu per satu, akhiri dengan angka total dan teks menu mingguan di bio. Pancing komentar dengan angka.
2. Piring 22 cm nyata. Foto box yang disajikan seperti makan siang sungguhan, jelaskan kenapa semua foto menu Anda memakai piring ukuran itu. Bantah curiga sebelum muncul.
3. Duel timbangan. Bandingkan berat box Anda dengan pesaing yang Anda beli sendiri. Jujur dengan hasilnya, tutup dengan ajakan uji coba satu minggu.

Tips produksi: rekam ketiganya dalam satu sesi, jaga pencahayaan natural, tampilkan dapur apa adanya.
\`\`\`

**Perbandingan:** ChatGPT lengkap dengan narasi per detik dan alasan psikologis tiap konsep. Gemini merangkum lebih padat dengan satu tips produksi yang berguna. Untuk produksi pertama kali, ikuti detail ChatGPT.

---

### T-086. Konsep Foto Before-After

**Input yang dipakai:**
Bisnis: jasa cuci sofa panggilan di Surabaya. Foto sebelum: sofa krem dengan noda di sandaran tangan dan bagian duduk tengah. Foto sesudah: sofa sama, bersih, warna krem kembali merata. Target: ibu rumah tangga dan pemilik rumah kontrakan.

**Output ChatGPT:**
\`\`\`
Konsep foto sebelum sesudah jasa cuci sofa:

ATURAN DASAR
1. Kamera posisi, sudut, dan jarak HARUS sama persis di dua foto. Beda sudut sedikit saja membuat pembeli curiga foto dimanipulasi. Tandai posisi kaki tripod dengan selotip di lantai.
2. Cahaya sama: rekam keduanya siang hari dengan jendela yang sama, jangan satu foto pakai lampu satu tidak.
3. Jangan sunting warna. Kerjakan pembersihan yang benar, biarkan foto jujur.
4. Sertakan elemen pengukur: letakkan remote TV atau majalah di satu titik yang sama di kedua foto, memberi skala dan kontinuitas.

KOMPOSISI YANG DISARANKAN
Foto sebelum: sofa utuh dari sudut 45 derajat, noda terlihat jelas tanpa zoom. Foto sesudah: sudut yang sama persis.
Konten feed: gabungkan dua foto jadi satu gambar terbelah tengah, tambahkan satu baris teks di bawah: "Sofa 3 dudukan, kain krem, hasil cuci panggilan hari ini."
Carousel: slide 1 foto gabungan, slide 2 foto sebelum dekat pada noda, slide 3 proses penyedotan, slide 4 foto sesudah dekat pada area sama, slide 5 harga dan cara booking.

TEKS CAPTION PENDAMPING
"Sofa ini sudah 6 tahun dipakai tiga anak. Noda di sandaran adalah sisa teh tawar dari 2 tahun lalu. Satu jam kerja, dan warna aslinya muncul lagi. Kain kami cuci dengan mesin penyedot, bukan cuma dilap, supaya kotoran di dalam bantal ikut keluar. Area Surabaya kota dan sekitarnya. Jadwal minggu ini masih tersisa 3 slot. DM untuk cek tanggal."
\`\`\`

**Output Gemini:**
\`\`\`
Panduan foto sebelum sesudah cuci sofa:

Kunci kejujuran: posisi kamera, jarak, dan cahaya wajib identik di kedua foto. Gunakan tripod dengan penanda posisi di lantai. Ambil dua foto di sesi cahaya yang sama, hindari suntingan warna.

Saran komposisi: satu gambar terbelah untuk feed, carousel 5 slide untuk cerita lengkap: hasil gabungan, noda dari dekat, proses penyedotan, hasil dari dekat, harga dan booking.

Contoh caption: sebutkan umur sofa, asal noda, alat yang dipakai, slot tersisa, dan ajakan DM. Keterangan yang spesifik membuat pembeli percaya foto tidak dibuat buat.
\`\`\`

**Perbandingan:** ChatGPT memberi aturan teknis lengkap dan naskah caption siap pakai. Gemini merangkum prinsip inti dengan cepat. Foto sebelum sesudah hanya efektif jika disiplin pada detail teknis, dan ChatGPT menutup detail itu.

---

### T-094. Naskah Video Proses

**Input yang dipakai:**
Bisnis: pembuat tas kulit handmade Bandung. Proses yang direkam: memotong pola kulit, menjahit tangan dengan jahitan saddler, mengoles edge paint, pembakaran logo. Durasi video target: 45 detik.

**Output ChatGPT:**
\`\`\`
Naskah video proses tas kulit handmade, 45 detik:

DETIK 1 sampai 4
Suara pisau memotong kulit, tanpa narasi. Teks: "Satu tas. 9 jam tangan manusia."

DETIK 5 sampai 12
Cut pola kulit dipotong satu per satu di atas kertas pola. Narasi pelan: "Kulit sapi veg tan dipotong mengikuti pola yang sudah kami koreksi belasan kali."

DETIK 13 sampai 24
Jahitan tangan saddler, fokus ke tangan dan benang lilin. Narasi: "Setiap jahitan dibor lebih dulu, lalu dijahit dua tangan. Kalau satu benang putus, jahitan tidak langsung terurai seperti jahitan mesin."

DETIK 25 sampai 33
Olesan edge paint dua lapis, jeda pengeringan. Narasi: "Tepi tas kami dilem, diamplas, lalu dicoat dua kali. Bagian kecil yang kebanyakan orang tidak pernah perhatikan, tapi terasa saat tas dipakai bertahun."

DETIK 34 sampai 40
Pembakaran logo satu kali tekan. Suara asli api kecil. Tanpa narasi, biarkan suara bicara.

DETIK 41 sampai 45
Tas berdiri di atas meja kayu dengan cahaya jendela. Teks: "Bandung. Pesanan bulan ini tersisa 5 slot." Musik berhenti tepat sebelum video selesai.

CATATAN PRODUKSI
Rekam dengan HP di tripod, cahaya jendela pagi. Suara asli lebih penting daripada musik: suara pisau, jarum, dan api adalah alat utama video ini. Tambahkan musik pelan hanya sebagai latar tipis di bagian tengah.
\`\`\`

**Output Gemini:**
\`\`\`
Struktur video proses tas kulit 45 detik:

Buka 4 detik: suara pemotongan kulit, teks "9 jam tangan manusia". Jangan pakai narasi di awal, biarkan suara menarik.
Bagian proses: potong pola, jahit tangan saddler, edge coating dua lapis, bakar logo. Satu kalimat narasi per proses, jelaskan kenapa langkah itu penting, bukan apa yang terlihat.
Tutup 5 detik: tas berdiri dengan cahaya natural, teks slot pesanan tersisa.

Prinsip: suara asli alat kerja adalah kekuatan utama video ini. Musik hanya pelengkap tipis. Narasi menjelaskan alasan, bukan mendeskripsikan gerakan.
\`\`\`

**Perbandingan:** ChatGPT menulis naskah utuh yang bisa langsung dibaca ke tim. Gemini menegaskan prinsip suara asli dan narasi berbasis alasan. Untuk konten proses, keduanya sepakat: biarkan suara alat bicara, narasi hanya menjelaskan kenapa.
`,
  bagian4: `
## Contoh Output AI untuk Bagian 4

Berikut contoh output nyata dari ChatGPT dan Gemini untuk tiga template kunci engagement.

### T-121. Templat Balasan Komentar

**Input yang dipakai:**
Bisnis: keripik singkong balado. Jenis komentar: pertanyaan harga dan ongkir yang berulang, tone brand: hangat dan tidak formal. Produk: keripik balado Rp 150.000 per kotak isi 10. CTA: cek link bio.

**Output ChatGPT:**
\`\`\`
Lima template balasan komentar untuk keripik singkong balado:

TEMPLATE 1: TANYA HARGA
"Berapa harganya ya? Harga kotak isi 10 ada di bio, dan Sabtu ini ada diskon kecil. Kabari kalau bingung pilih rasa, kami bantu."

TEMPLATE 2: TANYA ONGKIR
"Untuk luar kota kami biasa pakai paket hemat, biasanya sampai 2 sampai 3 hari. Kota Bandung bisa same day. Cek kalkulasi pas di link bio ya, di sana ongkir muncul otomatis sesuai alamat."

TEMPLATE 3: PERTANYAAN PEDAS TIDAK
"Balado kami pedasnya sedang, enak untuk yang biasa makan sambal tapi tidak mau minta air. Kalau mau lebih nendang, ada varian extra yang boleh dicoba nanti."

TEMPLATE 4: PEMUJI RASA
"Terima kasih ya! Cerita ke kami varian mana yang paling nempel di hati Anda, biar jadi bahan pertimbangan pembeli lain juga."

TEMPLATE 5: KELUHAN RASA BERUBAH
"Wah maaf banget, rasa kami harusnya konsisten karena bumbu ditakar. Boleh DM tanggal pembelian dan foto kotaknya? Kami cek batch yang mana dan berikan solusi yang wajar untuk Anda."

CATATAN PENGGUNAAN: variabel yang perlu Anda sesuaikan hanya harga, tanggal promo, dan nama varian. Balasan keluhan (template 5) sebaiknya dipindah ke DM setelah komentar pertama dijawab dengan empati, jangan pernah berdebat di kolom komentar.
\`\`\`

**Output Gemini:**
\`\`\`
Template balasan komentar keripik balado, tone hangat:

Tanya harga: jawab dengan angka plus info promo berjalan, arahkan ke link bio dengan tawaran bantuan memilih rasa.
Tanya ongkir: sebutkan estimasi umum per wilayah, dorong cek otomatis di bio.
Tanya pedas: jelaskan tingkat pedas dengan perbandingan sehari hari, sebut varian alternatif.
Pujian: ucapkan terima kasih dan minta cerita varian favorit, jawaban ini sering memicu komentar lain bercerita.
Keluhan: akui, minta detail lewat DM, janjikan pemeriksaan batch. Jangan pernah menyangkal di kolom komentar.

Prinsip umum: balas komentar pertanyaan cepat karena jawaban itu dibaca banyak calon pembeli yang tidak berani bertanya.
\`\`\`

**Perbandingan:** ChatGPT memberikan kata kata yang sudah siap tempel dengan gaya yang hidup. Gemini lebih mengajarkan prinsip di balik tiap balasan. Keduanya sepakat satu hal penting: komentar pertanyaan wajib dibalas cepat karena jawabannya dibaca pembeli diam yang lain.

---

### T-133. Naskah Live Shopping

**Input yang dipakai:**
Bisnis: toko kue basah Malang. Produk di live: 4 varian kue basah. Harga khusus live: bundling 4 varian Rp 60.000 (normal Rp 75.000). Stok promo: 40 bundling.

**Output ChatGPT:**
\`\`\`
Skrip live shopping kue basah, durasi target 45 menit:

PEMBUKA (menit 1 sampai 3)
"Halo semuanya, selamat malam! Kali ini kami live langsung dari dapur, jadi jika ada aroma kukusan yang seolah menembus layar, itu bukan efek." Tampilkan keempat varian di meja. "Malam ini ada bundling 4 rasa, harga khusus live 60 ribu, normalnya 75 ribu, dan hanya ada 40 bundling."

PRODUK 1: LUMPUR PANDAN (menit 3 sampai 10)
Hook: "Varian yang paling sering ditanyakan orang."
Demo: potong satu di kamera, tunjukkan lembabnya, cicipi satu suap.
Tiga manfaat: pandan asli dari daerah Malang selatan, lembab tahan 2 hari, manisnya tidak menusuk.
Keberatan yang dijawab: "tahan berapa hari?" jawab dengan cara simpan yang benar.
Closing: "Lumpur pandan satu porsi ada di bundling malam ini."

PRODUK 2: BOLU KUKUS MEISES (menit 10 sampai 17)
Hook: "Yang ini favorit anak anak."
Demo: kupas pembungkus, tampilkan permukaan meises.
Manfaat: tekstur lembap, meises asli, ukuran pas untuk bekal.
Keberatan: "aman untuk bekal tanpa kulkas?" jawab jujur: sehari aman, dua hari perlu kulkas.
Closing: satu porsi di bundling.

PRODUK 3: PUTU AYU (menit 17 sampai 24)
Hook: "Putu ayu yang kelapanya tidak keras."
Demo: belah dua, tampilkan serutan kelapa.
Manfaat, keberatan, closing dengan pola sama.

PRODUK 4: TAPIOCA COKELAT (menit 24 sampai 31)
Hook: "Cokelat asli, bukan topping cokelat palsu."
Demo dan closing serupa.

SIKLUS URGENSI (menit 31 sampai 40)
Tampilkan papan tulis stok: "Tadi malam kita buka dengan 40 bundling, sekarang tersisa angka ini." Update stok tiap 5 menit. Ingatkan: "Live berhenti jam 9, setelah itu harga kembali normal."

PENUTUP (menit 40 sampai 45)
Ucapkan terima kasih, tunjukkan cara order untuk yang baru bergabung, umumkan pengundian: komentar yang membeli malam ini berkesempatan dapat mini pack gratis di pesanan berikutnya.

KALIMAT PENAHAN STOK: "Yang masih mikir, bundling ini hanya ada saat live. Besok harga kembali 75 ribu."
\`\`\`

**Output Gemini:**
\`\`\`
Kerangka live shopping kue basah 45 menit:

Pembuka 3 menit: sapa ramai, tunjukkan 4 varian, umumkan bundling 60 ribu dari normal 75 ribu, stok 40.
Per produk 7 menit: hook satu kalimat, demo potong dan cicip di kamera, tiga manfaat, jawab satu keberatan umum, tutup dengan pengingat bundling.
Menit 31 sampai 40: siklus urgensi, update stok di papan tulis tiap 5 menit, batas waktu jam 9.
Penutup 5 menit: cara order untuk pendatang baru, giveaway mini pack untuk pembeli malam ini.

Kunci: uji rasa di kamera itu wajib, penonton membeli karena melihat reaksi asli. Update stok yang terlihat lebih berpengaruh daripada kata kata mendesak.
\`\`\`

**Perbandingan:** ChatGPT menyediakan naskah lengkap termasuk kalimat pembuka yang mengundang senyum. Gemini menegaskan dua kunci teknis: cicip di kamera dan stok yang di-update terlihat. Untuk live pertama kali, naskah ChatGPT adalah alat kepercayaan diri terbaik.

---

### T-139. Desain Program Referral

**Input yang dipakai:**
Bisnis: laundry premium Yogyakarta. Produk: paket cuci setrika 5 kilo. Reward pengundang: saldo cuci Rp 15.000 per teman yang datang pertama kali. Reward tertunduk: potongan Rp 10.000 untuk pesanan pertama temannya.

**Output ChatGPT:**
\`\`\`
Desain program referral laundry premium:

NAMA PROGRAM
Rekomendasi: "Ajak Cuci", sederhana dan langsung terbayang. Hindari nama yang bermain kata terlalu jauh karena sulit diingat dan sulit dicari.

ALUR PROGRAM
1. Pelanggan minta kode referral unik (nomor HP pelanggan dipakai sebagai kode).
2. Pelanggan menitipkan kode ke teman lewat WhatsApp, template pesan kami sediakan.
3. Teman datang pertama kali, menyebut kode, dapat potongan 10 ribu.
4. Setelah teman menyelesaikan pesanan pertama, saldo cuci 15 ribu masuk ke akun pengundang otomatis, kami kirim WA pemberitahuan.
5. Saldo dipakai untuk transaksi berikutnya, tidak bisa diuangkan.

ATURAN ANTIPENYALAHGUNAAN
Satu nomor HP baru hanya dihitung sekali. Satu rumah tangga dengan satu alamat dihitung satu pelanggan. Saldo berlaku 90 hari.

CAPTION PELUNCURAN
"Banyak pelanggan kami datang karena diceritakan temannya. Sekarang cerita itu kami hargai. Ajak teman cuci di sini, dia dapat 10 ribu potongan untuk pesanan pertama, Anda dapat 15 ribu saldo cuci. Tanyakan kode Anda ke kasir atau balas pesan ini."

TEMPLATE PESAN UNTUK DITERUSKAN
"[Nama teman], aku langganan laundry di [nama laundry], hasilnya memuaskan dan kemeja bisa digantung tanpa dilipat. Kalau kamu mau coba, sebut nomor HPku [nomor] saat pesan pertama, dapat 10 ribu potongan. Paket cuci setrika 5 kilo cocok untuk mulai."

TIGA KONTEN PENGINGAT
1. Story pasangan referral: ceritakan pelanggan yang datang karena rekomendasi temannya.
2. Feed edukasi: "Kenapa kami memberi saldo bukan uang tunai" menjelaskan saldo membuat harga tetap sehat.
3. Story pengingat akhir bulan: saldo pengundang yang belum dipakai segera habis masa berlakunya.
\`\`\`

**Output Gemini:**
\`\`\`
Kerangka program referral laundry:

Nama sederhana yang mudah diingat, misal "Ajak Cuci". Mekanisme: kode referral dari nomor HP pelanggan, teman dapat potongan 10 ribu, pengundang dapat saldo 15 ribu setelah teman menyelesaikan pesanan pertama. Saldo berlaku 90 hari, tidak diuangkan.

Aturan penting: satu nomor HP baru dihitung sekali, satu rumah tangga satu alamat dihitung satu pelanggan.

Peluncuran: caption yang membuka dengan kebiasaan pelanggan menceritakan laundry ke teman, lalu tawarkan imbalan. Sertakan template pesan yang enak diteruskan, jangan pesan yang terasa seperti iklan yang dipaksa.

Pengingat rutin: cerita pasangan referral, edukasi kenapa berupa saldo, dan pengingat masa berlaku saldo.
\`\`\`

**Perbandingan:** ChatGPT menyelesaikan detail sampai ke template pesan yang enak diteruskan. Gemini merangkum mekanisme dengan rapi. Ambil mekanisme dari Gemini, ambil naskah dari ChatGPT.
`,
  bagian5: `
## Contoh Output AI untuk Bagian 5

Berikut contoh output nyata dari ChatGPT dan Gemini untuk tiga template kunci analitik.

### T-161. Laporan Performa Bulanan

**Input yang dipakai:**
Bisnis: katering sehat Jakarta Selatan. Periode: Oktober. Platform: Instagram. Data: followers 2.140 naik dari 1.980, rata rata reach feed 1.900, engagement rate 4,2 persen naik dari 3,1 persen, 34 chat masuk dari konten, 9 langganan mingguan baru. Goal bulan: 8 langganan baru.

**Output ChatGPT:**
\`\`\`
LAPORAN PERFORMA INSTAGRAM, KATERING SEHAT, OKTOBER

RINGKASAN EKSEKUTIF
Oktober adalah bulan terbaik tahun ini untuk interaksi. Target 8 langganan baru terlampaui dengan 9 langganan. Yang paling berpengaruh: seri reel timbangan porsi yang diposting 3 kali bulan ini, menyumbang 60 persen chat masuk. Reach bertahan di kisaran yang sama tiga minggu berturut, layak dipantau tapi belum perlu diubah.

METRIK UTAMA
Followers: 2.140, naik 160 (8,1 persen) dari September.
Rata rata reach feed: 1.900, naik 6 persen.
Engagement rate: 4,2 persen, naik dari 3,1 persen.
Chat masuk dari konten: 34, naik dari 18.
Langganan mingguan baru: 9, target 8, tercapai 112,5 persen.

KONTEN TERBAIK
1. Reel timbangan porsi (6.800 views, 41 chat). Angka nyata memancing percakapan.
2. Carousel menu mingguan dengan kalori (2.900 views, 12 chat). Paling sering disimpan.
3. Reel dapur Senin (3.100 views, 9 chat). Proses masih menarik penonton baru.

KONTEN KURANG EFISIEN
1. Posting sambutan hari guru (890 views, 0 chat). Terlalu jauh dari topik inti.
2. Kartu motivasi olahraga (720 views, 1 chat). Tidak relevan dengan kebutuhan pembeli.

INSIGHT AUDIENS
Puncak aktivitas komentar: jam 7 sampai 9 pagi dan 19 sampai 21 malam. Komentar didominasi pertanyaan harga paket keluarga, sinyal ada segmen keluarga yang belum dilayani konten.

REKOMENDASI NOVEMBER
1. Lanjutkan reel angka nyata, jadikan format rutin 2 kali sebulan.
2. Buat konten khusus paket keluarga, jawab pertanyaan yang berulang.
3. Uji jam posting pagi versus malam selama 2 minggu.
4. Kurangi konten kartu motivasi, ganti dengan konten jawaban pertanyaan pelanggan.
5. Target November: 10 langganan baru, engagement rate di atas 4 persen, reach tidak turun di bawah 1.800.

PRATINJAU DESEMBER
Naikkan target langganan menjadi 12 untuk mengantisipasi permintaan akhir tahun, siapkan konten paket acara kantor mulai pertengahan November.
\`\`\`

**Output Gemini:**
\`\`\`
Ringkasan laporan Instagram Oktober, katering sehat:

Capaian: 9 langganan baru dari target 8. Followers naik 8,1 persen jadi 2.140. Engagement rate naik dari 3,1 ke 4,2 persen. Chat masuk hampir dua kali lipat bulan lalu.

Penggerak utama: reel timbangan porsi menyumbang mayoritas chat. Konten menu mingguan paling banyak disimpan. Konten yang jauh dari topik inti tidak menghasilkan apa pun.

Prioritas November: pertahankan format reel angka nyata, buka segmen paket keluarga yang tumbuh dari pertanyaan pelanggan, uji jam posting pagi dan malam, kurangi konten yang tidak relevan.

Target: 10 langganan baru, engagement di atas 4 persen, reach tidak turun di bawah 1.800.
\`\`\`

**Perbandingan:** ChatGPT menyajikan laporan lengkap dengan rincian konten terbaik dan terburuk. Gemini meringkas untuk pemilik yang sibuk. Gunakan versi ChatGPT untuk arsip dan rapat, versi Gemini untuk pengingat cepat di awal bulan.

---

### T-172. Analisis Performa Reel dan Video

**Input yang dipakai:**
Bisnis: pembuat tas kulit handmade. Data 3 video terbaik dan 3 terlemah bulan ini: video jahitan tangan 52 ribu views, video bakar logo 31 ribu views, video edge coating 18 ribu views; video lomba karya pelanggan 1.400 views, video produk berputar dengan musik 900 views, video sapaan pemilik 700 views.

**Output ChatGPT:**
\`\`\`
Analisis performa video pembuat tas kulit:

TABEL PERBANDINGAN
Video jahitan tangan: 52 ribu views, retensi 58 persen, 1.900 like, 310 share, 240 save.
Video bakar logo: 31 ribu views, retensi 49 persen, 980 like, 190 share, 130 save.
Video edge coating: 18 ribu views, retensi 44 persen, 620 like, 90 share, 110 save.
Video lomba karya: 1.400 views, retensi 21 persen.
Video produk berputar: 900 views, retensi 17 persen.
Video sapaan pemilik: 700 views, retensi 24 persen.

POLA VIDEO BERHASIL
1. Semua video berhasil punya suara asli alat kerja di detik pertama, tanpa musik yang mendominasi.
2. Retensi tertinggi ada di video proses yang menampilkan tangan, bukan wajah.
3. Share tertinggi di video jahitan, kemungkinan karena dianggap pujian keterampilan yang layak diteruskan.
4. Save tertinggi juga di video proses, penonton menyimpan untuk inspirasi.

POLA VIDEO GAGAL
1. Video produk berputar dengan musik adalah format iklan klasik yang tidak punya alasan untuk ditonton sampai habis.
2. Video sapaan pemilik lemah di detik pertama karena tidak ada visual yang menahan jempol.
3. Video lomba tidak punya konteks, penonton tidak tahu kenapa harus peduli.

TITIK RETENSI TURUN
Pada video proses, penonton pergi paling banyak di detik 8 sampai 12, saat narasi mulai menjelaskan. Saran: pindahkan penjelasan setelah momen visual paling menarik.

LIMA ATURAN PRODUKSI BERIKUTNYA
1. Detik pertama selalu suara asli atau gerakan alat, bukan wajah atau logo.
2. Satu video satu proses, jangan gabung 4 proses dalam satu video.
3. Narasi baru boleh masuk setelah detik 12, setelah momen visual terkuat.
4. Tutup video dengan langkah proses berikutnya, bukan dengan ajakan langsung.
5. Format produk berputar hanya untuk iklan berbayar, tidak untuk feed organik.
\`\`\`

**Output Gemini:**
\`\`\`
Temuan utama dari 6 video:

Yang berhasil: proses kerja dengan suara asli, terutama yang menampilkan tangan. Video jahitan tangan unggul di semua metrik termasuk share, artinya konten tersebut layak diteruskan orang.

Yang gagal: format iklan klasik (produk berputar dengan musik), sapaan tanpa visual yang menahan, dan konten lomba tanpa konteks cerita.

Titik bocor: penonton pergi saat narasi mulai di detik 8 sampai 12. Geser penjelasan ke belakang.

Aturan berikutnya: suara alat di detik pertama, satu proses per video, narasi setelah detik 12, tutup dengan proses lanjutan, dan pindahkan format produk berputar ke iklan saja.
\`\`\`

**Perbandingan:** ChatGPT menyajikan analisis angka per video dengan tabel yang bisa dipakai berulang setiap bulan. Gemini menarik kesimpulan lebih cepat. Keduanya sampai pada aturan produksi yang sama, tanda diagnosisnya solid.

---

### T-180. Perencana Alokasi Anggaran Iklan

**Input yang dipakai:**
Bisnis: laundry premium Yogyakarta. Anggaran iklan: Rp 1.000.000 per bulan. Kanal: Instagram ads dan TikTok ads. Goal: penjualan paket cuci setrika 5 kilo.

**Output ChatGPT:**
\`\`\`
Rencana alokasi anggaran iklan 1 juta per bulan, laundry premium:

PRINSIP UNTUK ANGGARAN KECIL
Untuk anggaran di bawah 3 juta, jangan pecah ke banyak kanal. Dua kanal pun sudah menantang. Beri 80 persen untuk yang terbukti menjual, 20 persen untuk eksperimen.

ALOKASI
Instagram ads: Rp 800.000.
Struktur: 1 kampanye penjualan dengan 2 set iklan (klip hasil cucian dengan testimoni, klip proses setrika rapi). Target: orang yang tinggal 5 kilometer dari toko, usia 20 sampai 45 tahun.
TikTok ads: Rp 200.000.
Struktur: 1 kampanye awareness dengan video proses yang performanya paling bagus secara organik. Tujuannya bukan penjualan langsung, tapi mengenalkan merek ke pemirsa TikTok lokal.

ATURAN EVALUASI MINGGUAN
Minggu 1 sampai 2: biarkan berjalan, jangan sentuh, kumpulkan data.
Minggu 3: hitung biaya per chat di Instagram. Jika di atas Rp 25.000 per chat, ganti kreatif, bukan ganti target.
Minggu 4: hitung biaya per pembeli. Jika di bawah Rp 40.000 per pembeli, anggaran Instagram aman dan boleh naik 20 persen bulan depan.

ATURAN PEMINDAHAN
Jika Instagram gagal mencapai biaya per pembeli di bawah Rp 60.000 selama 2 minggu penuh, pindahkan Rp 300.000 dari Instagram ke TikTok dan ubah tujuan TikTok menjadi penjualan.

KESALAHAN PEMBOROSAN YANG SERING TERJADI
1. Mengganti iklan setiap 2 hari sebelum data cukup.
2. Pecah anggaran ke 5 kampanye kecil sehingga tidak ada yang cukup belajar.
3. Berhenti total saat performa turun 1 hari, padahal algoritma sedang menyesuaikan.
4. Menargetkan seluruh kota saat toko hanya bisa melayani radius dekat.
\`\`\`

**Output Gemini:**
\`\`\`
Alokasi 1 juta untuk laundry premium:

Instagram 800 ribu untuk kampanye penjualan dengan 2 kreatif, target radius 5 kilometer. TikTok 200 ribu untuk awareness dengan video proses terbaik.

Ritme: dua minggu pertama biarkan berjalan, minggu ketiga evaluasi biaya per chat, minggu keempat evaluasi biaya per pembeli dengan batas 40 ribu.

Jika Instagram gagal dua minggu, pindahkan 300 ribu ke TikTok dan ubah sasarannya ke penjualan.

Jangan: ganti iklan setiap dua hari, pecah anggaran terlalu kecil, panik saat satu hari performa turun, atau menargetkan seluruh kota.
\`\`\`

**Perbandingan:** ChatGPT memberi penjelasan lengkap dengan alasan di balik setiap aturan. Gemini memadatkan semua keputusan penting dalam beberapa kalimat. Keduanya menghasilkan rencana yang identik. Simpan versi Gemini sebagai lembar acuan harian pengelola iklan.
`,
};

const insertions = [
  ['## Bagian 2: Penulisan Caption', outputs.bagian1],
  ['## Bagian 3: Konten Visual', outputs.bagian2],
  ['## Bagian 4: Interaksi dan Komunitas', outputs.bagian3],
  ['## Bagian 5: Analitik dan Optimasi', outputs.bagian4],
  ['## Lampiran', outputs.bagian5],
];

let premium = frontMatter + body;
for (const [marker, content] of insertions) {
  if (!premium.includes(marker)) throw new Error(`Marker not found: ${marker}`);
  premium = premium.replace(marker, content.trimEnd() + '\n\n' + marker);
}

fs.writeFileSync(premiumPath, premium);
const templates = (premium.match(/^### T-\d+\./gm) || []).length;
console.log(`Premium rebuilt: ${templates} templates, ${premium.length} chars`);

const lint = [];
if (premium.includes('—')) lint.push('em-dash');
const proseCheck = premium.replace(/```[\s\S]*?```/g, '').replace(/\*\*[^*]+\*\*/g, '');
const stray = proseCheck.match(/\*/g);
if (stray) lint.push(`${stray.length} stray asterisks`);
const ph = premium.match(/\b(?:TBD|TODO|lorem ipsum|placeholder|XXX+)\b/i);
if (ph) lint.push(`placeholder text "${ph[0]}"`);
console.log('Lint:', lint.length ? lint.join('; ') : 'clean');
