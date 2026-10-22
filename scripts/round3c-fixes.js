// Round 3c: demo-header re-pointing + final English residue sweep
const fs = require('fs');

function apply(file, pairs) {
  let md = fs.readFileSync(file, 'utf8');
  let applied = 0;
  for (const [from, to] of pairs) {
    if (!md.includes(from)) {
      console.error(`MISS in ${file}: ${from.slice(0, 70)}...`);
      continue;
    }
    md = md.split(from).join(to);
    applied++;
  }
  fs.writeFileSync(file, md);
  console.log(`${file}: ${applied}/${pairs.length} applied`);
}

// ---------- A. P2 basic ----------
apply('drafts/300-prompt-ai-untuk-copywriting-dan-iklan-digital.md', [
  ['> Membuat tweet tunggal yang impactful', '> Membuat tweet tunggal yang berdampak'],
  ['Setiap detik harus impactful.', 'Setiap detik harus berdampak.'],
  ['Setiap segmen berisi talking points 50-80 kata.', 'Setiap segmen berisi poin pembicaraan 50-80 kata.'],
  ['(1) Intro 2-3 menit: hook dan preview, (2) Poin 1 dengan durasi dan talking points, (3) Poin 2 dengan durasi dan talking points, (4) Poin 3 dengan durasi dan talking points,',
   '(1) Intro 2-3 menit: hook dan pratinjau, (2) Poin 1 dengan durasi dan poin pembicaraan, (3) Poin 2 dengan durasi dan poin pembicaraan, (4) Poin 3 dengan durasi dan poin pembicaraan,'],
  ['Gunakan bahasa conversational seperti berbicara dengan teman.', 'Gunakan bahasa percakapan santai seperti berbicara dengan teman.'],
  ['(3) Segmen 2 (10 menit): Testimoni atau review,', '(3) Segmen 2 (10 menit): Testimoni atau ulasan,'],
  ['(1) Welcome dan housekeeping 5 menit, (2) Intro host dan credibility 5 menit, (3) Konten utama 20-30 menit dengan 3-5 poin, (4) Transition ke pitch 5 menit, (5) Product pitch 10 menit,',
   '(1) Sambutan dan pengenalan acara 5 menit, (2) Perkenalan host dan kredibilitas 5 menit, (3) Konten utama 20-30 menit dengan 3-5 poin, (4) Transisi ke pitch 5 menit, (5) Pitch produk 10 menit,'],
  ['(1) Nama dan title, (2) Latar belakang singkat, (3) Pencapaian yang relevan, (4) Mengapa tamu ini penting untuk topik ini, (5) Welcome dan transition ke interview.',
   '(1) Nama dan jabatan, (2) Latar belakang singkat, (3) Pencapaian yang relevan, (4) Mengapa tamu ini penting untuk topik ini, (5) Sambutan dan transisi ke wawancara.'],
  ['- [TAHAP_JOURNEY]: tahap journey (awareness, consideration, decision, retention)',
   '- [TAHAP_JOURNEY]: tahap perjalanan pelanggan (awareness, pertimbangan, keputusan, retensi)'],
]);

// ---------- B. P2 premium + ultimate ----------
const premiumUltimate = [
  // queued small fixes
  ['> Membuat tweet tunggal yang impactful', '> Membuat tweet tunggal yang berdampak'],
  ['Setiap detik harus impactful.', 'Setiap detik harus berdampak.'],
  ['Setiap segmen berisi talking points 50-80 kata.', 'Setiap segmen berisi poin pembicaraan 50-80 kata.'],
  ['(1) Intro 2-3 menit: hook dan preview, (2) Poin 1 dengan durasi dan talking points, (3) Poin 2 dengan durasi dan talking points, (4) Poin 3 dengan durasi dan talking points,',
   '(1) Intro 2-3 menit: hook dan pratinjau, (2) Poin 1 dengan durasi dan poin pembicaraan, (3) Poin 2 dengan durasi dan poin pembicaraan, (4) Poin 3 dengan durasi dan poin pembicaraan,'],
  ['Gunakan bahasa conversational seperti berbicara dengan teman.', 'Gunakan bahasa percakapan santai seperti berbicara dengan teman.'],
  ['(3) Segmen 2 (10 menit): Testimoni atau review,', '(3) Segmen 2 (10 menit): Testimoni atau ulasan,'],
  ['(1) Welcome dan housekeeping 5 menit, (2) Intro host dan credibility 5 menit, (3) Konten utama 20-30 menit dengan 3-5 poin, (4) Transition ke pitch 5 menit, (5) Product pitch 10 menit,',
   '(1) Sambutan dan pengenalan acara 5 menit, (2) Perkenalan host dan kredibilitas 5 menit, (3) Konten utama 20-30 menit dengan 3-5 poin, (4) Transisi ke pitch 5 menit, (5) Pitch produk 10 menit,'],
  ['(1) Nama dan title, (2) Latar belakang singkat, (3) Pencapaian yang relevan, (4) Mengapa tamu ini penting untuk topik ini, (5) Welcome dan transition ke interview.',
   '(1) Nama dan jabatan, (2) Latar belakang singkat, (3) Pencapaian yang relevan, (4) Mengapa tamu ini penting untuk topik ini, (5) Sambutan dan transisi ke wawancara.'],
  ['- [TAHAP_JOURNEY]: tahap journey (awareness, consideration, decision, retention)',
   '- [TAHAP_JOURNEY]: tahap perjalanan pelanggan (awareness, pertimbangan, keputusan, retensi)'],
  ['cocok untuk audience yang suka baca panjang', 'cocok untuk audiens yang suka baca panjang'],
  ['Pilih sesuai target audience Anda.', 'Pilih sesuai target audiens Anda.'],
  // demo content English residue
  ['email dikirim 2 jam setelah abandonment.', 'email dikirim 2 jam setelah keranjang ditinggalkan.'],
  ['Gemini lebih singkat dan create urgency. Untuk abandoned cart, keduanya efektif', 'Gemini lebih singkat dan langsung menciptakan urgensi. Untuk email keranjang ditinggalkan, keduanya efektif'],
  ['cocok untuk UMKM yang frustrated dengan pembukuan manual', 'cocok untuk UMKM yang frustrasi dengan pembukuan manual'],
  ['Worth every rupiah.', 'Sepadan dengan setiap rupiah.'],
  ['Untuk testimonial, Gemini biasanya', 'Untuk testimoni, Gemini biasanya'],
  // demo headers: re-point wrong codes (content proves the true prompt)
  ['### P-101. Welcome Email Rangkaian (Contoh Output)', '### P-121. Sekuens Email Sambutan (Contoh Output)'],
  ['### P-115. Abandoned Cart Email (Contoh Output)', '### P-124. Email Keranjang Ditinggalkan (Contoh Output)'],
  ['### P-151. Landing Page Hero Section (Contoh Output)', '### P-171. Hero Section Landing Page (Contoh Output)'],
  ['### P-165. Landing Page Testimonial Section (Contoh Output)', '### P-178. Bagian Testimoni Landing Page (Contoh Output)'],
  // demo headers: localization-only
  ['### P-009. Value Proposition Statement (Contoh Output)', '### P-009. Pernyataan Proposisi Nilai (Contoh Output)'],
  ['### P-060. Facebook Ads Primary Text (Contoh Output)', '### P-060. Teks Utama Facebook Ads (Contoh Output)'],
  ['### P-221. YouTube Video Naskah Structure (Contoh Output)', '### P-221. Struktur Naskah Video YouTube (Contoh Output)'],
  ['### P-233. Webinar Naskah Structure (Contoh Output)', '### P-233. Struktur Naskah Webinar (Contoh Output)'],
  ['### P-261. A/B Testing Headline Variations (Contoh Output)', '### P-261. Variasi Headline untuk Pengujian A/B (Contoh Output)'],
  ['### P-275. Persuasion Rangkaian (Contoh Output)', '### P-275. Sekuens Persuasi (Contoh Output)'],
];
apply('drafts/300-prompt-copywriting-premium.md', premiumUltimate);
apply('drafts/300-prompt-copywriting-ultimate.md', premiumUltimate);

// ---------- C. P3 basic ----------
apply('drafts/200-template-social-media-basic.md', [
  ['- [USIA]: range usia target audience', '- [USIA]: rentang usia audiens yang dituju'],
  ['> Script TikTok lengkap dengan visual directions', '> Naskah TikTok lengkap dengan petunjuk visual'],
  ['> Script proses video dengan ritme dan momen memuaskan', '> Naskah proses video dengan ritme dan momen memuaskan'],
  ['> Script green screen dengan instruksi visual per segmen', '> Naskah green screen dengan instruksi visual per segmen'],
  ['> Script unboxing dengan alur dan reaksi jujur', '> Naskah unboxing dengan alur dan reaksi jujur'],
]);

// ---------- D. scripts/add-ai-outputs.js (keep builder in parity) ----------
apply('scripts/add-ai-outputs.js', [
  ['cocok untuk audience yang suka baca panjang', 'cocok untuk audiens yang suka baca panjang'],
  ['Pilih sesuai target audience Anda.', 'Pilih sesuai target audiens Anda.'],
  ['### P-101. Welcome Email Sequence (Contoh Output)', '### P-121. Sekuens Email Sambutan (Contoh Output)'],
  ['### P-115. Balasan Otomatis Facebook Messenger (Contoh Output)', '### P-124. Email Keranjang Ditinggalkan (Contoh Output)'],
  ['### P-151. Email Ucapan Hari Besar (Contoh Output)', '### P-171. Hero Section Landing Page (Contoh Output)'],
  ['### P-165. Email Langkah Onboarding (Contoh Output)', '### P-178. Bagian Testimoni Landing Page (Contoh Output)'],
  ['email dikirim 2 jam setelah abandonment.', 'email dikirim 2 jam setelah keranjang ditinggalkan.'],
  ['Gemini lebih singkat dan create urgency. Untuk abandoned cart, keduanya efektif', 'Gemini lebih singkat dan langsung menciptakan urgensi. Untuk email keranjang ditinggalkan, keduanya efektif'],
  ['cocok untuk UMKM yang frustrated dengan pembukuan manual', 'cocok untuk UMKM yang frustrasi dengan pembukuan manual'],
  ['caption Instagram, script YouTube, bahkan proposal klien. Best investment tahun ini.', 'caption Instagram, naskah YouTube, bahkan proposal klien. Investasi terbaik tahun ini.'],
  ['Worth every rupiah.', 'Sepadan dengan setiap rupiah.'],
  ['Untuk testimonial, Gemini biasanya', 'Untuk testimoni, Gemini biasanya'],
  ['Urutan persuasi untuk email sequence:', 'Urutan persuasi untuk rangkaian email:'],
  ['Gemini lebih cocok untuk email sequence dengan storytelling', 'Gemini lebih cocok untuk rangkaian email dengan storytelling'],
]);

console.log('Round 3c done.');
