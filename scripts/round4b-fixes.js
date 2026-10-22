const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const D = (f) => path.join(ROOT, 'drafts', f);

const files = {
  p2: [
    '300-prompt-ai-untuk-copywriting-dan-iklan-digital.md',
    '300-prompt-copywriting-premium.md',
    '300-prompt-copywriting-ultimate.md',
  ],
  p3: '200-template-social-media-basic.md',
};

function apply(file, fixes) {
  let content = fs.readFileSync(file, 'utf8');
  let applied = 0;
  const misses = [];
  for (const [from, to] of fixes) {
    if (content.includes(from)) {
      content = content.split(from).join(to);
      applied++;
    } else {
      misses.push(from.slice(0, 90));
    }
  }
  fs.writeFileSync(file, content);
  return { applied, total: fixes.length, misses };
}

const p2Fixes = [
  ['Hindari tekanan berlebihan atau deadline palsu', 'Hindari tekanan berlebihan atau batas waktu palsu'],
  ['(4) Deadline dan cara pengumuman pemenang', '(4) Batas waktu dan cara pengumuman pemenang'],
  ['(5) Deadline jika ada', '(5) Batas waktu jika ada'],
  ['(4) Timeline posting. Buat tabel yang memudahkan eksekusi', '(4) Linimasa posting. Buat tabel yang memudahkan eksekusi'],
  ['(6) Timeline posting. Pastikan pesan konsisten', '(6) Linimasa posting. Pastikan pesan konsisten'],
  ['(1) Executive summary 2-3 kalimat, (2) Target audience profile, (3) Key message dan value proposition, (4) Platform strategy', '(1) Ringkasan eksekutif 2-3 kalimat, (2) Profil target audiens, (3) Pesan utama dan value proposition, (4) Strategi platform'],
  ['Brief harus jelas dan actionable', 'Brief harus jelas dan bisa langsung ditindaklanjuti'],
  ['P.S. dengan reminder deadline atau bonus tambahan', 'P.S. dengan pengingat batas waktu atau bonus tambahan'],
  ['> Merayakan milestone pelanggan (1 tahun, 100 pembelian, dll)', '> Merayakan pencapaian pelanggan (1 tahun, 100 pembelian, dll)'],
  ['- [MILESTONE]: milestone yang dicapai', '- [MILESTONE]: pencapaian yang dicapai'],
  ['- [PENGHARGAAN]: penghargaan atau hadiah untuk milestone', '- [PENGHARGAAN]: penghargaan atau hadiah untuk pencapaian'],
  ['Buat milestone celebration email untuk [NAMA_PELANGGAN]', 'Buat email perayaan pencapaian untuk [NAMA_PELANGGAN]'],
  ['"Anda mencapai [milestone]!"', '"Anda mencapai [pencapaian]!"'],
  ['(3) Pembuka yang menjelaskan mengapa feedback mereka berharga, (4) Body 100-150 kata tentang survei', '(3) Pembuka yang menjelaskan mengapa masukan mereka berharga, (4) Body 100-150 kata tentang survei'],
  ['Buat cancellation confirmation email untuk [NAMA_PELANGGAN]', 'Buat email konfirmasi pembatalan untuk [NAMA_PELANGGAN]'],
  ['(5) Permintaan feedback jika [ALASAN_MEMINTA]', '(5) Permintaan masukan jika [ALASAN_MEMINTA]'],
  ['(4) Penjelasan benefit program', '(4) Penjelasan manfaat program'],
  ['(9) P.S. dengan deadline atau reward terbatas', '(9) P.S. dengan batas waktu atau reward terbatas'],
  ['mengapa feedback mereka berharga, (4) Body 100-150 kata dengan 3-5 pertanyaan', 'mengapa masukan mereka berharga, (4) Body 100-150 kata dengan 3-5 pertanyaan'],
  ['CTA "Berikan Feedback"', 'CTA "Berikan Masukan"'],
  ['- [PENCAPAIAN]: pencapaian atau milestone mereka', '- [PENCAPAIAN]: pencapaian mereka'],
  ['Buat year-in-review email untuk [NAMA_PELANGGAN]', 'Buat email telaah tahunan untuk [NAMA_PELANGGAN]'],
  ['(3) Pembuka yang appreciative', '(3) Pembuka yang penuh apresiasi'],
  ['(5) Pencapaian atau milestone mereka', '(5) Pencapaian mereka'],
  ['- [TIMELINE]: timeline jika akan dikembangkan', '- [TIMELINE]: linimasa jika akan dikembangkan'],
  ['(3) Ucapan terima kasih atas feedback', '(3) Ucapan terima kasih atas masukan'],
  ['(5) Timeline jika akan dikembangkan', '(5) Linimasa jika akan dikembangkan'],
  ['(7) Cara memberikan feedback lebih lanjut', '(7) Cara memberikan masukan lebih lanjut'],
  ['(8) Penutup yang appreciative', '(8) Penutup yang penuh apresiasi'],
  ['Gunakan bahasa yang appreciative dan transparan', 'Gunakan bahasa yang penuh apresiasi dan transparan'],
  ['(5) Tombol download yang menonjol', '(5) Tombol unduh yang menonjol'],
  ['Buat milestone achievement email untuk [NAMA_PENGGUNA]', 'Buat email pencapaian untuk [NAMA_PENGGUNA]'],
  ['"Milestone baru: [pencapaian]"', '"Pencapaian baru: [pencapaian]"'],
  ['- [PENCAPAIAN]: pencapaian atau milestone', '- [PENCAPAIAN]: pencapaian'],
  ['(5) Pencapaian atau milestone dalam format timeline atau angka', '(5) Pencapaian dalam format linimasa atau angka'],
  ['(3) Timeline perkembangan dengan tahun dan milestone', '(3) Linimasa perkembangan dengan tahun dan tonggak capaian'],
  ['(5) Visual suggestion untuk timeline', '(5) Saran visual untuk linimasa'],
  ['About story dengan cerita, timeline, dan visi.', 'Cerita tentang perusahaan dengan linimasa dan visi.'],
  ['Buat optimization plan untuk [HALAMAN]', 'Buat rencana optimasi untuk [HALAMAN]'],
  ['(3) Variasi copy yang akan di-test', '(3) Variasi copy yang akan diuji'],
  ['(5) Timeline testing', '(5) Linimasa pengujian'],
  ['(2) Language guidelines, (3) Formatting guidelines, (4) Alt text guidelines, (5) Testing checklist', '(2) Panduan bahasa, (3) Panduan pemformatan, (4) Panduan alt text, (5) Checklist pengujian'],
  ['(1) Core message dalam bahasa utama', '(1) Pesan utama dalam bahasa utama'],
  ['(3) Tone consistency, (4) Translation workflow, (5) Quality assurance', '(3) Konsistensi tone, (4) Alur kerja penerjemahan, (5) Penjaminan mutu'],
  ['Buat copy framework selection guide untuk [TUJUAN]', 'Buat panduan pemilihan framework copy untuk [TUJUAN]'],
  ['- [TIMELINE]: timeline\n', '- [TIMELINE]: linimasa\n'],
  ['Buat copy handoff document untuk [PROJEK]', 'Buat dokumen serah terima copy untuk [PROJEK]'],
];

const p3Fixes = [
  ['Sebagai workflow consultant,', 'Sebagai konsultan alur kerja,'],
  ['nama campaign yang catchy', 'nama kampanye yang menarik'],
  ['hashtag campaign', 'hashtag kampanye'],
  ['timeline campaign (2-4 minggu)', 'linimasa kampanye (2-4 minggu)'],
  ['mudah diikuti dan motivating', 'mudah diikuti dan memotivasi'],
  ['> Plan UGC campaign lengkap dengan mekanisme dan timeline', '> Rencana kampanye UGC lengkap dengan mekanisme dan linimasa'],
  ['(1) acknowledge pesan dengan nama customer', '(1) menanggapi pesan dengan menyebut nama pelanggan'],
  ['(2) jawab pertanyaan atau address concern', '(2) jawab pertanyaan atau tanggapi keluhan'],
  ['(3) berikan next step yang jelas', '(3) berikan langkah berikutnya yang jelas'],
  ['(4) akhiri dengan question atau CTA yang mendorong response', '(4) akhiri dengan pertanyaan atau CTA yang mendorong respons'],
  ['Include bagian yang bisa dipersonalisasi', 'Sertakan bagian yang bisa dipersonalisasi'],
  ['meminta feedback tentang [PRODUK] melalui [KANAL]', 'meminta masukan tentang [PRODUK] melalui [KANAL]'],
  ['respons untuk feedback positif dan kalimat respons untuk feedback negatif', 'respons untuk masukan positif dan kalimat respons untuk masukan negatif'],
  ['Sebagai product marketing specialist,', 'Sebagai spesialis pemasaran produk,'],
  ['timeline program dari seleksi sampai peluncuran', 'linimasa program dari seleksi sampai peluncuran'],
  ['Paket undangan beta lengkap dengan timeline dan template pesan', 'Paket undangan beta lengkap dengan linimasa dan template pesan'],
];

for (const f of files.p2) {
  const r = apply(D(f), p2Fixes);
  console.log(`P2 ${f}: ${r.applied}/${r.total} applied${r.misses.length ? '  MISS: ' + r.misses.join(' | ') : ''}`);
}

const r3 = apply(D(files.p3), p3Fixes);
console.log(`P3 basic: ${r3.applied}/${r3.total} applied${r3.misses.length ? '  MISS: ' + r3.misses.join(' | ') : ''}`);
