const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const premiumPath = path.join(ROOT, 'drafts', '150-prompt-umkm-premium.md');
const ultimatePath = path.join(ROOT, 'drafts', '150-prompt-umkm-ultimate.md');

const premium = fs.readFileSync(premiumPath, 'utf8');
const title = '# 150 Prompt AI untuk Bisnis dan UMKM Indonesia';
const firstTitle = premium.indexOf(title);
const bodyStart = premium.indexOf(title, firstTitle + 1);
if (bodyStart < 0) throw new Error('Body start not found');
const body = premium.slice(bodyStart);

const frontMatter = `${title}

**Edisi Ultimate dengan Contoh Output AI dan Panduan Otomasi**

Disusun oleh: Siraj Nur Ihrom, Founder SNISHOP
Edisi Ultimate, Oktober 2026
Format: 150 prompt lengkap, contoh output AI, dan panduan otomasi bisnis
Pendamping: Berkas Excel 150 baris prompt siap saring dan kolom pelacakan pemakaian

## Tentang Edisi Ultimate

Edisi Ultimate adalah versi paling lengkap: seluruh 150 prompt, contoh output nyata dari ChatGPT dan Gemini, plus panduan otomasi yang menghubungkan prompt ke alat kerja harian tanpa tim IT.

Yang Anda dapatkan di edisi Ultimate:
- Semua 150 prompt dengan teks lengkap
- Contoh output ChatGPT untuk 2 prompt kunci di setiap bab
- Contoh output Gemini untuk prompt yang sama
- Perbandingan kualitas antara kedua alat agar tahu kapan memakai yang mana
- Berkas Excel pendamping dengan 150 baris prompt
- Panduan otomasi 10 alur kerja bisnis langkah demi langkah
- Studi kasus 4 bisnis yang sudah menjalankan otomasi dengan prompt dari buku ini
- Panduan penyelesaian 5 masalah otomasi yang paling sering muncul
- Kode contoh Node.js, Python, dan PHP untuk integrasi khusus
- Checklist implementasi otomasi dari nol sampai berjalan

Contoh output dalam buku ini memakai bisnis contoh yang konsisten: toko roti Bandung, laundry premium Yogyakarta, keripik singkong, katering sehat Jakarta, warung makan, dan kedai kopi. Satu bisnis contoh muncul di banyak bab sehingga Anda bisa melihat bagaimana prompt yang berbeda bekerja untuk bisnis yang sama.

## Cara Menggunakan Buku Ini

Setiap prompt memakai format yang sama. Anda tidak perlu membaca berurutan. Buka bab yang kasusnya sedang Anda hadapi, ambil kode prompt, lalu isi bagian di dalam kurung kurawal dengan data bisnis Anda sendiri.

Struktur tiap entri:

| Bagian | Fungsi |
|---|---|
| Kode | Nomor tetap, dipakai juga di berkas Excel pendamping |
| Kapan pakai | Kondisi nyata yang membuat prompt ini relevan |
| Isi prompt | Teks yang Anda salin utuh ke alat AI pilihan Anda |
| Variabel | Data yang wajib Anda ganti sebelum mengirim |
| Hasil yang diharapkan | Bentuk keluaran yang bisa Anda periksa |
| Contoh output | Hasil nyata dari ChatGPT dan Gemini |
| Otomasi | Cara menghubungkan prompt ke alat otomasi (edisi Ultimate) |

Tiga aturan yang membuat library ini bekerja:

1. Jangan mengirim prompt dengan kurung kurawal yang masih utuh. Prompt seperti itu hanya akan menghasilkan jawaban generik.
2. Ganti konteks setiap kali kondisi bisnis berubah. Harga, kota, dan skala omzet adalah bahan bakar utama jawaban AI.
3. Simpan versi yang terbukti menghasilkan di berkas Excel pendamping, kolom Catatan. Catat tanggal dan alat yang dipakai.

## Standar Kualitas

Semua prompt dalam buku ini mengikuti standar kualitas ketat:
- Bahasa Indonesia yang natural dan profesional
- Contoh konkret dengan angka dan data
- Struktur yang jelas dan mudah diikuti
- Tanpa frasa pengisi yang tidak berarti
- Tanpa simbol atau tanda baca yang tidak lazim

---

`;

const automation = `
## Panduan Otomasi Bisnis dengan AI

Sepuluh alur kerja yang menghubungkan prompt dari buku ini ke alat kerja harian. Semua bisa dipasang dengan alat gratis atau murah. Untuk pemula, mulai dari alur kerja 1 dan 3.

### Alur Kerja 1: Laporan Penjualan Mingguan dari Catatan Kas

Alat yang dibutuhkan: Google Sheets, ChatGPT.

Alur: setiap Senin pagi, catatan penjualan minggu lalu diubah jadi laporan ringkas dalam 10 menit.

Langkah pemasangan:
1. Pastikan catatan kas harian sudah masuk Google Sheets dengan kolom: tanggal, kategori, keterangan, pemasukan, pengeluaran.
2. Salin ringkasan angka mingguan (bukan seluruh baris) ke prompt P-137 untuk rumus yang belum ada.
3. Tempel hasil angka ke prompt berikut, lalu kirim ke ChatGPT.
4. Simpan hasil laporan ke tab Laporan Mingguan dan kirim ke diri sendiri lewat WhatsApp.

Prompt AI yang dipakai:
\`\`\`
Berikut angka penjualan mingguan warung saya: pemasukan total {angka}, pengeluaran total {angka}, jumlah transaksi {angka}, menu terlaris {nama}, hari terlemah {nama}. Susun laporan mingguan untuk pemilik usaha dengan struktur: ringkasan 3 kalimat, perbandingan dengan minggu lalu {angka}, satu penyebab yang paling mungkin, dan satu tindakan minggu ini. Bahasa Indonesia, tanpa istilah akuntansi.
\`\`\`

Hasil yang diharapkan: laporan mingguan konsisten, tren terlihat sebelum masalah membesar.

### Alur Kerja 2: Pengingat Pesanan Ulang Bahan

Alat yang dibutuhkan: Google Sheets, pengingat HP.

Alur: stok bahan dihitung ulang otomatis terhadap titik pesan yang sudah Anda hitung dengan prompt P-121.

Langkah pemasangan:
1. Buat sheet stok: nama bahan, stok sekarang, titik pesan ulang, pemasok, nomor kontak.
2. Setiap sore, isi kolom stok sekarang selama 5 menit.
3. Baris yang stoknya di bawah titik pesan diberi warna merah dengan pemformatan bersyarat.
4. Bila ada baris merah, salin daftar itu ke prompt berikut dan kirim pesannya ke pemasok.

Prompt AI yang dipakai:
\`\`\`
Buatkan pesan WhatsApp singkat dan sopan ke pemasok {nama} untuk memesan bahan berikut: {daftar bahan dan jumlah}. Sebutkan bahwa ini pesanan rutin {hari}, minta konfirmasi harga dan jadwal antar, dan tutup dengan ucapan terima kasih. Maksimal 5 kalimat.
\`\`\`

Hasil yang diharapkan: tidak ada lagi kehabisan bahan mendadak, dan pemesanan terjadi pada angka, bukan pada perasaan.

### Alur Kerja 3: Tindak Lanjut Prospek Tertunda Otomatis

Alat yang dibutuhkan: spreadsheet prospek, pengingat kalender.

Alur: prospek yang menghilang mendapat urutan tindak lanjut dari prompt P-077 pada hari ke-3, ke-7, dan ke-12.

Langkah pemasangan:
1. Buat sheet prospek: nama, tanggal bertanya, produk yang ditanya, status (baru / tindak lanjut 1 / tindak lanjut 2 / selesai / batal).
2. Setiap pagi, saring prospek dengan tanggal 3 hari lalu dan 7 hari lalu yang statusnya masih tertunda.
3. Salin nama, produk, dan konteks ke prompt P-077, minta pesan sesuai hari ke berapa.
4. Kirim pesan itu secara manual lewat WhatsApp agar tetap terasa personal, lalu perbarui status.
5. Setiap Jumat, hitung berapa prospek yang kembali setelah tindak lanjut. Itu angka kesehatan penjualan Anda.

Hasil yang diharapkan: prospek tidak pernah hilang karena lupa, dan Anda tahu berapa persen prospek yang bisa dihidupkan kembali.

### Alur Kerja 4: Draf Balasan Komplain dalam 2 Menit

Alat yang dibutuhkan: template dari P-092, catatan HP.

Alur: saat komplain masuk, draf balasan tiga lapis jadi cepat dan nada tetap konsisten.

Langkah pemasangan:
1. Simpan prompt P-092 di catatan HP.
2. Saat komplain masuk, isi: jenis masalah, fakta versi Anda, solusi yang boleh ditawarkan.
3. Dapatkan tiga lapis balasan: publik, privat, tindak lanjut.
4. Baca sekali, sesuaikan nama dan angka, baru kirim.
5. Catat jenis komplain di spreadsheet. Jenis yang terulang dua kali wajib jadi perbaikan sistem.

Hasil yang diharapkan: komplain tertangani dengan nada yang selalu sama baiknya, bahkan di hari yang melelahkan.

### Alur Kerja 5: Kalender Konten Bulanan Sekali Duduk

Alat yang dibutuhkan: Google Sheets, prompt P-062.

Alur: kalender konten 30 hari disusun sekali di awal bulan, sisanya tinggal eksekusi.

Langkah pemasangan:
1. Tentukan goal bulan itu dalam satu angka (misal 20 langganan baru).
2. Jalankan prompt P-062 dengan goal, frekuensi posting, dan pilar konten Anda.
3. Salin hasil kalender ke sheet Konten Bulanan: tanggal, platform, jenis, ide, status.
4. Setiap malam sebelum hari posting, siapkan bahan konten esok. Satu konten, 20 menit.
5. Setiap akhir minggu, tandai yang sudah tayang dan catat performa singkatnya.

Hasil yang diharapkan: tidak ada lagi pertanyaan hari ini posting apa, pertanyaan yang paling melelahkan pemilik usaha.

### Alur Kerja 6: Pantauan Harga Pesaing Mingguan

Alat yang dibutuhkan: spreadsheet, prompt P-003.

Alur: daftar harga pesaing dikumpulkan mingguan, diproses menjadi posisi harga dan rekomendasi.

Langkah pemasangan:
1. Setiap Sabtu, catat harga 5 pesaing utama di sheet Harga Pesaing, satu kolom per minggu.
2. Salin kolom minggu itu ke prompt P-003 bersama harga Anda.
3. Simpan hasil analisis di sheet yang sama, kolom catatan.
4. Bila posisi harga Anda bergeser kategori dua minggu berturut, itu pemicu rapat harga dengan diri sendiri.

Hasil yang diharapkan: keputusan harga berbasis data dua mingguan, bukan berbasis keluhan pelanggan terakhir.

### Alur Kerja 7: Rekap Pembukuan Bulanan Tanpa Akuntan

Alat yang dibutuhkan: Google Sheets, prompt P-106 dan P-107.

Alur: uang pribadi dan usaha tetap terpisah, dan arus kas 13 minggu diperbarui tiap bulan.

Langkah pemasangan:
1. Pastikan dua rekening dan aturan gaji pemilik dari P-106 sudah jalan.
2. Akhir bulan, ekspor mutasi rekening usaha ke spreadsheet.
3. Jalankan prompt P-107 dengan angka terbaru untuk memperbarui proyeksi 13 minggu.
4. Catat satu keputusan yang lahir dari proyeksi itu (tunda beli, percepat beli, atau tetap).
5. Arsipkan laporan bulan itu sebagai berkas dengan nama bulan, jangan menimpa.

Hasil yang diharapkan: pemilik tahu kondisi kas 3 bulan ke depan, bukan baru tahu saat kas menipis.

### Alur Kerja 8: Bank Ide Produk dari Keluhan Pelanggan

Alat yang dibutuhkan: spreadsheet ide, prompt P-016.

Alur: keluhan dan permintaan pelanggan dikumpulkan, lalu disaring menjadi kandidat produk baru setiap kuartal.

Langkah pemasangan:
1. Buat sheet Ide dari Pelanggan: tanggal, siapa, keluhan atau permintaan, frekuensi kemunculan.
2. Setiap kali ada keluhan atau permintaan menarik, catat dalam 10 detik.
3. Setiap kuartal, salin daftar itu ke prompt P-016 bersama deskripsi bisnis.
4. Dapatkan skor permintaan, keuntungan, kemudahan produksi, dan kecocokan kemampuan.
5. Ambil satu ide skor tertinggi sebagai uji pasar kuartal berikutnya.

Hasil yang diharapkan: produk baru lahir dari kebutuhan nyata, bukan dari selera pribadi pemilik.

### Alur Kerja 9: Ringkasan Performa Karyawan Mingguan

Alat yang dibutuhkan: spreadsheet tugas, prompt dari Bab 14.

Alur: pembagian tugas dan beban tim ditinjau tiap minggu agar tidak ada yang tenggelam diam diam.

Langkah pemasangan:
1. Buat sheet tugas: nama, tugas, estimasi jam per minggu, status minggu ini.
2. Setiap Jumat, salin tabel itu ke prompt P-039 gaya matriks tugas (bagian operasional).
3. Dapatkan bacaan beban per orang dan saran pengalihan.
4. Bicara satu lawan satu dengan orang yang bebannya paling tinggi sebelum mengubah apa pun.
5. Catat keputusan perubahan di kolom catatan.

Hasil yang diharapkan: tim kecil terkelola adil, dan kelelahan terlihat sebelum jadi resign.

### Alur Kerja 10: Persiapan Rapat Diri Sendiri Bulanan

Alat yang dibutuhkan: semua laporan dari alur kerja sebelumnya, prompt P-136.

Alur: sekali sebulan, semua angka dikumpulkan, dan satu rapat 30 menit dengan diri sendiri menghasilkan keputusan tertulis.

Langkah pemasangan:
1. Kumpulkan laporan mingguan, pembukuan, dan catatan harga pesaing bulan itu.
2. Tulis 3 pertanyaan analisis dari prompt P-136 yang paling relevan bulan itu.
3. Jawab dengan data, bukan perasaan.
4. Tulis maksimal 3 keputusan bulan depan di satu halaman.
5. Simpan halaman itu, dan di rapat bulan berikutnya mulai dari menilai keputusan lama sebelum membuat yang baru.

Hasil yang diharapkan: bisnis dipandu keputusan tertulis bulanan, bukan oleh urgensi harian.

## Studi Kasus Otomasi

### Studi Kasus 1: Toko Roti, Bandung

Kondisi awal: pemilik mengerjakan pembukuan di akhir bulan dengan ingatan, sering kehabisan bahan tepung di hari ramai, dan konten hanya tayang saat mood baik.

Yang dipasang: alur kerja 2 (pengingat bahan) di minggu pertama, alur kerja 5 (kalender konten) di minggu kedua, alur kerja 1 (laporan mingguan) di bulan kedua.

Hasil setelah 3 bulan:
- Kehabisan bahan turun dari 4 kali sebulan menjadi nol.
- Konten tayang stabil 3 kali seminggu, langganan roti tawar bertambah 14 pelanggan.
- Pemilik untuk pertama kalinya tahu persis berapa laba bersih per bulan setelah gaji dirinya.

Pelajaran: mulai dari otomasi yang menutup kebocoran uang (bahan), baru ke otomasi yang menambah pendapatan (konten).

### Studi Kasus 2: Laundry Premium, Yogyakarta

Kondisi awal: prospek yang bertanya harga sering menghilang tanpa tindak lanjut, pemilik menyangka mereka sudah pilih pesaing.

Yang dipasang: alur kerja 3 (tindak lanjut prospek) di minggu pertama, alur kerja 4 (draf komplain) di minggu kedua.

Hasil setelah 3 bulan:
- Dari 96 prospek yang sempat menghilang, 31 kembali setelah pesan hari ke-3 dan ke-7.
- Waktu membalas komplain turun dari puluhan menit mikir menjadi 2 menit draf plus penyesuaian.
- Rata rata tambahan pendapatan dari prospek yang kembali: sekitar 3 juta per bulan.

Pelajaran: uang paling murah adalah uang yang sudah mengetuk pintu. Tindak lanjut terjadwal lebih berharga daripada iklan baru.

### Studi Kasus 3: Katering Sehat, Jakarta Selatan

Kondisi awal: produk baru selalu lahir dari selera pemilik, dua produk terakhir gagal dijual, stok bahan sering lebih.

Yang dipasang: alur kerja 8 (bank ide dari keluhan) di bulan pertama, alur kerja 6 (pantauan harga pesaing) di bulan kedua.

Hasil setelah 3 bulan:
- Dari 41 catatan keluhan, terkumpul 6 kandidat produk, satu diuji: paket makan siang keluarga.
- Paket keluarga terjual 22 langganan dalam bulan pertama, angka terbaik produk baru sepanjang sejarah bisnis.
- Pantauan harga mengungkap pesaing menaikkan harga 8 persen, dan katering ini mengikuti dua minggu kemudian tanpa kehilangan pelanggan.

Pelajaran: pelanggan sudah memberi tahu produk apa yang mereka mau, bisnis hanya perlu mencatat dan mendengarkan secara sistematis.

### Studi Kasus 4: Warung Makan, Bekasi

Kondisi awal: uang warung dan uang rumah bercampur selama 4 tahun, pemilik tidak pernah tahu laba sebenarnya, harga menu belum pernah dihitung ulang.

Yang dipasang: pemisahan rekening dari P-106 di minggu pertama, alur kerja 7 (pembukuan dan arus kas) di bulan pertama, alur kerja 10 (rapat bulanan) di bulan kedua.

Hasil setelah 3 bulan:
- Laba bersih yang terungkap: sebenarnya warung merugi tipis karena harga dua menu tidak menutup kenaikan harga bahan.
- Dua menu dihitung ulang harganya, satu menu yang merugi lama dihapus.
- Saldo kas kini terproyeksi 13 minggu ke depan, keputusan ganti kulkas ditunda dua bulan berdasarkan proyeksi, bukan berdasarkan hasrat.

Pelajaran: otomasi paling menguntungkan adalah yang mengungkap kebenaran yang selama ini tersembunyi di balik dompet campur.

## Troubleshooting Otomasi

### Masalah 1: Output AI Berubah Ubah untuk Prompt yang Sama

Penyebab: variabel yang diisi tidak lengkap, atau prompt dikirim tanpa konteks yang stabil.

Solusi: kunci konteks. Simpan versi prompt yang sudah terbukti bersama nilai variabel yang berhasil di kolom Catatan berkas Excel pendamping. Bila hasil mulai meleset, bandingkan variabel yang dikirim dengan versi yang berhasil, hampir selalu ada satu variabel yang berubah sendirinya.

### Masalah 2: Otomasi Berjalan, Tetapi Tidak Ada yang Memakai Hasilnya

Penyebab: alur kerja dibangun karena terdengar canggih, bukan karena menjawab masalah nyata.

Solusi: satu aturan, satu pemakai. Setiap alur kerja harus punya satu orang yang memakai hasilnya setiap minggu dengan nama jelas. Bila setelah 3 minggu tidak ada yang membuka hasilnya, matikan alur kerja. Otomasi mati yang tak dipakai hanya menumpuk tab di browser.

### Masalah 3: Data di Spreadsheet Berantakan dan Rumus Gagal

Penyebab: kolom berpindah, tanggal bertipe teks, atau orang lain mengisi dengan format berbeda.

Solusi: kontrak kolom. Tulis di baris pertama sheet: kolom ini tidak boleh diubah, isi mulai baris ke-3. Periksa tipe tanggal dengan rumus sederhana setiap bulan. Bila ada orang baru yang mengisi, ajari satu hal saja: jangan mengubah struktur, cukup isi.

### Masalah 4: Prompt Sudah Bagus, Tetapi Jawaban AI Terasa Umum

Penyebab: kurung kurawal masih utuh saat dikirim, atau variabel diisi angka yang terlalu tipis.

Solusi: audit kurung. Sebelum menekan kirim, cari tanda kurung kurawal di prompt. Bila masih ada, lengkapi. Untuk variabel angka, jangan tulis cukup banyak, tulis angka nyata. Kualitas jawaban AI sebanding dengan spesifiknya bahan bakar yang Anda beri.

### Masalah 5: Semangat Otomasi Padam Setelah Bulan Pertama

Penyebab: terlalu banyak alur kerja dipasang sekaligus, semuanya setengah jalan.

Solusi: satu alur kerja per dua minggu, maksimal 20 menit kerja per minggu, dan satu pemilik yang jelas. Rutinitas otomasi yang baik terasa seperti menyapu lantai: ringan, terjadwal, dan hasilnya terlihat. Bila terasa seperti proyek besar, kecilkan sampai terasa ringan.

## Integrasi Khusus dengan Kode

Untuk bisnis yang punya orang yang nyaman dengan kode, tiga contoh berikut menghubungkan prompt buku ini ke API OpenAI secara langsung.

### Node.js: Laporan Penjualan Harian dari Data Penjualan

\`\`\`javascript
// laporan-harian.js
// Kebutuhan: npm install openai
// Simpan kunci API di variabel lingkungan OPENAI_API_KEY, jangan tulis di kode.

const fs = require('fs');
const OpenAI = require('openai');

const client = new OpenAI();

const penjualan = {
  tanggal: '2026-10-22',
  transaksi: 47,
  pemasukan: 2315000,
  menuTerlaris: 'Nasi ayam geprek',
  hariTerlemahSebelumnya: 'Senin',
};

async function buatLaporan(data) {
  const res = await client.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      {
        role: 'user',
        content:
          'Susun laporan harian warung untuk pemilik usaha. Data: ' +
          JSON.stringify(data) +
          '. Struktur: ringkasan 2 kalimat, satu hal yang menonjol, satu tindakan besok. Bahasa Indonesia, tanpa istilah akuntansi, maksimal 80 kata.',
      },
    ],
  });
  return res.choices[0].message.content;
}

async function main() {
  const laporan = await buatLaporan(penjualan);
  fs.writeFileSync(
    'laporan-2026-10-22.txt',
    laporan,
    'utf8'
  );
  console.log(laporan);
}

main().catch(console.error);
\`\`\`

### Python: Draf Pesan Tindak Lanjut Prospek Tertunda

\`\`\`python
# tindak-lanjut.py
# Kebutuhan: pip install openai
# Simpan kunci API di variabel lingkungan OPENAI_API_KEY.

import os
from openai import OpenAI

client = OpenAI()

prospek = {
    'nama': 'Bu Rani',
    'produk': 'paket katering mingguan',
    'hari_sejak_tanya': 7,
    'konteks': 'bertanya soal menu dan harga, sudah dikirim detail, belum membalas',
}

def buat_pesan(data):
    res = client.chat.completions.create(
        model='gpt-4o-mini',
        messages=[{
            'role': 'user',
            'content': (
                'Buat 1 pesan WhatsApp tindak lanjut prospek. Nama: '
                + data['nama']
                + '. Produk yang ditanya: ' + data['produk']
                + '. Sudah ' + str(data['hari_sejak_tanya'])
                + ' hari sejak bertanya. Konteks: ' + data['konteks']
                + '. Aturan: maksimal 60 kata, tanpa menagih keputusan, '
                + 'tawarkan bantuan atau informasi baru yang berguna. '
                + 'Bahasa Indonesia hangat.'
            ),
        }],
    )
    return res.choices[0].message.content

if __name__ == '__main__':
    print(buat_pesan(prospek))
\`\`\`

### PHP: Ringkasan Stok yang Perlu Dipesan Ulang

\`\`\`php
<?php
// stok-ulang.php
// Kebutuhan: composer require openai-php/client
// Simpan kunci API di variabel lingkungan OPENAI_API_KEY.

require 'vendor/autoload.php';

use OpenAI;

$stok = [
    ['bahan' => 'Tepung terigu', 'stok' => 40, 'titikPesan' => 60],
    ['bahan' => 'Gula pasir', 'stok' => 85, 'titikPesan' => 50],
    ['bahan' => 'Mentega', 'stok' => 12, 'titikPesan' => 25],
];

$perluPesan = array_filter($stok, function ($s) {
    return $s['stok'] < $s['titikPesan'];
});

$daftar = implode(', ', array_map(
    fn($s) => $s['bahan'] . ' (stok ' . $s['stok'] . ', titik pesan ' . $s['titikPesan'] . ')',
    $perluPesan
));

$client = OpenAI::client(getenv('OPENAI_API_KEY'));

$hasil = $client->chat()->create([
    'model' => 'gpt-4o-mini',
    'messages' => [['role' => 'user', 'content' =>
        'Buat pesan WhatsApp singkat ke pemasok untuk memesan bahan berikut: '
        . $daftar
        . '. Sebutkan ini pesanan rutin, minta konfirmasi harga dan jadwal antar, '
        . 'tutup dengan terima kasih. Maksimal 5 kalimat, bahasa Indonesia sopan.'
    ]],
]);

echo $hasil->choices[0]->message->content;
\`\`\`

Peringatan keamanan: kunci API hanya disimpan di variabel lingkungan server Anda, tidak pernah ditulis langsung di kode, tidak pernah diunggah ke repositori publik. Bila kunci terlanjur terekspos, segera hapus dan buat baru di dasbor OpenAI.

## Checklist Implementasi Otomasi

Tandai tiap langkah yang selesai. Satu blok per minggu bila waktu terbatas.

MINGGU 1: KEUNTUNGAN PERTAMA
- [ ] Laporan penjualan mingguan (alur kerja 1) berjalan dua kali
- [ ] Spreadsheet stok dengan titik pesan (alur kerja 2) terisi lengkap
- [ ] Satu pesanan bahan dilakukan karena baris merah, bukan karena kehabisan

MINGGU 2: PENJUALAN
- [ ] Spreadsheet prospek (alur kerja 3) berjalan, status tiap prospek terisi
- [ ] Pesan tindak lanjut hari ke-3 terkirim untuk semua prospek yang menghilang minggu lalu
- [ ] Template komplain (alur kerja 4) tersimpan di catatan HP

MINGGU 3: KONTEN DAN HARGA
- [ ] Kalender konten 30 hari (alur kerja 5) tersusun dan terisi
- [ ] Sheet harga pesaing (alur kerja 6) terisi minggu pertama
- [ ] Satu konten tayang dari kalender, bukan dari mood

MINGGU 4: KEPUTUSAN
- [ ] Pembukuan bulan pertama (alur kerja 7) selesai dengan dua rekening yang benar
- [ ] Bank ide dari keluhan (alur kerja 8) berisi minimal 10 catatan
- [ ] Rapat diri sendiri pertama (alur kerja 10) menghasilkan 3 keputusan tertulis

MASA DEPAN
- [ ] Alur Kerja 9 dipakai bila tim mulai lebih dari satu orang
- [ ] Integrasi kode dipertimbangkan bila volume laporan melebihi 20 lembar per bulan
- [ ] Alur Kerja yang tidak dipakai 3 minggu dimatikan tanpa penyesalan

`;

const lampiranMarker = '## Lampiran A. Memakai berkas Excel pendamping';
const idx = body.indexOf(lampiranMarker);
if (idx < 0) throw new Error('Lampiran A marker not found');
const bodyBefore = body.slice(0, idx);
const bodyAfter = body.slice(idx);

const ultimate = frontMatter + bodyBefore + automation.trimStart() + bodyAfter;
fs.writeFileSync(ultimatePath, ultimate);

const prompts = (ultimate.match(/^### P-\d+\./gm) || []).length;
const workflows = (ultimate.match(/^### Alur Kerja \d+/gm) || []).length;
console.log(`Ultimate rebuilt: ${prompts} prompt headers, ${workflows} workflows, ${ultimate.length} chars`);

const lint = [];
if (ultimate.includes('—')) lint.push('em-dash');
if (ultimate.includes(' → ')) lint.push('arrow');
const proseCheck = ultimate.replace(/```[\s\S]*?```/g, '').replace(/\*\*[^*]+\*\*/g, '');
const stray = proseCheck.match(/\*/g);
if (stray) lint.push(`${stray.length} stray asterisks`);
const ph = ultimate.match(/\b(?:TBD|TODO|lorem ipsum|placeholder|XXX+)\b/i);
if (ph) lint.push(`placeholder text "${ph[0]}"`);
console.log('Lint:', lint.length ? lint.join('; ') : 'clean');
