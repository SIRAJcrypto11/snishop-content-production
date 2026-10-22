const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const premiumPath = path.join(ROOT, 'drafts', '150-prompt-umkm-premium.md');

const md = fs.readFileSync(premiumPath, 'utf8');

const sections = {
  6: `
## Contoh Output AI untuk Bab 6

Berikut contoh nyata pemakaian prompt riset pasar dengan ChatGPT dan Gemini.

### P-001. Memetakan kompetitor dalam tiga lapis

**Input yang dipakai:**
Produk: roti manis dan roti tawar dari toko roti kecil, harga jual roti tawar Rp 15.000, dikirim dari Bandung, penjualan utama lewat WhatsApp dan toko offline.

**Output ChatGPT:**
\`\`\`
Peta kompetitor tiga lapis untuk toko roti Anda:

LAPIS SATU, PESAING LANGSUNG (menjual roti serupa ke pembeli yang sama)
1. Roti buatan sendiri rumahan tetangga sekitar. Harga Rp 12.000 sampai 15.000.
2. Toko roti kecil sepihak, tiga gerai. Harga Rp 16.000 sampai 18.000.
3. Agen roti merek besar yang diantar harian ke warung. Harga Rp 14.000.
Kekuatan mereka: volume besar, harga stabil, dikenal dulu.
Celah yang biasa diabaikan: tidak melayani pesanan rasa khusus, kemasan tidak diberi nama pembeli, tidak ada jadwal kirim tetap mingguan.

LAPIS DUA, PESAING TIDAK LANGSUNG (menyelesaikan kebutuhan sarapan dengan cara lain)
1. Bubur ayam dan nasi ukel keliling. Harga Rp 10.000.
2. Kue tradisional pasar. Harga Rp 1.000 sampai 5.000 per biji.
3. Martabak dan terang bulan malam hari. Harga Rp 25.000 ke atas.
Celah: mereka tidak bisa masuk langganan mingguan untuk kebutuhan roti tawar harian keluarga.

LAPIS TIGA, ANCAMAN PENDATANG 12 BULAN
1. Aplikasi belanja daring yang mulai mengantar roti merek nasional dalam hitungan jam.
2. Franchise roti murah yang membuka cabang baru tiap 3 bulan di Bandung.
3. Bisnis roti frozen yang dipasarkan lewat media sosial, dipanggang sendiri di rumah pembeli.

CARA MEMANFAATKAN CELAH
Jadikan jadwal kirim tetap (misalnya Senin dan Kamis jam 6 pagi) sebagai keunggulan yang tidak dimiliki lapis satu. Tawarkan langganan bulanan roti tawar dengan harga terkunci, sesuatu yang rumah tetangga dan agen merek besar tidak punya alat untuk melayani.
\`\`\`

**Output Gemini:**
\`\`\`
Tiga lapis kompetitor toko roti kecil Anda:

Langsung: roti rumahan tetangga, toko roti tiga gerai, agen roti merek besar. Mereka menang di volume dan harga, lemah di fleksibilitas pesanan dan jadwal kirim.
Tidak langsung: bubur keliling, kue pasar, martabak. Mereka rebutan sarapan, tetapi tidak menyentuh kebutuhan roti tawar harian.
Pendatang: roti frozen media sosial, franchise murah, pengiriman cepat dari aplikasi belanja.

Fokus taktik: jadwal kirim tetap dan langganan bulanan. Itu celah yang masih terbuka di lapis pertama Anda.
\`\`\`

**Perbandingan:** ChatGPT menguraikan tiap lapis dengan detail harga dan kelemahan yang bisa ditindak. Gemini memadatkan jadi satu halaman yang cocok untuk memutuskan cepat. Gunakan ChatGPT untuk riset pertama kali, Gemini untuk pembaruan tiap kuartal.

---

### P-002. Membedah penawaran kompetitor dari data halaman penjualannya

**Input yang dipakai:**
Teks halaman penjualan kompetitor laundry: "Laundry paling cepat di Yogyakarta! Cuci 6 jam selesai. Kiloan mulai 6 ribu. Gratis antar. Dijamin wangi. Order sekarang sebelum kuota harian penuh!"

**Output ChatGPT:**
\`\`\`
Bedahan enam bagian halaman penjualan kompetitor:

1. JANJI UTAMA: "paling cepat, selesai 6 jam". Kuat untuk orang terburu-buru, tetapi menutup mayoritas pelanggan yang peduli kebersihan lebih dari kecepatan.

2. ALASAN PERCAYA: tidak ada. Klaim 6 jam tidak dijelaskan bagaimana caranya. Ini bagian terlemahnya.

3. BUKTI YANG DIPAKAI: tidak ada foto hasil, tidak ada ulasan, tidak ada angka jumlah pelanggan. Hanya klaim.

4. PENANGANAN KEBERATAN: tidak ada. Tidak dijawab soal risiko pakaian rusak dengan kecepatan ekstrem, tidak dijawab soal pakaian putih dengan cuci terburu-buru.

5. DESAKAN: "order sekarang sebelum kuota penuh". Kuat, penciptaan urgensi yang benar karena kuota memang terbatas oleh kapasitas mesin.

6. PENAWARAN: harga mulai 6 ribu, gratis antar. Harga rendah menjadi bendera utama, berisiko melatih pasar memilih berdasarkan harga saja.

LIMA KEBERATAN PEMBELI YANG BELUM DIJAWAB:
1. Pakaian mahal saya aman tidak dicampur dengan cucian lain?
2. Kalau ada yang rusak atau hilang, ganti rugi bagaimana?
3. Wangi itu parfum masking atau benar-benar bersih?
4. 6 jam itu proses apa yang dipersingkat, pembilasan atau pengeringan?
5. Gratis antar sampai area mana dan minimal berapa kilo?

CARA ANDA MEMANFAATKANNYA: buka konten yang menjawab lima keberatan itu satu per satu. Setiap keberatan adalah satu konten edukasi yang membuat kompetitor terlihat murah tetapi tidak menjelaskan.
\`\`\`

**Output Gemini:**
\`\`\`
Analisis halaman penjualan laundry kompetitor:

Janji utama: tercepat, 6 jam. Alasan percaya: kosong. Bukti: tidak ada. Penanganan keberatan: tidak ada. Desakan: kuota harian, ini bagian terkuatnya. Penawaran: harga murah plus gratis antar.

Lima pertanyaan pembeli yang tidak dijawab: keamanan cucian mahal, jaminan kerusakan, sumber wanginya, proses yang dipersingkat, dan cakupan antar gratis.

Manfaatkan celahnya: konten edukasi yang menjawab lima keberatan itu, satu keberatan satu konten.
\`\`\`

**Perbandingan:** ChatGPT memberi pembacaan enam bagian lengkap plus lima keberatan yang siap jadi kalender konten. Gemini merangkum dengan cepat untuk keputusan hari itu. Untuk bedah kompetitor, selalu pilih versi detail lalu ringkas sendiri.

---

`,
  7: `
## Contoh Output AI untuk Bab 7

### P-016. Mengurutkan ide produk dengan skor yang bisa dipertahankan

**Input yang dipakai:**
Bisnis: toko roti. Lima ide produk: roti isi cokelat premium, roti rendah gula untuk diabetik, roti bakar keju pedas, langganan roti tawar mingguan, kelas baking mini untuk ibu rumah tangga.

**Output ChatGPT:**
\`\`\`
Skor 5 ide produk dengan 4 kriteria, masing-masing 1 sampai 5:

1. ROTI ISI COKELAT PREMIUM
Permintaan pasar: 4. Keuntungan: 4. Kemudahan produksi: 3. Cocok dengan kemampuan saat ini: 4. Total 15. Catatan: pasar roti isi ramai, tetapi persaingan paling ketat. Butuh riset harga bahan cokelat premium dulu.

2. ROTI RENDAH GULA UNTUK DIABETIK
Permintaan: 3. Keuntungan: 4. Kemudahan produksi: 2. Cocok dengan kemampuan: 2. Total 11. Catatan: pasar ada tetapi menuntut kehati-hatian klaim kesehatan. Perlu konsultasi ahli gizi, jangan asal klaim.

3. ROTI BAKAR KEJU PEDAS
Permintaan: 4. Keuntungan: 3. Kemudahan produksi: 4. Cocok dengan kemampuan: 5. Total 16. Catatan: paling cepat diluncurkan, bahan sudah tersedia, cocok jadi produk uji pasar dengan keuntungan cepat.

4. LANGGANAN ROTI TAWAR MINGGUAN
Permintaan: 5. Keuntungan: 4. Kemudahan produksi: 5. Cocok dengan kemampuan: 4. Total 18. Catatan: skor tertinggi. Langganan mengubah pendapatan harian yang naik turun menjadi pendapatan terjadwal, dan produksi tetap sama. Mulai dengan 20 pelanggan tetap.

5. KELAS BAKING MINI
Permintaan: 2. Keuntungan: 3. Kemudahan produksi: 2. Cocok dengan kemampuan: 3. Total 10. Catatan: menarik untuk membangun komunitas tetapi menyita waktu produksi. Tunda 6 bulan.

URUTAN EKSEKUSI: langganan roti tawar lebih dulu (18), roti bakar keju pedas (16), roti isi cokelat premium (15), roti rendah gula (11), kelas baking (10).
\`\`\`

**Output Gemini:**
\`\`\`
Peringkat ide produk toko roti:

1. Langganan roti tawar mingguan: 18 dari 20. Pendapatan terjadwal, produksi tidak berubah.
2. Roti bakar keju pedas: 16. Tercepat diluncurkan dengan bahan yang sudah ada.
3. Roti isi cokelat premium: 15. Pasar ramai, persaingan juga.
4. Roti rendah gula: 11. Menarik tetapi menuntut kehati-hatian klaim kesehatan.
5. Kelas baking mini: 10. Bagus untuk komunitas, buruk untuk jadwal produksi.

Mulai dari langganan, gunakan roti bakar sebagai produk pengantar baru di media sosial.
\`\`\`

**Perbandingan:** ChatGPT menunjukkan cara berpikir dengan kriteria dan catatan risiko tiap ide. Gemini memberi peringkat final yang siap dipakai. Untuk keputusan produk, baca catatan risiko ChatGPT, lalu ambil urutannya.

---

### P-017. Menyusun spesifikasi produk yang bisa dipegang tukang atau vendor

**Input yang dipakai:**
Produk: katering box untuk rapat kantor, vendor kemasan kotak, spesifikasi keinginan: muat nasi dan lauk terpisah, tahan minyak, bisa dicetak logo, harga kemasan target di bawah Rp 3.500 per box.

**Output ChatGPT:**
\`\`\`
Spesifikasi kemasan katering box untuk dikirim ke vendor:

UKURAN DAN KONSTRUKSI
Dimensi dalam: 20 x 14 x 4,5 cm, dibagi dua kompartemen, karbohidrat sekitar 60 persen luas, lauk 40 persen. Sekat kertas keras bukan plastik, agar kompartemen tidak roboh saat ditumpuk.

BAHAN
Kertas food grade berlapis PE agar tahan minyak hingga 4 jam. Ketebalan minimum 350 gsm. Bagian dasar perlu lapisan ganda karena menahan kuah.

PENUTUP
Tutup tekan dengan bibit bertingkat, tutupnya tidak licin saat kotak berisi hangat. Boleh tanpa segel, tetapi harus bisa ditempel sticker pengaman ukuran 4 x 2 cm.

PENCETAKAN
Logo satu warna, cetak offset di permukaan luar tutup dan sisi panjang. Warna dasar kertas kraft atau putih, tunggu sampel keduanya. Jangan full color untuk menahan harga.

TARGET HARGA
Harga per box di bawah Rp 3.500 pada jumlah pesanan 1.000 box per bulan. Minta penawaran bertingkat: 500, 1.000, dan 2.000 box.

YANG HARUS DIMINTA DARI VENDOR
1. Sampel fisik dengan konstruksi asli, bukan mockup gambar.
2. Hasil uji tahan minyak dengan nasi goreng hangat selama 3 jam.
3. Harga sudah termasuk cetak dan plat.
4. Toleransi keterlambatan produksi tertulis di PO.
\`\`\`

**Output Gemini:**
\`\`\`
Spesifikasi kemasan katering box untuk vendor:

Bentuk: 20 x 14 x 4,5 cm, dua kompartemen dengan sekat kertas keras. Bahan: kertas food grade lapis PE, minimum 350 gsm, dasar berlapis ganda. Tutup tekan bibit bertingkat dengan tempat sticker pengaman. Cetak logo satu warna di tutup dan sisi panjang. Target: di bawah Rp 3.500 per box pada pesanan 1.000 box per bulan.

Minta ke vendor: sampel fisik asli, uji tahan minyak 3 jam, harga termasuk cetak, dan klausul keterlambatan di PO.
\`\`\`

**Perbandingan:** ChatGPT menyusun spesifikasi yang bisa langsung jadi lampiran pesanan pembelian. Gemini memberi ringkasan yang enak dikirim lewat WhatsApp ke vendor. Kirim versi lengkap, sampaikan versi pendek saat negosiasi awal.

---

`,
  8: `
## Contoh Output AI untuk Bab 8

### P-031. Menghitung titik impas sebelum menambah biaya iklan

**Input yang dipakai:**
Bisnis: laundry kiloan. Harga jual rata rata Rp 7.000 per kilo, biaya variabel per kilo Rp 3.200 (air, listrik, deterjen, tenaga harian), biaya tetap bulanan Rp 3.500.000 (sewa, cicilan mesin, gaji tetap). Rencana iklan Rp 500.000 per bulan.

**Output ChatGPT:**
\`\`\`
Perhitungan titik impas laundry:

KONTRIBUSI PER KILO
Harga jual Rp 7.000 dikurangi biaya variabel Rp 3.200 = kontribusi Rp 3.800 per kilo.

TITIK IMPAS TANPA IKLAN
Biaya tetap Rp 3.500.000 dibagi kontribusi Rp 3.800 = 921 kilo per bulan, sekitar 31 kilo per hari.

TITIK IMPAS DENGAN IKLAN Rp 500.000
(Rp 3.500.000 + Rp 500.000) dibagi Rp 3.800 = 1.053 kilo per bulan, sekitar 35 kilo per hari.

ARTINYA
Iklan Rp 500.000 harus mendatangkan tambahan 132 kilo per bulan (sekitar 4 sampai 5 kilo per hari) supaya tidak merugikan. Jika harga per kilo di iklan rata rata pelanggan baru 5 kilo, artinya butuh sekitar 27 pembeli baru per bulan dari iklan.

BATAS AMAN BIAYA IKLAN
Dengan kontribusi Rp 3.800 per kilo dan asumsi satu pelanggan baru rata rata 5 kilo per bulan selama minimal 3 bulan, nilai pelanggan baru sekitar Rp 57.000 kontribusi. Maka biaya untuk mendapatkan satu pelanggan baru yang masih sehat adalah maksimal Rp 30.000 sampai Rp 40.000, karena sisa kontribusi menutup biaya tetap.

SIMPULAN
Iklan Rp 500.000 aman jika mendatangkan minimal 15 sampai 20 pelanggan baru yang jadi langganan. Jika uji coba 1 bulan hanya menghasilkan 10 pelanggan baru, turunkan anggaran atau ubah sasaran, jangan tambah anggaran.
\`\`\`

**Output Gemini:**
\`\`\`
Titik impas laundry dengan iklan:

Kontribusi per kilo: Rp 3.800. Impas tanpa iklan: 921 kilo per bulan (31 kilo per hari). Impas dengan iklan Rp 500.000: 1.053 kilo per bulan (35 kilo per hari).

Iklan itu harus membawa minimal 132 kilo tambahan per bulan, sekitar 27 pelanggan baru rata rata 5 kilo. Biaya per pelanggan baru yang masih sehat: maksimal Rp 40.000.

Kalau uji satu bulan hanya menghasilkan 10 pelanggan baru, ubah iklannya, jangan tambah anggarannya.
\`\`\`

**Perbandingan:** ChatGPT menghitung langkah demi langkah dengan batas aman biaya per pelanggan. Gemini menarik kesimpulan yang sama dalam seperempat panjangnya. Angka keduanya konsisten karena inputnya sama, bukti bahwa prompt ini stabil.

---

### P-032. Menentukan harga jual dari nilai, bukan dari biaya

**Input yang dipakai:**
Produk: kotak keripik balado isi 10 untuk hadiah, biaya bahan plus kemasan Rp 22.000, harga pasaran keripik biasa Rp 10.000 sampai 15.000 per kotak, target pembeli: orang yang membawa oleh oleh dari Bandung.

**Output ChatGPT:**
\`\`\`
Penetapan harga berbasis nilai untuk keripik balado hadiah:

NILAI YANG DIBAWA PEMBELI
Pembeli tidak membeli keripik, ia membeli perasaan aman saat memberi oleh oleh: kemasan yang tidak memalukan, rasa yang tidak ditertawakan, dan cerita singkat "ini buatan Bandung". Produk biasa di kantong plastik tidak bisa membawa nilai itu.

TIGA SKENARIO HARGA

Skenario Rp 35.000: masuk kantong oleh oleh murah. Pembeli yang cocok: yang membeli banyak untuk dibagikan ke banyak orang. Bukti yang harus disiapkan: kemasan rapi dan tanggal produksi. Risiko: terseret perbandingan dengan keripik kemasan plastik yang mirip bentuknya.

Skenario Rp 49.000: masuk zona hadiah tengah, paling banyak margin keputusan terjadi di sini. Pembeli yang cocok: orang yang memberi ke atasan atau mertua dan ingin terlihat berpikir. Bukti: kotak berkualitas, kartu ucapan yang bisa ditulis tangan, cerita produksi di kemasan. Risiko utama: penjual lain meniru kemasan dan menurunkan harga.

Skenario Rp 75.000: zona premium. Pembeli: perusahaan yang membeli puluhan kotak untuk souvenir acara. Bukti: custom logo, invoice resmi, kemampuan kirim banyak. Risiko: terlalu lambat masuk karena butuh kanal korporat.

REKOMENDASI
Dua harga sekaligus: Rp 49.000 untuk pembeli eceran di media sosial dan toko, Rp 65.000 sampai Rp 75.000 untuk paket korporat custom logo. Jangan ikut perang harga Rp 10.000 sampai 15.000, di sana Anda kalah oleh produsen yang menggoreng 500 kilo sehari.

Yang membuat harga Rp 49.000 dibenarkan: kemasan, cerita, dan kepastian rasa. Bila salah satu hilang, harga itu goyah.
\`\`\`

**Output Gemini:**
\`\`\`
Harga keripik balado hadiah berbasis nilai:

Pembeli hadiah membeli kepastian: kemasan yang layak, rasa yang aman, cerita Bandung. Tiga opsi: Rp 35.000 untuk pembeli volume, Rp 49.000 untuk hadiah tengah dengan margin terbaik, Rp 75.000 untuk korporat.

Rekomendasi: Rp 49.000 eceran plus paket korporat Rp 65.000 ke atas dengan custom logo. Hindari perang harga kemasan plastik.

Harga tengah bertahan selama tiga pilar jalan: kemasan, cerita, kepastian rasa.
\`\`\`

**Perbandingan:** ChatGPT membedah psikologi pembeli hadiah dan risiko tiap skenario. Gemini merangkum keputusan dengan tegas. Keduanya setuju pada arah yang sama: hindari perang harga, mainkan zona hadiah.

---

`,
  9: `
## Contoh Output AI untuk Bab 9

### P-046. Membuat 12 sudut pandang iklan sebelum menulis satu kata pun

**Input yang dipakai:**
Produk: jasa antar bunga online di Bandung, target pembeli: pria 25 sampai 40 tahun yang ingin menyenangkan orang tersayang dari jauh.

**Output ChatGPT:**
\`\`\`
12 sudut pandang iklan antar bunga online:

1. PANIK WAKTU: "Lupa ulang tahun, masih ada 4 jam sebelum dia pulang kerja."
2. JARAK: "Kamu di Balikpapan, dia di Bandung. Bunga tetap bisa tiba pagi ini."
3. MALU BELANJA: "Tidak tahu bunga apa yang cocok? Pilih cerita, kami yang pilihkan bunganya."
4. KEAMANAN EKSPRESI: "Bunga yang datang saat dia sakit berkata lebih banyak daripada chat get well soon."
5. BUKTI: "1.240 pengiriman tahun lalu, 97 persen tepat jam yang dijanjikan."
6. TAKUT SALAH: "Salah kartu ucapan itu memalukan. Ini template ucapan yang aman untuk tiap hubungan."
7. HEMAT CERDIK: "Satu buket dari Bandung lebih diingat daripada tiga gift voucher."
8. BANDINGKAN: "Voucher: dia harus mikir. Bunga: dia langsung senyum di depan rekan kerjanya."
9. CERITA PELANGGAN: "Budi kirim bunga ke istrinya tiap tanggal 17, tiga tahun tanpa putus. Ini kenapa."
10. TAKUT DITOLAK: "Kartu tanpa nama tersedia. Pesannya sampai, nama Anda tetap rahasia."
11. KESEMPATAN TERLEWAT: "Hari ini ada slot pengiriman. Besok pagi, slot pagi biasanya penuh."
12. PROSES: "Setiap buket difoto sebelum dikirim. Anda melihat persis bunga yang tiba."

CARA MEMAKAI: pilih 3 sudut yang paling jujur untuk bisnis Anda, uji satu per satu di iklan, bukan semuanya sekaligus. Sudut 5 dan 12 biasanya paling kuat untuk bisnis baru karena mereka menjawab keraguan paling dasar.
\`\`\`

**Output Gemini:**
\`\`\`
Dua belas sudut iklan antar bunga: panik waktu, jarak jauh, takut salah pilih bunga, ekspresi saat orang sakit, bukti ketepatan pengiriman, takut salah kata di kartu, hemat cerdik, perbandingan dengan voucher, cerita pelanggan, takut ditolak hingga kartu anonim, kekhawatiran slot penuh, dan transparansi proses dengan foto sebelum kirim.

Mulai dari sudut bukti dan transparansi, keduanya paling cepat membangun kepercayaan untuk jasa baru.
\`\`\`

**Perbandingan:** ChatGPT menuliskan tiap sudut sudah dalam bentuk kalimat iklan siap uji. Gemini memberi saran prioritas yang berbeda dari ChatGPT, dan perbedaan itu berguna: bandingkan keduanya lalu uji sendiri.

---

### P-047. Menulis judul halaman produk yang menahan pembaca

**Input yang dipakai:**
Produk: brownies kukus lumer, harga Rp 65.000 per loyang, dijual lewat halaman produk WhatsApp catalog dan Shopee, target: ibu muda yang memesan snack rapat arisan.

**Output ChatGPT:**
\`\`\`
Delapan judul halaman produk brownies kukus untuk pesanan arisan:

1. "Brownies Kukus yang Tidak Remuk Sepanjang Perjalanan ke Rumah Tamu Anda"
2. "Satu Loyang Cukup untuk 12 Orang Arisan, Sisa Satu Potong Itu Sengaja"
3. "Brownies yang Dipotong Jam 9 Masih Lumber Jam 2"
4. "Pesanan Rapat RT, Arisan Ibu, dan Ulang Tahun Anak, Satu Loyang Sama"
5. "Dikirim Hari Ini, Dipotong Besok, Masih Lembut"
6. "Brownies Kukus untuk Orang yang Malas Rebutan Potong Terakhir, Jadi Kita Kasih Bonus 4 Potong"
7. "Takaran Gula Dikurangi 20 Persen, Manisnya Tetap, Mualnya Hilang"
8. "Loyang Pertama Tiba Jam 10, Anda Masih Sempat Simpan di Kulkas Sebelum Tamu Datang"

PENJELASAN POLA: judul 1 dan 3 menjual kepastian fisik, judul 2 dan 6 menjual angka yang mengundang senyum, judul 5 dan 8 menjual ketenangan logistik, judul 7 menjual perubahan kecil yang relevan untuk ibu arisan. Uji 2 judul saja per minggu di status WhatsApp, pilih yang dapat pesan lebih banyak.
\`\`\`

**Output Gemini:**
\`\`\`
Judul halaman brownies kukus untuk pesanan arisan:

Kejuaraan fisik: "Dipotong jam 9, masih lumber jam 2" dan "Tidak remuk sepanjang perjalanan". Kejuaraan angka: "Satu loyang cukup untuk 12 orang arisan". Kejuaraan logistik: "Dikirim hari ini, dipotong besok, masih lembut".

Untuk ibu arisan, judul logistik dan takaran gula biasanya menang karena itu dua kekhawatiran nyata mereka.
\`\`\`

**Perbandingan:** ChatGPT menyediakan 8 judul dengan pola berbeda yang bisa diuji bergilir. Gemini langsung memberi rekomendasi sasaran audiens. Gunakan pendekatan Gemini untuk memilih dua judul pertama yang diuji.

---

`,
  10: `
## Contoh Output AI untuk Bab 10

### P-061. Menentukan tiga pilar konten yang menjual

**Input yang dipakai:**
Bisnis: kedai kopi kecil di Yogyakarta, produk: kopi susu gula aren Rp 18.000, target: pekerja muda dan mahasiswa akhir yang butuh tempat kerja nyaman.

**Output ChatGPT:**
\`\`\`
Tiga pilar konten kedai kopi Anda:

PILAR 1: TEMPAT KERJA KEDUA (40 persen konten)
Karena target Anda datang untuk kerja, konten pilar ini menjual kenyamanan: colokan di tiap meja, kecepatan wifi, meja mana yang paling tenang jam berapa, apakah ramai saat ujian.
Contoh ide: "Peta colokan kedai kami", "Jam paling kosong untuk deadline", "Meja pojok vs meja jendela, mana yang cocok untuk rapat online".
Mengapa menjual: orang yang datang untuk kerja adalah pelanggan 2 jam, bukan 10 menit, dan mereka pesan ulang.

PILAR 2: RASA YANG JUJUR (35 persen konten)
Konten seputar biji, takaran, dan kejujuran rasa: kenapa gula aren, bedanya susu segar dan susu UHT, apa yang terjadi kalau biji stok lama.
Contoh ide: "Coba pesan kurang manis dulu, baru nilai", "Kenapa espresso kami tidak pernah lebih dari 30 detik seduh", "Hari ini biji baru datang, rasanya begini".
Mengapa menjual: kejujuran rasa membangun kepercayaan yang membuat orang berani menawarkan kedai ini ke temannya.

PILAR 3: MUKA ORANG NYATA (25 persen konten)
Barista, pelanggan langganan, momen khas kedai. Tidak ada yang diwajibkan wajahnya, tangan dan punggung boleh.
Contoh ide: "Barista kami menutup toko dengan ritual ini", "Pelanggan yang duduk di meja sama tiap Selasa", "Rekam jejak lagu di playlist kedai".
Mengapa menjual: kedai adalah tempat, tetapi yang membuat orang kembali adalah rasa familiar.

JANGAN: pilar promo. Promo menempel di pilar mana pun sebagai penutup, bukan berdiri sendiri. Kedai yang satu dari tiga pilarnya promo akan terasa seperti gangguan, bukan tempat.
\`\`\`

**Output Gemini:**
\`\`\`
Tiga pilar konten kedai kopi:

1. Tempat kerja kedua, 40 persen: colokan, wifi, meja, jam sepi. Pelanggan kerja adalah pelanggan lama.
2. Rasa jujur, 35 persen: biji, takaran, kejujuran menu. Kejujuran memancing rekomendasi teman.
3. Muka orang nyata, 25 persen: barista dan kebiasaan pelanggan yang menarik. Familiaritas yang membuat orang kembali.

Promo bukan pilar, ia menempel di akhir konten pilar mana pun.
\`\`\`

**Perbandingan:** ChatGPT menyertakan contoh ide per pilar dan alasan komersialnya. Gemini merangkum dengan porsi yang siap dipakai langsung. Ambil contoh ide ChatGPT untuk mengisi kalender bulan pertama.

---

### P-062. Membuat kalender konten 30 hari yang realistis

**Input yang dipakai:**
Bisnis: toko roti kecil, platform: Instagram plus WhatsApp status, frekuensi: 3 kali per minggu di Instagram dan 5 kali per minggu di status, goal bulan ini: 20 pelanggan langganan roti tawar baru.

**Output ChatGPT:**
\`\`\`
Kalender 30 hari toko roti, target 20 langganan baru:

MINGGU 1, TEMA: KENALKAN JADWAL KIRIM
IG Senin: carousel perkenalan jadwal kirim Senin Kamis jam 6 pagi (pilar kepastian). Status harian: foto adonan pagi, foto roti keluar oven jam 5, foto pesanan hari itu tertata, 1 tips simpan roti.
IG Rabu: reel proses dari adonan sampai kotak tertutup, 30 detik.
IG Jumat: posting jawaban 3 pertanyaan paling sering tentang langganan (harga, area, cara berhenti).

MINGGU 2, TEMA: BUKTI PELANGGAN
IG Senin: posting sapaan pelanggan langganan pertama, ceritakan kebiasaan pesanannya.
IG Rabu: reel 15 detik momen pengantaran jam 6 pagi di satu jalan yang sama.
IG Jumat: carousel perbandingan belanja mingguan di toko versus langganan, dengan hitungan uang jujur.
Status harian: tambahkan 1 status testimoni pihak ketiga per 2 hari.

MINGGU 3, TEMA: JAWAB KERAGUAN
IG Senin: posting "kenapa kami tidak kasih diskon langganan" menjelaskan harga terkunci itu nilai stabil.
IG Rabu: reel demo bagaimana roti tawar tetap lembut hari keempat dengan cara simpan yang benar.
IG Jumat: posting daftar area kirim dengan peta sederhana.
Status harian: tambah 1 status hitung-hitungan berapa roti yang keluarga habiskan sebulan.

MINGGU 4, TEMA: PENUTUPAN LEMBUT
IG Senin: posting kuota langganan bulan depan, maksimal 30 orang, jelaskan alasannya (kapasitas oven).
IG Rabu: reel rekap satu bulan berjalan, angka jujur, foto pelanggan yang diizinkan.
IG Jumat: posting terakhir bulan, ajakan paling langsung: "Kirim chat kata langganan, kami urus sisanya."
Status harian: setiap status akhiri dengan satu kalimat kuota langganan.

PEMANFAATAN STATUS WA: status adalah mesin kedekatan, IG adalah mesin bukti. Semua konten IG dipotong jadi status. Total kerja: 3 konten IG per minggu plus 5 status yang mayoritas potongan konten IG dan foto harian dapur.
\`\`\`

**Output Gemini:**
\`\`\`
Kalender 30 hari toko roti untuk 20 langganan baru:

Minggu 1: kenalkan jadwal kirim. Minggu 2: bukti pelanggan. Minggu 3: jawab keraguan termasuk kenapa tanpa diskon. Minggu 4: penutupan lembut dengan kuota 30 orang.

Ritme: 3 posting Instagram per minggu, 5 status WhatsApp per hari kerja yang sebagian besar potongan konten Instagram dan foto dapur. Instagram membangun bukti, WhatsApp membangun kedekatan, keduanya bermuara ke satu ajakan: langganan roti tawar.
\`\`\`

**Perbandingan:** ChatGPT memberi kalender terisi lengkap yang bisa langsung dipindah ke spreadsheet. Gemini menegaskan pembagian peran dua platform. Ikuti kalender ChatGPT, gunakan ringkasan Gemini untuk menjelaskan strategi ke orang lain.

---

`,
  11: `
## Contoh Output AI untuk Bab 11

### P-076. Menyusun alur percakapan dari pertanyaan sampai penutupan

**Input yang dipakai:**
Produk: meja kerja kayu jati custom, harga Rp 3.500.000 sampai Rp 8.000.000, penjualan lewat WhatsApp, keberatan umum: takut ketemu vendor bodong dan takut bahan bukan jati asli.

**Output ChatGPT:**
\`\`\`
Alur percakapan WhatsApp meja jati custom:

TAHAP 1, SAPA DAN KLARIFIKASI (balas cepat)
"Siang, terima kasih sudah chat. Meja kerja jati custom ya. Biar kami usulkan yang tepat: meja dipakai untuk apa, ruangannya berapa lebar, dan kira kira kapan butuhnya?"

TAHAP 2, USULAN DUA OPSI
Setelah jawaban, tawarkan dua spesifikasi: yang pas anggaran dan yang naik satu tingkat. Orang memilih lebih mudah di antara dua opsi daripada dari nol. "Opsi A jati solid dengan laci atas, Rp 4.800.000. Opsi B sama, tanpa laci, kaki besi hollow, Rp 3.900.000."

TAHAP 3, BUKTI SEBELUM DIMINTA
Kirim sebelum ditanya: foto proses pembuatan meja terakhir, video ketebalan papan diukur jangka sorong, dan satu nomor pelanggan lama yang boleh dihubungi. Ini membunuh keberatan vendor bodong sebelum diajukan.

TAHAP 4, TRANSPARANSI BAHAN
"Setiap meja kami sertakan foto serat kayu dari papan yang akan dipakai untuk pesanan Anda sebelum dipotong. Kalau seratnya tidak Anda suka, kami ganti papan. Ini gratis."

TAHAP 5, DP DAN JADWAL
"Untuk kunci jadwal pengerjaan, DP 40 persen. Sisa dibayar setelah foto hasil jadi dan Anda setuju, sebelum kirim. Pengerjaan meja ukuran standar 10 sampai 14 hari."

TAHAP 6, PENUTUPAN YANG TIDAK MEMAKSA
"Kalau bulan ini belum pas, tidak apa. Meja jati tidak basi. Saya kirim katalog dulu, kapan pun siap, chat lagi saja."

KESALAHAN YANG HINDARI: menjawab "harga bisa chat" tanpa pertanyaan balik, mengirim semua katalog sekaligus, menawarkan diskon sebelum diminta, dan memaksa keputusan di hari yang sama untuk produk jangka panjang.
\`\`\`

**Output Gemini:**
\`\`\`
Alur WhatsApp meja jati custom: sapa dengan tiga pertanyaan pemakaian, tawarkan dua opsi spesifikasi, kirim bukti sebelum diminta (foto proses, video ukur papan, referensi pelanggan), tawarkan foto serat kayu sebelum potong dengan jaminan ganti gratis, jelaskan DP 40 persen dan sisa setelah persetujuan foto hasil, tutup dengan izin pergi tanpa menekan.

Hindari: harga tanpa pertanyaan balik, katalog serba dikirim, diskon prematur, dan penekanan keputusan harian.
\`\`\`

**Perbandingan:** ChatGPT memberikan kata per kata yang bisa dipakai admin hari pertama. Gemini merangkum alur untuk dicetak dan ditempel di meja. Keduanya sepakat bukti dikirim sebelum diminta, ini pembeda terbesar dari vendor biasa.

---

### P-077. Menindaklanjuti pembeli yang menghilang setelah tanya harga

**Input yang dipakai:**
Bisnis: katering sehat mingguan, pelanggan prospek bertanya harga Senin, sudah dibalas detail, lalu tidak membalas 4 hari.

**Output ChatGPT:**
\`\`\`
Tiga pesan tindak lanjut untuk prospek yang menghilang:

PESAN 1, HARI KE-3: NILAI TAMBAHAN TANPA JUALAN
"Siang Bu Rani, semoga menu minggu ini berjalan lancar. Kemarin kami coba resep salmon baru untuk menu minggu depan, hasilnya enak, jadi masuk menu Selasa. Kalau mau lihat menu minggu depan penuh, bilang saja ya, saya kirim dulu sebelum tayang."

PESAN 2, HARI KE-7: PERTANYAAN YANG MEMBANTU
"Mbak Rani, boleh saya tanya sedikit? Yang biasa jadi pertimbangan orang sebelum langganan katering itu biasanya soal pengiriman atau soal menu bosan. Kalau Bo sekalian ada yang jadi pertimbangan, boleh saya tahu? Biar saya jawab jujur kalau bisa kami penuhi, dan bilang terus terang kalau tidak cocok."

PESAN 3, HARI KE-12: PENUTUPAN DENGAN PINTU TERBUKA
"Mbak Rani, saya tutup dulu percakapan ini ya supaya tidak mengganggu. Kalau nanti minggu depan atau bulan depan ingin mencoba satu minggu dulu tanpa langganan, satu minggu saja kami buka untuk uji. Semangat kerjanya!"

ATURAN JEDA: pesan 1 dan 2 dipisah minimal 4 hari. Jangan pernah mengirim ketiganya dalam seminggu. Bila pesan 2 dijawab, hentikan urutan, lanjutkan percakapan normal.

HINDARI: membuka dengan "masih tertarik tidak?" (terasa menagih), memberi diskon sebab-sebabnya (melatih prospek menunggu untuk dapat diskon), dan mengirim pesan panjang (orang sibuk tidak membaca).
\`\`\`

**Output Gemini:**
\`\`\`
Urutan tindak lanjut prospek katering yang menghilang:

Hari ke-3: kabar menu baru tanpa ajakan, tawarkan menu minggu depan lebih dulu.
Hari ke-7: satu pertanyaan yang membantu mengungkap keraguan sebenarnya, janji jawaban jujur.
Hari ke-12: tutup sopan dengan pintu terbuka, tawarkan uji satu minggu tanpa langganan.

Jeda antar pesan minimal 4 hari, hentikan urutan begitu prospek membalas, dan jangan pernah membuka dengan menagih keputusan.
\`\`\`

**Perbandingan:** ChatGPT menuliskan ketiga pesan utuh dengan nama dan situasi. Gemini menegaskan aturan jeda dan penghentian urutan yang sering dilanggar. Gunakan naskah ChatGPT, patuhi disiplin Gemini.

---

`,
  12: `
## Contoh Output AI untuk Bab 12

### P-091. Menyusun nada bicara layanan yang konsisten

**Input yang dipakai:**
Bisnis: laundry kiloan premium, tim: pemilik plus 1 karyawan, masalah: balasan admin berubah ubah sesuai suasana hati, pelanggan bingung kenapa kadang ramah kadang kaku.

**Output ChatGPT:**
\`\`\`
Pedoman nada bicara laundry premium:

TIGA KALIMAT FONDASI
1. Kami bicara seperti tetangga yang teliti: hangat, tetapi tepat angka dan janji.
2. Kami tidak pernah menjanjikan yang tidak bisa kami pegang, termasuk kata "pasti".
3. Kami menyebut nama pelanggan di pesan pertama dan terakhir.

CONTOH KONSISTEN (INI YANG DITIRU)
Pertanyaan jam tutup: "Buka sampai jam 9 malam ya, Ka Sinta. Pesanan terakhir sebaiknya masuk jam 8 biar sempat kami proses malam ini."
Konfirmasi selesai: "Cucian Ibu Sinta sudah selesai, 4,2 kilo, sudah kami lipat dan dikemas. Bisa diambil kapan saja sampai jam 9."
Tunda antar: "Maaf, kurir kami tertahan hujan di rute sebelumnya. Pesanan Anda kami antar paling lambat jam 6 sore. Kalau jam itu meleset lebih dari 30 menit, pesanan hari ini gratis."

CONTOH YANG DILARANG
"Ya sudah nanti kami proses" (tanpa nama, tanpa informasi).
"Maaf banget banget banget kakakku tersayang" (berlebihan, terasa palsu).
"Kami tidak bertanggung jawab atas..." (kalimat penolakan kaku, ganti dengan menjelaskan batas secara manusiawi).

KATA YANG DIPAKAI: bisa, kami cek dulu, paling lambat, kami antar, terima kasih sudah menunggu.
KATA YANG DIHINDARI: mungkin, semoga, insya Allah untuk janji layanan, maafkan kami yang tidak profesional (berlebihan).

KARENA TIM HANYA 2 ORANG: tempel pedoman ini di dinding belakang kasir. Setiap bulan, baca ulang 5 balasan terakhir masing-masing orang dan bandingkan dengan pedoman.
\`\`\`

**Output Gemini:**
\`\`\`
Pedoman nada layanan laundry premium: hangat seperti tetangga yang teliti, janji hanya yang bisa dipenuhi, nama pelanggan di buka dan tutup pesan.

Gunakan: bisa, kami cek dulu, paling lambat. Hindari: mungkin, semoga, dan pujian berlebihan yang terasa palsu.

Contoh pola: jawab pertanyaan dengan nama plus satu informasi praktis. Saat tertunda, sebut penyebab, tenggat baru, dan jaminan kompensasi yang jelas angkanya.

Tempel pedoman di tempat kerja dan bandingkan dengan 5 balasan terakhir setiap bulan.
\`\`\`

**Perbandingan:** ChatGPT mencontohkan kalimat nyata untuk empat situasi umum. Gemini menegaskan daftar kata pakai dan hindari. Gabungkan: contoh kalimat ChatGPT untuk latihan, daftar kata Gemini untuk dinding kasir.

---

### P-092. Menulis balasan komplain yang meredakan, bukan membela

**Input yang dipakai:**
Komplain: pembeli keripik balado menerima kotak yang separuh isinya remuk karena pengiriman. Pembeli marah dan sudah menulis ulasan bintang 1 di marketplace. Kebijakan bisnis: boleh ganti unit, tidak boleh refund penuh.

**Output ChatGPT:**
\`\`\`
Balasan komplain keripik remuk, tiga lapis:

LAPIS 1, BALASAN ULASAN PUBLIK (terlihat pembeli lain)
"Ibu Wulan, kami mohon maaf atas kotak yang sampai remuk. Ini tanggung jawab kami memilih kemasan yang lebih kuat untuk pengiriman luar kota, bukan salah Ibu. Tim kami sudah menghubungi lewat pesan untuk mengirim kotak pengganti. Terima kasih sudah memberi tahu, ini membuat pengiriman berikutnya lebih aman untuk semua pembeli."

LAPIS 2, PESAN PRIVAT PERTAMA (dalam 1 jam)
"Ibu Wulan, terima kasih sudah melapor. Kami sudah lihat fotonya. Kotak pengganti kami kirim hari ini juga dengan kemasan double wall, dan kami tambahkan satu kotak rasa lain sebagai permintaan maaf. Tidak perlu mengirim balik yang rusak."

LAPIS 3, TINDAK LANJUT SETELAH PENGIRIMAN
"Bu Wulan, kotak pengganti sudah diantar kurir hari ini, resi [nomor]. Mohon kabari sampainya. Kalau pengiriman ini masih ada masalah, kami kirim ulang sekali lagi dan evaluasi kurir untuk area Ibu."

ATURAN YANG DIPEGANG
1. Jangan pernah membuktikan pembeli salah di ruang publik, bahkan bila pembeli keliru. Buktikan di jalur privat dengan foto.
2. Ganti unit lebih murah daripada ulasan bintang 1 yang bertahan setahun.
3. Komplain satu jenis yang terulang dua kali wajib jadi perbaikan sistem (di sini: kemasan double wall untuk semua pengiriman luar kota), bukan sekadar kompensasi.
\`\`\`

**Output Gemini:**
\`\`\`
Tiga lapis balasan komplain keripik remuk: balasan publik yang mengakui, menyebut tanggung jawab memilih kemasan, dan menandakan tim sudah menghubungi. Pesan privat berisi ganti unit hari ini dengan kemasan lebih kuat plus satu kotak tambahan, tanpa mengembalikan barang rusak. Tindak lanjut berisi resi dan janji evaluasi kurir.

Prinsip: jangan berdebat di publik, ganti unit lebih murah dari ulasan buruk, dan komplain berulang wajib menjadi perbaikan sistem, bukan cuma kompensasi.
\`\`\`

**Perbandingan:** ChatGPT menuliskan ketiga balasan siap pakai. Gemini menegaskan tiga prinsip yang berlaku seumur hidup bisnis. Copas naskah ChatGPT setelah menyesuaikan nama dan nomor resi.

---

`,
  13: `
## Contoh Output AI untuk Bab 13

### P-106. Memisahkan uang pribadi dan uang usaha

**Input yang dipakai:**
Bisnis: warung makan kecil, masalah: uang warung dan uang rumah campur dalam satu dompet dan satu rekening, pemilik sering ambil uang warung untuk kebutuhan rumah tanpa catatan.

**Output ChatGPT:**
\`\`\`
Rencana pemisahan uang warung dan rumah:

LANGKAH 1, DUA REKENING, SATU ATURAN
Buka rekening kedua di bank yang sama (gratis biaya admin untuk beberapa jenis). Rekening A hanya menerima uang warung dan membayar belanja warung. Rekening B untuk rumah. Transfer antar rekening milik sendiri tidak kena biaya.

LANGKAH 2, TENTUKAN GAJI PEMILIK
Tetapkan angka bulanan yang wajar, misal Rp 2.500.000, dipindahkan dari A ke B pada tanggal tetap setiap bulan (misal tanggal 3). Ini bukan nyolong uang warung, ini gaji Anda yang sah. Ambil lebih dari itu hanya bila laba bulan lalu sudah terhitung dan izinkan.

LANGKAH 3, SATU DOMPET FISIK UNTUK WARUNG
Uang tunai warung tinggal di kotak kas warung. Uang rumah tidak masuk kotak itu. Ambil tunai dari warung hanya lewat mekanisme gaji pemilik: catat tanggal dan jumlahnya di buku, baru bawa pulang.

LANGKAH 4, CATAT PENGAMBILAN DARURAT
Pasti ada bulan sulit. Buat kolom "pinjaman pemilik" di buku kas. Setiap ambil di luar gaji, catat. Uang itu dianggap pinjaman yang dikembalikan ke rekening warung saat keadaan membaik. Tanpa catatan ini, laba Anda selalu terlihat lebih kecil dari kenyataan dan keputusan harga jadi bias.

LANGKAH 5, TINJAU BULANAN
Akhir bulan: hitung uang masuk warung, kurangi biaya warung, kurangi gaji pemilik, sisanya laba. Laba inilah yang dipakai untuk menabung usaha, cicilan alat, atau bonus gaji pemilik dengan kesepakatan yang tetap.

YANG TERJADI SETELAH 2 BULAN: Anda tahu berapa sebenarnya warung untung, berapa kebutuhan hidup rumah, dan apakah harga makanan di warung sudah masuk akal. Tanpa pemisahan, semua jawaban itu tebakan.
\`\`\`

**Output Gemini:**
\`\`\`
Pemisahan uang warung dan rumah: dua rekening dengan aturan satu arah, gaji pemilik tetap yang dipindah tanggal tetap, satu kotak kas tunai untuk warung, dan catatan pengambilan darurat sebagai pinjaman pemilik yang dikembalikan.

Tinjauan akhir bulan menghasilkan laba bersih yang jujur. Setelah dua bulan, Anda tahu angka untung sebenarnya dan apakah harga menu sudah tepat.
\`\`\`

**Perbandingan:** ChatGPT menyusun lima langkah dengan mekanisme yang bisa langsung dijalankan besok pagi. Gemini merangkum sistemnya. Implementasi pakai ChatGPT, pantau disiplinnya dengan ringkasan Gemini.

---

### P-107. Menyusun arus kas proyeksi 13 minggu

**Input yang dipakai:**
Bisnis: laundry kiloan, data: rata rata pemasukan mingguan Rp 4.200.000 naik stabil 3 persen per bulan, biaya mingguan tetap Rp 950.000, biaya variabel 45 persen dari pemasukan, rencana besar: beli mesin pengering kedua Rp 12.500.000 bulan ke-6.

**Output ChatGPT:**
\`\`\`
Proyeksi arus kas 13 minggu laundry:

ASUMSI
Pemasukan minggu 1 Rp 4.200.000, naik 3 persen per bulan (sekitar 0,7 persen per minggu). Biaya tetap Rp 950.000 per minggu. Biaya variabel 45 persen dari pemasukan. Saldo kas awal Rp 6.000.000.

PROYEKSI RINGKAS PER BLOK
Minggu 1-4: pemasukan total sekitar Rp 17.100.000, keluar total sekitar Rp 11.750.000, arus kas bersih plus Rp 5.350.000, saldo akhir Rp 11.350.000.
Minggu 5-9: pemasukan sekitar Rp 22.100.000, keluar sekitar Rp 15.000.000, arus kas bersih plus Rp 7.100.000, saldo akhir sekitar Rp 18.450.000.
Minggu 10-13: pemasukan sekitar Rp 22.800.000, keluar sekitar Rp 15.500.000, arus kas bersih plus Rp 7.300.000, saldo akhir sekitar Rp 25.750.000.

KEPUTUSAN MESIN
Mesin pengering kedua Rp 12.500.000 bisa dibeli tunai pada minggu ke-6 tanpa membuat saldo turun ke bawah Rp 5.000.000 (batas aman biaya darurat). Setelah pembelian, saldo tetap di atas Rp 6.000.000 dan kembali tumbuh minggu berikutnya.

TIGA PERINGATAN
1. Proyeksi ini sehat selama pemasukan tidak turun lebih dari 15 persen dalam satu minggu. Bila turun, tunda pembelian mesin, jangan pakai cicilan yang membebani biaya tetap.
2. Sisihkan Rp 500.000 per minggu ke rekening cadangan yang tidak boleh disentuh kecuali kerusakan mesin. Mesin kedua mempercepat ausnya mesin pertama.
3. Bila pemasukan naik lebih cepat dari proyeksi, jangan langsung beli mesin ketiga. Tunggu 8 minggu data konsisten.

CARA MEMAKAI: salin tabel proyeksi ke spreadsheet, isi angka aktual tiap Senin, bandingkan proyeksi dengan kenyataan. Selisih yang konsisten lebih penting daripada angkanya sendiri, selisih itu mengajarkan cara bisnis Anda bekerja.
\`\`\`

**Output Gemini:**
\`\`\`
Proyeksi 13 minggu laundry: dengan pemasukan mingguan Rp 4,2 juta yang naik 3 persen per bulan, biaya tetap Rp 950 ribu per minggu, dan biaya variabel 45 persen, saldo kas akan mencapai sekitar Rp 18 juta di minggu ke-9 dan Rp 25 juta di minggu ke-13.

Mesin pengering kedua Rp 12,5 juta aman dibeli tunai di minggu ke-6 dengan syarat saldo tidak jatuh di bawah Rp 5 juta. Sisihkan Rp 500 ribu per minggu untuk dana kerusakan mesin, dan tunda pembelian bila satu minggu pemasukan turun lebih dari 15 persen.
\`\`\`

**Perbandingan:** ChatGPT membangun proyeksi penuh dengan aturan keputusan. Gemini memadatkan keputusan utama. Masukkan angka aktual Anda ke prompt untuk hasil yang bisa langsung dipakai di rapat dengan diri sendiri.

---

`,
  14: `
## Contoh Output AI untuk Bab 14

### P-121. Menghitung titik pemesanan ulang stok

**Input yang dipakai:**
Bisnis: keripik singkong, bahan utama: singkong mentah. Pemakaian rata rata 180 kilo per minggu, waktu tunggu pemasok 5 hari, stok pengaman ingin 40 persen dari pemakaian mingguan, pemasok datang setiap Senin.

**Output ChatGPT:**
\`\`\`
Perhitungan titik pesan ulang singkong:

PEMAKAIAN HARIAN
180 kilo per minggu dibagi 7 hari = sekitar 26 kilo per hari.

KONSUMSI SELAMA WAKTU TUNGGU
5 hari pengiriman dikali 26 kilo = 130 kilo yang habis selama menunggu pemasok.

STOK PENGAMAN
40 persen dari pemakaian mingguan = 72 kilo. Ini penyangga untuk kenaikan permintaan akhir pekan atau pemasok telat sehari.

TITIK PESAN ULANG
130 kilo plus 72 kilo = 202 kilo. Aturannya sederhana: begitu stok singkong mentah menyentuh 202 kilo, pesan, jangan menunggu hari Senin datang.

STOK MAKSIMUM YANG MASUK AKAL
Pemesanan ideal per periode: sekitar 220 sampai 250 kilo agar stok tertinggi tidak melebihi 300 kilo. Di atas itu Anda menyimpan penyakit, bukan stok: singkong mentah tidak tahan lebih dari 5 sampai 7 hari.

PENYESUAIAN MUSIMAN
Bila ada hari raya dan permintaan naik, naikkan stok pengaman dari 40 persen ke 60 persen dua minggu sebelumnya, dan konfirmasi jadwal pemasok lebih awal karena semua usaha makanan menumpuk pesanan di periode yang sama.

TANDA SISTEM HARUS DIREVIEW
1. Dua kali berturut stok menyentuh nol sebelum pengiriman tiba: waktu tunggu pemasok berubah, hitung ulang.
2. Sering buang singkong busuk: stok pengaman atau volume pesanan terlalu besar.
3. Sering kehabisan Jumat Sabtu: pemakaian akhir pekan lebih tinggi dari rata rata, pecah data per hari.
\`\`\`

**Output Gemini:**
\`\`\`
Titik pesan ulang singkong: pemakaian harian 26 kilo, konsumsi selama tunggu 5 hari sekitar 130 kilo, stok pengaman 72 kilo. Titik pesan: 202 kilo. Pesanan ideal 220 sampai 250 kilo agar stok tidak melebihi 300 kilo karena singkong mentah tidak tahan lebih dari sepekan.

Naikkan stok pengaman ke 60 persen dua minggu sebelum hari raya, dan review sistem bila dua kali berturut kehabisan atau sering buang bahan busuk.
\`\`\`

**Perbandingan:** ChatGPT menghitung langkah demi langkah dengan tanda review. Gemini memberi angka final yang bisa langsung ditulis di papan gudang. Angka 202 kilo itu keputusan, bukan perasaan.

---

### P-122. Merapikan gudang atau ruang produksi kecil

**Input yang dipakai:**
Ruang produksi: garasi 3 x 4 meter untuk toko bunga, masalah: kertas bunga lima merek bercampur, pita dan aksesori tersebar, pendingin bunga segar di satu sudut, sering beli bahan yang ternyata sudah ada.

**Output ChatGPT:**
\`\`\`
Rencana penataan garasi produksi bunga:

ZONASI LIMA AREA
1. Zona bunga segar: dekat pintu, sirkulasi udara terbaik, dengan rak bertingkat terbuka. Tidak boleh diganggu gugat oleh alat.
2. Zona bahan kering: kertas dan aksesori di rak dinding dengan kotak berlabel per merek dan per warna dasar. Kertas bulat digantung, tidak ditumpuk.
3. Zona kerja: satu meja tetap untuk merangkai. Aturan meja kosong di akhir hari, proyek setengah jadi punya rak tunggu sendiri.
4. Zona packing: meja kecil dekat pintu keluar dengan perlengkapan pengiriman lengkap di satu laci.
5. Zona limbah dan daur ulang: satu karung untuk kertas bekas layak pakai, karena kertas bekas sering berguna untuk bungkus lapisan dalam.

SISTEM LABEL TIGA DETIK
Setiap kotak dan rak diberi label yang bisa dibaca dari jarak 2 meter. Aturan: kalau mencari bahan lebih dari 10 detik, label gagal.

DAFTAR STOK DINDING
Satu papan tulis kecil: nama bahan, jumlah minimal, tanggal beli terakhir. Sebelum beli, lihat papan. Ini menghentikan pembelian ganda yang Anda sebutkan.

RUTINITAS 10 MENIT
Akhir hari: meja kerja kosong, alat kembali ke tempatnya, papan stok diperbarui. Sepuluh menit ini menghemat 30 menit kebingungan besok pagi.

PRIORITAS EKSEKUSI MINGGU INI: rak kertas dan label lebih dulu (menghentikan pembelian ganda), papan stok minggu depan, zona packing setelahnya.
\`\`\`

**Output Gemini:**
\`\`\`
Penataan garasi produksi bunga: lima zona (bunga segar dekat pintu dengan sirkulasi terbaik, bahan kering di rak berlabel per merek dan warna, meja kerja yang wajib kosong tiap akhir hari, zona packing di dekat pintu keluar, dan karung kertas daur ulang).

Kunci: label terbaca dari 2 meter, papan stok di dinding untuk menghentikan pembelian ganda, dan rutinitas 10 menit penutupan setiap hari.

Mulai dari rak kertas dan label minggu ini, karena pembelian ganda adalah kebocoran uang yang paling cepat ditutup.
\`\`\`

**Perbandingan:** ChatGPT merinci lima zona dengan aturan per zona. Gemini menunjuk prioritas eksekusi pertama. Ruang produksi yang tertata bukan soal estetika, ia soal kecepatan dan uang yang tidak bocor.

---

`,
  15: `
## Contoh Output AI untuk Bab 15

### P-136. Menulis pertanyaan analisis sebelum menyentuh data

**Input yang dipakai:**
Bisnis: kedai kopi, data tersedia: catatan penjualan harian 6 bulan, jam ramai, menu terlaris, ulasan pelanggan, biaya bulanan. Pemilik merasa penjualan stagnan tetapi tidak tahu dari mana mulai menganalisis.

**Output ChatGPT:**
\`\`\`
Pertanyaan analisis sebelum menyentuh data kedai kopi:

KEUNGGULAN KEBERLANGSUNGAN (apakah bisnis sehat atau hanya kebetulan)
1. Berapa persen penjualan berasal dari pelanggan yang datang lebih dari 4 kali sebulan?
2. Berapa rata rata hari antara kunjungan ulang pelanggan yang kembali?
3. Menu terlaris menyumbang berapa persen dari total penjualan, dan bila satu menu itu habis bahan seminggu, penjualan turun berapa?

PENGUNJUNG DAN WAKTU
4. Jam ramai mana yang menghasilkan pesanan bernilai tinggi, bukan hanya banyak orang?
5. Hari apa yang paling lemah, dan apakah itu masalah promosi atau memang kebiasaan pasar?
6. Berapa rata rata nilai pesanan per jam di jam sepi dibanding jam ramai?

MENU DAN HARGA
7. Menu mana yang ramai dipesan tetapi marginnya paling tipis?
8. Menu mana yang marginnya tebal tetapi jarang dipesan, dan kenapa?
9. Kapan terakhir harga naik, dan apa yang terjadi dengan jumlah pembeli setelahnya?

BIAYA
10. Tiga biaya terbesar bulan lalu, dan mana yang berubah dari bulan sebelumnya?
11. Berapa persen penjualan yang dimakan biaya bahan kopi dan susu?

URUTAN PENGERJAAN
Mulai dari pertanyaan 7 dan 8, karena keduanya bisa dijawab hari ini dari catatan kas dan langsung mengubah menu. Pertanyaan 1 sampai 3 butuh identifikasi pelanggan, kerjakan setelah sistem catatan nama pelanggan berjalan 1 bulan.

ATURAN EMAS: satu pertanyaan satu jawaban satu tindakan. Pertanyaan yang jawabannya tidak mengubah keputusan apa pun, jangan dihitung.
\`\`\`

**Output Gemini:**
\`\`\`
Sebelas pertanyaan analisis kedai kopi, dikelompokkan: kesehatan pelanggan berulang, pola jam dan hari, kesehatan menu (margin versus popularitas), dan biaya terbesar.

Mulai dari dua pertanyaan menu: mana yang laris tetapi tipis margin, dan mana yang tebal margin tetapi jarang dipesan. Keduanya bisa dijawab hari ini dan langsung mengubah menu minggu depan. Pertanyaan pelanggan berulang menunggu sistem catatan nama berjalan sebulan.

Satu pertanyaan menghasilkan satu tindakan, sisanya tidak layak dihitung.
\`\`\`

**Perbandingan:** ChatGPT menyusun 11 pertanyaan dengan urutan pengerjaan berdasarkan ketersediaan data. Gemini menunjuk dua pertanyaan paling cepat berbuah. Melatih diri menulis pertanyaan lebih berharga daripada terburu-buru membuka spreadsheet.

---

### P-137. Membuat rumus spreadsheet untuk ringkasan penjualan

**Input yang dipakai:**
Spreadsheet penjualan warung makan: kolom A tanggal, kolom B menu, kolom C jumlah porsi, kolom D harga per porsi, kolom E total (sudah diisi rumus C dikali D). Data 3 bulan, sekitar 2.700 baris.

**Output ChatGPT:**
\`\`\`
Rumus ringkasan penjualan warung:

1. TOTAL PENDAPATAN BULAN TERTENTU
=SUMPRODUCT((MONTH($A$2:$A$3000)=1)*(YEAR($A$2:$A$3000)=2026)*$E$2:$E$3000)
Ganti angka 1 dengan bulan yang diinginkan. Rumus ini menjumlahkan kolom E hanya untuk baris yang bulannya cocok.

2. MENU TERLARIS (jumlah porsi per menu)
=SUMIF($B$2:$B$3000,"Nasi Goreng",$C$2:$C$3000)
Ganti nama menu. Buat satu tabel kecil di sheet lain: daftar semua menu di kolom F, rumus ini di kolom G, lalu tarik ke bawah.

3. MENU DENGAN PENDAPATAN TERBESAR
=SUMIF($B$2:$B$3000,F2,$E$2:$E$3000)
Ditulis di kolom H berdampingan dengan porsi. Sekarang satu tabel menunjukkan porsi dan pendapatan tiap menu sekaligus, dan di situlah menu ramai tapi tipis terlihat.

4. RATA RATA PORSI PER HARI
=AVERAGEIF($A$2:$A$3000,">="&DATE(2026,1,1),$C$2:$C$3000)
Menunjukkan porsi rata rata per baris transaksi. Untuk porsi per hari kalender, bagi total porsi bulan dengan jumlah hari buka.

5. HARI DENGAN PENJUALAN TERENDAH
=MINIFS($E$2:$E$3000,$A$2:$A$3000,">="&DATE(2026,1,1),$A$2:$A$3000,"<="&DATE(2026,1,31))
Mencari transaksi terkecil. Untuk agregat harian, buat kolom bantu tanggal tanpa jam: =INT(A2), lalu gunakan tabel pivot.

6. PERTUMBUHAN BULANAN
=(pendapatan bulan ini - pendapatan bulan lalu) / pendapatan bulan lalu
Format persen. Bila hasil minus berturut 2 bulan, itu alarm, bukan angka untuk didiamkan.

CATATAN PENTING: pastikan kolom tanggal benar benar bertipe tanggal, bukan teks. Uji dengan rumus =ISNUMBER(A2). Kalau hasilnya FALSE, tanggal Anda teks dan semua rumus berbasis tanggal akan gagal diam diam.
\`\`\`

**Output Gemini:**
\`\`\`
Rumus inti untuk spreadsheet warung: SUMPRODUCT untuk total per bulan dengan syarat bulan dan tahun, SUMIF untuk porsi per menu dan pendapatan per menu dalam tabel ringkasan kecil, MINIFS untuk hari terlemah, dan selisih dibagi bulan lalu untuk pertumbuhan bulanan.

Pertama kali mengerjakan: pastikan kolom tanggal bertipe tanggal dengan ISNUMBER, karena tanggal bertipe teks membuat semua rumus tanggal gagal tanpa peringatan.
\`\`\`

**Perbandingan:** ChatGPT memberikan rumus yang bisa langsung tempel dengan penjelasan perilakunya. Gemini menyorot satu jebakan yang paling sering membuat pemula frustrasi. Salin rumus ChatGPT, periksa tanggal dulu sesuai Gemini.
`,
};

const chapterMarkers = {
  6: '## 7. Produk dan pengembangan',
  7: '## 8. Harga, penawaran, dan promo',
  8: '## 9. Copywriting iklan dan halaman penjualan',
  9: '## 10. Konten media sosial dan video pendek',
  10: '## 11. Penjualan, tindak lanjut, dan negosiasi',
  11: '## 12. Layanan pelanggan dan komunitas',
  12: '## 13. Pembukuan, arus kas, dan pajak UMKM',
  13: '## 14. Operasional, stok, dan sumber daya manusia',
  14: '## 15. Analisis data dan laporan pemilik',
  15: '## Lampiran A. Memakai berkas Excel pendamping',
};

let updated = md;
for (const [chapter, marker] of Object.entries(chapterMarkers)) {
  const content = sections[chapter];
  if (!updated.includes(marker)) throw new Error(`Marker not found: ${marker}`);
  updated = updated.replace(marker, content.trimStart() + marker);
}

fs.writeFileSync(premiumPath, updated);
const prompts = (updated.match(/^### P-\d+\./gm) || []).length;
console.log(`Premium updated: ${prompts} prompt headers, ${updated.length} chars`);

const lint = [];
if (updated.includes('—')) lint.push('em-dash');
const proseCheck = updated.replace(/```[\s\S]*?```/g, '').replace(/\*\*[^*]+\*\*/g, '');
const stray = proseCheck.match(/\*/g);
if (stray) lint.push(`${stray.length} stray asterisks`);
const ph = updated.match(/\b(?:TBD|TODO|lorem ipsum|placeholder|XXX+)\b/i);
if (ph) lint.push(`placeholder text "${ph[0]}"`);
console.log('Lint:', lint.length ? lint.join('; ') : 'clean');
