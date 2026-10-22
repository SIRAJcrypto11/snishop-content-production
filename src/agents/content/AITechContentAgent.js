const logger = require('../../utils/logger');
const OpenAI = require('openai');

/**
 * AITechContentAgent - Specializes in AI/tech content generation.
 *
 * Produces tutorials, guides, and ebooks on topics such as prompt engineering,
 * vibecoding, AI tools, and programming. Content is written in Bahasa Indonesia
 * with a professional technical tone and includes screenshot references for
 * visual documentation.
 */
class AITechContentAgent {
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
    this.specialization = 'ai-tech';

    this.categories = [
      'prompt-engineering',
      'vibecoding',
      'ai-tools',
      'programming',
      'tutorial',
      'chatgpt',
      'coding',
    ];

    logger.info('AITechContentAgent initialized', {
      model: this.model,
      specialization: this.specialization,
    });
  }

  // ---------------------------------------------------------------------------
  // Content Generation
  // ---------------------------------------------------------------------------

  /**
   * Generate technical content for a given topic.
   *
   * @param {string} topic - The topic or title for the content
   * @returns {Promise<{markdown: string, screenshotReferences: string[], wordCount: number, estimatedPages: number}>}
   */
  async generateContent(topic) {
    if (!topic || typeof topic !== 'string') {
      throw new Error('generateContent requires a non-empty topic string');
    }

    try {
      logger.info('Generating AI/Tech content', { topic });

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

      logger.info('AI/Tech content generated', {
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
      logger.error('Failed to generate AI/Tech content', {
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
   * Build a detailed prompt for the given topic.
   *
   * @param {string} topic - The content topic
   * @returns {string} The full prompt text
   */
  buildPrompt(topic) {
    return `Buatkan konten teknis mendalam dalam format Markdown tentang: "${topic}"

Struktur konten yang harus diikuti:

1. **Judul Utama** (H1) - Judul yang menarik dan jelas
2. **Pendahuluan** - Gambaran umum topik dan mengapa penting
3. **Prasyarat** - Apa yang perlu disiapkan/diketahui sebelum memulai
4. **Langkah-langkah Utama** - Tutorial step-by-step dengan penjelasan detail
5. **Contoh Kode/Implementasi** - Code block yang relevan jika ada
6. **Tips & Best Practices** - Rekomendasi praktis
7. **Kesimpulan** - Ringkasan dan langkah selanjutnya

Persyaratan:
- Gunakan Bahasa Indonesia yang profesional dan mudah dipahami
- Sertakan referensi screenshot menggunakan format [screenshot:deskripsi-screenshot] di setiap langkah penting
- Minimal 5 referensi screenshot untuk tutorial
- Gunakan code block dengan syntax highlighting yang tepat
- Hindari penggunaan em-dash (--), asterisk berlebih, dan ikon AI
- Tulis dengan gaya tutorial praktis, bukan teori semata
- Target: developer dan tech enthusiast Indonesia
- Panjang minimal 1500 kata`;
  }

  /**
   * Get the system message for the AI/Tech content agent.
   *
   * @returns {string} System message
   */
  getSystemMessage() {
    return `Anda adalah penulis teknis profesional yang berspesialisasi dalam pembuatan konten tentang AI, prompt engineering, vibecoding, dan programming tutorial.

Aturan penulisan:
- Tulis dalam Bahasa Indonesia yang profesional dan natural
- JANGAN gunakan em-dash (--), gunakan tanda baca yang sesuai
- JANGAN gunakan asterisk berlebihan untuk penekanan
- JANGAN gunakan ikon AI atau emoji yang mencolok
- Gaya tulisan harus terasa seperti ditulis oleh manusia, bukan AI
- Fokus pada konten praktis dan actionable
- Sertakan contoh kode yang benar dan dapat dijalankan
- Gunakan format Markdown yang rapi dan terstruktur
- Setiap langkah tutorial harus disertai referensi screenshot dengan format [screenshot:deskripsi]`;
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

module.exports = AITechContentAgent;
