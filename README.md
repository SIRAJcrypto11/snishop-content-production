# SNISHOP Content Production System

Sistem produksi konten digital berbahasa Indonesia dari naskah Markdown menjadi PDF, workbook Excel, dan flyer opsional. Fokusnya panduan, modul, referensi prompt, serta templat untuk pembaca dan pelaku usaha Indonesia.

**Penanggung jawab:** Siraj Nur Ihrom, Founder & Lead Developer SNISHOP.
**Repositori:** `SIRAJcrypto11/snishop-content-production`.
**Status:** Pipeline tersedia; sertifikasi produk terhadap SNISHOP-PUBLISHING v2.0 belum selesai.

## Acuan dan urutan baca

Setelah README ini, baca:

1. [AGENTS.md](AGENTS.md) untuk petunjuk kerja dan batas penugasan.
2. [Standar kanonis SNISHOP-PUBLISHING v2.0](docs/specs/2026-10-22-multi-tier-content-production-design.md) untuk mutu dan keputusan kelulusan.
3. Brief produk yang disetujui untuk pembaca, profil, cakupan, keluaran, dan harga.
4. [Rencana implementasi aktif](docs/plans/2026-10-22-digital-content-production-system.md) untuk urutan pekerjaan, dependensi, dan status.
5. [Skill produksi konten](.qoder/skills/snishop-content-production/SKILL.md) untuk prosedur pelaksanaan.

Urutan baca bukan urutan otoritas: instruksi runtime dan izin pengguna tetap berlaku, lalu standar v2.0, brief, dan rencana. README, AGENTS, serta skill adalah petunjuk masuk; konflik dengan standar harus dicatat, bukan diabaikan.
Semua acuan berupa berkas repositori. Runtime selain Qoder dapat membacanya langsung; tidak diperlukan memori percakapan atau pemasangan skill untuk mengetahui aturan.

## Kemampuan dan batas saat ini

Runner lokal menerima naskah, melakukan lint, merender PDF, membentuk Excel jika diminta, membuat flyer opsional, lalu memperbarui manifest.
Komponen screenshot, anotasi, diagram, orkestrasi, API, dan distribusi juga tersedia sebagai fondasi, bukan bukti alur menyeluruh sudah bekerja.
Integrasi publikasi dan pemasaran masih membutuhkan validasi nyata yang diotorisasi. Keberadaan konektor tidak membuktikan checkout, hak akses, pengiriman, atau unggahan telah berhasil.

## Peta repositori

- `scripts/produce.js`: runner produksi dan pencatatan hasil.
- `scripts/generate-flyer.js`, `scripts/build-companion.js`, `scripts/draw-diagrams.js`: alat pendukung.
- `src/agents/`: komponen konten, desain, orkestrasi, dan pemasaran.
- `src/screenshot/`, `src/distribution/`, `src/api/`: fondasi pengambilan bukti dan integrasi.
- `drafts/`: naskah lengkap, bagian naskah dalam `parts/`, serta spesifikasi `*.xlsx.json`.
- `products/`: artefak, aset, dan registri lama `manifest.json`.
- `tests/`: pengujian perangkat lunak; `docs/specs/` dan `docs/plans/`: standar dan rencana.

## Katalog lama dan tier

Tiga keluarga tema berikut beserta varian Basic, Premium, dan Ultimate adalah artefak legacy yang menunggu sertifikasi v2.0:

| Keluarga tema lama | Status |
|---|---|
| 150 Prompt AI untuk Bisnis dan UMKM Indonesia | Perlu audit sumber, bukti, dan keluaran |
| 300 Prompt AI untuk Copywriting dan Iklan Digital | Perlu audit sumber, bukti, dan keluaran |
| 200 Template Social Media | Perlu audit sumber, bukti, dan keluaran |

Angka pada judul adalah identitas katalog lama, bukan jumlah yang sudah diverifikasi. Berkas yang ada tidak membuktikan hasil baru, bukti terkini, atau keluaran AI yang benar-benar dieksekusi.
Pada v2.0, tier membedakan keluasan dan kedalaman, bukan mutu minimum. Screenshot mengikuti kebutuhan materi layar, termasuk Basic. Excel, video, QR, bonus, dan jumlah prompt tidak otomatis dijanjikan oleh nama tier.

## Menyiapkan dan menjalankan produksi lokal

Gunakan Node.js dan npm yang kompatibel dengan dependensi `package.json`; kode menggunakan CommonJS. Rendering PDF membutuhkan lingkungan Puppeteer/browser yang berfungsi.
Semua perintah berikut dijalankan dari akar repositori ini, yaitu folder yang memuat `package.json`, tanpa asumsi bahwa repositori berada di dalam ERP.

```bash
# Instal dependensi hanya saat akses jaringan dan perubahan lokal diizinkan
npm install
```

Contoh berikut memakai berkas input yang tersedia. Ini contoh pemanggilan runner, bukan instruksi untuk merilis ulang katalog lama.
Slug `contoh-uji-150` sengaja berbeda dari slug produk lama. Pilih slug contoh baru jika sudah pernah dipakai agar tidak menimpa hasil uji sebelumnya.
Perintah menulis ke `products/` dan mengubah `products/manifest.json`; jalankan hanya dengan izin untuk kedua cakupan tersebut.

```bash
# Basic: naskah yang sesuai tier
node scripts/produce.js --manuscript drafts/150-prompt-ai-untuk-bisnis-dan-umkm-indonesia.md --tier basic --slug contoh-uji-150

# Premium: sertakan spesifikasi workbook
node scripts/produce.js --manuscript drafts/150-prompt-umkm-premium.md --data drafts/150-prompt-ai-untuk-bisnis-dan-umkm-indonesia.xlsx.json --tier premium --slug contoh-uji-150

# Ultimate: flyer hanya ditambahkan bila diminta
node scripts/produce.js --manuscript drafts/150-prompt-umkm-ultimate.md --data drafts/150-prompt-ai-untuk-bisnis-dan-umkm-indonesia.xlsx.json --tier ultimate --slug contoh-uji-150 --flyer
```

Runner tidak mengubah naskah menjadi materi tier lain dan tidak menjalankan prompt AI untuk menghasilkan bukti.
- `--manuscript` wajib; pilih naskah lengkap yang memang sesuai paket.
- `--tier` menerima `basic`, `premium`, atau `ultimate`; nilai bawaan adalah `basic`.
- `--data` opsional; Excel hanya dibuat jika data diberikan pada Premium atau Ultimate.
- `--flyer` opsional, bukan keluaran otomatis setiap tier. Harga bawaan runner bukan persetujuan harga rilis.
- `--slug` tidak menyertakan tier karena runner menambahkan `-${tier}` sendiri; gunakan slug pendek.

Pola hasil: `products/<slug>-<tier>.pdf`, `.xlsx` bila diminta, dan `<slug>-<tier>-flyer.pdf` bila diminta. Entri manifest dengan slug yang sama akan diganti.
Penulisan bertahap dapat meninggalkan sebagian berkas jika proses gagal. Status manifest `produced` hanya mencatat produksi, bukan kelulusan atau publikasi.

Batas penting runner lama: manifest yang gagal diparse dianggap registri kosong, sehingga produksi berikutnya dapat menimpa daftar produk lain. Sebelum produksi, validasi JSON manifest yang sudah ada dan simpan salinan aman. Jika rusak, hentikan produksi serta pulihkan melalui pemeriksaan sumber; jangan sengaja membuat registri kosong. Perbaikan kode berada pada paket B, belum diterapkan oleh pembaruan dokumentasi ini.

## Pemeriksaan otomatis yang sudah ada

1. Validasi keberadaan naskah, nilai tier, serta lint beberapa pola gaya, emoji, tanda bintang, dan teks pengisi.
2. Pemeriksaan panjang path PDF, penyisipan aset gambar lokal, dan rendering PDF.
3. Pembacaan JSON serta pembuatan workbook untuk tier yang sesuai; flyer mengikuti flag.
4. Pencatatan ukuran berkas, jumlah halaman, waktu produksi, dan keluaran pada manifest.

Pemeriksaan ini terbatas. Lint bukan pemeriksaan fakta, autentisitas screenshot, kelengkapan isi, atau kesegaran bukti. Runner belum menegakkan seluruh gerbang v2.0 maupun kontrak serah-terima secara otomatis.

## Standar v2.0 aktif, pemeriksaan manual wajib

Tetapkan brief dan profil `tutorial`, `module`, `reference`, atau `hybrid` sebelum menulis. Rentang halaman adalah panduan perencanaan, bukan alasan menambah pengisi.
Gunakan bahasa Indonesia alami, tanpa em dash, emoji dekoratif, atau klaim tanpa bukti; pertahankan sintaks kode dan identifier teknis.
Bedakan `executed`, `edited-execution`, dan `illustrative`. Simpan keluaran mentah, konteks eksekusi, sumber aset, hak penggunaan, serta catatan penyuntingan yang relevan.
Screenshot harus berasal dari aplikasi nyata dengan data yang diizinkan; simpan asli, anotasi terpisah, metadata, dan hash aktual. Jangan merekayasa layar atau hasil.
PDF memerlukan cover khusus, tema terang, profil awal Times New Roman 11,5-12 pt, navigasi, serta peninjauan detail setiap halaman. Font alternatif harus disetujui dan diperiksa ulang.
Workbook harus dibuka, dihitung ulang bila berisi rumus, disimpan, dan dibaca kembali pada aplikasi yang disebutkan. Library XLSX saja tidak membuktikan perhitungan berhasil.
Gunakan path aset relatif repositori atau naskah, bukan lokasi Windows atau folder induk tertentu. Aset/font yang belum tersedia atau belum berizin adalah hambatan; jangan mengasumsikan render sepenuhnya offline.

Peninjau mencatat bukti untuk delapan gerbang berikut sesuai standar kanonis:

| Gerbang | Fokus pemeriksaan |
|---|---|
| `SCOPE-01` | Cakupan, ID, jumlah, dan keluaran sesuai brief |
| `EDITORIAL-01` | Bahasa, kedalaman, definisi, dan konsistensi |
| `TECH-01` | Eksekusi tutorial, prompt, kode, atau rumus sesuai klaim |
| `EVIDENCE-01` | Asal bukti, data, screenshot, dan hak penggunaan |
| `VISUAL-01` | Seluruh halaman atau layar terbaca dan lengkap |
| `FILES-01` | Berkas, navigasi, tautan, serta fungsi dapat digunakan |
| `FRESHNESS-01` | Hash dan bukti cocok dengan inventaris terkini |
| `COMMERCIAL-01` | Klaim, harga, bonus, dan batasan sesuai paket nyata |

Setiap gerbang berstatus `PASS`, `FAIL`, atau `BLOCKED`; bukti yang belum tersedia tidak boleh dianggap lulus.
`READY` memerlukan delapan PASS, bukti lengkap, tidak ada cacat wajib terbuka, dan persetujuan peninjau independen atas inventaris terbaru. Perubahan sumber, aset, bukti, atau keluaran membatalkan persetujuan lama.
`READY` bukan izin mengunggah. `RELEASED` membutuhkan otorisasi publikasi dan bukti pengiriman/akses untuk versi yang sama.

## Pengujian

```bash
npm test
npm test -- --runInBand
npm test -- tests/unit/storage.test.js
npm test -- --coverage
```

Laporkan hasil dan cakupan dari eksekusi aktual, tanpa jumlah tes tetap. Kelulusan Jest atau lint bukan sertifikasi produk.
Tes dokumentasi/tata kelola hanya memeriksa aturan dan petunjuk; bukan bukti bahwa PDF, Excel, screenshot, atau integrasi publikasi telah lulus v2.0.

## Rilis dan kelanjutan pekerjaan

Ikuti rencana aktif: perkuat penegakan otomatis, buat produk percontohan, audit artefak lama, lalu tingkatkan kapasitas berdasarkan hasil terukur. Dokumentasi baru tidak menandakan tahap implementasi selesai.
Prioritas kanal adalah app.snishop.com dan lynk.id, setelah kemampuan serta akses diuji. Tarif komisi, pendapatan, peringkat SEO, dan penjualan tidak dijamin.
Materi pemasaran hanya boleh menjanjikan isi, harga, bonus, tautan, dan layanan yang benar-benar tersedia serta disetujui. QRIS sukarela bukan integrasi checkout otomatis.
Izin rilis terpisah dari izin commit, push, upload, pesan eksternal, eksekusi berbayar, dan perubahan produksi. Jangan melakukan tindakan tersebut otomatis setelah pekerjaan selesai.
