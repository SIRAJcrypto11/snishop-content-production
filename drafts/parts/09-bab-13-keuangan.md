## 13. Pembukuan, arus kas, dan pajak UMKM

Bab ini paling rawan salah kalau Anda meminta angka tanpa memberikan data. Karena itu hampir semua prompt di sini meminta AI menunjukkan rumus dan menyebut angka yang ia perkirakan. Satu aturan tambahan: aturan pajak dan pelaporan berubah sewaktu-waktu. Pakai hasil bab ini sebagai persiapan percakapan dengan konsultan pajak atau kantor pelayanan pajak, bukan sebagai pengganti.

### P-106. Memisahkan uang pribadi dan uang usaha

Kapan pakai: Anda tidak bisa menyebutkan omzet bulan lalu dengan pasti.

> Anda penasihat pembukuan usaha kecil. Kondisi saya: usaha {nama_usaha} menjual {produk}, omzet sekitar {omzet_bulanan}, saya masih memakai satu rekening untuk pribadi dan usaha, dan pengambilan uang untuk kebutuhan rumah tangga sekitar [tulis nominal] per bulan. Susun skema pemisahan yang bisa saya jalankan tanpa akuntan penuh waktu: struktur rekening, tanggal dan besaran gaji tetap untuk saya sendiri beserta alasannya, aturan penamaan transaksi, daftar minimal yang harus saya catat per hari dalam bentuk kolom, dan cara menutup buku tiap bulan dalam 30 menit. Sajikan sebagai langkah bernomor dan akhiri dengan tiga kebiasaan lama yang harus saya berhenti lakukan minggu ini.

Variabel: {nama_usaha}, {produk}, {omzet_bulanan}, nominal pengambilan

Hasil yang diharapkan: skema rekening, gaji pemilik, dan rutinitas tutup buku.

### P-107. Menyusun arus kas proyeksi 13 minggu

Kapan pakai: Anda tidak tahu minggu mana kas akan menipis.

> Anda analis arus kas untuk usaha kecil. Data saya: kas awal [tulis], piutang yang akan masuk beserta perkiraan tanggal [tulis daftar], kewajiban yang harus keluar beserta tanggal [tulis daftar gaji, sewa, supplier, listrik], rata-rata penjualan mingguan {omzet_bulanan} dibagi empat dengan pola naik turun [tulis kalau ada musim], dan biaya tetap bulanan [tulis]. Susun proyeksi 13 minggu dalam tabel: minggu, kas masuk, kas keluar, saldo akhir, dan penanda aman atau waspada atau kritis. Tunjukkan rumus saldo. Tandai minggu pertama yang saldo akhirnya negatif dan tulis dua tindakan yang bisa saya ambil 3 minggu sebelumnya. Kalau ada angka yang tidak saya berikan, jangan mengarang, tanyakan.

Variabel: kas awal, piutang, kewajiban, {omzet_bulanan}, biaya tetap

Hasil yang diharapkan: tabel 13 minggu dengan penanda dan tindakan pencegahan.

### P-108. Menghitung harga pokok penjualan yang benar

Kapan pakai: laba di laporan terlihat besar tapi kas tidak bertambah.

> Anda akuntan biaya. Data saya untuk {produk}: pembelian bahan periode ini [tulis], stok bahan awal [tulis], stok bahan akhir [tulis], tenaga kerja langsung [tulis jam dan upah], overhead produksi [tulis rincian], dan unit jadi pada periode yang sama [tulis]. Hitung biaya bahan terpakai, biaya tenaga kerja, overhead teralokasi, total biaya produksi, dan harga pokok per unit. Tunjukkan tiap langkah perhitungan. Lalu bandingkan dengan {harga_jual} dan hitung margin kotor per unit serta dalam persen. Akhiri dengan tiga kemungkinan penyebab kalau margin saya ternyata di bawah 30 persen, dan data apa yang harus saya periksa lebih dulu.

Variabel: {produk}, data bahan, tenaga kerja, overhead, unit, {harga_jual}

Hasil yang diharapkan: perhitungan harga pokok bertahap dan diagnosis margin.

### P-109. Menyusun laporan laba rugi sederhana bulanan

Kapan pakai: Anda butuh satu halaman untuk tahu bulan ini untung atau rugi.

> Anda pembuat laporan keuangan usaha kecil. Transaksi saya bulan ini: [tempel daftar pemasukan dan pengeluaran beserta tanggal dan keterangan singkat]. Susun laporan laba rugi dengan susunan: pendapatan, potongan seperti retur dan voucher, harga pokok penjualan, laba kotor, biaya operasional yang dikelompokkan menjadi pemasaran, gaji, sewa dan utilitas, pengiriman, dan lain-lain, lalu laba bersih. Hitung margin laba kotor dan margin laba bersih dalam persen. Sajikan sebagai tabel dengan angka dan kolom persen dari pendapatan. Tandai kelompok biaya yang porsinya naik tajam kalau saya memberi data bulan sebelumnya. Jangan menggolongkan pembelian aset sebagai biaya operasional.

Variabel: daftar transaksi, data pembanding bila ada

Hasil yang diharapkan: laporan laba rugi bulanan dengan margin dan penanda lonjakan.

### P-110. Menyiapkan catatan pajak bulanan sendiri

Kapan pakai: Anda baru sadar kewajiban pajak mendekati tanggal lapor.

> Anda asisten persiapan pajak untuk UMKM Indonesia. Kondisi saya: {nama_usaha} menjual {produk} dengan {omzet_bulanan} per bulan, status usaha [tulis perorangan atau badan], jumlah pegawai [tulis], dan saya [tulis sudah atau belum punya NPWP dan NIB]. Aturan pajak bisa berubah, jadi jangan memastikan tarif sebagai fakta final. Susun: daftar pertanyaan yang harus saya ajukan ke konsultan pajak atau kantor pelayanan pajak beserta urutannya, rincian data yang perlu saya siapkan agar percakapan itu efisien, bagan alur pencatatan omzet bruto per bulan yang diperlukan untuk perhitungan, dan tiga risiko kalau saya menunda. Sajikan sebagai daftar periksa. Di bagian akhir, tulis kalimat yang bisa saya pakai untuk bertanya tanpa terlihat belum menyiapkan apa pun.

Variabel: {nama_usaha}, {produk}, {omzet_bulanan}, status, pegawai, NPWP

Hasil yang diharapkan: daftar pertanyaan, berkas persiapan, dan alur pencatatan.

### P-111. Memeriksa kecocokan catatan bank dan catatan internal

Kapan pakai: saldo di aplikasi kasir tidak sama dengan saldo rekening.

> Anda auditor internal untuk usaha kecil. Ini catatan penjualan saya per hari: [tempel tanggal dan nilai]. Ini mutasi rekening koran saya: [tempel tanggal dan nilai masuk dan keluar]. Tugas saya adalah menemukan selisih. Cocokkan kedua daftar, tunjukkan selisih per hari dalam tabel: tanggal, catatan internal, catatan bank, selisih, dan kemungkinan penyebab. Kelompokkan kemungkinan penyebab menjadi: potongan biaya admin atau komisi kanal, pembayaran yang belum masuk, transaksi yang tercatat dua kali, dan transaksi pribadi yang tercampur. Akhiri dengan tiga kolom tambahan yang harus saya catat mulai besok supaya rekonsiliasi tidak memakan waktu.

Variabel: catatan penjualan, mutasi bank

Hasil yang diharapkan: tabel selisih harian beserta penyebab dan perbaikan pencatatan.

### P-112. Menghitung kebutuhan modal kerja

Kapan pakai: usaha tumbuh tapi uang selalu habis di tengah bulan.

> Anda analis keuangan usaha kecil. Data saya: rata-rata pembelian per bulan [tulis], rata-rata penagihan yang tertunda [tulis hari], rata-rata stok ditahan [tulis hari penjualan], pembayaran ke pemasok [tulis hari], {omzet_bulanan} omzet, dan margin [tulis persen]. Hitung siklus kas dalam hari, tunjukkan rumusnya, lalu hitung berapa modal kerja yang saya butuhkan untuk menopang pertumbuhan [tulis persen]. Bandingkan dengan kas yang saya punya sekarang [tulis]. Setelah itu susun tiga cara menutup kekurangan dengan urutan dari yang paling murah: mempercepat penagihan, memperlambat pembayaran pemasok, dan menurunkan penahanan stok. Untuk tiap cara tulis tindakan konkret dan risiko hubungannya.

Variabel: pembelian, penagihan, stok, pembayaran, {omzet_bulanan}, margin, target tumbuh, kas

Hasil yang diharapkan: hitungan siklus kas, kebutuhan modal, dan tiga cara menutup.

### P-113. Menyiapkan berkas pengajuan kredit usaha

Kapan pakai: Anda akan mengajukan pinjaman dan ingin berkasnya tidak bolak-balik.

> Anda penasihat pembiayaan UMKM. Usaha saya {nama_usaha} bergerak di {produk} dengan {omzet_bulanan} omzet, berjalan [tulis lama usaha], jumlah pegawai [tulis], dan saya butuh pinjaman [tulis nominal] untuk [tulis penggunaan]. Susun: daftar dokumen yang umumnya diminta beserta cara menyiapkan yang tidak ada, misalnya bukti usaha dan alamat, ringkasan satu halaman yang menjelaskan penggunaan dana dan sumber pengembalian, tiga pertanyaan yang biasanya diajukan analis beserta cara menjawab yang jujur dan tidak melemahkan, dan dua kesalahan yang membuat pengajuan ditolak padahal usahanya sehat. Akhiri dengan tabel rencana penggunaan dana beserta dampak ke pendapatan. Jangan menyarankan memalsukan angka.

Variabel: {nama_usaha}, {produk}, {omzet_bulanan}, lama usaha, pegawai, nominal, penggunaan

Hasil yang diharapkan: daftar berkas, ringkasan, dan persiapan wawancara kredit.

### P-114. Menganalisis biaya yang bisa dihapus tanpa mengurangi penjualan

Kapan pakai: Anda perlu menekan biaya tapi tidak mau merusak yang sedang jalan.

> Anda analis biaya usaha kecil. Rincian biaya bulanan saya: [tempel daftar pos beserta nominal]. Pendapatan {omzet_bulanan}. Untuk tiap pos beri label: penting untuk pendapatan, penting untuk kepatuhan atau keamanan, penunjang, atau bisa dikurangi. Hitung porsinya terhadap pendapatan dan bandingkan dengan ambang wajar yang Anda nyatakan sebagai perkiraan, bukan patokan baku. Lalu susun rencana penghematan tiga langkah yang tidak menyentuh kualitas produk dan layanan pelanggan, beserta cara mengukur bahwa penjualan tidak turun setelahnya. Sajikan sebagai tabel dan akhiri dengan dua pos yang justru berbahaya kalau saya potong.

Variabel: daftar biaya, {omzet_bulanan}

Hasil yang diharapkan: klasifikasi pos biaya dan rencana hemat yang aman.

### P-115. Menyusun standar operasional penutupan buku bulanan

Kapan pakai: laporan Anda selalu telat karena tidak ada rutinitas.

> Anda penyusun prosedur akuntansi untuk usaha kecil dengan satu orang bagian keuangan. Alat yang saya pakai: [tulis aplikasi atau spreadsheet]. Susun prosedur penutupan buku bulanan dalam tabel: hari kerja, pekerjaan, hasil yang harus terlihat, dan pemeriksaan silang yang dilakukan orang lain. Cakup pencocokan kas dan bank, pengakuan pendapatan beserta potongannya, perhitungan stok akhir dan harga pokok, rekonsiliasi piutang dan utang, penyusutan peralatan sederhana, dan penyusunan laporan laba rugi serta arus kas. Total waktu pengerjaan maksimal 6 jam. Akhiri dengan lima butir daftar periksa tanda tangan yang membuktikan prosedur ini benar-benar dijalankan.

Variabel: alat yang dipakai

Hasil yang diharapkan: prosedur harian dengan pemeriksaan silang dan daftar periksa.

### P-116. Menentukan apakah usaha mampu menambah karyawan

Kapan pakai: beban kerja naik dan Anda bingung merekrut atau menambah jam.

> Anda analis kelayakan biaya tenaga kerja. Data saya: {omzet_bulanan} omzet, laba bersih bulanan [tulis], jam kerja saya per minggu [tulis], pekerjaan yang paling menyita waktu [tulis tiga], upah yang wajar di {kota} untuk posisi ini [tulis perkiraan], dan biaya tambahan [tulis BPJS, makan, atau transport kalau ada]. Hitung biaya penuh satu karyawan per bulan, lalu tentukan tambahan pendapatan atau penghematan waktu yang harus dihasilkan supaya posisi ini layak. Bandingkan tiga opsi: karyawan tetap harian, pekerja lepas per proyek, dan alat otomatis untuk pekerjaan berulang. Untuk tiap opsi tulis risiko kalau orang keluar dan cara saya melindungi datanya.

Variabel: {omzet_bulanan}, laba, jam kerja, pekerjaan, upah {kota}, biaya tambahan

Hasil yang diharapkan: biaya penuh tenaga kerja dan perbandingan tiga opsi.

### P-117. Membaca rasio keuangan usaha sendiri

Kapan pakai: Anda punya laporan tapi tidak tahu apa yang harus dikhawatirkan.

> Anda analis rasio keuangan usaha kecil. Angka saya: total aset [tulis], kas [tulis], piutang [tulis], utang jangka pendek [tulis], utang jangka panjang [tulis], pendapatan setahun {omzet_bulanan} dikali dua belas, laba bersih [tulis], dan harga pokok penjualan [tulis]. Hitung rasio lancar, utang terhadap modal, margin laba kotor, margin laba bersih, perputaran persediaan kalau data stok saya berikan, dan hari tunggaku piutang. Tampilkan rumus tiap rasio. Untuk tiap hasil tulis apa yang diungkapkan tentang usaha saya, batas yang biasanya mengkhawatirkan sebagai perkiraan, dan satu tindakan perbaikan. Jangan menyimpulkan tanpa menyebut data yang kurang.

Variabel: neraca, laba, {omzet_bulanan}

Hasil yang diharapkan: tabel rasio berhitung dengan tindakan perbaikan.

### P-118. Menyusun anggaran tahunan yang bisa dipegang tim

Kapan pakai: target Anda hanya berupa angka besar tanpa pembagian bulanan.

> Anda perencana anggaran usaha kecil. Target saya tahun depan untuk {produk}: pendapatan [tulis], dan saya punya kapasitas produksi [tulis]. Data tahun ini: [tulis pendapatan per kuartal, biaya tetap, dan margin]. Susun anggaran tahunan dalam tabel per kuartal: pendapatan target, unit yang harus terjual, harga rata-rata, biaya variabel, biaya tetap, dan laba yang disisakan. Pecah pendapatan kuartal mengikuti pola musiman nyata di {musim} dan bulan lemah, bukan dibagi rata. Setelah itu tulis tiga asumsi yang paling menentukan dan tanda dini bahwa asumsi itu mulai meleset, beserta keputusan yang saya ambil kalau itu terjadi.

Variabel: {produk}, target, kapasitas, data tahun ini, {kota}, {musim}

Hasil yang diharapkan: anggaran kuartalan dengan asumsi dan penanda penyimpangan.

### P-119. Memeriksa apakah harga jual menutup biaya sebenarnya

Kapan pakai: Anda merasa semua penjualan untung tapi kas tetap saja menipis.

> Anda akuntan biaya yang bertugas menemukan biaya tersembunyi. Produk saya {produk} dengan {harga_jual} dan {modal_unit} yang saya anggap sebagai biaya. Pekerjaan tambahan per pesanan yang saya lakukan: [tulis misalnya mengemas, mencetak label, menimbang, mengirim ke titik jemput, membalas chat, menangani retur, dan biaya admin kanal]. Estimasi waktu tiap pekerjaan [tulis menit] dan upah saya per jam [tulis]. Hitung biaya penuh per pesanan, tunjukkan rumusnya, lalu bandingkan dengan {harga_jual}. Setelah itu susun tabel tiga kolom: pos biaya yang selama ini tidak saya hitung, nilai per pesanan, dan cara saya memindahkannya ke harga atau menghilangkannya. Akhiri dengan harga minimum yang membuat pesanan tetap untung.

Variabel: {produk}, {harga_jual}, {modal_unit}, daftar pekerjaan, waktu, upah

Hasil yang diharapkan: biaya penuh per pesanan dan harga minimum yang aman.

### P-120. Membuat laporan pemilik mingguan satu layar

Kapan pakai: Anda tenggelam di pekerjaan harian dan kehilangan pandangan.

> Anda penyusun laporan eksekutif untuk pemilik usaha kecil. Data yang bisa saya catat 10 menit setiap Jumat: [tulis yang tersedia, misalnya pesanan masuk, nilai penjualan, kas akhir, komplain, dan stok kritis]. Susun format laporan satu layar berisi: enam angka utama beserta pembanding minggu lalu, satu pertanyaan yang harus saya jawab sendiri, dua hal yang menyimpang dari rencana, dan satu keputusan untuk minggu depan. Buat maksimal 250 kata. Lalu jelaskan cara mengisinya memakai spreadsheet dengan rumus yang saya tulis sendiri, bukan alat berbayar. Akhiri dengan tiga angka yang paling sering membuat pemilik usaha menipu dirinya sendiri dan cara menghindarinya.

Variabel: data mingguan yang tersedia

Hasil yang diharapkan: format laporan mingguan dan cara pengisian dengan spreadsheet.

### Ringkasan cepat bab ini

| Kode | Judul | Bentuk keluaran |
|---|---|---|
| P-106 | Pisah uang pribadi dan usaha | Skema rekening |
| P-107 | Proyeksi arus kas 13 minggu | Tabel dengan penanda |
| P-108 | Hitung harga pokok penjualan | Perhitungan bertahap |
| P-109 | Laporan laba rugi bulanan | Tabel dan margin |
| P-110 | Persiapan catatan pajak | Daftar periksa |
| P-111 | Cocokkan bank dan catatan | Tabel selisih |
| P-112 | Kebutuhan modal kerja | Siklus kas dan tiga cara |
| P-113 | Berkas pengajuan kredit | Daftar dan ringkasan |
| P-114 | Biaya yang bisa dipotong | Klasifikasi pos |
| P-115 | Prosedur tutup buku | Tabel harian |
| P-116 | Kelayakan tambah karyawan | Biaya penuh dan opsi |
| P-117 | Rasio keuangan | Tabel rasio berhitung |
| P-118 | Anggaran tahunan | Tabel kuartalan |
| P-119 | Biaya tersembunyi per pesanan | Harga minimum |
| P-120 | Laporan pemilik mingguan | Format satu layar |

### Latihan bab ini

1. Jalankan P-119 hari ini. Prompt ini paling sering mengubah keputusan harga karena memaksa Anda menghitung waktu Anda sendiri sebagai biaya.
2. Jalankan P-107 dengan tanggal yang benar-benar ada di kalender Anda. Perbaiki minggu yang ditandai kritis sebelum belanja iklan berikutnya.
3. Jalankan P-120 setiap Jumat selama delapan minggu, lalu bandingkan keputusan yang Anda ambil di minggu pertama dan kedelapan.

### Kesalahan umum di bab ini

Menerima tarif pajak atau ketentuan resmi dari AI sebagai fakta akhir. Aturan perpajakan dan pelaporan berubah, dan sumber yang benar adalah kantor pelayanan pajak atau konsultan berlisensi Anda. Pakai prompt di bab ini untuk menyiapkan pertanyaan dan berkas, bukan untuk memutuskan kewajiban.
