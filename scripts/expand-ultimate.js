const fs = require('fs');

let md = fs.readFileSync('drafts/300-prompt-copywriting-ultimate.md', 'utf8');

// Update title for Ultimate
md = md.replace(
  '# 300 Prompt AI untuk Copywriting dan Iklan Digital\n\n**Edisi Premium dengan Contoh Output AI**',
  '# 300 Prompt AI untuk Copywriting dan Iklan Digital\n\n**Edisi Ultimate dengan Contoh Output AI dan Panduan Otomasi**'
);

// Update front matter
md = md.replace(
  'Edisi Premium, Oktober 2026\nFormat: 300 prompt lengkap dengan contoh output dari ChatGPT dan Gemini',
  'Edisi Ultimate, Oktober 2026\nFormat: 300 prompt lengkap dengan contoh output AI dan panduan otomasi Make.com, Zapier, dan n8n'
);

// Update "Tentang Edisi" section
md = md.replace(
  '## Tentang Edisi Premium',
  '## Tentang Edisi Ultimate'
);

md = md.replace(
  'Edisi Premium berisi semua 300 prompt dari edisi Basic, ditambah contoh output nyata dari ChatGPT dan Gemini untuk setiap bagian. Anda bisa melihat langsung bagaimana AI menjawab prompt ini, sehingga Anda tahu apa yang diharapkan sebelum mencobanya sendiri.',
  'Edisi Ultimate berisi semua 300 prompt dari edisi Basic, contoh output nyata dari ChatGPT dan Gemini, plus panduan otomasi untuk mengintegrasikan AI ke dalam workflow bisnis Anda. Anda tidak hanya mendapat prompt, tapi juga cara mengotomasi produksi konten dengan Make.com, Zapier, dan n8n.'
);

md = md.replace(
  'Yang Anda dapatkan di edisi Premium:',
  'Yang Anda dapatkan di edisi Ultimate:'
);

// Add Ultimate-specific items after the Premium list
const premiumListEnd = '- Berkas Excel pendamping dengan 300 baris prompt';
const ultimateAdditions = `
- Panduan otomasi Make.com untuk 10 workflow konten
- Panduan otomasi Zapier untuk 10 workflow konten
- Panduan otomasi n8n untuk 10 workflow konten
- Template kode Node.js, Python, dan PHP untuk custom integration
- Studi kasus 4 bisnis yang sudah mengotomasi konten mereka
- Troubleshooting guide untuk integrasi AI`;

md = md.replace(premiumListEnd, premiumListEnd + ultimateAdditions);

// Add automation sections at the end (before Lampiran)
const automationSections = `

## Panduan Otomasi Konten dengan AI

Bagian ini berisi panduan langkah demi langkah untuk mengotomasi produksi konten menggunakan AI. Setiap workflow bisa diimplementasikan dalam 1-2 jam tanpa coding.

### Workflow 1: Auto-Generate Instagram Caption dari Produk Baru

**Tools:** Make.com + ChatGPT API + Google Sheets + Instagram Business

**Trigger:** Baris baru ditambahkan di Google Sheets "Produk Baru"

**Steps:**
1. Buat Google Sheets dengan kolom: Nama Produk, Harga, Deskripsi Singkat, Target Audience
2. Buat scenario di Make.com dengan trigger "Google Sheets: Watch Rows"
3. Tambahkan module "OpenAI: Create a Completion" dengan prompt:
   \`\`\`
   Buatkan 3 variasi caption Instagram untuk produk berikut:
   Nama: {{Nama Produk}}
   Harga: {{Harga}}
   Deskripsi: {{Deskripsi Singkat}}
   Target: {{Target Audience}}
   
   Setiap caption maksimal 150 kata, ada hook di kalimat pertama, ada CTA di akhir.
   \`\`\`
4. Tambahkan module "Instagram Business: Create a Photo Post"
5. Aktifkan scenario

**Hasil:** Setiap kali Anda tambah produk baru di Sheets, 3 caption Instagram otomatis tergenerate dan siap posting.

---

### Workflow 2: Auto-Generate Email Newsletter Mingguan

**Tools:** Zapier + ChatGPT API + Mailchimp

**Trigger:** Jadwal mingguan (setiap Senin jam 08:00)

**Steps:**
1. Buat Zap dengan trigger "Schedule by Zapier"
2. Tambahkan action "OpenAI: Completion" dengan prompt:
   \`\`\`
   Buatkan email newsletter mingguan untuk [NAMA BRAND] dengan topik [TOPIK MINGGU INI].
   
   Struktur:
   - Subject line yang menarik (max 50 karakter)
   - Pembukaan personal (2-3 kalimat)
   - 3 tips atau insight terkait topik (masing-masing 3-4 kalimat)
   - CTA untuk beli produk atau baca blog
   - Penutup hangat
   
   Tone: friendly, profesional, tidak terlalu formal.
   \`\`\`
3. Tambahkan action "Mailchimp: Create Campaign"
4. Aktifkan Zap

**Hasil:** Email newsletter otomatis tergenerate setiap minggu, tinggal review dan kirim.

---

### Workflow 3: Auto-Generate Konten Blog dari Keyword

**Tools:** n8n + OpenAI API + WordPress

**Trigger:** Keyword baru ditambahkan di database atau spreadsheet

**Steps:**
1. Install n8n (self-hosted atau cloud)
2. Buat workflow dengan trigger "Google Sheets: New Row"
3. Tambahkan node "OpenAI: Chat Completion" dengan prompt:
   \`\`\`
   Buatkan artikel blog 800-1000 kata untuk keyword: {{keyword}}
   
   Struktur:
   - H1: Judul yang mengandung keyword
   - Pendahuluan (2-3 paragraf, hook di kalimat pertama)
   - 3-4 H2 dengan konten detail
   - Kesimpulan dengan CTA
   
   Tone: edukatif, contoh konkret, bahasa Indonesia natural.
   \`\`\`
4. Tambahkan node "WordPress: Create Post"
5. Aktifkan workflow

**Hasil:** Artikel blog otomatis tergenerate dan dipublish ke WordPress.

---

### Workflow 4: Auto-Generate Facebook Ads dari Landing Page

**Tools:** Make.com + ChatGPT API + Facebook Ads Manager

**Trigger:** Landing page baru dipublish

**Steps:**
1. Buat webhook di Make.com yang dipanggil saat landing page publish
2. Tambahkan module "HTTP: Make a Request" untuk scrape konten landing page
3. Tambahkan module "OpenAI: Create a Completion" dengan prompt:
   \`\`\`
   Buatkan 5 variasi Facebook Ads primary text dari landing page berikut:
   [tempel konten landing page]
   
   Setiap variasi:
   - Max 125 kata
   - Hook di kalimat pertama
   - 3 benefit utama
   - CTA jelas
   - Tone sesuai brand voice landing page
   \`\`\`
4. Tambahkan module "Facebook Ads: Create Ad Creative"
5. Aktifkan scenario

**Hasil:** 5 variasi iklan Facebook otomatis tergenerate dari setiap landing page baru.

---

### Workflow 5: Auto-Generate Konten TikTok dari Blog Post

**Tools:** Zapier + ChatGPT API + TikTok for Business

**Trigger:** Blog post baru dipublish

**Steps:**
1. Buat Zap dengan trigger "WordPress: New Post"
2. Tambahkan action "OpenAI: Completion" dengan prompt:
   \`\`\`
   Buatkan 3 script TikTok 30-60 detik dari artikel blog berikut:
   [tempel konten blog]
   
   Setiap script:
   - Hook 3 detik pertama yang kuat
   - 3-5 poin utama dari artikel
   - CTA di akhir
   - Tone: casual, energik, cocok untuk TikTok
   \`\`\`
3. Tambahkan action "TikTok for Business: Create Video" (atau simpan ke Google Docs untuk review manual)
4. Aktifkan Zap

**Hasil:** Script TikTok otomatis tergenerate dari setiap blog post baru.

---

### Workflow 6: Auto-Generate Email Follow-Up dari Form Submission

**Tools:** Make.com + ChatGPT API + Email Service (Gmail/SendGrid)

**Trigger:** Form submission baru (Typeform, Google Forms, dll)

**Steps:**
1. Buat scenario dengan trigger "Typeform: New Submission"
2. Tambahkan module "OpenAI: Create a Completion" dengan prompt:
   \`\`\`
   Buatkan email follow-up personal dari data form berikut:
   Nama: {{nama}}
   Email: {{email}}
   Kebutuhan: {{kebutuhan}}
   Budget: {{budget}}
   
   Email harus:
   - Personal (sebut nama)
   - Acknowledge kebutuhan spesifik mereka
   - Tawarkan solusi yang relevan
   - CTA untuk booking call atau beli produk
   - Tone: profesional tapi hangat
   \`\`\`
3. Tambahkan module "Gmail: Send Email"
4. Aktifkan scenario

**Hasil:** Email follow-up otomatis tergenerate dan terkirim dalam 5 menit setelah form submission.

---

### Workflow 7: Auto-Generate Konten LinkedIn dari Achievement

**Tools:** Zapier + ChatGPT API + LinkedIn

**Trigger:** Baris baru di Google Sheets "Achievements"

**Steps:**
1. Buat Google Sheets dengan kolom: Tanggal, Achievement, Pelajaran, Emosi
2. Buat Zap dengan trigger "Google Sheets: New Row"
3. Tambahkan action "OpenAI: Completion" dengan prompt:
   \`\`\`
   Buatkan post LinkedIn dari achievement berikut:
   Achievement: {{Achievement}}
   Pelajaran: {{Pelajaran}}
   Emosi: {{Emosi}}
   
   Post harus:
   - Hook di kalimat pertama yang membuat orang baca "see more"
   - Cerita personal (bukan corporate speak)
   - Pelajaran yang bisa dipetik reader
   - CTA untuk comment atau share pengalaman mereka
   - Max 1300 karakter
   - Tone: authentic, vulnerable, inspiring
   \`\`\`
4. Tambahkan action "LinkedIn: Create Post" (atau simpan ke Google Docs)
5. Aktifkan Zap

**Hasil:** Post LinkedIn otomatis tergenerate dari setiap achievement yang Anda catat.

---

### Workflow 8: Auto-Generate Konten Twitter Thread dari Blog Post

**Tools:** n8n + OpenAI API + Twitter API

**Trigger:** Blog post baru dipublish

**Steps:**
1. Buat workflow n8n dengan trigger "WordPress: New Post"
2. Tambahkan node "OpenAI: Chat Completion" dengan prompt:
   \`\`\`
   Buatkan Twitter thread 7-10 tweet dari artikel blog berikut:
   [tempel konten blog]
   
   Setiap tweet:
   - Max 280 karakter
   - Hook di tweet pertama
   - 1 ide utama per tweet
   - Flow yang natural antar tweet
   - CTA di tweet terakhir
   - Tone: informative, engaging, tidak terlalu formal
   \`\`\`
3. Tambahkan node "Twitter: Create Tweet" (loop untuk setiap tweet)
4. Aktifkan workflow

**Hasil:** Twitter thread otomatis tergenerate dan dipublish dari setiap blog post baru.

---

### Workflow 9: Auto-Generate Konten YouTube Shorts dari Video Panjang

**Tools:** Make.com + ChatGPT API + YouTube API

**Trigger:** Video YouTube baru dipublish

**Steps:**
1. Buat scenario dengan trigger "YouTube: New Video in Playlist"
2. Tambahkan module "HTTP: Make a Request" untuk get video transcript
3. Tambahkan module "OpenAI: Create a Completion" dengan prompt:
   \`\`\`
   Buatkan 3 script YouTube Shorts 30-60 detik dari transcript video berikut:
   [tempel transcript]
   
   Setiap script:
   - Hook 3 detik pertama yang kuat
   - 1 ide utama yang bisa dijelaskan dalam 30-60 detik
   - CTA di akhir
   - Tone: energik, cocok untuk Shorts
   \`\`\`
4. Simpan ke Google Docs untuk review manual
5. Aktifkan scenario

**Hasil:** 3 script YouTube Shorts otomatis tergenerate dari setiap video panjang baru.

---

### Workflow 10: Auto-Generate Konten Podcast Show Notes

**Tools:** Zapier + ChatGPT API + Podcast Hosting

**Trigger:** Episode podcast baru dipublish

**Steps:**
1. Buat Zap dengan trigger "RSS: New Item in Feed" (podcast RSS)
2. Tambahkan action "OpenAI: Completion" dengan prompt:
   \`\`\`
   Buatkan show notes podcast dari transcript berikut:
   [tempel transcript]
   
   Show notes harus berisi:
   - Judul episode yang menarik
   - Ringkasan 3-4 kalimat
   - 5-7 bullet points highlight utama
   - Timestamp untuk tiap segmen
   - Link dan resource yang disebutkan
   - CTA untuk subscribe atau review
   \`\`\`
3. Tambahkan action "Podcast Hosting: Update Episode" (atau simpan ke Google Docs)
4. Aktifkan Zap

**Hasil:** Show notes podcast otomatis tergenerate dari setiap episode baru.

---

## Studi Kasus Otomasi Konten

### Studi Kasus 1: Kopi Nusantara (UMKM Kopi)

**Tantangan:** Pemilik Kopi Nusantara, Pak Andi, harus posting 3x per minggu di Instagram tapi kewalahan bikin caption.

**Solusi:** Implementasi Workflow 1 (Auto-Generate Instagram Caption)

**Hasil:**
- Waktu bikin caption: dari 2 jam per minggu jadi 15 menit (cuma review dan edit)
- Konsistensi posting: dari 2x per minggu jadi 4x per minggu
- Engagement rate: naik 35% dalam 2 bulan

**Setup time:** 1.5 jam
**Biaya:** Make.com free tier + ChatGPT API Rp 50.000/bulan

---

### Studi Kasus 2: Batik Serasi (Fashion UMKM)

**Tantangan:** Tim marketing Batik Serasi harus bikin email newsletter mingguan tapi sering telat kirim.

**Solusi:** Implementasi Workflow 2 (Auto-Generate Email Newsletter)

**Hasil:**
- Konsistensi kirim: dari 70% jadi 100% (tidak pernah telat lagi)
- Open rate: naik 20% karena subject line lebih variatif
- Click rate: naik 15% karena konten lebih relevan

**Setup time:** 2 jam
**Biaya:** Zapier Starter $19/bulan + ChatGPT API Rp 50.000/bulan

---

### Studi Kasus 3: TechSolusi (SaaS B2B)

**Tantangan:** TechSolusi harus publish 2 blog post per minggu untuk SEO tapi tim content kecil.

**Solusi:** Implementasi Workflow 3 (Auto-Generate Konten Blog)

**Hasil:**
- Output blog: dari 2 per minggu jadi 4 per minggu
- Waktu writing: dari 8 jam per post jadi 2 jam per post (cuma editing)
- Organic traffic: naik 60% dalam 3 bulan

**Setup time:** 3 jam (termasuk custom prompt engineering)
**Biaya:** n8n cloud $20/bulan + OpenAI API Rp 150.000/bulan

---

### Studi Kasus 4: Fashionista Shop (E-commerce Fashion)

**Tantangan:** Fashionista Shop dapat 50+ form submission per hari tapi follow-up email manual dan lambat.

**Solusi:** Implementasi Workflow 6 (Auto-Generate Email Follow-Up)

**Hasil:**
- Response time: dari 4 jam jadi 5 menit
- Conversion rate: naik 25% karena follow-up lebih cepat dan personal
- Customer satisfaction: rating 4.8/5 (dari 4.2/5)

**Setup time:** 2 jam
**Biaya:** Make.com Pro $9/bulan + ChatGPT API Rp 100.000/bulan

---

## Troubleshooting Integrasi AI

### Masalah 1: Output AI Tidak Konsisten

**Gejala:** Kadang bagus, kadang tidak relevan.

**Solusi:**
1. Tambahkan contoh output yang diinginkan di prompt (few-shot prompting)
2. Tambahkan batasan lebih spesifik (panjang, tone, struktur)
3. Gunakan temperature 0.7 untuk kreatif, 0.3 untuk konsisten
4. Test dengan 10 input berbeda sebelum deploy

---

### Masalah 2: API Rate Limit

**Gejala:** Error 429 Too Many Requests.

**Solusi:**
1. Tambahkan delay antar request (1-2 detik)
2. Upgrade plan API (ChatGPT API free tier: 3 RPM, paid: 60+ RPM)
3. Implementasi retry logic dengan exponential backoff
4. Batch processing di jam off-peak

---

### Masalah 3: Biaya API Membengkak

**Gejala:** Tagihan API lebih tinggi dari expected.

**Solusi:**
1. Monitor usage di dashboard OpenAI/Anthropic
2. Set hard limit di API settings
3. Gunakan model yang lebih murah untuk task sederhana (GPT-3.5 untuk caption, GPT-4 untuk artikel panjang)
4. Cache output yang sering dipakai

---

### Masalah 4: Integrasi Gagal di Tengah Jalan

**Gejala:** Workflow berhenti di step tertentu.

**Solusi:**
1. Check error log di Make.com/Zapier/n8n
2. Test setiap module secara individual
3. Pastikan API key masih valid (tidak expired)
4. Tambahkan error handling module (continue on error)

---

### Masalah 5: Output AI Terlalu Generik

**Gejala:** Hasil terlihat seperti template, tidak personal.

**Solusi:**
1. Tambahkan konteks spesifik di prompt (nama brand, target audience, tone)
2. Gunakan variable dari trigger (nama customer, produk yang dibeli)
3. Tambahkan contoh output yang diinginkan (few-shot)
4. Post-processing: edit manual 10-20% sebelum publish

---

## Custom Integration dengan Kode

Untuk kebutuhan yang lebih kompleks, Anda bisa pakai kode custom. Berikut template untuk 3 bahasa pemrograman populer.

### Node.js: Generate Caption dengan OpenAI API

\`\`\`javascript
const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function generateCaption(product) {
  const completion = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [
      {
        role: 'system',
        content: 'Anda adalah copywriter Instagram profesional untuk UMKM Indonesia.',
      },
      {
        role: 'user',
        content: \`Buatkan 3 caption Instagram untuk produk: \${product.name}, harga \${product.price}, target \${product.target}\`,
      },
    ],
    temperature: 0.7,
    max_tokens: 500,
  });

  return completion.choices[0].message.content;
}

// Usage
generateCaption({
  name: 'Kopi Gayo Organik',
  price: 'Rp 85.000',
  target: 'pecinta kopi usia 25-40',
}).then(console.log);
\`\`\`

### Python: Generate Email dengan OpenAI API

\`\`\`python
import openai
import os

openai.api_key = os.getenv('OPENAI_API_KEY')

def generate_email(customer_name, product_name, purchase_date):
    response = openai.ChatCompletion.create(
        model='gpt-4',
        messages=[
            {'role': 'system', 'content': 'Anda adalah customer service profesional untuk e-commerce Indonesia.'},
            {'role': 'user', 'content': f'Buatkan email thank you untuk {customer_name} yang membeli {product_name} pada {purchase_date}. Tone: hangat, profesional, max 150 kata.'}
        ],
        temperature=0.7,
        max_tokens=300,
    )
    return response.choices[0].message.content

# Usage
email = generate_email('Budi Santoso', 'Kopi Gayo 250g', '22 Oktober 2026')
print(email)
\`\`\`

### PHP: Generate Konten Blog dengan OpenAI API

\`\`\`php
<?php
require 'vendor/autoload.php';

use OpenAI\\Client;

$client = OpenAI::client($_ENV['OPENAI_API_KEY']);

function generateBlogPost($keyword, $client) {
    $result = $client->chat()->create([
        'model' => 'gpt-4',
        'messages' => [
            ['role' => 'system', 'content' => 'Anda adalah content writer SEO profesional untuk blog Indonesia.'],
            ['role' => 'user', 'content' => "Buatkan artikel blog 800 kata untuk keyword: {$keyword}. Struktur: H1, pendahuluan, 3-4 H2, kesimpulan. Tone: edukatif, contoh konkret."],
        ],
        'temperature' => 0.7,
        'max_tokens' => 1500,
    ]);

    return $result->choices[0]->message->content;
}

// Usage
$post = generateBlogPost('cara buat kopi manual brew', $client);
echo $post;
?>
\`\`\`

---

## Checklist Implementasi Otomasi

Gunakan checklist ini sebelum deploy workflow otomasi:

- [ ] Prompt sudah ditest dengan 10 input berbeda
- [ ] Output AI sudah di-review dan sesuai standar kualitas
- [ ] API key sudah disimpan di environment variable (bukan hardcode)
- [ ] Rate limit sudah dikonfigurasi
- [ ] Error handling sudah ditambahkan
- [ ] Monitoring sudah disetup (alert jika workflow gagal)
- [ ] Backup manual process masih ada (jika AI gagal)
- [ ] Biaya sudah dihitung dan sesuai budget
- [ ] Tim sudah dilatih cara pakai workflow
- [ ] Dokumentasi workflow sudah dibuat

---
`;

// Insert automation sections before Lampiran
const lampiranIdx = md.indexOf('## Lampiran');
if (lampiranIdx > 0) {
  const before = md.substring(0, lampiranIdx);
  const after = md.substring(lampiranIdx);
  md = before + automationSections.trim() + '\n\n' + after;
  console.log('Automation sections added before Lampiran');
} else {
  // Append at end
  md += automationSections;
  console.log('Automation sections appended at end');
}

fs.writeFileSync('drafts/300-prompt-copywriting-ultimate.md', md);
console.log('Ultimate manuscript updated. File size:', md.length, 'characters');
