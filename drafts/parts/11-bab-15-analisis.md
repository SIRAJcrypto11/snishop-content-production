## 15. Analisis data dan laporan pemilik

Bab terakhir ini untuk Anda yang sudah mencatat dan sekarang butuh pertanyaan yang tepat. Sebagian prompt meminta AI menulis rumus atau kueri, bukan menafsir angka untuk Anda. Cara itu lebih tahan lama karena perhitungannya bisa Anda periksa sendiri.

### P-136. Menulis pertanyaan analisis sebelum menyentuh data

Kapan pakai: Anda membuka laporan dan hanya melihat angka tanpa arah.

> Anda analis data bisnis. Keputusan yang harus saya ambil minggu ini: [tulis keputusan]. Data yang saya punya: [tulis tabel atau kolom beserta rentang tanggal]. Susun: empat pertanyaan analisis yang jawabannya bisa mengubah keputusan itu, untuk tiap pertanyaan tulis kolom yang dipakai, cara menghitung, dan bentuk keluaran berupa angka tunggal atau tabel. Lalu tunjukkan dua pertanyaan yang tampak menarik tapi tidak bisa dijawab dengan data saya dan data tambahan apa yang diperlukan. Akhiri dengan satu pertanyaan yang paling menentukan, beserta ambang angka yang membuat saya mengambil arah berbeda. Jangan menyusun pertanyaan yang jawabannya berupa opini.

Variabel: keputusan, daftar data

Hasil yang diharapkan: pertanyaan analisis dengan cara hitung dan ambang keputusan.

### P-137. Membuat rumus spreadsheet untuk ringkasan penjualan

Kapan pakai: Anda butuh laporan mingguan tanpa mengulang kerja manual.

> Anda ahli spreadsheet yang menulis rumus untuk pengguna tingkat menengah. Struktur data saya di satu lembar: kolom A tanggal, B nama produk, C kategori, D unit, E nilai penjualan, F kanal, G biaya. Rentang baris 2 sampai 500. Tulis rumus untuk: penjualan per kategori dalam rentang tanggal tertentu, penjualan per kanal per bulan, rata-rata nilai pesanan, margin per baris, kontribusi persen tiap produk terhadap total, dan jumlah hari tanpa penjualan. Untuk tiap rumus tulis dalam bentuk yang bisa saya tempel memakai nama kolom bukan alamat sel absolut, jelaskan asumsi yang dipakai, dan tandai rumus yang perlu versi berbeda kalau saya memakai Google Sheets. Sajikan sebagai daftar bernomor dengan blok rumus terpisah.

Variabel: struktur kolom

Hasil yang diharapkan: enam rumus siap tempel beserta asumsi dan catatan platform.

### P-138. Menulis kueri untuk laporan dari basis data pesanan

Kapan pakai: usaha Anda memakai aplikasi yang punya basis data dan Anda bisa meminta akses baca.

> Anda analis data yang menulis SQL untuk laporan usaha kecil. Skema saya: tabel orders dengan kolom id, customer_id, created_at, status, subtotal, discount, final_price; tabel order_items dengan kolom id, order_id, product_id, qty, price; tabel products dengan kolom id, name, category, cost. Tulis kueri untuk: penjualan harian 30 hari terakhir, sepuluh produk terlaris berdasarkan margin bukan berdasarkan jumlah, rata-rata nilai pesanan per kanal kalau kolom kanal saya tambahkan, pelanggan yang tidak kembali setelah 60 hari, dan produk dengan perputaran stok lambat. Untuk tiap kueri beri judul, tulis dalam blok kode, jelaskan tiga baris tersulitnya, dan sebutkan indeks yang sebaiknya ada. Gunakan sintaks PostgreSQL. Jangan memakai fungsi yang tidak ada di PostgreSQL.

Variabel: skema tabel

Hasil yang diharapkan: lima kueri beserta penjelasan dan saran indeks.

Contoh bentuk keluaran yang Anda harapkan dari prompt ini:

```sql
-- Sepuluh produk dengan kontribusi margin terbesar 90 hari terakhir
SELECT p.name,
       p.category,
       SUM(oi.qty) AS unit_terjual,
       SUM(oi.qty * (oi.price - p.cost)) AS total_margin,
       ROUND(SUM(oi.qty * (oi.price - p.cost))::numeric
             / NULLIF(SUM(SUM(oi.qty * oi.price)) OVER (), 0) * 100, 1) AS persen_margin
FROM order_items oi
JOIN orders o ON o.id = oi.order_id
JOIN products p ON p.id = oi.product_id
WHERE o.created_at >= NOW() - INTERVAL '90 days'
  AND o.status <> 'cancelled'
GROUP BY p.id, p.name, p.category
ORDER BY total_margin DESC
LIMIT 10;
```

Perhatikan bahwa kueri di atas menghitung margin memakai biaya per unit dari tabel produk. Kalau biaya produksi Anda berubah tiap bulan, kueri ini perlu versi yang menyimpan biaya pada saat transaksi dicatat.

### P-139. Memeriksa apakah sebuah kenaikan benar-benar berarti

Kapan pakai: penjualan naik minggu ini dan Anda ingin tahu itu pola atau kebetulan.

> Anda statistikawan yang menjelaskan dengan bahasa sederhana. Data penjualan harian saya 12 minggu terakhir: [tempel angka]. Rata-rata mingguan sebelumnya [tulis], dan minggu ini [tulis]. Tugas saya adalah memutuskan apakah ini kenaikan nyata. Jelaskan: berapa banyak hari dan minggu yang dibutuhkan sebelum perbedaan ini bisa dianggap bukan fluktuasi biasa, cara memeriksa dengan membandingkan ke rentang mingguan saya sendiri tanpa istilah statistik yang berat, dan tiga penjelasan alternatif selain keberhasilan promosi saya yang harus saya cek lebih dulu, misalnya satu pembeli grosir, musiman, atau pembelian berulang satu orang. Sajikan sebagai daftar dan akhiri dengan satu pertanyaan yang menentukan arah kesimpulan saya.

Variabel: data harian, rata-rata pembanding

Hasil yang diharapkan: kriteria kenaikan nyata dan tiga penjelasan alternatif.

### P-140. Menyusun dasbor pemilik dalam satu layar

Kapan pakai: Anda punya banyak grafik tapi tidak melihat kesehatan usaha.

> Anda perancang dasbor bisnis. Usaha saya menjual {produk} dengan {omzet_bulanan} omzet dan [tulis jumlah] karyawan. Sumber data saya: [tulis aplikasi atau spreadsheet]. Susun dasbor satu layar berisi maksimal tujuh metrik: nama metrik, definisi perhitungan yang tidak ambigu, frekuensi pembaruan, ambang hijau kuning merah beserta alasannya, dan apa yang saya lakukan saat metrik itu merah. Pilih metrik yang saling menyeimbangkan antara pertumbuhan, kas, dan mutu layanan, bukan tujuh angka penjualan. Setelah itu tulis urutan pengerjaan menyiapkan dasbor ini dalam tiga hari beserta bagian mana yang bisa memakai pencatatan manual lebih dulu.

Variabel: {produk}, {omzet_bulanan}, karyawan, sumber data

Hasil yang diharapkan: tujuh metrik berambang dan rencana pembuatan tiga hari.

### P-141. Menganalisis alasan pembeli berhenti membeli

Kapan pakai: basis pelanggan Anda tumbuh tapi pembeli lama menghilang.

> Anda analis perilaku pembeli. Data saya: [tempel daftar pembeli beserta tanggal beli pertama, tanggal beli terakhir, jumlah pesanan, dan total nilai]. Produk {produk} dan siklus beli wajar [tulis hari]. Tentukan: definisi pembeli yang hilang untuk usaha saya beserta alasannya, kelompok pembeli yang berhenti paling awal dan apa yang mereka beli, kelompok yang bertahan paling lama, dan selisih perilaku keduanya. Setelah itu susun tiga hipotesis penyebab dan cara mengujinya memakai data yang sudah ada sebelum saya menghubungi siapa pun. Sajikan sebagai tabel dan akhiri dengan lima pertanyaan untuk wawancara pemulihan.

Variabel: data pembeli, {produk}, siklus beli

Hasil yang diharapkan: definisi berhenti, dua kelompok pembanding, dan tiga hipotesis.

### P-142. Menghitung nilai seumur hidup pelanggan yang jujur

Kapan pakai: Anda ingin tahu berapa boleh dikeluarkan untuk mendapat satu pembeli.

> Anda analis kelayakan akuisisi pelanggan. Data saya: harga rata-rata per pesanan [tulis], margin [tulis persen], rata-rata jumlah pesanan per pelanggan per tahun [tulis], rata-rata pelanggan bertahan [tulis tahun], dan biaya iklan yang saya keluarkan [tulis] menghasilkan [tulis jumlah] pembeli baru. Hitung nilai seumur hidup pelanggan, biaya akuisisi saat ini, dan rasio keduanya, tunjukkan tiap langkah perhitungan. Lalu sajikan tabel tiga skenario: mempertahankan pelanggan lebih lama satu tahun, menaikkan frekuensi beli satu pesanan per tahun, dan menurunkan biaya iklan 20 persen, beserta rasio tiap skenario. Akhiri dengan angka maksimal yang boleh saya bayarkan untuk satu pembeli baru kalau saya ingin rasio minimal tiga banding satu.

Variabel: nilai pesanan, margin, frekuensi, retensi, biaya iklan

Hasil yang diharapkan: hitungan nilai seumur hidup, tiga skenario, dan batas biaya akuisisi.

### P-143. Membersihkan data sebelum dianalisis

Kapan pakai: satu kolom berisi tiga format berbeda dan seluruh laporan jadi salah.

> Anda pembersih data untuk berkas spreadsheet usaha kecil. Masalah data saya: [tulis kolom dan contoh nilai yang tidak konsisten]. Susun rencana pembersihan: daftar aturan normalisasi per kolom beserta contoh sebelum dan sesudah, cara menandai baris yang tidak bisa diperbaiki daripada menghapusnya, langkah pemeriksaan setelah pembersihan berupa jumlah baris dan total nilai yang harus tetap sama, dan aturan pencatatan perubahan supaya bulan depan saya tahu apa yang saya lakukan. Sajikan sebagai tabel aturan per kolom. Akhiri dengan tiga kebiasaan input yang menyebabkan kekacauan ini dan cara mencegahnya lewat format sel atau daftar pilihan.

Variabel: kolom dan contoh nilai bermasalah

Hasil yang diharapkan: aturan normalisasi, pemeriksaan, dan pencegahan input.

### P-144. Membuat grafik yang tidak menyesatkan

Kapan pakai: laporan Anda akan dibaca karyawan atau calon mitra dan sumbunya bisa menipu.

> Anda perancang visualisasi data untuk pembaca non-teknis. Data saya: [tempel angka]. Pesan yang ingin saya sampaikan: [tulis]. Susun spesifikasi grafik: jenis grafik yang paling jujur untuk pesan ini beserta alasan menolak dua alternatif, rentang sumbu dan alasannya dimulai dari nol atau tidak, jumlah kategori maksimal supaya tidak penuh, warna yang membedakan tanpa menekankan yang salah, judul yang menyatakan kesimpulan bukan topik, dan catatan kaki tentang data yang hilang. Setelah itu tulis tiga cara grafik ini bisa dibaca keliru dan apa yang saya ubah untuk mencegahnya. Jangan menyarankan grafik tiga dimensi atau grafik lingkaran dengan lebih dari lima kategori.

Variabel: angka, pesan

Hasil yang diharapkan: spesifikasi grafik beserta tiga risiko pembacaan keliru.

### P-145. Menganalisis produk mana yang menahan pertumbuhan

Kapan pakai: katalog Anda melebar tapi laba tidak bergerak.

> Anda analis portofolio produk. Data per produk: [tempel nama, unit terjual, harga, biaya, dan stok]. Tugas saya adalah memutuskan mana yang dipertahankan. Klasifikasikan tiap produk ke empat kelompok: mesin laba, penarik pembeli yang marginnya tipis, pelengkap yang menaikkan nilai pesanan, dan penahan pertumbuhan. Untuk tiap kelompok tulis ciri angkanya, tindakan yang benar, dan produk yang perlu saya tanyakan datanya karena bukti belum cukup. Sajikan sebagai tabel per produk beserta kelompok dan tindakan. Akhiri dengan dua pertanyaan analisis yang harus saya jawab sebelum menghentikan satu produk apa pun.

Variabel: data per produk

Hasil yang diharapkan: klasifikasi empat kelompok dengan tindakan per produk.

### P-146. Menyusun laporan bulanan untuk dibaca orang lain

Kapan pakai: mitra, bank, atau investor kecil minta laporan dan format Anda berubah tiap bulan.
> Anda penulis laporan bisnis. Data bulanan saya: [tempel angka utama beserta pembanding bulan lalu dan tahun lalu bila ada]. Susun laporan satu halaman dengan bagian: ringkasan empat kalimat yang menyebut angka paling penting di kalimat pertama, apa yang berjalan sesuai rencana beserta buktinya, apa yang meleset beserta penyebab yang bisa diverifikasi, tiga keputusan yang saya ambil bulan depan beserta angka sasarannya, dan permintaan dukungan kalau ada. Tulis untuk pembaca yang tidak tahu detail usaha saya. Maksimal 450 kata, tanpa istilah yang tidak dijelaskan, tanpa klaim yang angkanya tidak ada di data saya.

Variabel: angka bulanan

Hasil yang diharapkan: laporan satu halaman dengan keputusan dan sasaran.

### P-147. Menguji dugaan penyebab dengan data sendiri

Kapan pakai: Anda yakin penyebabnya satu hal dan bisa jadi salah.

> Anda penguji hipotesis memakai data operasional. Dugaan saya: [tulis dugaan]. Data yang tersedia: [tulis tabel dan kolom beserta rentang]. Susun: tiga cara menguji dugaan ini dengan data yang ada, untuk tiap cara tulis kelompok pembanding yang dipakai, angka yang dibandingkan, dan hasil seperti apa yang mendukung atau membantah dugaan saya. Lalu tunjukkan dua kekeliruan penalaran yang paling mungkin saya lakukan, misalnya menyamakan korelasi dengan sebab atau membandingkan periode yang tidak sebanding, beserta cara menghindarinya. Kalau data tidak cukup, sebutkan data tambahan yang harus saya kumpulkan dan berapa lama.

Variabel: dugaan, ketersediaan data

Hasil yang diharapkan: tiga rancangan uji dan dua kekeliruan yang dihindari.

### P-148. Menyusun daftar pertanyaan untuk akuntan atau konsultan

Kapan pakai: Anda akan membayar jasa profesional dan ingin waktunya tidak terbuang.

> Anda asisten persiapan pertemuan profesional. Situasi usaha saya: {nama_usaha} menjual {produk} dengan {omzet_bulanan} omzet, [tulis jumlah] karyawan, alat pencatatan [tulis], dan isu yang saya hadapi [tulis]. Susun: berkas yang harus saya siapkan beserta formatnya, dua puluh pertanyaan yang diurutkan dari yang paling menentukan keputusan, tiga pertanyaan yang sebaiknya tidak saya ajukan lebih dulu karena jawabannya bergantung pada data yang belum rapi, dan ringkasan satu paragraf tentang usaha saya yang bisa saya kirim sebelum pertemuan agar konsultan tidak memulai dari nol. Sajikan sebagai tiga bagian terpisah. Bahasa Indonesia, tanpa istilah akuntansi tanpa penjelasan.

Variabel: {nama_usaha}, {produk}, {omzet_bulanan}, karyawan, alat, isu

Hasil yang diharapkan: daftar berkas, pertanyaan terurut, dan ringkasan pra-pertemuan.

### P-149. Membuat aturan peringatan dini otomatis

Kapan pakai: masalah selalu ketahuan setelah biayanya besar.

> Anda perancang sistem peringatan dini usaha kecil. Metrik yang saya catat: [tulis metrik beserta frekuensi dan sumbernya]. Susun delapan aturan peringatan: nama aturan, perhitungan pemicunya, ambang angka beserta cara menentuknya dari data saya sendiri bukan angka umum, frekuensi pemeriksaan, kanal pemberitahuan, dan tindakan wajib dalam 24 jam setelah peringatan muncul. Utamakan peringatan yang membandingkan kondisi terkini dengan riwayat saya sendiri. Sajikan sebagai tabel dan akhiri dengan tiga aturan yang paling mudah memicu kepanikan palsu beserta cara menyaringnya.

Variabel: daftar metrik

Hasil yang diharapkan: delapan aturan peringatan dengan tindakan dan penyaring.

### P-150. Menutup tahun dengan tinjauan yang mengubah keputusan

Kapan pakai: Anda perlu memutuskan apa yang dilanjutkan tahun depan.

> Anda pemimpin tinjauan tahunan untuk pemilik usaha kecil. Data saya dua belas bulan: [tempel angka bulanan utama]. Susun tinjauan dalam empat bagian: angka yang membaik dan memburuk beserta pembandingnya, tiga keputusan saya tahun ini yang ternyata benar beserta bukti, tiga keputusan yang salah beserta apa yang menyebabkan saya salah melihat, dan empat hal yang akan saya lakukan berbeda dengan urutan beserta satu hal yang saya hentikan total. Maksimal 600 kata, ditulis untuk diri saya sendiri satu tahun ke depan, tanpa basa-basi dan tanpa kalimat penyemangat. Kalau data saya tidak cukup untuk menyimpulkan satu bagian, sebutkan bagian mana dan data apa yang perlu saya catat mulai bulan depan.

Variabel: data dua belas bulan

Hasil yang diharapkan: tinjauan empat bagian dengan keputusan berhenti dan lanjut.

### Ringkasan cepat bab ini

| Kode | Judul | Bentuk keluaran |
|---|---|---|
| P-136 | Pertanyaan sebelum analisis | Empat pertanyaan berhitung |
| P-137 | Rumus spreadsheet | Enam rumus |
| P-138 | Kueri laporan pesanan | Lima kueri SQL |
| P-139 | Uji kenaikan berarti | Kriteria dan alternatif |
| P-140 | Dasbor pemilik | Tujuh metrik berambang |
| P-141 | Alasan pembeli berhenti | Kelompok dan hipotesis |
| P-142 | Nilai seumur hidup pelanggan | Rasio dan batas biaya |
| P-143 | Bersihkan data | Aturan normalisasi |
| P-144 | Grafik yang jujur | Spesifikasi grafik |
| P-145 | Produk penahan tumbuh | Klasifikasi empat kelompok |
| P-146 | Laporan bulanan | Satu halaman |
| P-147 | Uji dugaan sendiri | Tiga rancangan uji |
| P-148 | Pertanyaan untuk konsultan | Berkas dan daftar |
| P-149 | Peringatan dini | Delapan aturan |
| P-150 | Tinjauan tahunan | Empat bagian |

### Latihan bab ini

1. Jalankan P-136 untuk satu keputusan nyata minggu ini. Baru setelah itu buka P-137 atau P-138 untuk menghitungnya.
2. Jalankan P-142 memakai data iklan tiga bulan terakhir. Kalau rasio nilai seumur hidup terhadap biaya akuisisi di bawah tiga, hentikan penambahan budget iklan lebih dulu.
3. Jalankan P-140 lalu P-149 berurutan. Dasbor tanpa peringatan dini akan Anda buka sekali lalu tinggalkan.

### Kesalahan umum di bab ini

Meminta AI menyimpulkan dari data yang tidak Anda berikan. Semua prompt di bab ini punya bagian tempat Anda menempel angka. Kalau bagian itu kosong, keluaran terbaik pun hanya tebakan yang terdengar meyakinkan, dan itu justru berbahaya karena Anda akan mengambil keputusan nyata darinya.
