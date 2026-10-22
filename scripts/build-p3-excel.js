const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const basicPath = path.join(ROOT, 'drafts', '200-template-social-media-basic.md');
const outPath = path.join(ROOT, 'drafts', '200-template-social-media.xlsx.json');

const md = fs.readFileSync(basicPath, 'utf8');

const bagianMarkers = [
  ['## Bagian 1: Perencanaan Konten', 'Bagian 1: Perencanaan Konten'],
  ['## Bagian 2: Penulisan Caption', 'Bagian 2: Penulisan Caption'],
  ['## Bagian 3: Konten Visual', 'Bagian 3: Konten Visual'],
  ['## Bagian 4: Interaksi dan Komunitas', 'Bagian 4: Interaksi dan Komunitas'],
  ['## Bagian 5: Analitik dan Optimasi', 'Bagian 5: Analitik dan Optimasi'],
];

function findBagian(index) {
  let current = '';
  for (const [marker, label] of bagianMarkers) {
    const pos = md.indexOf(marker);
    if (pos >= 0 && pos < index) current = label;
  }
  return current;
}

const headerRe = /^### (T-\d{3})\. (.+)$/gm;
const entries = [];
let match;
while ((match = headerRe.exec(md)) !== null) {
  const start = match.index + match[0].length;
  const next = md.indexOf('\n### T-', start);
  const stop = next < 0 ? md.length : next;
  const chunk = md.slice(start, stop);

  const kapan = (chunk.match(/^Kapan pakai:\n> (.+)$/m) || [])[1] || '';
  const varsBlock = (chunk.match(/^Variabel:\n((?:- .+\n?)+)/m) || [])[1] || '';
  const variabel = varsBlock.split('\n').filter(Boolean).map((l) => l.replace(/^- /, '')).join('; ');
  const template = (chunk.match(/^Template:\n```\n([\s\S]*?)\n```/m) || [])[1] || '';
  const hasil = (chunk.match(/^Hasil yang diharapkan:\n> (.+)$/m) || [])[1] || '';

  entries.push({
    kode: match[1],
    judul: match[2].trim(),
    bagian: findBagian(match.index),
    kapan,
    template,
    variabel,
    hasil,
  });
}

if (entries.length !== 200) {
  throw new Error(`Expected 200 templates, parsed ${entries.length}`);
}

const rows = entries.map((e) => [e.kode, e.bagian, e.judul, e.kapan, e.template, e.variabel, e.hasil]);

const calendar = [
  ['1', 'Senin', 'Edukasi', 'T-050', '5 alasan keripik singkong ramah di kantong', 'carousel', 'Keripik enak belum tentu mahal.', 'Simpan postingan ini'],
  ['1', 'Rabu', 'Dapur', 'T-094', 'Proses irisan singkong 2 milimeter', 'reel', 'Irisan ini dipotong 2 milimeter, makanya renyah sampai ujung.', 'Ikuti untuk proses berikutnya'],
  ['1', 'Jumat', 'Promo', 'T-047', 'Bundling 3 rasa hemat 15 ribu', 'feed image', 'Satu toples kurang, ambil tiga.', 'Pesan lewat link bio'],
  ['1', 'Sabtu', 'Pelanggan', 'T-120', 'Repost unboxing pembeli Cimahi', 'story', 'Sampai Cimahi, masih utuh dan masih renyah.', 'Tag kami di story Anda'],
  ['2', 'Senin', 'Edukasi', 'T-051', 'Ciri keripik balado asli versus taburan bubuk', 'carousel', 'Ciri pertama ada di warnanya.', 'Jawab di komentar'],
  ['2', 'Rabu', 'Dapur', 'T-093', 'Timbangan bumbu balado diukur presisi', 'reel', 'Takaran ini yang bikin pedasnya konsisten.', 'Tanya rasa favorit Anda'],
  ['2', 'Jumat', 'Promo', 'T-057', 'Gratis ongkir Bandung Raya akhir pekan', 'feed image', 'Sore ini pesan, Sabtu sampai.', 'Cek link bio'],
  ['2', 'Sabtu', 'Interaksi', 'T-123', 'Kuis tebak jumlah cabai per toples', 'story quiz', 'Berapa cabai dalam satu toples? Tebak.', 'Pemenang diumumkan Senin'],
  ['3', 'Senin', 'Edukasi', 'T-110', 'Cara simpan keripik agar renyah 2 bulan', 'carousel', 'Jangan simpan di kulkas.', 'Simpan tips ini'],
  ['3', 'Rabu', 'Dapur', 'T-094', 'Resep bumbu balado warisan keluarga', 'reel', 'Resep ini sudah 12 tahun kami pakai.', 'Follow untuk cerita lengkap'],
  ['3', 'Jumat', 'Promo', 'T-060', 'Pre-order varian baru keju balado', 'feed', 'Rasa baru yang menantang: pedas lalu gurih.', 'Daftar pre-order di bio'],
  ['3', 'Sabtu', 'Pelanggan', 'T-145', 'Testimoni video reseller Bandung', 'story', 'Dia jual 40 toples sebulan dari rumah.', 'Minat reseller, DM kami'],
  ['4', 'Senin', 'Edukasi', 'T-051', 'Bandingkan daftar bahan dengan produsen massal', 'carousel', 'Baca daftar bahan di kemasan Anda sekarang.', 'Bandingkan punya kami'],
  ['4', 'Rabu', 'Dapur', 'T-093', 'Quality control, batch yang tidak lolos', 'reel', '1 dari 10 batch tidak lolos uji kami.', 'Follow'],
  ['4', 'Jumat', 'Promo', 'T-058', 'Beli 2 gratis mini pack akhir bulan', 'feed image', 'Stok akhir bulan paling banyak.', 'Link bio sekarang'],
  ['4', 'Sabtu', 'Pelanggan', 'T-120', 'Rekap foto ulasan bulan ini', 'carousel', '1.200 ulasan, ini yang paling kami ingat.', 'Ulasan Anda berikutnya'],
];

const platforms = [
  ['Instagram', '11.00-13.00 dan 19.00-21.00 (uji lewat T-169)', 'Reel untuk jangkauan, carousel untuk disimpan', 'Hook di kalimat pertama', '10-15, campuran besar-menengah-kecil', 'Balas komentar 2 jam pertama'],
  ['Facebook', '13.00-16.00', 'Video pendek dan posting komunitas', '2-4 kalimat, langsung ke inti', '2-3 saja, fokus konten', 'Balas semua komentar cepat'],
  ['TikTok', '12.00-14.00 dan 19.00-23.00', 'Video 15-35 detik dengan hook visual', 'Singkat, teks di video lebih penting', '3-5 hashtag spesifik', 'Suara asli alat kerja menarik penonton'],
  ['LinkedIn', 'Selasa-Kamis 07.00-09.00', 'Tulisan pengalaman dengan angka', 'Panjang 150-250 kata', '2-3 hashtag profesional', 'Buka dengan pengalaman pribadi nyata'],
  ['WhatsApp Business', '08.00-10.00 dan 19.00-21.00', 'Status sebagai story kedua, katalog lengkap', 'Pesan singkat personal', 'Tidak perlu hashtag', 'Pakai label untuk memilah pelanggan'],
];

const checklist = [
  ['Hook menahan di kalimat pertama', 'Pembaca berhenti menggulir saat membaca kalimat pertama', ''],
  ['Manfaat konkret tersurat', 'Ada manfaat spesifik, bukan klaim kosong', ''],
  ['CTA jelas', 'Satu permintaan tindakan yang tidak ambigu', ''],
  ['Visual tajam dan konsisten', 'Cahaya cukup, warna konsisten dengan konten lain', ''],
  ['Caption bebas salah ketik', 'Sudah dibaca ulang sekali sebelum posting', ''],
  ['Hashtag campuran tiga lapis', '3 besar, 5 menengah, 5 kecil, maksimal 15', ''],
  ['Detail promo lengkap', 'Harga, jam, batas stok, dan cara order tertulis', ''],
  ['Waktu posting sesuai kalender', 'Tayang di slot yang direncanakan', ''],
];

const hashtags = [
  ['Kuliner', '#kuliner #makanan #jajanan', '#camilansehat #kulinerindonesia #makananrumahan', '#keripikbalado #camilanbandung #usahakuliner'],
  ['Fashion', '#ootd #fashion', '#ootdindonesia #outfitdaily #fashionlokal', '#batikindonesia #butiklokal #outfitoftheday'],
  ['Kecantikan', '#skincare #beauty', '#skincarelokal #perawatankulit #glowingskin', '#skincareumkm #sunscreendaily #racunskincare'],
  ['Jasa kebersihan', '#laundry #laundryservice', '#laundrykiloan #laundrypremium #jasacuci', '#laundrysurabaya #laundryexpress #cucisetrika'],
  ['Katering', '#catering #makansehat', '#cateringsehat #kateringharian #menuhealthy', '#cateringjakarta #dietsehatmurah #langgananmakan'],
  ['Kerajinan', '#handmade #kerajinantangan', '#handmadeindonesia #produklokal #craftindonesia', '#taskulithandmade #leathercraft #bandungcraft'],
  ['Edukasi', '#belajar #edukasi', '#tipsbelajar #edukasiindonesia #ilmupengetahuan', '#belajarbisnisonline #kelasumkm #kursusbisnis'],
  ['Kesehatan', '#sehat #fitness', '#gayahidupsehat #fitnessindonesia #olahraga', '#trainersurabaya #dietberbudaya #senamrumah'],
];

const workbook = {
  title: '200 Template AI untuk Social Media Management',
  sheets: [
    {
      name: 'Perpustakaan Templat',
      headers: ['Kode', 'Bagian', 'Judul', 'Kapan Pakai', 'Template', 'Variabel', 'Hasil yang Diharapkan'],
      rows,
    },
    {
      name: 'Kalender Konten',
      headers: ['Minggu', 'Hari', 'Jenis Konten', 'Kode Template', 'Ide Konten', 'Format', 'Caption Hook', 'CTA'],
      rows: calendar,
    },
    {
      name: 'Pelacak Analitik',
      headers: ['Minggu', 'Tanggal', 'Followers', 'Reach', 'Engagement Rate', 'Klik Link', 'Pesan Masuk', 'Vs Minggu Lalu', 'Penyebab', 'Tindakan Minggu Ini'],
      rows: Array.from({ length: 12 }, (_, i) => [`M${i + 1}`, '', '', '', '', '', '', '', '', '']),
    },
    {
      name: 'Bank Hashtag',
      headers: ['Industri', 'Hashtag Besar', 'Hashtag Menengah', 'Hashtag Kecil dan Spesifik'],
      rows: hashtags,
    },
    {
      name: 'Catatan Performa',
      headers: ['Tanggal', 'Kode Template', 'Judul Konten', 'Format', 'Views', 'Like', 'Komentar', 'Share', 'Save', 'Kesimpulan'],
      rows: Array.from({ length: 30 }, () => ['', '', '', '', '', '', '', '', '', '']),
    },
    {
      name: 'Praktik Terbaik Platform',
      headers: ['Platform', 'Waktu Posting Layak Diuji', 'Jenis Konten Prioritas', 'Panjang Caption', 'Strategi Hashtag', 'Tips Engagement'],
      rows: platforms,
    },
    {
      name: 'Checklist Kualitas',
      headers: ['Butir Periksa', 'Kriteria', 'Status'],
      rows: checklist,
    },
  ],
};

fs.writeFileSync(outPath, JSON.stringify(workbook, null, 2));
console.log(`Workbook written: ${outPath}`);
console.log(`Perpustakaan Templat rows: ${rows.length} (first: ${rows[0][0]}, last: ${rows[rows.length - 1][0]})`);
const bagianCounts = {};
rows.forEach((r) => { bagianCounts[r[1]] = (bagianCounts[r[1]] || 0) + 1; });
console.log('Per bagian:', JSON.stringify(bagianCounts));
