const logger = require('../../utils/logger');
const OpenAI = require('openai');

/**
 * SNISHOPContentAgent - Specializes in SNISHOP ecosystem content generation.
 *
 * Produces tutorials, guides, and documentation specifically for the SNISHOP
 * product suite including POS, HR, CRM, Accounting, Inventory, and other
 * modules. References actual screenshots from SNISHOP applications and
 * provides module-specific instructions for Indonesian business users.
 */
class SNISHOPContentAgent {
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
    this.specialization = 'snishop';

    this.categories = [
      'snishop-tutorial',
      'snishop-guide',
      'snishop-pos',
      'snishop-hr',
      'snishop-crm',
      'snishop-accounting',
      'snishop-inventory',
      'snishop-ecommerce',
    ];

    /**
     * SNISHOP modules that can be referenced in content.
     * Each module maps to a set of features within the SNISHOP ecosystem.
     */
    this.modules = {
      pos: { name: 'Point of Sale', description: 'Kasir digital, transaksi penjualan, manajemen outlet' },
      hr: { name: 'Human Resource', description: 'Absensi, payroll, manajemen karyawan, shift' },
      crm: { name: 'Customer Relationship', description: 'Data pelanggan, loyalitas, segmentasi' },
      accounting: { name: 'Akuntansi', description: 'Jurnal, laporan keuangan, neraca, laba rugi' },
      inventory: { name: 'Inventori', description: 'Stok barang, gudang, opname, mutasi' },
      ecommerce: { name: 'E-Commerce', description: 'Toko online, katalog, keranjang, checkout' },
      purchasing: { name: 'Pembelian', description: 'Purchase order, supplier, penerimaan barang' },
      reporting: { name: 'Laporan', description: 'Dashboard, analitik, laporan custom' },
    };

    logger.info('SNISHOPContentAgent initialized', {
      model: this.model,
      specialization: this.specialization,
      modules: Object.keys(this.modules).length,
    });
  }

  // ---------------------------------------------------------------------------
  // Content Generation
  // ---------------------------------------------------------------------------

  /**
   * Generate SNISHOP-specific content for a given topic.
   *
   * @param {string} topic - The topic or title for the content
   * @param {object} [context] - Additional context for content generation
   * @param {string} [context.module] - Specific SNISHOP module (pos, hr, crm, etc.)
   * @param {string[]} [context.screenshots] - Available screenshot filenames
   * @returns {Promise<{markdown: string, screenshotReferences: string[], wordCount: number, estimatedPages: number}>}
   */
  async generateContent(topic, context = {}) {
    if (!topic || typeof topic !== 'string') {
      throw new Error('generateContent requires a non-empty topic string');
    }

    try {
      logger.info('Generating SNISHOP content', { topic, module: context.module });

      const prompt = this.buildPrompt(topic, context);

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

      logger.info('SNISHOP content generated', {
        topic,
        module: context.module,
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
      logger.error('Failed to generate SNISHOP content', {
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
   * Build a detailed prompt for the given SNISHOP topic.
   *
   * @param {string} topic - The content topic
   * @param {object} [context] - Additional context
   * @param {string} [context.module] - Specific SNISHOP module
   * @param {string[]} [context.screenshots] - Available screenshot filenames
   * @returns {string} The full prompt text
   */
  buildPrompt(topic, context = {}) {
    const moduleInfo = context.module && this.modules[context.module]
      ? `\n\nModul SNISHOP yang dibahas: ${this.modules[context.module].name} - ${this.modules[context.module].description}`
      : '';

    const screenshotList = context.screenshots && context.screenshots.length > 0
      ? `\n\nDaftar screenshot yang tersedia untuk direferensikan:\n${context.screenshots.map((s) => `- ${s}`).join('\n')}`
      : '';

    return `Buatkan tutorial/panduan lengkap dalam format Markdown tentang: "${topic}"${moduleInfo}${screenshotList}

Struktur konten yang harus diikuti:

1. **Judul Utama** (H1) - Judul yang jelas mencerminkan fitur SNISHOP
2. **Pendahuluan** - Gambaran umum fitur dan manfaatnya untuk bisnis
3. **Cara Mengakses** - Langkah navigasi di aplikasi SNISHOP (menu mana yang harus dibuka)
4. **Panduan Step-by-Step** - Instruksi detail penggunaan fitur dengan referensi screenshot
5. **Tips & Best Practices** - Rekomendasi penggunaan optimal
6. **Trouleshooting** - Masalah umum dan solusinya
7. **Kesimpulan** - Ringkasan fitur dan langkah selanjutnya

Persyaratan:
- Gunakan Bahasa Indonesia yang profesional dan mudah dipahami
- Sertakan referensi screenshot menggunakan format [screenshot:deskripsi-screenshot] di setiap langkah penting
- Minimal 5 referensi screenshot untuk tutorial lengkap
- Referensikan menu, tombol, dan elemen UI SNISHOP yang spesifik
- Hindari penggunaan em-dash (--), asterisk berlebihan, dan ikon AI
- Tulis dengan gaya panduan produk yang praktis
- Target: pengguna SNISHOP (pemilik bisnis, kasir, admin, manajer)
- Panjang minimal 1200 kata
- Jika membahas modul tertentu, jelaskan integrasinya dengan modul SNISHOP lainnya`;
  }

  /**
   * Get the system message for the SNISHOP content agent.
   *
   * @returns {string} System message
   */
  getSystemMessage() {
    return `Anda adalah ahli produk SNISHOP yang berspesialisasi dalam pembuatan tutorial dan dokumentasi untuk ekosistem SNISHOP.

Pengetahuan produk:
- SNISHOP adalah platform bisnis all-in-one untuk UMKM dan perusahaan Indonesia
- Modul utama: POS (kasir), HR (absensi & payroll), CRM (pelanggan), Akuntansi, Inventori, E-Commerce, Purchasing, Reporting
- Platform tersedia di erp.snishop.com (web), app.snishop.com (mobile), dan snishop.com (landing)
- Produk terkait: usahakan.digital, lynk.id

Aturan penulisan:
- Tulis dalam Bahasa Indonesia yang profesional dan natural
- JANGAN gunakan em-dash (--), gunakan tanda baca yang sesuai
- JANGAN gunakan asterisk berlebihan untuk penekanan
- JANGAN gunakan ikon AI atau emoji yang mencolok
- Gaya tulisan harus terasa seperti ditulis oleh manusia, bukan AI
- Fokus pada panduan praktis yang actionable
- Referensikan elemen UI SNISHOP secara spesifik (nama menu, tombol, kolom)
- Gunakan format Markdown yang rapi dan terstruktur
- Setiap langkah harus disertai referensi screenshot dengan format [screenshot:deskripsi]
- Jelaskan integrasi antar modul ketika relevan`;
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

module.exports = SNISHOPContentAgent;
