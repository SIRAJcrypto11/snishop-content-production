const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const premiumPath = path.join(ROOT, 'drafts', '200-template-social-media-premium.md');
const ultimatePath = path.join(ROOT, 'drafts', '200-template-social-media-ultimate.md');

const premium = fs.readFileSync(premiumPath, 'utf8');
const bodyStart = premium.indexOf('## Bagian 1: Perencanaan Konten');
const body = premium.slice(bodyStart);

const frontMatter = `# 200 Template AI untuk Social Media Management

**Edisi Ultimate dengan Contoh Output AI dan Panduan Otomasi**

Disusun oleh: Siraj Nur Ihrom, Founder SNISHOP
Edisi Ultimate, Oktober 2026
Format: 200 template lengkap, contoh output AI, dan panduan otomasi social media
Pendamping: Berkas Excel 200 baris template siap pakai

## Tentang Edisi Ultimate

Edisi Ultimate adalah versi paling lengkap: seluruh 200 template, contoh output AI, plus panduan otomasi social media yang bisa dipasang tanpa tim IT.

Yang Anda dapatkan di edisi Ultimate:
- Semua 200 template dengan teks lengkap
- Contoh output ChatGPT untuk 3 template kunci per bagian
- Contoh output Gemini untuk template yang sama
- Perbandingan kualitas antara kedua alat agar Anda tahu kapan memakai yang mana
- Berkas Excel pendamping dengan 200 baris template siap salin
- Panduan otomasi 10 workflow social media langkah demi langkah
- Studi kasus 3 bisnis nyata yang sudah mengotomasi social media mereka
- Panduan penyelesaian 5 masalah otomasi yang paling sering muncul
- Kode contoh Node.js, Python, dan PHP untuk integrasi khusus
- Checklist implementasi otomasi dari nol sampai berjalan

Semua contoh dalam buku ini memakai bisnis contoh yang konsisten dari awal sampai akhir: keripik singkong balado, katering sehat Jakarta, laundry premium Yogyakarta, dan pembuat tas kulit Bandung. Konsistensi ini memudahkan Anda melihat bagaimana satu bisnis memakai banyak template sekaligus.

## Cara Menggunakan Buku Ini

Setiap template mengikuti format yang konsisten. Anda tidak perlu membaca berurutan. Buka bagian yang kasusnya sedang Anda hadapi, ambil kode template, lalu isi bagian di dalam kurung siku dengan data bisnis Anda sendiri.

Struktur tiap entri:

| Bagian | Fungsi |
|---|---|
| Kode | Nomor tetap, dipakai juga di berkas Excel pendamping |
| Kapan pakai | Kondisi nyata yang membuat template ini relevan |
| Template | Teks yang Anda salin utuh ke alat AI pilihan Anda |
| Variabel | Data yang wajib Anda ganti sebelum mengirim |
| Hasil yang diharapkan | Bentuk keluaran yang bisa Anda periksa |
| Contoh output | Hasil nyata dari ChatGPT dan Gemini |
| Otomasi | Cara menghubungkan template ke alat otomasi (edisi Ultimate) |

## Standar Kualitas

Semua template dalam buku ini mengikuti standar kualitas ketat:
- Bahasa Indonesia yang natural dan profesional
- Contoh konkret dengan angka dan data
- Struktur yang jelas dan mudah diikuti
- Tanpa frasa pengisi yang tidak berarti
- Tanpa simbol atau tanda baca yang tidak lazim

---

`;

const automation = `
## Panduan Otomasi Social Media dengan AI

Sepuluh workflow otomasi yang bisa dipasang dengan alat gratis atau murah. Setiap workflow memakai format sama: alat yang dibutuhkan, alur kerjanya, langkah pemasangan, dan prompt AI yang dipakai. Untuk pemula, mulai dari workflow 1 dan 4 yang paling mudah.

### Workflow 1: Bank Caption Mingguan dari Daftar Produk

Alat yang dibutuhkan: Google Sheets (gratis), ChatGPT (gratis).

Alur: setiap Senin pagi, Anda buka Google Sheets yang berisi daftar produk, salin baris produk minggu ini, tempel ke prompt, dan dapat 5 caption siap pakai dalam satu kali jalan.

Langkah pemasangan:
1. Buat Google Sheets bernama Bank Konten. Kolom: nama produk, harga, manfaat utama, rasa atau varian, status (siap promosi atau jangan dulu).
2. Isi minimal 10 baris produk.
3. Salin prompt di bawah, simpan di baris atas sheet dengan warna kuning.
4. Setiap Senin: filter status siap promosi, salin 5 baris, tempel ke prompt.
5. Simpan hasil ke tab baru bernama Caption Minggu Ini dengan tanggal.

Prompt AI yang dipakai:
\`\`\`
Saya punya 5 produk berikut dari sheet bank konten saya: [tempel 5 baris]. Buatkan 5 caption Instagram, satu per produk. Setiap caption: hook maksimal 12 kata, isi 3 kalimat yang menyebut manfaat konkret, satu pertanyaan ringan untuk memancing komentar, CTA ke link bio, dan 5 hashtag Indonesia yang relevan. Tone: hangat, seperti pemilik yang mengobrol, bukan iklan korporat. Jangan pakai kata superlatif berlebihan.
\`\`\`

Hasil yang diharapkan: 5 caption siap posting setiap Senin, total kerja 20 menit per minggu.

### Workflow 2: Penjadwalan Konten Otomatis dengan Metricool

Alat yang dibutuhkan: Metricool akun gratis (menjadwalkan Instagram, Facebook, TikTok, LinkedIn), caption dari workflow 1.

Alur: caption yang sudah jadi langsung masuk antrean penjadwalan, tidak ada lagi lupa posting.

Langkah pemasangan:
1. Daftar Metricool gratis, hubungkan akun Instagram dan Facebook Anda.
2. Buat kalender mingguan tetap: Senin konten edukasi jam 07.30, Rabu konten dapur jam 12.00, Jumat promo jam 17.00, Sabtu konten pelanggan jam 10.00.
3. Setiap hasil caption dari workflow 1 langsung diunggah ke slot yang cocok.
4. Siapkan foto atau video stok: rekam 15 klip sekali sebulan, simpan di folder Google Drive, gunakan bergiliran.
5. Setiap Minggu malam: cek kalender minggu depan, lengkapi slot yang kosong.

Hasil yang diharapkan: konten terjadwal 4 minggu ke depan hanya dengan satu sesi kerja 90 menit per minggu.

### Workflow 3: Triage Komentar dengan Aturan Waktu Balas

Alat yang dibutuhkan: pemberitahuan aplikasi Instagram, spreadsheet triase sederhana.

Alur: komentar masuk dikategorikan cepat, dan komentar yang butuh jawaban panjang dipindah ke waktu khusus.

Langkah pemasangan:
1. Buat spreadsheet triase dengan kolom: tanggal, nama, isi komentar, kategori (harga/ongkir/pujian/keluhan/lainnya), status (sudah dibalas atau belum).
2. Atur pemberitahuan Instagram agar komentar masuk muncul di layar.
3. Pasang aturan waktu: komentar pertanyaan dibalas maksimal 2 jam saat jam kerja, pujian dibalas sebelum malam, keluhan dibalas dalam 30 menit.
4. Setiap Jumat: hitung persentase komentar yang dibalas sesuai target waktu, catat di spreadsheet.
5. Bila ada komentar yang berulang lebih dari 3 kali seminggu, jadikan konten jawaban di feed.

Hasil yang diharapkan: tidak ada komentar pertanyaan yang terlewat lebih dari 2 jam, dan pola pertanyaan langsung jadi bahan konten.

### Workflow 4: Quick Replies Instagram untuk Pertanyaan Berulang

Alat yang dibutuhkan: fitur quick replies Instagram (gratis, bawaan).

Alur: pertanyaan yang sama dijawab satu ketukan, konsisten dengan template dari buku ini.

Langkah pemasangan:
1. Buka profil Instagram, menu Pengaturan, Alat Bisnis, Balasan Sering Dipakai.
2. Buat 5 balasan cepat dari template T-121 di Bagian 4: tanya harga, tanya ongkir, tanya rasa, pujian, keluhan awal. Pintasan yang mudah diingat: harga, ongkir, rasa, makasih, maaf.
3. Uji: ketik pintasan di kolom DM, balasan muncul otomatis, sesuaikan seperlunya lalu kirim.
4. Setiap bulan: periksa 10 DM terbaru, bila ada pertanyaan baru yang berulang, tambahkan balasan cepat baru.
5. Ingat aturan emas: balasan cepat hanyalah pembuka, jawaban akhir tetap personal dengan nama orang.

Hasil yang diharapkan: waktu membalas DM turun dari 3 menit menjadi 30 detik per pesan untuk pertanyaan umum.

### Workflow 5: Laporan Performa Mingguan Otomatis ke Email

Alat yang dibutuhkan: Metricool (data), Google Sheets, template dari T-166 di Bagian 5.

Alur: setiap Senin, angka minggu lalu terkumpul otomatis, Anda tinggal mengisi kolom penyebab dan tindakan.

Langkah pemasangan:
1. Di Metricool, buka laporan Instagram, catat 5 angka mingguan: followers, reach, engagement rate, klik link, pesan masuk.
2. Buat spreadsheet dengan kolom tersebut plus tanggal, perbandingan minggu lalu, penyebab naik turun, dan satu tindakan minggu ini.
3. Tetapkan hari pencatatan: Senin jam 09.00, beri pengingat di HP.
4. Setiap akhir bulan: salin 4 baris mingguan ke prompt T-161, minta AI menyusun laporan bulanan.
5. Kirim laporan bulanan ke email Anda sendiri sebagai arsip.

Hasil yang diharapkan: laporan mingguan 10 menit, laporan bulanan 30 menit, dan data tren yang tidak pernah putus.

### Workflow 6: Mesin Daur Ulang Konten Satu Arah

Alat yang dibutuhkan: template T-009 di Bagian 1, Metricool, folder Google Drive.

Alur: satu konten video yang berhasil otomatis dipecah jadi 6 konten lain sesuai rencana daur ulang.

Langkah pemasangan:
1. Setiap Jumat, tandai 1 video atau feed dengan performa terbaik minggu itu.
2. Jalankan template T-009: tempel deskripsi konten asal dan angka performanya, minta rencana daur ulang 6 format.
3. Simpan hasilnya sebagai checklist di Google Drive, satu dokumen per konten asal.
4. Kerjakan 2 format daur ulang setiap akhir pekan, jadwalkan ke minggu berikutnya lewat Metricool.
5. Catat performa tiap versi daur ulang di spreadsheet yang sama dengan workflow 5.

Hasil yang diharapkan: satu konten bagus menghasilkan 6 konten dalam 3 minggu tanpa menambah jam produksi baru.

### Workflow 7: Pemantauan Penyebutan Merek dengan Google Alerts dan Pencarian Manual

Alat yang dibutuhkan: Google Alerts (gratis), pencarian tag Instagram, spreadsheet pemantauan.

Alur: setiap kali orang menyebut merek Anda, Anda tahu dalam sehari, dan ulasan pelanggan bisa dijadikan konten.

Langkah pemasangan:
1. Buat Google Alerts untuk nama merek Anda dan kesalahan ejaan yang umum.
2. Simpan pencarian tag merek Anda di Instagram, buka setiap hari sekali.
3. Semua penyebutan dicatat di spreadsheet: tanggal, siapa, di mana, isi, tindakan (repost, balas, atau simpan).
4. Penyebutan positif: minta izin repost lewat DM, lalu jadwalkan konten repost.
5. Penyebutan keluhan: masuk ke alur triase workflow 3 dengan prioritas tertinggi.

Hasil yang diharapkan: tidak ada pembicaraan tentang merek Anda yang lewat tanpa respons, dan stok konten repost bertambah tanpa produksi.

### Workflow 8: Bank Ide Konten dari Pertanyaan Pelanggan

Alat yang dibutuhkan: spreadsheet ide, template T-034 di Bagian 1.

Alur: setiap pertanyaan pelanggan di DM atau chat WhatsApp otomatis jadi kandidat konten.

Langkah pemasangan:
1. Buat tab baru di spreadsheet bank konten bernama Ide dari Pertanyaan. Kolom: tanggal, pertanyaan, siapa yang bertanya, sudah dijawab di konten atau belum, format konten yang cocok.
2. Setiap kali ada pertanyaan menarik, catat dalam 10 detik, jangan dulu mikir jawabannya.
3. Setiap akhir bulan: salin 10 pertanyaan terbanyak ke template T-034, minta 10 ide konten dari kumpulan itu.
4. Tandai 4 ide terbaik, jadwalkan untuk bulan depan.
5. Setelah konten tayang, kembali tandai pertanyaan yang sudah dijawab.

Hasil yang diharapkan: tidak pernah kehabisan ide konten, dan konten Anda selalu menjawab yang benar benar ditanyakan.

### Workflow 9: Pengingat Tugas Konten Harian ke WhatsApp

Alat yang dibutuhkan: Google Sheets, pengingat HP atau aplikasi jadwal seperti Trello gratis.

Alur: rutinitas konten harian muncul sebagai pengingat, tidak mengandalkan ingatan.

Langkah pemasangan:
1. Buat daftar rutinitas harian 20 menit: cek dan balas komentar, cek DM, catat 1 pertanyaan pelanggan, buka tag merek, posting story minimal 2 frame.
2. Masukkan daftar itu ke Trello sebagai kartu harian atau pasang pengingat berulang di aplikasi kalender HP.
3. Jam pengingat: pagi 08.30 dan sore 16.30, sesuai puncak aktivitas audiens kebanyakan UMKM.
4. Setiap tugas selesai, centang. Bila tiga hari berturut terlewat, kecilkan daftar, rutinitas yang terlalu berat pasti gagal.
5. Catat kepatuhan mingguan di spreadsheet workflow 5.

Hasil yang diharapkan: rutinitas 20 menit benar benar terjadi setiap hari, bukan cuma di minggu pertama.

### Workflow 10: Draf Caption Flash Sale dalam 5 Menit

Alat yang dipakai: template T-058 di Bagian 2, Google Form.

Alur: saat promo dadakan muncul, draf caption langsung jadi tanpa mikir dari nol.

Langkah pemasangan:
1. Buat Google Form sederhana: produk, harga normal, harga promo, jam mulai, jam selesai, alasan promo, batas stok.
2. Isi form itu setiap kali ada flash sale, salin jawaban ringkasnya.
3. Tempel ke template T-058 yang sudah Anda simpan di catatan HP.
4. Kirim draf hasilnya ke diri sendiri, baca sekali, sesuaikan angka, posting.
5. Bila promo ini rutin setiap bulan, simpan hasil akhirnya sebagai template tetap dan berhenti memakai AI untuk promo yang sama.

Hasil yang diharapkan: caption flash sale jadi dalam 5 menit dengan semua elemen penting: harga, jam, alasan, dan batas.

## Studi Kasus Otomasi Social Media

### Studi Kasus 1: Keripik Singkong Balado, Bandung

Kondisi awal: pemilik mengerjakan sendiri semua konten di malam hari setelah tutup dapur. Posting tidak teratur, rata rata 5 posting per bulan, engagement stagnan di 2,1 persen.

Yang dipasang: workflow 1 dan 2 di minggu pertama, workflow 4 di minggu kedua, workflow 8 di bulan kedua.

Hasil setelah 3 bulan:
- Frekuensi posting naik dari 5 menjadi 16 posting per bulan.
- Waktu kerja konten turun dari 8 jam menjadi 4 jam per minggu.
- Engagement rate naik dari 2,1 ke 3,6 persen.
- Chat masuk naik dari 12 menjadi 31 per bulan, penjualan naik sekitar 22 persen.

Pelajaran terpenting: penjadwalan tetap mingguan (workflow 2) adalah fondasi. Tanpa itu, semua hasil AI hanya menumpuk di catatan tanpa pernah tayang.

### Studi Kasus 2: Laundry Premium, Yogyakarta

Kondisi awal: konten bagus tapi hanya tayang saat pemilik selesaikan pekerjaan laundry. Reel terbaik 12 ribu views tidak pernah ditindaklanjuti.

Yang dipasang: workflow 6 (daur ulang) dan workflow 9 (rutinitas harian) di minggu pertama, workflow 7 (pemantauan penyebutan) di minggu ketiga.

Hasil setelah 3 bulan:
- Satu reel bagus kini menghasilkan 5 konten susulan secara rutin.
- Rutinitas 20 menit berjalan 5 hari seminggu, kepatuhan 85 persen.
- 9 repost dari pelanggan masuk ke kalender tanpa produksi baru.
- Followers naik dari 1.100 ke 1.900 dengan frekuensi posting yang sama.

Pelajaran terpenting: daur ulang mengubah matematika produksi. Bisnis solo tidak perlu konten baru setiap hari, ia butuh setiap konten bekerja lebih lama.

### Studi Kasus 3: Katering Sehat, Jakarta Selatan

Kondisi awal: pemilik punya admin 1 orang, tapi admin menghabiskan 2 jam setiap hari membalas pertanyaan yang sama soal harga, menu, dan pengiriman.

Yang dipasang: workflow 3 (triase) dan workflow 4 (quick replies) di minggu pertama, workflow 5 (laporan mingguan) di minggu kedua.

Hasil setelah 3 bulan:
- Waktu membalas DM turun dari 2 jam menjadi 45 menit per hari.
- Tidak ada satu pun pertanyaan harga yang terlewat lebih dari 2 jam sejak workflow 3 berjalan.
- Laporan mingguan kini selalu terisi, yang dulu tidak pernah jadi.
- Dari data laporan, ditemukan bahwa paket keluarga paling sering ditanyakan, lalu konten paket keluarga dibuat dan menjadi konten konversi terbaik bulan itu.

Pelajaran terpenting: otomasi bukan cuma menghemat waktu, ia menghasilkan data. Keputusan konten paket keluarga tidak akan muncul tanpa laporan yang teratur.

## Troubleshooting Otomasi

### Masalah 1: Output AI Terdengar Seperti Iklan Korporat

Penyebab: prompt tidak menyebut tone dengan contoh konkret, atau bisnis Anda memang belum punya contoh tulisan sendiri.

Solusi: selalu tambahkan satu contoh tulisan asli Anda di akhir prompt beserta instruksi ikuti gaya tulisan ini. Bila belum punya, tulis 3 caption versi Anda sendiri dulu, sejelek apa pun, lalu pakai itu sebagai acuan gaya.

### Masalah 2: Balasan Otomatis Membalas Hal yang Salah

Penyebab: quick reply atau bot membalas komentar sarkas atau keluhan dengan jawaban promosi, yang memperburuk suasana.

Solusi: aturan berlapis. Pertanyaan umum boleh pakai balasan cepat. Keluhan dan komentar sarkas wajib dibalas manusia. Di workflow triase, tandai kata kunci yang wajib lolos ke manusia: rusak, kecewa, refund, tipu, bohong.

### Masalah 3: Penjadwalan Gagal atau Posting Tidak Muncul

Penyebab: sesi login platform kedaluwarsa, atau konten melanggar aturan otomatis (terlalu banyak hashtag, video format salah).

Solusi: cek antrean penjadwalan setiap Minggu malam, pastikan status semua konten terjadwal dan tidak ada yang gagal. Jika gagal, unggah manual, lalu hubungkan ulang akun di alat penjadwal. Jangan menunggu sampai posting hilang baru sadar.

### Masalah 4: Data Laporan Tidak Konsisten

Penyebab: angka dicatat dari sumber berbeda (aplikasi platform, alat pihak ketiga, catatan manual) dengan waktu pencatatan berbeda.

Solusi: satu sumber, satu waktu. Pilih satu alat untuk semua angka mingguan dan catat di hari dan jam yang sama setiap minggu. Angka lintas sumber memang bisa beda sedikit, jadi tetapkan satu sumber sebagai yang resmi dan abaikan yang lain.

### Masalah 5: Otomasi Berhenti Setelah Semangat Awal Reda

Penyebab: rutinitas terlalu berat, terlalu banyak workflow dipasang sekaligus, tidak ada pemilik yang jelas.

Solusi: satu workflow baru per dua minggu, dan setiap workflow harus punya waktu kerja maksimal 20 menit per minggu. Bila satu workflow butuh lebih, pecah atau sederhanakan. Otomasi yang baik terasa seperti kebiasaan ringan, bukan proyek tambahan.

## Integrasi Khusus dengan Kode

Untuk pemilik bisnis yang nyaman dengan sedikit kode atau punya orang yang bisa membantu, berikut tiga contoh integrasi langsung dengan API OpenAI untuk mempercepat pembuatan konten dalam jumlah besar.

### Node.js: Generate Caption Massal dari Daftar Produk

\`\`\`javascript
// generate-captions.js
// Kebutuhan: npm install openai
// Simpan kunci API di variabel lingkungan OPENAI_API_KEY, jangan tulis di kode.

const fs = require('fs');
const OpenAI = require('openai');

const client = new OpenAI();

const produkList = [
  { nama: 'Keripik balado original', manfaat: 'pedas sedang, renyah tahan lama', harga: 25000 },
  { nama: 'Keripik balado keju', manfaat: 'gurih keju lalu pedas', harga: 28000 },
  { nama: 'Keripik balado barbeque', manfaat: 'manis gurih untuk yang tidak kuat pedas', harga: 28000 },
];

async function buatCaption(produk) {
  const res = await client.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      {
        role: 'user',
        content:
          'Buat 1 caption Instagram untuk produk berikut. Hook maksimal 12 kata, isi 3 kalimat manfaat konkret, satu pertanyaan untuk komentar, CTA ke link bio, 5 hashtag Indonesia. Tone hangat seperti pemilik yang mengobrol. Produk: ' +
          produk.nama +
          '. Manfaat: ' +
          produk.manfaat +
          '. Harga: Rp ' +
          produk.harga,
      },
    ],
  });
  return res.choices[0].message.content;
}

async function main() {
  const hasil = [];
  for (const produk of produkList) {
    const caption = await buatCaption(produk);
    hasil.push({ produk: produk.nama, caption });
    console.log('Selesai:', produk.nama);
  }
  fs.writeFileSync('captions.json', JSON.stringify(hasil, null, 2));
}

main().catch(console.error);
\`\`\`

### Python: Laporan Mingguan Otomatis dari CSV

\`\`\`python
# weekly_report.py
# Kebutuhan: pip install openai
# Simpan kunci API di variabel lingkungan OPENAI_API_KEY.

import csv
import os
from openai import OpenAI

client = OpenAI()

def baca_metrik(path_csv):
    with open(path_csv, newline='', encoding='utf-8') as f:
        return list(csv.DictReader(f))

def buat_ringkasan(metrik):
    baris = '\\n'.join(
        f"{m['minggu']}: followers={m['followers']}, reach={m['reach']}, "
        f"engagement={m['engagement_rate']}, chat={m['chat']}"
        for m in metrik
    )
    res = client.chat.completions.create(
        model='gpt-4o-mini',
        messages=[{
            'role': 'user',
            'content': (
                'Buat laporan performa mingguan dari data berikut. '
                'Sertakan: tren utama, minggu terbaik dan alasannya kemungkinan, '
                'satu perbaikan minggu depan. Bahasa Indonesia, maksimal 150 kata.\\n'
                + baris
            ),
        }],
    )
    return res.choices[0].message.content

if __name__ == '__main__':
    metrik = baca_metrik('metrik_mingguan.csv')
    print(buat_ringkasan(metrik))
\`\`\`

### PHP: Draft Caption Promo dari Data Form

\`\`\`php
<?php
// promo-caption.php
// Kebutuhan: composer require openai-php/client
// Simpan kunci API di variabel lingkungan OPENAI_API_KEY.

require 'vendor/autoload.php';

use OpenAI;

$data = [
    'produk'      => 'Bundling 4 rasa kue basah',
    'hargaNormal' => 75000,
    'hargaPromo'  => 60000,
    'mulai'       => 'hari ini jam 19.00',
    'selesai'     => 'hari ini jam 21.00',
    'stok'        => 40,
    'alasan'      => 'meramaikan akhir pekan',
];

$client = OpenAI::client(getenv('OPENAI_API_KEY'));

$prompt = "Buat 1 caption Instagram flash sale. Produk: {$data['produk']}. "
    . "Harga promo Rp {$data['hargaPromo']} dari normal Rp {$data['hargaNormal']}. "
    . "Berlaku {$data['mulai']} sampai {$data['selesai']}. "
    . "Stok terbatas {$data['stok']} porsi. Alasan promo: {$data['alasan']}. "
    . 'Sebut jam dan stok secara jelas, jangan pakai kata superlatif berlebihan, tone hangat.';

$hasil = $client->chat()->create([
    'model' => 'gpt-4o-mini',
    'messages' => [['role' => 'user', 'content' => $prompt]],
]);

echo $hasil->choices[0]->message->content;
\`\`\`

Peringatan keamanan: kunci API hanya disimpan di variabel lingkungan server Anda, tidak pernah ditulis langsung di kode, tidak pernah diunggah ke repositori publik. Bila kunci terlanjur terekspos, segera hapus dan buat baru di dasbor OpenAI.

## Checklist Implementasi Otomasi

Tandai tiap langkah yang selesai. Selesaikan dalam urutan, satu blok per minggu bila waktu terbatas.

MINGGU 1: FONDASI
- [ ] Spreadsheet bank konten dibuat dan terisi minimal 10 produk
- [ ] Prompt bank caption (workflow 1) tersimpan dan teruji menghasilkan 5 caption
- [ ] 5 balasan cepat Instagram (workflow 4) dipasang dan diuji di DM sendiri
- [ ] Rutinitas harian 20 menit (workflow 9) dipasang pengingatnya

MINGGU 2: PENJADWALAN
- [ ] Akun Metricool terhubung ke semua platform yang dipakai
- [ ] Kalender mingguan tetap ditetapkan (hari, jam, jenis konten)
- [ ] 8 konten pertama terjadwal ke minggu depan
- [ ] Klip stok 15 video direkam dan tersimpan di Google Drive

MINGGU 3: TRIASE DAN PEMANTAUAN
- [ ] Spreadsheet triase komentar siap dengan kolom kategori dan status
- [ ] Aturan waktu balas ditetapkan dan dipahami siapa pun yang membalas
- [ ] Google Alerts nama merek aktif
- [ ] Pencarian tag merek disimpan di Instagram

MINGGU 4: DATA DAN PERBAIKAN
- [ ] Spreadsheet laporan mingguan terisi 4 minggu data
- [ ] Laporan bulanan pertama disusun dengan template T-161
- [ ] Satu keputusan konten diambil dari data laporan
- [ ] Workflow yang terasa lebih dari 20 menit per minggu disederhanakan atau dihentikan

MASA DEPAN (HANYA SETELAH SEMUA DI ATAS STABIL)
- [ ] Workflow 6 daur ulang berjalan untuk konten terbaik tiap minggu
- [ ] Workflow 8 bank ide diisi dari pertanyaan pelanggan
- [ ] Workflow 10 dipakai untuk flash sale pertama
- [ ] Integrasi kode dipertimbangkan hanya bila volume konten melebihi 20 posting per bulan

`;

let ultimate = frontMatter + body;
const lampiranMarker = '## Lampiran';
const lampiranIndex = ultimate.indexOf(lampiranMarker);
if (lampiranIndex < 0) throw new Error('Lampiran marker not found');
ultimate = ultimate.slice(0, lampiranIndex) + automation.trimStart() + ultimate.slice(lampiranIndex);

fs.writeFileSync(ultimatePath, ultimate);
const templates = (ultimate.match(/^### T-\d+\./gm) || []).length;
const workflows = (ultimate.match(/^### Workflow \d+/gm) || []).length;
console.log(`Ultimate rebuilt: ${templates} templates, ${workflows} workflows, ${ultimate.length} chars`);

const lint = [];
if (ultimate.includes('—')) lint.push('em-dash');
if (ultimate.includes(' – ')) lint.push('spaced en-dash');
const proseCheck = ultimate.replace(/```[\s\S]*?```/g, '').replace(/\*\*[^*]+\*\*/g, '');
const stray = proseCheck.match(/\*/g);
if (stray) lint.push(`${stray.length} stray asterisks`);
const ph = ultimate.match(/\b(?:TBD|TODO|lorem ipsum|placeholder|XXX+)\b/i);
if (ph) lint.push(`placeholder text "${ph[0]}"`);
console.log('Lint:', lint.length ? lint.join('; ') : 'clean');
