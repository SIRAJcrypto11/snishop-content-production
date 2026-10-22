## 6. Riset pasar dan kompetitor

Bab ini untuk keputusan yang harus diambil sebelum keluar uang: masuk pasar mana, melawan siapa, dan dengan posisi apa. Semua prompt di sini mengasumsikan Anda punya data mentah dari lapangan, misalnya daftar harga kompetitor yang Anda catat manual dari halaman penjualannya, atau tangkapan ulasan yang Anda salin sendiri. AI bertugas menata dan menimbang, bukan mengarang data.

### P-001. Memetakan kompetitor dalam tiga lapis

Kapan pakai: Anda baru tahu dua atau tiga nama pesaing dan ingin melihat medan secara utuh.

> Anda analis pasar untuk UMKM Indonesia. Usaha saya: {produk} dengan harga jual {harga_jual}, dikirim dari {kota}, penjualan utama lewat {kanal}. Susun peta kompetitor tiga lapis: lapis satu pesaing langsung yang menjual produk serupa ke pembeli yang sama, lapis dua pesaing tidak langsung yang menyelesaikan kebutuhan yang sama dengan cara berbeda, lapis tiga ancaman pendatang yang bisa masuk dalam 12 bulan. Untuk tiap lapis sebutkan 5 nama tipe usahanya, ciri harga mereka, kekuatan yang membuat mereka menang, dan celah yang biasanya mereka abaikan. Sajikan sebagai tabel per lapis dengan kolom: tipe kompetitor, ciri harga, kekuatan, celah, dan cara saya memanfaatkan celah itu. Jangan menyebut nama merek spesifik kalau Anda tidak punya datanya, cukup tipe usahanya.

Variabel: {produk}, {harga_jual}, {kota}, {kanal}

Hasil yang diharapkan: tiga tabel berisi 15 tipe kompetitor beserta celah yang bisa Anda garap.

### P-002. Membedah penawaran kompetitor dari data halaman penjualannya

Kapan pakai: Anda sudah menyalin isi halaman penjualan satu kompetitor dan ingin tahu logika di baliknya.

> Anda penulis iklan direct response. Berikut saya tempel teks halaman penjualan kompetitor saya apa adanya: [tempel teks]. Bedah tulisannya menjadi enam bagian: janji utama, alasan percaya, bukti yang dipakai, penanganan keberatan, desakan, dan penawaran. Untuk tiap bagian tulis apa yang mereka lakukan, apakah kuat atau lemah, dan apa yang hilang. Lalu tutup dengan daftar lima keberatan pembeli yang belum mereka jawab sama sekali. Gunakan bahasa Indonesia. Jangan menambah asumsi tentang produk mereka di luar teks yang saya tempel.

Variabel: teks halaman penjualan yang Anda salin

Hasil yang diharapkan: bedahan enam bagian plus daftar celah pesan yang bisa Anda pakai.

### P-003. Menyusun tabel perbandingan harga yang jujur

Kapan pakai: Anda ingin menaikkan atau menurunkan harga dan butuh dasar pembanding.

> Anda ahli penetapan harga untuk ritel kecil. Ini data harga yang saya catat sendiri dari {jumlah_kompetitor} penjual {produk} di {kanal}: [tempel daftar harga]. Hitung rentang terendah sampai tertinggi, rata-rata, dan median. Lalu tempatkan posisi harga saya {harga_jual} di antara mereka dan jelaskan tiga skenario: saya di bawah median, saya di median, saya di atas median. Untuk tiap skenario tulis siapa pembeli yang cocok, apa yang harus saya buktikan ke pembeli itu, dan risiko terbesarnya. Sajikan sebagai tabel 4 kolom: skenario, pembeli yang cocok, bukti yang harus disiapkan, risiko utama.

Variabel: {jumlah_kompetitor}, daftar harga hasil pencatatan Anda, {harga_jual}, {kanal}

Hasil yang diharapkan: satu tabel tiga skenario harga beserta konsekuensinya.

### P-004. Mengolah ulasan pelanggan kompetitor jadi daftar peluang

Kapan pakai: Anda punya banyak salinan ulasan bintang satu sampai tiga dari penjual lain.

> Anda peneliti konsumen. Berikut ulasan pelanggan yang saya kumpulkan sendiri dari halaman penjual kompetitor: [tempel ulasan]. Kelompokkan keluhan menjadi maksimal 7 tema. Untuk tiap tema hitung berapa ulasan yang menyentuhnya, tulis kalimat keluhan paling khas dalam bentuk yang sudah saya samarkan tanpa menyebut nama pembeli, lalu usulkan satu perubahan konkret pada usaha {produk} saya yang bisa menutup tema itu beserta biaya relatifnya rendah, sedang, atau tinggi. Urutkan tabel dari tema yang paling sering muncul. Bahasa Indonesia, tanpa istilah riset yang tidak dijelaskan.

Variabel: kumpulan ulasan mentah, {produk}

Hasil yang diharapkan: tabel tema keluhan, frekuensi, dan perbaikan yang bisa dieksekusi.

### P-005. Menguji asumsi sebelum menghabiskan uang iklan

Kapan pakai: Anda yakin produk akan laku dan ingin bukti penolakan lebih dulu.

> Anda penasihat strategi yang bertugas membantah saya. Keyakinan saya tentang usaha {produk} saya: [tulis 3 sampai 5 keyakinan]. Untuk tiap keyakinan, tulis tiga alasan keyakinan itu bisa salah, satu uji murah yang biayanya di bawah Rp 500.000 dan bisa selesai dalam 7 hari, serta angka apa yang membuat keyakinan itu gugur. Sajikan sebagai tabel 4 kolom: keyakinan, alasan bisa salah, uji murah, angka gugur. Akhiri dengan urutan pengerjaan uji dari yang paling menentukan.

Variabel: {produk}, daftar keyakinan Anda

Hasil yang diharapkan: daftar uji murah berurutan beserta kriteria gagal.

### P-006. Memecah pasar jadi segmen yang bisa dikirim pesan berbeda

Kapan pakai: satu pesan promosi Anda terasa hambar untuk semua orang.

> Anda spesialis segmentasi pasar untuk usaha kecil dengan anggaran terbatas. Usaha saya menjual {produk} seharga {harga_jual} di {kota} lewat {kanal}. Bagi pasar saya menjadi 4 segmen berdasarkan alasan membeli, bukan berdasarkan usia dan jenis kelamin saja. Untuk tiap segmen tulis: situasi hidup mereka, pemicu yang membuat mereka mencari produk seperti saya, kalimat pembuka pesan yang cocok, keberatan nomor satu mereka, dan bukti yang paling mereka percaya. Sajikan sebagai tabel. Batasi tiap sel maksimal 25 kata supaya bisa langsung saya pakai.

Variabel: {produk}, {harga_jual}, {kota}, {kanal}

Hasil yang diharapkan: empat segmen dengan kalimat pembuka dan bukti yang berbeda.

### P-007. Menilai kejenuhan sebuah ceruk

Kapan pakai: Anda ingin menambah produk baru dan curiga pasarnya sudah penuh.

> Anda penganalisis kelayakan usaha. Saya mempertimbangkan menjual {produk_baru} di {kota} dengan perkiraan harga {harga_jual}. Nilai kejenuhan ceruk ini dengan enam tanda: jumlah penjual yang Anda perkirakan, sebaran harga, ketergantungan pada diskon, umur produk, ketersediaan pasokan, dan kekuatan merek yang sudah ada. Untuk tiap tanda beri penilaian longgar, sedang, atau padat beserta alasannya, lalu simpulkan apakah saya sebaiknya masuk, masuk dengan posisi berbeda, atau tidak masuk. Sajikan sebagai tabel 4 kolom: tanda, penilaian, alasan, akibatnya untuk saya. Akhiri dengan tiga posisi berbeda yang masih terbuka kalau saya tetap ingin masuk.

Variabel: {produk_baru}, {kota}, {harga_jual}

Hasil yang diharapkan: penilaian enam tanda dan kesimpulan masuk atau tidak masuk.

### P-008. Menyusun daftar pertanyaan wawancara pelanggan

Kapan pakai: Anda akan menghubungi 10 pembeli dan tidak ingin bertanya hal yang salah.

> Anda peneliti kualitatif. Saya akan mewawancarai 10 pembeli {produk} saya. Susun 12 pertanyaan wawancara yang semuanya tentang perilaku mereka di masa lalu, bukan tentang niat mereka di masa depan. Hindari pertanyaan apakah kamu suka, apakah kamu akan beli lagi, dan apa yang kamu inginkan. Untuk tiap pertanyaan tulis apa yang ingin saya ketahui darinya dan tanda bahaya jawaban yang membuat saya harus curiga data saya bias. Sajikan sebagai tabel 3 kolom: pertanyaan, tujuan, tanda bahaya. Urutkan dari pertanyaan pembuka yang paling nyaman dijawab lewat telepon. Batas tiap pertanyaan 20 kata.

Variabel: {produk}

Hasil yang diharapkan: panduan wawancara 12 pertanyaan siap pakai lewat telepon atau chat.

### P-009. Mengolah hasil wawancara jadi pola

Kapan pakai: catatan wawancara sudah menumpuk dan belum menjadi keputusan.

> Anda analis riset konsumen. Berikut catatan hasil wawancara saya dengan pembeli, sudah saya samarkan namanya: [tempel catatan]. Ekstrak 6 pola yang muncul di lebih dari separuh responden. Untuk tiap pola tulis berapa responden yang mendukung, kutipan pendek yang mewakili, dan keputusan usaha apa yang logis diambil dari pola itu. Lalu sebutkan tiga hal yang hanya muncul pada satu responden dan harus saya perlakukan sebagai anomali, bukan arahan. Sajikan sebagai dua tabel terpisah: pola kuat dan anomali. Bahasa Indonesia, tanpa jargon riset.

Variabel: catatan wawancara yang sudah disamarkan

Hasil yang diharapkan: enam pola siap jadi keputusan dan tiga anomali yang diabaikan dulu.

### P-010. Membandingkan dua kanal penjualan secara adil

Kapan pakai: Anda harus memilih membesarkan marketplace atau kanal sendiri.

> Anda analis kanal penjualan. Usaha saya {nama_usaha} menjual {produk} dengan {harga_jual} dan {modal_unit} modal per unit. Data kanal saya: [tempel angka biaya admin, ongkos, retur, dan jumlah pesanan per kanal]. Bandingkan kanal-kanal tersebut pada lima dimensi: biaya efektif per pesanan, kendali atas hubungan pelanggan, kecepatan kas masuk, kerentanan terhadap perubahan aturan kanal, dan potensi pertumbuhan. Hitung margin per pesanan untuk tiap kanal kalau datanya tersedia, tunjukkan rumusnya, dan tandai angka yang Anda perkirakan karena datanya tidak saya berikan. Sajikan sebagai tabel perbandingan dan satu rekomendasi urutan prioritas.

Variabel: {nama_usaha}, {produk}, {harga_jual}, {modal_unit}, angka per kanal

Hasil yang diharapkan: tabel lima dimensi, margin per pesanan, dan prioritas kanal.

### P-011. Membaca tren musiman dari data penjualan sendiri

Kapan pakai: Anda punya catatan penjualan 12 bulan dan bingung pola mana yang nyata.

> Anda analis data ritel. Berikut penjualan bulanan saya untuk {produk} selama 12 bulan terakhir dalam format bulan dan nilai: [tempel data]. Identifikasi tiga pola musiman yang paling kuat, tiga bulan paling lemah, dan apakah ada tren naik yang murni pertumbuhan bukan musim. Untuk tiap temuan tulis bukti angkanya dan satu tindakan yang sebaiknya saya siapkan 6 minggu sebelum bulan itu tiba. Kalau datanya terlalu sedikit untuk menarik kesimpulan, katakan langsung dan jelaskan data tambahan apa yang saya butuhkan. Jangan memaksakan pola.

Variabel: {produk}, data penjualan 12 bulan

Hasil yang diharapkan: temuan musiman berbasis angka beserta tindakan persiapan.

### P-012. Menyusun profil pembeli ideal yang bisa dipakai tim

Kapan pakai: karyawan baru Anda salah sasaran saat menghubungi calon pembeli.

> Anda manajer penjualan. Susun profil pembeli ideal untuk {produk} saya dalam format satu halaman yang bisa dipakai karyawan. Isi: situasi yang membuat mereka mencari solusi, tiga kriteria mereka memilih penjual, tiga hal yang membuat mereka membatalkan, harga psikologis yang nyaman untuk mereka, kanal yang paling mereka percaya, dan kalimat penutup yang efektif untuk mereka. Akhiri dengan daftar 8 pertanyaan penyaring yang harus diajukan karyawan sebelum melanjutkan penawaran. Sajikan sebagai daftar bernomor, tiap poin maksimal 25 kata, bahasa Indonesia yang bisa dibaca orang tanpa latar belakang pemasaran.

Variabel: {produk}

Hasil yang diharapkan: satu halaman profil pembeli plus daftar pertanyaan penyaring.

### P-013. Menilai kekuatan merek sendiri dibanding pesaing terdekat

Kapan pakai: Anda merasa produk lebih bagus tapi kalah penjualan.

> Anda konsultan merek untuk usaha kecil. Merek saya {nama_usaha} menjual {produk}. Pesaing terdekat saya: [tulis nama atau ciri pesaing]. Bandingkan kami pada tujuh titik sentuh: halaman penjualan, foto produk, ulasan, kecepatan balas chat, kemasan, layanan purnajual, dan harga. Untuk tiap titik beri skor 1 sampai 5 untuk kami dan untuk mereka, lalu tulis satu perbaikan yang hasilnya paling besar dengan usaha paling kecil. Sajikan sebagai tabel 5 kolom: titik sentuh, skor kami, skor mereka, selisih, perbaikan prioritas. Akhiri dengan urutan pengerjaan 30 hari.

Variabel: {nama_usaha}, {produk}, data pesaing

Hasil yang diharapkan: tabel skor tujuh titik sentuh dan rencana perbaikan 30 hari.

### P-014. Mencari celah produk dari kombinasi yang belum ada

Kapan pakai: pasar terasa penuh tapi Anda yakin ada kombinasi yang belum dijual.

> Anda perancang penawaran. Produk saya {produk} dengan {harga_jual}. Daftar isi yang saya jual sekarang: [tulis isi produk atau layanan]. Daftar kebutuhan pembeli yang sering saya dengar: [tulis 5 sampai 8 kebutuhan]. Cari kombinasi isi produk yang menutup kebutuhan tersebut tapi belum tersedia di pasar {kanal}. Hasilkan 6 ide penawaran, masing-masing dengan isi, untuk siapa, harga yang masuk akal berdasarkan {harga_jual}, dan alasan pembeli beralih dari pilihan yang ada. Sajikan sebagai tabel 5 kolom. Tandai ide yang paling berisiko dari sisi stok.

Variabel: {produk}, {harga_jual}, isi produk, daftar kebutuhan, {kanal}

Hasil yang diharapkan: enam penawaran baru dengan harga dan alasan pembeli beralih.

### P-015. Membuat ringkasan riset satu halaman untuk keputusan

Kapan pakai: riset sudah menumpuk dan Anda butuh satu halaman untuk memutuskan.

> Anda kepala strategi. Berikut catatan riset saya tentang {produk} di {kota}: [tempel ringkasan riset]. Susun memo satu halaman berisi: kesimpulan utama tiga kalimat, angka paling penting beserta sumbernya, tiga peluang yang bisa jalan bulan ini, tiga risiko yang bisa menggagalkan, dan satu keputusan yang saya harus ambil minggu ini beserta alternatifnya. Tulis untuk pembaca pemilik usaha, bukan untuk investor. Maksimal 400 kata, tanpa pembuka basa-basi, tanpa kalimat penutup yang mengulang isi.

Variabel: {produk}, {kota}, catatan riset

Hasil yang diharapkan: memo satu halaman yang berakhir pada satu keputusan.

### Ringkasan cepat bab ini

| Kode | Judul | Bentuk keluaran |
|---|---|---|
| P-001 | Peta kompetitor tiga lapis | Tiga tabel |
| P-002 | Bedah halaman penjualan pesaing | Enam bagian plus celah |
| P-003 | Tabel perbandingan harga | Tabel tiga skenario |
| P-004 | Ulasan pesaing jadi peluang | Tabel tema dan perbaikan |
| P-005 | Uji asumsi murah | Tabel uji dan kriteria gagal |
| P-006 | Segmentasi berbasis alasan beli | Tabel empat segmen |
| P-007 | Kejenuhan ceruk | Penilaian enam tanda |
| P-008 | Pertanyaan wawancara pelanggan | Tabel 12 pertanyaan |
| P-009 | Pola hasil wawancara | Dua tabel |
| P-010 | Bandingkan kanal penjualan | Tabel dan rekomendasi |
| P-011 | Tren musiman sendiri | Temuan dan tindakan |
| P-012 | Profil pembeli ideal | Satu halaman plus penyaring |
| P-013 | Skor merek vs pesaing | Tabel tujuh titik sentuh |
| P-014 | Celah kombinasi produk | Tabel enam ide |
| P-015 | Memo riset satu halaman | Memo 400 kata |

### Latihan bab ini

1. Jalankan P-003 dengan data harga yang Anda catat sendiri hari ini. Catat posisi Anda terhadap median.
2. Jalankan P-004 memakai minimal 15 ulasan. Kalau belum punya, kumpulkan dulu 15, karena hasilnya tidak berguna di bawah jumlah itu.
3. Ambil hasil P-006, lalu jalankan P-012 untuk satu segmen saja. Bandingkan apakah keduanya menunjuk orang yang sama.

### Kesalahan umum di bab ini

Meminta AI menyebut nama pesaing dan angkanya tanpa Anda beri data. AI akan mengarang nama yang terdengar masuk akal. Selalu tempel data hasil pencatatan Anda sendiri, dan perlukan angka yang AI perkirakan sebagai tanda tanya, bukan sebagai fakta.
