// Round 4: systematic localization of residual structural English
const fs = require('fs');

function apply(file, pairs, label) {
  let md = fs.readFileSync(file, 'utf8');
  let ok = 0;
  const missing = [];
  for (const [from, to] of pairs) {
    if (!md.includes(from)) { missing.push(from.slice(0, 60)); continue; }
    md = md.split(from).join(to);
    ok++;
  }
  fs.writeFileSync(file, md);
  console.log(`${label || file}: ${ok}/${pairs.length} applied${missing.length ? '  MISS: ' + missing.join(' | ') : ''}`);
  return md;
}

// ---------- A. P1 (all 3 tiers): comparison table ----------
const p1fixes = [
  ['brainstorming nama dan penawaran', 'curah gagasan nama dan penawaran'],
];
apply('drafts/150-prompt-ai-untuk-bisnis-dan-umkm-indonesia.md', p1fixes, 'P1 basic');
apply('drafts/150-prompt-umkm-premium.md', p1fixes, 'P1 premium');
apply('drafts/150-prompt-umkm-ultimate.md', p1fixes, 'P1 ultimate');

// ---------- B. P1 ultimate only: workflow goal wording ----------
apply('drafts/150-prompt-umkm-ultimate.md', [
  ['Tentukan goal bulan itu dalam satu angka', 'Tentukan tujuan bulan itu dalam satu angka'],
  ['Jalankan prompt P-062 dengan goal, frekuensi posting', 'Jalankan prompt P-062 dengan tujuan, frekuensi posting'],
  ['goal bulan ini: 20 pelanggan langganan roti tawar baru.', 'tujuan bulan ini: 20 pelanggan langganan roti tawar baru.'],
], 'P1 ultimate extras');

// ---------- C. P2 (all 3 tiers) ----------
const p2fixes = [
  // desc lines
  ['- [BATAS_WAKTU]: deadline penawaran', '- [BATAS_WAKTU]: batas waktu penawaran'],
  ['- [BATAS_WAKTU]: deadline insentif', '- [BATAS_WAKTU]: batas waktu insentif'],
  ['- [ALASAN_MEMINTA]: apakah meminta feedback alasan', '- [ALASAN_MEMINTA]: alasan mengapa meminta masukan'],
  ['- [INSENTIF_FEEDBACK]: insentif untuk memberikan feedback', '- [INSENTIF_FEEDBACK]: insentif untuk memberikan masukan'],
  ['- [FREKUENSI_UPLOAD]: berapa sering upload', '- [FREKUENSI_UPLOAD]: berapa sering mengunggah konten'],
  ['- [FORMAT]: format (solo, interview, panel)', '- [FORMAT]: format (solo, wawancara, panel)'],
  ['- [DURASI_INTERVIEW]: durasi segment interview', '- [DURASI_INTERVIEW]: durasi segmen wawancara'],
  ['- [AUDIENCE]: audience', '- [AUDIENCE]: audiens'],
  ['- [AUDIENCE]: audience dengan kebutuhan khusus', '- [AUDIENCE]: audiens dengan kebutuhan khusus'],
  ['- [JENIS_STORY]: jenis cerita (origin, customer, product journey)', '- [JENIS_STORY]: jenis cerita (asal-usul, pelanggan, perjalanan produk)'],
  // prompt prose: email compounds
  ['Buat survey request email', 'Buat email permintaan survei'],
  ['> Meminta feedback tentang produk atau layanan', '> Meminta masukan tentang produk atau layanan'],
  ['5. Iterasi berdasarkan feedback.', '5. Iterasi berdasarkan masukan.'],
  ['Buat feedback request email', 'Buat email permintaan masukan'],
  ['Buat feature request follow-up email', 'Buat email tindak lanjut permintaan fitur'],
  ['Buat post-purchase follow-up email', 'Buat email tindak lanjut pasca pembelian'],
  ['Buat payment reminder email', 'Buat email pengingat pembayaran'],
  ['Buat trial expiration reminder email', 'Buat email pengingat kedaluwarsa uji coba'],
  ['(feed, story, reminder) dengan informasi lengkap', '(feed, story, pengingat) dengan informasi lengkap'],
  ['Tiga variasi 80-100 kata dengan reminder, insentif, urgency, dan CTA.', 'Tiga variasi 80-100 kata dengan pengingat, insentif, urgensi, dan CTA.'],
  ['Tiga email dengan pendekatan berbeda (reminder, insentif, urgency).', 'Tiga email dengan pendekatan berbeda (pengingat, insentif, urgensi).'],
  // urgency / deadline prose
  ['urgensi melalui deadline legitimate dan transparan.', 'urgensi melalui batas waktu yang sah dan transparan.'],
  ['Pengumuman 150-200 kata dengan headline, hadiah, syarat, deadline, dan CTA.', 'Pengumuman 150-200 kata dengan headline, hadiah, syarat, batas waktu, dan CTA.'],
  ['(1) Menggunakan deadline yang nyata, (2) Menjelaskan alasan deadline,', '(1) Menggunakan batas waktu yang nyata, (2) Menjelaskan alasan batas waktunya,'],
  // interview / podcast
  ['> Membuat daftar pertanyaan untuk interview podcast', '> Membuat daftar pertanyaan untuk wawancara podcast'],
  ['pertanyaan interview podcast untuk [NAMA_TAMU]', 'pertanyaan wawancara podcast untuk [NAMA_TAMU]'],
  // summary
  ['Tulis executive summary untuk [DOKUMEN]', 'Tulis ringkasan eksekutif untuk [DOKUMEN]'],
  ['Executive summary 250-300 kata', 'Ringkasan eksekutif 250-300 kata'],
  ['Buat checkout page summary dengan', 'Buat ringkasan halaman checkout dengan'],
  ['Checkout summary dengan daftar produk dan total.', 'Ringkasan checkout dengan daftar produk dan total.'],
  // strategy / campaign
  ['Buat multilingual copy strategy untuk [BAHASA] di [MARKET]', 'Buat strategi copy multibahasa untuk [BAHASA] di [MARKET]'],
  ['Multilingual strategy lengkap.', 'Strategi multibahasa lengkap.'],
  ['> Buat brief campaign [NAMA_CAMPAIGN]', '> Buat brief kampanye [NAMA_CAMPAIGN]'],
  // upload / download
  ['yang upload [FREKUENSI_UPLOAD]', 'yang mengunggah [FREKUENSI_UPLOAD]'],
  ['**Kesalahan 5: Tidak konsisten dengan upload schedule**', '**Kesalahan 5: Tidak konsisten dengan jadwal unggah**'],
  ['(6) Link untuk download invoice PDF,', '(6) Tautan untuk mengunduh invoice PDF,'],
  // content pillar & 404
  ['> Merencanakan content pillar untuk media sosial', '> Merencanakan pilar konten untuk media sosial'],
  ['- [TUJUAN]: tujuan content marketing', '- [TUJUAN]: tujuan pemasaran konten'],
  ['> Buat 5 content pillar untuk [BRAND] di [INDUSTRI]', '> Buat 5 pilar konten untuk [BRAND] di [INDUSTRI]'],
  ['Lima content pillar dengan detail lengkap.', 'Lima pilar konten dengan detail lengkap.'],
  ['Buat 404 page content untuk [NAMA_BRAND]', 'Buat konten halaman 404 untuk [NAMA_BRAND]'],
  ['- Content creator yang butuh referensi cepat', '- Kreator konten yang butuh referensi cepat'],
  // customer journey
  ['> Buat customer success story email tentang', '> Buat email cerita sukses pelanggan tentang'],
  ['> Membuat copy untuk setiap tahap customer journey', '> Membuat copy untuk setiap tahap perjalanan pelanggan'],
  ['> Buat customer journey map copy untuk [TAHAP_JOURNEY]', '> Buat copy peta perjalanan pelanggan untuk [TAHAP_JOURNEY]'],
  ['Customer journey map dengan copy per tahap.', 'Peta perjalanan pelanggan dengan copy per tahap.'],
  // lookalike audience
  ['> Buat copy iklan untuk lookalike audience yang mirip', '> Buat copy iklan untuk audiens lookalike yang mirip'],
  ['Copy 120-150 kata yang ditargetkan untuk lookalike audience.', 'Copy 120-150 kata yang ditargetkan untuk audiens lookalike.'],
  // overview / structure lines
  ['(1) Overview performa keseluruhan dalam 2-3 kalimat, (2) Highlight metrik terbaik dengan angka spesifik,', '(1) Ringkasan performa keseluruhan dalam 2-3 kalimat, (2) Sorotan metrik terbaik dengan angka spesifik,'],
  ['Gunakan bahasa yang jelas dan actionable.', 'Gunakan bahasa yang jelas dan bisa langsung ditindaklanjuti.'],
  ['Ringkasan 250-300 kata dengan overview, highlight, area perbaikan, insight, dan rekomendasi.', 'Ringkasan 250-300 kata dengan gambaran umum, sorotan, area perbaikan, insight, dan rekomendasi.'],
  ['> Membuat overview fitur untuk homepage', '> Membuat ringkasan fitur untuk homepage'],
  ['> Buat feature overview section homepage dengan [JUMLAH_FITUR]', '> Buat bagian ringkasan fitur homepage dengan [JUMLAH_FITUR]'],
  ['(3) Grid atau list fitur dengan: icon, nama fitur (3-5 kata), deskripsi (20-30 kata), (4) Visual layout yang konsisten, (5) CTA untuk melihat semua fitur. Total 200-300 kata. Setiap fitur harus mudah di-scan dalam 2-3 detik.', '(3) Grid atau daftar fitur dengan: ikon, nama fitur (3-5 kata), deskripsi (20-30 kata), (4) Tata letak visual yang konsisten, (5) CTA untuk melihat semua fitur. Total 200-300 kata. Setiap fitur harus mudah dibaca sekilas dalam 2-3 detik.'],
  ['Feature overview dengan grid fitur dan deskripsi singkat.', 'Ringkasan fitur dengan grid dan deskripsi singkat.'],
  ['> Buat blog post introduction untuk [TOPIK]', '> Buat pembuka artikel blog untuk [TOPIK]'],
  ['(4) Overview struktur post 1 kalimat. Total 100-150 kata. Introduction harus membuat pembaca ingin terus membaca.', '(4) Ringkasan struktur artikel 1 kalimat. Total 100-150 kata. Pembuka harus membuat pembaca ingin terus membaca.'],
  ['Introduction dengan hook, konteks, janji, dan overview.', 'Pembuka dengan hook, konteks, janji, dan ringkasan.'],
  ['(1) Intro: overview klien dan industri,', '(1) Pembuka: ringkasan klien dan industri,'],
  ['(5) Hasil: outcome dengan angka konkret, (6) Testimoni dari klien,', '(5) Hasil: dampak dengan angka konkret, (6) Testimoni dari klien,'],
  ['(1) Overview performa, (2) Highlight kekuatan, (3) Area perbaikan, (4) Rekomendasi optimasi, (5) Action plan.', '(1) Ringkasan performa, (2) Sorotan kekuatan, (3) Area perbaikan, (4) Rekomendasi optimasi, (5) Rencana tindakan.'],
  ['(1) Overview messaging kompetitor,', '(1) Ringkasan pesan kompetitor,'],
  ['(1) Base tone description, (2) Situation-based variations (5-7 situasi), (3) Contoh copy untuk setiap variasi, (4) Do dan don\'t, (5) Transition guidelines.', '(1) Deskripsi tone dasar, (2) Variasi per situasi (5-7 situasi), (3) Contoh copy untuk setiap variasi, (4) Do dan don\'t, (5) Panduan transisi.'],
  ['(1) Framework overview (AIDA, PAS, BAB, dll), (2) Decision matrix berdasarkan tujuan, (3) Decision matrix berdasarkan audience, (4) Decision matrix berdasarkan channel, (5) Contoh penggunaan setiap framework.', '(1) Ringkasan framework (AIDA, PAS, BAB, dll), (2) Matriks keputusan berdasarkan tujuan, (3) Matriks keputusan berdasarkan audiens, (4) Matriks keputusan berdasarkan kanal, (5) Contoh penggunaan setiap framework.'],
  ['(1) Overview area, (2) 5-7 teknik optimasi, (3) Step-by-step implementation, (4) Testing plan, (5) Success metrics, (6) Case study atau contoh.', '(1) Ringkasan area, (2) 5-7 teknik optimasi, (3) Implementasi langkah demi langkah, (4) Rencana pengujian, (5) Metrik keberhasilan, (6) Studi kasus atau contoh.'],
  ['(1) Project overview, (2) Scope dan deliverables, (3) Stakeholder roles, (4) Timeline dan milestones, (5) Approval process, (6) Handoff checklist.', '(1) Ringkasan proyek, (2) Ruang lingkup dan deliverables, (3) Peran pemangku kepentingan, (4) Linimasa dan tonggak capaian, (5) Proses persetujuan, (6) Checklist serah terima.'],
  ['(1) Key metrics overview, (2) Channel breakdown, (3) Trend analysis, (4) Top performing copy, (5) Underperforming copy, (6) Action items.', '(1) Ringkasan metrik utama, (2) Rincian per kanal, (3) Analisis tren, (4) Copy dengan performa terbaik, (5) Copy dengan performa di bawah standar, (6) Daftar tindakan.'],
  ['(1) Introduction dan background, (2) Project overview (untuk setiap projek: brief, approach, result), (3) Case study mendalam untuk 2-3 projek terbaik, (4) Skills dan expertise, (5) Testimonials, (6) Contact information.', '(1) Pengenalan dan latar belakang, (2) Ringkasan proyek (untuk setiap projek: brief, pendekatan, hasil), (3) Studi kasus mendalam untuk 2-3 projek terbaik, (4) Keahlian dan spesialisasi, (5) Testimoni, (6) Informasi kontak.'],
];
apply('drafts/300-prompt-ai-untuk-copywriting-dan-iklan-digital.md', p2fixes, 'P2 basic');
apply('drafts/300-prompt-copywriting-premium.md', p2fixes, 'P2 premium');
apply('drafts/300-prompt-copywriting-ultimate.md', p2fixes, 'P2 ultimate');

// ---------- D. P3 basic: role names, then blankets, then prose ----------
const p3roles = [
  ['Sebagai brand strategist', 'Sebagai perancang strategi merek'],
  ['Sebagai TikTok content creator', 'Sebagai kreator konten TikTok'],
  ['Sebagai content creator', 'Sebagai kreator konten'],
  ['Sebagai content strategist', 'Sebagai perancang strategi konten'],
  ['Sebagai content auditor', 'Sebagai auditor konten'],
  ['Sebagai event content planner', 'Sebagai perencana konten acara'],
  ['Sebagai educational content writer', 'Sebagai penulis konten edukasi'],
  ['Sebagai visual content designer', 'Sebagai desainer konten visual'],
  ['Sebagai Reels creator', 'Sebagai kreator Reels'],
  ['Sebagai visual content planner', 'Sebagai perencana konten visual'],
  ['Sebagai packaging content planner', 'Sebagai perencana konten kemasan'],
  ['Sebagai documentary content planner', 'Sebagai perencana konten dokumenter'],
  ['Sebagai ASMR content planner', 'Sebagai perencana konten ASMR'],
  ['Sebagai series content planner', 'Sebagai perencana konten serial'],
  ['Sebagai community content planner', 'Sebagai perencana konten komunitas'],
  ['Sebagai content producer', 'Sebagai produser konten'],
  ['Sebagai content optimization specialist', 'Sebagai spesialis optimasi konten'],
  ['Sebagai content performance analyst', 'Sebagai analis performa konten'],
  ['Sebagai media sosial strategist', 'Sebagai perancang strategi media sosial'],
  ['Sebagai media sosial planner', 'Sebagai perencana media sosial'],
  ['Sebagai giveaway strategist', 'Sebagai perancang strategi giveaway'],
  ['Sebagai Instagram strategist', 'Sebagai perancang strategi Instagram'],
  ['Sebagai campaign strategist', 'Sebagai perancang strategi kampanye'],
  ['Sebagai customer service specialist', 'Sebagai spesialis layanan pelanggan'],
  ['Sebagai customer experience specialist', 'Sebagai spesialis pengalaman pelanggan'],
  ['Sebagai customer relationship specialist', 'Sebagai spesialis hubungan pelanggan'],
  ['Sebagai customer service expert', 'Sebagai ahli layanan pelanggan'],
  ['Sebagai customer success specialist', 'Sebagai spesialis keberhasilan pelanggan'],
  ['Sebagai unit economics analyst', 'Sebagai analis ekonomi unit'],
  ['Sebagai retention analyst', 'Sebagai analis retensi'],
  ['Sebagai audience engagement specialist', 'Sebagai spesialis engagement audiens'],
  ['Sebagai audience researcher', 'Sebagai peneliti audiens'],
  ['Sebagai market researcher', 'Sebagai peneliti pasar'],
  ['Sebagai engagement strategist', 'Sebagai perancang strategi engagement'],
  ['Sebagai campaign manager', 'Sebagai manajer kampanye'],
  ['Sebagai performance analyst', 'Sebagai analis performa'],
  ['Sebagai performance baseline analyst', 'Sebagai analis dasar performa'],
  ['Sebagai data driven strategist', 'Sebagai perancang strategi berbasis data'],
  ['Sebagai launch strategist', 'Sebagai perancang strategi peluncuran'],
  ['Sebagai media buyer', 'Sebagai pembeli media'],
  ['Sebagai creative director', 'Sebagai direktur kreatif'],
  ['Sebagai calendar designer', 'Sebagai desainer kalender'],
  ['Sebagai competitive intelligence analyst', 'Sebagai analis intelijen kompetitor'],
  ['Sebagai influencer marketing specialist', 'Sebagai spesialis pemasaran influencer'],
  ['Sebagai crisis communication planner', 'Sebagai perencana komunikasi krisis'],
  ['Sebagai lighting consultant', 'Sebagai konsultan pencahayaan'],
];
const p3prose = [
  ['content pillar', 'pilar konten'],
  ['Content pillar', 'Pilar konten'],
  ['> Membuat interactive content untuk Stories', '> Membuat konten interaktif untuk Stories'],
  ['- [TUJUAN]: tujuan (engagement/research/feedback)', '- [TUJUAN]: tujuan (engagement/riset/masukan)'],
  ['- [TUJUAN]: tujuan komunitas (support/feedback/advocacy)', '- [TUJUAN]: tujuan komunitas (dukungan/masukan/advokasi)'],
  ['> Tiga template pesan feedback siap pakai dengan rencana respons', '> Tiga templat pesan masukan siap pakai dengan rencana respons'],
  [' yang incorporate trend ', ' yang mengangkat tren '],
  ['buat 10 ide poll dan question untuk Stories', 'buat 10 ide polling dan pertanyaan untuk Stories'],
  ['(1) type (poll/quiz/question slider/emoji slider), (2) question text, (3) options (untuk poll/quiz), (4) follow-up action berdasarkan jawaban. Variasikan antara fun, insightful, dan actionable questions.', '(1) jenis (poll/kuis/slider pertanyaan/slider emoji), (2) teks pertanyaan, (3) pilihan (untuk poll/kuis), (4) tindak lanjut berdasarkan jawaban. Variasikan antara pertanyaan yang seru, memberi wawasan, dan bisa ditindaklanjuti.'],
  ['buatkan mechanics untuk contest [PRIZE] dengan goal [TUJUAN]. Durasi: [DURASI]. Mechanics: [MECHANICS]. Sertakan: (1) nama contest yang catchy, (2) rules dan syarat partisipasi (5-7 poin), (3) step-by-step cara ikut, (4) kriteria pemenang, (5) timeline announcement, (6) disclaimer dan legal notes, (7) caption announcement post, (8) reminder posts (3 variasi), (9) winner announcement template. Pastikan mechanics mudah dipahami dan motivating.', 'buatkan mekanisme lomba berhadiah [PRIZE] dengan tujuan [TUJUAN]. Durasi: [DURASI]. Mekanisme: [MECHANICS]. Sertakan: (1) nama lomba yang menarik, (2) aturan dan syarat partisipasi (5-7 poin), (3) langkah demi langkah cara ikut, (4) kriteria pemenang, (5) linimasa pengumuman, (6) disclaimer dan catatan legal, (7) caption posting pengumuman, (8) posting pengingat (3 variasi), (9) templat pengumuman pemenang. Pastikan mekanismenya mudah dipahami dan memotivasi.'],
  ['buat konten calendar peluncuran [PRODUK] pada [TANGGAL_LAUNCH]', 'buat kalender konten peluncuran [PRODUK] pada [TANGGAL_LAUNCH]'],
  ['jenis konten, hook, channel, dan tujuan', 'jenis konten, hook, kanal, dan tujuan'],
  ['referensi visual, deadline, dan definisi berhasil', 'referensi visual, batas waktu, dan definisi berhasil'],
  ['template update kedua (langkah yang diambil)', 'templat pembaruan kedua (langkah yang diambil)'],
  ['Sertakan aturan timing: seberapa cepat harus merespons dan kapan diam lebih baik.', 'Sertakan aturan waktu: seberapa cepat harus merespons dan kapan diam lebih baik.'],
  ['buatkan crisis communication plan untuk [SITUASI] dengan severity [SEVERITY] di [PLATFORM]. Stakeholder: [STAKEHOLDER]. Sertakan: (1) holding statement (50 kata) untuk immediate response, (2) detailed apology letter (200 kata), (3) FAQ untuk anticipated questions (5-7 Q&A), (4) internal memo untuk tim, (5) follow-up update template, (6) recovery content ideas. Tone harus empathetic, accountable, dan solution-oriented. Hindari defensive language.', 'buatkan rencana komunikasi krisis untuk [SITUASI] dengan tingkat keparahan [SEVERITY] di [PLATFORM]. Pemangku kepentingan: [STAKEHOLDER]. Sertakan: (1) pernyataan awal (50 kata) untuk respons pertama, (2) surat permintaan maaf terperinci (200 kata), (3) FAQ untuk pertanyaan yang mungkin muncul (5-7 tanya jawab), (4) memo internal untuk tim, (5) templat pembaruan tindak lanjut, (6) ide konten pemulihan. Nada harus empatik, bertanggung jawab, dan berorientasi solusi. Hindari bahasa defensif.'],
  ['> Skrip live shopping lengkap per produk dengan closing dan follow up', '> Naskah live shopping lengkap per produk dengan penutup dan tindak lanjut'],
  ['> Calendar lengkap dengan 50+ momen dan strategi konten', '> Kalender lengkap dengan 50+ momen dan strategi konten'],
  ['susun roadmap konten setahun', 'susun peta jalan konten setahun'],
  ['### T-200. Annual Strategy Review', '### T-200. Telaah Strategi Tahunan'],
];

let p3 = fs.readFileSync('drafts/200-template-social-media-basic.md', 'utf8');
let p3ok = 0; const p3miss = [];
for (const [from, to] of p3roles) {
  if (!p3.includes(from)) { p3miss.push(from); continue; }
  p3 = p3.split(from).join(to); p3ok++;
}
console.log(`P3 roles: ${p3ok}/${p3roles.length}${p3miss.length ? '  MISS: ' + p3miss.join(' | ') : ''}`);

for (const [from, to] of p3prose) {
  if (!p3.includes(from)) { p3miss.push(from.slice(0, 60)); continue; }
  p3 = p3.split(from).join(to); p3ok++;
}
// blankets for P3 (after role fixes)
const audBefore = (p3.match(/\baudience\b/g) || []).length;
p3 = p3.replace(/\baudience\b/g, 'audiens');
const goalC = (p3.match(/\bGoal\b/g) || []).length;
const goallc = (p3.match(/\bgoal\b/g) || []).length;
p3 = p3.replace(/\bGoal\b/g, 'Tujuan').replace(/\bgoal\b/g, 'tujuan');
// post-blanket refinements
p3 = p3.split('tujuan post (awareness').join('tujuan posting (awareness');
p3 = p3.split('(awareness/sales/community)').join('(awareness/penjualan/komunitas)');
p3ok += audBefore + goalC + goallc;
console.log(`P3 blankets: audience=${audBefore}, Goal=${goalC}, goal=${goallc}`);
fs.writeFileSync('drafts/200-template-social-media-basic.md', p3);
console.log(`P3 basic total applied: ${p3ok} (misses: ${p3miss.length ? p3miss.join(' | ') : 'none'})`);
console.log('Round 4 fixes done.');
