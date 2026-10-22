const fs = require('fs');

const fixes = [
  ['Storytelling untuk brand', 'Storytelling untuk merek'],
  ['- TikTok script dan hook', '- Naskah dan hook TikTok'],
  ['- Facebook ads copy', '- Copy iklan Facebook'],
  ['- Twitter/X thread marketing', '- Pemasaran thread Twitter/X'],
  ['- Welcome sequence', '- Sekuens sambutan'],
  ['- Promotional email', '- Email promosi'],
  ['- Newsletter content', '- Konten newsletter'],
  ['- Re-engagement campaign', '- Kampanye pengaktifan ulang'],
  ['- Hero section copy', '- Copy hero section'],
  ['- Feature description', '- Deskripsi fitur'],
  ['- FAQ dan objection handling', '- FAQ dan penanganan keberatan'],
  ['- Video script structure', '- Struktur naskah video'],
  ['- YouTube description', '- Deskripsi YouTube'],
  ['- Hook dan retention tactics', '- Hook dan taktik retensi'],
  ['**Bagian 6: Advanced Copywriting (P-261 hingga P-300)**', '**Bagian 6: Copywriting Tingkat Lanjut (P-261 hingga P-300)**'],
  ['- A/B testing variations', '- Variasi A/B testing'],
  ['- Urgency dan scarcity', '- Urgensi dan kelangkaan'],
  ['- Emotional triggers', '- Pemicu emosi'],
  ['- Brand voice consistency', '- Konsistensi gaya bahasa merek'],
  ['Workbook Excel yang accompanies buku ini', 'Workbook Excel yang menyertai buku ini'],
  ['**Sheet 1: Library Prompt**', '**Sheet 1: Perpustakaan Prompt**'],
  ['5. Refine hasil sesuai kebutuhan', '5. Perbaiki hasil sesuai kebutuhan'],
  ['Cara membuat konten yang engaging untuk setiap platform', 'Cara membuat konten yang mengundang interaksi untuk setiap platform'],
  ['Copy yang mengoptimalkan user experience dan conversion', 'Copy yang mengoptimalkan pengalaman pengguna dan konversi'],
  ['Script dan struktur untuk konten audio-visual', 'Naskah dan struktur untuk konten audio-visual'],
  ['6. **Advanced Copywriting (Bagian 6):** Teknik tingkat lanjut untuk copywriter profesional', '6. **Copywriting Tingkat Lanjut (Bagian 6):** Teknik tingkat lanjut untuk copywriter profesional'],
  ['2. **Eksperimen:** Test berbagai variasi dan track hasilnya', '2. **Eksperimen:** Uji berbagai variasi dan catat hasilnya'],
  ['3. **Iterasi:** Refine prompt berdasarkan hasil yang Anda dapatkan', '3. **Iterasi:** Perbaiki prompt berdasarkan hasil yang Anda dapatkan'],
];

const files = [
  'drafts/300-prompt-ai-untuk-copywriting-dan-iklan-digital.md',
  'drafts/300-prompt-copywriting-premium.md',
  'drafts/300-prompt-copywriting-ultimate.md',
];

for (const file of files) {
  let md = fs.readFileSync(file, 'utf8');
  let hits = 0;
  let misses = [];
  for (const [from, to] of fixes) {
    if (md.includes(from)) {
      md = md.split(from).join(to);
      hits++;
    } else {
      misses.push(from);
    }
  }
  fs.writeFileSync(file, md);
  console.log(`${file}: ${hits}/${fixes.length} applied${misses.length ? ' | missing: ' + misses.join(' ; ') : ''}`);
}
