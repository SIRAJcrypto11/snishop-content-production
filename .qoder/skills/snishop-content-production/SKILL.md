---
name: snishop-content-production
description: Use when creating, reviewing, packaging, or preparing release claims for SNISHOP PDFs, Excel workbooks, prompt libraries, tutorials, learning modules, reference guides, website lessons, or marketing materials.
---

# Produksi Konten SNISHOP

Gunakan [standar utama](../../../docs/specs/2026-10-22-multi-tier-content-production-design.md), bukan asumsi dari tier, skor audit, atau contoh lama. Skill ini adalah prosedur proyek; bukan sertifikat mutu dan bukan izin publikasi.

## Muat konteks

Baca [AGENTS](../../../AGENTS.md), standar utama, brief produk, dan [rencana aktif](../../../docs/plans/2026-10-22-digital-content-production-system.md). Gunakan jalur relatif repositori. Jika tool Skill/subagen tidak tersedia, baca Markdown langsung dan kerjakan peran berurutan; jangan mengaku melakukan tinjauan independen sendiri.

## Jalankan pekerjaan

1. Tetapkan profil, tujuan pembaca, keluaran, berkas yang boleh ditulis, pemilik dan peninjau. Jika brief belum ada, susun brief sebelum produksi.
2. Petakan setiap bab ke bukti dan visual. Untuk instruksi layar, ambil screenshot aplikasi nyata, termasuk pada Basic. Untuk grafik, minta data; tanpa data relevan, pilih tabel/diagram, bukan angka karangan.
3. Pisahkan penulisan, eksekusi, aset, perakitan, dan peninjauan menurut dependensi. Gunakan satu integrator untuk berkas bersama; batas kapasitas ada di standar bagian 9.
4. Simpan sumber asli, keluaran mentah, label data, dan versi alat. Gunakan font profil yang tersedia secara sah; font hilang berarti render final tertahan, bukan fallback diam-diam.
5. Periksa hasil akhir sesuai format. Baca seluruh halaman PDF; buka/hitung ulang workbook di aplikasi spreadsheet; uji pelajaran website di browser. Catat apa yang belum dapat diuji.
6. Serahkan catatan menggunakan kontrak JSON v1 pada standar bagian 9. Jangan mengarang hash, hasil alat, atau identitas peninjau.

## Bentuk hasil serah-terima

Kirim keputusan lebih dahulu, lalu identitas produk/profil/tier, versi standar, tugas/pemilik/penerima, cakupan berkas, inventaris sumber-aset-keluaran-bukti, delapan gerbang, temuan terbuka, persetujuan, dan otorisasi publikasi. Gunakan field dan enum persis dari kontrak, bukan schema baru buatan agen.

Contoh keputusan: `BLOCKED: FRESHNESS-01 belum diperiksa; PDF mendahului perubahan naskah. Penerima: spesialis format, bangun ulang keluaran terdampak lalu minta review baru.` Ini contoh penjelasan, bukan laporan kelulusan lengkap.

## Keputusan cepat

| Kondisi teramati | Tindakan |
|---|---|
| Sumber/aset/keluaran berubah setelah review | Batalkan persetujuan terkait dan ulangi pemeriksaan |
| Skor tinggi tetapi bukti wajib hilang | FAIL/BLOCKED sesuai standar, bukan READY |
| Penulis menjadi satu-satunya peninjau | Tahan kelulusan sampai review independen |
| Semua gerbang PASS, inventaris cocok, persetujuan sah | READY; jangan mengunggah tanpa izin publikasi |
| Hanya 100 eksekusi untuk katalog 10.000 | Laporkan cakupan sebenarnya; jangan klaim semua teruji |
| Konektor mengembalikan contoh sukses | Jangan menyebut integrasi live; perlu uji pengiriman sebenarnya |

## Kekeliruan yang perlu dicegah

Jangan membaca arsip desain sebagai aturan terbaru, menganggap screenshot hanya untuk Ultimate, menafsirkan hash sebagai bukti kebenaran, atau menghitung ulang prompt yang sama antar-tier. Jangan menjadikan keterbatasan tool alasan membuat screenshot/hasil palsu. Standar menentukan keputusan; tenggat dan biaya yang sudah dikeluarkan tidak mengubah gerbang.

## Pemeriksaan skill

Gunakan [kasus evaluasi](evals/cases.json) pada agen baru sebelum dan sesudah perubahan skill. Nilai keputusan dan bukti jawaban dengan rubrik, bukan kecocokan kata. Catat hasil pada [catatan evaluasi](evals/results.json), termasuk kegagalan dan batas runtime yang diuji.
