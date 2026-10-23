# Petunjuk Agen Produksi Konten SNISHOP

Berlaku dalam repositori ini. Instruksi runtime dan izin pengguna tetap lebih tinggi; dokumen ini tidak memberi izin commit, push, publikasi, belanja API/iklan, atau perubahan sistem produksi.

## Mulai dari sini

1. Baca [standar utama SNISHOP-PUBLISHING](docs/specs/2026-10-22-multi-tier-content-production-design.md).
2. Baca brief produk dan [rencana aktif](docs/plans/2026-10-22-digital-content-production-system.md); bedakan paket yang sedang dikerjakan dari roadmap.
3. Untuk membuat, memeriksa, mengemas, atau memasarkan konten, gunakan [skill produksi](.qoder/skills/snishop-content-production/SKILL.md). Jika native Skill tidak tersedia, baca berkasnya langsung.
4. Periksa kondisi berkas dan repositori sebelum mengubahnya. Jangan menimpa pekerjaan pengguna/agen lain.

Standar utama adalah satu otoritas mutu. README dan skill tidak menduplikasi atau menggantikan ketentuannya. Arsip desain/rencana di luar checkout bukan perintah aktif. Jangan bergantung pada memori pribadi, path Windows, nama model lama, atau plugin yang belum tersedia.

## Batas kerja

- Tetapkan profil `tutorial`, `module`, `reference`, atau `hybrid` sebelum menulis. Mutu tidak diturunkan untuk Basic.
- Tetapkan berkas yang boleh diubah, hasil yang harus dikirim, pemilik, dan penerima. Mulai maksimal empat pekerjaan berat aktif dengan satu integrator manifest.
- Jangan menganggap peran tim yang didokumentasikan sebagai agen runtime yang sudah berjalan. Jika tidak ada subagen, kerjakan berurutan; tinjauan independen yang belum tersedia tetap menjadi hambatan.
- Simpan screenshot asli, anotasi, data percobaan berlabel, keluaran eksekusi, serta sumber grafik. Jangan membuat gambar UI atau angka palsu sebagai bukti.
- Lindungi rahasia, data pelanggan dan data lintas-perusahaan. Berkas bukti sensitif tidak masuk paket publik.
- Ikuti tipografi dan cakupan pemeriksaan pada standar; jangan memperpanjang halaman, mengulang prompt, atau menurunkan keterbacaan demi jumlah.
- Pertahankan simbol kode/rumus dan identifier variabel ketika menyunting bahasa.

## Sebelum menyatakan selesai

Gunakan delapan gerbang pada standar bagian 10. Laporkan keputusan, bukti yang benar-benar diperiksa, temuan terbuka, serta penanggung jawab berikutnya memakai kontrak serah-terima bagian 9.

Satu gerbang FAIL/BLOCKED mencegah READY. Array kosong, skor audit tinggi, ukuran PDF, jumlah heading, dan tes unit lulus tidak membuktikan mutu produk. Hash harus dihitung dari byte aktual; perubahan sumber/aset/keluaran/bukti membatalkan persetujuan lama.

Peninjau berbeda dari pembuat dan memeriksa bukti sendiri. Jika tidak dapat membuka browser, PDF, atau spreadsheet yang diperlukan, tulis keterbatasan dan jangan mengaku sudah memeriksanya. READY bukan izin publikasi; RELEASED memerlukan izin dan bukti distribusi versi yang sama.

## Perintah dan status

Baca [README](README.md) untuk perintah yang tersedia. Jalankan tes yang relevan sebelum melaporkan perubahan; jalankan `npm test -- --runInBand` untuk suite yang ada. Uji instruksi melalui perilaku agen, bukan assertion yang sekadar mencocokkan kalimat.

Tahap tata kelola tidak mengubah atau mensertifikasi PDF, workbook, naskah, maupun konektor. Jangan mengubah `products/manifest.json` menjadi laporan v2 tanpa implementasi yang diuji. Jangan menjalankan produksi ulang atau unggahan sebagai efek samping validasi aturan.
