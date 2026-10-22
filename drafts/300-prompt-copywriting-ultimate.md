# 300 Prompt AI untuk Copywriting dan Iklan Digital

**Edisi Ultimate dengan Contoh Output AI dan Panduan Otomasi**

Disusun oleh: Siraj Nur Ihrom, Founder SNISHOP
Edisi Ultimate, Oktober 2026
Format: 300 prompt lengkap dengan contoh output AI dan panduan otomasi Make.com, Zapier, dan n8n
Pendamping: Berkas Excel 300 baris prompt siap saring dan kolom pelacakan pemakaian

## Tentang Edisi Ultimate

Edisi Ultimate berisi semua 300 prompt dari edisi Basic, contoh output nyata dari ChatGPT dan Gemini, plus panduan otomasi untuk mengintegrasikan AI ke dalam workflow bisnis Anda. Anda tidak hanya mendapat prompt, tapi juga cara mengotomasi produksi konten dengan Make.com, Zapier, dan n8n.

Yang Anda dapatkan di edisi Ultimate:
- Semua 300 prompt dengan teks lengkap
- Contoh output ChatGPT untuk 3-5 prompt kunci per bagian
- Contoh output Gemini untuk prompt yang sama
- Perbandingan kualitas antara kedua alat
- Catatan kapan harus pakai ChatGPT vs Gemini
- Berkas Excel pendamping dengan 300 baris prompt
- Panduan otomasi Make.com untuk 10 workflow konten
- Panduan otomasi Zapier untuk 10 workflow konten
- Panduan otomasi n8n untuk 10 workflow konten
- Template kode Node.js, Python, dan PHP untuk custom integration
- Studi kasus 4 bisnis yang sudah mengotomasi konten mereka
- Troubleshooting guide untuk integrasi AI

## Cara Menggunakan Buku Ini

Setiap prompt memakai format yang sama. Anda tidak perlu membaca berurutan. Buka bagian yang kasusnya sedang Anda hadapi, ambil kode prompt, lalu isi bagian di dalam kurung siku dengan data bisnis Anda sendiri.

Struktur tiap entri:

| Bagian | Fungsi |
|---|---|
| Kode | Nomor tetap, dipakai juga di berkas Excel pendamping |
| Kapan pakai | Kondisi nyata yang membuat prompt ini relevan |
| Isi prompt | Teks yang Anda salin utuh ke alat AI pilihan Anda |
| Variabel | Data yang wajib Anda ganti sebelum mengirim |
| Hasil yang diharapkan | Bentuk keluaran yang bisa Anda periksa |
| Contoh output | Hasil nyata dari ChatGPT dan Gemini (hanya di edisi Premium) |

Tiga aturan yang membuat library ini bekerja:

1. Jangan mengirim prompt dengan kurung siku yang masih utuh. Prompt seperti itu hanya akan menghasilkan jawaban generik.
2. Ganti konteks setiap kali kondisi bisnis berubah. Harga, kota, dan skala omzet adalah bahan bakar utama jawaban AI.
3. Simpan versi yang terbukti menghasilkan di berkas Excel pendamping, kolom Catatan. Catat tanggal dan alat yang dipakai.

## Standar Kualitas

Semua prompt dalam buku ini mengikuti standar anti-AI-slop:
- Tidak menggunakan em-dash atau en-dash
- Tidak ada asterisk markers di luar code block
- Tidak ada emoji atau icon AI
- Bahasa Indonesia yang natural dan profesional
- Contoh konkret dengan angka dan data
- Struktur yang jelas dan mudah diikuti

---

## Bagian 1: Copywriting Dasar

Bagian ini berisi 50 prompt untuk copywriting fundamental. Gunakan prompt-prompt ini ketika Anda butuh membuat konten marketing inti: headline, deskripsi produk, call-to-action, dan storytelling.

---

### P-001. Headline Produk Fisik

Kapan pakai:
> Membuat judul produk untuk marketplace atau katalog online

Variabel:
- [NAMA_PRODUK]: nama produk yang dijual
- [MANFAAT_UTAMA]: manfaat paling penting bagi pembeli
- [TARGET_PASAR]: siapa yang akan membeli

Prompt:
> Buat 5 variasi headline untuk [NAMA_PRODUK] yang menonjolkan [MANFAAT_UTAMA] untuk [TARGET_PASAR]. Setiap headline maksimal 10 kata, menggunakan bahasa Indonesia yang natural, dan mengandung angka atau kata sifat spesifik. Hindari kata-kata klise seperti "terbaik", "nomor satu", atau "terpercaya".

Hasil yang diharapkan:
Lima headline yang berbeda sudut pandang, masing-masing 7-10 kata, dengan minimal satu angka atau spesifikasi konkret.

---

### P-002. Headline Jasa Profesional

Kapan pakai:
> Membuat judul layanan untuk website jasa atau proposal

Variabel:
- [JENIS_JASA]: jenis layanan yang ditawarkan
- [HASIL_KLIEN]: hasil yang didapat klien setelah menggunakan jasa
- [DURASI]: waktu yang dibutuhkan untuk mencapai hasil

Prompt:
> Tulis 5 headline untuk jasa [JENIS_JASA] yang menjanjikan [HASIL_KLIEN] dalam [DURASI]. Gunakan formula "Hasil + Waktu + Tanpa [kendala umum]". Setiap headline harus spesifik dan dapat dibuktikan. Hindari janji yang berlebihan atau tidak realistis.

Hasil yang diharapkan:
Lima headline dengan struktur hasil-waktu-tanpa-kendala, masing-masing mengandung angka waktu dan satu kendala yang dihilangkan.

---

### P-003. Deskripsi Produk Pendek

Kapan pakai:
> Membuat deskripsi produk untuk katalog, marketplace, atau brosur

Variabel:
- [NAMA_PRODUK]: nama produk
- [FITUR_UTAMA]: 3 fitur utama produk
- [MANFAAT]: manfaat yang didapat pembeli
- [HARGA]: harga produk

Prompt:
> Buat deskripsi produk [NAMA_PRODUK] dalam 3 paragraf pendek (total 80-100 kata). Paragraf pertama menjelaskan [FITUR_UTAMA] dengan bahasa sederhana. Paragraf kedua menjelaskan [MANFAAT] yang didapat pembeli. Paragraf ketiga menyebutkan [HARGA] dan satu alasan mengapa harga tersebut worth it. Gunakan kalimat aktif dan hindari kata sifat berlebihan.

Hasil yang diharapkan:
Tiga paragraf dengan total 80-100 kata, masing-masing paragraf fokus pada fitur, manfaat, dan harga dengan justifikasi nilai.

---

### P-004. Deskripsi Produk Detail

Kapan pakai:
> Membuat deskripsi lengkap untuk landing page atau katalog premium

Variabel:
- [NAMA_PRODUK]: nama produk
- [SPESIFIKASI_TEKNIS]: detail teknis produk
- [KEUNGGULAN]: 3 keunggulan dibanding kompetitor
- [GARANSI]: informasi garansi atau jaminan

Prompt:
> Tulis deskripsi produk [NAMA_PRODUK] dalam format berikut:
> - Pembuka 2 kalimat yang menjelaskan masalah yang diselesaikan produk
> - Daftar 5 spesifikasi teknis dari [SPESIFIKASI_TEKNIS] dalam format bullet point
> - Tiga paragraf yang masing-masing menjelaskan satu keunggulan dari [KEUNGGULAN]
> - Penutup yang menyebutkan [GARANSI] dan call-to-action untuk membeli
> Total panjang 250-300 kata. Gunakan bahasa yang informatif tanpa terkesan menjual secara agresif.

Hasil yang diharapkan:
Deskripsi terstruktur dengan pembuka masalah, spesifikasi teknis, tiga keunggulan, dan penutup dengan garansi. Total 250-300 kata.

---

### P-005. Call-to-Action Langsung

Kapan pakai:
> Membuat tombol atau kalimat ajakan untuk pembelian langsung

Variabel:
- [PRODUK]: nama produk atau layanan
- [DISKON]: penawaran khusus jika ada
- [BATAS_WAKTU]: deadline penawaran

Prompt:
> Buat 10 variasi call-to-action untuk [PRODUK] dengan [DISKON] yang berlaku hingga [BATAS_WAKTU]. Lima variasi menggunakan kata kerja imperatif (Beli, Dapatkan, Pesan). Lima variasi menggunakan pertanyaan retoris atau pernyataan manfaat. Setiap CTA maksimal 8 kata. Hindari kata "sekarang" yang berlebihan.

Hasil yang diharapkan:
Sepuluh CTA dengan 5 imperatif dan 5 pertanyaan/pernyataan, masing-masing 5-8 kata, mengandung informasi diskon dan batas waktu.

---

### P-006. Call-to-Action Soft Sell

Kapan pakai:
> Membuat ajakan untuk konten edukatif atau nurturing sequence

Variabel:
- [KONTEN]: jenis konten yang ditawarkan (ebook, webinar, konsultasi)
- [MASALAH]: masalah yang dihadapi target audiens
- [SOLUSI]: bagaimana konten ini membantu

Prompt:
> Tulis 8 call-to-action soft sell untuk [KONTEN] yang menyelesaikan [MASALAH] melalui [SOLUSI]. Gunakan pendekatan "pelajari lebih lanjut" atau "dapatkan panduan" bukan "beli sekarang". Setiap CTA 6-10 kata, menggunakan kata "gratis", "pelajari", atau "temukan". Hindari tekanan waktu atau scarcity.

Hasil yang diharapkan:
Delapan CTA dengan pendekatan edukatif, masing-masing 6-10 kata, menggunakan kata kunci pembelajaran tanpa tekanan pembelian.

---

### P-007. Storytelling Asal-Usul Merek

Kapan pakai:
> Membuat cerita asal-usul brand untuk halaman About atau konten marketing

Variabel:
- [NAMA_BRAND]: nama brand atau bisnis
- [PENDIRI]: nama pendiri
- [MOMEN_INSPIRASI]: momen yang menginspirasi pendirian bisnis
- [MISI]: misi atau tujuan bisnis

Prompt:
> Tulis cerita asal-usul [NAMA_BRAND] dalam 4 paragraf (total 200-250 kata). Paragraf pertama memperkenalkan [PENDIRI] dan situasi sebelum mendirikan bisnis. Paragraf kedua menjelaskan [MOMEN_INSPIRASI] yang memicu pendirian. Paragraf ketiga menjelaskan tantangan awal dan bagaimana bisnis berkembang. Paragraf keempat menjelaskan [MISI] dan visi ke depan. Gunakan sudut pandang orang pertama atau ketiga secara konsisten. Buat cerita yang relatable dan inspiratif tanpa terkesan dramatis.

Hasil yang diharapkan:
Cerita 4 paragraf dengan total 200-250 kata, mengalir dari situasi awal, momen inspirasi, tantangan, hingga visi masa depan.

---

### P-008. Storytelling Testimoni Pelanggan

Kapan pakai:
> Membuat narasi testimoni untuk konten marketing atau case study

Variabel:
- [NAMA_PELANGGAN]: nama pelanggan (boleh inisial)
- [MASALAH_AWAL]: masalah yang dihadapi sebelum menggunakan produk
- [SOLUSI]: bagaimana produk membantu
- [HASIL]: hasil konkret yang didapat
- [DURASI]: waktu yang dibutuhkan untuk melihat hasil

Prompt:
> Tulis testimoni [NAMA_PELANGGAN] dalam format cerita 3 paragraf (total 150-180 kata). Paragraf pertama menjelaskan [MASALAH_AWAL] dan dampaknya pada bisnis atau kehidupan sehari-hari. Paragraf kedua menjelaskan bagaimana menemukan dan menggunakan [SOLUSI]. Paragraf ketiga menjelaskan [HASIL] yang didapat dalam [DURASI], dengan angka spesifik jika memungkinkan. Gunakan kutipan langsung dalam tanda kutip untuk membuat testimoni terasa autentik.

Hasil yang diharapkan:
Testimoni 3 paragraf dengan total 150-180 kata, berisi kutipan langsung, menjelaskan masalah-solusi-hasil dengan angka konkret.

---

### P-009. Pernyataan Proposisi Nilai

Kapan pakai:
> Membuat pernyataan nilai inti untuk positioning brand

Variabel:
- [PRODUK_LAYANAN]: produk atau layanan yang ditawarkan
- [TARGET_AUDIENCE]: siapa target pasar utama
- [MASALAH_UTAMA]: masalah utama yang diselesaikan
- [DIFFERENTIATOR]: apa yang membedakan dari kompetitor

Prompt:
> Buat value proposition statement untuk [PRODUK_LAYANAN] yang ditujukan kepada [TARGET_AUDIENCE] yang mengalami [MASALAH_UTAMA]. Gunakan formula: "Untuk [target] yang [masalah], [produk] adalah [kategori] yang [differentiator]". Buat 5 variasi dengan sudut pandang berbeda: (1) fokus pada hasil, (2) fokus pada proses, (3) fokus pada kecepatan, (4) fokus pada kemudahan, (5) fokus pada kualitas. Setiap statement 20-30 kata.

Hasil yang diharapkan:
Lima value proposition statement dengan 20-30 kata masing-masing, mengikuti formula yang diberikan dengan fokus berbeda.

---

### P-010. Elevator Pitch

Kapan pakai:
> Membuat pitch singkat untuk presentasi atau networking

Variabel:
- [NAMA_PERUSAHAAN]: nama perusahaan atau startup
- [PRODUK_UTAMA]: produk atau layanan utama
- [TARGET_PASAR]: siapa yang dilayani
- [MASALAH_YANG_DISELESAIKAN]: masalah utama pelanggan
- [KEUNGGULAN]: keunggulan kompetitif

Prompt:
> Tulis elevator pitch untuk [NAMA_PERUSAHAAN] dalam 30 detik bicara (sekitar 75-90 kata). Mulai dengan pertanyaan yang menggambarkan [MASALAH_YANG_DISELESAIKAN] yang dihadapi [TARGET_PASAR]. Jelaskan bagaimana [PRODUK_UTAMA] menyelesaikan masalah tersebut dengan [KEUNGGULAN]. Akhiri dengan call-to-action untuk langkah selanjutnya. Pitch harus mudah dipahami oleh orang awam dan tidak menggunakan jargon teknis.

Hasil yang diharapkan:
Pitch 75-90 kata dengan struktur pertanyaan-masalah-solusi-CTA, menggunakan bahasa sederhana tanpa jargon.

---

### P-011. Tagline Merek

Kapan pakai:
> Membuat slogan atau tagline untuk brand identity

Variabel:
- [NAMA_BRAND]: nama brand
- [NILAI_INTI]: nilai utama yang ingin disampaikan
- [PERSONALITAS_BRAND]: karakter brand (profesional, santai, inovatif, dll)

Prompt:
> Buat 10 variasi tagline untuk [NAMA_BRAND] yang mencerminkan [NILAI_INTI] dengan [PERSONALITAS_BRAND]. Lima tagline menggunakan 3-5 kata, lima tagline menggunakan 6-8 kata. Hindari klise seperti "terbaik untuk Anda" atau "solusi lengkap". Gunakan kata kerja aktif atau kata sifat yang kuat. Setiap tagline harus mudah diingat dan mencerminkan esensi brand.

Hasil yang diharapkan:
Sepuluh tagline dengan 5 pendek (3-5 kata) dan 5 sedang (6-8 kata), menggunakan kata aktif dan mencerminkan nilai inti.

---

### P-012. Pernyataan Misi

Kapan pakai:
> Membuat pernyataan misi untuk website atau dokumen perusahaan

Variabel:
- [NAMA_PERUSAHAAN]: nama perusahaan
- [BIDANG_USAHA]: industri atau bidang usaha
- [TUJUAN_PERUSAHAAN]: tujuan utama perusahaan
- [NILAI_YANG_DIPEGANG]: nilai-nilai inti perusahaan

Prompt:
> Tulis mission statement untuk [NAMA_PERUSAHAAN] dalam 2-3 kalimat (40-60 kata total). Kalimat pertama menjelaskan apa yang dilakukan perusahaan di [BIDANG_USAHA]. Kalimat kedua menjelaskan [TUJUAN_PERUSAHAAN] dan dampaknya bagi pelanggan atau masyarakat. Kalimat ketiga (opsional) menjelaskan [NILAI_YANG_DIPEGANG] yang menjadi panduan dalam beroperasi. Gunakan bahasa yang inspiratif namun konkret, hindari kata-kata kosong seperti "terdepan" atau "inovatif" tanpa konteks.

Hasil yang diharapkan:
Mission statement 2-3 kalimat dengan 40-60 kata, menjelaskan apa-tujuan-nilai secara konkret dan inspiratif.

---

### P-013. Pernyataan Visi

Kapan pakai:
> Membuat pernyataan visi untuk jangka panjang perusahaan

Variabel:
- [NAMA_PERUSAHAAN]: nama perusahaan
- [VISI_JANGKA_PANJANG]: cita-cita perusahaan dalam 5-10 tahun
- [DAMPAK_YANG_INGIN_DICAPAI]: dampak yang ingin diberikan

Prompt:
> Tulis vision statement untuk [NAMA_PERUSAHAAN] dalam 1-2 kalimat (25-40 kata). Kalimat pertama menjelaskan [VISI_JANGKA_PANJANG] sebagai tujuan masa depan. Kalimat kedua (opsional) menjelaskan [DAMPAK_YANG_INGIN_DICAPAI] bagi pelanggan, industri, atau masyarakat. Gunakan bahasa yang visioner namun tetap dapat dibayangkan pencapaiannya. Hindari kata "menjadi yang terbaik" tanpa spesifikasi bidang atau standar.

Hasil yang diharapkan:
Vision statement 1-2 kalimat dengan 25-40 kata, menjelaskan visi masa depan dan dampak yang ingin dicapai.

---

### P-014. Janji Merek

Kapan pakai:
> Membuat janji brand kepada pelanggan

Variabel:
- [NAMA_BRAND]: nama brand
- [JANJI_UTAMA]: janji utama kepada pelanggan
- [BUKTI_JANJI]: bagaimana janji ini dapat dibuktikan

Prompt:
> Buat brand promise untuk [NAMA_BRAND] dalam 1 kalimat (15-25 kata) yang menyatakan [JANJI_UTAMA]. Janji harus spesifik, dapat diukur, dan didukung oleh [BUKTI_JANJI]. Hindari janji yang tidak dapat dipenuhi atau terlalu umum seperti "kepuasan terbaik". Gunakan kata kerja aktif dan bahasa yang meyakinkan tanpa berlebihan.

Hasil yang diharapkan:
Brand promise 1 kalimat dengan 15-25 kata, spesifik, dapat diukur, dan didukung bukti.

---

### P-015. Unique Selling Proposition

Kapan pakai:
> Menjelaskan apa yang membedakan produk dari kompetitor

Variabel:
- [NAMA_PRODUK]: nama produk
- [FITUR_UNIK]: fitur yang tidak dimiliki kompetitor
- [MANFAAT_FITUR]: manfaat dari fitur unik tersebut
- [TARGET_PASAR]: siapa yang akan menghargai fitur ini

Prompt:
> Tulis unique selling proposition untuk [NAMA_PRODUK] dalam 2-3 kalimat (40-60 kata). Kalimat pertama menjelaskan [FITUR_UNIK] yang tidak dimiliki kompetitor. Kalimat kedua menjelaskan [MANFAAT_FITUR] bagi [TARGET_PASAR]. Kalimat ketiga (opsional) memberikan bukti atau data pendukung. Fokus pada perbedaan konkret, bukan klaim subjektif seperti "lebih baik" tanpa penjelasan.

Hasil yang diharapkan:
USP 2-3 kalimat dengan 40-60 kata, menjelaskan fitur unik, manfaat, dan bukti pendukung.

---

### P-016. Daftar Manfaat Produk

Kapan pakai:
> Membuat daftar manfaat produk untuk marketing material

Variabel:
- [NAMA_PRODUK]: nama produk
- [FITUR_TEKNIS]: daftar fitur teknis produk
- [TARGET_USER]: siapa yang menggunakan produk

Prompt:
> Buat daftar 10 manfaat [NAMA_PRODUK] untuk [TARGET_USER]. Setiap manfaat menjelaskan bagaimana satu [FITUR_TEKNIS] membantu pengguna dalam situasi nyata. Format: "Manfaat [angka]: [Fitur] membantu Anda [manfaat konkret] sehingga [hasil yang didapat]". Gunakan bahasa yang berfokus pada pengguna ("Anda"), bukan pada produk. Hindari pengulangan manfaat yang sama dengan kata berbeda.

Hasil yang diharapkan:
Daftar 10 manfaat dengan format yang konsisten, masing-masing menghubungkan fitur dengan hasil konkret bagi pengguna.

---

### P-017. Penerjemahan Fitur ke Manfaat

Kapan pakai:
> Mengubah spesifikasi teknis menjadi bahasa manfaat

Variabel:
- [FITUR_TEKNIS]: spesifikasi atau fitur teknis produk
- [TARGET_AUDIENCE]: siapa yang membaca (teknis atau awam)

Prompt:
> Terjemahkan 5 fitur teknis berikut menjadi bahasa manfaat untuk [TARGET_AUDIENCE]:
> 1. [FITUR_TEKNIS_1]
> 2. [FITUR_TEKNIS_2]
> 3. [FITUR_TEKNIS_3]
> 4. [FITUR_TEKNIS_4]
> 5. [FITUR_TEKNIS_5]
> Untuk setiap fitur, tulis: "Fitur: [spesifikasi] → Manfaat: [apa yang didapat pengguna] → Hasil: [dampak pada kehidupan atau bisnis pengguna]". Gunakan analogi atau contoh jika target audiens awam.

Hasil yang diharapkan:
Lima translasi fitur-manfaat-hasil yang sesuai dengan level teknis target audiens.

---

### P-018. FAQ Penanganan Keberatan

Kapan pakai:
> Membuat FAQ untuk mengatasi keraguan calon pembeli

Variabel:
- [PRODUK_LAYANAN]: produk atau layanan yang dijual
- [HARGA]: harga produk atau layanan
- [OBJEKSI_UMUM]: 3 keraguan umum yang sering muncul

Prompt:
> Buat 5 pertanyaan FAQ yang mengatasi [OBJEKSI_UMUM] untuk [PRODUK_LAYANAN] seharga [HARGA]. Setiap pertanyaan dimulai dengan keraguan pelanggan ("Apakah...", "Bagaimana jika...", "Mengapa..."). Jawaban harus: (1) mengakui keraguan tersebut valid, (2) memberikan penjelasan atau bukti, (3) mengarahkan pada manfaat atau solusi. Gunakan bahasa yang empatik dan tidak defensif. Setiap jawaban 40-60 kata.

Hasil yang diharapkan:
Lima FAQ dengan struktur keraguan-pengakuan-penjelasan-solusi, masing-masing 40-60 kata.

---

### P-019. Alasan di Balik Harga

Kapan pakai:
> Menjelaskan mengapa harga produk layak

Variabel:
- [NAMA_PRODUK]: nama produk
- [HARGA]: harga produk
- [KOMPETITOR]: harga kompetitor untuk produk serupa
- [NILAI_TAMBAH]: apa yang membuat produk ini lebih bernilai

Prompt:
> Tulis penjelasan mengapa [NAMA_PRODUK] seharga [HARGA] layak dibeli, meskipun [KOMPETITOR] menawarkan harga lebih murah. Fokus pada [NILAI_TAMBAH] yang tidak dimiliki kompetitor. Gunakan struktur: (1) Akui bahwa ada opsi lebih murah, (2) Jelaskan apa yang membuat produk ini berbeda, (3) Hitung ROI atau nilai yang didapat pelanggan dalam jangka panjang, (4) Berikan jaminan atau garansi untuk mengurangi risiko. Total 150-200 kata.

Hasil yang diharapkan:
Penjelasan 150-200 kata dengan struktur pengakuan-diferensiasi-ROI-jaminan.

---

### P-020. Pengumuman Penawaran Terbatas

Kapan pakai:
> Mengumumkan penawaran terbatas untuk meningkatkan urgency

Variabel:
- [PRODUK]: nama produk
- [DISKON]: besaran diskon atau penawaran
- [BATAS_WAKTU]: deadline penawaran
- [ALASAN_PENAWARAN]: mengapa penawaran ini diberikan

Prompt:
> Tulis pengumuman penawaran terbatas untuk [PRODUK] dengan [DISKON] hingga [BATAS_WAKTU]. Jelaskan [ALASAN_PENAWARAN] secara singkat untuk membuat penawaran terasa legitimate. Gunakan struktur: (1) Headline yang menarik perhatian, (2) Penjelasan penawaran dan nilainya, (3) Batas waktu yang jelas, (4) Call-to-action untuk memanfaatkan penawaran. Hindari tekanan berlebihan atau manipulasi. Total 100-120 kata.

Hasil yang diharapkan:
Pengumuman 100-120 kata dengan headline, penjelasan, batas waktu, dan CTA yang jelas.

---

### P-021. Pengumuman Peluncuran Produk

Kapan pakai:
> Mengumumkan peluncuran produk baru

Variabel:
- [NAMA_PRODUK]: nama produk baru
- [MASALAH_YANG_DISELESAIKAN]: masalah utama yang diselesaikan produk
- [FITUR_UTAMA]: 3 fitur utama produk
- [HARGA_PERKENALAN]: harga khusus selama periode peluncuran
- [TANGGAL_PELUNCURAN]: kapan produk tersedia

Prompt:
> Tulis pengumuman peluncuran [NAMA_PRODUK] yang menyelesaikan [MASALAH_YANG_DISELESAIKAN]. Soroti [FITUR_UTAMA] sebagai keunggulan utama. Sebutkan [HARGA_PERKENALAN] yang berlaku hingga 2 minggu setelah [TANGGAL_PELUNCURAN]. Gunakan struktur: (1) Headline yang mengumumkan peluncuran, (2) Penjelasan masalah yang diselesaikan, (3) Tiga fitur utama dengan manfaatnya, (4) Informasi harga perkenalan dan cara membeli. Total 200-250 kata.

Hasil yang diharapkan:
Pengumuman 200-250 kata dengan struktur headline-masalah-fitur-harga-CTA.

---

### P-022. Pengumuman Pembaruan Produk

Kapan pakai:
> Mengumumkan pembaruan atau fitur baru pada produk yang sudah ada

Variabel:
- [NAMA_PRODUK]: nama produk
- [FITUR_BARU]: fitur atau pembaruan baru
- [MANFAAT_FITUR_BARU]: bagaimana fitur baru membantu pengguna
- [CARA_MENGAKSES]: bagaimana pengguna bisa mengakses fitur baru

Prompt:
> Tulis pengumuman pembaruan [NAMA_PRODUK] yang memperkenalkan [FITUR_BARU]. Jelaskan [MANFAAT_FITUR_BARU] dengan contoh penggunaan nyata. Berikan instruksi [CARA_MENGAKSES] fitur baru tersebut. Gunakan nada yang antusias namun tidak berlebihan. Fokus pada nilai yang didapat pengguna, bukan hanya daftar perubahan teknis. Total 120-150 kata.

Hasil yang diharapkan:
Pengumuman 120-150 kata yang menjelaskan fitur baru, manfaat, dan cara mengakses dengan nada positif.

---

### P-023. Copy Promosi Musiman

Kapan pakai:
> Membuat konten promosi untuk momen tertentu (lebaran, natal, tahun baru)

Variabel:
- [MOMEN]: momen atau perayaan tertentu
- [PRODUK]: produk yang dipromosikan
- [PENAWARAN_KHUSUS]: penawaran khusus untuk momen ini
- [TARGET_AUDIENCE]: siapa target pasar untuk momen ini

Prompt:
> Buat konten promosi untuk [MOMEN] yang mempromosikan [PRODUK] dengan [PENAWARAN_KHUSUS] untuk [TARGET_AUDIENCE]. Hubungkan produk dengan semangat atau kebutuhan momen tersebut. Gunakan bahasa yang sesuai dengan suasana momen (hangat untuk lebaran, meriah untuk tahun baru, dll). Struktur: (1) Headline yang menghubungkan momen dengan penawaran, (2) Penjelasan relevansi produk dengan momen, (3) Detail penawaran khusus, (4) Call-to-action dengan batas waktu. Total 150-180 kata.

Hasil yang diharapkan:
Konten promosi 150-180 kata yang relevan dengan momen, menggunakan nada yang sesuai dan penawaran yang jelas.

---

### P-024. Deskripsi Penawaran Bundling

Kapan pakai:
> Menjelaskan penawaran bundel produk

Variabel:
- [PRODUK_DALAM_BUNDEL]: daftar produk yang dibundel
- [HARGA_NORMAL]: harga total jika dibeli terpisah
- [HARGA_BUNDEL]: harga bundel
- [PENGHEMATAN]: berapa yang dihemat pelanggan

Prompt:
> Tulis deskripsi bundel yang berisi [PRODUK_DALAM_BUNDEL]. Bandingkan [HARGA_NORMAL] dengan [HARGA_BUNDEL] untuk menunjukkan [PENGHEMATAN]. Jelaskan mengapa bundel ini menguntungkan: (1) Lebih hemat, (2) Produk-produk saling melengkapi, (3) Nilai tambah yang didapat. Gunakan tabel atau perbandingan visual jika memungkinkan. Akhiri dengan call-to-action untuk membeli bundel. Total 180-220 kata.

Hasil yang diharapkan:
Deskripsi 180-220 kata dengan perbandingan harga, penjelasan nilai, dan CTA yang jelas.

---

### P-025. Saran Cross-Sell

Kapan pakai:
> Menyarankan produk pelengkap setelah pembelian

Variabel:
- [PRODUK_UTAMA]: produk yang baru saja dibeli
- [PRODUK_PELENGAP]: produk yang disarankan sebagai pelengkap
- [MANFAAT_KOMBINASI]: manfaat menggunakan kedua produk bersama

Prompt:
> Tulis saran cross-sell untuk pelanggan yang baru membeli [PRODUK_UTAMA]. Sarankan [PRODUK_PELENGAP] sebagai pelengkap. Jelaskan [MANFAAT_KOMBINASI] secara konkret dengan contoh penggunaan. Gunakan pendekatan "pelanggan yang membeli X juga membutuhkan Y" atau "untuk hasil optimal, kombinasikan dengan...". Hindari tekanan berlebihan. Total 80-100 kata.

Hasil yang diharapkan:
Saran 80-100 kata yang menjelaskan manfaat kombinasi produk tanpa tekanan berlebihan.

---

### P-026. Upsell Pitch

Kapan pakai:
> Menawarkan versi premium atau paket yang lebih tinggi

Variabel:
- [PRODUK_DASAR]: produk atau paket yang sedang dipertimbangkan pelanggan
- [PRODUK_PREMIUM]: versi premium atau paket lebih tinggi
- [FITUR_TAMBAHAN]: fitur tambahan di versi premium
- [SELISIH_HARGA]: perbedaan harga antara dasar dan premium

Prompt:
> Tulis pitch upsell dari [PRODUK_DASAR] ke [PRODUK_PREMIUM] dengan [SELISIH_HARGA]. Soroti [FITUR_TAMBAHAN] yang didapat di versi premium. Jelaskan mengapa upgrade worth it dengan menghitung nilai tambahan per rupiah yang dikeluarkan. Gunakan pendekatan "untuk [selisih harga] lebih, Anda mendapatkan..." atau "upgrade ke premium untuk...". Hindari membuat versi dasar terlihat tidak cukup. Total 120-150 kata.

Hasil yang diharapkan:
Pitch 120-150 kata yang menjelaskan nilai upgrade tanpa mendiskreditkan versi dasar.

---

### P-027. Pernyataan Jaminan

Kapan pakai:
> Membuat pernyataan garansi untuk mengurangi risiko pembelian

Variabel:
- [NAMA_PRODUK]: nama produk
- [JENIS_GARANSI]: jenis garansi (uang kembali, pengganti, dll)
- [DURASI_GARANSI]: berapa lama garansi berlaku
- [SYARAT_GARANSI]: syarat dan ketentuan garansi

Prompt:
> Tulis pernyataan garansi untuk [NAMA_PRODUK] dengan [JENIS_GARANSI] selama [DURASI_GARANSI]. Jelaskan [SYARAT_GARANSI] secara sederhana dan transparan. Gunakan bahasa yang meyakinkan dan mengurangi keraguan. Struktur: (1) Pernyataan garansi yang jelas, (2) Apa yang dicakup garansi, (3) Cara mengklaim garansi, (4) Komitmen perusahaan terhadap kepuasan pelanggan. Total 100-120 kata.

Hasil yang diharapkan:
Pernyataan garansi 100-120 kata yang jelas, transparan, dan meyakinkan.

---

### P-028. Pernyataan Pembalikan Risiko

Kapan pakai:
> Menghilangkan risiko dari perspektif pelanggan

Variabel:
- [PRODUK_LAYANAN]: produk atau layanan yang ditawarkan
- [JAMINAN]: jaminan yang diberikan
- [ALASAN_JAMINAN]: mengapa perusahaan yakin bisa memberikan jaminan ini

Prompt:
> Tulis pernyataan risk reversal untuk [PRODUK_LAYANAN] dengan [JAMINAN]. Jelaskan [ALASAN_JAMINAN] untuk membangun kepercayaan. Gunakan pendekatan "kami yakin Anda akan puas karena..." atau "kami memberikan jaminan ini karena...". Fokus pada kepercayaan diri perusahaan terhadap kualitas produk, bukan pada keraguan pelanggan. Total 80-100 kata.

Hasil yang diharapkan:
Pernyataan 80-100 kata yang membangun kepercayaan melalui jaminan dan penjelasan alasan di baliknya.

---

### P-029. Ringkasan Social Proof

Kapan pakai:
> Merangkum bukti sosial untuk konten marketing

Variabel:
- [JUMLAH_PELANGGAN]: jumlah pelanggan atau pengguna
- [RATING]: rating atau ulasan rata-rata
- [TESTIMONI_NYATA]: 2-3 testimoni singkat dari pelanggan
- [KLIEN_TERKENAL]: nama klien atau perusahaan terkenal jika ada

Prompt:
> Tulis ringkasan social proof untuk [PRODUK_LAYANAN] dengan [JUMLAH_PELANGGAN] pelanggan dan [RATING] rating. Sertakan [TESTIMONI_NYATA] dalam 1-2 kalimat masing-masing. Jika ada, sebutkan [KLIEN_TERKENAL] yang menggunakan produk. Gunakan struktur: (1) Angka pencapaian yang mengesankan, (2) Rating atau ulasan rata-rata, (3) Dua testimoni singkat, (4) Nama klien terkenal (jika ada). Total 120-150 kata.

Hasil yang diharapkan:
Ringkasan 120-150 kata dengan angka, rating, testimoni, dan nama klien yang membangun kepercayaan.

---

### P-030. Pernyataan Membangun Otoritas

Kapan pakai:
> Membangun otoritas dan kredibilitas brand

Variabel:
- [NAMA_PERUSAHAAN]: nama perusahaan atau brand
- [PENGALAMAN]: berapa lama di industri
- [PRESTASI]: pencapaian atau penghargaan
- [MEDIA_YANG_PERNAH_MEMBERITAKAN]: media yang pernah meliput

Prompt:
> Tulis pernyataan otoritas untuk [NAMA_PERUSAHAAN] dengan [PENGALAMAN] pengalaman di industri. Soroti [PRESTASI] sebagai bukti keahlian. Sebutkan [MEDIA_YANG_PERNAH_MEMBERITAKAN] untuk meningkatkan kredibilitas. Gunakan nada yang percaya diri namun tidak arogan. Fokus pada nilai yang diberikan kepada pelanggan, bukan hanya pencapaian perusahaan. Total 100-120 kata.

Hasil yang diharapkan:
Pernyataan 100-120 kata yang membangun otoritas melalui pengalaman, prestasi, dan liputan media.

---

### P-031. Problem-Agitate-Solve (PAS) Copy

Kapan pakai:
> Membuat konten marketing dengan framework PAS

Variabel:
- [MASALAH]: masalah yang dihadapi target audiens
- [DAMPAK_MASALAH]: dampak negatif jika masalah tidak diselesaikan
- [SOLUSI]: produk atau layanan sebagai solusi

Prompt:
> Tulis konten marketing dengan framework PAS (Problem-Agitate-Solve) untuk [SOLUSI] yang menyelesaikan [MASALAH]. Paragraf pertama (Problem): Jelaskan [MASALAH] yang dihadapi target audiens dengan empatik. Paragraf kedua (Agitate): Perbesar [DAMPAK_MASALAH] jika masalah dibiarkan, gunakan pertanyaan retoris. Paragraf ketiga (Solve): Perkenalkan [SOLUSI] sebagai jalan keluar, jelaskan manfaat utama. Total 180-220 kata.

Hasil yang diharapkan:
Konten 180-220 kata dengan struktur problem-agitate-solve yang mengalir natural.

---

### P-032. Before-After-Bridge (BAB) Copy

Kapan pakai:
> Membuat konten yang menunjukkan transformasi

Variabel:
- [SITUASI_SEBELUM]: kondisi sebelum menggunakan produk
- [SITUASI_SETELAH]: kondisi setelah menggunakan produk
- [PRODUK]: produk atau layanan yang menjembatani

Variabel:
- [SITUASI_SEBELUM]: kondisi sebelum menggunakan produk
- [SITUASI_SETELAH]: kondisi setelah menggunakan produk
- [PRODUK]: produk atau layanan yang menjembatani

Prompt:
> Tulis konten dengan framework Before-After-Bridge untuk [PRODUK]. Bagian Before: Gambarkan [SITUASI_SEBELUM] dengan detail yang relatable. Bagian After: Gambarkan [SITUASI_SETELAH] yang diinginkan. Bagian Bridge: Jelaskan bagaimana [PRODUK] membawa pelanggan dari kondisi sebelum ke kondisi sesudah. Gunakan bahasa yang visual dan emosional. Total 200-250 kata.

Hasil yang diharapkan:
Konten 200-250 kata dengan struktur before-after-bridge yang menunjukkan transformasi jelas.

---

### P-033. AIDA Framework Copy

Kapan pakai:
> Membuat konten marketing lengkap dengan framework AIDA

Variabel:
- [PRODUK_LAYANAN]: produk atau layanan yang dipromosikan
- [TARGET_AUDIENCE]: siapa target pasar
- [MANFAAT_UTAMA]: manfaat utama yang ditawarkan

Prompt:
> Tulis konten marketing dengan framework AIDA (Attention-Interest-Desire-Action) untuk [PRODUK_LAYANAN] yang ditujukan kepada [TARGET_AUDIENCE]. Attention: Buat headline atau pembuka yang menarik perhatian. Interest: Jelaskan [MANFAAT_UTAMA] dan mengapa ini relevan bagi target. Desire: Bangun keinginan dengan testimoni, data, atau contoh hasil. Action: Berikan call-to-action yang jelas. Total 250-300 kata.

Hasil yang diharapkan:
Konten 250-300 kata dengan struktur AIDA yang lengkap dan mengalir.

---

### P-034. Formula Headline 4U

Kapan pakai:
> Membuat headline yang Urgent, Unique, Ultra-specific, Useful

Variabel:
- [TOPIK]: topik atau produk yang akan dibuat headlinenya
- [ANGKA_SPESIFIK]: angka atau data spesifik yang relevan
- [MANFAAT]: manfaat utama bagi pembaca

Prompt:
> Buat 5 headline dengan formula 4U (Urgent, Unique, Ultra-specific, Useful) untuk [TOPIK]. Setiap headline harus mengandung: (1) Urgency: kata yang menciptakan urgensi waktu atau tindakan, (2) Uniqueness: sudut pandang yang tidak umum, (3) Ultra-specific: [ANGKA_SPESIFIK] atau data konkret, (4) Usefulness: [MANFAAT] yang jelas bagi pembaca. Setiap headline 8-12 kata.

Hasil yang diharapkan:
Lima headline 8-12 kata yang memenuhi keempat kriteria 4U.

---

### P-035. Daftar Power Words untuk CTA

Kapan pakai:
> Memilih kata-kata kuat untuk call-to-action

Variabel:
- [JENIS_CTA]: jenis call-to-action (beli, daftar, pelajari, dll)
- [TARGET_EMOSI]: emosi yang ingin dibangkitkan (antusiasme, rasa ingin tahu, FOMO, dll)

Prompt:
> Buat daftar 20 power words untuk [JENIS_CTA] yang membangkitkan [TARGET_EMOSI]. Bagi menjadi 4 kategori: (1) 5 kata yang menciptakan urgency, (2) 5 kata yang membangkitkan rasa ingin tahu, (3) 5 kata yang memberikan kepercayaan, (4) 5 kata yang menciptakan eksklusivitas. Untuk setiap kata, berikan contoh penggunaan dalam CTA 5-7 kata.

Hasil yang diharapkan:
Daftar 20 power words dalam 4 kategori dengan contoh CTA untuk masing-masing kata.

---

### P-036. Copy Pemicu Emosi

Kapan pakai:
> Membuat konten yang menyentuh emosi target audiens

Variabel:
- [PRODUK_LAYANAN]: produk atau layanan
- [EMOSI_TARGET]: emosi yang ingin disentuh (takut, harapan, kebanggaan, dll)
- [SITUASI]: situasi yang memicu emosi tersebut

Prompt:
> Tulis konten 150-180 kata untuk [PRODUK_LAYANAN] yang menyentuh [EMOSI_TARGET] melalui [SITUASI]. Mulai dengan cerita atau gambaran yang memancing emosi. Hubungkan emosi tersebut dengan kebutuhan akan produk. Akhiri dengan solusi yang ditawarkan produk tanpa terkesan mengeksploitasi emosi. Gunakan bahasa yang empatik dan manusiawi.

Hasil yang diharapkan:
Konten 150-180 kata yang menyentuh emosi secara etis dan menghubungkannya dengan solusi produk.

---

### P-037. Copy Daya Tarik Logis

Kapan pakai:
> Membuat konten yang berfokus pada logika dan data

Variabel:
- [PRODUK_LAYANAN]: produk atau layanan
- [DATA_PENDUKUNG]: data atau statistik yang mendukung
- [ROI]: return on investment atau manfaat terukur

Prompt:
> Tulis konten 180-220 kata untuk [PRODUK_LAYANAN] yang berfokus pada logika. Sertakan [DATA_PENDUKUNG] sebagai bukti. Hitung [ROI] atau manfaat terukur yang didapat pelanggan. Gunakan struktur: (1) Pernyataan masalah dengan data, (2) Solusi yang ditawarkan, (3) Perhitungan ROI atau manfaat terukur, (4) Kesimpulan logis mengapa ini keputusan tepat. Hindari bahasa emosional berlebihan.

Hasil yang diharapkan:
Konten 180-220 kata yang berfokus pada data, logika, dan perhitungan ROI.

---

### P-038. Copy Perbandingan (Kami vs Mereka)

Kapan pakai:
> Membandingkan produk dengan kompetitor

Variabel:
- [PRODUK_KITA]: nama produk kita
- [KOMPETITOR]: nama kompetitor atau "produk lain"
- [KEUNGGULAN_KITA]: 3 keunggulan produk kita
- [KELEMAHAN_KOMPETITOR]: 3 kelemahan kompetitor

Prompt:
> Tulis perbandingan [PRODUK_KITA] dengan [KOMPETITOR] dalam format tabel atau daftar. Soroti [KEUNGGULAN_KITA] dan [KELEMAHAN_KOMPETITOR] secara objektif. Gunakan nada yang profesional dan tidak menyerang kompetitor secara personal. Fokus pada fakta dan perbedaan konkret. Akhiri dengan kesimpulan mengapa pelanggan memilih produk kita berdasarkan kebutuhan mereka. Total 200-250 kata.

Hasil yang diharapkan:
Perbandingan 200-250 kata yang objektif, profesional, dan berfokus pada fakta.

---

### P-039. Copy Kelangkaan

Kapan pakai:
> Menciptakan kelangkaan untuk meningkatkan urgency

Variabel:
- [PRODUK]: nama produk
- [JENIS_KELANGKAAN]: jenis kelangkaan (stok terbatas, waktu terbatas, edisi khusus)
- [JUMLAH_TERBATAS]: jumlah atau batas yang spesifik

Prompt:
> Tulis konten 100-120 kata untuk [PRODUK] dengan [JENIS_KELANGKAAN] sebanyak [JUMLAH_TERBATAS]. Jelaskan mengapa kelangkaan ini terjadi (produksi terbatas, permintaan tinggi, dll). Berikan alasan legitimate mengapa pelanggan harus bertindak cepat. Hindari manipulasi atau kelangkaan palsu. Gunakan bahasa yang informatif dan transparan.

Hasil yang diharapkan:
Konten 100-120 kata yang menciptakan urgency melalui kelangkaan legitimate dan transparan.

---

### P-040. Copy Urgensi

Kapan pakai:
> Menciptakan urgensi waktu untuk mendorong tindakan

Variabel:
- [PENAWARAN]: penawaran yang tersedia
- [DEADLINE]: batas waktu penawaran
- [ALASAN_DEADLINE]: mengapa ada batas waktu

Prompt:
> Tulis konten 120-150 kata untuk [PENAWARAN] dengan [DEADLINE]. Jelaskan [ALASAN_DEADLINE] secara transparan. Hitung waktu tersisa atau langkah yang harus diambil. Berikan call-to-action yang jelas. Hindari tekanan berlebihan atau deadline palsu. Gunakan bahasa yang mendesak namun tetap profesional.

Hasil yang diharapkan:
Konten 120-150 kata yang menciptakan urgensi melalui deadline legitimate dan transparan.

---

### P-041. Headline Celah Rasa Ingin Tahu

Kapan pakai:
> Membuat headline yang memancing rasa ingin tahu

Variabel:
- [TOPIK]: topik konten
- [INFORMASI_MENARIK]: informasi menarik yang akan diungkap dalam konten
- [TARGET_AUDIENCE]: siapa target pembaca

Prompt:
> Buat 8 headline curiosity gap untuk [TOPIK] yang akan mengungkap [INFORMASI_MENARIK] kepada [TARGET_AUDIENCE]. Setiap headline harus: (1) Memberikan petunjuk tentang informasi menarik, (2) Tidak memberikan jawaban lengkap, (3) Menggunakan kata "rahasia", "cara", "mengapa", atau "yang tidak diketahui". Setiap headline 8-12 kata. Hindari clickbait yang tidak sesuai dengan isi konten.

Hasil yang diharapkan:
Delapan headline 8-12 kata yang memancing rasa ingin tahu tanpa clickbait.

---

### P-042. Headline Cara Melakukan

Kapan pakai:
> Membuat headline untuk konten tutorial atau panduan

Variabel:
- [TOPIK_TUTORIAL]: topik yang akan diajarkan
- [HASIL_YANG_DIJANJIKAN]: hasil yang akan didapat setelah mengikuti tutorial
- [DURASI]: waktu yang dibutuhkan untuk mengikuti tutorial

Prompt:
> Buat 10 headline how-to untuk [TOPIK_TUTORIAL] yang menjanjikan [HASIL_YANG_DIJANJIKAN] dalam [DURASI]. Gunakan variasi formula: (1) "Cara [hasil] dalam [durasi]", (2) "Panduan lengkap [topik]", (3) "[Angka] langkah untuk [hasil]", (4) "Tutorial [topik] untuk pemula", (5) "Langkah mudah [hasil]". Setiap headline 8-12 kata.

Hasil yang diharapkan:
Sepuluh headline 8-12 kata dengan variasi formula how-to yang jelas.

---

### P-043. Headline Format Daftar

Kapan pakai:
> Membuat headline untuk konten berbentuk daftar

Variabel:
- [TOPIK]: topik konten
- [JUMLAH_ITEM]: jumlah item dalam daftar
- [JENIS_DAFTAR]: jenis daftar (tips, cara, kesalahan, tools, dll)

Prompt:
> Buat 8 headline listicle untuk [TOPIK] dengan [JUMLAH_ITEM] [JENIS_DAFTAR]. Gunakan variasi: (1) "[Jumlah] [jenis] yang...", (2) "[Jumlah] [jenis] terbaik untuk...", (3) "[Jumlah] [jenis] yang harus Anda...", (4) "[Jumlah] [jenis] teratas dalam...". Setiap headline 8-12 kata. Pastikan angka spesifik dan jenis daftar jelas.

Hasil yang diharapkan:
Delapan headline 8-12 kata dengan variasi formula listicle yang menarik.

---

### P-044. Headline Pertanyaan

Kapan pakai:
> Membuat headline berbentuk pertanyaan

Variabel:
- [TOPIK]: topik konten
- [MASALAH_TARGET]: masalah yang dihadapi target audiens
- [SOLUSI]: solusi yang ditawarkan dalam konten

Prompt:
> Buat 10 headline pertanyaan untuk [TOPIK] yang menyentuh [MASALAH_TARGET] dan mengarah pada [SOLUSI]. Gunakan variasi: (1) "Apakah Anda...?", (2) "Bagaimana jika...?", (3) "Mengapa...?", (4) "Sudahkah Anda...?", (5) "Ingin tahu cara...?". Setiap headline 8-12 kata. Pertanyaan harus relevan dan memancing pembaca untuk mencari jawaban dalam konten.

Hasil yang diharapkan:
Sepuluh headline pertanyaan 8-12 kata yang relevan dan memancing rasa ingin tahu.

---

### P-045. Headline Perintah

Kapan pakai:
> Membuat headline berbentuk perintah atau ajakan

Variabel:
- [TOPIK]: topik konten
- [TINDAKAN_YANG_DIINGINKAN]: tindakan yang ingin diambil pembaca
- [MANFAAT]: manfaat dari tindakan tersebut

Prompt:
> Buat 8 headline command untuk [TOPIK] yang mengajak [TINDAKAN_YANG_DIINGINKAN] untuk mendapatkan [MANFAAT]. Gunakan kata kerja imperatif di awal: "Temukan", "Pelajari", "Dapatkan", "Mulai", "Buat", "Hindari", "Tingkatkan", "Kuasi". Setiap headline 6-10 kata. Hindari kata "sekarang" yang berlebihan.

Hasil yang diharapkan:
Delapan headline 6-10 kata dengan kata kerja imperatif yang kuat.

---

### P-046. Templat Permintaan Testimoni

Kapan pakai:
> Meminta testimoni dari pelanggan

Variabel:
- [NAMA_PELANGGAN]: nama pelanggan
- [PRODUK_YANG_DIBELI]: produk yang dibeli pelanggan
- [DURASI_PENGGUNAAN]: berapa lama pelanggan menggunakan produk

Prompt:
> Tulis template permintaan testimoni untuk [NAMA_PELANGGAN] yang membeli [PRODUK_YANG_DIBELI] dan menggunakannya selama [DURASI_PENGGUNAAN]. Minta mereka berbagi: (1) Masalah yang mereka hadapi sebelum menggunakan produk, (2) Bagaimana produk membantu menyelesaikan masalah, (3) Hasil yang mereka dapatkan, (4) Apakah mereka merekomendasikan produk ke orang lain. Berikan panduan pertanyaan spesifik. Gunakan nada yang sopan dan tidak memaksa. Total 120-150 kata.

Hasil yang diharapkan:
Template 120-150 kata dengan panduan pertanyaan spesifik dan nada yang sopan.

---

### P-047. Kerangka Studi Kasus

Kapan pakai:
> Membuat outline case study untuk konten marketing

Variabel:
- [NAMA_KLIEN]: nama klien atau perusahaan
- [INDUSTRI_KLIEN]: industri klien
- [MASALAH_AWAL]: masalah yang dihadapi klien
- [SOLUSI_YANG_DIBERIKAN]: solusi yang diberikan
- [HASIL_KONKRET]: hasil yang dicapai

Prompt:
> Buat outline case study untuk [NAMA_KLIEN] dari [INDUSTRI_KLIEN] yang menghadapi [MASALAH_AWAL]. Struktur outline: (1) Ringkasan eksekutif (50 kata), (2) Latar belakang klien dan industri, (3) Tantangan yang dihadapi, (4) Solusi yang diterapkan, (5) Hasil yang dicapai dengan [HASIL_KONKRET], (6) Testimoni klien, (7) Kesimpulan dan pelajaran yang bisa diambil. Untuk setiap bagian, berikan 3-5 bullet point tentang apa yang harus dicakup.

Hasil yang diharapkan:
Outline case study terstruktur dengan 7 bagian dan bullet point untuk masing-masing bagian.

---

### P-048. Abstrak White Paper

Kapan pakai:
> Membuat abstrak untuk white paper atau laporan

Variabel:
- [TOPIK_WHITE_PAPER]: topik white paper
- [MASALAH_YANG_DIBAHAS]: masalah utama yang dibahas
- [TEMUAN_UTAMA]: temuan atau rekomendasi utama
- [TARGET_PEMBACA]: siapa target pembaca white paper

Prompt:
> Tulis abstrak white paper tentang [TOPIK_WHITE_PAPER] yang membahas [MASALAH_YANG_DIBAHAS] untuk [TARGET_PEMBACA]. Soroti [TEMUAN_UTAMA] sebagai kontribusi utama. Gunakan bahasa formal dan akademis namun tetap mudah dipahami. Struktur: (1) Latar belakang masalah, (2) Tujuan white paper, (3) Metodologi atau pendekatan, (4) Temuan utama, (5) Implikasi atau rekomendasi. Total 200-250 kata.

Hasil yang diharapkan:
Abstrak 200-250 kata dengan struktur formal yang menjelaskan latar belakang, tujuan, metodologi, temuan, dan implikasi.

---

### P-049. Ringkasan Eksekutif

Kapan pakai:
> Membuat ringkasan eksekutif untuk laporan atau proposal

Variabel:
- [DOKUMEN]: jenis dokumen (laporan, proposal, studi kelayakan)
- [TUJUAN_DOKUMEN]: tujuan utama dokumen
- [POIN_PENTING]: 3-5 poin penting yang harus disampaikan
- [REKOMENDASI]: rekomendasi atau kesimpulan

Prompt:
> Tulis executive summary untuk [DOKUMEN] dengan [TUJUAN_DOKUMEN]. Soroti [POIN_PENTING] sebagai informasi kunci. Sertakan [REKOMENDASI] sebagai kesimpulan. Gunakan bahasa yang ringkas dan langsung pada inti. Struktur: (1) Tujuan dan latar belakang (2 kalimat), (2) Poin-poin penting (3-5 bullet), (3) Rekomendasi atau kesimpulan (2-3 kalimat). Total 250-300 kata.

Hasil yang diharapkan:
Executive summary 250-300 kata dengan struktur tujuan-poin-rekomendasi yang ringkas.

---

### P-050. Lead Siaran Pers

Kapan pakai:
> Membuat paragraf pembuka siaran pers

Variabel:
- [NAMA_PERUSAHAAN]: nama perusahaan
- [BERITA]: berita atau pengumuman
- [TANGGAL]: tanggal pengumuman
- [KOTA]: kota asal perusahaan
- [SIGNIFIKANSI]: mengapa berita ini penting

Prompt:
> Tulis paragraf pembuka siaran pers untuk [NAMA_PERUSAHAAN] yang mengumumkan [BERITA] pada [TANGGAL] dari [KOTA]. Jelaskan [SIGNIFIKANSI] secara singkat. Gunakan format standar siaran pers: "[KOTA], [Tanggal] - [Nama Perusahaan] mengumumkan [berita] yang [signifikansi]." Paragraf pembuka harus menjawab 5W+1H (Who, What, When, Where, Why, How) dalam 2-3 kalimat. Total 60-80 kata.

Hasil yang diharapkan:
Paragraf pembuka 60-80 kata yang menjawab 5W+1H dalam format standar siaran pers.

---

## Ringkasan Cepat Bagian 1

| No | Jenis Prompt | Kapan Gunakan |
|----|--------------|---------------|
| P-001 s/d P-002 | Headline | Membuat judul produk/jasa |
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
| P-046 s/d P-050 | Konten Tingkat Lanjut | Testimoni, studi kasus, siaran pers |

---

## Contoh Output AI untuk Bagian 1

Berikut contoh output nyata dari ChatGPT dan Gemini untuk beberapa prompt kunci di bagian ini.

### P-001. Headline Produk Fisik (Contoh Output)

**Input yang dipakai:**
Produk: Kopi arabika Gayo organik, harga Rp 85.000 per 250 gram, target pembeli usia 25-40 tahun di kota besar, dijual lewat Instagram dan Shopee.

**Output ChatGPT:**
```
Kopi Gayo Organik: Dari Dataran Tinggi Aceh, Langsung ke Cangkir Anda

Rasakan perbedaan kopi yang ditanam di ketinggian 1.200 mdpl dengan proses washing yang presisi. Setiap cangkir membawa aroma floral dan notes cokelat yang tidak akan Anda temukan di kopi komersial.

Rp 85.000 untuk 250 gram biji utuh. Gratis ongkir untuk pembelian pertama.
```

**Output Gemini:**
```
Dari Kebun Petani Gayo ke Meja Anda: Kopi Organik yang Pernah Anda Coba

Bayangkan pagi hari dengan aroma kopi yang baru digiling, dari biji yang dipetik tangan di dataran tinggi Aceh. Ini bukan kopi supermarket. Ini kopi yang punya cerita.

250 gram biji arabika Gayo organik. Rp 85.000. Pesan sekarang dan rasakan perbedaannya besok pagi.
```

**Perbandingan:** ChatGPT lebih detail dalam spesifikasi produk (ketinggian, proses washing). Gemini lebih kuat di storytelling emosional. Untuk headline produk fisik, ChatGPT biasanya lebih informatif.

---

### P-009. Value Proposition Statement (Contoh Output)

**Input yang dipakai:**
Bisnis: Jasa desain logo untuk UMKM, harga mulai Rp 500.000, 3 revisi, selesai 5 hari kerja, sudah 200+ klien UMKM.

**Output ChatGPT:**
```
Logo Profesional untuk UMKM dalam 5 Hari Kerja

Kami membantu 200+ UMKM Indonesia tampil profesional dengan desain logo yang mencerminkan nilai brand mereka. Harga mulai Rp 500.000 dengan 3 kali revisi sampai Anda puas. Tidak perlu hire desainer full-time, tidak perlu menunggu berminggu-minggu.
```

**Output Gemini:**
```
200+ UMKM Sudah Percaya Logo Mereka pada Kami. Giliran Anda.

Desain logo profesional mulai Rp 500.000. Selesai 5 hari kerja. 3 revisi termasuk. Karena brand Anda pantas tampil serius, bahkan di tahap awal.
```

**Perbandingan:** ChatGPT lebih lengkap dalam menyampaikan semua benefit. Gemini lebih punchy dan fokus di social proof. Untuk value proposition, pilih sesuai platform: ChatGPT untuk landing page, Gemini untuk iklan sosial media.


## Latihan Bagian 1

1. Pilih 3 prompt dari bagian ini yang paling relevan dengan bisnis Anda saat ini.
2. Terapkan masing-masing prompt dengan variabel dari produk/layanan Anda.
3. Bandingkan hasil dari 3 prompt tersebut dan identifikasi mana yang paling sesuai dengan brand voice Anda.
4. Modifikasi prompt yang kurang sesuai dengan menambahkan konteks spesifik bisnis Anda.

---

## Kesalahan Umum di Bagian 1

**Kesalahan 1: Menggunakan bahasa yang terlalu formal atau kaku**
Solusi: Sesuaikan nada dengan target audiens. B2B bisa lebih formal, B2C harus lebih conversational.

**Kesalahan 2: Fokus pada fitur, bukan manfaat**
Solusi: Selalu terjemahkan fitur menjadi manfaat konkret bagi pengguna.

**Kesalahan 3: Call-to-action yang tidak jelas**
Solusi: Gunakan kata kerja imperatif yang spesifik dan beri tahu apa yang akan terjadi setelah klik.

**Kesalahan 4: Overpromising atau janji berlebihan**
Solusi: Pastikan semua janji dapat dibuktikan dan didukung bukti konkret.

**Kesalahan 5: Mengabaikan target audiens**
Solusi: Sesuaikan bahasa, nada, dan pendekatan dengan karakteristik audiens.
## Bagian 2: Iklan Media Sosial

Bagian ini berisi 70 prompt untuk konten media sosial: Instagram, TikTok, Facebook, Twitter/X, LinkedIn, dan YouTube Shorts. Setiap prompt dirancang untuk platform spesifik dengan format dan gaya yang sesuai.

---

### P-051. Instagram Caption Produk

Kapan pakai:
> Membuat caption Instagram untuk postingan produk

Variabel:
- [NAMA_PRODUK]: nama produk
- [MANFAAT_UTAMA]: manfaat utama produk
- [HARGA]: harga produk
- [LINK_PEMBELIAN]: link untuk membeli

Prompt:
> Buat 5 variasi caption Instagram untuk [NAMA_PRODUK] yang menonjolkan [MANFAAT_UTAMA]. Setiap caption harus: (1) Hook di kalimat pertama yang memancing pembaca untuk klik "selengkapnya", (2) Body 3-5 kalimat yang menjelaskan manfaat, (3) Harga [HARGA] disebutkan secara natural, (4) Call-to-action ke [LINK_PEMBELIAN], (5) 5-8 hashtag relevan di akhir. Panjang total 100-150 kata per caption. Gunakan emoji secukupnya (maksimal 3 per caption) dan bahasa yang conversational.

Hasil yang diharapkan:
Lima caption Instagram 100-150 kata dengan hook, body, harga, CTA, dan hashtag.

---

### P-052. Naskah Instagram Story

Kapan pakai:
> Membuat script untuk Instagram Story promosi

Variabel:
- [PRODUK]: produk yang dipromosikan
- [FITUR_UNIK]: fitur unik yang ingin disoroti
- [PENAWARAN]: penawaran khusus

Prompt:
> Buat script Instagram Story 5 slide untuk [PRODUK] yang menonjolkan [FITUR_UNIK] dengan [PENAWARAN]. Struktur per slide: (1) Slide 1: Hook visual + teks pembuka yang memancing rasa ingin tahu, (2) Slide 2: Masalah yang dihadapi target audiens, (3) Slide 3: Solusi dengan [PRODUK] dan [FITUR_UNIK], (4) Slide 4: Testimoni atau bukti sosial, (5) Slide 5: [PENAWARAN] + CTA dengan link sticker. Setiap slide 15-25 kata teks. Sertakan saran visual untuk setiap slide.

Hasil yang diharapkan:
Script 5 slide dengan total 75-125 kata, masing-masing slide berisi teks dan saran visual.

---

### P-053. Hook Instagram Reel

Kapan pakai:
> Membuat 3 detik pertama video Reel yang menarik

Variabel:
- [TOPIK_VIDEO]: topik atau produk yang dibahas
- [TARGET_AUDIENCE]: siapa target penonton
- [JANJI_KONTEN]: apa yang akan didapat penonton setelah menonton

Prompt:
> Buat 10 variasi hook 3 detik pertama untuk Reel tentang [TOPIK_VIDEO] yang ditujukan kepada [TARGET_AUDIENCE] dengan janji [JANJI_KONTEN]. Hook harus: (1) Langsung menangkap perhatian dalam 1 detik pertama, (2) Menggunakan pola "Apakah Anda...", "Ternyata...", "Kesalahan yang...", "Cara tercepat...", (3) Menciptakan curiosity gap atau urgency, (4) Relevan dengan target audiens. Setiap hook 8-15 kata. Sertakan saran visual atau teks on-screen untuk setiap hook.

Hasil yang diharapkan:
Sepuluh hook 8-15 kata dengan saran visual untuk masing-masing.

---

### P-054. Struktur Carousel Instagram

Kapan pakai:
> Membuat struktur konten carousel Instagram

Variabel:
- [TOPIK]: topik edukasi atau promosi
- [JUMLAH_SLIDE]: berapa slide carousel (5-10 slide)
- [TUJUAN]: tujuan konten (edukasi, promosi, engagement)

Prompt:
> Buat struktur carousel Instagram [JUMLAH_SLIDE] slide tentang [TOPIK] dengan tujuan [TUJUAN]. Untuk setiap slide, tentukan: (1) Headline slide (5-8 kata), (2) Isi konten (30-50 kata), (3) Saran visual atau layout. Slide pertama harus hook yang menarik, slide terakhir harus CTA yang jelas. Slide tengah berisi konten utama yang terstruktur. Total konten 200-300 kata untuk seluruh carousel.

Hasil yang diharapkan:
Struktur carousel dengan headline, isi, dan saran visual untuk setiap slide.

---

### P-055. Optimasi Bio Instagram

Kapan pakai:
> Mengoptimalkan bio Instagram untuk bisnis

Variabel:
- [NAMA_BUSINESS]: nama bisnis atau brand
- [APA_YANG_DILAKUKAN]: apa yang dilakukan bisnis
- [TARGET_AUDIENCE]: siapa target pasar
- [UNIQUE_VALUE]: nilai unik yang ditawarkan
- [CTA]: call-to-action yang diinginkan (klik link, DM, dll)

Prompt:
> Buat 5 variasi bio Instagram untuk [NAMA_BUSINESS] yang melakukan [APA_YANG_DILAKUKAN] untuk [TARGET_AUDIENCE] dengan [UNIQUE_VALUE]. Setiap bio harus: (1) Nama: gunakan kata kunci yang mudah dicari, (2) Deskripsi: maksimal 2 baris yang menjelaskan apa yang dilakukan dan untuk siapa, (3) Unique value: apa yang membedakan, (4) CTA: ajakan untuk [CTA], (5) Link: saran link yang sesuai. Total bio maksimal 150 karakter. Gunakan emoji sebagai bullet point jika perlu.

Hasil yang diharapkan:
Lima variasi bio Instagram maksimal 150 karakter dengan struktur nama-deskripsi-value-CTA.

---

### P-056. Naskah Video Pendek TikTok

Kapan pakai:
> Membuat script video TikTok 15-30 detik

Variabel:
- [TOPIK]: topik atau produk yang dibahas
- [HOOK]: cara membuka video yang menarik
- [KONTEN_UTAMA]: pesan utama yang ingin disampaikan
- [CTA]: call-to-action di akhir video

Prompt:
> Buat script TikTok 15-30 detik untuk [TOPIK] dengan [HOOK] di 3 detik pertama, [KONTEN_UTAMA] di bagian tengah, dan [CTA] di akhir. Format: (1) Detik 0-3: Hook visual + teks on-screen, (2) Detik 3-15: Konten utama dengan transisi cepat, (3) Detik 15-30: CTA + saran sound atau musik. Script harus: (a) Menggunakan bahasa casual dan relatable, (b) Satu ide per kalimat, (c) Tidak ada basa-basi, (d) Teks on-screen sinkron dengan voiceover. Total 40-60 kata.

Hasil yang diharapkan:
Script 40-60 kata dengan timing per bagian dan saran visual/audio.

---

### P-057. Adaptasi Tren TikTok

Kapan pakai:
> Mengadaptasi tren TikTok untuk konten bisnis

Variabel:
- [TREND]: tren TikTok yang sedang populer
- [BISNIS]: jenis bisnis atau industri
- [PRODUK_LAYANAN]: produk atau layanan yang dipromosikan

Prompt:
> Buat 5 ide adaptasi [TREND] untuk [BISNIS] yang mempromosikan [PRODUK_LAYANAN]. Setiap ide harus: (1) Menjelaskan bagaimana tren bisa disesuaikan dengan bisnis, (2) Script atau konsep video 15-30 detik, (3) Teks on-screen yang relevan, (4) Saran sound atau musik yang sesuai tren, (5) Hashtag yang relevan. Pastikan adaptasi tetap autentik dan tidak terkesan memaksa. Hindari tren yang tidak sesuai dengan nilai brand.

Hasil yang diharapkan:
Lima ide adaptasi tren dengan konsep, script, teks, sound, dan hashtag.

---

### P-058. Variasi Hook TikTok

Kapan pakai:
> Membuat variasi hook untuk video TikTok

Variabel:
- [NICHE]: niche atau kategori konten
- [MASALAH_AUDIENCE]: masalah yang dihadapi audiens
- [SOLUSI]: solusi yang ditawarkan

Prompt:
> Buat 15 variasi hook TikTok untuk [NICHE] yang menyelesaikan [MASALAH_AUDIENCE] dengan [SOLUSI]. Bagi menjadi 5 kategori: (1) 3 hook pertanyaan retoris ("Pernahkah Anda..."), (2) 3 hook pernyataan kontroversial ("Kebanyakan orang salah tentang..."), (3) 3 hook angka spesifik ("3 cara dalam 30 detik..."), (4) 3 hook story time ("Cerita tentang..."), (5) 3 hook tutorial ("Cara termudah..."). Setiap hook 5-10 kata. Hook harus memancing penonton untuk menonton sampai habis.

Hasil yang diharapkan:
Lima belas hook 5-10 kata dalam 5 kategori yang berbeda.

---

### P-059. TikTok Caption dengan Hashtag

Kapan pakai:
> Membuat caption TikTok yang optimal

Variabel:
- [TOPIK_VIDEO]: topik video TikTok
- [KATA_KUNCI]: kata kunci yang ingin ditargetkan
- [TARGET_AUDIENCE]: siapa target penonton

Prompt:
> Buat 5 variasi caption TikTok untuk [TOPIK_VIDEO] yang menargetkan [KATA_KUNCI] untuk [TARGET_AUDIENCE]. Setiap caption harus: (1) Kalimat pertama yang memancing interaksi (pertanyaan atau pernyataan menarik), (2) 1-2 kalimat penjelasan atau konteks, (3) Call-to-action untuk follow, like, atau komentar, (4) 3-5 hashtag utama yang relevan, (5) 2-3 hashtag trending yang sesuai. Total caption 50-80 kata. Hindari hashtag yang terlalu umum atau tidak relevan.

Hasil yang diharapkan:
Lima caption 50-80 kata dengan struktur hook-penjelasan-CTA-hashtag.

---

### P-060. Teks Utama Facebook Ads

Kapan pakai:
> Membuat teks utama untuk iklan Facebook

Variabel:
- [PRODUK_LAYANAN]: produk atau layanan yang diiklankan
- [TARGET_AUDIENCE]: siapa target iklan
- [MASALAH]: masalah yang diselesaikan
- [SOLUSI]: bagaimana produk menyelesaikan masalah
- [OFFER]: penawaran khusus
- [CTA]: call-to-action yang diinginkan

Prompt:
> Buat 3 variasi primary text Facebook Ads untuk [PRODUK_LAYANAN] yang ditujukan kepada [TARGET_AUDIENCE] yang mengalami [MASALAH]. Setiap teks harus: (1) Hook 1-2 kalimat pertama yang langsung relevan (ini yang muncul sebelum "Selengkapnya"), (2) Body yang menjelaskan [SOLUSI] dan manfaat, (3) [OFFER] disebutkan secara jelas, (4) CTA yang mengarah ke [CTA], (5) Total 125-150 kata. Gunakan bahasa yang conversational dan empatik. Hindari klaim berlebihan atau bahasa yang terlalu salesy.

Hasil yang diharapkan:
Tiga variasi primary text 125-150 kata dengan hook-body-offer-CTA.

---

### P-061. Facebook Ads Headline

Kapan pakai:
> Membuat headline untuk iklan Facebook

Variabel:
- [PRODUK]: produk yang diiklankan
- [MANFAAT_UTAMA]: manfaat utama
- [OFFER]: penawaran khusus

Prompt:
> Buat 10 variasi headline Facebook Ads untuk [PRODUK] dengan [MANFAAT_UTAMA] dan [OFFER]. Setiap headline harus: (1) Maksimal 40 karakter (agar tidak terpotong), (2) Mengandung angka atau kata sifat spesifik, (3) Menonjolkan manfaat atau penawaran, (4) Menggunakan kata kerja aktif, (5) Relevan dengan target audiens. Hindari clickbait yang tidak sesuai dengan landing page.

Hasil yang diharapkan:
Sepuluh headline maksimal 40 karakter yang spesifik dan relevan.

---

### P-062. Deskripsi Facebook Ads

Kapan pakai:
> Membuat deskripsi singkat di bawah headline iklan Facebook

Variabel:
- [PRODUK]: produk yang diiklankan
- [KEUNGGULAN]: keunggulan produk
- [SOCIAL_PROOF]: bukti sosial (jumlah pelanggan, rating, dll)

Prompt:
> Buat 5 variasi deskripsi Facebook Ads untuk [PRODUK] dengan [KEUNGGULAN] dan [SOCIAL_PROOF]. Setiap deskripsi harus: (1) Maksimal 30 kata, (2) Melengkapi headline dengan informasi tambahan, (3) Mengandung social proof atau keunggulan spesifik, (4) Menggunakan bahasa yang ringkas dan jelas. Deskripsi muncul di bawah headline, jadi jangan mengulang informasi dari headline.

Hasil yang diharapkan:
Lima deskripsi maksimal 30 kata yang melengkapi headline.

---

### P-063. Facebook Post Organik

Kapan pakai:
> Membuat postingan organik untuk halaman Facebook bisnis

Variabel:
- [TOPIK]: topik postingan
- [JENIS_KONTEN]: jenis konten (edukasi, promosi, engagement, behind-the-scene)
- [TARGET_AUDIENCE]: siapa target pembaca

Prompt:
> Buat postingan Facebook organik tentang [TOPIK] dengan jenis [JENIS_KONTEN] untuk [TARGET_AUDIENCE]. Struktur: (1) Hook 1-2 kalimat pertama yang menarik perhatian, (2) Body 3-5 paragraf pendek (total 150-200 kata), (3) Pertanyaan atau CTA di akhir untuk memancing komentar, (4) 1-2 hashtag relevan. Gunakan bahasa yang conversational dan personal. Facebook organik butuh engagement, jadi akhiri dengan pertanyaan terbuka.

Hasil yang diharapkan:
Postingan 150-200 kata dengan hook-body-CTA dan pertanyaan untuk engagement.

---

### P-064. Twitter/X Thread

Kapan pakai:
> Membuat thread Twitter/X untuk konten edukasi atau storytelling

Variabel:
- [TOPIK]: topik thread
- [JUMLAH_TWEET]: berapa tweet dalam thread (5-15 tweet)
- [TUJUAN]: tujuan thread (edukasi, promosi, engagement)

Prompt:
> Buat thread Twitter/X [JUMLAH_TWEET] tweet tentang [TOPIK] dengan tujuan [TUJUAN]. Struktur: (1) Tweet 1: Hook yang menjelaskan apa yang akan didapat pembaca + CTA untuk follow thread, (2) Tweet 2-[JUMLAH_TWEET]-1: Isi thread dengan satu ide per tweet, gunakan numbering "2/", "3/", dst, (3) Tweet terakhir: Kesimpulan + CTA (follow, like, retweet, atau klik link). Setiap tweet maksimal 280 karakter. Gunakan bahasa yang ringkas dan langsung pada inti.

Hasil yang diharapkan:
Thread dengan hook, isi terstruktur, dan kesimpulan-CTA, masing-masing tweet maksimal 280 karakter.

---

### P-065. Satu Tweet Twitter/X

Kapan pakai:
> Membuat tweet tunggal yang impactful

Variabel:
- [TOPIK]: topik tweet
- [JENIS]: jenis tweet (insight, pertanyaan, pernyataan, tips)
- [TARGET_AUDIENCE]: siapa target pembaca

Prompt:
> Buat 10 variasi tweet tunggal tentang [TOPIK] dengan jenis [JENIS] untuk [TARGET_AUDIENCE]. Setiap tweet harus: (1) Maksimal 280 karakter, (2) Langsung pada inti tanpa basa-basi, (3) Menggunakan angka, pertanyaan, atau pernyataan kuat, (4) Memancing interaksi (like, retweet, reply). Hindari hashtag berlebihan (maksimal 2). Gunakan bahasa yang conversational dan autentik.

Hasil yang diharapkan:
Sepuluh tweet maksimal 280 karakter yang langsung dan memancing interaksi.

---

### P-066. LinkedIn Post Profesional

Kapan pakai:
> Membuat postingan LinkedIn untuk personal branding atau bisnis B2B

Variabel:
- [TOPIK]: topik postingan
- [INDUSTRI]: industri atau bidang profesional
- [INSIGHT]: insight atau pelajaran yang ingin dibagikan
- [TARGET_AUDIENCE]: siapa target pembaca (profesional, rekruter, klien)

Prompt:
> Buat postingan LinkedIn tentang [TOPIK] untuk [INDUSTRI] yang membagikan [INSIGHT] kepada [TARGET_AUDIENCE]. Struktur: (1) Hook 1-2 kalimat pertama yang menarik (ini yang muncul sebelum "lihat selengkapnya"), (2) Story atau konteks 2-3 paragraf, (3) Insight atau pelajaran utama dalam 3-5 bullet point, (4) Refleksi atau pertanyaan untuk diskusi, (5) 3-5 hashtag relevan. Total 200-300 kata. Gunakan bahasa profesional namun tetap personal dan autentik.

Hasil yang diharapkan:
Postingan 200-300 kata dengan hook-story-insight-refleksi-hashtag.

---

### P-067. Artikel LinkedIn

Kapan pakai:
> Membuat artikel panjang untuk LinkedIn

Variabel:
- [TOPIK]: topik artikel
- [TARGET_AUDIENCE]: siapa target pembaca
- [TUJUAN]: tujuan artikel (thought leadership, edukasi, promosi)
- [PANJANG]: panjang artikel (500-1000 kata)

Prompt:
> Tulis artikel LinkedIn tentang [TOPIK] untuk [TARGET_AUDIENCE] dengan tujuan [TUJUAN] dalam [PANJANG] kata. Struktur: (1) Judul yang menarik dan profesional, (2) Pembuka 2-3 paragraf yang menjelaskan mengapa topik ini relevan, (3) Body dengan 3-5 subheading dan penjelasan mendalam, (4) Kesimpulan dengan takeaway utama, (5) CTA untuk komentar, share, atau koneksi. Gunakan bahasa yang informatif dan otoritatif namun tetap accessible.

Hasil yang diharapkan:
Artikel dengan judul, pembuka, body terstruktur, kesimpulan, dan CTA.

---

### P-068. Judul Video YouTube

Kapan pakai:
> Membuat judul video YouTube yang menarik dan SEO-friendly

Variabel:
- [TOPIK_VIDEO]: topik video
- [KATA_KUNCI_UTAMA]: kata kunci utama yang ingin ditargetkan
- [JENIS_VIDEO]: jenis video (tutorial, review, vlog, dll)
- [TARGET_AUDIENCE]: siapa target penonton

Prompt:
> Buat 10 variasi judul YouTube untuk [TOPIK_VIDEO] dengan kata kunci [KATA_KUNCI_UTAMA] untuk [JENIS_VIDEO] yang ditujukan kepada [TARGET_AUDIENCE]. Setiap judul harus: (1) Maksimal 60 karakter (agar tidak terpotong di search), (2) Mengandung kata kunci utama di awal, (3) Menggunakan angka atau kata sifat yang kuat, (4) Menciptakan curiosity gap atau janji nilai, (5) Relevan dengan isi video. Hindari clickbait yang menyesatkan.

Hasil yang diharapkan:
Sepuluh judul maksimal 60 karakter yang SEO-friendly dan menarik.

---

### P-069. Deskripsi Video YouTube

Kapan pakai:
> Membuat deskripsi video YouTube yang optimal

Variabel:
- [JUDUL_VIDEO]: judul video
- [RINGKASAN]: ringkasan isi video
- [TIMESTAMP]: timestamp untuk bagian-bagian penting
- [LINK_RELEVAN]: link yang relevan (produk, sosial media, dll)
- [KATA_KUNCI]: kata kunci yang ingin ditargetkan

Prompt:
> Buat deskripsi YouTube untuk [JUDUL_VIDEO] dengan struktur: (1) 2-3 kalimat pertama yang menjelaskan [RINGKASAN] dan mengandung [KATA_KUNCI] (ini yang muncul di search results), (2) [TIMESTAMP] dengan format "00:00 - Judul Bagian", (3) [LINK_RELEVAN] dengan label yang jelas, (4) Paragraf penutup 2-3 kalimat yang merangkum video, (5) 5-10 hashtag relevan. Total deskripsi 200-300 kata. Optimalkan untuk SEO YouTube dengan kata kunci natural.

Hasil yang diharapkan:
Deskripsi 200-300 kata dengan ringkasan, timestamp, link, dan hashtag.

---

### P-070. Naskah YouTube Shorts

Kapan pakai:
> Membuat script untuk YouTube Shorts (video vertikal pendek)

Variabel:
- [TOPIK]: topik video
- [DURASI]: durasi video (15-60 detik)
- [HOOK]: cara membuka video
- [KONTEN_UTAMA]: pesan utama
- [CTA]: call-to-action

Prompt:
> Buat script YouTube Shorts [DURASI] detik tentang [TOPIK] dengan [HOOK] di 3 detik pertama, [KONTEN_UTAMA] di tengah, dan [CTA] di akhir. Format: (1) Detik 0-3: Hook visual + teks on-screen yang menangkap perhatian, (2) Detik 3-[DURASI]-5: Konten utama dengan transisi cepat dan visual menarik, (3) Detik terakhir: CTA untuk subscribe atau like. Script harus: (a) Satu ide per kalimat, (b) Bahasa casual dan energik, (c) Teks on-screen sinkron dengan voiceover. Total 30-80 kata tergantung durasi.

Hasil yang diharapkan:
Script 30-80 kata dengan timing per bagian dan saran visual.

---

### P-071. Pesan Broadcast WhatsApp

Kapan pakai:
> Membuat pesan broadcast WhatsApp untuk promosi

Variabel:
- [PRODUK_LAYANAN]: produk atau layanan
- [PENAWARAN]: penawaran khusus
- [TARGET_AUDIENCE]: siapa target penerima
- [BATAS_WAKTU]: deadline penawaran

Prompt:
> Buat 3 variasi pesan broadcast WhatsApp untuk [PRODUK_LAYANAN] dengan [PENAWARAN] untuk [TARGET_AUDIENCE] hingga [BATAS_WAKTU]. Setiap pesan harus: (1) Pembuka yang personal (gunakan sapaan), (2) Isi 2-3 kalimat yang menjelaskan penawaran, (3) CTA yang jelas (balas pesan, klik link, atau hubungi nomor), (4) Penutup yang sopan. Total 50-80 kata per pesan. Hindari bahasa yang terlalu formal atau salesy. WhatsApp butuh pendekatan personal.

Hasil yang diharapkan:
Tiga pesan 50-80 kata dengan pembuka personal, isi, CTA, dan penutup.

---

### P-072. Post Kanal Telegram

Kapan pakai:
> Membuat postingan untuk channel Telegram

Variabel:
- [TOPIK]: topik postingan
- [JENIS_KONTEN]: jenis konten (pengumuman, artikel, promosi)
- [TARGET_AUDIENCE]: siapa subscriber channel

Prompt:
> Buat postingan Telegram tentang [TOPIK] dengan jenis [JENIS_KONTEN] untuk [TARGET_AUDIENCE]. Struktur: (1) Judul atau headline yang menarik (gunakan bold atau emoji), (2) Isi 3-5 paragraf pendek (total 150-250 kata), (3) Link atau CTA jika relevan, (4) Hashtag 2-3 di akhir. Telegram mendukung format markdown, jadi gunakan **bold**, format italic, atau [link](url) jika perlu. Bahasa bisa lebih kasual dibanding platform lain.

Hasil yang diharapkan:
Postingan 150-250 kata dengan format markdown dan hashtag.

---

### P-073. Deskripsi Pin Pinterest

Kapan pakai:
> Membuat deskripsi pin Pinterest yang SEO-friendly

Variabel:
- [JUDUL_PIN]: judul pin
- [DESKRIPSI_PRODUK]: deskripsi produk atau konten
- [KATA_KUNCI]: kata kunci yang ingin ditargetkan
- [LINK_TUJUAN]: link tujuan pin

Prompt:
> Buat 5 variasi deskripsi Pinterest pin untuk [JUDUL_PIN] yang mendeskripsikan [DESKRIPSI_PRODUK] dengan kata kunci [KATA_KUNCI]. Setiap deskripsi harus: (1) 2-3 kalimat (50-100 kata), (2) Mengandung kata kunci secara natural, (3) Menjelaskan nilai atau manfaat bagi pembaca, (4) Call-to-action untuk klik [LINK_TUJUAN], (5) 3-5 hashtag relevan. Pinterest adalah search engine visual, jadi optimalkan untuk kata kunci tanpa terlihat spammy.

Hasil yang diharapkan:
Lima deskripsi 50-100 kata dengan kata kunci natural dan hashtag.

---

### P-074. Kalender Konten Media Sosial

Kapan pakai:
> Membuat kalender konten media sosial untuk satu minggu

Variabel:
- [PLATFORM]: platform yang akan diposting (Instagram, Facebook, TikTok, dll)
- [FREKUENSI]: berapa kali posting per hari
- [JENIS_KONTEN]: campuran jenis konten (edukasi, promosi, engagement, behind-the-scene)
- [TUJUAN]: tujuan konten mingguan

Prompt:
> Buat content calendar [PLATFORM] untuk 7 hari dengan [FREKUENSI] posting per hari dan campuran [JENIS_KONTEN] untuk mencapai [TUJUAN]. Untuk setiap hari, tentukan: (1) Jenis konten (edukasi/promosi/engagement/BTS), (2) Topik atau ide konten, (3) Format (gambar, video, carousel, story, reel), (4) Caption atau script singkat (50-80 kata), (5) Waktu posting optimal, (6) Hashtag atau kata kunci. Pastikan variasi konten seimbang dan tidak monoton.

Hasil yang diharapkan:
Content calendar 7 hari dengan detail per posting.

---

### P-075. Halaman Tautan Bio Media Sosial

Kapan pakai:
> Membuat konten untuk halaman bio link (Linktree, dll)

Variabel:
- [NAMA_BRAND]: nama brand atau personal
- [LINK_UTAMA]: link-link yang ingin ditampilkan
- [DESKRIPSI_BRAND]: deskripsi singkat brand
- [CTA_UTAMA]: call-to-action utama yang diinginkan

Prompt:
> Buat konten untuk halaman bio link [NAMA_BRAND] dengan [DESKRIPSI_BRAND] dan [CTA_UTAMA]. Struktur: (1) Headline atau nama brand (5-10 kata), (2) Deskripsi singkat 1-2 kalimat (20-30 kata), (3) Daftar [LINK_UTAMA] dengan label yang menarik dan jelas (5-10 link), (4) CTA utama yang menonjol. Setiap label link harus: (a) Menggunakan kata kerja aktif, (b) Menjelaskan apa yang didapat pengguna, (c) Maksimal 5-7 kata. Total konten 100-150 kata.

Hasil yang diharapkan:
Konten bio link dengan headline, deskripsi, label link, dan CTA.

---

### P-076. Naskah Reel Edukasi Instagram

Kapan pakai:
> Membuat script Reel Instagram untuk konten edukasi

Variabel:
- [TOPIK_EDUKASI]: topik yang akan diajarkan
- [JUMLAH_TIPS]: berapa tips atau poin yang akan dibagikan
- [DURASI]: durasi video (30-60 detik)
- [TARGET_AUDIENCE]: siapa target penonton

Prompt:
> Buat script Reel Instagram [DURASI] detik tentang [TOPIK_EDUKASI] dengan [JUMLAH_TIPS] tips untuk [TARGET_AUDIENCE]. Struktur: (1) Detik 0-3: Hook "Tahukah Anda..." atau "Kesalahan yang sering...", (2) Detik 3-[DURASI]-10: Tips pertama dengan penjelasan singkat, (3) Detik berikutnya: Tips kedua hingga [JUMLAH_TIPS], (4) Detik terakhir: CTA "Save postingan ini" atau "Follow untuk tips lainnya". Setiap tips 10-15 kata. Gunakan transisi visual antar tips. Total script 60-100 kata.

Hasil yang diharapkan:
Script 60-100 kata dengan hook, tips terstruktur, dan CTA.

---

### P-077. Balasan Duet/Stitch TikTok

Kapan pakai:
> Membuat script untuk duet atau stitch TikTok

Variabel:
- [VIDEO_ASAL]: video yang akan diduet atau distitch
- [PESAN_YANG_INGIN_DISAMPAIKAN]: respons atau tambahan yang ingin diberikan
- [PRODUK_LAYANAN]: produk atau layanan yang ingin dipromosikan (opsional)

Prompt:
> Buat script TikTok duet/stitch [DURASI] detik untuk merespons [VIDEO_ASAL] dengan [PESAN_YANG_INGIN_DISAMPAIKAN] dan mempromosikan [PRODUK_LAYANAN] jika relevan. Struktur: (1) Detik 0-3: Reaksi atau komentar terhadap video asal, (2) Detik 3-15: Respons atau tambahan informasi, (3) Detik 15-30: Kesimpulan atau CTA. Script harus: (a) Terhubung natural dengan video asal, (b) Menambahkan nilai atau perspektif baru, (c) Tidak terkesan memotong atau menyinggung pembuat video asal. Total 40-60 kata.

Hasil yang diharapkan:
Script 40-60 kata yang responsif dan menambahkan nilai.

---

### P-078. Pengumuman Instagram Live

Kapan pakai:
> Mengumumkan Instagram Live yang akan datang

Variabel:
- [TOPIK_LIVE]: topik yang akan dibahas dalam live
- [NARASUMBER]: siapa yang akan berbicara (jika ada)
- [WAKTU_LIVE]: kapan live akan berlangsung
- [MANFAAT]: apa yang akan didapat penonton

Prompt:
> Buat pengumuman Instagram Live untuk [TOPIK_LIVE] dengan [NARASUMBER] pada [WAKTU_LIVE] yang akan memberikan [MANFAAT]. Buat 3 variasi: (1) Postingan feed dengan caption 100-120 kata, (2) Story 3 slide dengan teks total 60-80 kata, (3) Reminder H-1 dengan caption 80-100 kata. Setiap variasi harus: (a) Menjelaskan topik dan narasumber, (b) Menyebutkan waktu dengan jelas, (c) Memberikan alasan mengapa harus menonton, (d) CTA untuk set reminder atau share. Gunakan countdown sticker untuk story.

Hasil yang diharapkan:
Tiga variasi pengumuman (feed, story, reminder) dengan informasi lengkap.

---

### P-079. Pengumuman Kontes Media Sosial

Kapan pakai:
> Mengumumkan kontes atau giveaway di media sosial

Variabel:
- [JENIS_KONTES]: jenis kontes (giveaway, foto, video, quiz)
- [HADIAH]: hadiah yang ditawarkan
- [SYARAT]: syarat mengikuti kontes
- [DEADLINE]: batas waktu mengikuti
- [PLATFORM]: platform yang digunakan

Prompt:
> Buat pengumuman kontes [JENIS_KONTES] di [PLATFORM] dengan [HADIAH] dan [SYARAT] hingga [DEADLINE]. Struktur: (1) Headline yang menarik perhatian ("GIVEAWAY!", "KONTES BERBAUANG!", dll), (2) Penjelasan hadiah dengan detail, (3) Syarat mengikuti dalam format numbered list, (4) Deadline dan cara pengumuman pemenang, (5) CTA untuk mengikuti dan share. Total 150-200 kata. Pastikan syarat jelas dan tidak ambigu. Gunakan emoji untuk membuat postingan lebih menarik.

Hasil yang diharapkan:
Pengumuman 150-200 kata dengan headline, hadiah, syarat, deadline, dan CTA.

---

### P-080. Permintaan UGC

Kapan pakai:
> Meminta pelanggan untuk membuat konten tentang produk

Variabel:
- [PRODUK]: produk yang ingin dipromosikan melalui UGC
- [JENIS_KONTEN]: jenis konten yang diminta (foto, video, review)
- [INSENTIF]: insentif untuk yang berpartisipasi
- [HASHTAG_BRAND]: hashtag brand yang harus digunakan

Prompt:
> Buat permintaan UGC untuk [PRODUK] dengan meminta [JENIS_KONTEN] dan memberikan [INSENTIF] menggunakan [HASHTAG_BRAND]. Struktur: (1) Pembuka yang menjelaskan mengapa brand menghargai pelanggan, (2) Penjelasan jenis konten yang diminta dengan contoh, (3) Insentif yang akan didapat, (4) Cara berpartisipasi (tag, hashtag, kirim DM), (5) Deadline jika ada. Total 120-150 kata. Gunakan bahasa yang apresiatif dan tidak memaksa.

Hasil yang diharapkan:
Permintaan 120-150 kata yang jelas dan apresiatif.

---

### P-081. Pitch Kolaborasi Influencer

Kapan pakai:
> Menghubungi influencer untuk kolaborasi

Variabel:
- [NAMA_INFLUENCER]: nama influencer yang akan dihubungi
- [BRAND]: nama brand
- [PRODUK]: produk yang ingin dipromosikan
- [JENIS_KOLABORASI]: jenis kolaborasi yang ditawarkan
- [KOMPENSASI]: kompensasi yang ditawarkan

Prompt:
> Buat pesan pitch kolaborasi untuk [NAMA_INFLUENCER] dari [BRAND] yang menawarkan [JENIS_KOLABORASI] untuk [PRODUK] dengan [KOMPENSASI]. Struktur: (1) Pembuka yang personal dan menunjukkan apresiasi terhadap konten influencer, (2) Penjelasan singkat tentang brand dan produk, (3) Proposal kolaborasi yang spesifik, (4) Kompensasi yang ditawarkan, (5) CTA untuk diskusi lebih lanjut. Total 150-200 kata. Gunakan bahasa yang profesional namun friendly.

Hasil yang diharapkan:
Pitch 150-200 kata yang personal, jelas, dan profesional.

---

### P-082. Respons Krisis Media Sosial

Kapan pakai:
> Merespons krisis atau komplain viral di media sosial

Variabel:
- [JENIS_KRISIS]: jenis krisis (komplain pelanggan, kesalahan brand, isu negatif)
- [FAKTA]: fakta yang relevan
- [SOLUSI]: solusi yang ditawarkan
- [NILAI_BRAND]: nilai atau prinsip brand yang relevan

Prompt:
> Buat pernyataan respons krisis [JENIS_KRISIS] untuk [BRAND] dengan [FAKTA], menawarkan [SOLUSI], dan mencerminkan [NILAI_BRAND]. Struktur: (1) Pengakuan atas masalah dan empati, (2) Penjelasan fakta secara transparan, (3) Solusi yang ditawarkan, (4) Komitmen untuk perbaikan, (5) Kontak untuk komunikasi lebih lanjut. Total 200-250 kata. Gunakan bahasa yang empatik, transparan, dan tidak defensif. Hindari menyalahkan pihak lain.

Hasil yang diharapkan:
Pernyataan 200-250 kata yang empatik dan transparan.

---

### P-083. Adaptasi Konten Khas Platform

Kapan pakai:
> Mengadaptasi konten yang sama untuk platform berbeda

Variabel:
- [KONTEN_ASAL]: konten asli yang akan diadaptasi
- [PLATFORM_TUJUAN]: platform tujuan (Instagram, TikTok, LinkedIn, Twitter)
- [KARAKTERISTIK_PLATFORM]: karakteristik platform target

Prompt:
> Adaptasi [KONTEN_ASAL] untuk [PLATFORM_TUJUAN] dengan mempertimbangkan [KARAKTERISTIK_PLATFORM]. Sesuaikan: (1) Panjang konten (Instagram 100-150 kata, TikTok 40-60 kata, LinkedIn 200-300 kata, Twitter 280 karakter), (2) Nada bahasa (Instagram visual, TikTok kasual, LinkedIn profesional, Twitter ringkas), (3) Format (caption, script, thread), (4) Hashtag (Instagram 5-8, TikTok 3-5, LinkedIn 3-5, Twitter 1-2), (5) CTA yang sesuai platform. Berikan versi adaptasi lengkap dengan penjelasan perubahan.

Hasil yang diharapkan:
Versi adaptasi lengkap dengan penjelasan penyesuaian.

---

### P-084. Ringkasan Laporan Analitik Media Sosial

Kapan pakai:
> Merangkum laporan analitik media sosial

Variabel:
- [PERIODE]: periode laporan (mingguan, bulanan, kuartalan)
- [METRIK_UTAMA]: metrik utama yang diukur
- [PERUBAHAN]: perubahan dari periode sebelumnya
- [INSIGHT]: insight atau pelajaran dari data

Prompt:
> Buat ringkasan laporan analitik [PERIODE] dengan [METRIK_UTAMA], [PERUBAHAN], dan [INSIGHT]. Struktur: (1) Overview performa keseluruhan dalam 2-3 kalimat, (2) Highlight metrik terbaik dengan angka spesifik, (3) Area yang perlu perbaikan dengan data pendukung, (4) Insight utama dan pelajaran yang didapat, (5) Rekomendasi untuk periode berikutnya. Total 250-300 kata. Gunakan bahasa yang jelas dan actionable.

Hasil yang diharapkan:
Ringkasan 250-300 kata dengan overview, highlight, area perbaikan, insight, dan rekomendasi.

---

### P-085. Variasi Copy untuk Pengujian A/B

Kapan pakai:
> Membuat variasi copy untuk A/B testing

Variabel:
- [ELEMEN_YANG_DITEST]: elemen yang akan di-test (headline, CTA, deskripsi)
- [VARIASI]: berapa banyak variasi yang dibutuhkan
- [HIPOTESIS]: hipotesis tentang apa yang akan bekerja lebih baik

Prompt:
> Buat [VARIASI] variasi [ELEMEN_YANG_DITEST] untuk A/B testing dengan [HIPOTESIS]. Setiap variasi harus: (1) Menguji satu variabel berbeda (misalnya: angka vs kata, pertanyaan vs pernyataan, pendek vs panjang), (2) Tetap konsisten dengan brand voice, (3) Dapat diukur efektivitasnya. Jelaskan hipotesis untuk setiap variasi dan metrik apa yang akan diukur. Format tabel untuk memudahkan perbandingan.

Hasil yang diharapkan:
Tabel variasi dengan hipotesis dan metrik pengukuran.

---

### P-086. Copy Iklan Retargeting

Kapan pakai:
> Membuat copy iklan retargeting untuk pengunjung yang belum konversi

Variabel:
- [PRODUK]: produk yang dilihat pengunjung
- [ALASAN_TIDAK_KONVERSI]: dugaan alasan belum membeli (harga, ragu, lupa)
- [INSENTIF]: insentif untuk kembali dan membeli
- [URGENCY]: elemen urgensi yang bisa ditambahkan

Prompt:
> Buat 3 variasi copy retargeting ad untuk [PRODUK] dengan asumsi [ALASAN_TIDAK_KONVERSI], menawarkan [INSENTIF], dan menambahkan [URGENCY]. Setiap copy harus: (1) Mengingatkan tentang produk yang dilihat, (2) Menawarkan insentif atau solusi atas keraguan, (3) Menciptakan urgensi untuk bertindak sekarang, (4) CTA yang jelas. Total 80-100 kata per variasi. Gunakan bahasa yang personal dan tidak agresif.

Hasil yang diharapkan:
Tiga variasi 80-100 kata dengan reminder, insentif, urgency, dan CTA.

---

### P-087. Pesan untuk Audiens Lookalike

Kapan pakai:
> Membuat pesan untuk audiens yang mirip dengan pelanggan terbaik

Variabel:
- [CUSTOMER_PROFILE]: profil pelanggan terbaik
- [PRODUK_LAYANAN]: produk atau layanan yang ditawarkan
- [VALUE_PROPOSITION]: nilai utama yang ditawarkan

Prompt:
> Buat copy iklan untuk lookalike audience yang mirip dengan [CUSTOMER_PROFILE] untuk [PRODUK_LAYANAN] dengan [VALUE_PROPOSITION]. Pesan harus: (1) Berasumsi bahwa audiens sudah memiliki karakteristik serupa dengan pelanggan terbaik, (2) Menyoroti value proposition yang paling relevan dengan profil tersebut, (3) Menggunakan bahasa dan tone yang sesuai dengan demografis target, (4) Social proof yang relevan. Total 120-150 kata.

Hasil yang diharapkan:
Copy 120-150 kata yang ditargetkan untuk lookalike audience.

---

### P-088. Ide Konten Musiman

Kapan pakai:
> Membuat ide konten untuk momen tertentu

Variabel:
- [MOMEN]: momen atau perayaan (Ramadan, Natal, Tahun Baru, dll)
- [INDUSTRI]: industri bisnis
- [PRODUK]: produk yang relevan dengan momen

Prompt:
> Buat 10 ide konten [MOMEN] untuk [INDUSTRI] yang mempromosikan [PRODUK]. Bagi menjadi: (1) 3 ide konten edukasi (tips, tutorial, informasi), (2) 3 ide konten promosi (penawaran, bundle, diskon), (3) 2 ide konten engagement (kontes, quiz, polling), (4) 2 ide konten behind-the-scene (proses, tim, cerita). Untuk setiap ide, berikan: judul, format, caption singkat (50-80 kata), dan waktu posting optimal.

Hasil yang diharapkan:
Sepuluh ide konten dengan detail lengkap.

---

### P-089. Strategi Hashtag

Kapan pakai:
> Membuat strategi hashtag untuk platform tertentu

Variabel:
- [PLATFORM]: platform yang digunakan
- [INDUSTRI]: industri bisnis
- [TARGET_AUDIENCE]: siapa target audiens
- [TUJUAN]: tujuan penggunaan hashtag (reach, engagement, branding)

Prompt:
> Buat strategi hashtag [PLATFORM] untuk [INDUSTRI] yang menargetkan [TARGET_AUDIENCE] dengan tujuan [TUJUAN]. Struktur: (1) 5 hashtag branded (nama brand atau campaign), (2) 10 hashtag industri (relevan dengan niche), (3) 10 hashtag trending (sedang populer), (4) 5 hashtag komunitas (komunitas target), (5) Panduan penggunaan (berapa per posting, kombinasi optimal). Jelaskan mengapa setiap kategori penting.

Hasil yang diharapkan:
Strategi hashtag dengan 30 hashtag dalam 5 kategori dan panduan penggunaan.

---

### P-090. Rencana Daur Ulang Konten

Kapan pakai:
> Merencanakan penggunaan ulang konten untuk platform berbeda

Variabel:
- [KONTEN_ASAL]: konten asli (blog post, video panjang, podcast)
- [PLATFORM_TUJUAN]: platform yang akan diisi konten turunan
- [JUMLAH_VARIASI]: berapa banyak konten turunan yang diinginkan

Prompt:
> Buat rencana repurposing [KONTEN_ASAL] untuk [PLATFORM_TUJUAN] dengan [JUMLAH_VARIASI] konten turunan. Untuk setiap platform, tentukan: (1) Format konten (carousel, reel, thread, dll), (2) Bagian mana dari konten asal yang akan digunakan, (3) Penyesuaian yang perlu dilakukan (panjang, tone, format), (4) Timeline posting. Buat tabel yang memudahkan eksekusi.

Hasil yang diharapkan:
Tabel repurposing plan dengan detail per platform.

---

### P-091. Post Umpan Interaksi

Kapan pakai:
> Membuat postingan yang memancing interaksi

Variabel:
- [TOPIK]: topik postingan
- [JENIS_INTERAKSI]: jenis interaksi yang diinginkan (komentar, share, save)
- [TARGET_AUDIENCE]: siapa target audiens

Prompt:
> Buat 5 variasi engagement bait post tentang [TOPIK] untuk [TARGET_AUDIENCE] yang memancing [JENIS_INTERAKSI]. Setiap post harus: (1) Mengandung pertanyaan terbuka atau pernyataan provokatif (tidak kontroversial negatif), (2) Relevan dengan minat target audiens, (3) Mudah direspons (tidak butuh pemikiran panjang), (4) Menggunakan format yang mendorong interaksi (poll, quiz, "tag teman kamu"). Total 50-80 kata per post.

Hasil yang diharapkan:
Lima post 50-80 kata yang memancing interaksi.

---

### P-092. Seri Post Storytelling

Kapan pakai:
> Membuat serial postingan dengan narasi berkelanjutan

Variabel:
- [TEMA_SERI]: tema atau cerita utama
- [JUMLAH_POSTING]: berapa posting dalam serial
- [PLATFORM]: platform yang digunakan
- [TUJUAN]: tujuan serial (brand awareness, edukasi, promosi)

Prompt:
> Buat outline serial postingan [JUMLAH_POSTING] tentang [TEMA_SERI] di [PLATFORM] dengan tujuan [TUJUAN]. Untuk setiap posting: (1) Judul atau hook, (2) Bagian cerita yang akan dibahas, (3) Caption 100-150 kata, (4) Visual atau format yang sesuai, (5) CTA yang mengarah ke posting berikutnya. Pastikan serial memiliki alur yang koheren dan setiap posting bisa berdiri sendiri.

Hasil yang diharapkan:
Outline serial dengan detail per posting.

---

### P-093. Copy Meme Marketing

Kapan pakai:
> Membuat caption untuk konten meme marketing

Variabel:
- [TOPIK_MEME]: topik atau situasi yang akan dijadikan meme
- [BRAND]: nama brand
- [PESAN]: pesan yang ingin disampaikan melalui meme
- [TARGET_AUDIENCE]: siapa target audiens

Prompt:
> Buat 5 caption meme marketing untuk [TOPIK_MEME] dari [BRAND] dengan pesan [PESAN] untuk [TARGET_AUDIENCE]. Setiap caption harus: (1) Relevan dengan format meme yang populer, (2) Menyampaikan pesan brand secara subtil, (3) Menggunakan bahasa yang sesuai dengan audiens (casual, slang jika perlu), (4) Tidak ofensif atau kontroversial negatif, (5) Maksimal 50 kata. Jelaskan format meme yang cocok untuk setiap caption.

Hasil yang diharapkan:
Lima caption 50 kata dengan penjelasan format meme.

---

### P-094. Poll atau Quiz Post

Kapan pakai:
> Membuat postingan interaktif berupa poll atau quiz

Variabel:
- [TOPIK]: topik poll atau quiz
- [JENIS]: poll (pilihan ganda) atau quiz (pertanyaan pengetahuan)
- [TUJUAN]: tujuan (engagement, riset pasar, edukasi)
- [PLATFORM]: platform yang digunakan

Prompt:
> Buat [JENIS] tentang [TOPIK] di [PLATFORM] dengan tujuan [TUJUAN]. Untuk poll: (1) Pertanyaan yang jelas, (2) 3-4 pilihan jawaban yang menarik, (3) Caption 50-80 kata yang menjelaskan konteks. Untuk quiz: (1) 3-5 pertanyaan dengan tingkat kesulitan bertahap, (2) Pilihan jawaban untuk setiap pertanyaan, (3) Kunci jawaban dengan penjelasan, (4) Caption 80-100 kata yang memancing partisipasi.

Hasil yang diharapkan:
Poll atau quiz lengkap dengan caption.

---

### P-095. Post Berbagi Testimoni

Kapan pakai:
> Membagikan testimoni pelanggan di media sosial

Variabel:
- [TESTIMONI]: testimoni pelanggan
- [NAMA_PELANGGAN]: nama pelanggan (dengan izin)
- [PRODUK]: produk yang digunakan
- [PLATFORM]: platform yang digunakan

Prompt:
> Buat postingan untuk membagikan [TESTIMONI] dari [NAMA_PELANGGAN] tentang [PRODUK] di [PLATFORM]. Struktur: (1) Headline yang menarik ("Pelanggan kami berkata...", "Cerita sukses dari..."), (2) Testimoni lengkap dalam format kutipan, (3) Foto atau visual pelanggan (dengan izin), (4) Penjelasan singkat tentang bagaimana produk membantu, (5) CTA untuk pelanggan lain berbagi cerita. Total 120-150 kata. Gunakan bahasa yang apresiatif dan autentik.

Hasil yang diharapkan:
Postingan 120-150 kata yang mengapresiasi pelanggan.

---

### P-096. Konten Di Balik Layar

Kapan pakai:
> Membuat konten behind-the-scene untuk membangun koneksi

Variabel:
- [AKTIVITAS]: aktivitas yang akan ditampilkan (proses produksi, keseharian tim, dll)
- [BRAND]: nama brand
- [PESAN]: pesan yang ingin disampaikan
- [PLATFORM]: platform yang digunakan

Prompt:
> Buat konten behind-the-scene [AKTIVITAS] untuk [BRAND] dengan pesan [PESAN] di [PLATFORM]. Struktur: (1) Hook yang memancing rasa ingin tahu ("Inilah cara kami...", "Di balik layar..."), (2) Deskripsi aktivitas 3-5 kalimat, (3) Foto atau video yang mendukung, (4) Pesan tentang nilai atau prinsip brand yang tercermin, (5) CTA untuk interaksi. Total 100-150 kata. Gunakan bahasa yang personal dan transparan.

Hasil yang diharapkan:
Konten 100-150 kata yang personal dan transparan.

---

### P-097. Carousel Edukasi

Kapan pakai:
> Membuat carousel edukasi untuk Instagram atau LinkedIn

Variabel:
- [TOPIK]: topik edukasi
- [JUMLAH_POIN]: berapa poin atau langkah yang akan dibahas
- [TARGET_AUDIENCE]: siapa target pembaca
- [LEVEL]: tingkat kesulitan (pemula, menengah, advanced)

Prompt:
> Buat carousel edukasi [JUMLAH_POIN] slide tentang [TOPIK] untuk [TARGET_AUDIENCE] level [LEVEL] di Instagram/LinkedIn. Struktur: (1) Slide 1: Headline yang menarik + subtitle, (2) Slide 2-[JUMLAH_POIN]+1: Satu poin per slide dengan judul, penjelasan 30-50 kata, dan visual suggestion, (3) Slide terakhir: Kesimpulan + CTA. Total konten 200-300 kata. Gunakan bahasa yang jelas dan mudah dipahami.

Hasil yang diharapkan:
Carousel dengan headline, poin-poin terstruktur, dan kesimpulan.

---

### P-098. Naskah Live Shopping

Kapan pakai:
> Membuat script untuk live shopping di platform e-commerce

Variabel:
- [PRODUK]: produk yang akan dijual
- [FITUR_UTAMA]: 3-5 fitur utama produk
- [HARGA_NORMAL]: harga normal
- [HARGA_LIVE]: harga khusus selama live
- [DURASI_LIVE]: durasi live (30-60 menit)

Prompt:
> Buat script live shopping [DURASI_LIVE] menit untuk [PRODUK] dengan [FITUR_UTAMA], [HARGA_NORMAL], dan [HARGA_LIVE]. Struktur: (1) Pembuka 5 menit: sapaan, perkenalan, teaser produk, (2) Segmen 1 (10 menit): Demo produk dan penjelasan fitur, (3) Segmen 2 (10 menit): Testimoni atau review, (4) Segmen 3 (10 menit): Pengumuman harga live dan cara order, (5) Segmen 4 (10 menit): Q&A dan closing. Setiap segmen berisi talking points 50-80 kata. Total script 300-400 kata.

Hasil yang diharapkan:
Script 300-400 kata dengan struktur segmen dan talking points.

---

### P-099. Pembaruan Bio Media Sosial

Kapan pakai:
> Memperbarui bio media sosial untuk campaign tertentu

Variabel:
- [PLATFORM]: platform yang akan diupdate
- [CAMPAIGN]: campaign atau promosi yang sedang berjalan
- [LINK_TUJUAN]: link yang ingin ditonjolkan
- [CTA_UTAMA]: call-to-action utama

Prompt:
> Buat 3 variasi bio [PLATFORM] untuk [CAMPAIGN] dengan [LINK_TUJUAN] dan [CTA_UTAMA]. Setiap bio harus: (1) Nama: mengandung kata kunci campaign, (2) Deskripsi: 1-2 kalimat tentang campaign (20-30 kata), (3) CTA: ajakan untuk klik link, (4) Emoji: 1-2 emoji relevan. Total bio maksimal 150 karakter. Pastikan bio tetap profesional dan sesuai dengan brand identity.

Hasil yang diharapkan:
Tiga variasi bio maksimal 150 karakter.

---

### P-100. Strategi Promosi Lintas Platform

Kapan pakai:
> Merencanakan promosi lintas platform

Variabel:
- [CAMPAIGN]: campaign atau produk yang dipromosikan
- [PLATFORM]: platform yang akan digunakan (minimal 3)
- [TARGET_AUDIENCE]: target audiens
- [TUJUAN]: tujuan campaign

Prompt:
> Buat strategi promosi lintas platform untuk [CAMPAIGN] di [PLATFORM] yang menargetkan [TARGET_AUDIENCE] dengan tujuan [TUJUAN]. Untuk setiap platform: (1) Peran platform dalam strategi, (2) Jenis konten yang sesuai, (3) Frekuensi posting, (4) Caption atau script singkat (50-80 kata), (5) Hashtag atau kata kunci, (6) Timeline posting. Pastikan pesan konsisten namun disesuaikan dengan karakteristik setiap platform.

Hasil yang diharapkan:
Strategi lintas platform dengan detail per platform.

---

### P-101. Instagram Caption untuk Reels

Kapan pakai:
> Membuat caption khusus untuk Instagram Reels

Variabel:
- [TOPIK_REEL]: topik atau konten video
- [SOUND]: sound atau musik yang digunakan
- [TARGET_AUDIENCE]: siapa target penonton
- [CTA]: call-to-action yang diinginkan

Prompt:
> Buat 5 variasi caption Instagram untuk Reels tentang [TOPIK_REEL] dengan [SOUND] untuk [TARGET_AUDIENCE] dengan [CTA]. Setiap caption harus: (1) Hook 1 kalimat pertama yang relevan dengan video, (2) 2-3 kalimat penjelasan atau konteks, (3) CTA yang jelas, (4) 5-8 hashtag relevan, (5) Mention akun terkait jika ada. Total 80-120 kata. Caption Reels harus lebih singkat dan langsung dibanding caption feed.

Hasil yang diharapkan:
Lima caption 80-120 kata yang singkat dan langsung.

---

### P-102. Konsep Seri TikTok

Kapan pakai:
> Merencanakan serial konten TikTok

Variabel:
- [TEMA_SERI]: tema utama serial
- [JUMLAH_EPISODE]: berapa episode
- [DURASI_PER_EPISODE]: durasi setiap video
- [TARGET_AUDIENCE]: siapa target penonton

Prompt:
> Buat konsep serial TikTok [JUMLAH_EPISODE] episode tentang [TEMA_SERI] dengan [DURASI_PER_EPISODE] per episode untuk [TARGET_AUDIENCE]. Untuk setiap episode: (1) Judul episode, (2) Hook 3 detik pertama, (3) Konten utama 50-80 kata, (4) CTA di akhir, (5) Hashtag serial yang konsisten. Pastikan setiap episode bisa berdiri sendiri namun terhubung dalam narasi serial.

Hasil yang diharapkan:
Konsep serial dengan detail per episode.

---

### P-103. Post Grup Facebook

Kapan pakai:
> Membuat postingan untuk grup Facebook

Variabel:
- [TOPIK]: topik diskusi atau sharing
- [JENIS_GRUP]: jenis grup (komunitas, support group, professional group)
- [TUJUAN]: tujuan postingan (edukasi, engagement, promosi subtil)
- [TARGET_AUDIENCE]: anggota grup

Prompt:
> Buat postingan grup Facebook tentang [TOPIK] untuk [JENIS_GRUP] dengan tujuan [TUJUAN] untuk [TARGET_AUDIENCE]. Struktur: (1) Pertanyaan atau pernyataan pembuka yang memancing diskusi, (2) Konten utama 150-200 kata yang memberikan nilai, (3) Pertanyaan lanjutan untuk engagement, (4) CTA subtil jika relevan. Gunakan bahasa yang conversational dan sesuai dengan norma grup. Hindari hard selling.

Hasil yang diharapkan:
Postingan 150-200 kata yang memancing diskusi.

---

### P-104. Permintaan Rekomendasi LinkedIn

Kapan pakai:
> Meminta rekomendasi LinkedIn dari klien atau kolega

Variabel:
- [NAMA_PEMBERI_REKOMENDASI]: siapa yang diminta rekomendasi
- [HUBUNGAN]: hubungan profesional
- [PROYEK_KOLABORASI]: proyek yang dikerjakan bersama
- [KEAHLIAN_YANG_INGIN_DITONJOLKAN]: keahlian yang ingin ditampilkan

Prompt:
> Buat pesan permintaan rekomendasi LinkedIn untuk [NAMA_PEMBERI_REKOMENDASI] yang memiliki [HUBUNGAN] melalui [PROYEK_KOLABORASI] dengan menonjolkan [KEAHLIAN_YANG_INGIN_DITONJOLKAN]. Struktur: (1) Pembuka yang personal dan mengingatkan kolaborasi, (2) Permintaan rekomendasi dengan sopan, (3) Panduan singkat tentang apa yang bisa ditonjolkan, (4) Apresiasi dan tawaran untuk memberikan rekomendasi balik. Total 120-150 kata. Gunakan bahasa profesional namun hangat.

Hasil yang diharapkan:
Pesan 120-150 kata yang personal dan profesional.

---

### P-105. Grafis Kutipan Media Sosial

Kapan pakai:
> Membuat teks untuk graphic quote di media sosial

Variabel:
- [TOPIK]: topik quote
- [SUMBER]: sumber quote (tokoh, buku, atau original)
- [TARGET_AUDIENCE]: siapa target pembaca
- [BRAND_VOICE]: nada bicara brand

Prompt:
> Buat 10 variasi quote tentang [TOPIK] dari [SUMBER] untuk [TARGET_AUDIENCE] dengan [BRAND_VOICE]. Setiap quote harus: (1) Maksimal 20 kata, (2) Inspiratif atau insightful, (3) Relevan dengan target audiens, (4) Sesuai dengan brand voice, (5) Mudah dibaca dalam format graphic. Sertakan saran visual untuk setiap quote (warna, font style, layout).

Hasil yang diharapkan:
Sepuluh quote 20 kata dengan saran visual.

---

### P-106. Instagram Story Poll atau Quiz

Kapan pakai:
> Membuat story interaktif dengan poll atau quiz

Variabel:
- [TOPIK]: topik poll atau quiz
- [JENIS]: poll atau quiz
- [TUJUAN]: tujuan (engagement, riset, edukasi)
- [PRODUK]: produk yang relevan (opsional)

Prompt:
> Buat [JENIS] Instagram Story tentang [TOPIK] dengan tujuan [TUJUAN] yang relevan dengan [PRODUK]. Untuk poll: (1) Pertanyaan yang menarik, (2) 2-4 pilihan jawaban, (3) Story sequence 3-5 slide dengan konteks. Untuk quiz: (1) 3-5 pertanyaan dengan pilihan ganda, (2) Kunci jawaban di slide berikutnya, (3) Penjelasan singkat untuk setiap jawaban. Total teks 80-120 kata. Gunakan stiker poll/quiz dan slider.

Hasil yang diharapkan:
Poll atau quiz lengkap dengan sequence story.

---

### P-107. TikTok Duet Challenge

Kapan pakai:
> Membuat challenge untuk duet TikTok

Variabel:
- [TEMA_CHALLENGE]: tema atau konsep challenge
- [ATURAN]: aturan duet
- [PRODUK_BRAND]: produk atau brand yang dipromosikan
- [HASHTAG_CHALLENGE]: hashtag untuk challenge

Prompt:
> Buat konsep TikTok duet challenge [TEMA_CHALLENGE] dengan [ATURAN] untuk mempromosikan [PRODUK_BRAND] menggunakan [HASHTAG_CHALLENGE]. Struktur: (1) Judul challenge yang catchy, (2) Penjelasan aturan 3-5 poin, (3) Contoh script video original 15-30 detik, (4) Saran duet response, (5) Hadiah atau insentif jika ada. Total 150-200 kata. Pastikan challenge mudah diikuti dan viral-worthy.

Hasil yang diharapkan:
Konsep challenge 150-200 kata yang mudah diikuti.

---

### P-108. Deskripsi Acara Facebook

Kapan pakai:
> Membuat deskripsi event Facebook

Variabel:
- [NAMA_EVENT]: nama acara
- [TANGGAL_WAKTU]: kapan acara berlangsung
- [LOKASI]: di mana acara (online atau offline)
- [AGENDA]: apa yang akan dibahas
- [SPEAKER]: pembicara jika ada
- [BIAYA]: biaya pendaftaran

Prompt:
> Buat deskripsi event Facebook untuk [NAMA_EVENT] pada [TANGGAL_WAKTU] di [LOKASI] dengan [AGENDA], [SPEAKER], dan [BIAYA]. Struktur: (1) Hook 2-3 kalimat yang menjelaskan mengapa event ini penting, (2) Detail event (tanggal, waktu, lokasi), (3) Agenda atau rundown, (4) Profil pembicara, (5) Informasi pendaftaran dan biaya, (6) FAQ singkat (3-5 pertanyaan umum). Total 300-400 kata. Gunakan bahasa yang antusias dan informatif.

Hasil yang diharapkan:
Deskripsi 300-400 kata dengan struktur lengkap.

---

### P-109. Seri Artikel LinkedIn

Kapan pakai:
> Merencanakan serial artikel LinkedIn

Variabel:
- [TEMA_SERI]: tema utama serial
- [JUMLAH_ARTIKEL]: berapa artikel dalam serial
- [TARGET_AUDIENCE]: siapa target pembaca
- [TUJUAN]: tujuan serial

Prompt:
> Buat outline serial artikel LinkedIn [JUMLAH_ARTIKEL] tentang [TEMA_SERI] untuk [TARGET_AUDIENCE] dengan tujuan [TUJUAN]. Untuk setiap artikel: (1) Judul yang menarik, (2) Subtitle 1 kalimat, (3) 3-5 poin utama yang akan dibahas, (4) Key takeaway, (5) CTA untuk artikel berikutnya. Pastikan serial memiliki alur yang koheren dan setiap artikel memberikan nilai mandiri.

Hasil yang diharapkan:
Outline serial dengan detail per artikel.

---

### P-110. Post Komunitas YouTube

Kapan pakai:
> Membuat postingan untuk tab Community YouTube

Variabel:
- [TOPIK]: topik postingan
- [JENIS]: jenis postingan (poll, update, teaser, behind-the-scene)
- [TARGET_AUDIENCE]: subscriber channel
- [TUJUAN]: tujuan postingan

Prompt:
> Buat postingan Community YouTube tentang [TOPIK] dengan jenis [JENIS] untuk [TARGET_AUDIENCE] dengan tujuan [TUJUAN]. Struktur: (1) Hook 1-2 kalimat pertama, (2) Isi postingan 100-150 kata, (3) Gambar atau poll jika relevan, (4) CTA untuk subscribe, like, atau komentar. Gunakan bahasa yang casual dan personal. Community post adalah cara menjaga engagement antar video.

Hasil yang diharapkan:
Postingan 100-150 kata dengan hook, isi, dan CTA.

---

### P-111. Teks Sampul Highlight Instagram

Kapan pakai:
> Membuat teks untuk cover highlight Instagram

Variabel:
- [KATEGORI_HIGHLIGHT]: kategori konten (Produk, Testimoni, FAQ, Tutorial, dll)
- [BRAND]: nama brand
- [STYLE]: gaya bahasa (formal, casual, playful)

Prompt:
> Buat 10 variasi teks cover highlight Instagram untuk [KATEGORI_HIGHLIGHT] dari [BRAND] dengan [STYLE]. Setiap teks harus: (1) Maksimal 3 kata, (2) Jelas dan mudah dipahami, (3) Konsisten dengan brand style, (4) Menggunakan emoji jika sesuai. Berikan alternatif dengan dan tanpa emoji.

Hasil yang diharapkan:
Sepuluh variasi 3 kata dengan opsi emoji.

---

### P-112. Hook Iklan Media Sosial

Kapan pakai:
> Membuat hook untuk iklan media sosial

Variabel:
- [PRODUK]: produk yang diiklankan
- [PLATFORM]: platform iklan (Facebook, Instagram, TikTok)
- [TARGET_AUDIENCE]: siapa target iklan
- [MASALAH]: masalah yang diselesaikan produk

Prompt:
> Buat 10 variasi hook iklan [PLATFORM] untuk [PRODUK] yang menyelesaikan [MASALAH] bagi [TARGET_AUDIENCE]. Setiap hook harus: (1) 3-5 detik pertama yang menangkap perhatian, (2) Menggunakan pola yang terbukti efektif (pertanyaan, pernyataan kontroversial, angka spesifik, story time), (3) Relevan dengan masalah target, (4) Menciptakan curiosity gap. Setiap hook 10-15 kata. Sertakan saran visual untuk setiap hook.

Hasil yang diharapkan:
Sepuluh hook 10-15 kata dengan saran visual.

---

### P-113. Instagram Caption untuk Feed Edukasi

Kapan pakai:
> Membuat caption untuk postingan edukasi di feed Instagram

Variabel:
- [TOPIK_EDUKASI]: topik yang diajarkan
- [JUMLAH_TIPS]: berapa tips atau poin
- [TARGET_AUDIENCE]: siapa target pembaca
- [CTA]: call-to-action

Prompt:
> Buat caption Instagram untuk postingan edukasi tentang [TOPIK_EDUKASI] dengan [JUMLAH_TIPS] tips untuk [TARGET_AUDIENCE] dengan [CTA]. Struktur: (1) Hook 1-2 kalimat yang menjelaskan nilai postingan, (2) Daftar tips dengan numbering, (3) Penjelasan singkat setiap tip (total body 150-200 kata), (4) CTA untuk save, share, atau komentar, (5) 8-12 hashtag relevan. Gunakan emoji untuk bullet point dan spacing untuk readability.

Hasil yang diharapkan:
Caption 150-200 kata dengan struktur hook-tips-CTA-hashtag.

---

### P-114. Templat Balasan Komentar TikTok

Kapan pakai:
> Merespons komentar di TikTok dengan konsisten

Variabel:
- [JENIS_KOMENTAR]: jenis komentar (pertanyaan, pujian, kritik, spam)
- [BRAND]: nama brand
- [TONE]: nada respons (friendly, profesional, playful)

Prompt:
> Buat 5 template respons TikTok untuk [JENIS_KOMENTAR] dari [BRAND] dengan [TONE]. Setiap respons harus: (1) Singkat (20-40 kata), (2) Personal dan autentik, (3) Menjawab atau mengakui komentar, (4) Mendorong interaksi lanjutan jika relevan, (5) Sesuai dengan brand tone. Hindari respons yang terlihat seperti bot atau template kaku.

Hasil yang diharapkan:
Lima template 20-40 kata yang personal dan autentik.

---

### P-115. Balasan Otomatis Facebook Messenger

Kapan pakai:
> Membuat auto-response untuk Facebook Messenger

Variabel:
- [JENIS_PESAN]: jenis pesan yang diterima (sapaan, pertanyaan produk, komplain)
- [INFORMASI_YANG_PERLU]: informasi yang perlu diberikan
- [CTA]: call-to-action yang diinginkan

Prompt:
> Buat auto-response Messenger untuk [JENIS_PESAN] yang memberikan [INFORMASI_YANG_PERLU] dengan [CTA]. Struktur: (1) Sapaan personal, (2) Acknowledgment pesan, (3) Informasi yang diminta atau estimasi waktu respons, (4) CTA atau quick reply options, (5) Penutup yang ramah. Total 60-80 kata. Gunakan bahasa yang conversational dan helpful.

Hasil yang diharapkan:
Auto-response 60-80 kata yang helpful dan friendly.

---

### P-116. Pilar Konten Media Sosial

Kapan pakai:
> Merencanakan content pillar untuk media sosial

Variabel:
- [BRAND]: nama brand
- [INDUSTRI]: industri bisnis
- [TARGET_AUDIENCE]: siapa target audiens
- [TUJUAN]: tujuan content marketing

Prompt:
> Buat 5 content pillar untuk [BRAND] di [INDUSTRI] yang menargetkan [TARGET_AUDIENCE] dengan tujuan [TUJUAN]. Untuk setiap pillar: (1) Nama pillar, (2) Deskripsi 1-2 kalimat, (3) Jenis konten yang sesuai (edukasi, promosi, engagement, BTS, UGC), (4) Frekuensi posting per minggu, (5) Contoh 3 ide konten. Pastikan pillar seimbang dan mencakup seluruh funnel (awareness, consideration, conversion).

Hasil yang diharapkan:
Lima content pillar dengan detail lengkap.

---

### P-117. Sekuens Instagram Story

Kapan pakai:
> Membuat sequence story Instagram untuk storytelling

Variabel:
- [TOPIK]: topik cerita
- [JUMLAH_SLIDE]: berapa slide story
- [TUJUAN]: tujuan (edukasi, promosi, engagement)
- [CTA]: call-to-action di akhir

Prompt:
> Buat sequence Instagram Story [JUMLAH_SLIDE] slide tentang [TOPIK] dengan tujuan [TUJUAN] dan [CTA] di akhir. Untuk setiap slide: (1) Teks 15-25 kata, (2) Saran visual atau background, (3) Stiker atau fitur interaktif (poll, quiz, question box, link). Pastikan alur cerita mengalir natural dari slide pertama hingga terakhir. Total 80-120 kata untuk seluruh sequence.

Hasil yang diharapkan:
Sequence dengan teks, visual, dan stiker per slide.

---

### P-118. Peningkat Interaksi Post LinkedIn

Kapan pakai:
> Meningkatkan engagement postingan LinkedIn

Variabel:
- [TOPIK_POSTING]: topik postingan
- [INSIGHT_UTAMA]: insight atau pelajaran utama
- [TARGET_AUDIENCE]: profesional target
- [JENIS_ENGAGEMENT]: jenis engagement yang diinginkan (komentar, share, koneksi)

Prompt:
> Buat postingan LinkedIn tentang [TOPIK_POSTING] dengan [INSIGHT_UTAMA] untuk [TARGET_AUDIENCE] yang memancing [JENIS_ENGAGEMENT]. Struktur: (1) Hook 1-2 kalimat pertama yang provokatif atau surprising, (2) Story atau konteks personal 2-3 paragraf, (3) Insight utama dalam 3-5 bullet point, (4) Pertanyaan terbuka untuk memancing komentar, (5) Tag orang atau perusahaan yang relevan. Total 250-300 kata. Gunakan formatting yang mudah dibaca (spasi, bullet, emoji secukupnya).

Hasil yang diharapkan:
Postingan 250-300 kata yang memancing engagement.

---

### P-119. SEO Deskripsi Video TikTok

Kapan pakai:
> Membuat deskripsi video TikTok yang SEO-friendly

Variabel:
- [TOPIK_VIDEO]: topik video
- [KATA_KUNCI]: kata kunci yang ingin ditargetkan
- [TARGET_AUDIENCE]: siapa target penonton
- [TRENDING_SOUND]: sound yang sedang trending (jika ada)

Prompt:
> Buat 5 variasi deskripsi TikTok untuk [TOPIK_VIDEO] dengan kata kunci [KATA_KUNCI] untuk [TARGET_AUDIENCE] menggunakan [TRENDING_SOUND]. Setiap deskripsi harus: (1) Kalimat pertama mengandung kata kunci utama, (2) 2-3 kalimat penjelasan yang natural, (3) CTA untuk follow atau like, (4) 3-5 hashtag relevan (mix antara trending dan niche), (5) Mention @akun terkait jika ada. Total 50-80 kata. Optimalkan untuk pencarian TikTok.

Hasil yang diharapkan:
Lima deskripsi 50-80 kata yang SEO-friendly.

---

### P-120. Brief Kampanye Lintas Platform

Kapan pakai:
> Membuat brief campaign lintas platform

Variabel:
- [NAMA_CAMPAIGN]: nama campaign
- [TUJUAN]: tujuan campaign
- [TARGET_AUDIENCE]: siapa target audiens
- [PLATFORM]: platform yang digunakan
- [DURASI]: berapa lama campaign berjalan
- [BUDGET]: anggaran (opsional)

Prompt:
> Buat brief campaign [NAMA_CAMPAIGN] dengan tujuan [TUJUAN] untuk [TARGET_AUDIENCE] di [PLATFORM] selama [DURASI] dengan [BUDGET]. Struktur brief: (1) Executive summary 2-3 kalimat, (2) Target audience profile, (3) Key message dan value proposition, (4) Platform strategy (peran masing-masing platform), (5) Content calendar singkat, (6) KPI dan metrik keberhasilan, (7) Budget allocation jika ada. Total 400-500 kata. Brief harus jelas dan actionable.

Hasil yang diharapkan:
Brief 400-500 kata dengan struktur lengkap.

---

## Ringkasan Cepat Bagian 2

| No | Platform | Jenis Prompt |
|----|----------|--------------|
| P-051 s/d P-055 | Instagram | Caption, Story, Reel, Carousel, Bio |
| P-056 s/d P-059 | TikTok | Naskah, Tren, Hook, Caption |
| P-060 s/d P-063 | Facebook | Iklan, Post Organik |
| P-064 s/d P-065 | Twitter/X | Thread, Tweet Tunggal |
| P-066 s/d P-067 | LinkedIn | Post, Artikel |
| P-068 s/d P-070 | YouTube | Judul, Deskripsi, Shorts |
| P-071 s/d P-072 | Pesan Langsung | WhatsApp, Telegram |
| P-073 s/d P-075 | Lainnya | Pinterest, Kalender, Bio Link |
| P-076 s/d P-100 | Tingkat Lanjut | Edukasi, Seri, Grup, Acara |
| P-101 s/d P-120 | Terkhusus | Lintas platform, SEO, Kampanye |

---

## Contoh Output AI untuk Bagian 2

### P-051. Instagram Caption Produk (Contoh Output)

**Input yang dipakai:**
Produk: Skincare serum vitamin C untuk kulit kusam, harga Rp 120.000, target wanita usia 20-35 tahun, dijual via Instagram.

**Output ChatGPT:**
```
Kulit kusam padahal sudah coba berbagai serum?

Mungkin masalahnya bukan di produk, tapi di konsistensi. Serum vitamin C kami diformulasikan dengan 15% L-ascorbic acid yang stabil, jadi Anda bisa pakai setiap pagi tanpa iritasi.

Hasil yang bisa Anda harapkan dalam 2 minggu:
- Warna kulit lebih merata
- Noda hitam mulai memudar
- Kulit terasa lebih kenyal

Rp 120.000 untuk botol 30ml. Cukup untuk pemakaian 1-2 bulan.

Klik link di bio untuk order. Ada garansi uang kembali 14 hari jika tidak ada perubahan.
```

**Output Gemini:**
```
POV: Kamu finally nemu serum vitamin C yang nggak bikin breakout.

15% L-ascorbic acid, formulasi stabil, bisa dipakai setiap hari. No drama, no iritasi, just glowing skin.

2 minggu pemakaian = kulit lebih cerah dan merata. Garansi uang kembali kalau nggak ada perubahan.

Rp 120.000. Link di bio ya!
```

**Perbandingan:** ChatGPT lebih edukatif dan detail, cocok untuk audience yang suka baca panjang. Gemini lebih casual dan relatable, cocok untuk Gen Z. Pilih sesuai target audience Anda.

---

### P-060. Facebook Ads Primary Text (Contoh Output)

**Input yang dipakai:**
Produk: Kursus online digital marketing untuk pemilik UMKM, harga Rp 299.000 (diskon dari Rp 599.000), 12 modul video, sertifikat, akses selamanya.

**Output ChatGPT:**
```
Pemilik UMKM yang bingung kenapa iklan Facebook-nya nggak menghasilkan penjualan, ini untuk Anda.

Kami sudah membantu 1.500+ pemilik usaha seperti Anda memahami cara kerja iklan digital dari nol. Tanpa jargon teknis, tanpa teori yang nggak bisa dipraktekkan.

Yang Anda dapatkan:
- 12 modul video step-by-step (total 8 jam)
- Template iklan siap pakai untuk 10 industri
- Grup support seumur hidup
- Sertifikat kompetensi

Harga normal Rp 599.000. Hari ini Rp 299.000. Promo berakhir Jumat malam.

Klik "Selengkapnya" untuk lihat silabus lengkap.
```

**Output Gemini:**
```
Iklan Facebook Anda dapat banyak like tapi nggak ada yang beli?

Masalahnya bukan di produk Anda. Masalahnya di cara Anda iklan.

Kursus digital marketing untuk UMKM ini sudah membantu 1.500+ pemilik usaha menghasilkan penjualan pertama mereka dari iklan Facebook.

12 modul. 8 jam video. Template siap pakai. Rp 299.000 (hemat 50%).

Daftar sekarang sebelum harga naik Jumat malam.
```

**Perbandingan:** ChatGPT lebih lengkap dalam menyampaikan semua fitur kursus. Gemini lebih fokus di pain point dan hasil. Untuk Facebook Ads, Gemini biasanya perform lebih baik karena lebih singkat dan langsung ke masalah.


## Latihan Bagian 2

1. Pilih 1 platform yang paling sering digunakan bisnis Anda.
2. Buat content calendar 7 hari menggunakan prompt P-074.
3. Terapkan 3 prompt berbeda untuk platform tersebut (misalnya caption, story, dan reel).
4. Evaluasi hasil dan modifikasi prompt sesuai kebutuhan.

---

## Kesalahan Umum di Bagian 2

**Kesalahan 1: Menggunakan caption yang sama untuk semua platform**
Solusi: Sesuaikan panjang, nada, dan format dengan karakteristik setiap platform.

**Kesalahan 2: Mengabaikan 3 detik pertama video**
Solusi: Hook harus langsung menangkap perhatian, jangan bertele-tele.

**Kesalahan 3: Hashtag berlebihan atau tidak relevan**
Solusi: Gunakan 5-8 hashtag yang benar-benar relevan dan spesifik.

**Kesalahan 4: CTA yang tidak jelas**
Solusi: Setiap postingan harus memiliki satu CTA yang spesifik.

**Kesalahan 5: Tidak konsisten dengan brand voice**
Solusi: Buat guideline brand voice dan gunakan di semua platform.
## Bagian 3: Email Marketing

Bagian ini berisi 50 prompt untuk email marketing: welcome sequence, promotional email, newsletter, re-engagement, dan automation. Setiap prompt dirancang untuk meningkatkan open rate, click-through rate, dan konversi.

---

### P-121. Sekuens Email Sambutan

Kapan pakai:
> Membuat rangkaian email selamat datang untuk subscriber baru

Variabel:
- [NAMA_BRAND]: nama brand atau perusahaan
- [JENIS_BUSINESS]: jenis bisnis (e-commerce, SaaS, jasa, dll)
- [Jumlah_EMAIL]: berapa email dalam sequence (3-7 email)
- [TUJUAN]: tujuan sequence (edukasi, promosi, onboarding)

Prompt:
> Buat welcome email sequence [Jumlah_EMAIL] email untuk [NAMA_BRAND] yang bergerak di [JENIS_BUSINESS] dengan tujuan [TUJUAN]. Untuk setiap email: (1) Subjek email (5-8 kata, memancing open), (2) Preview text (8-10 kata), (3) Body email 150-200 kata, (4) CTA yang jelas, (5) Timing pengiriman (hari ke-berapa setelah subscribe). Sequence harus: (a) Email 1: ucapan terima kasih + nilai instan, (b) Email 2-3: edukasi tentang brand dan produk, (c) Email 4-5: soft sell atau penawaran khusus, (d) Email selanjutnya: engagement atau upsell.

Hasil yang diharapkan:
Sequence lengkap dengan subjek, preview, body, CTA, dan timing untuk setiap email.

---

### P-122. Email Promosi

Kapan pakai:
> Membuat email promosi untuk penawaran khusus

Variabel:
- [PRODUK_LAYANAN]: produk atau layanan yang dipromosikan
- [PENAWARAN]: detail penawaran (diskon, bundle, bonus)
- [TARGET_AUDIENCE]: siapa target penerima email
- [DEADLINE]: batas waktu penawaran
- [CTA_UTAMA]: call-to-action utama

Prompt:
> Buat email promosi untuk [PRODUK_LAYANAN] dengan [PENAWARAN] untuk [TARGET_AUDIENCE] hingga [DEADLINE] dengan [CTA_UTAMA]. Struktur: (1) Subjek email yang urgent dan menarik (5-8 kata), (2) Preview text yang melengkapi subjek (8-10 kata), (3) Pembuka 2-3 kalimat yang langsung pada penawaran, (4) Body 150-200 kata yang menjelaskan nilai produk dan penawaran, (5) CTA yang jelas dan menonjol, (6) P.S. dengan reminder deadline atau bonus tambahan. Gunakan bahasa yang antusias namun tidak spammy.

Hasil yang diharapkan:
Email lengkap dengan subjek, preview, body, CTA, dan P.S.

---

### P-123. Konten Newsletter

Kapan pakai:
> Membuat konten newsletter berkala

Variabel:
- [NAMA_NEWSLETTER]: nama newsletter
- [FREKUENSI]: berapa sering dikirim (mingguan, bulanan)
- [TOPIK_UTAMA]: topik utama edisi ini
- [TOPIK_SEKUNDER]: 2-3 topik tambahan
- [TARGET_AUDIENCE]: siapa subscriber

Prompt:
> Buat konten newsletter [NAMA_NEWSLETTER] edisi [FREKUENSI] dengan [TOPIK_UTAMA] dan [TOPIK_SEKUNDER] untuk [TARGET_AUDIENCE]. Struktur: (1) Subjek email yang menarik (5-8 kata), (2) Preview text (8-10 kata), (3) Pembuka personal 2-3 kalimat, (4) Bagian utama tentang [TOPIK_UTAMA] 200-250 kata, (5) 2-3 bagian singkat tentang [TOPIK_SEKUNDER] masing-masing 50-80 kata, (6) CTA untuk setiap bagian, (7) Penutup personal. Total 400-500 kata. Gunakan format yang mudah di-scan (heading, bullet, spasi).

Hasil yang diharapkan:
Konten newsletter 400-500 kata dengan struktur lengkap.

---

### P-124. Email Keranjang Ditinggalkan

Kapan pakai:
> Mengingatkan pelanggan yang meninggalkan keranjang belanja

Variabel:
- [NAMA_PELANGGAN]: nama pelanggan (jika tersedia)
- [PRODUK_DIKERANJANG]: produk yang ada di keranjang
- [NILAI_KERANJANG]: total nilai keranjang
- [INSENTIF]: insentif untuk menyelesaikan pembelian (diskon, gratis ongkir)
- [BATAS_WAKTU]: deadline insentif

Prompt:
> Buat 3 variasi abandoned cart email untuk [NAMA_PELANGGAN] yang meninggalkan [PRODUK_DIKERANJANG] senilai [NILAI_KERANJANG] dengan [INSENTIF] hingga [BATAS_WAKTU]. Setiap email: (1) Subjek yang personal dan urgent (5-8 kata), (2) Preview text (8-10 kata), (3) Pembuka yang mengingatkan tentang keranjang, (4) Body 100-150 kata yang menjelaskan produk dan insentif, (5) CTA yang jelas "Selesaikan Pembelian", (6) P.S. dengan reminder batas waktu. Variasikan pendekatan: email 1 reminder lembut, email 2 insentif, email 3 urgency.

Hasil yang diharapkan:
Tiga email dengan pendekatan berbeda (reminder, insentif, urgency).

---

### P-125. Re-engagement Email

Kapan pakai:
> Mengaktifkan kembali subscriber yang tidak aktif

Variabel:
- [NAMA_SUBSCRIBER]: nama subscriber
- [DURASI_TIDAK_AKTIF]: berapa lama tidak aktif
- [INSENTIF_KEMBALI]: insentif untuk kembali (diskon, konten eksklusif)
- [PILIHAN]: opsi untuk tetap subscribe atau unsubscribe

Prompt:
> Buat re-engagement email untuk [NAMA_SUBSCRIBER] yang tidak aktif selama [DURASI_TIDAK_AKTIF] dengan [INSENTIF_KEMBALI]. Struktur: (1) Subjek yang memancing rasa ingin tahu ("Kami rindu Anda..." atau "Apakah Anda masih tertarik..."), (2) Preview text (8-10 kata), (3) Pembuka yang empatik dan tidak menyalahkan, (4) Body 120-150 kata yang menjelaskan apa yang telah berubah atau apa yang mereka lewatkan, (5) Penawaran [INSENTIF_KEMBALI], (6) Dua CTA: "Ya, saya ingin tetap menerima email" dan "Tidak, unsubscribe saya", (7) Penutup yang menghargai keputusan mereka. Total 200-250 kata.

Hasil yang diharapkan:
Email 200-250 kata dengan opsi jelas untuk tetap atau unsubscribe.

---

### P-126. Tindak Lanjut Setelah Pembelian

Kapan pakai:
> Email tindak lanjut setelah pembelian

Variabel:
- [NAMA_PELANGGAN]: nama pelanggan
- [PRODUK_YANG_DIBELI]: produk yang dibeli
- [DURASI_PENGGUNAAN]: estimasi waktu penggunaan
- [REQUEST_REVIEW]: apakah meminta review
- [CROSS_SELL]: produk pelengkap yang disarankan

Prompt:
> Buat post-purchase follow-up email untuk [NAMA_PELANGGAN] yang membeli [PRODUK_YANG_DIBELI] setelah [DURASI_PENGGUNAAN] dengan [REQUEST_REVIEW] dan [CROSS_SELL]. Struktur: (1) Subjek yang personal ("Bagaimana [produk] Anda?" atau "Terima kasih telah membeli..."), (2) Preview text (8-10 kata), (3) Ucapan terima kasih dan konfirmasi pembelian, (4) Tips penggunaan produk 100-150 kata, (5) Permintaan review jika [REQUEST_REVIEW] dengan link, (6) Saran [CROSS_SELL] yang relevan, (7) CTA untuk kontak jika ada pertanyaan. Total 250-300 kata.

Hasil yang diharapkan:
Email 250-300 kata dengan tips, review request, dan cross-sell.

---

### P-127. Email Peluncuran Produk

Kapan pakai:
> Mengumumkan peluncuran produk baru via email

Variabel:
- [NAMA_PRODUK]: nama produk baru
- [MASALAH_YANG_DISELESAIKAN]: masalah utama yang diselesaikan
- [FITUR_UTAMA]: 3-5 fitur utama
- [HARGA_PERKENALAN]: harga khusus peluncuran
- [BONUS_EARLY_BIRD]: bonus untuk pembeli awal
- [TANGGAL_PELUNCURAN]: kapan produk tersedia

Prompt:
> Buat rangkaian 3 email peluncuran [NAMA_PRODUK] yang menyelesaikan [MASALAH_YANG_DISELESAIKAN] dengan [FITUR_UTAMA], [HARGA_PERKENALAN], [BONUS_EARLY_BIRD], dan [TANGGAL_PELUNCURAN]. Email 1 (H-7): Teaser "Sesuatu yang besar akan datang" dengan hint tentang produk. Email 2 (H-3): Pengumuman resmi dengan detail fitur dan harga. Email 3 (Hari-H): "Sekarang tersedia" dengan urgency bonus early bird. Setiap email: subjek 5-8 kata, preview 8-10 kata, body 150-200 kata, CTA jelas.

Hasil yang diharapkan:
Tiga email dengan pendekatan teaser-announcement-launch.

---

### P-128. Flash Sale Email

Kapan pakai:
> Mengumumkan penjualan kilat dengan waktu terbatas

Variabel:
- [JENIS_PRODUK]: jenis produk yang di-flash sale
- [DISKON]: besaran diskon
- [DURASI_FLASH_SALE]: berapa lama flash sale berlangsung
- [SYARAT_KETENTUAN]: syarat dan ketentuan jika ada

Prompt:
> Buat flash sale email untuk [JENIS_PRODUK] dengan [DISKON] selama [DURASI_FLASH_SALE] dengan [SYARAT_KETENTUAN]. Struktur: (1) Subjek yang urgent ("FLASH SALE 24 JAM!" atau "Diskon [X]% Hanya Hari Ini"), (2) Preview text yang memperkuat urgency, (3) Pembuka langsung ke penawaran, (4) Body 100-150 kata dengan detail produk dan diskon, (5) Countdown timer atau jam jika memungkinkan, (6) CTA besar dan menonjol "Belanja Sekarang", (7) P.S. dengan reminder durasi. Gunakan bahasa yang energik dan menciptakan FOMO. Total 150-200 kata.

Hasil yang diharapkan:
Email 150-200 kata dengan urgency tinggi dan CTA yang jelas.

---

### P-129. Sekuens Email Edukasi

Kapan pakai:
> Membuat rangkaian email edukasi untuk membangun otoritas

Variabel:
- [TOPIK_EDUKASI]: topik yang akan diajarkan
- [JUMLAH_EMAIL]: berapa email dalam sequence
- [LEVEL_AUDIENCE]: tingkat pengetahuan audiens (pemula, menengah, advanced)
- [PRODUK_RELEVAN]: produk yang relevan dengan topik (untuk soft sell)

Prompt:
> Buat educational email sequence [JUMLAH_EMAIL] email tentang [TOPIK_EDUKASI] untuk [LEVEL_AUDIENCE] yang mengarah pada [PRODUK_RELEVAN]. Untuk setiap email: (1) Subjek yang memancing rasa ingin tahu, (2) Preview text, (3) Body 200-250 kata dengan satu konsep atau tips, (4) Contoh atau studi kasus singkat, (5) CTA untuk membaca email berikutnya atau melihat produk. Sequence harus: (a) Email 1: Konsep dasar, (b) Email 2-3: Tips atau strategi, (c) Email 4-5: Studi kasus atau contoh, (d) Email selanjutnya: Advanced tips + soft sell produk.

Hasil yang diharapkan:
Sequence edukasi yang mengalir dari dasar ke advanced dengan soft sell natural.

---

### P-130. Email Permintaan Testimoni

Kapan pakai:
> Meminta testimoni dari pelanggan via email

Variabel:
- [NAMA_PELANGGAN]: nama pelanggan
- [PRODUK_YANG_DIBELI]: produk yang dibeli
- [DURASI_PENGGUNAAN]: berapa lama menggunakan produk
- [INSENTIF_TESTIMONI]: insentif untuk memberikan testimoni

Prompt:
> Buat email permintaan testimoni untuk [NAMA_PELANGGAN] yang menggunakan [PRODUK_YANG_DIBELI] selama [DURASI_PENGGUNAAN] dengan [INSENTIF_TESTIMONI]. Struktur: (1) Subjek yang personal ("Bagaimana pengalaman Anda dengan [produk]?" atau "Kami ingin mendengar dari Anda"), (2) Preview text, (3) Pembuka yang mengapresiasi pembelian mereka, (4) Body 120-150 kata yang menjelaskan mengapa testimoni penting dan apa yang ingin diketahui, (5) 3-5 pertanyaan spesifik untuk memandu testimoni, (6) Informasi [INSENTIF_TESTIMONI], (7) Link atau cara memberikan testimoni, (8) Penutup yang berterima kasih. Total 200-250 kata.

Hasil yang diharapkan:
Email 200-250 kata dengan pertanyaan spesifik dan insentif.

---

### P-131. Referral Program Email

Kapan pakai:
> Mempromosikan program referral ke pelanggan

Variabel:
- [NAMA_PROGRAM]: nama program referral
- [REWARD_REFERRER]: hadiah untuk yang mereferensikan
- [REWARD_REFEREE]: hadiah untuk yang direferensikan
- [CARA_KERJA]: bagaimana program bekerja

Prompt:
> Buat email promosi [NAMA_PROGRAM] dengan [REWARD_REFERRER] untuk referrer dan [REWARD_REFEREE] untuk referee dengan [CARA_KERJA]. Struktur: (1) Subjek yang menarik ("Dapatkan [reward] dengan mengajak teman!" atau "Program referral kami sudah hadir"), (2) Preview text, (3) Pembuka yang menjelaskan program, (4) Body 150-200 kata dengan detail reward dan cara kerja, (5) Langkah-langkah berpartisipasi dalam format numbered list, (6) CTA "Mulai Referensi" atau "Bagikan Link Anda", (7) P.S. dengan reminder reward. Total 250-300 kata.

Hasil yang diharapkan:
Email 250-300 kata yang jelas dan memotivasi partisipasi.

---

### P-132. Email Kampanye Musiman

Kapan pakai:
> Membuat email untuk campaign musiman (Ramadan, Natal, Tahun Baru)

Variabel:
- [MOMEN]: momen atau perayaan
- [PRODUK_RELEVAN]: produk yang relevan dengan momen
- [PENAWARAN_KHUSUS]: penawaran khusus momen
- [TARGET_AUDIENCE]: siapa target email

Prompt:
> Buat email campaign [MOMEN] untuk [PRODUK_RELEVAN] dengan [PENAWARAN_KHUSUS] untuk [TARGET_AUDIENCE]. Struktur: (1) Subjek yang relevan dengan momen ("Spesial [Momen] untuk Anda" atau "Rayakan [Momen] dengan..."), (2) Preview text yang hangat dan relevan, (3) Pembuka yang menghubungkan momen dengan produk, (4) Body 150-200 kata dengan penawaran khusus dan produk relevan, (5) CTA yang jelas, (6) Penutup yang sesuai dengan semangat momen. Gunakan bahasa yang hangat dan sesuai dengan budaya momen tersebut. Total 200-250 kata.

Hasil yang diharapkan:
Email 200-250 kata yang relevan dengan momen dan hangat.

---

### P-133. Sekuens Email Win-Back

Kapan pakai:
> Rangkaian email untuk memenangkan kembali pelanggan yang hilang

Variabel:
- [JUMLAH_EMAIL]: berapa email dalam sequence
- [DURASI_TIDAK_BELI]: berapa lama tidak membeli
- [INSENTIF_KEMBALI]: insentif untuk kembali
- [PRODUK_BARU]: produk baru yang mungkin menarik

Prompt:
> Buat win-back email sequence [JUMLAH_EMAIL] email untuk pelanggan yang tidak membeli selama [DURASI_TIDAK_BELI] dengan [INSENTIF_KEMBALI] dan [PRODUK_BARU]. Email 1: "Kami rindu Anda" dengan [INSENTIF_KEMBALI]. Email 2: "Lihat apa yang baru" dengan [PRODUK_BARU]. Email 3: "Kesempatan terakhir" dengan urgency insentif berakhir. Setiap email: subjek personal, preview text, body 120-150 kata, CTA jelas. Sequence harus empatik dan tidak menyalahkan.

Hasil yang diharapkan:
Tiga email dengan pendekatan rindu-update-urgency.

---

### P-134. Upsell Email

Kapan pakai:
> Menawarkan upgrade atau produk premium ke pelanggan existing

Variabel:
- [PRODUK_YANG_DIMILIKI]: produk yang saat ini dimiliki pelanggan
- [PRODUK_PREMIUM]: produk premium yang ditawarkan
- [FITUR_TAMBAHAN]: fitur tambahan di produk premium
- [SELISIH_HARGA]: perbedaan harga
- [MANFAAT_UPGRADE]: manfaat upgrade

Prompt:
> Buat upsell email dari [PRODUK_YANG_DIMILIKI] ke [PRODUK_PREMIUM] dengan [SELISIH_HARGA] yang memberikan [FITUR_TAMBAHAN] dan [MANFAAT_UPGRADE]. Struktur: (1) Subjek yang memancing rasa ingin tahu ("Tingkatkan [produk] Anda" atau "Apa yang baru untuk Anda"), (2) Preview text, (3) Pembuka yang mengapresiasi penggunaan produk saat ini, (4) Body 150-200 kata yang menjelaskan fitur tambahan dan manfaat upgrade, (5) Perbandingan value: "[selisih harga] lebih untuk [manfaat]", (6) CTA "Upgrade Sekarang", (7) P.S. dengan testimonial pelanggan yang sudah upgrade. Total 250-300 kata.

Hasil yang diharapkan:
Email 250-300 kata yang menunjukkan value upgrade.

---

### P-135. Cross-Sell Email

Kapan pakai:
> Menawarkan produk pelengkap ke pelanggan

Variabel:
- [PRODUK_YANG_DIBELI]: produk yang baru saja dibeli pelanggan
- [PRODUK_PELENGAP]: produk pelengkap yang ditawarkan
- [MANFAAT_KOMBINASI]: manfaat menggunakan kedua produk
- [DISKON_BUNDEL]: diskon jika membeli bundel

Prompt:
> Buat cross-sell email untuk pelanggan yang membeli [PRODUK_YANG_DIBELI] dengan menawarkan [PRODUK_PELENGAP] yang memberikan [MANFAAT_KOMBINASI] dengan [DISKON_BUNDEL]. Struktur: (1) Subjek yang relevan ("Lengkapi [produk] Anda dengan..." atau "Pasangan sempurna untuk..."), (2) Preview text, (3) Pembuka yang mengakui pembelian mereka, (4) Body 120-150 kata yang menjelaskan mengapa produk pelengkap akan meningkatkan pengalaman mereka, (5) Informasi diskon bundel, (6) CTA "Lengkapi Sekarang", (7) P.S. dengan testimonial tentang kombinasi produk. Total 200-250 kata.

Hasil yang diharapkan:
Email 200-250 kata yang menunjukkan nilai kombinasi produk.

---

### P-136. Email Ulang Tahun

Kapan pakai:
> Mengirim email ucapan ulang tahun dengan penawaran

Variabel:
- [NAMA_PELANGGAN]: nama pelanggan
- [USIA]: usia pelanggan (jika diketahui)
- [PENAWARAN_ULTAH]: penawaran khusus ulang tahun
- [BERLAKU_HINGGA]: batas waktu penawaran

Prompt:
> Buat birthday email untuk [NAMA_PELANGGAN] yang berusia [USIA] dengan [PENAWARAN_ULTAH] berlaku hingga [BERLAKU_HINGGA]. Struktur: (1) Subjek yang personal dan ceria ("Selamat Ulang Tahun, [Nama]!" atau "Hadiah ulang tahun untuk Anda"), (2) Preview text yang hangat, (3) Ucapan ulang tahun yang tulus 2-3 kalimat, (4) Penawaran khusus sebagai hadiah, (5) Cara mengklaim penawaran, (6) CTA "Klaim Hadiah Anda", (7) Penutup hangat. Gunakan bahasa yang personal dan ceria. Total 150-200 kata.

Hasil yang diharapkan:
Email 150-200 kata yang personal dan hangat.

---

### P-137. Email Perayaan Tonggak Capaian

Kapan pakai:
> Merayakan milestone pelanggan (1 tahun, 100 pembelian, dll)

Variabel:
- [NAMA_PELANGGAN]: nama pelanggan
- [MILESTONE]: milestone yang dicapai
- [PENGHARGAAN]: penghargaan atau hadiah untuk milestone
- [STATISTIK]: statistik pencapaian pelanggan

Prompt:
> Buat milestone celebration email untuk [NAMA_PELANGGAN] yang mencapai [MILESTONE] dengan [PENGHARGAAN] dan [STATISTIK]. Struktur: (1) Subjek yang celebratif ("Anda mencapai [milestone]!" atau "Terima kasih telah bersama kami"), (2) Preview text, (3) Ucapan selamat dan apresiasi, (4) Statistik pencapaian mereka dalam format visual atau list, (5) Penghargaan atau hadiah yang ditawarkan, (6) Cara mengklaim hadiah, (7) CTA "Lihat Pencapaian Anda" atau "Klaim Hadiah", (8) Penutup yang tulus. Total 200-250 kata.

Hasil yang diharapkan:
Email 200-250 kata yang celebratif dan apresiatif.

---

### P-138. Email Permintaan Survei

Kapan pakai:
> Meminta pelanggan mengisi survei kepuasan

Variabel:
- [NAMA_PELANGGAN]: nama pelanggan
- [PRODUK_LAYANAN]: produk atau layanan yang dinilai
- [DURASI_SURVEY]: estimasi waktu mengisi survei
- [INSENTIF_SURVEY]: insentif untuk mengisi survei

Prompt:
> Buat survey request email untuk [NAMA_PELANGGAN] tentang [PRODUK_LAYANAN] dengan [DURASI_SURVEY] dan [INSENTIF_SURVEY]. Struktur: (1) Subjek yang personal ("Pendapat Anda penting bagi kami" atau "Bantu kami menjadi lebih baik"), (2) Preview text, (3) Pembuka yang menjelaskan mengapa feedback mereka berharga, (4) Body 100-150 kata tentang survei dan [DURASI_SURVEY], (5) Informasi [INSENTIF_SURVEY], (6) CTA besar "Isi Survei Sekarang", (7) Penutup yang berterima kasih. Total 150-200 kata. Gunakan bahasa yang menghargai waktu mereka.

Hasil yang diharapkan:
Email 150-200 kata yang menghargai waktu pelanggan.

---

### P-139. Email Undangan Acara

Kapan pakai:
> Mengundang pelanggan ke event (webinar, workshop, peluncuran)

Variabel:
- [NAMA_EVENT]: nama acara
- [JENIS_EVENT]: jenis acara (webinar, workshop, meetup)
- [TANGGAL_WAKTU]: kapan acara berlangsung
- [LOKASI]: di mana acara (online atau offline)
- [SPEAKER]: pembicara jika ada
- [BENEFIT]: apa yang didapat peserta
- [BIAYA]: biaya pendaftaran

Prompt:
> Buat event invitation email untuk [NAMA_EVENT] ([JENIS_EVENT]) pada [TANGGAL_WAKTU] di [LOKASI] dengan [SPEAKER] yang memberikan [BENEFIT] dengan [BIAYA]. Struktur: (1) Subjek yang menarik ("Undangan: [Nama Event]" atau "Bergabunglah dengan kami di..."), (2) Preview text, (3) Pembuka yang menjelaskan event dan mengapa penting, (4) Detail event (tanggal, waktu, lokasi, durasi), (5) Profil pembicara atau highlight acara, (6) Benefit yang didapat peserta, (7) Informasi biaya dan cara daftar, (8) CTA "Daftar Sekarang", (9) P.S. dengan urgency (kuota terbatas atau diskon early bird). Total 250-300 kata.

Hasil yang diharapkan:
Email 250-300 kata dengan detail lengkap dan CTA jelas.

---

### P-140. Email Pembaruan Produk

Kapan pakai:
> Mengumumkan update atau fitur baru produk

Variabel:
- [NAMA_PRODUK]: nama produk
- [FITUR_BARU]: fitur atau pembaruan baru
- [MANFAAT_FITUR]: manfaat fitur baru
- [CARA_MENGAKSES]: cara mengakses fitur baru

Prompt:
> Buat product update email untuk [NAMA_PRODUK] yang memperkenalkan [FITUR_BARU] dengan [MANFAAT_FITUR] dan [CARA_MENGAKSES]. Struktur: (1) Subjek yang exciting ("Fitur baru untuk Anda!" atau "[Produk] kini lebih baik"), (2) Preview text, (3) Pembuka yang mengumumkan update, (4) Body 150-200 kata yang menjelaskan fitur baru dan manfaatnya, (5) Screenshot atau visual fitur jika memungkinkan, (6) Cara mengakses fitur, (7) CTA "Coba Sekarang" atau "Pelajari Lebih Lanjut", (8) Penutup yang antusias. Total 200-250 kata.

Hasil yang diharapkan:
Email 200-250 kata yang exciting dan informatif.

---

### P-141. Email Notifikasi Pemeliharaan

Kapan pakai:
> Memberitahu tentang maintenance atau downtime

Variabel:
- [NAMA_LAYANAN]: nama layanan atau produk
- [JENIS_MAINTENANCE]: jenis maintenance (terjadwal, darurat)
- [WAKTU_MULAI]: kapan maintenance dimulai
- [DURASI]: estimasi durasi maintenance
- [DAMPAK]: dampak pada pengguna
- [KONTAK_DARURAT]: kontak untuk pertanyaan

Prompt:
> Buat maintenance notification email untuk [NAMA_LAYANAN] dengan [JENIS_MAINTENANCE] pada [WAKTU_MULAI] selama [DURASI] dengan [DAMPAK] dan [KONTAK_DARURAT]. Struktur: (1) Subjek yang jelas ("Pemberitahuan Maintenance: [Tanggal]" atau "[Layanan] akan mengalami downtime"), (2) Preview text, (3) Pembuka langsung ke informasi maintenance, (4) Detail: waktu mulai, durasi, dampak, (5) Alasan maintenance dan manfaat setelah selesai, (6) Langkah yang perlu disiapkan pengguna, (7) Kontak untuk pertanyaan, (8) Penutup yang apologis dan apresiatif. Total 150-200 kata. Gunakan bahasa yang jelas dan transparan.

Hasil yang diharapkan:
Email 150-200 kata yang jelas dan transparan.

---

### P-142. Email Peringatan Keamanan

Kapan pakai:
> Memberitahu tentang aktivitas keamanan yang mencurigakan

Variabel:
- [NAMA_PENGGUNA]: nama pengguna
- [JENIS_AKTIVITAS]: jenis aktivitas (login dari perangkat baru, perubahan password)
- [WAKTU_AKTIVITAS]: kapan aktivitas terjadi
- [LOKASI_AKTIVITAS]: dari mana aktivitas dilakukan
- [LANGKAH_KEAMANAN]: langkah yang harus diambil pengguna

Prompt:
> Buat security alert email untuk [NAMA_PENGGUNA] tentang [JENIS_AKTIVITAS] pada [WAKTU_AKTIVITAS] dari [LOKASI_AKTIVITAS] dengan [LANGKAH_KEAMANAN]. Struktur: (1) Subjek yang urgent ("Peringatan Keamanan: Aktivitas Tidak Dikenal" atau "Login dari Perangkat Baru"), (2) Preview text, (3) Pembuka langsung ke alert, (4) Detail aktivitas (jenis, waktu, lokasi), (5) Jika ini Anda, abaikan email ini, (6) Jika bukan Anda, [LANGKAH_KEAMANAN] segera, (7) Link ke halaman keamanan atau dukungan, (8) Penutup yang serius dan suportif. Total 150-200 kata. Gunakan bahasa yang jelas dan tidak panik.

Hasil yang diharapkan:
Email 150-200 kata yang urgent namun tidak panik.

---

### P-143. Email Invoice

Kapan pakai:
> Mengirim invoice atau tagihan

Variabel:
- [NAMA_PELANGGAN]: nama pelanggan
- [NOMOR_INVOICE]: nomor invoice
- [JUMLAH_TAGIHAN]: jumlah yang harus dibayar
- [TANGGAL_JATUH_TEMPO]: kapan harus dibayar
- [METODE_PEMBAYARAN]: cara pembayaran
- [KONTAK_KEUANGAN]: kontak untuk pertanyaan tentang tagihan

Prompt:
> Buat invoice email untuk [NAMA_PELANGGAN] dengan [NOMOR_INVOICE] sebesar [JUMLAH_TAGIHAN] jatuh tempo [TANGGAL_JATUH_TEMPO] dengan [METODE_PEMBAYARAN] dan [KONTAK_KEUANGAN]. Struktur: (1) Subjek yang jelas ("Invoice #[Nomor] - [Jumlah]" atau "Tagihan Anda dari [Brand]"), (2) Preview text, (3) Pembuka profesional, (4) Detail invoice: nomor, jumlah, deskripsi layanan/produk, tanggal jatuh tempo, (5) Instruksi pembayaran dengan metode yang tersedia, (6) Link untuk download invoice PDF, (7) Kontak untuk pertanyaan, (8) Penutup yang profesional. Total 150-200 kata. Gunakan bahasa yang profesional dan jelas.

Hasil yang diharapkan:
Email 150-200 kata yang profesional dengan detail lengkap.

---

### P-144. Email Pengingat Pembayaran

Kapan pakai:
> Mengingatkan tentang pembayaran yang belum diterima

Variabel:
- [NAMA_PELANGGAN]: nama pelanggan
- [NOMOR_INVOICE]: nomor invoice
- [JUMLAH_TERTUNGGAK]: jumlah yang belum dibayar
- [TANGGAL_JATUH_TEMPO]: tanggal jatuh tempo asli
- [HARI_TERLAMBAT]: berapa hari terlambat
- [METODE_PEMBAYARAN]: cara pembayaran
- [KONTAK_KEUANGAN]: kontak untuk pertanyaan

Prompt:
> Buat payment reminder email untuk [NAMA_PELANGGAN] dengan [NOMOR_INVOICE] sebesar [JUMLAH_TERTUNGGAK] yang jatuh tempo pada [TANGGAL_JATUH_TEMPO] ([HARI_TERLAMBAT] hari terlambat) dengan [METODE_PEMBAYARAN] dan [KONTAK_KEUANGAN]. Struktur: (1) Subjek yang sopan namun firm ("Reminder: Invoice #[Nomor] Jatuh Tempo" atau "Pembayaran Tertunggak"), (2) Preview text, (3) Pembuka yang sopan dan memahami mungkin lupa, (4) Detail invoice dan jumlah tertunggak, (5) Instruksi pembayaran, (6) Tawaran bantuan jika ada masalah, (7) CTA "Bayar Sekarang", (8) Penutup yang profesional. Total 150-200 kata. Gunakan bahasa yang sopan namun jelas.

Hasil yang diharapkan:
Email 150-200 kata yang sopan namun firm.

---

### P-145. Email Perpanjangan Langganan

Kapan pakai:
> Mengingatkan tentang perpanjangan langganan

Variabel:
- [NAMA_PELANGGAN]: nama pelanggan
- [JENIS_LANGGANAN]: jenis langganan
- [TANGGAL_PERPANJANGAN]: kapan akan diperpanjang
- [HARGA_PERPANJANGAN]: harga perpanjangan
- [BENEFIT_LANGGANAN]: manfaat yang didapat dari langganan
- [OPSI_UPGRADE]: opsi upgrade jika ada

Prompt:
> Buat subscription renewal email untuk [NAMA_PELANGGAN] dengan [JENIS_LANGGANAN] yang akan diperpanjang pada [TANGGAL_PERPANJANGAN] seharga [HARGA_PERPANJANGAN] dengan [BENEFIT_LANGGANAN] dan [OPSI_UPGRADE]. Struktur: (1) Subjek yang jelas ("Langganan Anda akan diperpanjang" atau "Perpanjangan [Jenis Langganan]"), (2) Preview text, (3) Pembuka yang mengingatkan tentang perpanjangan, (4) Detail: tanggal perpanjangan, harga, benefit, (5) Cara membatalkan jika tidak ingin perpanjang, (6) Opsi upgrade dengan benefit tambahan, (7) CTA "Kelola Langganan" atau "Upgrade Sekarang", (8) Penutup yang apresiatif. Total 200-250 kata.

Hasil yang diharapkan:
Email 200-250 kata yang jelas dengan opsi manage dan upgrade.

---

### P-146. Email Konfirmasi Pembatalan

Kapan pakai:
> Mengkonfirmasi pembatalan langganan atau pesanan

Variabel:
- [NAMA_PELANGGAN]: nama pelanggan
- [JENIS_PEMBATARAN]: jenis pembatalan (langganan, pesanan)
- [TANGGAL_EFEKTIF]: kapan pembatalan berlaku
- [AKSES_HINGGA]: hingga kapan masih bisa akses
- [ALASAN_MEMINTA]: apakah meminta feedback alasan
- [PENAWARAN_KEMBALI]: penawaran untuk kembali

Prompt:
> Buat cancellation confirmation email untuk [NAMA_PELANGGAN] yang membatalkan [JENIS_PEMBATARAN] efektif [TANGGAL_EFEKTIF] dengan akses hingga [AKSES_HINGGA], [ALASAN_MEMINTA], dan [PENAWARAN_KEMBALI]. Struktur: (1) Subjek yang jelas ("Konfirmasi Pembatalan" atau "Langganan Anda telah dibatalkan"), (2) Preview text, (3) Konfirmasi pembatalan dengan empati, (4) Detail: tanggal efektif, akses hingga kapan, (5) Permintaan feedback jika [ALASAN_MEMINTA] dengan link survei singkat, (6) Penawaran kembali jika [PENAWARAN_KEMBALI], (7) Cara mengaktifkan kembali jika berubah pikiran, (8) Penutup yang menghargai keputusan mereka. Total 200-250 kata.

Hasil yang diharapkan:
Email 200-250 kata yang empatik dan profesional.

---

### P-147. Email Program Loyalitas

Kapan pakai:
> Mempromosikan program loyalitas

Variabel:
- [NAMA_PROGRAM]: nama program loyalitas
- [BENEFIT_PROGRAM]: benefit yang didapat member
- [CARA_BERGABUNG]: cara bergabung
- [POIN_Saat_INI]: poin yang sudah dimiliki pelanggan (jika ada)
- [REWARD_TERSEDIA]: reward yang bisa ditukar

Prompt:
> Buat loyalty program email untuk [NAMA_PROGRAM] dengan [BENEFIT_PROGRAM], [CARA_BERGABUNG], [POIN_Saat_INI], dan [REWARD_TERSEDIA]. Struktur: (1) Subjek yang menarik ("Anda punya [poin] poin!" atau "Bergabung dengan program loyalitas kami"), (2) Preview text, (3) Pembuka yang mengumumkan program atau poin mereka, (4) Penjelasan benefit program, (5) Status poin mereka jika [POIN_Saat_INI], (6) Reward yang bisa ditukar, (7) Cara bergabung atau menukar poin, (8) CTA "Bergabung Sekarang" atau "Tukar Poin", (9) P.S. dengan deadline atau reward terbatas. Total 200-250 kata.

Hasil yang diharapkan:
Email 200-250 kata yang memotivasi partisipasi.

---

### P-148. Email Akses Awal VIP

Kapan pakai:
> Memberikan akses awal untuk pelanggan VIP

Variabel:
- [NAMA_PELANGGAN]: nama pelanggan
- [STATUS_VIP]: status VIP mereka
- [PRODUK_AKSES_AWAL]: produk yang bisa diakses awal
- [PERIODE_AKSES_AWAL]: kapan akses awal tersedia
- [BENEFIT_TAMBAHAN]: benefit tambahan untuk VIP

Prompt:
> Buat VIP early access email untuk [NAMA_PELANGGAN] dengan [STATUS_VIP] untuk [PRODUK_AKSES_AWAL] selama [PERIODE_AKES_AWAL] dengan [BENEFIT_TAMBAHAN]. Struktur: (1) Subjek yang eksklusif ("Akses awal eksklusif untuk Anda" atau "VIP Early Access: [Produk]"), (2) Preview text, (3) Pembuka yang membuat mereka merasa spesial, (4) Detail produk dan akses awal, (5) Periode akses awal, (6) Benefit tambahan sebagai VIP, (7) CTA "Akses Sekarang", (8) Penutup yang apresiatif. Total 150-200 kata. Gunakan bahasa yang eksklusif dan apresiatif.

Hasil yang diharapkan:
Email 150-200 kata yang eksklusif.

---

### P-149. Email Permintaan Masukan

Kapan pakai:
> Meminta feedback tentang produk atau layanan

Variabel:
- [NAMA_PELANGGAN]: nama pelanggan
- [PRODUK_LAYANAN]: produk atau layanan yang dinilai
- [DURASI_PENGGUNAAN]: berapa lama menggunakan
- [ASPEK_YANG_DINILAI]: aspek spesifik yang ingin diketahui feedbacknya
- [INSENTIF_FEEDBACK]: insentif untuk memberikan feedback

Prompt:
> Buat feedback request email untuk [NAMA_PELANGGAN] tentang [PRODUK_LAYANAN] yang digunakan selama [DURASI_PENGGUNAAN] dengan fokus pada [ASPEK_YANG_DINILAI] dan [INSENTIF_FEEDBACK]. Struktur: (1) Subjek yang personal ("Pendapat Anda tentang [produk]?" atau "Bantu kami menjadi lebih baik"), (2) Preview text, (3) Pembuka yang menjelaskan mengapa feedback mereka berharga, (4) Body 100-150 kata dengan 3-5 pertanyaan spesifik tentang [ASPEK_YANG_DINILAI], (5) Informasi [INSENTIF_FEEDBACK], (6) CTA "Berikan Feedback", (7) Penutup yang berterima kasih. Total 150-200 kata.

Hasil yang diharapkan:
Email 150-200 kata dengan pertanyaan spesifik.

---

### P-150. Email Pengumuman

Kapan pakai:
> Mengumumkan perubahan atau berita penting

Variabel:
- [JENIS_PENGUMUMAN]: jenis pengumuman (perubahan kebijakan, berita perusahaan, dll)
- [DAMPAK_PADA_PELANGGAN]: bagaimana ini mempengaruhi pelanggan
- [TANGGAL_BERLAKU]: kapan berlaku
- [AKSI_YANG_DIPERLUKAN]: apakah pelanggan perlu melakukan sesuatu
- [KONTAK_QUESTIONS]: kontak untuk pertanyaan

Prompt:
> Buat announcement email tentang [JENIS_PENGUMUMAN] dengan [DAMPAK_PADA_PELANGGAN] berlaku [TANGGAL_BERLAKU], [AKSI_YANG_DIPERLUKAN], dan [KONTAK_QUESTIONS]. Struktur: (1) Subjek yang jelas ("Pengumuman Penting: [Topik]" atau "Perubahan [Kebijakan/Layanan]"), (2) Preview text, (3) Pembuka langsung ke pengumuman, (4) Penjelasan detail pengumuman, (5) Dampak pada pelanggan, (6) Tanggal berlaku, (7) Aksi yang perlu dilakukan jika ada, (8) Kontak untuk pertanyaan, (9) Penutup yang transparan. Total 200-250 kata. Gunakan bahasa yang jelas dan transparan.

Hasil yang diharapkan:
Email 200-250 kata yang jelas dan transparan.

---

### P-151. Email Ucapan Hari Besar

Kapan pakai:
> Mengirim ucapan hari raya atau liburan

Variabel:
- [HARI_RAYA]: hari raya atau liburan
- [NAMA_PELANGGAN]: nama pelanggan
- [PENAWARAN_LIBURAN]: penawaran khusus liburan (opsional)
- [NILAI_BRAND]: nilai atau pesan yang ingin disampaikan brand

Prompt:
> Buat holiday greeting email untuk [HARI_RAYA] kepada [NAMA_PELANGGAN] dengan [PENAWARAN_LIBURAN] dan [NILAI_BRAND]. Struktur: (1) Subjek yang hangat ("Selamat [Hari Raya]!" atau "Ucapan dari [Brand]"), (2) Preview text, (3) Ucapan tulus untuk hari raya, (4) Pesan yang mencerminkan [NILAI_BRAND], (5) Penawaran liburan jika ada, (6) CTA subtil jika relevan, (7) Penutup yang hangat. Total 100-150 kata. Gunakan bahasa yang hangat dan tulus, tidak terlalu salesy.

Hasil yang diharapkan:
Email 100-150 kata yang hangat dan tulus.

---

### P-152. Email Rekap Setahun

Kapan pakai:
> Merangkum pencapaian pelanggan dalam setahun

Variabel:
- [NAMA_PELANGGAN]: nama pelanggan
- [STATISTIK_PENGGUNAAN]: statistik penggunaan mereka
- [PENCAPAIAN]: pencapaian atau milestone mereka
- [REKOMENDASI]: rekomendasi untuk tahun depan

Prompt:
> Buat year-in-review email untuk [NAMA_PELANGGAN] dengan [STATISTIK_PENGGUNAAN], [PENCAPAIAN], dan [REKOMENDASI]. Struktur: (1) Subjek yang celebratif ("Tahun Anda di [Brand]" atau "2025: Pencapaian Anda"), (2) Preview text, (3) Pembuka yang appreciative, (4) Statistik penggunaan dalam format visual atau list, (5) Pencapaian atau milestone mereka, (6) Rekomendasi untuk tahun depan, (7) CTA untuk melihat detail atau melanjutkan, (8) Penutup yang inspiratif. Total 250-300 kata. Gunakan data yang personal dan celebratif.

Hasil yang diharapkan:
Email 250-300 kata yang personal dan celebratif.

---

### P-153. Email Peringatan Stok Terbatas

Kapan pakai:
> Memberitahu tentang stok terbatas

Variabel:
- [PRODUK]: produk dengan stok terbatas
- [JUMLAH_TERISA]: jumlah tersisa
- [DEMAND_TINGGI]: mengapa demand tinggi
- [CTA]: call-to-action

Prompt:
> Buat limited stock alert email untuk [PRODUK] dengan hanya [JUMLAH_TERISA] tersisa karena [DEMAND_TINGGI] dengan [CTA]. Struktur: (1) Subjek yang urgent ("Stok hampir habis: [Produk]" atau "Tinggal [jumlah] lagi!"), (2) Preview text, (3) Pembuka langsung ke alert, (4) Detail produk dan jumlah tersisa, (5) Alasan demand tinggi, (6) CTA "Beli Sekarang" atau "Amankan Sebelum Habis", (7) P.S. dengan reminder urgency. Total 100-150 kata. Gunakan bahasa yang urgent namun tidak manipulatif.

Hasil yang diharapkan:
Email 100-150 kata yang urgent.

---

### P-154. Email Stok Kembali Tersedia

Kapan pakai:
> Memberitahu produk yang kembali tersedia

Variabel:
- [PRODUK]: produk yang kembali tersedia
- [NAMA_PELANGGAN]: pelanggan yang menunggu
- [FITUR_PRODUK]: fitur utama produk
- [STOK_TERBATAS]: apakah stok terbatas
- [CTA]: call-to-action

Prompt:
> Buat back-in-stock email untuk [PRODUK] kepada [NAMA_PELANGGAN] yang menunggu dengan [FITUR_PRODUK], [STOK_TERBATAS], dan [CTA]. Struktur: (1) Subjek yang exciting ("Kabar baik: [Produk] kembali tersedia!" atau "Yang Anda tunggu sudah kembali"), (2) Preview text, (3) Pembuka yang mengumumkan ketersediaan, (4) Detail produk dan fitur utama, (5) Informasi stok terbatas jika ada, (6) CTA "Beli Sekarang" atau "Lihat Produk", (7) P.S. dengan reminder untuk tidak menunggu terlalu lama. Total 120-150 kata.

Hasil yang diharapkan:
Email 120-150 kata yang exciting.

---

### P-155. Email Notifikasi Kenaikan Harga

Kapan pakai:
> Memberitahu tentang kenaikan harga

Variabel:
- [PRODUK_LAYANAN]: produk atau layanan
- [HARGA_LAMA]: harga saat ini
- [HARGA_BARU]: harga baru
- [TANGGAL_BERLAKU]: kapan harga baru berlaku
- [ALASAN_KENAIKAN]: mengapa harga naik
- [BENEFIT_TAMBAHAN]: benefit tambahan yang didapat

Prompt:
> Buat price increase notification email untuk [PRODUK_LAYANAN] dari [HARGA_LAMA] menjadi [HARGA_BARU] berlaku [TANGGAL_BERLAKU] dengan [ALASAN_KENAIKAN] dan [BENEFIT_TAMBAHAN]. Struktur: (1) Subjek yang jelas ("Perubahan Harga [Produk]" atau "Update Penting tentang Langganan Anda"), (2) Preview text, (3) Pembuka yang transparan, (4) Detail perubahan harga dan tanggal berlaku, (5) Alasan kenaikan, (6) Benefit tambahan yang didapat, (7) Cara lock harga lama jika ada opsi, (8) Kontak untuk pertanyaan, (9) Penutup yang appreciative. Total 200-250 kata. Gunakan bahasa yang transparan dan respectful.

Hasil yang diharapkan:
Email 200-250 kata yang transparan.

---

### P-156. Email Tindak Lanjut Permintaan Fitur

Kapan pakai:
> Menindaklanjuti permintaan fitur dari pelanggan

Variabel:
- [NAMA_PELANGGAN]: nama pelanggan
- [FITUR_YANG_DIMINTA]: fitur yang diminta
- [STATUS]: status permintaan (dipertimbangkan, akan dikembangkan, ditolak)
- [TIMELINE]: timeline jika akan dikembangkan
- [ALTERNATIF]: alternatif jika ditolak

Prompt:
> Buat feature request follow-up email untuk [NAMA_PELANGGAN] tentang [FITUR_YANG_DIMINTA] dengan status [STATUS], [TIMELINE], dan [ALTERNATIF]. Struktur: (1) Subjek yang personal ("Update tentang permintaan fitur Anda" atau "Terima kasih atas saran Anda"), (2) Preview text, (3) Ucapan terima kasih atas feedback, (4) Status permintaan, (5) Timeline jika akan dikembangkan, (6) Alternatif atau work-around jika ditolak, (7) Cara memberikan feedback lebih lanjut, (8) Penutup yang appreciative. Total 150-200 kata. Gunakan bahasa yang appreciative dan transparan.

Hasil yang diharapkan:
Email 150-200 kata yang appreciative.

---

### P-157. Email Notifikasi Perbaikan Bug

Kapan pakai:
> Memberitahu tentang perbaikan bug

Variabel:
- [NAMA_PELANGGAN]: nama pelanggan yang melaporkan
- [BUG_YANG_DIPERBAIKI]: bug yang diperbaiki
- [DAMPAK_PERBAIKAN]: bagaimana perbaikan ini membantu
- [CARA_UPDATE]: cara mendapatkan update

Prompt:
> Buat bug fix notification email untuk [NAMA_PELANGGAN] tentang [BUG_YANG_DIPERBAIKI] dengan [DAMPAK_PERBAIKAN] dan [CARA_UPDATE]. Struktur: (1) Subjek yang informatif ("Bug yang Anda laporkan telah diperbaiki" atau "Update: Perbaikan [bug]"), (2) Preview text, (3) Ucapan terima kasih atas laporan, (4) Detail bug yang diperbaiki, (5) Dampak perbaikan, (6) Cara mendapatkan update, (7) Kontak jika masih mengalami masalah, (8) Penutup yang appreciative. Total 120-150 kata.

Hasil yang diharapkan:
Email 120-150 kata yang appreciative.

---

### P-158. Email Verifikasi Akun

Kapan pakai:
> Mengirim email verifikasi akun

Variabel:
- [NAMA_PENGGUNA]: nama pengguna
- [LINK_VERIFIKASI]: link verifikasi
- [BATAS_WAKTU]: berapa lama link berlaku
- [KONTAK_SUPPORT]: kontak jika ada masalah

Prompt:
> Buat account verification email untuk [NAMA_PENGGUNA] dengan [LINK_VERIFIKASI] berlaku [BATAS_WAKTU] dan [KONTAK_SUPPORT]. Struktur: (1) Subjek yang jelas ("Verifikasi akun Anda" atau "Konfirmasi email Anda"), (2) Preview text, (3) Pembuka yang menjelaskan tujuan email, (4) Tombol atau link verifikasi yang menonjol, (5) Informasi batas waktu, (6) Instruksi jika link tidak bekerja, (7) Kontak support, (8) Penutup yang helpful. Total 80-100 kata. Gunakan bahasa yang jelas dan langsung.

Hasil yang diharapkan:
Email 80-100 kata yang jelas.

---

### P-159. Email Atur Ulang Kata Sandi

Kapan pakai:
> Mengirim email reset password

Variabel:
- [NAMA_PENGGUNA]: nama pengguna
- [LINK_RESET]: link reset password
- [BATAS_WAKTU]: berapa lama link berlaku
- [KONTAK_SUPPORT]: kontak jika tidak meminta reset

Prompt:
> Buat password reset email untuk [NAMA_PENGGUNA] dengan [LINK_RESET] berlaku [BATAS_WAKTU] dan [KONTAK_SUPPORT] jika tidak meminta reset. Struktur: (1) Subjek yang jelas ("Reset password Anda" atau "Permintaan perubahan password"), (2) Preview text, (3) Pembuka yang mengkonfirmasi permintaan, (4) Tombol atau link reset yang menonjol, (5) Informasi batas waktu, (6) Peringatan jika tidak meminta reset, (7) Kontak support, (8) Penutup yang secure. Total 80-100 kata.

Hasil yang diharapkan:
Email 80-100 kata yang secure.

---

### P-160. Email Kode Verifikasi Dua Langkah

Kapan pakai:
> Mengirim kode 2FA via email

Variabel:
- [NAMA_PENGGUNA]: nama pengguna
- [KODE_2FA]: kode verifikasi
- [BATAS_WAKTU]: berapa lama kode berlaku
- [KONTAK_SUPPORT]: kontak jika ada masalah

Prompt:
> Buat 2FA code email untuk [NAMA_PENGGUNA] dengan [KODE_2FA] berlaku [BATAS_WAKTU] dan [KONTAK_SUPPORT]. Struktur: (1) Subjek yang jelas ("Kode verifikasi Anda" atau "Kode keamanan [Brand]"), (2) Preview text, (3) Kode yang ditampilkan dengan jelas dan besar, (4) Informasi batas waktu, (5) Peringatan untuk tidak membagikan kode, (6) Kontak support jika tidak meminta kode, (7) Penutup yang secure. Total 50-80 kata. Gunakan format yang sangat jelas dan mudah dibaca.

Hasil yang diharapkan:
Email 50-80 kata yang sangat jelas.

---

### P-161. Email Peringatan Login

Kapan pakai:
> Memberitahu tentang login dari perangkat atau lokasi baru

Variabel:
- [NAMA_PENGGUNA]: nama pengguna
- [PERANGKAT]: perangkat yang digunakan
- [LOKASI]: lokasi login
- [WAKTU]: waktu login
- [AKSI_JIKA_BUKAN_ANDA]: apa yang harus dilakukan jika bukan mereka

Prompt:
> Buat login alert email untuk [NAMA_PENGGUNA] tentang login dari [PERANGKAT] di [LOKASI] pada [WAKTU] dengan [AKSI_JIKA_BUKAN_ANDA]. Struktur: (1) Subjek yang urgent ("Login baru terdeteksi" atau "Aktivitas login dari [lokasi]"), (2) Preview text, (3) Detail login (perangkat, lokasi, waktu), (4) Jika ini Anda, abaikan email ini, (5) Jika bukan Anda, [AKSI_JIKA_BUKAN_ANDA] segera, (6) Link ke halaman keamanan akun, (7) Kontak support, (8) Penutup yang secure. Total 100-150 kata.

Hasil yang diharapkan:
Email 100-150 kata yang urgent dan secure.

---

### P-162. Email Ekspor Data Siap

Kapan pakai:
> Memberitahu bahwa ekspor data siap diunduh

Variabel:
- [NAMA_PENGGUNA]: nama pengguna
- [JENIS_DATA]: jenis data yang diekspor
- [FORMAT]: format file (CSV, PDF, JSON)
- [LINK_DOWNLOAD]: link unduh
- [BATAS_WAKTU]: berapa lama link berlaku

Prompt:
> Buat data export ready email untuk [NAMA_PENGGUNA] dengan [JENIS_DATA] dalam format [FORMAT], [LINK_DOWNLOAD], dan [BATAS_WAKTU]. Struktur: (1) Subjek yang jelas ("Ekspor data Anda siap" atau "[Jenis data] siap diunduh"), (2) Preview text, (3) Konfirmasi ekspor selesai, (4) Detail: jenis data, format, ukuran file, (5) Tombol download yang menonjol, (6) Informasi batas waktu, (7) Instruksi jika link tidak bekerja, (8) Kontak support. Total 80-120 kata.

Hasil yang diharapkan:
Email 80-120 kata yang jelas.

---

### P-163. Email Pengingat Akhir Masa Trial

Kapan pakai:
> Mengingatkan tentang trial yang akan berakhir

Variabel:
- [NAMA_PENGGUNA]: nama pengguna
- [PRODUK_TRIAL]: produk yang di-trial
- [TANGGAL_KEDALUWARSA]: kapan trial berakhir
- [HARI_TERSISA]: berapa hari lagi
- [OPSI_UPGRADE]: opsi untuk upgrade ke berbayar
- [BENEFIT_UPGRADE]: benefit jika upgrade

Prompt:
> Buat trial expiration reminder email untuk [NAMA_PENGGUNA] dengan [PRODUK_TRIAL] berakhir [TANGGAL_KEDALUWARSA] ([HARI_TERSISA] hari lagi), [OPSI_UPGRADE], dan [BENEFIT_UPGRADE]. Struktur: (1) Subjek yang urgent ("Trial Anda berakhir dalam [jumlah] hari" atau "Jangan kehilangan akses ke [produk]"), (2) Preview text, (3) Reminder tanggal kedaluwarsa, (4) Ringkasan apa yang sudah mereka coba, (5) Benefit jika upgrade, (6) Opsi upgrade dan harga, (7) CTA "Upgrade Sekarang", (8) P.S. dengan urgency. Total 150-200 kata.

Hasil yang diharapkan:
Email 150-200 kata yang urgent.

---

### P-164. Email Konversi Trial

Kapan pakai:
> Mengonversi pengguna trial menjadi pelanggan berbayar

Variabel:
- [NAMA_PENGGUNA]: nama pengguna
- [PRODUK_TRIAL]: produk yang di-trial
- [PENCAPAIAN_DURING_TRIAL]: apa yang sudah mereka capai selama trial
- [HARGA_SUBSCRIPTION]: harga langganan
- [BENEFIT_PAID]: benefit versi berbayar
- [DISKON_KONVERSI]: diskon khusus untuk konversi

Prompt:
> Buat trial conversion email untuk [NAMA_PENGGUNA] dengan [PRODUK_TRIAL], [PENCAPAIAN_DURING_TRIAL], [HARGA_SUBSCRIPTION], [BENEFIT_PAID], dan [DISKON_KONVERSI]. Struktur: (1) Subjek yang celebratif ("Lanjutkan perjalanan Anda di [produk]!" atau "Anda sudah mencapai [pencapaian]!"), (2) Preview text, (3) Apresiasi atas apa yang sudah mereka capai, (4) Ringkasan pencapaian selama trial, (5) Benefit versi berbayar yang akan mereka dapatkan, (6) Harga dan diskon konversi, (7) CTA "Upgrade Sekarang", (8) P.S. dengan testimonial. Total 200-250 kata.

Hasil yang diharapkan:
Email 200-250 kata yang celebratif.

---

### P-165. Email Langkah Onboarding

Kapan pakai:
> Email panduan onboarding bertahap

Variabel:
- [NAMA_PENGGUNA]: nama pengguna
- [NOMOR_LANGKAH]: langkah ke-berapa dalam onboarding
- [TOPIK_LANGKAH]: topik langkah ini
- [TUGAS_LANGKAH]: tugas yang harus dilakukan
- [LANGKAH_SELANJUTNYA]: preview langkah berikutnya
- [ESTIMASI_WAKTU]: berapa lama untuk menyelesaikan

Prompt:
> Buat onboarding step email untuk [NAMA_PENGGUNA] langkah [NOMOR_LANGKAH] tentang [TOPIK_LANGKAH] dengan [TUGAS_LANGKAH], [LANGKAH_SELANJUTNYA], dan [ESTIMASI_WAKTU]. Struktur: (1) Subjek yang jelas ("Langkah [nomor]: [Topik]" atau "Selanjutnya: [Topik]"), (2) Preview text, (3) Progress indicator (langkah [nomor] dari [total]), (4) Penjelasan topik langkah ini, (5) Tugas yang harus dilakukan dengan instruksi jelas, (6) Preview langkah berikutnya, (7) Estimasi waktu, (8) CTA "Mulai Langkah Ini", (9) Kontak jika butuh bantuan. Total 150-200 kata.

Hasil yang diharapkan:
Email 150-200 kata dengan progress indicator.

---

### P-166. Email Pencapaian Tonggak

Kapan pakai:
> Merayakan pencapaian pengguna dalam produk

Variabel:
- [NAMA_PENGGUNA]: nama pengguna
- [PENCAPAIAN]: pencapaian yang diraih
- [STATISTIK]: statistik pencapaian
- [BADGE_REWARD]: badge atau reward yang didapat
- [LANGKAH_SELANJUTNYA]: tantangan berikutnya

Prompt:
> Buat milestone achievement email untuk [NAMA_PENGGUNA] yang mencapai [PENCAPAIAN] dengan [STATISTIK], [BADGE_REWARD], dan [LANGKAH_SELANJUTNYA]. Struktur: (1) Subjek yang celebratif ("Selamat! Anda mencapai [pencapaian]!" atau "Milestone baru: [pencapaian]"), (2) Preview text, (3) Ucapan selamat yang tulus, (4) Detail pencapaian dengan statistik, (5) Badge atau reward yang didapat, (6) Tantangan berikutnya, (7) CTA untuk melihat pencapaian atau mulai tantangan baru, (8) Penutup yang inspiratif. Total 150-200 kata.

Hasil yang diharapkan:
Email 150-200 kata yang celebratif.

---

### P-167. Email Sapaan Setelah Lama Tidak Aktif

Kapan pakai:
> Check-in dengan pengguna yang tidak aktif

Variabel:
- [NAMA_PENGGUNA]: nama pengguna
- [DURASI_TIDAK_AKTIF]: berapa lama tidak aktif
- [FITUR_BARU]: fitur baru yang mungkin menarik
- [BANTUAN]: tawaran bantuan
- [INSENTIF_KEMBALI]: insentif untuk kembali

Prompt:
> Buat inactivity check-in email untuk [NAMA_PENGGUNA] yang tidak aktif selama [DURASI_TIDAK_AKTIF] dengan [FITUR_BARU], [BANTUAN], dan [INSENTIF_KEMBALI]. Struktur: (1) Subjek yang personal ("Kami rindu Anda!" atau "Ada yang baru di [produk]"), (2) Preview text, (3) Pembuka yang empatik, (4) Ringkasan apa yang mereka lewatkan, (5) Fitur baru yang mungkin menarik, (6) Tawaran bantuan, (7) Insentif untuk kembali, (8) CTA "Kembali ke [Produk]" atau "Dapatkan Bantuan", (9) Opsi untuk pause atau unsubscribe jika tidak tertarik. Total 150-200 kata.

Hasil yang diharapkan:
Email 150-200 kata yang empatik.

---

### P-168. Email Pengumuman Fitur

Kapan pakai:
> Mengumumkan fitur baru

Variabel:
- [NAMA_FITUR]: nama fitur baru
- [MASALAH_YANG_DISELESAIKAN]: masalah yang diselesaikan fitur
- [CARA_MENGGUNAKAN]: cara menggunakan fitur
- [BENEFIT]: manfaat menggunakan fitur
- [VIDEO_TUTORIAL]: link video tutorial jika ada

Prompt:
> Buat feature announcement email untuk [NAMA_FITUR] yang menyelesaikan [MASALAH_YANG_DISELESAIKAN] dengan [CARA_MENGGUNAKAN], [BENEFIT], dan [VIDEO_TUTORIAL]. Struktur: (1) Subjek yang exciting ("Fitur baru: [Nama Fitur]!" atau "Sekarang Anda bisa [benefit]"), (2) Preview text, (3) Pembuka yang mengumumkan fitur, (4) Masalah yang diselesaikan, (5) Cara menggunakan dengan langkah sederhana, (6) Benefit yang didapat, (7) Link video tutorial, (8) CTA "Coba Sekarang", (9) Penutup yang antusias. Total 150-200 kata.

Hasil yang diharapkan:
Email 150-200 kata yang exciting.

---

### P-169. Email Pengumuman Integrasi

Kapan pakai:
> Mengumumkan integrasi baru

Variabel:
- [NAMA_INTEGRASI]: nama integrasi
- [PLATFORM_TERINTEGRASI]: platform yang terintegrasi
- [BENEFIT_INTEGRASI]: manfaat integrasi
- [CARA_MENGAKTIFKAN]: cara mengaktifkan integrasi

Prompt:
> Buat integration announcement email untuk [NAMA_INTEGRASI] dengan [PLATFORM_TERINTEGRASI], [BENEFIT_INTEGRASI], dan [CARA_MENGAKTIFKAN]. Struktur: (1) Subjek yang exciting ("Integrasi baru: [Platform]!" atau "Kini terintegrasi dengan [Platform]"), (2) Preview text, (3) Pembuka yang mengumumkan integrasi, (4) Platform yang terintegrasi, (5) Benefit integrasi dengan contoh penggunaan, (6) Cara mengaktifkan, (7) CTA "Aktifkan Sekarang" atau "Pelajari Lebih Lanjut", (8) Penutup yang antusias. Total 120-150 kata.

Hasil yang diharapkan:
Email 120-150 kata yang exciting.

---

### P-170. Email Kisah Sukses Pelanggan

Kapan pakai:
> Membagikan cerita sukses pelanggan

Variabel:
- [NAMA_PELANGGAN_SUCCES]: nama pelanggan yang sukses
- [INDUSTRI_PELANGGAN]: industri pelanggan
- [MASALAH_AWAL]: masalah awal pelanggan
- [SOLUSI_YANG_DIGUNAKAN]: solusi yang digunakan
- [HASIL_KONKRET]: hasil konkret yang dicapai
- [TESTIMONI]: testimoni pelanggan

Prompt:
> Buat customer success story email tentang [NAMA_PELANGGAN_SUCCES] dari [INDUSTRI_PELANGGAN] yang menghadapi [MASALAH_AWAL], menggunakan [SOLUSI_YANG_DIGUNAKAN], mencapai [HASIL_KONKRET], dengan [TESTIMONI]. Struktur: (1) Subjek yang menarik ("Cerita sukses: [Nama] mencapai [hasil]" atau "Bagaimana [nama] menyelesaikan [masalah]"), (2) Preview text, (3) Pembuka yang memperkenalkan pelanggan, (4) Latar belakang dan masalah awal, (5) Solusi yang digunakan, (6) Hasil konkret dengan angka, (7) Testimoni langsung, (8) CTA untuk melihat studi kasus lengkap atau mencoba solusi, (9) Penutup yang inspiratif. Total 250-300 kata.

Hasil yang diharapkan:
Email 250-300 kata yang inspiratif.

---

## Ringkasan Cepat Bagian 3

| No | Jenis Email | Kapan Gunakan |
|----|-------------|---------------|
| P-121 s/d P-125 | Siklus Hidup | Sambutan, promo, newsletter, keranjang, pengaktifan ulang |
| P-126 s/d P-130 | Pascabeli | Tindak lanjut, peluncuran, flash sale, edukasi, testimoni |
| P-131 s/d P-135 | Pertumbuhan | Referral, musiman, win-back, upsell, cross-sell |
| P-136 s/d P-140 | Relasi | Ulang tahun, tonggak pencapaian, survei, acara, pembaruan |
| P-141 s/d P-145 | Operasional | Pemeliharaan, keamanan, invoice, pengingat, perpanjangan |
| P-146 s/d P-150 | Administratif | Pembatalan, loyalitas, VIP, umpan balik, pengumuman |
| P-151 s/d P-155 | Khusus | Liburan, rekap tahun, peringatan stok, stok kembali, harga |
| P-156 s/d P-160 | Dukungan | Permintaan fitur, perbaikan bug, verifikasi, kata sandi, 2FA |
| P-161 s/d P-165 | Keamanan & Data | Peringatan login, ekspor, uji coba, onboarding, pencapaian |
| P-166 s/d P-170 | Keterlibatan | Tonggak pencapaian, tidak aktif, fitur, integrasi, kisah sukses |

---

## Contoh Output AI untuk Bagian 3

### P-101. Welcome Email Sequence (Contoh Output)

**Input yang dipakai:**
Bisnis: Toko online fashion wanita, customer baru dapat diskon 10% untuk pembelian pertama, brand voice friendly dan profesional.

**Output ChatGPT:**
```
Subject: Selamat datang di [Nama Brand] + diskon 10% untuk Anda

Halo [Nama],

Terima kasih sudah bergabung dengan komunitas [Nama Brand]. Kami senang Anda di sini.

Sebagai ucapan selamat datang, kami siapkan diskon 10% untuk pembelian pertama Anda. Kode: WELCOME10

Kode ini berlaku 7 hari ke depan untuk semua produk di toko kami, termasuk koleksi baru yang baru saja kami rilis.

Jika Anda butuh bantuan memilih ukuran atau punya pertanyaan tentang produk, tim kami siap membantu via WhatsApp di [nomor] atau balas email ini.

Salam hangat,
Tim [Nama Brand]
```

**Output Gemini:**
```
Subject: Diskon 10% menanti Anda di [Nama Brand]

Hai [Nama],

Selamat datang! Kami nggak sabar lihat gaya Anda dengan koleksi kami.

Ini kode diskon 10% untuk pembelian pertama: WELCOME10

Berlaku 7 hari untuk semua produk. Termasuk yang baru rilis.

Butuh bantuan pilih ukuran? Chat kami di WhatsApp [nomor] atau balas email ini.

Sampai jumpa di checkout!
Tim [Nama Brand]
```

**Perbandingan:** ChatGPT lebih formal dan lengkap, cocok untuk brand yang ingin tampil profesional. Gemini lebih casual dan friendly, cocok untuk brand yang targetnya Gen Z atau milenial.

---

### P-115. Abandoned Cart Email (Contoh Output)

**Input yang dipakai:**
Toko online elektronik, customer meninggalkan keranjang berisi headphone wireless Rp 450.000, email dikirim 2 jam setelah abandonment.

**Output ChatGPT:**
```
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
```

**Output Gemini:**
```
Subject: Jangan lupa headphone Anda di keranjang

Hai [Nama],

Headphone wireless [Nama Produk] masih di keranjang Anda. Stok terbatas, jadi kami nggak bisa jamin tersedia lama.

[Link ke keranjang]

Order sebelum jam 15.00 = dikirim hari ini. Gratis ongkir + garansi 1 tahun.

Ada pertanyaan? Chat kami sekarang.

Tim [Nama Toko]
```

**Perbandingan:** ChatGPT lebih persuasif dengan menangani objection secara proaktif. Gemini lebih singkat dan create urgency. Untuk abandoned cart, keduanya efektif, tapi ChatGPT biasanya punya conversion rate lebih tinggi karena lebih lengkap.


## Latihan Bagian 3

1. Pilih 1 jenis email yang paling sering Anda kirim.
2. Buat 3 variasi menggunakan prompt berbeda dari bagian ini.
3. A/B test ketiga variasi dan ukur open rate serta click-through rate.
4. Iterasi berdasarkan hasil dan simpan template yang paling efektif.

---

## Kesalahan Umum di Bagian 3

**Kesalahan 1: Subjek email yang tidak menarik**
Solusi: Gunakan angka, pertanyaan, atau kata yang menciptakan urgency. Test 5 variasi subjek.

**Kesalahan 2: Email terlalu panjang**
Solusi: Fokus pada satu tujuan per email. Gunakan format yang mudah di-scan.

**Kesalahan 3: CTA yang tidak jelas**
Solusi: Satu CTA utama per email, tombol yang menonjol, kata kerja yang spesifik.

**Kesalahan 4: Tidak personal**
Solusi: Gunakan nama pelanggan, segmentasi berdasarkan perilaku, dan konten yang relevan.

**Kesalahan 5: Mengabaikan timing**
Solusi: Kirim email pada waktu yang tepat berdasarkan timezone dan perilaku pelanggan.
## Bagian 4: Landing Page dan Website

Bagian ini berisi 50 prompt untuk konten website: landing page, homepage, about page, pricing page, feature page, bagian testimoni, FAQ, dan elemen website lainnya. Setiap prompt dirancang untuk meningkatkan konversi dan pengalaman pengguna.

---

### P-171. Hero Section Landing Page

Kapan pakai:
> Membuat bagian hero landing page yang menarik

Variabel:
- [NAMA_PRODUK]: nama produk atau layanan
- [VALUE_PROPOSITION]: nilai utama yang ditawarkan
- [TARGET_AUDIENCE]: siapa target pengunjung
- [CTA_UTAMA]: call-to-action utama
- [CTA_SEKUNDER]: call-to-action sekunder (opsional)

Prompt:
> Buat hero section landing page untuk [NAMA_PRODUK] dengan [VALUE_PROPOSITION] untuk [TARGET_AUDIENCE] dengan [CTA_UTAMA] dan [CTA_SEKUNDER]. Struktur: (1) Headline utama 6-10 kata yang menonjolkan value proposition, (2) Subheadline 15-20 kata yang menjelaskan manfaat atau target audiens, (3) CTA utama dengan teks tombol yang jelas (5-7 kata), (4) CTA sekunder jika ada (teks alternatif), (5) Saran visual untuk background atau ilustrasi. Headline harus langsung menjawab "Apa yang saya dapatkan?" dalam 3 detik pertama.

Hasil yang diharapkan:
Hero section dengan headline, subheadline, CTA, dan saran visual.

---

### P-172. Bagian Masalah Landing Page

Kapan pakai:
> Membuat bagian yang menjelaskan masalah yang diselesaikan

Variabel:
- [MASALAH_UTAMA]: masalah utama yang dihadapi target audiens
- [MASALAH_SEKUNDER]: 2-3 masalah tambahan
- [DAMPAK_MASALAH]: dampak negatif jika masalah tidak diselesaikan
- [PRODUK]: produk yang menyelesaikan masalah

Prompt:
> Buat problem section landing page untuk [PRODUK] yang menyelesaikan [MASALAH_UTAMA] dan [MASALAH_SEKUNDER] dengan [DAMPAK_MASALAH]. Struktur: (1) Headline yang empatik ("Pernahkah Anda mengalami..." atau "Apakah Anda frustrasi karena..."), (2) Paragraf pembuka 50-80 kata yang mendeskripsikan masalah dengan detail yang relatable, (3) 3-5 bullet point masalah spesifik, (4) Paragraf transisi 30-50 kata tentang dampak jika tidak diselesaikan, (5) CTA untuk melihat solusi. Gunakan bahasa yang empatik dan menunjukkan pemahaman mendalam tentang masalah audiens.

Hasil yang diharapkan:
Problem section dengan headline, deskripsi, bullet point, dan transisi.

---

### P-173. Bagian Solusi Landing Page

Kapan pakai:
> Membuat bagian yang memperkenalkan solusi

Variabel:
- [NAMA_PRODUK]: nama produk
- [CARA_KERJA]: bagaimana produk bekerja
- [FITUR_UTAMA]: 3-5 fitur utama
- [MANFAAT]: manfaat yang didapat
- [CTA]: call-to-action

Prompt:
> Buat solution section landing page untuk [NAMA_PRODUK] dengan [CARA_KERJA], [FITUR_UTAMA], [MANFAAT], dan [CTA]. Struktur: (1) Headline yang jelas ("Inilah cara [produk] membantu Anda..." atau "Solusi lengkap untuk..."), (2) Paragraf pembuka 50-80 kata yang memperkenalkan produk, (3) 3-5 fitur utama dengan penjelasan manfaat masing-masing (total 150-200 kata), (4) Visual suggestion untuk setiap fitur, (5) CTA yang mengarah ke langkah selanjutnya. Gunakan bahasa yang jelas dan fokus pada manfaat, bukan fitur teknis.

Hasil yang diharapkan:
Solution section dengan headline, intro, fitur-manfaat, dan CTA.

---

### P-174. Bagian Social Proof Landing Page

Kapan pakai:
> Membuat bagian social proof untuk membangun kepercayaan

Variabel:
- [JUMLAH_PELANGGAN]: jumlah pelanggan atau pengguna
- [RATING]: rating atau ulasan rata-rata
- [LOGO_KLIEN]: logo klien terkenal yang menggunakan produk
- [TESTIMONI_SINGKAT]: 2-3 testimoni singkat
- [STATISTIK]: statistik pencapaian

Prompt:
> Buat social proof section landing page dengan [JUMLAH_PELANGGAN], [RATING], [LOGO_KLIEN], [TESTIMONI_SINGKAT], dan [STATISTIK]. Struktur: (1) Headline yang membangun kepercayaan ("Dipercaya oleh [jumlah] profesional" atau "Rating [rating] dari [jumlah] ulasan"), (2) Statistik utama dalam format visual (3-4 angka besar), (3) Logo klien atau media yang meliput, (4) 2-3 testimoni singkat dengan nama, jabatan, dan foto, (5) Rating atau badge penghargaan. Total 200-250 kata. Gunakan layout yang mudah di-scan.

Hasil yang diharapkan:
Social proof section dengan statistik, logo, testimoni, dan rating.

---

### P-175. Bedah Mendalam Fitur Landing Page

Kapan pakai:
> Membuat bagian detail fitur produk

Variabel:
- [NAMA_FITUR]: nama fitur
- [MASALAH_YANG_DISELESAIKAN]: masalah yang diselesaikan fitur
- [CARA_KERJA]: bagaimana fitur bekerja
- [BENEFIT]: manfaat yang didapat
- [SCREENSHOT]: deskripsi screenshot atau visual

Prompt:
> Buat feature deep dive section untuk [NAMA_FITUR] yang menyelesaikan [MASALAH_YANG_DISELESAIKAN] dengan [CARA_KERJA], [BENEFIT], dan [SCREENSHOT]. Struktur: (1) Headline fitur yang menarik ("[Nama Fitur]: [manfaat utama]"), (2) Paragraf pembuka 50-80 kata yang menjelaskan masalah dan solusi, (3) 3-5 bullet point cara kerja atau kemampuan fitur, (4) Paragraf benefit 50-80 kata yang menjelaskan dampak positif, (5) Saran screenshot atau visual yang mendukung, (6) CTA untuk mencoba fitur. Total 200-250 kata per fitur. Buat untuk 3 fitur utama.

Hasil yang diharapkan:
Tiga feature deep dive section dengan struktur lengkap.

---

### P-176. Bagian Harga Landing Page

Kapan pakai:
> Membuat bagian harga dan paket

Variabel:
- [JUMLAH_PAKET]: berapa banyak paket harga
- [NAMA_PAKET]: nama setiap paket (Basic, Pro, Enterprise)
- [HARGA]: harga setiap paket
- [FITUR_PER_PAKET]: fitur yang didapat di setiap paket
- [PAKET_REKOMENDASI]: paket yang paling direkomendasikan
- [GARANSI]: informasi garansi

Prompt:
> Buat pricing section landing page dengan [JUMLAH_PAKET] paket: [NAMA_PAKET] dengan harga [HARGA], [FITUR_PER_PAKET], [PAKET_REKOMENDASI], dan [GARANSI]. Struktur: (1) Headline yang jelas ("Pilih paket yang sesuai untuk bisnis Anda"), (2) Subheadline 20-30 kata yang menjelaskan fleksibilitas, (3) Tabel atau card harga untuk setiap paket dengan: nama paket, harga (bulan/tahun), daftar fitur, CTA, (4) Highlight paket rekomendasi, (5) Informasi garansi atau jaminan, (6) FAQ singkat tentang pricing. Total 300-400 kata. Gunakan format yang mudah dibandingkan.

Hasil yang diharapkan:
Pricing section dengan tabel harga, highlight, dan FAQ.

---

### P-177. Bagian FAQ Landing Page

Kapan pakai:
> Membuat bagian FAQ untuk menjawab pertanyaan umum

Variabel:
- [JUMLAH_PERTANYAAN]: berapa banyak pertanyaan FAQ
- [KATEGORI]: kategori pertanyaan (produk, harga, teknis, dll)
- [PERTANYAAN_UTAMA]: pertanyaan yang paling sering ditanyakan

Prompt:
> Buat FAQ section landing page dengan [JUMLAH_PERTANYAAN] pertanyaan dalam kategori [KATEGORI] termasuk [PERTANYAAN_UTAMA]. Struktur: (1) Headline "Pertanyaan yang Sering Diajukan" atau "FAQ", (2) 5-10 pertanyaan dengan jawaban 40-60 kata masing-masing, (3) Gunakan format accordion atau expandable, (4) Kelompokkan pertanyaan berdasarkan kategori jika lebih dari 5, (5) Akhiri dengan CTA "Masih ada pertanyaan? Hubungi kami". Total 400-600 kata. Jawaban harus jelas, ringkas, dan menyelesaikan keraguan.

Hasil yang diharapkan:
FAQ section dengan 5-10 pertanyaan dan jawaban lengkap.

---

### P-178. Bagian Testimoni Landing Page

Kapan pakai:
> Membuat bagian testimoni pelanggan

Variabel:
- [JUMLAH_TESTIMONI]: berapa banyak testimoni
- [FORMAT]: format testimoni (card, carousel, grid)
- [DETAIL_TESTIMONI]: nama, jabatan, perusahaan, foto
- [RATING]: rating yang diberikan
- [HASIL_KONKRET]: hasil konkret yang dicapai pelanggan

Prompt:
> Buat testimonial section landing page dengan [JUMLAH_TESTIMONI] testimoni dalam format [FORMAT] dengan [DETAIL_TESTIMONI], [RATING], dan [HASIL_KONKRET]. Struktur: (1) Headline yang menarik ("Apa kata pelanggan kami" atau "Cerita sukses dari pengguna"), (2) 3-6 testimoni dengan: kutipan 50-80 kata, nama, jabatan, perusahaan, foto, rating bintang, (3) Highlight hasil konkret dengan angka, (4) Visual layout yang mudah di-scan, (5) CTA untuk membaca lebih banyak testimoni atau bergabung. Total 300-400 kata. Gunakan testimoni yang autentik dan spesifik.

Hasil yang diharapkan:
Testimonial section dengan kutipan, detail, dan hasil konkret.

---

### P-179. Bagian CTA Landing Page

Kapan pakai:
> Membuat bagian CTA yang mendorong konversi

Variabel:
- [TUJUAN_CTA]: tujuan CTA (beli, daftar, download, hubungi)
- [INSENTIF]: insentif untuk bertindak sekarang
- [URGENCY]: elemen urgency (waktu terbatas, stok terbatas)
- [RISK_REVERSAL]: jaminan untuk mengurangi risiko

Prompt:
> Buat CTA section landing page dengan tujuan [TUJUAN_CTA], [INSENTIF], [URGENCY], dan [RISK_REVERSAL]. Struktur: (1) Headline yang kuat dan langsung ("Mulai sekarang" atau "Dapatkan [manfaat] hari ini"), (2) Subheadline 20-30 kata yang memperkuat value, (3) Tombol CTA besar dengan teks yang jelas (5-7 kata), (4) Insentif atau bonus jika bertindak sekarang, (5) Elemen urgency (countdown, stok terbatas), (6) Risk reversal (garansi, free trial), (7) Social proof singkat (jumlah pengguna, rating). Total 150-200 kata. CTA harus menonjol dan tidak ambigu.

Hasil yang diharapkan:
CTA section dengan headline, tombol, insentif, urgency, dan jaminan.

---

### P-180. Bagian Tentang Kami Landing Page

Kapan pakai:
> Membuat bagian tentang perusahaan atau tim

Variabel:
- [NAMA_PERUSAHAAN]: nama perusahaan
- [MISI]: misi perusahaan
- [NILAI]: nilai-nilai perusahaan
- [TIM]: informasi tentang tim
- [PENCAPAIAN]: pencapaian atau milestone

Prompt:
> Buat about section landing page untuk [NAMA_PERUSAHAAN] dengan [MISI], [NILAI], [TIM], dan [PENCAPAIAN]. Struktur: (1) Headline yang personal ("Tentang [Perusahaan]" atau "Cerita kami"), (2) Paragraf pembuka 80-100 kata tentang misi dan visi, (3) 3-5 nilai inti dengan penjelasan singkat masing-masing, (4) Informasi tim (jumlah anggota, latar belakang, foto jika ada), (5) Pencapaian atau milestone dalam format timeline atau angka, (6) CTA untuk menghubungi atau bergabung. Total 300-400 kata. Gunakan bahasa yang personal dan autentik.

Hasil yang diharapkan:
About section dengan misi, nilai, tim, dan pencapaian.

---

### P-181. Hero Section Beranda

Kapan pakai:
> Membuat hero section untuk homepage website

Variabel:
- [NAMA_BRAND]: nama brand atau perusahaan
- [TAGLINE]: tagline atau slogan
- [VALUE_PROPOSITION]: nilai utama yang ditawarkan
- [CTA_UTAMA]: call-to-action utama
- [CTA_SEKUNDER]: call-to-action sekunder

Prompt:
> Buat homepage hero section untuk [NAMA_BRAND] dengan [TAGLINE], [VALUE_PROPOSITION], [CTA_UTAMA], dan [CTA_SEKUNDER]. Struktur: (1) Headline 6-10 kata yang mencerminkan tagline dan value, (2) Subheadline 15-20 kata yang menjelaskan apa yang dilakukan brand, (3) CTA utama dengan teks tombol yang jelas, (4) CTA sekunder (pelajari lebih lanjut, lihat demo), (5) Saran visual untuk hero image atau video background. Homepage hero harus menjawab 3 pertanyaan dalam 5 detik: Apa ini? Untuk siapa? Apa yang saya lakukan selanjutnya?

Hasil yang diharapkan:
Hero section dengan headline, subheadline, dual CTA, dan saran visual.

---

### P-182. Ringkasan Fitur Beranda

Kapan pakai:
> Membuat overview fitur untuk homepage

Variabel:
- [JUMLAH_FITUR]: berapa banyak fitur yang ditampilkan
- [NAMA_FITUR]: nama-nama fitur
- [DESKRIPSI_SINGKAT]: deskripsi singkat setiap fitur
- [ICON]: saran icon untuk setiap fitur

Prompt:
> Buat feature overview section homepage dengan [JUMLAH_FITUR] fitur: [NAMA_FITUR] dengan [DESKRIPSI_SINGKAT] dan [ICON]. Struktur: (1) Headline section ("Fitur unggulan kami" atau "Semua yang Anda butuhkan"), (2) Subheadline 20-30 kata, (3) Grid atau list fitur dengan: icon, nama fitur (3-5 kata), deskripsi (20-30 kata), (4) Visual layout yang konsisten, (5) CTA untuk melihat semua fitur. Total 200-300 kata. Setiap fitur harus mudah di-scan dalam 2-3 detik.

Hasil yang diharapkan:
Feature overview dengan grid fitur dan deskripsi singkat.

---

### P-183. Bagian Manfaat Beranda

Kapan pakai:
> Membuat section manfaat untuk homepage

Variabel:
- [JUMLAH_MANFAAT]: berapa banyak manfaat
- [MANFAAT_UTAMA]: manfaat utama yang ingin disoroti
- [TARGET_AUDIENCE]: siapa target pengunjung
- [VISUAL]: saran visual untuk setiap manfaat

Prompt:
> Buat benefit section homepage dengan [JUMLAH_MANFAAT] manfaat untuk [TARGET_AUDIENCE] dengan [MANFAAT_UTAMA] dan [VISUAL]. Struktur: (1) Headline yang berfokus pada hasil ("Tingkatkan [hasil] dengan [produk]" atau "Rasakan manfaat [produk]"), (2) Subheadline 20-30 kata, (3) 3-5 manfaat dengan: judul (5-7 kata), deskripsi (40-50 kata), visual suggestion, (4) Layout alternating (teks-kiri-gambar-kanan, lalu sebaliknya), (5) CTA untuk mencoba atau mempelajari lebih lanjut. Total 300-400 kata. Fokus pada transformasi, bukan fitur.

Hasil yang diharapkan:
Benefit section dengan manfaat dan visual yang jelas.

---

### P-184. Pratinjau Testimoni Beranda

Kapan pakai:
> Membuat preview testimoni untuk homepage

Variabel:
- [JUMLAH_TESTIMONI]: berapa testimoni yang ditampilkan
- [FORMAT]: format tampilan (carousel, grid, slider)
- [SUMBER]: sumber testimoni (Google, Trustpilot, internal)

Prompt:
> Buat testimonial preview section homepage dengan [JUMLAH_TESTIMONI] testimoni dalam format [FORMAT] dari [SUMBER]. Struktur: (1) Headline ("Apa kata pelanggan" atau "Testimoni"), (2) 3-6 testimoni singkat (30-50 kata masing-masing) dengan nama dan rating, (3) Logo platform review jika dari sumber eksternal, (4) Link untuk melihat semua testimoni, (5) Visual layout yang clean. Total 200-300 kata. Testimoni harus autentik dan beragam.

Hasil yang diharapkan:
Testimonial preview dengan testimoni singkat dan link.

---

### P-185. Bagian CTA Beranda

Kapan pakai:
> Membuat CTA section untuk homepage

Variabel:
- [TUJUAN]: tujuan CTA (daftar, beli, hubungi)
- [INSENTIF]: insentif untuk bertindak
- [URGENCY]: elemen urgency

Prompt:
> Buat CTA section homepage dengan tujuan [TUJUAN], [INSENTIF], dan [URGENCY]. Struktur: (1) Headline yang kuat ("Mulai sekarang" atau "Bergabung dengan [jumlah] pengguna"), (2) Subheadline 15-20 kata, (3) Tombol CTA besar, (4) Insentif jika ada, (5) Urgency element, (6) Trust badge atau social proof. Total 100-150 kata. CTA harus menonjol dan mudah ditemukan.

Hasil yang diharapkan:
CTA section dengan headline, tombol, dan trust elements.

---

### P-186. Header Halaman Harga

Kapan pakai:
> Membuat header untuk halaman pricing

Variabel:
- [NAMA_PRODUK]: nama produk
- [MODEL_HARGA]: model harga (subscription, one-time, freemium)
- [FLEKSIBILITAS]: fleksibilitas yang ditawarkan

Prompt:
> Buat header pricing page untuk [NAMA_PRODUK] dengan [MODEL_HARGA] dan [FLEKSIBILITAS]. Struktur: (1) Headline yang jelas ("Harga [Produk]" atau "Pilih paket yang tepat"), (2) Subheadline 30-40 kata yang menjelaskan model harga dan fleksibilitas, (3) Toggle bulanan/tahunan jika ada, (4) Saran visual untuk layout. Total 50-80 kata. Header harus langsung menjelaskan struktur harga.

Hasil yang diharapkan:
Header pricing dengan headline, subheadline, dan toggle.

---

### P-187. Kartu Paket Harga

Kapan pakai:
> Membuat card untuk setiap paket harga

Variabel:
- [NAMA_PAKET]: nama paket (Basic, Pro, Enterprise)
- [HARGA]: harga (bulanan/tahunan)
- [DESKRIPSI_SINGKAT]: deskripsi singkat paket
- [FITUR]: daftar fitur dalam paket
- [CTA]: teks tombol CTA
- [BADGE]: badge jika paket direkomendasikan

Prompt:
> Buat pricing package card untuk [NAMA_PAKET] dengan harga [HARGA], [DESKRIPSI_SINGKAT], [FITUR], [CTA], dan [BADGE]. Struktur: (1) Nama paket yang jelas, (2) Harga besar dan menonjol, (3) Periode harga (per bulan/tahun), (4) Deskripsi singkat 15-20 kata, (5) Daftar 5-10 fitur dengan checkmark, (6) Tombol CTA dengan teks yang jelas, (7) Badge "Recommended" atau "Popular" jika relevan. Total 100-150 kata per card. Card harus mudah dibandingkan.

Hasil yang diharapkan:
Package card dengan harga, fitur, dan CTA yang jelas.

---

### P-188. Tabel Perbandingan Harga

Kapan pakai:
> Membuat tabel perbandingan paket

Variabel:
- [JUMLAH_PAKET]: berapa banyak paket
- [JUMLAH_FITUR]: berapa banyak fitur yang dibandingkan
- [NAMA_PAKET]: nama-nama paket
- [FITUR_LIST]: daftar fitur

Prompt:
> Buat pricing comparison table dengan [JUMLAH_PAKET] paket ([NAMA_PAKET]) dan [JUMLAH_FITUR] fitur ([FITUR_LIST]). Struktur: (1) Header tabel dengan nama paket, (2) Baris fitur dengan checkmark atau X untuk setiap paket, (3) Kelompokkan fitur berdasarkan kategori jika lebih dari 10, (4) Highlight kolom paket yang direkomendasikan, (5) Footer dengan CTA untuk setiap paket. Total 200-300 kata. Tabel harus mudah di-scan dan dibandingkan.

Hasil yang diharapkan:
Comparison table yang jelas dan mudah dibandingkan.

---

### P-189. Bagian FAQ Halaman Harga

Kapan pakai:
> Membuat FAQ khusus untuk halaman pricing

Variabel:
- [JUMLAH_PERTANYAAN]: berapa banyak pertanyaan
- [TOPIK]: topik pertanyaan (billing, upgrade, refund, dll)

Prompt:
> Buat pricing FAQ section dengan [JUMLAH_PERTANYAAN] pertanyaan tentang [TOPIK]. Struktur: (1) Headline "Pertanyaan tentang harga" atau "FAQ Pricing", (2) 5-10 pertanyaan dengan jawaban 40-60 kata masing-masing, (3) Topik: billing, upgrade/downgrade, refund, trial, diskon, (4) Format accordion, (5) CTA untuk menghubungi sales jika ada pertanyaan lain. Total 300-500 kata. Jawaban harus jelas dan menyelesaikan keraguan.

Hasil yang diharapkan:
Pricing FAQ dengan pertanyaan dan jawaban lengkap.

---

### P-190. Hero Halaman Fitur

Kapan pakai:
> Membuat hero section untuk halaman fitur spesifik

Variabel:
- [NAMA_FITUR]: nama fitur
- [MANFAAT_UTAMA]: manfaat utama fitur
- [TARGET_USER]: siapa yang paling butuh fitur ini
- [CTA]: call-to-action

Prompt:
> Buat feature page hero untuk [NAMA_FITUR] dengan [MANFAAT_UTAMA] untuk [TARGET_USER] dan [CTA]. Struktur: (1) Headline 6-10 kata yang menonjolkan manfaat, (2) Subheadline 15-20 kata yang menjelaskan untuk siapa, (3) Tombol CTA yang jelas, (4) Visual suggestion (screenshot fitur atau ilustrasi). Total 50-80 kata. Hero harus langsung menjelaskan value fitur.

Hasil yang diharapkan:
Feature hero dengan headline, subheadline, CTA, dan visual.

---

### P-191. Manfaat di Halaman Fitur

Kapan pakai:
> Membuat section manfaat untuk halaman fitur

Variabel:
- [NAMA_FITUR]: nama fitur
- [JUMLAH_MANFAAT]: berapa banyak manfaat
- [MANFAAT]: daftar manfaat
- [EXAMPLE]: contoh penggunaan

Prompt:
> Buat feature benefits section untuk [NAMA_FITUR] dengan [JUMLAH_MANFAAT] manfaat ([MANFAAT]) dan [EXAMPLE]. Struktur: (1) Headline "Manfaat [Fitur]" atau "Mengapa [Fitur] penting", (2) 3-5 manfaat dengan: judul (5-7 kata), deskripsi (40-50 kata), icon atau visual, (3) Contoh penggunaan nyata, (4) CTA untuk mencoba fitur. Total 250-350 kata. Fokus pada outcome, bukan feature.

Hasil yang diharapkan:
Benefits section dengan manfaat dan contoh penggunaan.

---

### P-192. Cara Kerja di Halaman Fitur

Kapan pakai:
> Membuat section cara kerja untuk halaman fitur

Variabel:
- [NAMA_FITUR]: nama fitur
- [JUMLAH_LANGKAH]: berapa langkah
- [LANGKAH]: daftar langkah
- [VISUAL]: saran visual untuk setiap langkah

Prompt:
> Buat how it works section untuk [NAMA_FITUR] dengan [JUMLAH_LANGKAH] langkah ([LANGKAH]) dan [VISUAL]. Struktur: (1) Headline "Cara kerja [Fitur]" atau "Mulai dalam [jumlah] langkah", (2) 3-5 langkah dengan: nomor, judul (5-7 kata), deskripsi (30-40 kata), visual suggestion, (3) Layout horizontal atau vertikal, (4) CTA untuk mencoba. Total 200-300 kata. Langkah harus jelas dan mudah diikuti.

Hasil yang diharapkan:
How it works section dengan langkah-langkah dan visual.

---

### P-193. Studi Pemakaian di Halaman Fitur

Kapan pakai:
> Membuat section use case untuk halaman fitur

Variabel:
- [NAMA_FITUR]: nama fitur
- [JUMLAH_USE_CASE]: berapa banyak use case
- [USE_CASE]: daftar use case
- [INDUSTRI]: industri yang relevan

Prompt:
> Buat bagian use case untuk [NAMA_FITUR] dengan [JUMLAH_USE_CASE] use case ([USE_CASE]) untuk [INDUSTRI]. Struktur: (1) Headline "Use case [Fitur]" atau "Bagaimana [Fitur] digunakan", (2) 3-5 use case dengan: judul (5-7 kata), deskripsi skenario (50-60 kata), hasil yang dicapai, (3) Filter berdasarkan industri jika relevan, (4) CTA untuk melihat studi kasus lengkap. Total 300-400 kata. Use case harus spesifik dan relatable.

Hasil yang diharapkan:
Use cases section dengan skenario dan hasil.

---

### P-194. Hero Halaman Tentang Kami

Kapan pakai:
> Membuat hero section untuk halaman about

Variabel:
- [NAMA_PERUSAHAAN]: nama perusahaan
- [TAGLINE]: tagline perusahaan
- [MISI]: misi perusahaan
- [VISUAL]: saran visual

Prompt:
> Buat about page hero untuk [NAMA_PERUSAHAAN] dengan [TAGLINE], [MISI], dan [VISUAL]. Struktur: (1) Headline 6-10 kata yang mencerminkan tagline, (2) Subheadline 20-30 kata tentang misi, (3) Visual suggestion (foto tim, kantor, atau ilustrasi), (4) Tone: personal, autentik, dan inspiratif. Total 50-80 kata. Hero harus langsung menyampaikan esensi perusahaan.

Hasil yang diharapkan:
About hero dengan headline, misi, dan visual.

---

### P-195. Kisah di Halaman Tentang Kami

Kapan pakai:
> Membuat section cerita perusahaan

Variabel:
- [NAMA_PERUSAHAAN]: nama perusahaan
- [TAHUN_BERDIRI]: tahun berdiri
- [PENDIRI]: nama pendiri
- [MOMEN_INSPIRASI]: momen inspirasi
- [PERKEMBANGAN]: perkembangan perusahaan
- [VISI]: visi ke depan

Prompt:
> Buat about page story untuk [NAMA_PERUSAHAAN] yang berdiri [TAHUN_BERDIRI] oleh [PENDIRI] dengan [MOMEN_INSPIRASI], [PERKEMBANGAN], dan [VISI]. Struktur: (1) Headline "Cerita kami" atau "Perjalanan [Perusahaan]", (2) Paragraf pembuka tentang momen inspirasi, (3) Timeline perkembangan dengan tahun dan milestone, (4) Paragraf tentang visi ke depan, (5) Visual suggestion untuk timeline. Total 300-400 kata. Cerita harus autentik dan inspiratif.

Hasil yang diharapkan:
About story dengan cerita, timeline, dan visi.

---

### P-196. Tim di Halaman Tentang Kami

Kapan pakai:
> Membuat section tim perusahaan

Variabel:
- [JUMLAH_ANGGOTA]: berapa banyak anggota tim yang ditampilkan
- [NAMA_ANGGOTA]: nama anggota tim
- [JABATAN]: jabatan masing-masing
- [BIO_SINGKAT]: bio singkat
- [FOTO]: saran foto

Prompt:
> Buat about page team section dengan [JUMLAH_ANGGOTA] anggota ([NAMA_ANGGOTA], [JABATAN], [BIO_SINGKAT], [FOTO]). Struktur: (1) Headline "Tim kami" atau "Orang-orang di balik [Perusahaan]", (2) Subheadline 20-30 kata tentang budaya atau nilai tim, (3) Grid anggota tim dengan: foto, nama, jabatan, bio 30-40 kata, link sosial media jika ada, (4) Layout yang konsisten dan profesional. Total 200-300 kata. Tim harus terlihat approachable dan profesional.

Hasil yang diharapkan:
Team section dengan profil anggota dan bio.

---

### P-197. Nilai di Halaman Tentang Kami

Kapan pakai:
> Membuat section nilai-nilai perusahaan

Variabel:
- [JUMLAH_NILAI]: berapa banyak nilai inti
- [NAMA_NILAI]: nama nilai-nilai
- [DESKRIPSI_NILAI]: deskripsi setiap nilai
- [ICON]: saran icon untuk setiap nilai

Prompt:
> Buat about page values section dengan [JUMLAH_NILAI] nilai inti ([NAMA_NILAI], [DESKRIPSI_NILAI], [ICON]). Struktur: (1) Headline "Nilai-nilai kami" atau "Apa yang kami percayai", (2) Subheadline 20-30 kata, (3) Grid nilai dengan: icon, nama nilai (3-5 kata), deskripsi 40-50 kata, (4) Layout yang clean dan mudah di-scan. Total 200-300 kata. Nilai harus autentik dan mencerminkan budaya perusahaan.

Hasil yang diharapkan:
Values section dengan icon, nama, dan deskripsi.

---

### P-198. Hero Halaman Kontak

Kapan pakai:
> Membuat hero section untuk halaman contact

Variabel:
- [HEADLINE]: headline untuk contact page
- [SUBHEADLINE]: subheadline yang menjelaskan cara menghubungi
- [METODE_KONTAK]: metode kontak yang tersedia

Prompt:
> Buat contact page hero dengan [HEADLINE], [SUBHEADLINE], dan [METODE_KONTAK]. Struktur: (1) Headline 6-10 kata yang welcoming ("Hubungi kami" atau "Kami siap membantu"), (2) Subheadline 20-30 kata yang menjelaskan metode kontak, (3) Icon atau visual untuk setiap metode kontak. Total 40-60 kata. Hero harus inviting dan jelas.

Hasil yang diharapkan:
Contact hero dengan headline dan metode kontak.

---

### P-199. Formulir Halaman Kontak

Kapan pakai:
> Membuat section form kontak

Variabel:
- [FIELD_FORM]: field-field yang ada di form
- [INFORMASI_KONTAK]: informasi kontak tambahan
- [JAM_OPERASIONAL]: jam operasional

Prompt:
> Buat contact page form section dengan [FIELD_FORM], [INFORMASI_KONTAK], dan [JAM_OPERASIONAL]. Struktur: (1) Headline "Kirim pesan" atau "Formulir kontak", (2) Deskripsi form 20-30 kata, (3) Daftar field form dengan label dan teks contoh, (4) Informasi kontak tambahan (email, telepon, alamat), (5) Jam operasional, (6) Tombol submit dengan teks yang jelas. Total 150-200 kata. Form harus jelas dan mudah diisi.

Hasil yang diharapkan:
Contact form dengan field dan informasi kontak.

---

### P-200. Peta di Halaman Kontak

Kapan pakai:
> Membuat section peta lokasi

Variabel:
- [ALAMAT]: alamat lengkap
- [PETUNJUK_ARAH]: petunjuk arah
- [TRANSPORTASI_UMUM]: akses transportasi umum
- [PARKIR]: informasi parkir

Prompt:
> Buat contact page map section dengan [ALAMAT], [PETUNJUK_ARAH], [TRANSPORTASI_UMUM], dan [PARKIR]. Struktur: (1) Headline "Lokasi kami" atau "Kunjungi kantor kami", (2) Alamat lengkap, (3) Embed peta atau link ke Google Maps, (4) Petunjuk arah singkat, (5) Informasi transportasi umum, (6) Informasi parkir. Total 100-150 kata. Lokasi harus mudah ditemukan.

Hasil yang diharapkan:
Map section dengan alamat dan petunjuk.

---

### P-201. Hero Artikel Blog

Kapan pakai:
> Membuat hero section untuk blog post

Variabel:
- [JUDUL_POST]: judul blog post
- [KATEGORI]: kategori post
- [PENULIS]: nama penulis
- [TANGGAL]: tanggal publikasi
- [BACA_WAKTU]: estimasi waktu baca
- [FEATURED_IMAGE]: saran gambar utama

Prompt:
> Buat blog post hero untuk [JUDUL_POST] dalam kategori [KATEGORI] oleh [PENULIS] pada [TANGGAL] dengan [BACA_WAKTU] dan [FEATURED_IMAGE]. Struktur: (1) Kategori badge, (2) Judul H1 yang menarik, (3) Meta informasi: penulis, tanggal, waktu baca, (4) Featured image atau ilustrasi, (5) Optional: tombol share social media. Total 30-50 kata. Hero harus menarik dan informatif.

Hasil yang diharapkan:
Blog hero dengan judul, meta, dan gambar.

---

### P-202. Pengantar Artikel Blog

Kapan pakai:
> Membuat pembuka blog post

Variabel:
- [TOPIK]: topik blog post
- [MASALAH]: masalah yang dibahas
- [JANJI]: apa yang akan didapat pembaca
- [HOOK]: cara membuka yang menarik

Prompt:
> Buat blog post introduction untuk [TOPIK] yang membahas [MASALAH] dengan janji [JANJI] menggunakan [HOOK]. Struktur: (1) Hook pembuka 1-2 kalimat yang menangkap perhatian, (2) Konteks masalah 2-3 kalimat, (3) Janji apa yang akan didapat pembaca 1-2 kalimat, (4) Overview struktur post 1 kalimat. Total 100-150 kata. Introduction harus membuat pembaca ingin terus membaca.

Hasil yang diharapkan:
Introduction dengan hook, konteks, janji, dan overview.

---

### P-203. Penutup Artikel Blog

Kapan pakai:
> Membuat penutup blog post

Variabel:
- [TOPIK]: topik blog post
- [POIN_UTAMA]: poin-poin utama yang dibahas
- [CTA]: call-to-action yang diinginkan
- [RESOURCE_TAMBAHAN]: resource tambahan jika ada

Prompt:
> Buat blog post conclusion untuk [TOPIK] dengan [POIN_UTAMA], [CTA], dan [RESOURCE_TAMBAHAN]. Struktur: (1) Ringkasan poin utama 2-3 kalimat, (2) Key takeaway 1 kalimat, (3) CTA yang jelas, (4) Link ke resource tambahan atau post terkait, (5) Pertanyaan untuk memancing komentar. Total 100-150 kata. Conclusion harus memorable dan actionable.

Hasil yang diharapkan:
Conclusion dengan ringkasan, takeaway, dan CTA.

---

### P-204. Hero Halaman Produk

Kapan pakai:
> Membuat hero section untuk halaman produk

Variabel:
- [NAMA_PRODUK]: nama produk
- [TAGLINE]: tagline produk
- [HARGA]: harga produk
- [RATING]: rating produk
- [CTA_UTAMA]: CTA utama (beli, tambahkan ke keranjang)
- [CTA_SEKUNDER]: CTA sekunder (pelajari, lihat demo)

Prompt:
> Buat product page hero untuk [NAMA_PRODUK] dengan [TAGLINE], [HARGA], [RATING], [CTA_UTAMA], dan [CTA_SEKUNDER]. Struktur: (1) Nama produk H1, (2) Tagline 10-15 kata, (3) Harga dan rating, (4) Tombol CTA utama yang menonjol, (5) Link CTA sekunder, (6) Gambar produk atau visual. Total 50-80 kata. Hero harus langsung menunjukkan value dan cara membeli.

Hasil yang diharapkan:
Product hero dengan nama, harga, rating, dan CTA.

---

### P-205. Deskripsi Halaman Produk

Kapan pakai:
> Membuat deskripsi produk

Variabel:
- [NAMA_PRODUK]: nama produk
- [FITUR_UTAMA]: fitur utama
- [MANFAAT]: manfaat
- [SPESIFIKASI]: spesifikasi teknis
- [KEUNGGULAN]: keunggulan dibanding kompetitor

Prompt:
> Buat product page description untuk [NAMA_PRODUK] dengan [FITUR_UTAMA], [MANFAAT], [SPESIFIKASI], dan [KEUNGGULAN]. Struktur: (1) Paragraf pembuka 50-80 kata tentang produk, (2) Daftar fitur utama dengan manfaat, (3) Spesifikasi teknis dalam format tabel atau list, (4) Keunggulan dibanding kompetitor, (5) CTA untuk membeli. Total 300-400 kata. Deskripsi harus informatif dan persuasif.

Hasil yang diharapkan:
Product description dengan fitur, spesifikasi, dan keunggulan.

---

### P-206. Galeri Halaman Produk

Kapan pakai:
> Membuat galeri gambar produk

Variabel:
- [JUMLAH_GAMBAR]: berapa banyak gambar
- [JENIS_GAMBAR]: jenis gambar (foto produk, screenshot, ilustrasi)
- [ANGLE]: angle atau sudut pandang

Prompt:
> Buat product page gallery dengan [JUMLAH_GAMBAR] gambar ([JENIS_GAMBAR], [ANGLE]). Struktur: (1) Gambar utama yang menonjol, (2) Thumbnail gambar tambahan, (3) Saran angle untuk setiap gambar, (4) Zoom atau lightbox feature, (5) Label atau caption untuk setiap gambar. Total 50-100 kata. Gallery harus menampilkan produk dari berbagai sudut.

Hasil yang diharapkan:
Gallery dengan gambar utama dan thumbnail.

---

### P-207. Ulasan di Halaman Produk

Kapan pakai:
> Membuat section review produk

Variabel:
- [JUMLAH_REVIEW]: berapa banyak review
- [RATING_RATA_RATA]: rating rata-rata
- [DISTRIBUSI_RATING]: distribusi rating (5 bintang, 4 bintang, dll)
- [REVIEW_TERBAIK]: review terbaik

Prompt:
> Buat product page reviews section dengan [JUMLAH_REVIEW] review, [RATING_RATA_RATA], [DISTRIBUSI_RATING], dan [REVIEW_TERBAIK]. Struktur: (1) Rating rata-rata besar dan menonjol, (2) Distribusi rating dalam format bar chart, (3) 3-5 review terbaik dengan: rating, judul review, isi review 50-80 kata, nama reviewer, tanggal, (4) Tombol untuk melihat semua review, (5) CTA untuk menulis review. Total 300-400 kata. Reviews harus autentik dan membantu keputusan pembelian.

Hasil yang diharapkan:
Reviews section dengan rating, distribusi, dan review terbaik.

---

### P-208. Header Halaman Checkout

Kapan pakai:
> Membuat header untuk halaman checkout

Variabel:
- [JUMLAH_ITEM]: jumlah item di keranjang
- [SUBTOTAL]: subtotal harga
- [PROGRESS]: progress checkout (step berapa)

Prompt:
> Buat checkout page header dengan [JUMLAH_ITEM] item, [SUBTOTAL], dan [PROGRESS]. Struktur: (1) Progress indicator (step 1 dari 3, dll), (2) Ringkasan keranjang: jumlah item dan subtotal, (3) Tombol kembali ke keranjang, (4) Trust badge (secure checkout, garansi). Total 30-50 kata. Header harus jelas dan membangun kepercayaan.

Hasil yang diharapkan:
Checkout header dengan progress dan ringkasan.

---

### P-209. Formulir Halaman Checkout

Kapan pakai:
> Membuat form untuk halaman checkout

Variabel:
- [FIELD_BILLING]: field informasi billing
- [FIELD_SHIPPING]: field informasi shipping
- [METODE_PEMBAYARAN]: metode pembayaran yang tersedia
- [FIELD_TAMBAHAN]: field tambahan (catatan, kode promo)

Prompt:
> Buat checkout page form dengan [FIELD_BILLING], [FIELD_SHIPPING], [METODE_PEMBAYARAN], dan [FIELD_TAMBAHAN]. Struktur: (1) Section informasi billing dengan field-field, (2) Section informasi shipping (sama dengan billing atau berbeda), (3) Pilihan metode pembayaran, (4) Field tambahan (catatan, kode promo), (5) Tombol "Lanjutkan" atau "Bayar". Total 100-150 kata. Form harus simple dan mudah diisi.

Hasil yang diharapkan:
Checkout form dengan section billing, shipping, dan payment.

---

### P-210. Ringkasan Halaman Checkout

Kapan pakai:
> Membuat ringkasan pesanan di halaman checkout

Variabel:
- [DAFTAR_PRODUK]: daftar produk yang dipesan
- [SUBTOTAL]: subtotal
- [DISKON]: diskon jika ada
- [ONGKIR]: ongkos kirim
- [PAJAK]: pajak
- [TOTAL]: total harga

Prompt:
> Buat checkout page summary dengan [DAFTAR_PRODUK], [SUBTOTAL], [DISKON], [ONGKIR], [PAJAK], dan [TOTAL]. Struktur: (1) Daftar produk dengan: nama, jumlah, harga, (2) Subtotal, (3) Diskon (jika ada), (4) Ongkos kirim, (5) Pajak, (6) Total harga besar dan menonjol, (7) Tombol "Place Order" atau "Bayar". Total 80-120 kata. Summary harus jelas dan transparan.

Hasil yang diharapkan:
Checkout summary dengan daftar produk dan total.

---

### P-211. Konten Halaman 404

Kapan pakai:
> Membuat konten untuk halaman 404

Variabel:
- [NAMA_BRAND]: nama brand
- [TONE]: tone brand (playful, profesional, casual)
- [CTA]: CTA untuk kembali ke halaman utama
- [SEARCH]: fitur pencarian

Prompt:
> Buat 404 page content untuk [NAMA_BRAND] dengan [TONE], [CTA], dan [SEARCH]. Struktur: (1) Headline yang sesuai tone ("Oops! Halaman tidak ditemukan" atau "404: Halaman yang Anda cari tidak ada"), (2) Pesan 30-50 kata yang menjelaskan error, (3) Tombol CTA kembali ke homepage, (4) Link ke halaman populer, (5) Form pencarian, (6) Ilustrasi atau visual yang sesuai tone. Total 80-120 kata. 404 page harus helpful dan tidak frustrating.

Hasil yang diharapkan:
404 page dengan headline, pesan, CTA, dan search.

---

### P-212. Konten Halaman Terima Kasih

Kapan pakai:
> Membuat konten untuk halaman terima kasih setelah pembelian

Variabel:
- [NAMA_PELANGGAN]: nama pelanggan
- [NOMOR_PESANAN]: nomor pesanan
- [NEXT_STEP]: langkah selanjutnya
- [RECOMMENDATION]: rekomendasi produk atau konten
- [SOCIAL_SHARE]: link share ke sosial media

Prompt:
> Buat konten halaman ucapan terima kasih (thank you page) untuk [NAMA_PELANGGAN] dengan [NOMOR_PESANAN], [NEXT_STEP], [RECOMMENDATION], dan [SOCIAL_SHARE]. Struktur: (1) Headline "Terima kasih!" atau "Pesanan Anda berhasil", (2) Pesan personal 30-50 kata, (3) Nomor pesanan dan detail, (4) Langkah selanjutnya (konfirmasi email, pengiriman, dll), (5) Rekomendasi produk atau konten, (6) Tombol share ke sosial media. Total 150-200 kata. Halaman ini harus celebratif dan informatif.

Hasil yang diharapkan:
Thank you page dengan pesan personal dan next step.

---

### P-213. Bagian Perbandingan Landing Page

Kapan pakai:
> Membuat section perbandingan dengan kompetitor

Variabel:
- [NAMA_PRODUK]: nama produk kita
- [KOMPETITOR]: nama kompetitor (boleh generic)
- [KEUNGGULAN_KITA]: keunggulan produk kita
- [FORMAT]: format perbandingan (tabel, list, visual)

Prompt:
> Buat comparison section landing page untuk [NAMA_PRODUK] vs [KOMPETITOR] dengan [KEUNGGULAN_KITA] dalam format [FORMAT]. Struktur: (1) Headline "Mengapa memilih [Produk]?" atau "[Produk] vs [Kompetitor]", (2) Tabel atau list perbandingan fitur, (3) Highlight keunggulan produk kita, (4) Testimoni atau data pendukung, (5) CTA untuk memilih produk kita. Total 200-300 kata. Perbandingan harus fair dan faktual.

Hasil yang diharapkan:
Comparison section dengan tabel dan keunggulan.

---

### P-214. Bagian Jaminan Landing Page

Kapan pakai:
> Membuat section jaminan atau garansi

Variabel:
- [JENIS_GARANSI]: jenis garansi (uang kembali, pengganti, dll)
- [DURASI]: durasi garansi
- [SYARAT]: syarat dan ketentuan
- [VISUAL]: saran visual (badge, icon)

Prompt:
> Buat guarantee section landing page dengan [JENIS_GARANSI] selama [DURASI], [SYARAT], dan [VISUAL]. Struktur: (1) Headline "Garansi [Jenis]" atau "Jaminan [Durasi]", (2) Badge atau icon garansi, (3) Penjelasan garansi 50-80 kata, (4) Syarat dan ketentuan singkat, (5) CTA untuk membeli dengan jaminan. Total 100-150 kata. Garansi harus jelas dan membangun kepercayaan.

Hasil yang diharapkan:
Guarantee section dengan badge dan penjelasan.

---

### P-215. Bagian Urgensi Landing Page

Kapan pakai:
> Membuat section urgency untuk mendorong tindakan cepat

Variabel:
- [JENIS_URGENCY]: jenis urgency (waktu terbatas, stok terbatas)
- [COUNTDOWN]: countdown timer
- [INSENTIF]: insentif untuk bertindak cepat
- [CTA]: CTA yang urgent

Prompt:
> Buat urgency section landing page dengan [JENIS_URGENCY], [COUNTDOWN], [INSENTIF], dan [CTA]. Struktur: (1) Headline yang urgent "Penawaran berakhir dalam..." atau "Stok terbatas!", (2) Countdown timer atau indikator stok, (3) Penjelasan insentif 30-50 kata, (4) Tombol CTA yang menonjol, (5) P.S. dengan reminder urgency. Total 80-120 kata. Urgency harus legitimate dan tidak manipulatif.

Hasil yang diharapkan:
Urgency section dengan countdown dan insentif.

---

### P-216. Bagian Video Landing Page

Kapan pakai:
> Membuat section video untuk landing page

Variabel:
- [JUDUL_VIDEO]: judul atau topik video
- [DESKRIPSI]: deskripsi video
- [DURASI]: durasi video
- [TRANSCRIPT]: link transcript jika ada
- [CTA]: CTA setelah video

Prompt:
> Buat video section landing page dengan [JUDUL_VIDEO], [DESKRIPSI], [DURASI], [TRANSCRIPT], dan [CTA]. Struktur: (1) Headline "Tonton video ini" atau "Lihat [Produk] beraksi", (2) Embed video player, (3) Deskripsi video 30-50 kata, (4) Durasi dan link transcript, (5) CTA setelah video. Total 80-120 kata. Video section harus engaging dan informatif.

Hasil yang diharapkan:
Video section dengan player dan deskripsi.

---

### P-217. Permintaan Demo Landing Page

Kapan pakai:
> Membuat section permintaan demo

Variabel:
- [NAMA_PRODUK]: nama produk
- [BENEFIT_DEMO]: manfaat meminta demo
- [FORM_FIELD]: field form yang diperlukan
- [NEXT_STEP]: langkah setelah request

Prompt:
> Buat demo request section untuk [NAMA_PRODUK] dengan [BENEFIT_DEMO], [FORM_FIELD], dan [NEXT_STEP]. Struktur: (1) Headline "Request demo" atau "Lihat [Produk] beraksi", (2) Penjelasan benefit demo 30-50 kata, (3) Form dengan field-field yang diperlukan, (4) Informasi langkah selanjutnya, (5) Tombol submit. Total 100-150 kata. Demo request harus jelas dan mudah.

Hasil yang diharapkan:
Demo request section dengan form dan benefit.

---

### P-218. Pendaftaran Newsletter Landing Page

Kapan pakai:
> Membuat section signup newsletter

Variabel:
- [NAMA_NEWSLETTER]: nama newsletter
- [FREKUENSI]: frekuensi pengiriman
- [BENEFIT]: manfaat subscribe
- [INSENTIF]: insentif untuk subscribe

Prompt:
> Buat newsletter signup section untuk [NAMA_NEWSLETTER] dengan [FREKUENSI], [BENEFIT], dan [INSENTIF]. Struktur: (1) Headline "Subscribe newsletter kami" atau "Dapatkan [Benefit]", (2) Penjelasan benefit 30-50 kata, (3) Form email input, (4) Insentif jika ada, (5) Tombol subscribe, (6) Privacy notice. Total 80-120 kata. Signup harus simple dan menarik.

Hasil yang diharapkan:
Newsletter signup dengan form dan benefit.

---

### P-219. Popup Exit Intent Landing Page

Kapan pakai:
> Membuat popup exit intent

Variabel:
- [PENAWARAN]: penawaran khusus
- [HEADLINE]: headline popup
- [CTA]: CTA popup
- [URGENCY]: elemen urgency

Prompt:
> Buat exit intent popup dengan [PENAWARAN], [HEADLINE], [CTA], dan [URGENCY]. Struktur: (1) Headline yang menangkap perhatian "Tunggu!" atau "Jangan pergi dulu!", (2) Penawaran khusus 20-30 kata, (3) Tombol CTA yang menonjol, (4) Urgency element, (5) Tombol close yang jelas. Total 50-80 kata. Popup harus compelling tanpa annoying.

Hasil yang diharapkan:
Exit intent popup dengan penawaran dan CTA.

---

### P-220. Widget Live Chat Landing Page

Kapan pakai:
> Membuat widget live chat

Variabel:
- [SAPAAN]: sapaan awal chat
- [JAM_OPERASIONAL]: jam operasional
- [RESPONSE_TIME]: estimasi waktu respons
- [FAQ_QUICK]: FAQ quick access

Prompt:
> Buat live chat widget dengan [SAPAAN], [JAM_OPERASIONAL], [RESPONSE_TIME], dan [FAQ_QUICK]. Struktur: (1) Bubble chat dengan icon dan label, (2) Sapaan awal 20-30 kata, (3) Informasi jam operasional dan response time, (4) Quick access FAQ 3-5 pertanyaan, (5) Form input pesan. Total 60-100 kata. Widget harus welcoming dan helpful.

Hasil yang diharapkan:
Live chat widget dengan sapaan dan FAQ.

---

## Ringkasan Cepat Bagian 4

| No | Jenis Halaman | Prompt |
|----|---------------|--------|
| P-171 s/d P-185 | Landing Page | Hero, masalah, solusi, social proof, fitur, harga, FAQ, testimoni, CTA, tentang kami, homepage |
| P-186 s/d P-189 | Halaman Harga | Header, kartu paket, tabel perbandingan, FAQ |
| P-190 s/d P-193 | Halaman Fitur | Hero, manfaat, cara kerja, studi penggunaan |
| P-194 s/d P-197 | Halaman Tentang Kami | Hero, kisah, tim, nilai |
| P-198 s/d P-200 | Halaman Kontak | Hero, formulir, peta |
| P-201 s/d P-203 | Artikel Blog | Hero, pendahuluan, kesimpulan |
| P-204 s/d P-207 | Halaman Produk | Hero, deskripsi, galeri, ulasan |
| P-208 s/d P-210 | Halaman Checkout | Header, formulir, ringkasan |
| P-211 s/d P-220 | Halaman Khusus | 404, ucapan terima kasih, perbandingan, jaminan, urgensi, video, demo, newsletter, popup, chat |

---

## Contoh Output AI untuk Bagian 4

### P-151. Landing Page Hero Section (Contoh Output)

**Input yang dipakai:**
Produk: Software akuntansi untuk UMKM, harga Rp 99.000/bulan, fitur: invoice otomatis, laporan keuangan, integrasi bank, target pemilik UMKM yang belum pakai software akuntansi.

**Output ChatGPT:**
```
Headline: Kelola Keuangan UMKM Anda dalam 10 Menit per Hari

Subheadline: Software akuntansi yang dirancang untuk pemilik usaha, bukan akuntan. Invoice otomatis, laporan keuangan real-time, integrasi langsung dengan rekening bank Anda.

CTA: Coba Gratis 14 Hari (Tanpa Kartu Kredit)

Social proof: Dipercaya 5.000+ UMKM di Indonesia
```

**Output Gemini:**
```
Headline: Nggak Perlu Lagi Begadang Urus Pembukuan

Subheadline: Software akuntansi untuk UMKM yang otomatis catat pemasukan, keluarkan invoice, dan bikin laporan keuangan. Selesai 10 menit sehari.

CTA: Mulai Coba Gratis

Social proof: 5.000+ UMKM sudah pakai. Rating 4.8/5.
```

**Perbandingan:** ChatGPT lebih profesional dan detail, cocok untuk B2B. Gemini lebih relatable dan emosional, cocok untuk UMKM yang frustrated dengan pembukuan manual. Pilih sesuai brand voice Anda.

---

### P-165. Landing Page Testimonial Section (Contoh Output)

**Input yang dipakai:**
Produk: Kursus online copywriting, 3 testimoni dari alumni yang berhasil dapat klien setelah lulus.

**Output ChatGPT:**
```
## Apa Kata Alumni Kami

### Rina, Freelance Copywriter
"Sebelum kursus ini, saya nggak tahu cara nulis copy yang jual. Setelah 3 bulan lulus, saya sudah punya 5 klien tetap dengan income Rp 15 juta per bulan. Materinya praktis, langsung bisa dipraktekkan."

### Budi, Pemilik Toko Online
"Saya ikut kursus ini buat nulis iklan produk sendiri. Hasilnya? Conversion rate naik 40% dalam sebulan. ROI-nya luar biasa."

### Sarah, Content Creator
"Saya kira copywriting cuma buat iklan. Ternyata skill ini berguna untuk caption Instagram, script YouTube, bahkan proposal klien. Investasi terbaik tahun ini."
```

**Output Gemini:**
```
## Dari Nol ke Klien Pertama dalam 90 Hari

**Rina, 28 tahun, Jakarta**
"3 bulan setelah lulus, income saya Rp 15 juta per bulan dari 5 klien tetap. Materinya nggak teori doang, tapi template yang langsung bisa dipakai."

**Budi, 35 tahun, Surabaya**
"Conversion rate toko online saya naik 40% setelah pakai teknik dari modul 3. Kursus ini bayar sendiri dalam seminggu."

**Sarah, 26 tahun, Bandung**
"Skill copywriting berguna untuk semua konten saya: Instagram, YouTube, proposal klien. Worth every rupiah."
```

**Perbandingan:** ChatGPT lebih formal dan detail. Gemini lebih personal dengan tambahan info demografis. Untuk testimonial, Gemini biasanya lebih relatable karena formatnya seperti cerita nyata.


## Latihan Bagian 4

1. Pilih 1 jenis halaman yang paling sering Anda buat.
2. Terapkan 3 prompt berbeda untuk halaman tersebut.
3. Bandingkan hasil dan identifikasi mana yang paling sesuai dengan brand Anda.
4. A/B test versi yang berbeda dan ukur konversi.

---

## Kesalahan Umum di Bagian 4

**Kesalahan 1: Headline yang tidak jelas**
Solusi: Headline harus langsung menjawab "Apa ini?" dan "Apa manfaatnya?"

**Kesalahan 2: CTA yang tidak menonjol**
Solusi: Gunakan warna kontras, ukuran besar, dan teks yang jelas.

**Kesalahan 3: Konten terlalu panjang**
Solusi: Gunakan heading, bullet point, dan spasi untuk readability.

**Kesalahan 4: Tidak ada social proof**
Solusi: Sertakan testimoni, rating, atau logo klien di setiap halaman.

**Kesalahan 5: Mobile tidak optimal**
Solusi: Test semua halaman di mobile dan pastikan responsive.
## Bagian 5: Konten Video dan Podcast

Bagian ini berisi 40 prompt untuk konten video dan podcast: script YouTube, TikTok, Reels, podcast episode, webinar, dan konten audio-visual lainnya. Setiap prompt dirancang untuk platform spesifik dengan format yang sesuai.

---

### P-221. Struktur Naskah Video YouTube

Kapan pakai:
> Membuat script video YouTube lengkap

Variabel:
- [TOPIK_VIDEO]: topik yang akan dibahas
- [DURASI_TARGET]: durasi video yang diinginkan (5-15 menit)
- [TARGET_AUDIENCE]: siapa target penonton
- [CTA_UTAMA]: call-to-action utama
- [CTA_SEKUNDER]: call-to-action sekunder

Prompt:
> Buat script video YouTube [DURASI_TARGET] menit tentang [TOPIK_VIDEO] untuk [TARGET_AUDIENCE] dengan [CTA_UTAMA] dan [CTA_SEKUNDER]. Struktur: (1) Hook 0-15 detik yang menangkap perhatian, (2) Intro 15-30 detik menjelaskan apa yang akan dipelajari, (3) Body dengan 3-5 poin utama masing-masing 1-2 menit, (4) Transisi antar poin, (5) Kesimpulan 30-60 detik merangkum poin utama, (6) CTA untuk subscribe, like, dan komentar. Total script 800-1500 kata tergantung durasi. Gunakan bahasa conversational dan energik.

Hasil yang diharapkan:
Script lengkap dengan timing per section dan total kata sesuai durasi.

---

### P-222. Variasi Hook YouTube

Kapan pakai:
> Membuat variasi hook 15 detik pertama video YouTube

Variabel:
- [TOPIK_VIDEO]: topik video
- [JANJI_KONTEN]: apa yang akan didapat penonton
- [TARGET_AUDIENCE]: siapa target penonton

Prompt:
> Buat 10 variasi hook 15 detik pertama untuk video YouTube tentang [TOPIK_VIDEO] dengan janji [JANJI_KONTEN] untuk [TARGET_AUDIENCE]. Setiap hook harus: (1) Langsung menangkap perhatian dalam 3 detik pertama, (2) Menggunakan pola yang terbukti efektif (pertanyaan, pernyataan kontroversial, angka spesifik, story time, dll), (3) Menciptakan curiosity gap, (4) Relevan dengan target audiens. Setiap hook 30-50 kata. Sertakan saran visual untuk setiap hook.

Hasil yang diharapkan:
Sepuluh hook 30-50 kata dengan saran visual.

---

### P-223. Naskah Intro YouTube

Kapan pakai:
> Membuat intro video YouTube yang konsisten

Variabel:
- [NAMA_CHANNEL]: nama channel
- [TOPIK_CHANNEL]: topik utama channel
- [FREKUENSI_UPLOAD]: berapa sering upload
- [CTA_SUBSCRIBE]: ajakan subscribe

Prompt:
> Buat 5 variasi intro script YouTube untuk [NAMA_CHANNEL] tentang [TOPIK_CHANNEL] yang upload [FREKUENSI_UPLOAD] dengan [CTA_SUBSCRIBE]. Setiap intro harus: (1) Sapaan personal, (2) Perkenalan channel singkat, (3) Preview apa yang akan dibahas di video ini, (4) CTA subscribe, (5) Total 15-30 detik (50-80 kata). Gunakan energi dan enthusiasm yang konsisten dengan brand channel.

Hasil yang diharapkan:
Lima variasi intro 50-80 kata.

---

### P-224. Naskah Outro YouTube

Kapan pakai:
> Membuat outro video YouTube

Variabel:
- [TOPIK_VIDEO]: topik video yang baru dibahas
- [VIDEO_SELANJUTNYA]: video yang akan direkomendasikan
- [CTA_UTAMA]: CTA utama (subscribe, like, comment)
- [CTA_SEKUNDER]: CTA sekunder (check description, visit website)

Prompt:
> Buat 5 variasi outro script YouTube untuk video tentang [TOPIK_VIDEO] dengan rekomendasi [VIDEO_SELANJUTNYA], [CTA_UTAMA], dan [CTA_SEKUNDER]. Setiap outro harus: (1) Ringkasan singkat apa yang baru dibahas, (2) Teaser untuk video selanjutnya, (3) CTA untuk subscribe, like, dan comment, (4) Reminder untuk check description, (5) Penutup personal. Total 30-60 detik (80-120 kata).

Hasil yang diharapkan:
Lima variasi outro 80-120 kata.

---

### P-225. Judul Video YouTube

Kapan pakai:
> Membuat judul video YouTube yang SEO-friendly

Variabel:
- [TOPIK_VIDEO]: topik video
- [KATA_KUNCI_UTAMA]: kata kunci utama
- [JENIS_VIDEO]: jenis video (tutorial, review, vlog, dll)
- [TARGET_AUDIENCE]: siapa target penonton

Prompt:
> Buat 10 variasi judul YouTube untuk [TOPIK_VIDEO] dengan kata kunci [KATA_KUNCI_UTAMA] untuk [JENIS_VIDEO] yang ditujukan kepada [TARGET_AUDIENCE]. Setiap judul harus: (1) Maksimal 60 karakter, (2) Mengandung kata kunci utama di awal, (3) Menggunakan angka atau kata sifat yang kuat, (4) Menciptakan curiosity gap atau janji nilai, (5) Relevan dengan isi video. Hindari clickbait yang menyesatkan.

Hasil yang diharapkan:
Sepuluh judul maksimal 60 karakter yang SEO-friendly.

---

### P-226. Deskripsi Video YouTube

Kapan pakai:
> Membuat deskripsi video YouTube yang optimal

Variabel:
- [JUDUL_VIDEO]: judul video
- [RINGKASAN]: ringkasan isi video
- [TIMESTAMP]: timestamp untuk bagian-bagian penting
- [LINK_RELEVAN]: link yang relevan
- [KATA_KUNCI]: kata kunci yang ingin ditargetkan

Prompt:
> Buat deskripsi YouTube untuk [JUDUL_VIDEO] dengan [RINGKASAN], [TIMESTAMP], [LINK_RELEVAN], dan [KATA_KUNCI]. Struktur: (1) 2-3 kalimat pertama yang menjelaskan [RINGKASAN] dan mengandung [KATA_KUNCI], (2) [TIMESTAMP] dengan format "00:00 - Judul Bagian", (3) [LINK_RELEVAN] dengan label yang jelas, (4) Paragraf penutup 2-3 kalimat, (5) 5-10 hashtag relevan. Total 200-300 kata. Optimalkan untuk SEO YouTube.

Hasil yang diharapkan:
Deskripsi 200-300 kata dengan struktur lengkap.

---

### P-227. Naskah YouTube Shorts

Kapan pakai:
> Membuat script YouTube Shorts (video vertikal pendek)

Variabel:
- [TOPIK]: topik video
- [DURASI]: durasi video (15-60 detik)
- [HOOK]: cara membuka video
- [KONTEN_UTAMA]: pesan utama
- [CTA]: call-to-action

Prompt:
> Buat script YouTube Shorts [DURASI] detik tentang [TOPIK] dengan [HOOK] di 3 detik pertama, [KONTEN_UTAMA] di tengah, dan [CTA] di akhir. Format: (1) Detik 0-3: Hook visual + teks on-screen, (2) Detik 3-[DURASI]-5: Konten utama dengan transisi cepat, (3) Detik terakhir: CTA untuk subscribe atau like. Script harus: (a) Satu ide per kalimat, (b) Bahasa casual dan energik, (c) Teks on-screen sinkron dengan voiceover. Total 30-80 kata.

Hasil yang diharapkan:
Script 30-80 kata dengan timing per bagian.

---

### P-228. Kerangka Episode Podcast

Kapan pakai:
> Membuat outline episode podcast

Variabel:
- [NAMA_PODCAST]: nama podcast
- [TOPIK_EPISODE]: topik episode
- [DURASI_TARGET]: durasi episode (20-60 menit)
- [FORMAT]: format (solo, interview, panel)
- [TARGET_AUDIENCE]: siapa target pendengar

Prompt:
> Buat outline episode [NAMA_PODCAST] tentang [TOPIK_EPISODE] dengan [DURASI_TARGET] dalam format [FORMAT] untuk [TARGET_AUDIENCE]. Struktur: (1) Intro 2-3 menit: hook, perkenalan topik, preview apa yang akan dibahas, (2) Segment 1: Poin utama pertama dengan durasi, (3) Segment 2: Poin utama kedua dengan durasi, (4) Segment 3: Poin utama ketiga dengan durasi, (5) Q&A atau interaksi pendengar jika ada, (6) Outro 2-3 menit: ringkasan, CTA, teaser episode selanjutnya. Total outline 300-400 kata.

Hasil yang diharapkan:
Outline dengan timing per segment.

---

### P-229. Naskah Intro Podcast

Kapan pakai:
> Membuat script intro podcast

Variabel:
- [NAMA_PODCAST]: nama podcast
- [TAGLINE]: tagline podcast
- [HOST]: nama host
- [TOPIK_EPISODE]: topik episode ini
- [SPONSOR]: sponsor jika ada

Prompt:
> Buat 3 variasi intro script podcast untuk [NAMA_PODCAST] dengan [TAGLINE], host [HOST], topik [TOPIK_EPISODE], dan [SPONSOR]. Setiap intro harus: (1) Theme music cue, (2) Sapaan dan perkenalan podcast, (3) Tagline, (4) Perkenalan host, (5) Preview topik episode, (6) Sponsor read jika ada, (7) Transisi ke konten utama. Total 60-90 detik (150-200 kata). Gunakan energi dan tone yang konsisten dengan brand podcast.

Hasil yang diharapkan:
Tiga variasi intro 150-200 kata.

---

### P-230. Naskah Outro Podcast

Kapan pakai:
> Membuat script outro podcast

Variabel:
- [NAMA_PODCAST]: nama podcast
- [TOPIK_EPISODE]: topik yang baru dibahas
- [EPISODE_SELANJUTNYA]: teaser episode selanjutnya
- [CTA]: call-to-action (subscribe, review, share)
- [LINK]: link yang relevan

Prompt:
> Buat 3 variasi outro script podcast untuk [NAMA_PODCAST] setelah membahas [TOPIK_EPISODE] dengan teaser [EPISODE_SELANJUTNYA], [CTA], dan [LINK]. Setiap outro harus: (1) Ringkasan singkat apa yang baru dibahas, (2) Teaser episode selanjutnya, (3) CTA untuk subscribe, review, dan share, (4) Link ke show notes atau resource, (5) Ucapan terima kasih, (6) Sign-off personal. Total 60-90 detik (150-200 kata).

Hasil yang diharapkan:
Tiga variasi outro 150-200 kata.

---

### P-231. Pertanyaan Wawancara Podcast

Kapan pakai:
> Membuat daftar pertanyaan untuk interview podcast

Variabel:
- [NAMA_TAMU]: nama tamu
- [LATAR_BELAKANG_TAMU]: latar belakang tamu
- [TOPIK_INTERVIEW]: topik yang akan dibahas
- [JUMLAH_PERTANYAAN]: berapa banyak pertanyaan
- [DURASI_INTERVIEW]: durasi segment interview

Prompt:
> Buat [JUMLAH_PERTANYAAN] pertanyaan interview podcast untuk [NAMA_TAMU] dengan [LATAR_BELAKANG_TAMU] tentang [TOPIK_INTERVIEW] dengan [DURASI_INTERVIEW]. Struktur pertanyaan: (1) 2-3 pertanyaan pembuka untuk membangun rapport, (2) 5-7 pertanyaan inti tentang topik, (3) 2-3 pertanyaan deep dive atau follow-up, (4) 1-2 pertanyaan reflektif atau pelajaran, (5) 1 pertanyaan rapid fire atau fun. Setiap pertanyaan harus: (a) Terbuka dan mendorong cerita, (b) Relevan dengan audiens, (c) Tidak terlalu umum. Total 300-400 kata.

Hasil yang diharapkan:
Daftar pertanyaan terstruktur dengan timing.

---

### P-232. Naskah Episode Solo Podcast

Kapan pakai:
> Membuat script untuk episode podcast solo

Variabel:
- [NAMA_PODCAST]: nama podcast
- [TOPIK]: topik episode
- [DURASI]: durasi episode
- [POIN_UTAMA]: 3-5 poin utama yang akan dibahas
- [STORY_PERSONAL]: cerita personal yang relevan

Prompt:
> Buat script podcast solo [DURASI] menit untuk [NAMA_PODCAST] tentang [TOPIK] dengan [POIN_UTAMA] dan [STORY_PERSONAL]. Struktur: (1) Intro 2-3 menit: hook dan preview, (2) Poin 1 dengan durasi dan talking points, (3) Poin 2 dengan durasi dan talking points, (4) Poin 3 dengan durasi dan talking points, (5) Story personal 2-3 menit, (6) Kesimpulan dan CTA 2-3 menit. Total script 1000-2000 kata tergantung durasi. Gunakan bahasa conversational seperti berbicara dengan teman.

Hasil yang diharapkan:
Script lengkap dengan talking points per section.

---

### P-233. Struktur Naskah Webinar

Kapan pakai:
> Membuat script webinar lengkap

Variabel:
- [TOPIK_WEBINAR]: topik webinar
- [DURASI]: durasi webinar (30-60 menit)
- [TARGET_AUDIENCE]: siapa target peserta
- [PRODUK_YANG_DIPROMOSIKAN]: produk yang akan ditawarkan di akhir
- [Q&A]: apakah ada sesi Q&A

Prompt:
> Buat script webinar [DURASI] menit tentang [TOPIK_WEBINAR] untuk [TARGET_AUDIENCE] yang mempromosikan [PRODUK_YANG_DIPROMOSIKAN] dengan [Q&A]. Struktur: (1) Welcome dan housekeeping 5 menit, (2) Intro host dan credibility 5 menit, (3) Konten utama 20-30 menit dengan 3-5 poin, (4) Transition ke pitch 5 menit, (5) Product pitch 10 menit, (6) Q&A 10 menit jika ada, (7) Closing dan CTA 5 menit. Total script 2000-4000 kata. Gunakan pendekatan edukatif 80% dan promosi 20%.

Hasil yang diharapkan:
Script lengkap dengan timing dan transition.

---

### P-234. Hook Pembuka Webinar

Kapan pakai:
> Membuat opening hook untuk webinar

Variabel:
- [TOPIK_WEBINAR]: topik webinar
- [JANJI_WEBINAR]: apa yang akan didapat peserta
- [TARGET_AUDIENCE]: siapa target peserta
- [STATISTIK]: statistik yang relevan

Prompt:
> Buat 5 variasi opening hook webinar untuk [TOPIK_WEBINAR] dengan janji [JANJI_WEBINAR] untuk [TARGET_AUDIENCE] menggunakan [STATISTIK]. Setiap hook harus: (1) Menangkap perhatian dalam 30 detik pertama, (2) Menjelaskan mengapa topik ini penting sekarang, (3) Memberikan preview apa yang akan dipelajari, (4) Membangun credibility host, (5) Menciptakan expectation yang jelas. Total 80-120 kata per hook.

Hasil yang diharapkan:
Lima variasi hook 80-120 kata.

---

### P-235. Naskah Pitch Webinar

Kapan pakai:
> Membuat script pitch produk di webinar

Variabel:
- [NAMA_PRODUK]: nama produk
- [MASALAH_YANG_DISELESAIKAN]: masalah yang diselesaikan
- [FITUR_UTAMA]: fitur utama produk
- [HARGA]: harga produk
- [BONUS]: bonus untuk peserta webinar
- [GUARANTEE]: garansi yang ditawarkan
- [URGENCY]: elemen urgency

Prompt:
> Buat webinar pitch script untuk [NAMA_PRODUK] yang menyelesaikan [MASALAH_YANG_DISELESAIKAN] dengan [FITUR_UTAMA], [HARGA], [BONUS], [GUARANTEE], dan [URGENCY]. Struktur: (1) Transition dari konten ke pitch, (2) Recap masalah yang sudah dibahas, (3) Perkenalan produk sebagai solusi, (4) Demo atau walkthrough fitur, (5) Testimoni atau case study, (6) Penawaran khusus untuk peserta webinar, (7) Bonus dan guarantee, (8) Urgency dan scarcity, (9) CTA dan cara mendaftar, (10) Handling objections umum. Total 500-800 kata. Gunakan pendekatan consultative selling.

Hasil yang diharapkan:
Pitch script lengkap dengan transition dan objection handling.

---

### P-236. Naskah Live Streaming

Kapan pakai:
> Membuat script untuk live streaming

Variabel:
- [PLATFORM]: platform live (Instagram, Facebook, YouTube, TikTok)
- [TOPIK]: topik live
- [DURASI]: durasi live
- [INTERAKSI]: jenis interaksi dengan penonton
- [CTA]: call-to-action

Prompt:
> Buat script live streaming [PLATFORM] [DURASI] menit tentang [TOPIK] dengan [INTERAKSI] dan [CTA]. Struktur: (1) Pre-live countdown dan waiting room, (2) Opening 5 menit: sapaan, perkenalan, preview topik, (3) Konten utama dengan checkpoint setiap 10 menit untuk interaksi, (4) Q&A session atau respond comments, (5) CTA dan closing. Sertakan: (a) Talking points per section, (b) Prompt untuk interaksi ("Ketik 1 jika...", "Comment di bawah..."), (c) Backup plan jika tidak ada yang comment. Total 800-1500 kata.

Hasil yang diharapkan:
Script live dengan talking points dan interaction prompts.

---

### P-237. Naskah Video Tutorial

Kapan pakai:
> Membuat script video tutorial

Variabel:
- [TOPIK_TUTORIAL]: topik yang diajarkan
- [LEVEL]: tingkat kesulitan (pemula, menengah, advanced)
- [DURASI]: durasi video
- [TOOLS_YANG_DIBUTUHKAN]: tools atau software yang dibutuhkan
- [HASIL_AKHIR]: hasil yang akan dicapai

Prompt:
> Buat script video tutorial [DURASI] menit tentang [TOPIK_TUTORIAL] level [LEVEL] dengan [TOOLS_YANG_DIBUTUHKAN] dan [HASIL_AKHIR]. Struktur: (1) Intro: apa yang akan dipelajari dan prerequisites, (2) Setup: persiapan tools dan environment, (3) Step-by-step tutorial dengan numbering, (4) Common mistakes dan cara menghindarinya, (5) Final result dan next steps. Setiap step harus: (a) Clear instruction, (b) Visual cue ("Perhatikan layar..."), (c) Checkpoint untuk memastikan penonton mengikuti. Total 600-1200 kata.

Hasil yang diharapkan:
Script tutorial step-by-step yang jelas.

---

### P-238. Naskah Video Demo Produk

Kapan pakai:
> Membuat script video demo produk

Variabel:
- [NAMA_PRODUK]: nama produk
- [FITUR_YANG_DIDEMOKAN]: fitur yang akan didemokan
- [USE_CASE]: use case atau skenario penggunaan
- [TARGET_AUDIENCE]: siapa target penonton
- [CTA]: call-to-action

Prompt:
> Buat naskah video demo produk untuk [NAMA_PRODUK] yang mendemokan [FITUR_YANG_DIDEMOKAN] dalam [USE_CASE] untuk [TARGET_AUDIENCE] dengan [CTA]. Struktur: (1) Intro: masalah yang dihadapi target audiens, (2) Perkenalan produk sebagai solusi, (3) Demo fitur 1 dengan use case, (4) Demo fitur 2 dengan use case, (5) Demo fitur 3 dengan use case, (6) Rekap manfaat, (7) CTA. Total 400-800 kata. Fokus pada "bagaimana ini membantu", bukan hanya "apa yang dilakukan".

Hasil yang diharapkan:
Script demo dengan use case dan benefit.

---

### P-239. Naskah Video Testimoni

Kapan pakai:
> Membuat script video testimoni pelanggan

Variabel:
- [NAMA_PELANGGAN]: nama pelanggan
- [PRODUK_YANG_DIGUNAKAN]: produk yang digunakan
- [MASALAH_SEBELUM]: masalah sebelum menggunakan produk
- [SOLUSI]: bagaimana produk membantu
- [HASIL_KONKRET]: hasil konkret yang dicapai
- [DURASI]: durasi video

Prompt:
> Buat script video testimoni [DURASI] menit untuk [NAMA_PELANGGAN] yang menggunakan [PRODUK_YANG_DIGUNAKAN], menghadapi [MASALAH_SEBELUM], mendapatkan [SOLUSI], dan mencapai [HASIL_KONKRET]. Struktur pertanyaan: (1) "Bisa ceritakan latar belakang Anda?", (2) "Apa masalah yang Anda hadapi sebelum menggunakan [produk]?", (3) "Bagaimana Anda menemukan [produk]?", (4) "Bagaimana pengalaman Anda menggunakan [produk]?", (5) "Hasil konkret apa yang Anda dapatkan?", (6) "Apakah Anda merekomendasikan [produk] ke orang lain?". Total script 200-400 kata. Gunakan pertanyaan terbuka yang mendorong cerita.

Hasil yang diharapkan:
Script interview testimoni dengan pertanyaan terbuka.

---

### P-240. Naskah Video Studi Kasus

Kapan pakai:
> Membuat script video case study

Variabel:
- [NAMA_KLIEN]: nama klien
- [INDUSTRI]: industri klien
- [TANTANGAN]: tantangan yang dihadapi
- [SOLUSI]: solusi yang diterapkan
- [HASIL]: hasil yang dicapai
- [DURASI]: durasi video

Prompt:
> Buat script video case study [DURASI] menit tentang [NAMA_KLIEN] dari [INDUSTRI] yang menghadapi [TANTANGAN], menerapkan [SOLUSI], dan mencapai [HASIL]. Struktur: (1) Intro: overview klien dan industri, (2) Tantangan: masalah yang dihadapi dengan data, (3) Solusi: pendekatan yang diterapkan, (4) Implementasi: bagaimana solusi dijalankan, (5) Hasil: outcome dengan angka konkret, (6) Testimoni dari klien, (7) Kesimpulan dan pelajaran. Total 500-1000 kata. Gunakan pendekatan storytelling.

Hasil yang diharapkan:
Script case study dengan storytelling dan data.

---

### P-241. Naskah Explainer Video

Kapan pakai:
> Membuat script explainer video

Variabel:
- [KONSEP_YANG_DIJELASKAN]: konsep atau produk yang dijelaskan
- [TARGET_AUDIENCE]: siapa target penonton
- [DURASI]: durasi video (60-180 detik)
- [ANALOGI]: analogi yang bisa digunakan
- [CTA]: call-to-action

Prompt:
> Buat script explainer video [DURASI] detik tentang [KONSEP_YANG_DIJELASKAN] untuk [TARGET_AUDIENCE] menggunakan [ANALOGI] dengan [CTA]. Struktur: (1) Problem statement 10-15 detik, (2) Agitasi masalah 10-15 detik, (3) Solusi diperkenalkan 15-20 detik, (4) Cara kerja dengan analogi 30-60 detik, (5) Benefit 15-20 detik, (6) CTA 10-15 detik. Total 150-300 kata. Gunakan bahasa sederhana dan visual.

Hasil yang diharapkan:
Script explainer yang simple dan visual.

---

### P-242. Naskah Iklan Video (15 detik)

Kapan pakai:
> Membuat script iklan video 15 detik

Variabel:
- [PRODUK]: produk yang diiklankan
- [MANFAAT_UTAMA]: manfaat utama
- [TARGET_AUDIENCE]: siapa target
- [CTA]: call-to-action

Prompt:
> Buat 5 variasi script iklan video 15 detik untuk [PRODUK] dengan [MANFAAT_UTAMA] untuk [TARGET_AUDIENCE] dan [CTA]. Setiap script harus: (1) Detik 0-3: Hook yang menangkap perhatian, (2) Detik 3-10: Manfaat utama dengan visual, (3) Detik 10-15: CTA yang jelas. Total 30-40 kata per script. Setiap detik harus impactful.

Hasil yang diharapkan:
Lima script 30-40 kata yang impactful.

---

### P-243. Naskah Iklan Video (30 detik)

Kapan pakai:
> Membuat script iklan video 30 detik

Variabel:
- [PRODUK]: produk yang diiklankan
- [MASALAH]: masalah yang diselesaikan
- [SOLUSI]: solusi yang ditawarkan
- [BENEFIT]: manfaat yang didapat
- [CTA]: call-to-action

Prompt:
> Buat 5 variasi script iklan video 30 detik untuk [PRODUK] yang menyelesaikan [MASALAH] dengan [SOLUSI], memberikan [BENEFIT], dan [CTA]. Setiap script harus: (1) Detik 0-5: Hook dengan masalah, (2) Detik 5-15: Solusi diperkenalkan, (3) Detik 15-25: Benefit dengan bukti, (4) Detik 25-30: CTA. Total 60-80 kata per script.

Hasil yang diharapkan:
Lima script 60-80 kata.

---

### P-244. Naskah Iklan Video (60 detik)

Kapan pakai:
> Membuat script iklan video 60 detik

Variabel:
- [PRODUK]: produk yang diiklankan
- [STORY]: cerita atau narasi
- [EMOSI]: emosi yang ingin disentuh
- [BENEFIT]: manfaat produk
- [SOCIAL_PROOF]: bukti sosial
- [CTA]: call-to-action

Prompt:
> Buat 3 variasi script iklan video 60 detik untuk [PRODUK] dengan [STORY], menyentuh [EMOSI], memberikan [BENEFIT], menggunakan [SOCIAL_PROOF], dan [CTA]. Setiap script harus: (1) Detik 0-10: Hook dengan story atau masalah, (2) Detik 10-30: Pengembangan cerita dan solusi, (3) Detik 30-45: Benefit dan social proof, (4) Detik 45-60: CTA. Total 120-150 kata per script.

Hasil yang diharapkan:
Tiga script 120-150 kata dengan storytelling.

---

### P-245. Show Notes Podcast

Kapan pakai:
> Membuat show notes untuk episode podcast

Variabel:
- [NAMA_PODCAST]: nama podcast
- [NOMOR_EPISODE]: nomor episode
- [JUDUL_EPISODE]: judul episode
- [TOPIK]: topik yang dibahas
- [TAMU]: tamu jika ada
- [LINK]: link yang disebutkan
- [TIMESTAMP]: timestamp penting

Prompt:
> Buat show notes untuk [NAMA_PODCAST] episode [NOMOR_EPISODE] "[JUDUL_EPISODE]" tentang [TOPIK] dengan [TAMU], [LINK], dan [TIMESTAMP]. Struktur: (1) Judul episode, (2) Ringkasan episode 100-150 kata, (3) Timestamp untuk section penting, (4) Link dan resource yang disebutkan, (5) Bio tamu jika ada, (6) CTA untuk subscribe dan review, (7) Social media links. Total 300-400 kata.

Hasil yang diharapkan:
Show notes lengkap dan terstruktur.

---

### P-246. Video Caption untuk Reels

Kapan pakai:
> Membuat caption untuk Instagram Reels

Variabel:
- [TOPIK_REEL]: topik video
- [SOUND]: sound atau musik yang digunakan
- [TARGET_AUDIENCE]: siapa target penonton
- [CTA]: call-to-action

Prompt:
> Buat 5 variasi caption Instagram untuk Reels tentang [TOPIK_REEL] dengan [SOUND] untuk [TARGET_AUDIENCE] dan [CTA]. Setiap caption harus: (1) Hook 1 kalimat pertama, (2) 2-3 kalimat penjelasan, (3) CTA yang jelas, (4) 5-8 hashtag relevan. Total 80-120 kata. Caption Reels harus singkat dan langsung.

Hasil yang diharapkan:
Lima caption 80-120 kata.

---

### P-247. Naskah Teaser Podcast

Kapan pakai:
> Membuat teaser untuk episode podcast yang akan datang

Variabel:
- [NAMA_PODCAST]: nama podcast
- [TOPIK_EPISODE]: topik episode
- [TAMU]: tamu jika ada
- [TANGGAL_RILIS]: kapan episode rilis
- [HOOK]: hook yang menarik

Prompt:
> Buat 3 variasi teaser script podcast untuk [NAMA_PODCAST] episode tentang [TOPIK_EPISODE] dengan [TAMU] rilis [TANGGAL_RILIS] menggunakan [HOOK]. Setiap teaser harus: (1) Hook yang menarik perhatian, (2) Preview topik tanpa spoiler, (3) Mention tamu jika ada, (4) Tanggal rilis, (5) CTA untuk subscribe agar tidak ketinggalan. Total 30-60 detik (80-120 kata). Gunakan untuk social media promotion.

Hasil yang diharapkan:
Tiga teaser 80-120 kata.

---

### P-248. Naskah Video untuk Testimoni Teks

Kapan pakai:
> Membuat script untuk video yang menampilkan testimoni teks

Variabel:
- [PRODUK]: produk yang ditestimoni
- [JUMLAH_TESTIMONI]: berapa testimoni yang ditampilkan
- [THEMA]: tema testimoni
- [MUSIC]: saran musik background
- [CTA]: call-to-action

Prompt:
> Buat script video [DURASI] detik yang menampilkan [JUMLAH_TESTIMONI] testimoni tentang [PRODUK] dengan tema [THEMA], [MUSIC], dan [CTA]. Struktur: (1) Opening text: "Apa kata mereka tentang [produk]?", (2) Testimoni 1 dengan nama dan foto, (3) Testimoni 2, (4) Testimoni 3, (5) Closing dengan CTA. Setiap testimoni ditampilkan 3-5 detik. Total teks 50-80 kata. Gunakan musik yang uplifting.

Hasil yang diharapkan:
Script video testimoni dengan timing.

---

### P-249. Naskah Bacaan Iklan Podcast

Kapan pakai:
> Membuat script iklan di dalam podcast

Variabel:
- [NAMA_PODCAST]: nama podcast
- [SPONSOR]: nama sponsor
- [PRODUK_SPONSOR]: produk sponsor
- [MANFAAT]: manfaat produk
- [OFFER]: penawaran khusus
- [CODE]: kode promo
- [DURASI]: durasi ad read (30-60 detik)

Prompt:
> Buat [DURASI] detik ad read script untuk [NAMA_PODCAST] yang mensponsori [SPONSOR] dengan [PRODUK_SPONSOR], [MANFAAT], [OFFER], dan [CODE]. Struktur: (1) Transition dari konten, (2) Perkenalan sponsor, (3) Personal story atau pengalaman dengan produk, (4) Manfaat produk, (5) Penawaran khusus dan kode promo, (6) CTA dan link, (7) Transition kembali ke konten. Total 80-150 kata. Gunakan tone yang natural dan personal.

Hasil yang diharapkan:
Ad read script yang natural dan personal.

---

### P-250. Narasi B-Roll Video

Kapan pakai:
> Membuat narasi untuk B-roll footage

Variabel:
- [TOPIK_VIDEO]: topik video
- [SCENE_BROLL]: deskripsi scene B-roll
- [MOOD]: mood atau tone yang diinginkan
- [DURASI]: durasi narasi

Prompt:
> Buat narasi [DURASI] detik untuk B-roll footage [SCENE_BROLL] dalam video tentang [TOPIK_VIDEO] dengan [MOOD]. Narasi harus: (1) Melengkapi visual bukan mengulanginya, (2) Menggunakan bahasa yang evocative dan visual, (3) Sesuai dengan mood yang diinginkan, (4) Tidak terlalu panjang agar visual bisa berbicara. Total 30-60 kata.

Hasil yang diharapkan:
Narasi 30-60 kata yang melengkapi visual.

---

### P-251. Judul Episode Podcast

Kapan pakai:
> Membuat judul episode podcast

Variabel:
- [TOPIK_EPISODE]: topik episode
- [TAMU]: nama tamu jika ada
- [ANGLE]: sudut pandang episode
- [TARGET_AUDIENCE]: siapa target pendengar

Prompt:
> Buat 10 variasi judul episode podcast tentang [TOPIK_EPISODE] dengan [TAMU], [ANGLE], untuk [TARGET_AUDIENCE]. Setiap judul harus: (1) Menarik dan memancing rasa ingin tahu, (2) Menjelaskan apa yang akan dipelajari, (3) Maksimal 60 karakter, (4) SEO-friendly untuk podcast directory. Hindari judul yang terlalu umum.

Hasil yang diharapkan:
Sepuluh judul maksimal 60 karakter.

---

### P-252. Teks Thumbnail Video

Kapan pakai:
> Membuat teks untuk thumbnail video

Variabel:
- [TOPIK_VIDEO]: topik video
- [JANJI_VIDEO]: apa yang dijanjikan video
- [TARGET_AUDIENCE]: siapa target penonton
- [STYLE]: gaya teks (bold, playful, profesional)

Prompt:
> Buat 10 variasi teks thumbnail untuk video tentang [TOPIK_VIDEO] dengan janji [JANJI_VIDEO] untuk [TARGET_AUDIENCE] dengan [STYLE]. Setiap teks harus: (1) Maksimal 5-7 kata, (2) Besar dan mudah dibaca di ukuran kecil, (3) Menarik perhatian dan memancing klik, (4) Relevan dengan isi video. Hindari clickbait yang menyesatkan.

Hasil yang diharapkan:
Sepuluh teks 5-7 kata yang eye-catching.

---

### P-253. Perkenalan Tamu Podcast

Kapan pakai:
> Membuat script perkenalan tamu podcast

Variabel:
- [NAMA_TAMU]: nama tamu
- [LATAR_BELAKANG]: latar belakang tamu
- [PENCAPAIAN]: pencapaian tamu
- [TOPIK_YANG_AKAN_DIBAHAS]: topik yang akan dibahas bersama
- [TONE]: tone perkenalan

Prompt:
> Buat 3 variasi guest introduction script untuk [NAMA_TAMU] dengan [LATAR_BELAKANG], [PENCAPAIAN], yang akan membahas [TOPIK_YANG_AKAN_DIBAHAS] dengan [TONE]. Setiap intro harus: (1) Nama dan title, (2) Latar belakang singkat, (3) Pencapaian yang relevan, (4) Mengapa tamu ini penting untuk topik ini, (5) Welcome dan transition ke interview. Total 60-90 detik (150-200 kata).

Hasil yang diharapkan:
Tiga variasi intro 150-200 kata.

---

### P-254. Variasi Call-to-Action Video

Kapan pakai:
> Membuat variasi CTA untuk video

Variabel:
- [JENIS_CTA]: jenis CTA (subscribe, like, comment, share, click link)
- [PLATFORM]: platform video
- [TONE]: tone CTA (casual, profesional, urgent)

Prompt:
> Buat 10 variasi CTA untuk [JENIS_CTA] di [PLATFORM] dengan [TONE]. Setiap CTA harus: (1) Singkat dan jelas (10-20 kata), (2) Menggunakan kata kerja imperatif, (3) Menjelaskan benefit dari tindakan, (4) Sesuai dengan tone yang diinginkan. Hindari CTA yang terlalu agresif.

Hasil yang diharapkan:
Sepuluh CTA 10-20 kata.

---

### P-255. Interaksi Pendengar Podcast

Kapan pakai:
> Membuat script untuk mengajak pendengar berinteraksi

Variabel:
- [NAMA_PODCAST]: nama podcast
- [JENIS_ENGAGEMENT]: jenis engagement (review, question, story sharing)
- [PLATFORM]: platform untuk engagement
- [INSENTIF]: insentif untuk berinteraksi

Prompt:
> Buat 5 variasi listener engagement script untuk [NAMA_PODCAST] yang mengajak [JENIS_ENGAGEMENT] di [PLATFORM] dengan [INSENTIF]. Setiap script harus: (1) Menjelaskan cara berinteraksi, (2) Memberikan alasan mengapa engagement penting, (3) Menyebutkan insentif jika ada, (4) Menggunakan tone yang welcoming. Total 30-60 detik (80-120 kata) per script.

Hasil yang diharapkan:
Lima script 80-120 kata.

---

### P-256. Pengantar Seri Video

Kapan pakai:
> Membuat intro untuk video series

Variabel:
- [NAMA_SERIES]: nama series
- [TOPIK_SERIES]: topik series
- [JUMLAH_EPISODE]: berapa episode
- [TARGET_AUDIENCE]: siapa target penonton
- [JANJI_SERIES]: apa yang akan didapat

Prompt:
> Buat 3 variasi series introduction untuk [NAMA_SERIES] tentang [TOPIK_SERIES] dengan [JUMLAH_EPISODE] untuk [TARGET_AUDIENCE] dengan janji [JANJI_SERIES]. Setiap intro harus: (1) Menjelaskan konsep series, (2) Preview apa yang akan dipelajari di setiap episode, (3) Mengapa series ini penting, (4) CTA untuk subscribe dan nonton episode pertama. Total 60-90 detik (150-200 kata).

Hasil yang diharapkan:
Tiga variasi intro 150-200 kata.

---

### P-257. Pratinjau Musim Podcast

Kapan pakai:
> Membuat preview untuk season podcast baru

Variabel:
- [NAMA_PODCAST]: nama podcast
- [NOMOR_SEASON]: nomor season
- [TEMA_SEASON]: tema season
- [JUMLAH_EPISODE]: berapa episode
- [TANGGAL_MULAI]: kapan season mulai

Prompt:
> Buat season preview script untuk [NAMA_PODCAST] season [NOMOR_SEASON] dengan tema [TEMA_SEASON], [JUMLAH_EPISODE], mulai [TANGGAL_MULAI]. Struktur: (1) Recap season sebelumnya, (2) Pengumuman season baru, (3) Tema dan apa yang akan dibahas, (4) Preview episode-episode, (5) Tanggal rilis, (6) CTA untuk subscribe. Total 90-120 detik (200-250 kata).

Hasil yang diharapkan:
Season preview 200-250 kata.

---

### P-258. Naskah Montase Rekap Video

Kapan pakai:
> Membuat script untuk video recap atau montage

Variabel:
- [PERIODE]: periode yang dirangkum (tahun, kuartal, event)
- [HIGHLIGHT]: highlight yang akan ditampilkan
- [MOOD]: mood video (celebratory, nostalgic, inspirational)
- [MUSIC]: saran musik
- [DURASI]: durasi video

Prompt:
> Buat script video recap [DURASI] detik untuk [PERIODE] dengan [HIGHLIGHT], [MOOD], dan [MUSIC]. Struktur: (1) Teks pembuka: "Best of [periode]", (2) Highlight 1 dengan caption, (3) Highlight 2, (4) Highlight 3, (5) dst, (6) Penutup dengan ucapan terima kasih atau CTA. Setiap highlight ditampilkan 3-5 detik dengan caption 10-15 kata. Total 50-100 kata. Gunakan musik yang sesuai mood.

Hasil yang diharapkan:
Script recap dengan caption per highlight.

---

### P-259. Naskah Segmen Tanya Jawab Podcast

Kapan pakai:
> Membuat script untuk segment Q&A podcast

Variabel:
- [NAMA_PODCAST]: nama podcast
- [SUMBER_PERTANYAAN]: dari mana pertanyaan berasal (email, social media, voice message)
- [JUMLAH_PERTANYAAN]: berapa pertanyaan yang akan dijawab
- [TONE]: tone jawaban

Prompt:
> Buat Q&A segment script untuk [NAMA_PODCAST] dengan [SUMBER_PERTANYAAN], [JUMLAH_PERTANYAAN], dan [TONE]. Struktur: (1) Intro segment: "Sekarang saatnya menjawab pertanyaan dari pendengar", (2) Pertanyaan 1 dengan nama penanya, (3) Jawaban 60-90 detik, (4) Pertanyaan 2, (5) Jawaban, (6) dst, (7) Closing segment dan CTA untuk mengirim pertanyaan. Total 400-600 kata.

Hasil yang diharapkan:
Script Q&A dengan pertanyaan dan jawaban.

---

### P-260. Naskah Layar Akhir Video

Kapan pakai:
> Membuat script untuk end screen video

Variabel:
- [TOPIK_VIDEO]: topik video yang baru selesai
- [VIDEO_REKOMENDASI]: video yang direkomendasikan
- [PLAYLIST]: playlist yang relevan
- [CTA_UTAMA]: CTA utama (subscribe)
- [CTA_SEKUNDER]: CTA sekunder (watch next)

Prompt:
> Buat 5 variasi end screen script untuk video tentang [TOPIK_VIDEO] dengan rekomendasi [VIDEO_REKOMENDASI], [PLAYLIST], [CTA_UTAMA], dan [CTA_SEKUNDER]. Setiap script harus: (1) Thank you untuk menonton, (2) Quick recap 1 kalimat, (3) Rekomendasi video atau playlist, (4) CTA subscribe, (5) Total 20-30 detik (50-80 kata). Gunakan tone yang appreciative.

Hasil yang diharapkan:
Lima script 50-80 kata.

---

## Ringkasan Cepat Bagian 5

| No | Jenis Konten | Prompt |
|----|--------------|--------|
| P-221 s/d P-227 | YouTube | Naskah, hook, intro, outro, judul, deskripsi, Shorts |
| P-228 s/d P-232 | Podcast | Kerangka episode, intro, outro, wawancara, solo |
| P-233 s/d P-235 | Webinar | Naskah, pembukaan, pitch |
| P-236 s/d P-240 | Live & Tutorial | Live streaming, tutorial, demo, testimoni, studi kasus |
| P-241 s/d P-244 | Iklan Video | Penjelasan, 15 detik, 30 detik, 60 detik |
| P-245 s/d P-250 | Pendukung | Show notes, caption, teaser, B-roll, pembacaan iklan |
| P-251 s/d P-260 | Optimasi | Judul, thumbnail, CTA, interaksi, seri, rekap, tanya jawab, layar akhir |

---

## Contoh Output AI untuk Bagian 5

### P-221. YouTube Video Script Structure (Contoh Output)

**Input yang dipakai:**
Topik: Cara membuat kopi manual brew yang enak di rumah, durasi target 8 menit, target audience pecinta kopi pemula, tone edukatif tapi santai.

**Output ChatGPT:**
```
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
```

**Output Gemini:**
```
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
```

**Perbandingan:** ChatGPT lebih terstruktur dengan timestamp detail. Gemini lebih fokus di visual dan pacing. Untuk YouTube script, ChatGPT lebih mudah diikuti saat produksi.

---

### P-233. Webinar Script Structure (Contoh Output)

**Input yang dipakai:**
Topik: Cara mulai bisnis online dari nol untuk ibu rumah tangga, durasi 60 menit, target wanita usia 25-45 tahun yang ingin punya penghasilan tambahan.

**Output ChatGPT:**
```
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

[45:00-55:00] TANYA JAWAB
Jawab pertanyaan dari chat

[55:00-60:00] PENUTUP
- Ringkasan 3 poin utama
- CTA: download checklist gratis
- Info kelas lanjutan
```

**Output Gemini:**
```
[0:00-5:00] PEMBUKAAN
"Selamat malam ibu-ibu hebat. Saya [nama], 3 tahun lalu saya juga duduk di posisi Anda: pengen punya penghasilan tapi nggak bisa tinggalin anak. Hari ini saya share gimana saya mulai dari nol."

[5:00-15:00] STORYTELLING
Cerita personal dengan foto-foto perjalanan. Dari dapet order pertama sampai bisa bayar sekolah anak dari hasil bisnis.

[15:00-30:00] PRAKTIS
Live demo: cara daftar Shopee, cara foto produk dengan HP, cara balas chat customer.

[30:00-45:00] RENCANA AKSI
Checklist 7 hari pertama: hari 1 daftar, hari 2 foto produk, hari 3 posting, dst.

[45:00-55:00] TANYA JAWAB
"Silakan tanya apa saja. Nggak ada pertanyaan yang bodoh."

[55:00-60:00] CTA
"Download checklist gratis di link chat. Kalau mau bimbingan lebih lanjut, ada kelas 4 pertemuan mulai minggu depan."
```

**Perbandingan:** ChatGPT lebih terstruktur untuk webinar formal. Gemini lebih personal dan storytelling-driven. Untuk audience ibu rumah tangga, Gemini biasanya lebih engage karena formatnya seperti cerita teman.


## Latihan Bagian 5

1. Pilih 1 platform video atau podcast yang ingin Anda fokuskan.
2. Buat outline lengkap menggunakan prompt yang sesuai.
3. Rekam atau tulis script lengkap.
4. Publish dan ukur engagement.
5. Iterasi berdasarkan feedback.

---

## Kesalahan Umum di Bagian 5

**Kesalahan 1: Hook yang lemah di 5 detik pertama**
Solusi: Hook harus langsung menangkap perhatian. Test beberapa variasi.

**Kesalahan 2: Script terlalu panjang untuk durasi**
Solusi: 1 menit = 150 kata untuk video, 130 kata untuk podcast.

**Kesalahan 3: Tidak ada CTA yang jelas**
Solusi: Setiap video/podcast harus memiliki minimal 1 CTA yang spesifik.

**Kesalahan 4: Mengabaikan audio quality**
Solusi: Audio yang buruk akan membuat penonton pergi. Investasikan di microphone yang baik.

**Kesalahan 5: Tidak konsisten dengan upload schedule**
Solusi: Buat content calendar dan stick to it. Konsistensi lebih penting dari perfection.
## Bagian 6: Copywriting Tingkat Lanjut

Bagian ini berisi 40 prompt untuk teknik copywriting tingkat lanjut: A/B testing, psychological triggers, brand voice, persuasion frameworks, dan optimization. Prompt-prompt ini dirancang untuk copywriter yang sudah menguasai dasar dan ingin meningkatkan keterampilan mereka.

---

### P-261. Variasi Headline untuk Pengujian A/B

Kapan pakai:
> Membuat variasi headline untuk A/B testing

Variabel:
- [HEADLINE_ASAL]: headline asli yang akan di-test
- [VARIASI_YANG_DIINGINKAN]: berapa banyak variasi
- [ELEMENT_YANG_DIVARIASI]: elemen yang divariasikan (angka, kata, struktur)

Prompt:
> Buat [VARIASI_YANG_DIINGINKAN] variasi [HEADLINE_ASAL] dengan memvariasikan [ELEMENT_YANG_DIVARIASI]. Setiap variasi harus: (1) Mempertahankan inti pesan, (2) Mengubah satu elemen saja untuk isolasi testing, (3) Dapat diukur efektivitasnya. Jelaskan hipotesis untuk setiap variasi dan metrik apa yang akan diukur (CTR, conversion rate, time on page). Format tabel dengan kolom: variasi, perubahan, hipotesis, metrik.

Hasil yang diharapkan:
Tabel variasi headline dengan hipotesis dan metrik pengukuran.

---

### P-262. Variasi CTA untuk Pengujian A/B

Kapan pakai:
> Membuat variasi CTA untuk A/B testing

Variabel:
- [CTA_ASAL]: CTA asli
- [VARIASI]: berapa banyak variasi
- [ASPEK]: aspek yang divariasikan (warna, teks, ukuran, posisi)

Prompt:
> Buat [VARIASI] variasi [CTA_ASAL] dengan memvariasikan [ASPEK]. Setiap variasi harus: (1) Mengubah satu aspek saja, (2) Tetap konsisten dengan brand, (3) Dapat diukur. Jelaskan hipotesis dan metrik (click rate, conversion rate). Format tabel.

Hasil yang diharapkan:
Tabel variasi CTA dengan hipotesis dan metrik.

---

### P-263. Copy Kelangkaan yang Etis

Kapan pakai:
> Membuat copy scarcity yang legitimate

Variabel:
- [PRODUK]: produk yang dipromosikan
- [JENIS_SCARCITY]: jenis scarcity (stok, waktu, edisi khusus)
- [BUKTI_SCARCITY]: bukti bahwa scarcity nyata

Prompt:
> Buat 5 variasi scarcity copy untuk [PRODUK] dengan [JENIS_SCARCITY] yang didukung [BUKTI_SCARCITY]. Setiap copy harus: (1) Jujur dan dapat dibuktikan, (2) Tidak manipulatif, (3) Menjelaskan alasan scarcity, (4) Menciptakan urgency tanpa tekanan berlebihan. Total 50-80 kata per variasi.

Hasil yang diharapkan:
Lima variasi scarcity copy yang etis dan legitimate.

---

### P-264. Copy Urgensi yang Etis

Kapan pakai:
> Membuat copy urgency yang legitimate

Variabel:
- [PENAWARAN]: penawaran yang tersedia
- [DEADLINE]: batas waktu nyata
- [ALASAN_DEADLINE]: mengapa ada batas waktu

Prompt:
> Buat 5 variasi urgency copy untuk [PENAWARAN] dengan [DEADLINE] dan [ALASAN_DEADLINE]. Setiap copy harus: (1) Menggunakan deadline yang nyata, (2) Menjelaskan alasan deadline, (3) Tidak menggunakan tekanan berlebihan, (4) Memberikan cukup waktu untuk keputusan. Total 60-80 kata per variasi.

Hasil yang diharapkan:
Lima variasi urgency copy yang etis.

---

### P-265. Social Proof yang Spesifik

Kapan pakai:
> Membuat social proof yang detail dan meyakinkan

Variabel:
- [JENIS_SOCIAL_PROOF]: jenis social proof (testimoni, angka, logo, rating)
- [DATA_SPESIFIK]: data spesifik yang tersedia
- [TARGET_AUDIENCE]: siapa target audiens

Prompt:
> Buat 5 variasi social proof menggunakan [JENIS_SOCIAL_PROOF] dengan [DATA_SPESIFIK] untuk [TARGET_AUDIENCE]. Setiap variasi harus: (1) Menggunakan angka atau data konkret, (2) Relevan dengan target audiens, (3) Dapat diverifikasi, (4) Tidak berlebihan. Total 40-60 kata per variasi.

Hasil yang diharapkan:
Lima variasi social proof yang spesifik dan meyakinkan.

---

### P-266. Copy Membangun Otoritas

Kapan pakai:
> Membuat copy yang membangun otoritas

Variabel:
- [NAMA_BRAND]: nama brand atau personal
- [KREDensial]: kredensial atau pencapaian
- [PENGALAMAN]: tahun pengalaman
- [MEDIA_LIPUTAN]: media yang pernah meliput

Prompt:
> Buat 5 variasi authority building copy untuk [NAMA_BRAND] dengan [KREDensial], [PENGALAMAN], dan [MEDIA_LIPUTAN]. Setiap variasi harus: (1) Menonjolkan kredensial secara natural, (2) Tidak arogan, (3) Fokus pada value yang diberikan, (4) Menggunakan bahasa yang percaya diri namun humble. Total 60-80 kata per variasi.

Hasil yang diharapkan:
Lima variasi authority copy yang percaya diri namun humble.

---

### P-267. Copy Pemicu Resiprositas

Kapan pakai:
> Membuat copy yang memanfaatkan prinsip timbal balik

Variabel:
- [FREE_VALUE]: nilai gratis yang diberikan
- [PRODUK]: produk yang dipromosikan
- [TARGET_AUDIENCE]: siapa target audiens

Prompt:
> Buat 5 variasi reciprocity trigger copy yang memberikan [FREE_VALUE] dan mempromosikan [PRODUK] untuk [TARGET_AUDIENCE]. Setiap copy harus: (1) Memberikan nilai nyata di awal, (2) Tidak terasa transaksional, (3) Membangun goodwill, (4) Mengarahkan ke produk secara natural. Total 80-100 kata per variasi.

Hasil yang diharapkan:
Lima variasi reciprocity copy yang memberikan nilai.

---

### P-268. Copy Komitmen dan Konsistensi

Kapan pakai:
> Membuat copy yang memanfaatkan prinsip komitmen dan konsistensi

Variabel:
- [KOMITMEN_KECIL]: komitmen kecil yang diminta di awal
- [KOMITMEN_BESAR]: komitmen besar yang diinginkan
- [PRODUK]: produk yang dipromosikan

Prompt:
> Buat 5 variasi commitment and consistency copy yang memulai dengan [KOMITMEN_KECIL] dan mengarah ke [KOMITMEN_BESAR] untuk [PRODUK]. Setiap copy harus: (1) Memulai dengan komitmen kecil yang mudah disetujui, (2) Membangun momentum, (3) Mengarahkan ke komitmen besar secara natural, (4) Tidak manipulatif. Total 80-100 kata per variasi.

Hasil yang diharapkan:
Lima variasi commitment copy yang natural.

---

### P-269. Copy Pemicu Rasa Suka

Kapan pakai:
> Membuat copy yang memanfaatkan prinsip kesukaan

Variabel:
- [KARAKTERISTIK_TARGET]: karakteristik target audiens
- [KESAMAAN]: kesamaan yang bisa ditonjolkan
- [PRAISE]: pujian yang bisa diberikan
- [FAMILIARITY]: elemen familiaritas

Prompt:
> Buat 5 variasi liking trigger copy untuk [KARAKTERISTIK_TARGET] dengan menonjolkan [KESAMAAN], memberikan [PRAISE], dan membangun [FAMILIARITY]. Setiap copy harus: (1) Menunjukkan kesamaan atau pemahaman, (2) Memberikan pujian yang tulus, (3) Menggunakan elemen familiar, (4) Tidak terasa palsu. Total 60-80 kata per variasi.

Hasil yang diharapkan:
Lima variasi liking copy yang tulus.

---

### P-270. Copy Kerangka Konsistensi

Kapan pakai:
> Membuat copy dengan framework konsistensi

Variabel:
- [PESAN_UTAMA]: pesan utama yang ingin disampaikan
- [CHANNELS]: channel yang digunakan
- [TONE]: tone yang konsisten

Prompt:
> Buat framework copy untuk [PESAN_UTAMA] yang konsisten di [CHANNELS] dengan [TONE]. Struktur: (1) Core message 1 kalimat, (2) Variasi untuk setiap channel dengan mempertahankan inti pesan, (3) Tone guideline 3-5 poin, (4) Do dan don't list. Total 300-400 kata.

Hasil yang diharapkan:
Framework copy yang konsisten lintas channel.

---

### P-271. Panduan Gaya Bahasa Merek

Kapan pakai:
> Membuat guideline brand voice

Variabel:
- [NAMA_BRAND]: nama brand
- [PERSONALITAS]: personalitas brand
- [NILAI]: nilai-nilai brand
- [TARGET_AUDIENCE]: siapa target audiens

Prompt:
> Buat brand voice guideline untuk [NAMA_BRAND] dengan [PERSONALITAS], [NILAI], untuk [TARGET_AUDIENCE]. Struktur: (1) Brand personality 3-5 kata sifat, (2) Tone of voice description 50-80 kata, (3) Do list 5-7 poin, (4) Don't list 5-7 poin, (5) Contoh kalimat yang sesuai dan tidak sesuai, (6) Vocabulary list (kata yang sering digunakan dan dihindari). Total 400-500 kata.

Hasil yang diharapkan:
Brand voice guideline lengkap dengan contoh.

---

### P-272. Copy Daya Tarik Emosi

Kapan pakai:
> Membuat copy yang menyentuh emosi

Variabel:
- [EMOSI_TARGET]: emosi yang ingin disentuh
- [PRODUK]: produk yang dipromosikan
- [SITUASI]: situasi yang memicu emosi
- [TARGET_AUDIENCE]: siapa target audiens

Prompt:
> Buat 5 variasi emotional appeal copy untuk [PRODUK] yang menyentuh [EMOSI_TARGET] melalui [SITUASI] untuk [TARGET_AUDIENCE]. Setiap copy harus: (1) Menggambarkan situasi yang relatable, (2) Menyentuh emosi secara subtil, (3) Menghubungkan emosi dengan produk, (4) Tidak mengeksploitasi emosi. Total 80-100 kata per variasi.

Hasil yang diharapkan:
Lima variasi emotional copy yang subtil.

---

### P-273. Copy Daya Tarik Logis

Kapan pakai:
> Membuat copy yang berfokus pada logika

Variabel:
- [DATA_PENDUKUNG]: data atau statistik
- [ROI]: return on investment
- [PRODUK]: produk yang dipromosikan
- [TARGET_AUDIENCE]: siapa target audiens

Prompt:
> Buat 5 variasi logical appeal copy untuk [PRODUK] dengan [DATA_PENDUKUNG] dan [ROI] untuk [TARGET_AUDIENCE]. Setiap copy harus: (1) Menggunakan data konkret, (2) Menghitung ROI atau benefit terukur, (3) Berfokus pada fakta, (4) Tidak menggunakan bahasa emosional berlebihan. Total 80-100 kata per variasi.

Hasil yang diharapkan:
Lima variasi logical copy yang faktual.

---

### P-274. Kerangka Storytelling

Kapan pakai:
> Membuat framework storytelling untuk copy

Variabel:
- [JENIS_STORY]: jenis cerita (origin, customer, product journey)
- [STRUKTUR]: struktur cerita (hero's journey, three-act, dll)
- [TUJUAN]: tujuan cerita

Prompt:
> Buat storytelling framework dengan [JENIS_STORY] menggunakan [STRUKTUR] untuk [TUJUAN]. Struktur: (1) Opening hook, (2) Rising action, (3) Climax, (4) Falling action, (5) Resolution, (6) Call-to-action. Berikan template untuk setiap bagian dengan panduan 30-50 kata. Total 300-400 kata.

Hasil yang diharapkan:
Storytelling framework dengan template per bagian.

---

### P-275. Sekuens Persuasi

Kapan pakai:
> Membuat sequence persuasi bertahap

Variabel:
- [JUMLAH_STEP]: berapa langkah dalam sequence
- [TUJUAN_AKHIR]: tujuan akhir sequence
- [TARGET_AUDIENCE]: siapa target audiens

Prompt:
> Buat persuasion sequence [JUMLAH_STEP] langkah menuju [TUJUAN_AKHIR] untuk [TARGET_AUDIENCE]. Setiap langkah: (1) Tujuan langkah, (2) Jenis konten yang sesuai, (3) Pesan utama, (4) CTA, (5) Transisi ke langkah berikutnya. Total 400-500 kata.

Hasil yang diharapkan:
Persuasion sequence dengan detail per langkah.

---

### P-276. Matriks Penanganan Keberatan

Kapan pakai:
> Membuat matriks penanganan keberatan

Variabel:
- [PRODUK_LAYANAN]: produk atau layanan
- [OBJEKSI_UMUM]: 5-7 keberatan umum
- [BUKTI_PENANGANAN]: bukti untuk menangani keberatan

Prompt:
> Buat objection handling matrix untuk [PRODUK_LAYANAN] dengan [OBJEKSI_UMUM] dan [BUKTI_PENANGANAN]. Format tabel dengan kolom: keberatan, acknowledgment, reframing, bukti, response 40-60 kata. Total 500-600 kata.

Hasil yang diharapkan:
Matriks objection handling lengkap.

---

### P-277. Kanvas Proposisi Nilai

Kapan pakai:
> Membuat value proposition canvas

Variabel:
- [CUSTOMER_PROFILE]: profil pelanggan
- [VALUE_MAP]: peta nilai produk
- [FIT]: bagaimana produk cocok dengan kebutuhan

Prompt:
> Buat value proposition canvas untuk [CUSTOMER_PROFILE] dengan [VALUE_MAP] dan [FIT]. Struktur: (1) Customer jobs 3-5 poin, (2) Pains 3-5 poin, (3) Gains 3-5 poin, (4) Products/services 3-5 poin, (5) Pain relievers 3-5 poin, (6) Gain creators 3-5 poin, (7) Fit statement 50-80 kata. Total 400-500 kata.

Hasil yang diharapkan:
Value proposition canvas lengkap.

---

### P-278. Copy Peta Perjalanan Pelanggan

Kapan pakai:
> Membuat copy untuk setiap tahap customer journey

Variabel:
- [TAHAP_JOURNEY]: tahap journey (awareness, consideration, decision, retention)
- [TUJUAN_PER_TAHP]: tujuan setiap tahap
- [TOUCHPOINT]: touchpoint di setiap tahap

Prompt:
> Buat customer journey map copy untuk [TAHAP_JOURNEY] dengan [TUJUAN_PER_TAHP] dan [TOUCHPOINT]. Untuk setiap tahap: (1) Tujuan tahap, (2) Pesan utama, (3) Jenis konten, (4) CTA, (5) Metrik keberhasilan. Total 400-500 kata.

Hasil yang diharapkan:
Customer journey map dengan copy per tahap.

---

### P-279. Optimasi Copy Konversi

Kapan pakai:
> Mengoptimalkan copy untuk konversi

Variabel:
- [HALAMAN]: halaman yang dioptimalkan
- [METRIK_SAAT_INI]: metrik saat ini
- [TUJUAN_OPTIMASI]: tujuan optimasi
- [VARIASI]: variasi yang akan di-test

Prompt:
> Buat optimization plan untuk [HALAMAN] dengan [METRIK_SAAT_INI], tujuan [TUJUAN_OPTIMASI], dan [VARIASI]. Struktur: (1) Analisis masalah saat ini, (2) Hipotesis optimasi, (3) Variasi copy yang akan di-test, (4) Metrik keberhasilan, (5) Timeline testing. Total 300-400 kata.

Hasil yang diharapkan:
Optimization plan dengan hipotesis dan variasi.

---

### P-280. Daftar Induk Formula Headline

Kapan pakai:
> Membuat daftar master formula headline

Variabel:
- [JUMLAH_FORMULA]: berapa banyak formula
- [KATEGORI]: kategori formula (how-to, listicle, question, dll)

Prompt:
> Buat master list [JUMLAH_FORMULA] headline formula dalam kategori [KATEGORI]. Untuk setiap formula: (1) Nama formula, (2) Struktur formula, (3) Contoh penggunaan, (4) Kapan menggunakan, (5) Variasi. Total 500-600 kata.

Hasil yang diharapkan:
Master list formula headline lengkap.

---

### P-281. Kamus Power Words

Kapan pakai:
> Membuat kamus power words

Variabel:
- [KATEGORI_EMOSI]: kategori emosi (urgency, trust, excitement, dll)
- [JUMLAH_WORDS]: berapa banyak kata per kategori

Prompt:
> Buat power words dictionary dengan [KATEGORI_EMOSI] dan [JUMLAH_WORDS] kata per kategori. Untuk setiap kata: (1) Kata, (2) Arti atau nuansa, (3) Contoh penggunaan dalam CTA, (4) Kapan menggunakan. Total 500-600 kata.

Hasil yang diharapkan:
Power words dictionary lengkap.

---

### P-282. Checklist Penyuntingan Copy

Kapan pakai:
> Membuat checklist editing copy

Variabel:
- [JENIS_COPY]: jenis copy (landing page, email, ads)
- [STANDAR_QUALITY]: standar kualitas yang harus dipenuhi

Prompt:
> Buat copy editing checklist untuk [JENIS_COPY] dengan [STANDAR_QUALITY]. Checklist harus mencakup: (1) Clarity (5-7 poin), (2) Conciseness (5-7 poin), (3) Persuasion (5-7 poin), (4) Grammar dan mechanics (5-7 poin), (5) Brand consistency (5-7 poin), (6) CTA effectiveness (3-5 poin). Total 300-400 kata.

Hasil yang diharapkan:
Editing checklist lengkap.

---

### P-283. Pengelola Arsip Swipe File

Kapan pakai:
> Membuat sistem organisasi swipe file

Variabel:
- [KATEGORI]: kategori swipe file
- [SUMBER]: sumber swipe file
- [TAGS]: tags untuk organisasi

Prompt:
> Buat copy swipe file organizer dengan [KATEGORI], [SUMBER], dan [TAGS]. Struktur: (1) Kategori utama (headline, CTA, email, dll), (2) Sub-kategori, (3) Tag system, (4) Cara menambahkan swipe baru, (5) Cara menggunakan swipe file. Total 300-400 kata.

Hasil yang diharapkan:
Swipe file organizer system.

---

### P-284. Analisis Performa Copy

Kapan pakai:
> Menganalisis performa copy

Variabel:
- [METRIK_PERFORMA]: metrik performa (CTR, conversion rate, engagement)
- [DATA]: data performa
- [TUJUAN_ANALISIS]: tujuan analisis

Prompt:
> Buat performance analysis untuk copy dengan [METRIK_PERFORMA], [DATA], dan tujuan [TUJUAN_ANALISIS]. Struktur: (1) Overview performa, (2) Highlight kekuatan, (3) Area perbaikan, (4) Rekomendasi optimasi, (5) Action plan. Total 300-400 kata.

Hasil yang diharapkan:
Performance analysis dengan rekomendasi.

---

### P-285. Analisis Copy Kompetitor

Kapan pakai:
> Menganalisis copy kompetitor

Variabel:
- [KOMPETITOR]: nama kompetitor
- [ELEMEN_YANG_DIANALISIS]: elemen yang dianalisis (headline, CTA, messaging)
- [KEKUATAN_KOMPETITOR]: kekuatan copy kompetitor
- [KELEMAHAN_KOMPETITOR]: kelemahan copy kompetitor

Prompt:
> Buat competitor copy analysis untuk [KOMPETITOR] dengan menganalisis [ELEMEN_YANG_DIANALISIS], [KEKUATAN_KOMPETITOR], dan [KELEMAHAN_KOMPETITOR]. Struktur: (1) Overview messaging kompetitor, (2) Analisis kekuatan, (3) Analisis kelemahan, (4) Peluang diferensiasi, (5) Rekomendasi untuk copy kita. Total 400-500 kata.

Hasil yang diharapkan:
Competitor analysis dengan rekomendasi.

---

### P-286. Panduan Lokalisasi Copy

Kapan pakai:
> Membuat panduan lokalisasi copy

Variabel:
- [BAHASA_TARGET]: bahasa target
- [BUDAYA_TARGET]: budaya target
- [ADAPTASI_YANG_DIPERLUKAN]: adaptasi yang diperlukan

Prompt:
> Buat copy localization guide untuk [BAHASA_TARGET] dengan [BUDAYA_TARGET] dan [ADAPTASI_YANG_DIPERLUKAN]. Struktur: (1) Cultural considerations, (2) Language nuances, (3) Do dan don't, (4) Contoh adaptasi, (5) Resources untuk lokalisasi. Total 400-500 kata.

Hasil yang diharapkan:
Localization guide lengkap.

---

### P-287. Pedoman Copy Aksesibilitas

Kapan pakai:
> Membuat panduan copy yang accessible

Variabel:
- [STANDAR_ACCESSIBILITY]: standar accessibility (WCAG, dll)
- [JENIS_KONTEN]: jenis konten (web, email, dokumen)
- [AUDIENCE]: audience dengan kebutuhan khusus

Prompt:
> Buat accessibility copy guidelines untuk [JENIS_KONTEN] dengan [STANDAR_ACCESSIBILITY] untuk [AUDIENCE]. Struktur: (1) Prinsip dasar, (2) Language guidelines, (3) Formatting guidelines, (4) Alt text guidelines, (5) Testing checklist. Total 400-500 kata.

Hasil yang diharapkan:
Accessibility guidelines lengkap.

---

### P-288. Strategi Copy Multibahasa

Kapan pakai:
> Membuat strategi copy multibahasa

Variabel:
- [BAHASA]: bahasa yang digunakan
- [MARKET]: market target
- [KONSISTENSI_BRAND]: bagaimana menjaga konsistensi brand

Prompt:
> Buat multilingual copy strategy untuk [BAHASA] di [MARKET] dengan menjaga [KONSISTENSI_BRAND]. Struktur: (1) Core message dalam bahasa utama, (2) Adaptasi per bahasa, (3) Tone consistency, (4) Translation workflow, (5) Quality assurance. Total 400-500 kata.

Hasil yang diharapkan:
Multilingual strategy lengkap.

---

### P-289. Kerangka Pengujian Copy

Kapan pakai:
> Membuat framework testing copy

Variabel:
- [JENIS_TEST]: jenis test (A/B, multivariate, split)
- [ELEMEN_YANG_DITEST]: elemen yang di-test
- [SAMPLE_SIZE]: ukuran sample
- [DURASI_TEST]: durasi testing

Prompt:
> Buat copy testing framework untuk [JENIS_TEST] dengan [ELEMEN_YANG_DITEST], [SAMPLE_SIZE], dan [DURASI_TEST]. Struktur: (1) Hypothesis formulation, (2) Test design, (3) Variable isolation, (4) Success metrics, (5) Statistical significance, (6) Implementation plan. Total 400-500 kata.

Hasil yang diharapkan:
Testing framework lengkap.

---

### P-290. Kalkulator ROI Copy

Kapan pakai:
> Membuat calculator ROI copy

Variabel:
- [METRIK_INPUT]: metrik input (traffic, conversion rate, AOV)
- [COST]: biaya copy
- [EXPECTED_IMPROVEMENT]: peningkatan yang diharapkan

Prompt:
> Buat copy ROI calculator dengan [METRIK_INPUT], [COST], dan [EXPECTED_IMPROVEMENT]. Struktur: (1) Input variables, (2) Calculation formula, (3) Example calculation, (4) Interpretation guide, (5) Optimization recommendations based on ROI. Total 300-400 kata.

Hasil yang diharapkan:
ROI calculator dengan formula dan contoh.

---

### P-291. Pengembangan Persona Copy

Kapan pakai:
> Membuat persona untuk copy

Variabel:
- [NAMA_PERSONA]: nama persona
- [DEMOGRAFI]: demografi
- [PSIKOGRAFI]: psikografi
- [PAIN_POINTS]: pain points
- [GOALS]: goals

Prompt:
> Buat copy persona [NAMA_PERSONA] dengan [DEMOGRAFI], [PSIKOGRAFI], [PAIN_POINTS], dan [GOALS]. Struktur: (1) Background story 100-150 kata, (2) Demographics detail, (3) Psychographics detail, (4) Pain points 3-5 poin, (5) Goals 3-5 poin, (6) Messaging that resonates, (7) Copy examples untuk persona ini. Total 500-600 kata.

Hasil yang diharapkan:
Copy persona lengkap dengan contoh copy.

---

### P-292. Hierarki Pesan Copy

Kapan pakai:
> Membuat hierarki messaging

Variabel:
- [BRAND_MESSAGE]: pesan utama brand
- [SUPPORTING_MESSAGES]: pesan pendukung
- [EVIDENCE]: bukti pendukung

Prompt:
> Buat copy messaging hierarchy dengan [BRAND_MESSAGE], [SUPPORTING_MESSAGES], dan [EVIDENCE]. Struktur: (1) Primary message (1 kalimat), (2) Secondary messages (3-5 poin), (3) Supporting points (5-7 poin), (4) Evidence untuk setiap level, (5) Application guide untuk berbagai format. Total 400-500 kata.

Hasil yang diharapkan:
Messaging hierarchy lengkap.

---

### P-293. Panduan Variasi Nada Copy

Kapan pakai:
> Membuat panduan variasi tone

Variabel:
- [BASE_TONE]: tone dasar brand
- [SITUASI]: situasi yang membutuhkan tone berbeda
- [VARIASI_TONE]: variasi tone yang diperlukan

Prompt:
> Buat copy tone variation guide dengan [BASE_TONE] untuk [SITUASI] dengan [VARIASI_TONE]. Struktur: (1) Base tone description, (2) Situation-based variations (5-7 situasi), (3) Contoh copy untuk setiap variasi, (4) Do dan don't, (5) Transition guidelines. Total 400-500 kata.

Hasil yang diharapkan:
Tone variation guide lengkap.

---

### P-294. Panduan Memilih Kerangka Copy

Kapan pakai:
> Membuat panduan pemilihan framework copy

Variabel:
- [TUJUAN]: tujuan copy
- [AUDIENCE]: audience
- [CHANNEL]: channel
- [FRAMEWORK_TERSEDIA]: framework yang tersedia

Prompt:
> Buat copy framework selection guide untuk [TUJUAN], [AUDIENCE], [CHANNEL] dengan [FRAMEWORK_TERSEDIA]. Struktur: (1) Framework overview (AIDA, PAS, BAB, dll), (2) Decision matrix berdasarkan tujuan, (3) Decision matrix berdasarkan audience, (4) Decision matrix berdasarkan channel, (5) Contoh penggunaan setiap framework. Total 500-600 kata.

Hasil yang diharapkan:
Framework selection guide lengkap.

---

### P-295. Buku Panduan Optimasi Copy

Kapan pakai:
> Membuat playbook optimasi copy

Variabel:
- [AREA_OPTIMASI]: area yang dioptimasi (headline, CTA, body)
- [TEKNIK_OPTIMASI]: teknik optimasi
- [METRIK]: metrik keberhasilan

Prompt:
> Buat copy optimization playbook untuk [AREA_OPTIMASI] dengan [TEKNIK_OPTIMASI] dan [METRIK]. Struktur: (1) Overview area, (2) 5-7 teknik optimasi, (3) Step-by-step implementation, (4) Testing plan, (5) Success metrics, (6) Case study atau contoh. Total 500-600 kata.

Hasil yang diharapkan:
Optimization playbook lengkap.

---

### P-296. Checklist Jaminan Mutu Copy

Kapan pakai:
> Membuat checklist quality assurance

Variabel:
- [JENIS_COPY]: jenis copy
- [STANDAR_QUALITY]: standar kualitas
- [REVIEW_PROCESS]: proses review

Prompt:
> Buat copy QA checklist untuk [JENIS_COPY] dengan [STANDAR_QUALITY] dan [REVIEW_PROCESS]. Checklist: (1) Pre-writing checklist (5-7 poin), (2) Writing checklist (10-15 poin), (3) Editing checklist (10-15 poin), (4) Final review checklist (5-7 poin), (5) Approval process. Total 400-500 kata.

Hasil yang diharapkan:
QA checklist lengkap.

---

### P-297. Dokumen Serah Terima Copy

Kapan pakai:
> Membuat dokumen handoff copy

Variabel:
- [PROJEK]: projek copy
- [STAKEHOLDERS]: stakeholders
- [DELIVERABLES]: deliverables
- [TIMELINE]: timeline

Prompt:
> Buat copy handoff document untuk [PROJEK] dengan [STAKEHOLDERS], [DELIVERABLES], dan [TIMELINE]. Struktur: (1) Project overview, (2) Scope dan deliverables, (3) Stakeholder roles, (4) Timeline dan milestones, (5) Approval process, (6) Handoff checklist. Total 400-500 kata.

Hasil yang diharapkan:
Handoff document lengkap.

---

### P-298. Panduan Gaya Copy

Kapan pakai:
> Membuat style guide copy

Variabel:
- [BRAND]: nama brand
- [STANDAR]: standar yang diikuti (AP, Chicago, custom)
- [ELEMENT]: elemen yang dicakup (grammar, punctuation, formatting)

Prompt:
> Buat copy style guide untuk [BRAND] dengan [STANDAR] mencakup [ELEMENT]. Struktur: (1) Grammar guidelines, (2) Punctuation rules, (3) Formatting standards, (4) Brand-specific rules, (5) Common mistakes dan corrections, (6) Examples. Total 500-600 kata.

Hasil yang diharapkan:
Style guide lengkap.

---

### P-299. Dasbor Performa Copy

Kapan pakai:
> Membuat dashboard performa copy

Variabel:
- [METRIK]: metrik yang dilacak
- [CHANNELS]: channel yang dilacak
- [FREKUENSI_REPORTING]: frekuensi reporting

Prompt:
> Buat copy performance dashboard dengan [METRIK], [CHANNELS], dan [FREKUENSI_REPORTING]. Struktur: (1) Key metrics overview, (2) Channel breakdown, (3) Trend analysis, (4) Top performing copy, (5) Underperforming copy, (6) Action items. Total 400-500 kata.

Hasil yang diharapkan:
Performance dashboard template.

---

### P-300. Presentasi Portofolio Copy

Kapan pakai:
> Membuat presentasi portfolio copy

Variabel:
- [JUMLAH_PROJEK]: jumlah projek dalam portfolio
- [JENIS_PROJEK]: jenis projek
- [HASIL]: hasil yang dicapai
- [TARGET_AUDIENCE_PRESENTASI]: siapa yang melihat portfolio

Prompt:
> Buat copy portfolio presentation dengan [JUMLAH_PROJEK] projek ([JENIS_PROJEK]), [HASIL], untuk [TARGET_AUDIENCE_PRESENTASI]. Struktur: (1) Introduction dan background, (2) Project overview (untuk setiap projek: brief, approach, result), (3) Case study mendalam untuk 2-3 projek terbaik, (4) Skills dan expertise, (5) Testimonials, (6) Contact information. Total 600-800 kata.

Hasil yang diharapkan:
Portfolio presentation lengkap.

---

## Ringkasan Cepat Bagian 6

| No | Kategori | Prompt |
|----|----------|--------|
| P-261 s/d P-264 | Pengujian | A/B testing headline, CTA, kelangkaan, urgensi |
| P-265 s/d P-269 | Pemicu Psikologis | Social proof, otoritas, resiprositas, komitmen, kesukaan |
| P-270 s/d P-274 | Kerangka | Konsistensi, gaya bahasa merek, emosional, logis, storytelling |
| P-275 s/d P-279 | Strategi | Sekuens persuasi, penanganan keberatan, proposisi nilai, perjalanan pelanggan, optimasi |
| P-280 s/d P-284 | Peralatan | Rumus headline, power words, checklist penyuntingan, swipe file, analisis |
| P-285 s/d P-289 | Terkhusus | Kompetitor, lokalisasi, aksesibilitas, multibahasa, pengujian |
| P-290 s/d P-294 | Tingkat Lanjut | Kalkulator ROI, persona, hierarki pesan, variasi nada, pemilihan kerangka |
| P-295 s/d P-300 | Manajemen | Playbook optimasi, QA, serah terima, panduan gaya bahasa, dasbor, portofolio |

---

## Contoh Output AI untuk Bagian 6

### P-261. A/B Testing Headline Variations (Contoh Output)

**Input yang dipakai:**
Produk: Aplikasi budgeting untuk milenial, target usia 22-35 tahun, goal: signup free trial.

**Output ChatGPT:**
```
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
```

**Output Gemini:**
```
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
```

**Perbandingan:** ChatGPT lebih variatif dalam pendekatan (benefit, pain, curiosity, social proof, command). Gemini lebih singkat dan punchy. Untuk A/B testing, gunakan variasi ChatGPT karena lebih beragam sudut pandangnya.

---

### P-275. Persuasion Sequence (Contoh Output)

**Input yang dipakai:**
Produk: Membership komunitas belajar copywriting, harga Rp 199.000/bulan, benefit: materi mingguan, feedback copy, networking dengan copywriter lain.

**Output ChatGPT:**
```
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
```

**Output Gemini:**
```
Urutan persuasi untuk email sequence:

Email 1 (Problem):
"Kenapa copy Anda nggak convert? Bukan karena salah grammar. Bukan karena salah struktur. Tapi karena Anda nulis sendirian tanpa feedback."

Email 2 (Solution):
"Bayangkan punya 3 copywriter senior yang baca copy Anda setiap minggu dan kasih tau apa yang perlu diperbaiki. Itu yang Anda dapat di komunitas kami."

Email 3 (Social proof):
"Member kami rata-rata naik income 40% dalam 3 bulan. Bukan karena materi aja. Tapi karena feedback yang bikin skill mereka naik cepat."

Email 4 (CTA):
"Rp 199.000 per bulan. Lebih murah dari 1 buku copywriting. Tapi hasilnya? Jauh lebih besar. Join sekarang."
```

**Perbandingan:** ChatGPT lebih cocok untuk landing page dengan struktur AIDA yang jelas. Gemini lebih cocok untuk email sequence dengan storytelling. Pilih sesuai channel yang Anda pakai.


## Latihan Bagian 6

1. Pilih 1 teknik advanced dari bagian ini yang belum Anda kuasai.
2. Terapkan teknik tersebut pada copy yang sudah ada.
3. A/B test versi lama vs versi baru.
4. Ukur hasilnya dan dokumentasikan pembelajaran.
5. Ulangi dengan teknik berbeda selama 4 minggu.

---

## Kesalahan Umum di Bagian 6

**Kesalahan 1: Testing tanpa hipotesis yang jelas**
Solusi: Selalu rumuskan hipotesis sebelum testing dan tentukan metrik keberhasilan.

**Kesalahan 2: Menggunakan psychological triggers secara manipulatif**
Solusi: Gunakan triggers secara etis dan transparan, jangan mengeksploitasi.

**Kesalahan 3: Brand voice yang tidak konsisten**
Solusi: Buat brand voice guideline dan gunakan di semua channel.

**Kesalahan 4: Mengabaikan data dalam optimasi**
Solusi: Selalu gunakan data untuk menginformasikan keputusan optimasi.

**Kesalahan 5: Tidak mendokumentasikan pembelajaran**
Solusi: Catat setiap test, hasil, dan pembelajaran untuk referensi masa depan.
## Panduan Otomasi Konten dengan AI

Bagian ini berisi panduan langkah demi langkah untuk mengotomasi produksi konten menggunakan AI. Setiap workflow bisa diimplementasikan dalam 1-2 jam tanpa coding.

### Workflow 1: Auto-Generate Instagram Caption dari Produk Baru

**Tools:** Make.com + ChatGPT API + Google Sheets + Instagram Business

**Trigger:** Baris baru ditambahkan di Google Sheets "Produk Baru"

**Steps:**
1. Buat Google Sheets dengan kolom: Nama Produk, Harga, Deskripsi Singkat, Target Audience
2. Buat scenario di Make.com dengan trigger "Google Sheets: Watch Rows"
3. Tambahkan module "OpenAI: Create a Completion" dengan prompt:
   ```
   Buatkan 3 variasi caption Instagram untuk produk berikut:
   Nama: {{Nama Produk}}
   Harga: {{Harga}}
   Deskripsi: {{Deskripsi Singkat}}
   Target: {{Target Audience}}
   
   Setiap caption maksimal 150 kata, ada hook di kalimat pertama, ada CTA di akhir.
   ```
4. Tambahkan module "Instagram Business: Create a Photo Post"
5. Aktifkan scenario

**Hasil:** Setiap kali Anda tambah produk baru di Sheets, 3 caption Instagram otomatis tergenerate dan siap posting.

---

### Workflow 2: Auto-Generate Email Newsletter Mingguan

**Tools:** Zapier + ChatGPT API + Mailchimp

**Trigger:** Jadwal mingguan (setiap Senin jam 08:00)

**Steps:**
1. Buat Zap dengan trigger "Schedule by Zapier"
2. Tambahkan action "OpenAI: Completion" dengan prompt:
   ```
   Buatkan email newsletter mingguan untuk [NAMA BRAND] dengan topik [TOPIK MINGGU INI].
   
   Struktur:
   - Subject line yang menarik (max 50 karakter)
   - Pembukaan personal (2-3 kalimat)
   - 3 tips atau insight terkait topik (masing-masing 3-4 kalimat)
   - CTA untuk beli produk atau baca blog
   - Penutup hangat
   
   Tone: friendly, profesional, tidak terlalu formal.
   ```
3. Tambahkan action "Mailchimp: Create Campaign"
4. Aktifkan Zap

**Hasil:** Email newsletter otomatis tergenerate setiap minggu, tinggal review dan kirim.

---

### Workflow 3: Auto-Generate Konten Blog dari Keyword

**Tools:** n8n + OpenAI API + WordPress

**Trigger:** Keyword baru ditambahkan di database atau spreadsheet

**Steps:**
1. Install n8n (self-hosted atau cloud)
2. Buat workflow dengan trigger "Google Sheets: New Row"
3. Tambahkan node "OpenAI: Chat Completion" dengan prompt:
   ```
   Buatkan artikel blog 800-1000 kata untuk keyword: {{keyword}}
   
   Struktur:
   - H1: Judul yang mengandung keyword
   - Pendahuluan (2-3 paragraf, hook di kalimat pertama)
   - 3-4 H2 dengan konten detail
   - Kesimpulan dengan CTA
   
   Tone: edukatif, contoh konkret, bahasa Indonesia natural.
   ```
4. Tambahkan node "WordPress: Create Post"
5. Aktifkan workflow

**Hasil:** Artikel blog otomatis tergenerate dan dipublish ke WordPress.

---

### Workflow 4: Auto-Generate Facebook Ads dari Landing Page

**Tools:** Make.com + ChatGPT API + Facebook Ads Manager

**Trigger:** Landing page baru dipublish

**Steps:**
1. Buat webhook di Make.com yang dipanggil saat landing page publish
2. Tambahkan module "HTTP: Make a Request" untuk scrape konten landing page
3. Tambahkan module "OpenAI: Create a Completion" dengan prompt:
   ```
   Buatkan 5 variasi Facebook Ads primary text dari landing page berikut:
   [tempel konten landing page]
   
   Setiap variasi:
   - Max 125 kata
   - Hook di kalimat pertama
   - 3 benefit utama
   - CTA jelas
   - Tone sesuai brand voice landing page
   ```
4. Tambahkan module "Facebook Ads: Create Ad Creative"
5. Aktifkan scenario

**Hasil:** 5 variasi iklan Facebook otomatis tergenerate dari setiap landing page baru.

---

### Workflow 5: Auto-Generate Konten TikTok dari Blog Post

**Tools:** Zapier + ChatGPT API + TikTok for Business

**Trigger:** Blog post baru dipublish

**Steps:**
1. Buat Zap dengan trigger "WordPress: New Post"
2. Tambahkan action "OpenAI: Completion" dengan prompt:
   ```
   Buatkan 3 script TikTok 30-60 detik dari artikel blog berikut:
   [tempel konten blog]
   
   Setiap script:
   - Hook 3 detik pertama yang kuat
   - 3-5 poin utama dari artikel
   - CTA di akhir
   - Tone: casual, energik, cocok untuk TikTok
   ```
3. Tambahkan action "TikTok for Business: Create Video" (atau simpan ke Google Docs untuk review manual)
4. Aktifkan Zap

**Hasil:** Script TikTok otomatis tergenerate dari setiap blog post baru.

---

### Workflow 6: Auto-Generate Email Follow-Up dari Form Submission

**Tools:** Make.com + ChatGPT API + Email Service (Gmail/SendGrid)

**Trigger:** Form submission baru (Typeform, Google Forms, dll)

**Steps:**
1. Buat scenario dengan trigger "Typeform: New Submission"
2. Tambahkan module "OpenAI: Create a Completion" dengan prompt:
   ```
   Buatkan email follow-up personal dari data form berikut:
   Nama: {{nama}}
   Email: {{email}}
   Kebutuhan: {{kebutuhan}}
   Budget: {{budget}}
   
   Email harus:
   - Personal (sebut nama)
   - Acknowledge kebutuhan spesifik mereka
   - Tawarkan solusi yang relevan
   - CTA untuk booking call atau beli produk
   - Tone: profesional tapi hangat
   ```
3. Tambahkan module "Gmail: Send Email"
4. Aktifkan scenario

**Hasil:** Email follow-up otomatis tergenerate dan terkirim dalam 5 menit setelah form submission.

---

### Workflow 7: Auto-Generate Konten LinkedIn dari Achievement

**Tools:** Zapier + ChatGPT API + LinkedIn

**Trigger:** Baris baru di Google Sheets "Achievements"

**Steps:**
1. Buat Google Sheets dengan kolom: Tanggal, Achievement, Pelajaran, Emosi
2. Buat Zap dengan trigger "Google Sheets: New Row"
3. Tambahkan action "OpenAI: Completion" dengan prompt:
   ```
   Buatkan post LinkedIn dari achievement berikut:
   Achievement: {{Achievement}}
   Pelajaran: {{Pelajaran}}
   Emosi: {{Emosi}}
   
   Post harus:
   - Hook di kalimat pertama yang membuat orang baca "see more"
   - Cerita personal (bukan corporate speak)
   - Pelajaran yang bisa dipetik reader
   - CTA untuk comment atau share pengalaman mereka
   - Max 1300 karakter
   - Tone: authentic, vulnerable, inspiring
   ```
4. Tambahkan action "LinkedIn: Create Post" (atau simpan ke Google Docs)
5. Aktifkan Zap

**Hasil:** Post LinkedIn otomatis tergenerate dari setiap achievement yang Anda catat.

---

### Workflow 8: Auto-Generate Konten Twitter Thread dari Blog Post

**Tools:** n8n + OpenAI API + Twitter API

**Trigger:** Blog post baru dipublish

**Steps:**
1. Buat workflow n8n dengan trigger "WordPress: New Post"
2. Tambahkan node "OpenAI: Chat Completion" dengan prompt:
   ```
   Buatkan Twitter thread 7-10 tweet dari artikel blog berikut:
   [tempel konten blog]
   
   Setiap tweet:
   - Max 280 karakter
   - Hook di tweet pertama
   - 1 ide utama per tweet
   - Flow yang natural antar tweet
   - CTA di tweet terakhir
   - Tone: informative, engaging, tidak terlalu formal
   ```
3. Tambahkan node "Twitter: Create Tweet" (loop untuk setiap tweet)
4. Aktifkan workflow

**Hasil:** Twitter thread otomatis tergenerate dan dipublish dari setiap blog post baru.

---

### Workflow 9: Auto-Generate Konten YouTube Shorts dari Video Panjang

**Tools:** Make.com + ChatGPT API + YouTube API

**Trigger:** Video YouTube baru dipublish

**Steps:**
1. Buat scenario dengan trigger "YouTube: New Video in Playlist"
2. Tambahkan module "HTTP: Make a Request" untuk get video transcript
3. Tambahkan module "OpenAI: Create a Completion" dengan prompt:
   ```
   Buatkan 3 script YouTube Shorts 30-60 detik dari transcript video berikut:
   [tempel transcript]
   
   Setiap script:
   - Hook 3 detik pertama yang kuat
   - 1 ide utama yang bisa dijelaskan dalam 30-60 detik
   - CTA di akhir
   - Tone: energik, cocok untuk Shorts
   ```
4. Simpan ke Google Docs untuk review manual
5. Aktifkan scenario

**Hasil:** 3 script YouTube Shorts otomatis tergenerate dari setiap video panjang baru.

---

### Workflow 10: Auto-Generate Konten Podcast Show Notes

**Tools:** Zapier + ChatGPT API + Podcast Hosting

**Trigger:** Episode podcast baru dipublish

**Steps:**
1. Buat Zap dengan trigger "RSS: New Item in Feed" (podcast RSS)
2. Tambahkan action "OpenAI: Completion" dengan prompt:
   ```
   Buatkan show notes podcast dari transcript berikut:
   [tempel transcript]
   
   Show notes harus berisi:
   - Judul episode yang menarik
   - Ringkasan 3-4 kalimat
   - 5-7 bullet points highlight utama
   - Timestamp untuk tiap segmen
   - Link dan resource yang disebutkan
   - CTA untuk subscribe atau review
   ```
3. Tambahkan action "Podcast Hosting: Update Episode" (atau simpan ke Google Docs)
4. Aktifkan Zap

**Hasil:** Show notes podcast otomatis tergenerate dari setiap episode baru.

---

## Studi Kasus Otomasi Konten

### Studi Kasus 1: Kopi Nusantara (UMKM Kopi)

**Tantangan:** Pemilik Kopi Nusantara, Pak Andi, harus posting 3x per minggu di Instagram tapi kewalahan bikin caption.

**Solusi:** Implementasi Workflow 1 (Auto-Generate Instagram Caption)

**Hasil:**
- Waktu bikin caption: dari 2 jam per minggu jadi 15 menit (cuma review dan edit)
- Konsistensi posting: dari 2x per minggu jadi 4x per minggu
- Engagement rate: naik 35% dalam 2 bulan

**Setup time:** 1.5 jam
**Biaya:** Make.com free tier + ChatGPT API Rp 50.000/bulan

---

### Studi Kasus 2: Batik Serasi (Fashion UMKM)

**Tantangan:** Tim marketing Batik Serasi harus bikin email newsletter mingguan tapi sering telat kirim.

**Solusi:** Implementasi Workflow 2 (Auto-Generate Email Newsletter)

**Hasil:**
- Konsistensi kirim: dari 70% jadi 100% (tidak pernah telat lagi)
- Open rate: naik 20% karena subject line lebih variatif
- Click rate: naik 15% karena konten lebih relevan

**Setup time:** 2 jam
**Biaya:** Zapier Starter $19/bulan + ChatGPT API Rp 50.000/bulan

---

### Studi Kasus 3: TechSolusi (SaaS B2B)

**Tantangan:** TechSolusi harus publish 2 blog post per minggu untuk SEO tapi tim content kecil.

**Solusi:** Implementasi Workflow 3 (Auto-Generate Konten Blog)

**Hasil:**
- Output blog: dari 2 per minggu jadi 4 per minggu
- Waktu writing: dari 8 jam per post jadi 2 jam per post (cuma editing)
- Organic traffic: naik 60% dalam 3 bulan

**Setup time:** 3 jam (termasuk custom prompt engineering)
**Biaya:** n8n cloud $20/bulan + OpenAI API Rp 150.000/bulan

---

### Studi Kasus 4: Fashionista Shop (E-commerce Fashion)

**Tantangan:** Fashionista Shop dapat 50+ form submission per hari tapi follow-up email manual dan lambat.

**Solusi:** Implementasi Workflow 6 (Auto-Generate Email Follow-Up)

**Hasil:**
- Response time: dari 4 jam jadi 5 menit
- Conversion rate: naik 25% karena follow-up lebih cepat dan personal
- Customer satisfaction: rating 4.8/5 (dari 4.2/5)

**Setup time:** 2 jam
**Biaya:** Make.com Pro $9/bulan + ChatGPT API Rp 100.000/bulan

---

## Troubleshooting Integrasi AI

### Masalah 1: Output AI Tidak Konsisten

**Gejala:** Kadang bagus, kadang tidak relevan.

**Solusi:**
1. Tambahkan contoh output yang diinginkan di prompt (few-shot prompting)
2. Tambahkan batasan lebih spesifik (panjang, tone, struktur)
3. Gunakan temperature 0.7 untuk kreatif, 0.3 untuk konsisten
4. Test dengan 10 input berbeda sebelum deploy

---

### Masalah 2: API Rate Limit

**Gejala:** Error 429 Too Many Requests.

**Solusi:**
1. Tambahkan delay antar request (1-2 detik)
2. Upgrade plan API (ChatGPT API free tier: 3 RPM, paid: 60+ RPM)
3. Implementasi retry logic dengan exponential backoff
4. Batch processing di jam off-peak

---

### Masalah 3: Biaya API Membengkak

**Gejala:** Tagihan API lebih tinggi dari expected.

**Solusi:**
1. Monitor usage di dashboard OpenAI/Anthropic
2. Set hard limit di API settings
3. Gunakan model yang lebih murah untuk task sederhana (GPT-3.5 untuk caption, GPT-4 untuk artikel panjang)
4. Cache output yang sering dipakai

---

### Masalah 4: Integrasi Gagal di Tengah Jalan

**Gejala:** Workflow berhenti di step tertentu.

**Solusi:**
1. Check error log di Make.com/Zapier/n8n
2. Test setiap module secara individual
3. Pastikan API key masih valid (tidak expired)
4. Tambahkan error handling module (continue on error)

---

### Masalah 5: Output AI Terlalu Generik

**Gejala:** Hasil terlihat seperti template, tidak personal.

**Solusi:**
1. Tambahkan konteks spesifik di prompt (nama brand, target audience, tone)
2. Gunakan variable dari trigger (nama customer, produk yang dibeli)
3. Tambahkan contoh output yang diinginkan (few-shot)
4. Post-processing: edit manual 10-20% sebelum publish

---

## Custom Integration dengan Kode

Untuk kebutuhan yang lebih kompleks, Anda bisa pakai kode custom. Berikut template untuk 3 bahasa pemrograman populer.

### Node.js: Generate Caption dengan OpenAI API

```javascript
const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function generateCaption(product) {
  const completion = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [
      {
        role: 'system',
        content: 'Anda adalah copywriter Instagram profesional untuk UMKM Indonesia.',
      },
      {
        role: 'user',
        content: `Buatkan 3 caption Instagram untuk produk: ${product.name}, harga ${product.price}, target ${product.target}`,
      },
    ],
    temperature: 0.7,
    max_tokens: 500,
  });

  return completion.choices[0].message.content;
}

// Usage
generateCaption({
  name: 'Kopi Gayo Organik',
  price: 'Rp 85.000',
  target: 'pecinta kopi usia 25-40',
}).then(console.log);
```

### Python: Generate Email dengan OpenAI API

```python
import openai
import os

openai.api_key = os.getenv('OPENAI_API_KEY')

def generate_email(customer_name, product_name, purchase_date):
    response = openai.ChatCompletion.create(
        model='gpt-4',
        messages=[
            {'role': 'system', 'content': 'Anda adalah customer service profesional untuk e-commerce Indonesia.'},
            {'role': 'user', 'content': f'Buatkan email ucapan terima kasih untuk {customer_name} yang membeli {product_name} pada {purchase_date}. Tone: hangat, profesional, max 150 kata.'}
        ],
        temperature=0.7,
        max_tokens=300,
    )
    return response.choices[0].message.content

# Usage
email = generate_email('Budi Santoso', 'Kopi Gayo 250g', '22 Oktober 2026')
print(email)
```

### PHP: Generate Konten Blog dengan OpenAI API

```php
<?php
require 'vendor/autoload.php';

use OpenAI\Client;

$client = OpenAI::client($_ENV['OPENAI_API_KEY']);

function generateBlogPost($keyword, $client) {
    $result = $client->chat()->create([
        'model' => 'gpt-4',
        'messages' => [
            ['role' => 'system', 'content' => 'Anda adalah content writer SEO profesional untuk blog Indonesia.'],
            ['role' => 'user', 'content' => "Buatkan artikel blog 800 kata untuk keyword: {$keyword}. Struktur: H1, pendahuluan, 3-4 H2, kesimpulan. Tone: edukatif, contoh konkret."],
        ],
        'temperature' => 0.7,
        'max_tokens' => 1500,
    ]);

    return $result->choices[0]->message->content;
}

// Usage
$post = generateBlogPost('cara buat kopi manual brew', $client);
echo $post;
?>
```

---

## Checklist Implementasi Otomasi

Gunakan checklist ini sebelum deploy workflow otomasi:

- [ ] Prompt sudah ditest dengan 10 input berbeda
- [ ] Output AI sudah di-review dan sesuai standar kualitas
- [ ] API key sudah disimpan di environment variable (bukan hardcode)
- [ ] Rate limit sudah dikonfigurasi
- [ ] Error handling sudah ditambahkan
- [ ] Monitoring sudah disetup (alert jika workflow gagal)
- [ ] Backup manual process masih ada (jika AI gagal)
- [ ] Biaya sudah dihitung dan sesuai budget
- [ ] Tim sudah dilatih cara pakai workflow
- [ ] Dokumentasi workflow sudah dibuat

---

## Lampiran

### Lampiran A: Cara Memakai Workbook Excel Pendamping

Workbook Excel yang menyertai buku ini berisi 4 sheet yang dirancang untuk membantu Anda mengimplementasikan 300 prompt secara praktis.

**Sheet 1: Perpustakaan Prompt**

Sheet ini berisi database lengkap 300 prompt dengan kolom:
- Kode (P-001 hingga P-300)
- Bab (Bagian 1-6)
- Judul Prompt
- Kapan Pakai
- Isi Prompt lengkap
- Variabel yang dibutuhkan
- Hasil yang Diharapkan

Cara menggunakan:
1. Filter berdasarkan bab atau kategori yang Anda butuhkan
2. Copy prompt yang diinginkan
3. Ganti variabel dalam kurung siku [...] dengan konteks bisnis Anda
4. Paste ke AI tool pilihan Anda (ChatGPT, Claude, Gemini, dll)
5. Perbaiki hasil sesuai kebutuhan

**Sheet 2: Indeks Bab**

Sheet ini berisi ringkasan per bab dengan:
- Nama bab
- Rentang nomor prompt
- Jumlah prompt
- Topik utama yang dicakup
- Kapan menggunakan bab ini

Gunakan sheet ini untuk navigasi cepat ke bab yang relevan dengan kebutuhan Anda.

**Sheet 3: Variabel**

Sheet ini berisi glosarium variabel yang digunakan di seluruh buku:
- Nama variabel
- Deskripsi
- Contoh nilai
- Tips pengisian

Gunakan sheet ini sebagai referensi saat mengisi variabel dalam prompt.

**Sheet 4: Pelacak Implementasi**

Sheet ini membantu Anda melacak penggunaan prompt:
- Tanggal penggunaan
- Kode prompt
- Variabel yang digunakan
- Hasil yang didapat
- Rating efektivitas (1-5)
- Catatan perbaikan

Gunakan sheet ini untuk membangun database prompt yang paling efektif untuk bisnis Anda.

---

### Lampiran B: Templat Prompt Kosong

Gunakan templat ini untuk memodifikasi atau membuat prompt baru sesuai kebutuhan spesifik Anda.

**Templat Dasar:**

```
Kapan pakai:
> [Deskripsi situasi ketika prompt ini berguna]

Variabel:
- [VARIABEL_1]: [penjelasan]
- [VARIABEL_2]: [penjelasan]

Prompt:
> [Instruksi lengkap untuk AI]

Hasil yang diharapkan:
[Deskripsi output yang akan dihasilkan]
```

**Templat dengan Struktur:**

```
Kapan pakai:
> [Situasi]

Variabel:
- [VARIABEL_1]: [penjelasan]
- [VARIABEL_2]: [penjelasan]
- [VARIABEL_3]: [penjelasan]

Prompt:
> Buat [JENIS_KONTEN] untuk [PRODUK/LAYANAN] dengan [FITUR/MANFAAT] untuk [TARGET_AUDIENCE]. Struktur: (1) [Bagian 1], (2) [Bagian 2], (3) [Bagian 3]. Total [JUMLAH] kata. Gunakan [GAYA_BAHASA].

Hasil yang diharapkan:
[Output spesifik]
```

**Templat Variasi:**

```
Kapan pakai:
> [Situasi]

Variabel:
- [VARIABEL_1]: [penjelasan]

Prompt:
> Buat [JUMLAH] variasi [JENIS_KONTEN] untuk [TUJUAN]. Setiap variasi harus: (1) [Kriteria 1], (2) [Kriteria 2], (3) [Kriteria 3]. Total [PANJANG] per variasi.

Hasil yang diharapkan:
[JUMLAH] variasi yang memenuhi kriteria
```

---

### Lampiran C: Daftar Variabel Baku

Berikut variabel yang paling sering dipakai di seluruh buku beserta arti dan contoh pengisiannya. Setiap prompt juga mencantumkan variabelnya sendiri di bagian Variabel, jadi daftar ini menjadi panduan baku ketika satu variabel muncul di banyak prompt. Variabel yang tidak ada di daftar ini bersifat kontekstual: artinya sudah dijelaskan pada prompt tempat variabel itu dipakai.

| Variabel | Arti | Contoh |
|---|---|---|
| [TARGET_AUDIENCE] | Deskripsi pembeli yang dituju: siapa, di mana, kondisinya | Ibu usia 28-40 di Bekasi yang belanja bulanan lewat WhatsApp |
| [PRODUK] | Produk yang sedang dipromosikan | Keripik singkong balado toples 250 gram |
| [TOPIK] | Pokok bahasan konten yang akan dibuat | Cara menyimpan keripik agar renyah seminggu |
| [CTA] | Ajakan bertindak yang ingin pembaca lakukan | Pesan sekarang lewat link bio |
| [DURASI] | Lama waktu dalam naskah, acara, atau penawaran | 30 detik |
| [NAMA_PELANGGAN] | Nama pelanggan yang menerima pesan | Bapak Hartono |
| [NAMA_PRODUK] | Nama resmi produk yang dibahas | Kopi Gayo Organik 250g |
| [TUJUAN] | Sasaran yang ingin dicapai dari konten atau kampanye | Menambah 50 pesanan baru dalam sebulan |
| [PRODUK_LAYANAN] | Produk atau jasa yang menjadi pembahasan | Layanan cuci setrika kilat 3 jam |
| [PLATFORM] | Media sosial atau kanal tempat konten tayang | Instagram, TikTok |
| [TOPIK_VIDEO] | Pokok bahasan video yang akan direkam | Tur dapur produksi keripik |
| [NAMA_PENGGUNA] | Nama pengguna aplikasi atau layanan yang menerima pesan | Sari Dewi |
| [SOLUSI] | Jawaban atau produk yang menyelesaikan masalah | Paket cuci setrika same-day |
| [NAMA_PODCAST] | Judul acara podcast yang dibuat | Warung Kopi Santai |
| [NAMA_BRAND] | Nama merek yang dipromosikan | Keripik Bu Ratna |
| [CTA_UTAMA] | Ajakan bertindak utama dalam satu materi | Checkout sekarang |
| [MANFAAT] | Keuntungan yang didapat pembeli | Hemat 3 jam per hari tanpa harus memasak |
| [HARGA] | Harga jual yang disebut dalam materi | Rp 85.000 |
| [BATAS_WAKTU] | Tenggat penawaran atau aksi berakhir | 23 Oktober jam 23.59 |
| [NAMA_PERUSAHAAN] | Nama badan usaha yang menerbitkan materi | Katering Sehat Nusantara |
| [INSENTIF] | Imbalan yang diberikan agar orang beraksi | Potongan Rp 10.000 |
| [MANFAAT_UTAMA] | Keuntungan terbesar yang ditekankan | Makan sehat tanpa ribet masak |
| [FITUR_UTAMA] | Fitur paling penting dari produk | Pengiriman gratis area Bandung |
| [BRAND] | Merek yang menjadi identitas materi | Keripik Bu Ratna |
| [NAMA_FITUR] | Nama fitur yang dijelaskan | Pelacak pesanan waktu nyata |
| [MASALAH] | Keluhan atau kesulitan yang dihadapi audiens | Bingung menyiapkan menu sehat tiap hari |
| [PENAWARAN] | Paket atau promo yang ditawarkan | Bundling 3 rasa hemat |
| [MASALAH_YANG_DISELESAIKAN] | Masalah spesifik yang dijawab produk | Pakaian kerja kembali dalam 3 jam |
| [JENIS_KONTEN] | Format konten yang dibuat | Carousel, reel, story |
| [INDUSTRI] | Bidang usaha yang menjadi konteks pembahasan | Kuliner rumahan |
| [TONE] | Nada bahasa yang dipakai | Hangat dan membumi |
| [BENEFIT] | Keuntungan yang disorot pada materi | Lebih awet hingga 2 minggu |
| [CTA_SEKUNDER] | Ajakan bertindak cadangan bagi yang belum siap beli | Simpan postingan ini dulu |
| [KATA_KUNCI] | Kata kunci pencarian yang ditarget | keripik balado bandung |
| [HOOK] | Kalimat pembuka yang menahan perhatian | Keripik enak belum tentu mahal |
| [URGENCY] | Alasan mengapa harus bertindak sekarang | Stok batch hari ini tersisa 40 toples |
| [FORMAT] | Bentuk keluaran yang diminta dari AI | Daftar bernomor, maksimal 100 kata |
| [TOPIK_EPISODE] | Pokok bahasan satu episode podcast | Cerita di balik resep balado |
| [RATING] | Nilai bintang atau penilaian pelanggan | 4,8 dari 5 |
| [DEADLINE] | Batas waktu penyelesaian | Jumat, 25 Oktober |
| [KEUNGGULAN] | Hal yang membuat produk unggul | Singkong dipilih langsung dari petani |
| [DISKON] | Potongan harga yang diberikan | 20 persen |
| [KOMPETITOR] | Pesaing yang datanya dibandingkan | Tiga toko keripik teratas di Shopee |
| [PRODUK_YANG_DIBELI] | Produk yang baru dibeli pelanggan | Kopi Gayo 250g |
| [DURASI_PENGGUNAAN] | Lama pemakaian produk oleh pelanggan | 3 bulan |
| [HASIL_KONKRET] | Hasil terukur yang dicapai | Omzet naik 35 persen |
| [JENIS] | Kategori atau tipe hal yang dibahas | Bundling, gratis ongkir |
| [INSENTIF_KEMBALI] | Imbalan agar pelanggan datang kembali | Voucher Rp 15.000 |
| [STATISTIK] | Angka data yang dipakai sebagai bukti | 12.000 toples terjual tahun lalu |
| [PENCAPAIAN] | Prestasi yang dirayakan | Pelanggan ke-1000 |
| [JUMLAH_PERTANYAAN] | Banyaknya pertanyaan yang diminta | 10 pertanyaan |
| [KATEGORI] | Kelompok produk atau konten | Camilan pedas |
| [TAGLINE] | Kalimat singkat identitas merek | Renyahnya sampai ke hati |
| [VISUAL] | Unsur gambar atau video yang disebut | Foto dari dekat irisan keripik |
| [HASIL] | Keluaran yang diharapkan dari materi | 3 opsi caption siap pakai |
| [TIMESTAMP] | Penanda waktu pada video atau audio | 00:00-00:15 |
| [TARGET_PASAR] | Segmen pasar yang dituju | Pecinta camilan pedas di Jawa Barat |
| [MISI] | Pernyataan tujuan merek | Menaikkan camilan lokal ke panggung nasional |
| [MASALAH_AWAL] | Kondisi buruk sebelum memakai produk | Pesanan kacau masuk lewat DM |
| [FITUR_BARU] | Fitur yang baru diluncurkan | Pembayaran QRIS |
| [MOMEN] | Peristiwa atau suasana yang dipakai | Momentum Lebaran |
| [SITUASI] | Kondisi yang menjadi latar cerita | Dapur penuh pesanan akhir bulan |
| [KONTEN_UTAMA] | Isi inti yang menjadi bahan konten | Video proses penggorengan |
| [OFFER] | Paket penawaran yang diluncurkan | Beli 2 gratis 1 akhir pekan |
| [JUDUL_VIDEO] | Judul video yang akan dibuat | 5 Rahasia Keripik Tahan Sebulan |
| [FREKUENSI] | Seberapa sering sesuatu dilakukan | 4 kali seminggu |
| [TOPIK_EDUKASI] | Bahasan edukasi untuk audiens | Beda balado asli dan taburan cabai bubuk |
| [VARIASI] | Banyaknya versi yang diminta | 5 variasi |
| [VALUE_PROPOSITION] | Janji nilai utama merek kepada pelanggan | Camilan enak dengan harga jujur |
| [TEMA_SERI] | Tema rangkaian konten berkelanjutan | Sehari bersama dapur kami |
| [JUMLAH_EPISODE] | Banyaknya episode yang direncanakan | 8 episode |
| [SUMBER] | Asal data atau kutipan | Laporan penjualan Oktober |
| [LOKASI] | Tempat terjadinya peristiwa atau layanan | Bandung dan sekitarnya |
| [CARA_KERJA] | Penjelasan mekanisme produk | Pesan, kami goreng, kirim di hari yang sama |
| [METODE_PEMBAYARAN] | Cara bayar yang diterima | QRIS, transfer, COD |
| [KONTAK_SUPPORT] | Kanal layanan bantuan pelanggan | Nomor WhatsApp bisnis yang tertera di katalog |
| [NAMA_PAKET] | Nama paket yang dijual | Paket Hemat Keluarga |
| [JUMLAH_TESTIMONI] | Banyaknya ulasan yang dipakai | 5 testimoni |
| [TAMU] | Narasumber undangan acara | Pemilik kedai kopi lokal |
| [FITUR_UNIK] | Fitur yang tidak dimiliki pesaing | Label tanggal goreng di tiap toples |
| [TARGET_USER] | Pengguna yang dituju suatu fitur | Pemilik toko online pemula |
| [HARGA_NORMAL] | Harga sebelum diskon | Rp 95.000 |
| [ROI] | Hasil atas biaya yang dikeluarkan | 3 kali lipat dari biaya iklan |
| [TANGGAL] | Tanggal peristiwa atau batas | 23 Oktober 2026 |
| [RINGKASAN] | Ikhtisar isi yang dipakai sebagai bahan | Rangkuman chat pelanggan seminggu |
| [LINK_RELEVAN] | Tautan terkait yang disertakan | Tautan produk di bio |
| [JUMLAH_TIPS] | Banyaknya tips yang diminta | 7 tips |
| [NILAI_BRAND] | Nilai yang dipegang merek | Jujur pada takaran dan harga |
| [PERIODE] | Rentang waktu pembahasan | 1-31 Oktober |
| [CUSTOMER_PROFILE] | Gambaran pelanggan ideal | Wanita 25-35 tahun, aktif di Instagram, suka camilan pedas |
| [HEADLINE] | Judul besar yang menarik perhatian | Keripik Se-Toples, Bahagia Se-Perut |

Cara memakai daftar ini: cari variabel yang muncul di prompt Anda, baca kolom Arti untuk memastikan maknanya, lalu isi dengan data usaha Anda sendiri mengikuti pola kolom Contoh. Semakin spesifik isi variabel Anda, semakin tajam hasil AI.

---

### Lampiran D: Checklist Mutu Copywriting

Gunakan checklist ini untuk memastikan copy Anda memenuhi standar profesional sebelum dipublikasikan.

**Clarity (Kejelasan):**
- [ ] Headline langsung menjelaskan manfaat atau topik
- [ ] Subheadline melengkapi headline dengan detail
- [ ] Setiap paragraf memiliki satu ide utama
- [ ] Kalimat aktif lebih dominan dari kalimat pasif
- [ ] Tidak ada jargon yang tidak dijelaskan
- [ ] Target audiens dapat memahami dalam pembacaan pertama
- [ ] CTA jelas dan tidak ambigu

**Conciseness (Keringkasan):**
- [ ] Tidak ada kata atau kalimat yang bisa dihapus tanpa kehilangan makna
- [ ] Setiap kalimat memberikan nilai
- [ ] Tidak ada pengulangan ide yang sama
- [ ] Paragraf tidak lebih dari 4-5 kalimat
- [ ] Bullet point digunakan untuk list 3 item atau lebih
- [ ] White space cukup untuk readability

**Persuasion (Persuasi):**
- [ ] Copy berfokus pada manfaat, bukan fitur
- [ ] Ada social proof atau bukti konkret
- [ ] Ada urgency atau scarcity yang legitimate
- [ ] Ada risk reversal atau jaminan
- [ ] Emotional appeal sesuai dengan target audiens
- [ ] Logical appeal didukung data
- [ ] CTA menggunakan kata kerja imperatif

**Grammar & Mechanics:**
- [ ] Tidak ada typo
- [ ] Ejaan sesuai dengan bahasa target (Indonesia/Inggris)
- [ ] Tanda baca konsisten
- [ ] Kapitalisasi konsisten
- [ ] Angka dan satuan konsisten
- [ ] Tidak ada em-dash atau en-dash (gunakan tanda baca lain)
- [ ] Tidak ada asterisk markers di luar code block
- [ ] Tidak ada emoji kecuali disengaja untuk platform tertentu

**Brand Consistency:**
- [ ] Tone sesuai dengan brand voice guideline
- [ ] Vocabulary sesuai dengan brand dictionary
- [ ] Messaging konsisten dengan positioning
- [ ] Visual language (jika ada) sesuai brand
- [ ] Nama produk/layanan ditulis dengan benar
- [ ] Tagline atau slogan digunakan dengan tepat

**Platform Optimization:**
- [ ] Panjang sesuai dengan platform (Instagram, TikTok, dll)
- [ ] Format sesuai dengan platform (carousel, reel, thread, dll)
- [ ] Hashtag relevan dan tidak berlebihan
- [ ] Link atau CTA sesuai dengan platform
- [ ] Visual atau gambar sesuai dengan copy
- [ ] Mobile-friendly (jika applicable)

**Conversion Optimization:**
- [ ] Headline menangkap perhatian dalam 3 detik
- [ ] Hook di paragraf pertama memancing pembacaan lebih lanjut
- [ ] Body copy membangun desire
- [ ] CTA menonjol dan mudah ditemukan
- [ ] Tidak ada friksi dalam proses konversi
- [ ] Trust elements (testimonial, rating, garansi) ada
- [ ] Urgency elements (jika ada) legitimate

**Testing Readiness:**
- [ ] Hipotesis testing dirumuskan
- [ ] Metrik keberhasilan didefinisikan
- [ ] Variasi yang akan di-test sudah disiapkan
- [ ] Sample size cukup untuk signifikansi statistik
- [ ] Durasi testing ditentukan
- [ ] Tracking mechanism sudah disiapkan

**Final Review:**
- [ ] Copy dibaca ulang minimal 2 kali
- [ ] Copy dibaca dengan suara keras untuk check flow
- [ ] Copy di-review oleh minimal 1 orang lain
- [ ] Copy di-test di platform yang sebenarnya (jika memungkinkan)
- [ ] Semua checklist di atas sudah centang

---

### Lampiran E: Referensi Framework Copywriting

Berikut adalah framework copywriting yang paling efektif dan kapan menggunakannya.

**AIDA (Attention-Interest-Desire-Action)**

Kapan gunakan:
- Konten marketing umum
- Landing page
- Email marketing
- Iklan

Struktur:
1. Attention: Hook yang menangkap perhatian
2. Interest: Informasi yang membangun minat
3. Desire: Benefit yang menciptakan keinginan
4. Action: CTA yang mendorong tindakan

Contoh:
"Bayangkan bisa membuat konten marketing profesional dalam hitungan menit (Attention). Dengan 300 prompt siap pakai, Anda tidak perlu lagi staring at blank screen (Interest). Setiap prompt sudah diuji untuk menghasilkan copy yang converting (Desire). Download ebook sekarang dan mulai buat copy yang menjual hari ini juga (Action)."

**PAS (Problem-Agitate-Solve)**

Kapan gunakan:
- Sales page
- Email promosi
- Iklan yang menargetkan pain point

Struktur:
1. Problem: Identifikasi masalah yang dihadapi audiens
2. Agitate: Perbesar masalah dan dampaknya
3. Solve: Tawarkan solusi

Contoh:
"Pernahkah Anda menghabiskan berjam-jam untuk membuat caption Instagram yang tidak mendapatkan engagement? (Problem) Setiap hari Anda melihat kompetitor mendapatkan likes dan comments sementara postingan Anda diabaikan. Ini bukan hanya masalah ego, ini masalah bisnis. Setiap post yang tidak converting adalah uang yang terbuang (Agitate). Dengan 300 prompt copywriting yang sudah terbukti efektif, Anda bisa membuat caption yang engaging dalam 5 menit (Solve)."

**BAB (Before-After-Bridge)**

Kapan gunakan:
- Testimonial
- Case study
- Storytelling
- Konten yang menunjukkan transformasi

Struktur:
1. Before: Gambarkan situasi sebelum menggunakan produk
2. After: Gambarkan situasi setelah menggunakan produk
3. Bridge: Jelaskan bagaimana produk membawa dari before ke after

Contoh:
"Sebelum menggunakan prompt library ini, saya menghabiskan 2 jam untuk membuat satu caption Instagram. Hasilnya? Engagement rate hanya 2% (Before). Sekarang, saya bisa membuat 10 caption berkualitas dalam 30 menit. Engagement rate naik menjadi 8% (After). Rahasianya? 300 prompt yang sudah diuji dan terbukti converting. Anda juga bisa mendapatkan hasil yang sama (Bridge)."

**4U (Urgent-Unique-Ultra-specific-Useful)**

Kapan gunakan:
- Headline
- Subject line email
- Judul konten

Struktur:
1. Urgent: Menciptakan rasa urgensi
2. Unique: Sudut pandang yang tidak umum
3. Ultra-specific: Menggunakan angka atau data konkret
4. Useful: Memberikan nilai yang jelas

Contoh:
"Download 300 Prompt Copywriting dalam 10 Menit dan Tingkatkan Conversion Rate 47% Hari Ini"
- Urgent: "Hari Ini"
- Unique: "300 Prompt Copywriting"
- Ultra-specific: "10 Menit", "47%"
- Useful: "Tingkatkan Conversion Rate"

**FAB (Features-Advantages-Benefits)**

Kapan gunakan:
- Product description
- Sales pitch
- Presentasi produk

Struktur:
1. Features: Apa yang dimiliki produk
2. Advantages: Apa yang membuat produk lebih baik
3. Benefits: Apa yang didapat pengguna

Contoh:
"Fitur: 300 prompt copywriting dalam format PDF dan Excel (Features). Keuntungan: Terorganisir dalam 6 bab berdasarkan kategori, mudah dinavigasi, dan bisa di-filter (Advantages). Manfaat: Anda bisa menemukan prompt yang tepat dalam 30 detik dan langsung membuat copy yang converting tanpa staring at blank screen (Benefits)."

**QUEST (Qualify-Understand-Educate-Stimulate-Transition)**

Kapan gunakan:
- Sales page panjang
- Webinar script
- Video sales letter

Struktur:
1. Qualify: Identifikasi apakah audiens adalah target yang tepat
2. Understand: Tunjukkan pemahaman atas masalah mereka
3. Educate: Berikan informasi atau insight baru
4. Stimulate: Bangun desire untuk solusi
5. Transition: Arahkan ke CTA

**PASP (Problem-Agitate-Solution-Proof)**

Kapan gunakan:
- Sales page
- Landing page
- Email sequence

Struktur:
1. Problem: Identifikasi masalah
2. Agitate: Perbesar masalah
3. Solution: Tawarkan solusi
4. Proof: Berikan bukti solusi bekerja

**STAR-Chain (Story-Teach-Apply-Results-Call to Action)**

Kapan gunakan:
- Konten edukasi
- Blog post
- Email newsletter

Struktur:
1. Story: Ceritakan kisah yang relevan
2. Teach: Ajarkan pelajaran dari kisah
3. Apply: Jelaskan cara menerapkan pelajaran
4. Results: Tunjukkan hasil yang bisa didapat
5. Call to Action: Arahkan ke langkah selanjutnya

**4P (Picture-Promise-Prove-Push)**

Kapan gunakan:
- Sales copy
- Landing page
- Email promosi

Struktur:
1. Picture: Gambarkan situasi ideal
2. Promise: Janjikan bahwa audiens bisa mencapainya
3. Prove: Berikan bukti bahwa janji bisa dipenuhi
4. Push: Dorong untuk mengambil tindakan

**Slippery Slide**

Kapan gunakan:
- Konten panjang
- Artikel blog
- Sales letter

Prinsip:
Setiap kalimat harus membuat pembaca ingin membaca kalimat berikutnya. Gunakan:
- Hook yang kuat di awal
- Kalimat pendek untuk momentum
- Transition yang smooth antar paragraf
- Open loop yang membuat penasaran
- Cliffhanger di akhir section

**Inverted Pyramid**

Kapan gunakan:
- News writing
- Press release
- Konten yang butuh informasi penting di awal

Struktur:
1. Most important information di awal
2. Supporting details di tengah
3. Background information di akhir

Prinsip:
Jika pembaca hanya membaca paragraf pertama, mereka sudah mendapat informasi paling penting.

**Choosing the Right Framework:**

Untuk memilih framework yang tepat, pertimbangkan:
1. Tujuan konten (awareness, consideration, conversion)
2. Target audiens (cold, warm, hot)
3. Platform (social media, email, landing page)
4. Length (short, medium, long)
5. Tone (educational, promotional, storytelling)

Tidak ada framework yang sempurna untuk semua situasi. Experiment dengan berbagai framework dan track mana yang paling efektif untuk audiens Anda.

---

## Catatan Penutup

Selamat, Anda telah menyelesaikan "300 Prompt AI untuk Copywriting dan Iklan Digital". Buku ini bukan sekadar kumpulan prompt, tapi sistem lengkap untuk meningkatkan produktivitas dan kualitas copywriting Anda.

**Apa yang sudah Anda pelajari:**

1. **Copywriting Dasar (Bagian 1):** Fondasi copywriting yang solid, dari headline hingga storytelling
2. **Iklan Media Sosial (Bagian 2):** Cara membuat konten yang mengundang interaksi untuk setiap platform
3. **Email Marketing (Bagian 3):** Strategi email yang meningkatkan open rate dan konversi
4. **Landing Page dan Website (Bagian 4):** Copy yang mengoptimalkan pengalaman pengguna dan konversi
5. **Konten Video dan Podcast (Bagian 5):** Naskah dan struktur untuk konten audio-visual
6. **Copywriting Tingkat Lanjut (Bagian 6):** Teknik tingkat lanjut untuk copywriter profesional

**Langkah selanjutnya:**

1. **Implementasi:** Pilih 5-10 prompt yang paling relevan dengan bisnis Anda dan mulai gunakan
2. **Eksperimen:** Uji berbagai variasi dan catat hasilnya
3. **Iterasi:** Perbaiki prompt berdasarkan hasil yang Anda dapatkan
4. **Dokumentasi:** Catat prompt mana yang paling efektif untuk bisnis Anda
5. **Scale:** Bangun library prompt Anda sendiri berdasarkan pola yang berhasil

**Prinsip utama:**

Prompt adalah alat, bukan pengganti kreativitas. Gunakan prompt sebagai starting point, lalu tambahkan konteks spesifik bisnis Anda, brand voice Anda, dan insight Anda tentang audiens Anda. AI akan membantu Anda bekerja lebih cepat, tapi judgment dan creativity Anda yang akan membuat copy benar-benar outstanding.

**Terima kasih:**

Terima kasih telah mempercayai buku ini sebagai panduan copywriting Anda. Saya berharap 300 prompt ini akan membantu Anda membuat konten yang lebih efektif, efisien, dan engaging.

Sampai jumpa di konten berikutnya.

**Disusun oleh:**
Siraj Nur Ihrom
Founder SNISHOP

---

## Lisensi dan Hak Cipta

Buku ini dilindungi oleh hak cipta. Dilarang menggandakan, mendistribusikan, atau memodifikasi konten buku ini tanpa izin tertulis dari penulis.

Pembeli buku ini diberikan lisensi personal untuk menggunakan prompt-prompt di dalamnya untuk keperluan bisnis pribadi atau komersial. Dilarang menjual, mendistribusikan, atau mempublikasikan ulang prompt-prompt ini sebagai produk terpisah.

Untuk pertanyaan mengenai lisensi, hubungi: siraj@snishop.com

Edisi Pertama, 2026
