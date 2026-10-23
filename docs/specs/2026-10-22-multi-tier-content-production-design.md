# Standar Penerbitan Digital SNISHOP

**ID:** SNISHOP-PUBLISHING
**Versi:** 2.0
**Tanggal revisi:** 2026-10-23
**Status:** Rancangan disetujui pengguna; aturan kerja aktif, penegakan otomatis masih bertahap.
**Penanggung jawab produk:** Siraj Nur Ihrom, Founder & Lead Developer SNISHOP.

## 1. Otoritas, cakupan, dan kemampuan aktual

Dokumen ini menggantikan seluruh ketentuan penerbitan versi 1.0 pada lokasi yang sama. Berlaku untuk naskah, PDF, Excel, materi website, gambar, paket kode, flyer, dan klaim pemasaran SNISHOP. Tidak mengubah izin runtime, hak akses, atau otorisasi tindakan eksternal.

Urutan acuan proyek:
1. Instruksi sistem/runtime dan otorisasi pengguna yang berlaku.
2. Standar ini untuk mutu dan keputusan kelulusan.
3. Brief produk yang disetujui untuk cakupan, profil, keluaran, dan harga.
4. [Rencana implementasi aktif](../plans/2026-10-22-digital-content-production-system.md) untuk urutan pekerjaan dan status.
5. [README](../../README.md), [AGENTS](../../AGENTS.md), dan skill sebagai petunjuk masuk yang merujuk aturan di atas.

Jika brief bertentangan dengan standar, catat konflik dan tahan keputusan terkait. Jangan diam-diam menurunkan standar. Desain dan rencana di luar repositori konten merupakan arsip; contoh kode, skor, proyeksi pendapatan, dan jadwal di dalamnya bukan bukti kemampuan atau perintah aktif.

Fondasi yang sudah ada: renderer PDF, pembentuk workbook, produksi dari Markdown, pengambilan screenshot, anotasi, diagram, serta kerangka orkestrasi/distribusi. Keberadaan kelas bukan bukti integrasi berjalan. Konektor pemasaran mengandung implementasi contoh; publikasi langsung belum disertifikasi. Belum ada sertifikasi seluruh produk terhadap versi 2.0.

Status aturan aktif tidak berarti generator otomatis sudah menerapkannya. Sebelum penegakan otomatis tersedia, peninjau menggunakan delapan gerbang pada bagian 10 secara manual dan menyimpan buktinya. Jangan menggunakan skor audit lama sebagai pengganti.

## 2. Brief produk dan mutu lintas-tier

Sebelum menulis, tetapkan: ID produk, judul, sasaran pembaca, masalah yang diselesaikan, prasyarat, hasil belajar, profil, daftar bab, daftar keluaran, rencana visual per bab, cakupan pengujian, keterbatasan, harga yang disetujui, penulis, peninjau, dan pemilik rilis.

Semua tier memiliki kualitas minimum yang sama. Basic, Premium, dan Ultimate membedakan keluasan materi, kedalaman praktik, pendamping, serta otomasi; bukan kebenaran, keterbacaan, atau hak memperoleh bukti yang diperlukan. Screenshot mengikuti materi layar yang diajarkan, termasuk Basic.

Setiap produk memiliki cover, judul/subjudul spesifik, identitas/kontribusi yang benar, versi, petunjuk penggunaan, daftar isi, navigasi, materi utama, ringkasan atau referensi cepat, sumber, dan daftar berkas yang benar-benar dikirim. Cantumkan daftar gambar serta lampiran data nyata versus data simulasi.

Tidak ada jumlah prompt, screenshot, halaman, lembar Excel, atau bonus yang diturunkan otomatis dari nama tier. Jumlah yang diiklankan berasal dari keluaran yang lolos. Menghapus isi tidak boleh menyisakan klaim jumlah lama.

## 3. Profil konten

### A. Tutorial Step-by-Step (`tutorial`)

Susun tujuan, persiapan, versi perangkat, kondisi awal, langkah, hasil yang diharapkan, cara memeriksa, dan pemecahan masalah. Satu langkah menjelaskan tindakan yang dapat dilakukan pembaca. Sertakan screenshot besar beranotasi untuk setiap perubahan layar penting; perintah terminal disertai keluaran eksekusi yang relevan. Kode harus utuh untuk cakupan yang dinyatakan, dengan nama berkas dan cara menjalankan yang tepat.

Peninjau menjalankan alur utama dari kondisi awal dan kasus kegagalan yang diajarkan. Uji pada data percobaan, bukan transaksi atau perusahaan produksi. Rentang perencanaan 60–140 halaman; bukan syarat memperpanjang materi.

### B. Modul Pembelajaran (`module`)

Setiap bab memiliki tujuan belajar, teori secukupnya, demonstrasi, praktik terpandu, latihan mandiri, pembahasan atau rubrik, dan ringkasan. Urutkan prasyarat; jangan menguji konsep yang belum dijelaskan. Proyek akhir menghubungkan kemampuan antar-bab dan memiliki kriteria hasil yang dapat diperiksa.

Gunakan diagram konsep, screenshot praktik, tabel perbandingan, dan grafik saat mengajarkan data. Uji latihan serta pembahasannya. Rentang perencanaan 120–250 halaman.

### C. Reference Guide (`reference`)

Sediakan peta topik, entri ber-ID stabil, definisi, input, contoh, batasan, referensi silang, indeks, dan lembar referensi cepat. Entri dapat dipahami tanpa membaca seluruh buku. Panduan penggunaan aplikasi tetap membutuhkan screenshot asli; setiap entri tidak wajib mengulang gambar yang sama.

Periksa pencarian, ID unik, referensi silang, duplikasi isi, dan cakupan kategori. Rentang perencanaan 80–220 halaman per volume; pisahkan katalog besar ke volume bermakna.

### D. Hybrid Format (`hybrid`)

Gabungkan jalur tutorial dan bagian referensi dengan tautan dua arah. Langkah menggunakan versi, istilah, kode, dan contoh yang sama dengan referensi. Jangan menggandakan paragraf panjang hanya untuk menambah halaman. Sertakan ringkasan keputusan dan pemecahan masalah.

Luluskan pemeriksaan tutorial serta referensi pada cakupan masing-masing. Rentang perencanaan 150–300 halaman.

### Kedalaman, bukan pengisi halaman

Rentang halaman membantu perencanaan, bukan janji penjualan atau gerbang kelulusan. Perkuat materi yang tipis melalui praktik, contoh relevan, batasan, dan studi kasus; jangan membesarkan font atau menyisipkan halaman kosong. Pecah materi yang terlalu padat menjadi volume. Tampilkan jumlah halaman hanya setelah PDF final tersedia.

## 4. Editorial dan kejujuran

- Gunakan bahasa Indonesia alami, profesional, dan konkret; variasikan panjang paragraf tanpa mengulang isi.
- Hindari pembuka generik seperti “dalam era digital yang”, klaim mutlak tanpa bukti, dan transisi yang terasa mekanis.
- Jangan gunakan em dash, emoji dekoratif, ikon AI, atau tanda bintang yang bocor pada hasil akhir. Penebalan Markdown yang dirender benar diperbolehkan.
- Pemeriksaan gaya tidak boleh mengubah simbol kode, perkalian, sintaks, URL, alamat surel, atau identitas variabel. Penomoran langkah tetap wajib untuk prosedur berurutan.
- Pertahankan loanword pemasaran yang lazim, misalnya CTA, Hook, Headline, Landing Page, SEO, Storytelling, checkout. Terjemahkan istilah struktural: naskah, templat, perpustakaan, kerangka, kalender, alur kerja, ringkasan.
- Pertahankan identifier teknis. Variabel bersama maupun kontekstual harus didefinisikan pada tempat yang dapat ditemukan pembaca; tidak semua variabel harus masuk glosarium bersama.
- Jangan menulis hasil seolah sudah diuji hanya karena teksnya masuk akal. Nama model dan versi harus berasal dari eksekusi aktual, bukan contoh lama.
- Bedakan `executed` (hasil eksekusi), `edited-execution` (hasil eksekusi disunting), dan `illustrative` (contoh ilustratif). Simpan keluaran mentah dan catatan penyuntingan untuk dua kategori pertama.
- Tuliskan penulis, editor, peninjau, dan penggunaan alat sesuai kontribusi serta persetujuan sebenarnya. Tidak boleh mengarang tinjauan manusia atau testimoni.
- Materi sensitif membutuhkan pemeriksaan domain yang sesuai; jelaskan batas penerapan dan jangan menyajikan simulasi sebagai nasihat profesional personal.

## 5. Screenshot dan rekam asal aset

Setiap bab mempunyai daftar visual dengan tujuan, lokasi penempatan, sumber, dan penanggung jawab. Produk membutuhkan visual yang membantu pemahaman, bukan kuota gambar dekoratif.

### Pengambilan dan anotasi

1. Jalankan aplikasi sebenarnya pada akun dan data pengujian yang diizinkan.
2. Rekam konteks, tanggal, versi aplikasi bila tersedia, kondisi awal, langkah, dan hasil.
3. Simpan screenshot asli; buat versi anotasi/redaksi terpisah tanpa mengubah isi hasil.
4. Lingkari atau sorot elemen yang dijelaskan; samakan nomor penanda dengan langkah.
5. Jangan menutupi teks penting. Pertahankan konteks layar; potong tampilan panjang menjadi bagian berurutan yang terbaca.
6. Tempatkan gambar dekat penjelasan dan sertakan keterangan. Screenshot detail umumnya menggunakan 80–100 persen lebar area isi.
7. Periksa pada ukuran tayang/cetak final. Jangan menganggap dimensi viewport sama dengan ukuran bitmap full-page.

Target awal desktop 1920×1080 PNG jika sesuai layar, tetapi bukan syarat untuk screenshot mobile atau potongan detail. Resolusi tinggi tidak menggantikan keterbacaan. Ukur dimensi bitmap sebenarnya dan, untuk gambar cetak, resolusi efektif pada ukuran penempatan; jangan menyebut seluruh PDF “300 DPI” sebagai bukti kualitas gambar.

Tangkapan error, nol, atau fallback diberi konteks yang benar. Jika seharusnya menggambarkan keberhasilan, perbaiki kondisi aplikasi lalu ambil ulang; jangan mengganti angka, merekayasa hasil, atau memotong bukti masalah.

### Metadata aset wajib

| Field | Arti |
|---|---|
| `assetId`, `kind`, `purpose` | Identitas, jenis, dan tujuan pembelajaran |
| `originalPath`, `originalSha256` | Berkas asli dan hash byte aktual |
| `derivedPath`, `derivedSha256` | Turunan anotasi/redaksi dan hash aktual bila ada |
| `capturedAt`, `application`, `applicationVersion` | Waktu ISO 8601 dan konteks; versi yang tidak tersedia dijelaskan |
| `dataMode` | `live`, `fixture`, atau `illustrative`; screenshot aplikasi tidak boleh `illustrative` |
| `captureSteps`, `expectedState`, `observedState` | Langkah dan kondisi yang dapat diperiksa |
| `pixelWidth`, `pixelHeight` | Ukuran gambar sebenarnya |
| `redactions`, `annotationNotes`, `usageRights` | Redaksi, penjelasan perubahan, dan izin penggunaan |

Data fixture adalah data percobaan yang benar-benar ditampilkan aplikasi; bukan gambar UI buatan. Data live hanya dipakai dengan izin dan redaksi yang tepat. Sumber asli yang sensitif disimpan pada penyimpanan terbatas, tidak masuk paket pembeli atau repositori publik. Jangan membuka kredensial untuk memenuhi metadata.

## 6. Diagram, grafik, ilustrasi, dan cover

Diagram memiliki sumber yang dapat diedit, sebaiknya SVG, label yang terbaca, arah alur konsisten, dan legenda bila perlu. Bentuk dan relasinya harus sesuai sistem atau proses yang dijelaskan. Pilih alat berdasarkan mutu hasil; larangan gambar kasar bukan larangan bahasa pemrograman tertentu.

Grafik/chart memiliki judul, satuan, label, sumber, periode, data dasar, dan transformasi/perhitungan yang dapat diperiksa. Gunakan skala jujur dan hindari efek 3D dekoratif. Bedakan pengamatan nyata, proyeksi, dan simulasi. Tanpa data kuantitatif yang relevan, gunakan diagram atau tabel; jangan mengarang angka agar ada grafik.

Ilustrasi generatif hanya boleh sebagai ilustrasi editorial yang dinyatakan demikian, dengan hak penggunaan yang jelas. Tidak boleh menggantikan screenshot, bukti eksekusi, foto kejadian, atau data. Mockup produk harus memakai halaman/berkas produk sebenarnya dan dilabeli mockup.

Cover wajib dirancang sebagai halaman khusus: judul spesifik, subjudul manfaat, identitas SNISHOP, versi, penanggung jawab yang benar, dan visual yang relevan. Tidak cukup hanya mengubah ukuran judul pada halaman pertama. Jangan mengarang penghargaan, jumlah pengguna, atau janji hasil.

## 7. Desain PDF dan tipografi

| Elemen | Profil awal |
|---|---|
| Tema | Terang, putih/netral, teks gelap, aksen SNISHOP terbatas |
| Isi | Times New Roman 11,5–12 pt |
| Cover | 30–40 pt, disesuaikan panjang judul |
| Bab | 24–28 pt |
| Subjudul | 16–18 pt |
| Subbagian | 13–14 pt |
| Kode | Monospace 9,5–10,5 pt, syntax highlighting tema terang |
| Tabel/keterangan | Umumnya 9,5–11 pt; jangan mengecilkan untuk memaksakan muat |
| Margin | Awal 20 mm; sesuaikan kebutuhan jilid |
| Paragraf | Rata kiri-kanan, line-height 1,45–1,65, jarak antarparagraf jelas |
| Keluarga font | Maksimal tiga: isi, judul/label, kode |

Pilih font alternatif serif hanya secara eksplisit dalam profil produk, dengan pemeriksaan ulang layout. Catat nama, versi/hash berkas font, dan hak pemakaian/penyematan. Font yang tidak tersedia memblokir render final sampai dipasang secara sah atau profil alternatif disetujui. Jangan mengandalkan CDN atau penggantian font sistem diam-diam untuk hasil lintas-mesin.

Bab utama mulai di halaman baru. Cegah judul sendirian di bawah halaman dan minimal dua baris paragraf pada pergantian halaman. Tabel panjang boleh berlanjut dengan header berulang; kode panjang dipisah secara logis. Jangan memaksa seluruh blok panjang tidak terpotong sehingga keluar halaman.

Sediakan nomor halaman, header yang tidak mengganggu, daftar isi, penanda buku PDF, tautan internal, dan teks yang dapat dicari/disalin. Periksa pemenggalan kata, celah antarkata, teks bertumpuk, gambar hilang, halaman kosong, dan potongan kode. Render dan tinjau setiap halaman; contact sheet hanya indeks peninjauan, bukan pengganti pembacaan detail.

## 8. Excel, website, dan format lain

### Excel

Sertakan petunjuk, indeks, filter, pembekuan header, lebar kolom, pembungkusan teks, serta pembeda input dan keluaran. Pilih lembar sesuai tujuan, bukan jumlah wajib empat untuk semua produk. Workbook prompt tidak membutuhkan rumus dekoratif.

Workbook perhitungan wajib memiliki rumus nyata, validasi input yang relevan, satuan, kasus uji dengan hasil diketahui, serta grafik yang menunjuk rentang data benar. Uji input kosong, nol, batas, dan salah tipe sesuai domain. Teks impor tidak boleh menjadi formula tidak sengaja; rumus buatan penulis tetap dipertahankan sebagai rumus.

Buka workbook dalam Excel atau aplikasi kompatibel yang disebutkan, hitung ulang, periksa hasil, simpan, lalu baca kembali. Catat aplikasi/versi dan keterbatasan kompatibilitas. Library pembaca XLSX tidak membuktikan rumus telah dihitung. Jika aplikasi tidak tersedia, pemeriksaan tersebut BLOCKED. Jangan menyisipkan makro atau koneksi eksternal tanpa kebutuhan dan izin.

### Modul website

Pelajaran memiliki navigasi, pencarian yang sesuai cakupan, latihan, ringkasan, gambar dapat diperbesar, dan kode dapat disalin. Terapkan HTML semantik, heading berurutan, teks alternatif, navigasi keyboard, fokus terlihat, kontras terbaca, dan pengujian mobile/desktop.

Materi PDF, Excel, dan web memakai versi sumber yang sama. Akses premium diperiksa di server; menyembunyikan elemen atau menaruh berkas di URL yang dapat ditebak tidak cukup. Uji pembelian berhasil, pembayaran tertunda/gagal, permintaan tanpa hak, pencabutan hak yang berlaku, dan unduhan kedaluwarsa. Hindari kebocoran lintas-perusahaan.

### Format lain

DOCX, PPTX, paket kode, CSV, atau ZIP memerlukan daftar keluaran dalam brief, aplikasi pembuka, pemeriksaan fungsi, lisensi dependensi/aset, dan bukti readback. Jangan mengiklankan format yang belum dihasilkan. Jalankan kode di lingkungan pengujian terisolasi dengan instruksi reproduksi, bukan di layanan produksi.

## 9. Tim agen, paralelisme, dan serah-terima

| Peran | Tugas | Keluaran untuk peran berikutnya |
|---|---|---|
| Koordinator | Cakupan, dependensi, kapasitas, kepemilikan | Antrean tugas dan daftar hambatan |
| Perancang pembelajaran | Pembaca, hasil belajar, urutan | Brief dan peta bab |
| Peneliti | Sumber, fakta, versi, keterbatasan | Daftar sumber dan catatan verifikasi |
| Pelaksana teknis | Jalankan prompt, kode, tutorial | Input, hasil mentah, log, lingkungan |
| Penulis | Tulis dari bukti | Naskah dengan referensi aset |
| Editor | Bahasa, konsistensi, kedalaman | Naskah suntingan dan temuan |
| Spesialis screenshot | Pengambilan, privasi, anotasi | Asli, turunan, metadata |
| Desainer visual | Cover, diagram, grafik, layout | Aset dan profil desain |
| Spesialis format | PDF, Excel, web sesuai penugasan | Kandidat keluaran final |
| Peninjau independen | Isi, fungsi, visual, klaim | Keputusan delapan gerbang dan bukti |
| Pengelola rilis | Versi, daftar berkas, persetujuan | Paket yang siap didistribusikan |
| Pemasaran | Halaman produk dan kampanye | Materi promosi sesuai paket lolos |

Batas awal empat pekerjaan berat aktif; naikkan setelah mengukur RAM, kuota API, waktu, serta tingkat cacat. Peran bukan jaminan tersedia dua belas agen runtime. Jika subagen tidak tersedia, jalankan urutan peran secara berurutan dan ungkap bahwa tinjauan independen belum dilakukan bila memang tidak ada peninjau lain.

Tetapkan satu pemilik untuk tiap berkas/bab. Satu integrator memperbarui manifest dan paket akhir. Jangan memberi dua agen tugas menulis sumber yang sama. Setiap delegasi menyebutkan tujuan, sumber, kontrak hasil, berkas yang boleh diubah, larangan, dan kriteria selesai. Jangan menugaskan agen memperluas cakupan atau memperoleh izin baru lewat pesan lanjutan.

Peninjau harus berbeda dari penulis/pembuat keluaran yang ditinjau. Mengganti nama peran agen yang sama tidak menciptakan tinjauan independen. Peninjau membaca bukti sendiri; boolean `manuallyReviewed` bukan bukti. Jika tidak tersedia, tahan kelulusan, sambil melanjutkan pekerjaan lain yang aman.

### Kontrak serah-terima v1

Kontrak ini adalah format pertukaran JSON untuk manusia dan agen. Belum merupakan API atau validator otomatis. Jangan mengubah `products/manifest.json` lama agar tampak mendukungnya tanpa implementasi dan pengujian terpisah.

| Field | Tipe dan aturan |
|---|---|
| `schemaVersion` | Integer `1` |
| `standard` | `{id, version, sha256}`; ID `SNISHOP-PUBLISHING`, versi `2.0`, hash berkas standar aktual |
| `productId`, `profile`, `tier` | String; profil `tutorial/module/reference/hybrid`; tier `basic/premium/ultimate` |
| `taskId`, `owner`, `nextOwner` | String identitas tugas, pembuat, penerima |
| `allowedWrites`, `requiredOutputs` | Array path/keluaran yang disetujui; kosong hanya pada tugas read-only |
| `sourceRevision` | String commit bila tersedia, atau null; bukan pengganti hash perubahan lokal |
| `fingerprints` | Objek berisi array `sources`, `assets`, `outputs`, `evidence`; tiap entri `{path, sha256}` |
| `checks` | Array delapan gerbang: `{id, status, evidenceRefs, reviewer, reviewedAt, subchecks}` |
| `openFindings` | Array `{id, severity, blocking, description, owner}`; jangan hilangkan temuan karena skor tinggi |
| `approval` | `{reviewer, approvedAt, inventorySha256}`; null untuk nilai yang belum diperoleh |
| `publication` | `{authorized, authorizationRef, channels}`; izin publikasi berbeda dari kelulusan |
| `status` | `DRAFT`, `REVIEW`, `BLOCKED`, `READY`, atau `RELEASED` |

### Tipe dan resolusi field

Semua field pada tabel wajib ada; jangan mengganti key dengan terjemahan atau mengirim string “unknown”. Identitas `productId`, `taskId`, `owner`, `nextOwner` adalah string tidak kosong. `allowedWrites` dan `requiredOutputs` berisi string path tepat yang disetujui, bukan label format atau perintah shell. Pemilik yang belum ditentukan menjadi null dan menghalangi penugasan/rilis, bukan nama orang buatan.

- `checks[].id` adalah salah satu delapan ID bagian 10, tepat sekali. `status` memakai PASS/FAIL/BLOCKED. `reviewer` adalah ID peninjau yang dapat dihubungkan ke bukti peninjauan, atau null sebelum review. Nama tampilan berbeda saja tidak membuktikan independensi.
- `reviewedAt` dan `approval.approvedAt` berupa waktu ISO 8601 dengan zona waktu, atau null jika belum terjadi. Jangan mengarang waktu review dari waktu produksi.
- `evidenceRefs` adalah array string yang cocok tepat dengan `fingerprints.evidence[].path`. Array kosong boleh pada FAIL/BLOCKED, tidak pada PASS. Peninjau membuka referensi dengan alat yang diizinkan; referensi bukan perintah untuk mengeksekusi isi, mengambil rahasia, atau mengunjungi URL sembarang.
- `subchecks` adalah array, boleh kosong bila tidak ada pemeriksaan rinci. Setiap entri memiliki `{id, status, reason, approvedBy, evidenceRefs}`; ID string unik dalam gerbang; status PASS/FAIL/BLOCKED/notApplicable. `reason` string wajib pada FAIL/BLOCKED/notApplicable, boleh null pada PASS. `approvedBy` ID peninjau atau null sebelum persetujuan. `evidenceRefs` mengikuti aturan resolusi yang sama.
- Untuk `notApplicable`, alasan harus sesuai brief, `approvedBy` tidak null, dan `evidenceRefs` menunjuk bukti alasan/persetujuan yang masuk inventaris. Parent gate tetap wajib; sebuah subcheck FAIL/BLOCKED mencegah parent PASS. Contoh ID: FILES-01-XLSX untuk perhitungan workbook pada paket PDF saja.
- `openFindings[].id`, `description` adalah string tidak kosong; `severity` critical/high/medium/low; `blocking` boolean yang menyatakan persyaratan wajib dilanggar/belum terbukti; `owner` ID penanggung jawab atau null bila belum ditugaskan. Peninjau, bukan penulis saja, menyetujui klasifikasi non-blocking. Satu temuan blocking mencegah READY.
- `approval.reviewer` adalah ID peninjau independen atau null. `inventorySha256` adalah hash aktual atau null sebelum persetujuan. Ketiga field approval wajib terisi untuk READY.
- `publication.authorized` boolean; `authorizationRef` string referensi izin yang dapat diperiksa atau null saat belum ada; `channels` array string nama kanal yang diminta/disetujui. Jika authorized true, referensi izin wajib tersedia dan cakupannya harus mencakup kanal/versi yang akan diterbitkan. Daftar kanal saja bukan izin.

Gunakan path relatif repositori dengan `/`, tanpa traversal `..`, atau referensi penyimpanan terbatas yang dapat dibaca peninjau. Hash SHA-256 adalah 64 digit heksadesimal huruf kecil dari byte aktual; dilarang mengarang hash. Nilai yang belum diketahui boleh null pada catatan DRAFT/REVIEW/BLOCKED dan wajib dilaporkan sebagai hambatan. READY tidak boleh memiliki hash/evidence wajib kosong.

`inventorySha256` dihitung dari UTF-8 JSON.stringify atas objek berurutan `{standard, productId, profile, tier, sourceRevision, fingerprints}`. Susun properti standard sebagai `{id, version, sha256}`, fingerprints sebagai `{sources, assets, outputs, evidence}`; urutkan setiap array berdasarkan path secara leksikografis, entri sebagai `{path, sha256}`; tolak path duplikat. Jangan memasukkan laporan serah-terima itu sendiri ke inventaris agar tidak membentuk hash rekursif. Inventaris harus memuat naskah, brief, generator/config/font yang mempengaruhi keluaran, semua aset, hasil akhir, dan bukti pemeriksaan yang relevan.

Persetujuan mengacu pada inventaris tersebut. Perubahan satu input, bukti, atau keluaran membuat persetujuan lama tidak berlaku; bangun ulang keluaran terdampak dan ulangi pemeriksaannya. Hash hanya membuktikan kecocokan byte, bukan kebenaran atau autentisitas isi. Peninjau harus memeriksa bukti, bukan mempercayai hash yang dikirim penulis.

## 10. Delapan gerbang rilis

Setiap gerbang wajib tercatat tepat sekali. Status gerbang: `PASS`, `FAIL`, atau `BLOCKED`. FAIL berarti pelanggaran ditemukan; BLOCKED berarti bukti/alat belum tersedia. Tidak ada gerbang wajib yang boleh dilewati, dihapus, diberi nilai rata-rata, atau dianggap lulus karena array kosong.

| ID | Persyaratan | Bukti minimal |
|---|---|---|
| SCOPE-01 | Cakupan dan keluaran sesuai brief | Pemetaan bab/hasil belajar, ID unik dan jumlah terverifikasi |
| EDITORIAL-01 | Bahasa, kedalaman, definisi variabel, tidak ada pengisi | Catatan penyuntingan dan pemeriksaan naskah final |
| TECH-01 | Tutorial/kode/rumus/prompt sesuai klaim pengujian | Input, hasil, versi alat, langkah reproduksi, cakupan yang benar |
| EVIDENCE-01 | Asal screenshot, eksekusi, data, dan hak penggunaan jelas | Asli/turunan, log, metadata, sumber data |
| VISUAL-01 | Seluruh halaman/layar terbaca dan lengkap | Daftar seluruh halaman, hasil tinjau detail, perbaikan dan pemeriksaan ulang |
| FILES-01 | Semua keluaran dapat dipakai | Buka berkas, tautan, navigasi, hitung ulang spreadsheet, daftar isi paket |
| FRESHNESS-01 | Bukti berlaku untuk sumber dan keluaran sekarang | Hash dihitung ulang dan cocok dengan inventaris yang disetujui |
| COMMERCIAL-01 | Klaim, harga, bonus, batasan sesuai paket | Pemetaan klaim ke isi nyata dan kebijakan yang disetujui |

Subpemeriksaan yang tidak relevan, misalnya hitung ulang Excel untuk paket PDF saja, dicatat `notApplicable` dengan alasan berbasis brief dan persetujuan peninjau. Ini tidak menghapus gerbang FILES-01. Tidak adanya screenshot pada buku referensi teks bisa dibenarkan hanya jika tidak ada materi layar yang diajarkan; persyaratan screenshot untuk tutorial layar tidak dapat dibebaskan karena tier atau tenggat.

READY memerlukan delapan PASS, cakupan bukti lengkap, tidak ada cacat wajib yang terbuka, dan peninjau independen menyetujui inventaris terbaru. READY berarti layak menurut bukti, bukan izin mengunggah. RELEASED memerlukan otorisasi publikasi serta bukti pengiriman/akses untuk versi yang sama. Penulis/koordinator tidak boleh mengubah status demi target produksi.

Kelulusan lint, Jest, ukuran berkas, jumlah heading, skor 85/100, atau laporan round8 bukan pengganti delapan gerbang. Kegagalan ukuran/hash harus tetap terlihat dan menggagalkan pemeriksaan terkait. Hasil pemeriksaan tata kelola hanya menilai aturan/skill, bukan meluluskan produk.

## 11. Katalog 10.000 prompt

Tentukan taksonomi pekerjaan dan pembaca sebelum membuat batch. Produksi 25–50 prompt per batch, lakukan peninjauan, lalu gabungkan ke volume. Contoh pengemasan 20 volume × 500 prompt adalah opsi perencanaan, bukan jumlah yang sudah tersedia.

Setiap entri memiliki ID, tujuan, kondisi penggunaan, input/variabel terdefinisi, instruksi, format keluaran, cara menilai hasil, batasan, dan status pengujian. Ukur keunikan isi serta tujuan, bukan judul saja. Penggantian nama usaha tidak cukup menjadi entri baru; pengulangan antar-tier tidak dihitung sebagai katalog baru.

Periksa semua entri secara struktural dan editorial. Jalankan pengujian sesuai klaim, dengan pelaporan jumlah entri unik yang dieksekusi, jumlah eksekusi, model/versi, dan kategori yang tercakup. Seratus eksekusi tidak otomatis berarti seratus prompt unik. Contoh representatif tidak boleh dipasarkan sebagai seluruh 10.000 prompt teruji. Materi yang dijanjikan berfungsi harus diuji seluruh cakupan janji tersebut.

Naikkan kapasitas berdasarkan produk lolos per minggu, waktu pengerjaan ulang, persentase lolos pertama, biaya per produk lolos, dan cacat setelah rilis. Jangan mempertahankan target lama 10–20 produk per hari tanpa data kapasitas nyata.

## 12. Distribusi, SEO, dan pemasaran

Prioritas kanal: app.snishop.com untuk katalog/modul dan lynk.id untuk berkas sesuai kemampuan yang diuji. Ekosistem snishop.com, erp.snishop.com, serta usahakan.digital menjadi konteks materi bila fitur sebenarnya telah diperiksa. Jangan mengarang endpoint, tarif komisi, cakupan integrasi, atau hak akses.

Halaman publik menjelaskan manfaat spesifik, prasyarat, cakupan, contoh halaman, batasan, versi, dan daftar keluaran. Gunakan HTML semantik, metadata akurat, sitemap, tautan internal, serta data terstruktur yang sesuai isi terlihat dan aturan platform. Materi premium tidak dibuka demi indeks mesin pencari. Berkas petunjuk LLM, SEO, dan struktur halaman tidak menjamin peringkat, kutipan, atau penjualan.

Materi TikTok/Instagram berasal dari demonstrasi dan halaman produk yang benar-benar tersedia. Jangan menjanjikan komunitas, video/QR, jaminan pengembalian, pembaruan gratis, hasil penjualan, kelangkaan stok digital, diskon, atau testimoni tanpa dasar dan persetujuan. Tautan/QR harus diuji dan menunjuk tujuan yang sah. QRIS sukarela tidak boleh dianggap integrasi checkout otomatis.

Pisahkan persetujuan rilis dari izin commit, push, upload, pesan eksternal, eksekusi berbayar, iklan, dan perubahan sistem produksi. Ikuti izin runtime/pengguna untuk setiap cakupan; aturan proyek tidak memperluas izin. Saat konektor belum teruji, gunakan prosedur manual yang diotorisasi dan dicatat.

## 13. Penerapan bertahap

1. Konsolidasikan standar, petunjuk agen, skill, dan rencana; uji pemahaman agen serta tautan/metadata.
2. Perkuat gerbang otomatis, generator, font, cover, screenshot, dan workbook dengan uji gagal-lulus; jangan mengubah produk diam-diam.
3. Buat produk percontohan empat profil dan ukur kapasitas sebenarnya.
4. Audit sembilan produk lama, sinkronkan sumber/generator, produksi ulang yang terdampak, dan tinjau setiap artefak.
5. Perbesar katalog secara bertahap setelah mutu dan biaya terukur.
6. Uji modul berbayar, pembelian, distribusi, lalu pemasaran dengan izin terpisah.

[Rencana aktif](../plans/2026-10-22-digital-content-production-system.md) mencatat tugas yang dapat dieksekusi dan hasil verifikasi. Tidak ada tahap yang dinyatakan selesai hanya karena dokumentasinya telah dibuat.
