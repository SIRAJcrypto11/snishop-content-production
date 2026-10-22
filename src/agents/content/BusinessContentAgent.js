const logger = require('../../utils/logger');
const OpenAI = require('openai');

/**
 * BusinessContentAgent - Specializes in business content generation.
 *
 * Produces business guides, accounting templates, HR documents, and operational
 * procedures tailored for Indonesian businesses. Content includes local context
 * such as tax regulations (PPh, PPN), BPJS, and UMKM compliance requirements.
 */
class BusinessContentAgent {
  /**
   * @param {object} [options]
   * @param {string} [options.model='gpt-4'] OpenAI model to use
   * @param {number} [options.temperature=0.7] Sampling temperature
   * @param {number} [options.maxTokens=8000] Maximum tokens in response
   */
  constructor(options = {}) {
    this.client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    this.model = options.model || 'gpt-4';
    this.temperature = options.temperature ?? 0.7;
    this.maxTokens = options.maxTokens ?? 8000;
    this.specialization = 'business';

    this.categories = [
      'business-guide',
      'accounting',
      'hr-document',
      'template',
      'tax',
      'finance',
      'management',
      'operational',
    ];

    logger.info('BusinessContentAgent initialized', {
      model: this.model,
      specialization: this.specialization,
    });
  }

  // ---------------------------------------------------------------------------
  // Content Generation
  // ---------------------------------------------------------------------------

  /**
   * Generate business content for a given topic.
   *
   * @param {string} topic - The topic or title for the content
   * @returns {Promise<{markdown: string, screenshotReferences: string[], wordCount: number, estimatedPages: number}>}
   */
  async generateContent(topic) {
    if (!topic || typeof topic !== 'string') {
      throw new Error('generateContent requires a non-empty topic string');
    }

    try {
      logger.info('Generating business content', { topic });

      const prompt = this.buildPrompt(topic);

      const response = await this.client.chat.completions.create({
        model: this.model,
        messages: [
          {
            role: 'system',
            content: this.getSystemMessage(),
          },
          {
            role: 'user',
            content: prompt,
          },
        ],
        temperature: this.temperature,
        max_tokens: this.maxTokens,
      });

      const markdown = response.choices[0].message.content;
      const screenshotReferences = this.extractScreenshotReferences(markdown);
      const wordCount = markdown.split(/\s+/).filter(Boolean).length;
      const estimatedPages = Math.ceil(wordCount / 300);

      logger.info('Business content generated', {
        topic,
        wordCount,
        screenshotCount: screenshotReferences.length,
        estimatedPages,
      });

      return {
        markdown,
        screenshotReferences,
        wordCount,
        estimatedPages,
      };
    } catch (error) {
      logger.error('Failed to generate business content', {
        topic,
        error: error.message,
      });
      throw error;
    }
  }

  // ---------------------------------------------------------------------------
  // Prompt Building
  // ---------------------------------------------------------------------------

  /**
   * Build a detailed prompt for the given business topic.
   *
   * @param {string} topic - The content topic
   * @returns {string} The full prompt text
   */
  buildPrompt(topic) {
    return `Buatkan konten bisnis praktis dalam format Markdown tentang: "${topic}"

Struktur konten yang harus diikuti:

1. **Judul Utama** (H1) - Judul yang jelas dan profesional
2. **Pendahuluan** - Latar belakang dan relevansi untuk bisnis Indonesia
3. **Konsep Dasar** - Penjelasan prinsip-prinsip utama
4. **Langkah Implementasi** - Panduan praktis step-by-step
5. **Template/Contoh Dokumen** - Contoh yang bisa langsung digunakan
6. **Regulasi & Kepatuhan** - Aspek hukum dan regulasi Indonesia yang relevan (pajak, BPJS, UU Cipta Kerja, dll)
7. **Tips Praktis** - Rekomendasi untuk UMKM dan perusahaan menengah
8. **Kesimpulan** - Ringkasan dan action items

Persyaratan:
- Gunakan Bahasa Indonesia yang profesional dan mudah dipahami
- Sertakan referensi screenshot menggunakan format [screenshot:deskripsi-screenshot] di bagian yang memerlukan visual
- Minimal 3 referensi screenshot untuk panduan operasional
- Konteks Indonesia: sertakan referensi ke regulasi lokal (PPh 21, PPh 23, PPN, BPJS Ketenagakerjaan, BPJS Kesehatan, SPT Tahunan, dll)
- Hindari penggunaan em-dash (--), asterisk berlebihan, dan ikon AI
- Tulis dengan gaya praktis dan actionable, bukan teori semata
- Target: pemilik bisnis, manajer, dan profesional Indonesia
- Panjang minimal 1500 kata
- Sertakan contoh angka dan perhitungan yang realistis`;
  }

  /**
   * Get the system message for the business content agent.
   *
   * @returns {string} System message
   */
  getSystemMessage() {
    return `Anda adalah konsultan bisnis dan penulis profesional yang berspesialisasi dalam pembuatan konten bisnis untuk pasar Indonesia.

Aturan penulisan:
- Tulis dalam Bahasa Indonesia yang profesional dan natural
- JANGAN gunakan em-dash (--), gunakan tanda baca yang sesuai
- JANGAN gunakan asterisk berlebihan untuk penekanan
- JANGAN gunakan ikon AI atau emoji yang mencolok
- Gaya tulisan harus terasa seperti ditulis oleh manusia, bukan AI
- Fokus pada konten praktis dan actionable untuk pebisnis Indonesia
- Sertakan konteks regulasi Indonesia (perpajakan, ketenagakerjaan, UMKM)
- Gunakan format Markdown yang rapi dan terstruktur
- Berikan contoh dokumen, template, dan perhitungan yang realistis
- Setiap bagian penting harus disertai referensi screenshot dengan format [screenshot:deskripsi]`;
  }

  // ---------------------------------------------------------------------------
  // Screenshot Reference Extraction
  // ---------------------------------------------------------------------------

  /**
   * Extract all screenshot references from markdown content.
   *
   * Looks for patterns matching [screenshot:description] and returns an array
   * of the description strings.
   *
   * @param {string} markdown - The markdown content to scan
   * @returns {string[]} Array of screenshot reference descriptions
   */
  extractScreenshotReferences(markdown) {
    if (!markdown || typeof markdown !== 'string') {
      return [];
    }

    const regex = /\[screenshot:([^\]]+)\]/g;
    const references = [];
    let match;

    while ((match = regex.exec(markdown)) !== null) {
      references.push(match[1]);
    }

    return references;
  }
}

module.exports = BusinessContentAgent;
