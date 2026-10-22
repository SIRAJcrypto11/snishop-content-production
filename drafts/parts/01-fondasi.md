## 1. Kenapa prompt Anda menghasilkan jawaban yang terasa kosong

Ada satu pola yang berulang pada pemilik usaha yang baru memakai AI. Mereka menulis permintaan seperti ini:

> Buatkan strategi marketing untuk toko kue saya.

Jawaban yang datang selalu terlihat rapi. Ada sembilan poin, ada istilah brand awareness, ada saran membuat konten reels, dan semuanya benar secara teori. Masalahnya, jawaban itu juga benar untuk toko kue di Bandung, bengkel motor di Makassar, dan konveksi di Sukabumi. Anda tidak membeli kebenaran umum. Anda membeli keputusan yang bisa dieksekusi besok pagi.

Penyebabnya hampir selalu tiga hal.

Pertama, tidak ada angka. AI tidak bisa menimbang pilihan kalau tidak tahu omzet Anda, harga jual Anda, dan berapa besar margin yang tersisa. Saran diskon 20 persen terasa murah untuk produk dengan margin 60 persen dan terasa bunuh diri untuk produk dengan margin 12 persen.

Kedua, tidak ada batasan. Tanpa batasan, AI memilih keluaran yang paling aman secara umum, yaitu paragraf panjang. Padahal Anda mungkin hanya butuh pesan WhatsApp 40 kata untuk mengirim ke 30 pelanggan lama.

Ketiga, tidak ada bentuk keluaran. Kata seperti tabel, daftar, atau draf pesan adalah bagian dari instruksi, bukan hiasan. Kalau Anda tidak menyebutnya, AI menebak, dan tebakannya jarang sama dengan yang Anda butuhkan.

Latih kebiasaan berikut sebelum membuka alat AI mana pun. Tulis dulu di kertas hasil akhir yang Anda mau, misalnya satu tabel berisi lima varian harga beserta marginnya. Setelah bentuknya jelas, baru susun prompt. Prompt hanyalah cara Anda menyampaikan hasil akhir itu ke mesin.

## 2. Anatomi prompt lima komponen

Semua prompt di buku ini disusun dari lima komponen. Kalau hasilnya mengecewakan, biasanya satu komponen hilang atau diisi terlalu tipis.

![Diagram lima komponen prompt: peran, konteks, tugas, format, dan batasan](../assets/anatomi-prompt.png)

Penjelasan tiap komponen.

| Komponen | Pertanyaan yang dijawab | Contoh isi untuk UMKM |
|---|---|---|
| Peran | Siapa yang harus menjawab | Akuntan manajemen untuk usaha kuliner, penulis iklan direct response, supervisor gudang |
| Konteks | Fakta apa yang benar | Produk, harga jual, modal, kota, jumlah pelanggan, alat yang dipakai, musim |
| Tugas | Kerja apa yang dikerjakan | Hitung, bandingkan, susun jadwal, tulis draf, buat daftar pertanyaan |
| Format | Bentuk keluaran | Tabel 5 kolom, urutan 7 langkah, pesan 40 kata, skrip 30 detik |
| Batasan | Apa yang dilarang | Tanpa klaim berlebihan, maksimal 200 kata, bahasa Indonesia santai, hindari istilah teknis |

Komponen peran sering dianggap hiasan. Sebenarnya peran bekerja karena ia mempersempit gaya dan prioritas. Auditor pajak akan mendahulukan kepatuhan dan risiko. Penulis iklan akan mendahulukan daya tarik dan alasan membeli. Tugas yang sama menghasilkan keluaran yang sangat berbeda tergantung peran yang Anda pasang.

Komponen konteks adalah yang paling mahal. Konteks yang baik berisi angka milik Anda sendiri. Bandingkan dua kalimat berikut.

Konteks lemah: toko saya jualan batik dan ingin naikkan penjualan.

Konteks kuat: toko saya menjual kemeja batik tulis lengan panjang, harga jual Rp 385.000, modal produksi Rp 210.000 per potong, stok siap kirim 64 potong, pelanggan utama pria usia 30 sampai 45 tahun di Surabaya, penjualan 90 persen lewat WhatsApp dan marketplace Shopee, rata-rata 22 pesanan per bulan.

Kalimat kedua memungkinkan AI menghitung titik impas biaya iklan, membandingkan strategi diskon dengan bundel, dan memberi batas aman yang bisa Anda pegang. Kalimat pertama hanya menghasilkan daftar saran yang bisa Anda tulis sendiri.

## 3. Memilih alat untuk pekerjaan bisnis

Empat alat di bawah ini yang paling sering dipakai pelaku usaha di Indonesia. Karakternya berbeda, dan pekerjaan tertentu lebih cocok ke satu alat daripada alat lain.

| Alat | Kuat untuk | Kurang kuat untuk | Kebiasaan pakai yang disarankan |
|---|---|---|---|
| ChatGPT | Perencanaan harian, copywriting pendek, brainstorming nama dan penawaran | Verifikasi angka panjang tanpa Anda cek ulang | Kirim satu tugas per sesi, simpan sesi per kasus |
| Claude | Dokumen panjang, merapikan standar operasional, menganalisis laporan yang Anda tempel | Tugas sangat pendek dan cepat | Tempel dokumen utuh, minta tabel ringkasan |
| Gemini | Riset yang butuh data terkini, terhubung ke Sheets dan Docs | Nuansa bahasa Indonesia yang sangat lokal | Minta sumber, lalu cek sendiri angkanya |
| Copilot | Ringkasan email dan dokumen kantor, pekerjaan di dalam Microsoft 365 | Perencanaan strategis yang dalam | Pakai untuk pekerjaan administratif berulang |

Satu hal yang berlaku di semua alat: jangan menaruh data pribadi pelanggan ke dalam prompt. Nama pelanggan, nomor telepon, alamat lengkap, dan nomor rekening tidak perlu dikirim. Ganti dengan label seperti Pelanggan A atau Pelanggan B. Aturan ini ada di bab layanan pelanggan dan perlu Anda jadikan standar perusahaan, bukan hanya saran.

## 4. Variabel, aturan penamaan, dan penyimpanan

Semua prompt di buku ini memakai variabel di dalam kurung kurawal. Variabel adalah bagian yang Anda ganti.

Aturan penamaan yang dipakai konsisten di seluruh buku dan di berkas Excel pendamping.

| Variabel | Isi | Contoh |
|---|---|---|
| {nama_usaha} | Nama merek atau toko | Dapur Raisa |
| {produk} | Produk atau layanan utama | Nasi karamel ayam crispy |
| {harga_jual} | Harga per unit ke pembeli akhir | Rp 28.000 |
| {modal_unit} | Biaya untuk memproduksi satu unit | Rp 15.400 |
| {omzet_bulanan} | Rata-rata penjualan per bulan | Rp 42.000.000 |
| {kota} | Lokasi usaha dan pengiriman utama | Semarang |
| {kanal} | Tempat penjualan terjadi | WhatsApp, Shopee, TikTok Shop, GoFood |
| {jumlah_pelanggan} | Basis pelanggan aktif | 320 |
| {target} | Sasaran yang ingin dicapai | Naik 25 persen dalam 3 bulan |
| {musim} | Momen yang sedang dihadapi | Ramadhan, tahun ajaran baru, 12.12 |

Cara menyimpan supaya library ini bertambah kuat, bukan menumpuk.

1. Salin prompt yang sudah Anda isi ke berkas Excel pendamping, bukan ke catatan chat. Chat akan hilang, berkas akan diwariskan.
2. Isi kolom Tanggal Uji dan Alat setiap kali mencoba. Setelah tiga puluh baris, Anda akan melihat pola alat mana yang paling cocok untuk kasus Anda.
3. Kalau satu prompt menghasilkan keluaran bagus, tambahkan konteks yang membuat bagus itu ke dalam prompt. Prompt Anda harus ikut menajam, tidak tetap statis.
4. Pisahkan prompt per departemen. Bagian keuangan dan bagian iklan memakai konteks yang berbeda dan tidak perlu saling menimpa.

## 5. Latihan fondasi

Kerjakan tiga latihan ini sebelum masuk ke library. Semuanya memakai data asli usaha Anda.

Latihan 1, menulis konteks.

Tulis satu paragraf konteks usaha Anda dengan minimal enam angka: harga jual, modal per unit, omzet bulanan, jumlah pelanggan aktif, rata-rata pesanan per bulan, dan kota. Target 60 sampai 90 kata. Simpan paragraf ini. Anda akan menempelnya ke puluhan prompt di bab berikutnya.

Latihan 2, mengubah keinginan jadi tugas.

Ambil satu keinginan kabur, misalnya ingin tambah pelanggan. Ubah menjadi tugas yang bisa dijawab dalam satu balasan, misalnya menyusun daftar 12 kanal akuisisi pelanggan yang biayanya di bawah Rp 500.000 per bulan untuk usaha katering rumahan, diurutkan dari yang paling cepat menghasilkan.

Latihan 3, mengunci format.

Untuk tugas pada latihan 2, tentukan bentuk keluaran: tabel 5 kolom berisi kanal, estimasi biaya, waktu sampai penjualan pertama, risiko, dan langkah pertama. Perhatikan bahwa dengan format ini Anda bisa langsung memindahkan hasilnya ke spreadsheet tanpa menulis ulang.

Setelah tiga latihan ini selesai, Anda sudah punya bagian konteks, tugas, dan format. Dua komponen sisanya, yaitu peran dan batasan, tinggal dipilih per kasus.

![Diagram siklus kerja enam langkah dari tujuan sampai prompt tersimpan](../assets/siklus-kerja-prompt.png)

Gunakan matriks berikut untuk menilai cepat apakah sebuah prompt layak dikirim. Kalau posisi Anda ada di kuadran kiri, tambahkan konteks. Kalau ada di kuadran bawah, pertajam tugasnya.

![Diagram matriks kualitas prompt dengan empat kuadran](../assets/matriks-kualitas-prompt.png)

Bagian II, Library Prompt per Kasus Bisnis
