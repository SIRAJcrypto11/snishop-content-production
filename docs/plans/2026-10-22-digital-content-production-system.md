# Rencana Implementasi Penerbitan SNISHOP

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans atau superpowers:subagent-driven-development bila tersedia. Pada runtime lain, jalankan tugas dan kriteria verifikasi yang sama secara langsung; ketiadaan plugin bukan alasan melewati pemeriksaan. Gunakan kotak centang untuk mencatat hasil, bukan niat.

**Goal:** Menerapkan standar penerbitan lintas-model pada sistem yang sudah ada, dimulai dari tata kelola yang dapat digunakan agen lain.

**Architecture:** Satu standar utama mengatur semua tier dan format. AGENTS serta satu skill proyek menunjuk standar tersebut; rencana ini berada dalam repositori konten agar tidak bergantung pada dokumen induk di luar checkout. Generator, produk, dan integrasi diperkuat dalam paket terpisah sesudah tata kelola diverifikasi.

**Tech Stack:** Markdown, JSON kasus evaluasi, Node.js/CommonJS dan Jest yang sudah tersedia; Puppeteer, ExcelJS, Playwright, sharp/canvas pada tahap produksi berikutnya. Tidak ada dependensi baru untuk paket A.

**Spec:** [SNISHOP-PUBLISHING v2.0](../specs/2026-10-22-multi-tier-content-production-design.md).

**Revisi:** 2026-10-23. Rancangan disetujui pengguna. Aturan paket A telah ditulis dan diuji melalui skenario terbatas; verifikasi keseluruhan masih terbuka karena satu tes renderer lama gagal. Paket B–F belum diimplementasikan.

## Global Constraints

- Bahasa konten: Indonesia; em dash, emoji dekoratif, dan tanda bintang bocor dilarang; simbol kode/rumus dipertahankan.
- Semua tier tunduk pada standar mutu yang sama; screenshot mengikuti materi layar, bukan harga.
- Delapan gerbang wajib: SCOPE-01, EDITORIAL-01, TECH-01, EVIDENCE-01, VISUAL-01, FILES-01, FRESHNESS-01, COMMERCIAL-01.
- Status gerbang: PASS, FAIL, BLOCKED. Satu kegagalan atau bukti wajib kosong memblokir READY.
- Tipografi awal: Times New Roman 11,5–12 pt; alternatif eksplisit dan berlisensi, tanpa fallback diam-diam.
- Screenshot asli, data fixture diberi label, redaksi terpisah; grafik tidak memakai angka karangan.
- Batas awal empat pekerjaan berat aktif; satu integrator untuk sumber bersama dan manifest.
- Peninjau independen dari pembuat; kelulusan tidak memberi izin publikasi.
- Tidak ada perubahan ERP, kredensial, izin, CI/CD, dependensi, transaksi produksi, commit/push, atau publikasi hanya karena rencana ini tersedia.
- Jangan menganggap audit teks, skor 100%, atau kelulusan Jest sebagai sertifikasi produk.

## Paket A: standar, rules, skill, dan rencana portabel

### Peta berkas

| Tindakan | Berkas | Tanggung jawab |
|---|---|---|
| Perbarui | `docs/specs/2026-10-22-multi-tier-content-production-design.md` | Satu standar mutu dan kontrak serah-terima |
| Perbarui | `README.md` | Pintu masuk dan status kemampuan aktual |
| Tambah | `AGENTS.md` | Urutan membaca, batas kerja, kewajiban bukti |
| Tambah | `.qoder/skills/snishop-content-production/SKILL.md` | Prosedur penggunaan standar lintas-model |
| Tambah | `.qoder/skills/snishop-content-production/evals/cases.json` | Skenario dan rubrik evaluasi perilaku |
| Tambah | `.qoder/skills/snishop-content-production/evals/blocked-handoff.json` | Fixture serah-terima BLOCKED tanpa bukti produk |
| Tambah | `.qoder/skills/snishop-content-production/evals/results.json` | Hasil pengamatan baseline dan setelah skill; bukan bukti kualitas produk |
| Migrasikan | `docs/plans/2026-10-22-digital-content-production-system.md` | Rencana aktif yang ikut checkout konten |

Dua dokumen induk pada workspace lama diberi pemberitahuan arsip dan rujukan ke standar/rencana dalam repositori. Bukan prasyarat checkout portabel dan tidak dibaca untuk memperoleh aturan aktif. Isi historis dipertahankan agar pekerjaan lama tidak hilang.

### A1. Uji baseline dan susun kontrak

**Consumes:** README serta spesifikasi v1 yang ada sebelum perubahan.
**Produces:** Bukti celah instruksi dan daftar perilaku yang harus ditutup oleh standar v2.

- [x] Baca dokumen dan kode sumber yang relevan tanpa mengubah produk.
- [x] Jalankan kasus Basic tanpa screenshot dan sumber lebih baru daripada PDF, memakai agen yang belum menerima skill baru.
- [x] Jalankan kasus font Linux, klaim 10.000 prompt dari 100 eksekusi, grafik tanpa data, dan publikasi mendesak.
- [x] Minta agen menemukan kontrak serah-terima aktual, bukan mengarang schema yang diinginkan.
- [x] Catat hasil: agen menahan klaim tidak berdasar, tetapi tidak menemukan otoritas tunggal, aturan freshness, kewajiban screenshot Basic, dan schema baku. Ini kegagalan kelengkapan referensi, bukan bukti agen berperilaku tidak jujur.

### A2. Konsolidasikan aturan yang disetujui

**Consumes:** Rancangan yang disetujui dan hasil A1.
**Produces:** SNISHOP-PUBLISHING versi 2.0, delapan ID gerbang, kontrak serah-terima v1.

- [x] Perbarui spesifikasi di lokasi yang sama, tanpa menyatakan otomatisasi sudah selesai.
- [x] Tetapkan empat profil, rencana visual, tipografi, spreadsheet, website, dan mutu lintas-tier.
- [x] Tetapkan metadata sumber, aset, hasil, bukti, hash SHA-256, aturan invalidasi, serta persetujuan independen.
- [x] Hapus asumsi bahwa jumlah halaman, testimoni, video, komisi, atau pendapatan sudah tersedia/terjamin.
- [x] Perbarui README berdasarkan perilaku runner sebenarnya, termasuk slug tanpa suffix tier dan flyer opsional.
- [x] Tandai desain dan rencana induk sebagai arsip; jangan mengeksekusi contoh kode lama.

**Verifikasi:** reviewer menelusuri kasus A1 dengan sumber v2, menunjukkan gerbang dan keputusan yang tepat; bandingkan setiap persyaratan desain dengan bagian standar. Pencarian kata bukan uji kebenaran editorial.

### A3. Pasang petunjuk dan satu skill

**Consumes:** Standar dan kontrak A2.
**Produces:** AGENTS, skill proyek, kasus evaluasi yang bisa dipakai ulang.

- [x] Tambahkan AGENTS sebagai pintu masuk, dengan tautan relatif dan tanpa dependensi memori pribadi.
- [x] Tulis skill ringkas dengan nama `snishop-content-production`, frontmatter sah, description satu baris, dan pemicu yang relevan.
- [x] Skill menyebut hasil yang harus diserahkan: keputusan, bukti, temuan, pemilik berikutnya; detail mutu tetap berada di standar.
- [x] Tambahkan kasus positif siap-review dan kasus negatif untuk mencegah skill selalu menjawab BLOCKED.
- [x] Uji pembacaan berkas langsung tanpa memanggil native Skill pada Qoder; jangan mengklaim semua aplikasi otomatis menemukan folder Qoder.
- [ ] Kualifikasi eksekusi pada runtime lain yang benar-benar tidak memiliki native Skill. Skenario Linux saat ini hanya simulasi.

**Verifikasi:** parse JSON evaluasi, periksa frontmatter, nama/folder, panjang description, tautan relatif dan batas 500 baris. Jalankan kasus yang sama pada agen baru setelah membaca skill dan standar; penilai memeriksa isi jawaban, bukan jumlah kata kunci.

### A4. Pemeriksaan akhir paket A

**Consumes:** Berkas A2/A3 dan hasil agen penguji.
**Produces:** Catatan evaluasi dan status terbatas untuk tata kelola, dengan temuan perangkat lunak tetap terbuka.

- [x] Jalankan tinjauan independen atas kontradiksi aturan, ruang lingkup, keamanan bukti, dan portabilitas.
- [x] Perbaiki temuan dokumentasi, lalu ulangi skenario yang terdampak.
- [x] Jalankan Jest yang sudah ada dari akar repositori konten; eksekusi tercatat, bukan berarti seluruh tes lulus.
- [x] Periksa `git diff --check`, daftar perubahan, dan pastikan produk/naskah/generator tidak berubah pada paket A.
- [x] Catat jumlah tes aktual, hasil yang belum dapat diperiksa, dan runtime yang benar-benar diuji; jangan menebak identitas model.
- [x] Nyatakan bahwa aturan sudah terpasang, bukan bahwa produk sudah disertifikasi. Commit/push hanya bila diotorisasi secara eksplisit.
- [ ] Tutup kegagalan regresi perangkat lunak dan jalankan ulang seluruh suite setelah perbaikan paket B yang relevan.

Hasil Jest 2026-10-23: 17 dari 18 suite lulus; 350 dari 351 tes lulus. Satu tes `PDFGenerator renderHTML should include One Dark Pro code block colors` mengharapkan `#282c34`, sedangkan generator lama memakai `#1e293b`. Generator dan tes belum diubah; perbaikan mengikuti desain terang pada B3, bukan memulihkan tema lama demi angka lulus.

Tidak menulis tes yang hanya mencocokkan kalimat Markdown. Uji instruksi dengan agen penggunanya; validasi mekanis memeriksa format/tautan, bukan menggantikan tinjauan substansi.

## Roadmap paket berikutnya

Paket di bawah adalah batas kerja dan kriteria penerimaan, bukan patch kode siap salin. Sebelum mengubah kode pada tiap paket, baca implementasi aktual dan turunkan satu rencana teknis terbatas dengan uji gagal-lulus serta antarmuka konkret. Jangan menjalankan kembali seluruh rencana arsitektur lama.

### Paket B: penegakan bukti dan kualitas berkas

**Urutan B1:** perbaiki keputusan pada `scripts/round8-final-verification.js` sebelum memperluas produksi. Uji proses dengan manifest hilang, daftar keluaran kosong, file hilang, hash/ukuran tidak cocok, ID duplikat, dan hasil valid. Semua kasus rusak harus keluar nonzero, tetap menampilkan temuan; hasil struktural valid tidak boleh mencetak klaim siap rilis penuh.

Perbaiki pula `readManifest()` pada `scripts/produce.js`: JSON rusak harus menghentikan produksi tanpa menimpa berkas atau registrasi lain. Bedakan manifest yang memang belum ada dari manifest yang tidak valid; tulis uji regresi dengan manifest rusak dan dua entri valid yang harus dipertahankan. Sampai perubahan itu diuji, README mewajibkan validasi/salinan aman sebelum produksi.

**Urutan B2:** implementasikan kontrak serah-terima bagian 9 standar dengan validasi input dan pembacaan hash aktual, lalu integrasikan keputusan pada `scripts/produce.js` dan `src/agents/orchestrator/OrchestratorAgent.js`. Uji gerbang hilang/duplikat, bukti kosong, peninjau sama, perubahan sumber/aset/output, input yang keluar root diizinkan, dan laporan layak yang belum memiliki izin publikasi. Jangan menganggap ID peninjau saja membuktikan review telah dilakukan.

**Urutan B3:** tingkatkan `src/agents/design/PDFGenerator.js` untuk profil font eksplisit, cover, syntax highlighting terang, navigasi dan paginasi. Uji font hilang, kode/tabel panjang, gambar detail, judul panjang, serta glyph Indonesia. Render fixture ke PDF dan periksa setiap halaman; tes HTML saja tidak cukup.

**Urutan B4:** tingkatkan `src/screenshot/ScreenshotCapture.js` dan `src/screenshot/AnnotationEngine.js` untuk dimensi aktual, sumber asli/turunan dan metadata; `src/agents/design/ExcelGenerator.js` untuk fungsi workbook menurut brief. Verifikasi screenshot aplikasi nyata dan kalkulasi workbook dalam aplikasi kompatibel.

**Selesai ketika:** contoh rusak ditolak, contoh valid lolos pemeriksaan yang benar-benar dilakukan, dan semua keterbatasan bukti tetap terlihat. Jangan mengunggah hasil tes.

### Paket C: produk percontohan empat profil

Pilih satu alur aplikasi yang benar-benar tersedia untuk tutorial, satu modul dengan latihan/pembahasan, satu referensi dengan indeks/variabel, serta satu hybrid dengan tautan dua arah. Gunakan keluaran kecil yang representatif untuk menguji tipografi, grafik, diagram, screenshot, kode, dan workbook; bukan mengklaim buku lengkap sebelum isinya selesai.

Sertakan minimal kasus sukses, kegagalan yang diajarkan, tabel panjang, dan layar detail. Peninjau independen menjalankan latihan/alur, membaca seluruh halaman, dan menguji berkas. Ukur waktu, biaya, revisi, serta kapasitas sebelum menetapkan target harian.

### Paket D: migrasi sembilan produk lama

Inventaris tiga keluarga dan tiga tier; jangan menjumlahkan ulang materi yang sama sebagai katalog baru. Cocokkan naskah, generator tier, data workbook, aset, dan flyer. Uji definisi variabel `{snake_case}` maupun `[UPPER_SNAKE]`, pisahkan heading entri dari heading demonstrasi, dan jangan memaksa semua produk menggunakan label “Prompt:”.

Perbaiki sumber serta generator bersama agar produksi ulang tidak mengembalikan kesalahan. Bangun ulang keluaran terdampak, baca seluruh PDF/flyer dan keenam workbook yang dijanjikan, lalu catat delapan gerbang serta hash aktual. Jangan mengubah harga, lisensi, atau fitur yang dijanjikan tanpa persetujuan.

### Paket E: katalog skala besar

Mulai taksonomi kebutuhan dan batch 25–50 entri. Periksa tujuan unik, definisi variabel, hasil yang diharapkan, duplikasi, dan cakupan eksekusi. Pilihan 20 volume × 500 bukan angka hasil produksi. Publikasikan jumlah entri unik teruji secara terpisah dari jumlah eksekusi dan jumlah entri ditulis.

Naikkan paralelisme hanya jika tingkat cacat dan biaya terkendali; kapasitas peninjau menjadi pembatas antrean. Jangan memperbanyak draf yang tidak dapat diperiksa.

### Paket F: website, distribusi, pemasaran

Periksa kontrak API dan kemampuan app.snishop.com/lynk.id yang sebenarnya, tanpa mengarang endpoint. Rancang integrasi pembelian dan otorisasi akses secara terpisah setelah kemampuan eksternal diketahui. Uji status pembayaran, hak akses, isolasi data, webhook bila tersedia, dan unduhan kedaluwarsa pada lingkungan uji.

Materi publik harus dapat dibaca mesin pencari tanpa membuka konten premium. Promosi TikTok/Instagram memakai bukti produk; izin publikasi/biaya terpisah. Jika integrasi otomatis belum tersedia, prosedur manual terverifikasi lebih baik daripada respons sukses buatan.

## Pemetaan cakupan spesifikasi

| Bagian standar | Paket implementasi |
|---|---|
| 1–2 otoritas dan brief | A2/A3; B2 untuk penegakan |
| 3–4 profil dan editorial | A2; C/D untuk bukti produk |
| 5–7 aset, cover, tipografi | A2; B3/B4 dan C/D untuk hasil nyata |
| 8 workbook/web/format lain | A2; B4, C, F sesuai format |
| 9–10 tim, kontrak, gerbang | A2/A3/A4; B1/B2 untuk otomatisasi |
| 11 katalog | E sesudah C/D |
| 12 distribusi | F, tidak disamakan dengan kesiapan konektor |
| 13 tahapan | Rencana ini; selesai hanya berdasarkan verifikasi |

## Status dan bukti verifikasi

Hasil evaluasi instruksi disimpan di [catatan skill](../../.qoder/skills/snishop-content-production/evals/results.json). Catatan tersebut hanya menilai perilaku agen pada kasus terbatas, bukan membuktikan kualitas sembilan produk atau kompatibilitas seluruh model.

Saat pekerjaan terhenti, simpan tahap terakhir, berkas yang berubah, perintah yang benar-benar dijalankan, temuan terbuka, dan langkah berikutnya. Jangan menandai paket lain selesai hanya karena pengguna telah menyetujui roadmap.
