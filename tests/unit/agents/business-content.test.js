/**
 * Unit tests for BusinessContentAgent
 *
 * External dependencies (OpenAI, logger) are mocked so that tests
 * run in isolation without requiring API keys or network access.
 */

// ---- Mocks ------------------------------------------------------------------

jest.mock('openai', () => {
  return jest.fn().mockImplementation(() => ({
    chat: {
      completions: {
        create: jest.fn(),
      },
    },
  }));
});

jest.mock('../../../src/utils/logger', () => ({
  info: jest.fn(),
  warn: jest.fn(),
  error: jest.fn(),
}));

// ---- Imports (after mocks) --------------------------------------------------

const BusinessContentAgent = require('../../../src/agents/content/BusinessContentAgent');
const OpenAI = require('openai');

// ---- Tests ------------------------------------------------------------------

describe('BusinessContentAgent', () => {
  let agent;
  let mockCreate;

  beforeEach(() => {
    jest.clearAllMocks();
    process.env.OPENAI_API_KEY = 'test-api-key';
    agent = new BusinessContentAgent();
    mockCreate = agent.client.chat.completions.create;
  });

  afterEach(() => {
    delete process.env.OPENAI_API_KEY;
  });

  // --------------------------------------------------------------------------
  // Initialization
  // --------------------------------------------------------------------------
  describe('initialization', () => {
    test('should initialize with default model gpt-4', () => {
      expect(agent.model).toBe('gpt-4');
    });

    test('should initialize with default temperature 0.7', () => {
      expect(agent.temperature).toBe(0.7);
    });

    test('should initialize with default maxTokens 8000', () => {
      expect(agent.maxTokens).toBe(8000);
    });

    test('should have business specialization', () => {
      expect(agent.specialization).toBe('business');
    });

    test('should define business content categories', () => {
      expect(agent.categories).toContain('business-guide');
      expect(agent.categories).toContain('accounting');
      expect(agent.categories).toContain('hr-document');
      expect(agent.categories).toContain('template');
      expect(agent.categories).toContain('tax');
      expect(agent.categories).toContain('finance');
    });

    test('should initialize OpenAI client', () => {
      expect(OpenAI).toHaveBeenCalledWith({ apiKey: 'test-api-key' });
    });

    test('should allow custom model override', () => {
      const custom = new BusinessContentAgent({ model: 'gpt-4-turbo' });
      expect(custom.model).toBe('gpt-4-turbo');
    });

    test('should allow custom temperature override', () => {
      const custom = new BusinessContentAgent({ temperature: 0.3 });
      expect(custom.temperature).toBe(0.3);
    });
  });

  // --------------------------------------------------------------------------
  // generateContent
  // --------------------------------------------------------------------------
  describe('generateContent', () => {
    test('should return proper structure with markdown, screenshotReferences, wordCount, estimatedPages', async () => {
      const mockMarkdown = `# Panduan Pembukuan UMKM

## Pendahuluan
Membukuan adalah fondasi bisnis yang sehat.

## Langkah 1: Catat Transaksi
Setiap transaksi harus dicatat.

[screenshot:catat-transaksi-penjualan]

## Langkah 2: Klasifikasi Akun
Pisahkan akun pendapatan dan beban.

[screenshot:klasifikasi-akun]

## Regulasi Pajak
PPh final UMKM 0.5% dari omzet.

## Kesimpulan
Pembukuan yang rapi membantu bisnis berkembang.`;

      mockCreate.mockResolvedValueOnce({
        choices: [{ message: { content: mockMarkdown } }],
      });

      const result = await agent.generateContent('Panduan Pembukuan UMKM');

      expect(result).toHaveProperty('markdown');
      expect(result).toHaveProperty('screenshotReferences');
      expect(result).toHaveProperty('wordCount');
      expect(result).toHaveProperty('estimatedPages');
      expect(typeof result.markdown).toBe('string');
      expect(Array.isArray(result.screenshotReferences)).toBe(true);
      expect(typeof result.wordCount).toBe('number');
      expect(typeof result.estimatedPages).toBe('number');
    });

    test('should call OpenAI with correct parameters', async () => {
      mockCreate.mockResolvedValueOnce({
        choices: [{ message: { content: 'Konten bisnis test' } }],
      });

      await agent.generateContent('Test Topic');

      expect(mockCreate).toHaveBeenCalledWith(
        expect.objectContaining({
          model: 'gpt-4',
          temperature: 0.7,
          max_tokens: 8000,
          messages: expect.arrayContaining([
            expect.objectContaining({ role: 'system' }),
            expect.objectContaining({ role: 'user' }),
          ]),
        })
      );
    });

    test('should throw error when topic is empty', async () => {
      await expect(agent.generateContent('')).rejects.toThrow(
        'generateContent requires a non-empty topic string'
      );
    });

    test('should throw error when topic is null', async () => {
      await expect(agent.generateContent(null)).rejects.toThrow(
        'generateContent requires a non-empty topic string'
      );
    });

    test('should propagate OpenAI API errors', async () => {
      mockCreate.mockRejectedValueOnce(new Error('API quota exceeded'));

      await expect(agent.generateContent('Test')).rejects.toThrow('API quota exceeded');
    });

    test('should calculate wordCount correctly', async () => {
      const content = 'Satu dua tiga empat lima';
      mockCreate.mockResolvedValueOnce({
        choices: [{ message: { content } }],
      });

      const result = await agent.generateContent('Test');
      expect(result.wordCount).toBe(5);
    });

    test('should calculate estimatedPages based on 300 words per page', async () => {
      const words = Array(600).fill('kata').join(' ');
      mockCreate.mockResolvedValueOnce({
        choices: [{ message: { content: words } }],
      });

      const result = await agent.generateContent('Test');
      expect(result.estimatedPages).toBe(2);
    });

    test('should include Indonesian business context in prompt', async () => {
      mockCreate.mockResolvedValueOnce({
        choices: [{ message: { content: 'Konten pajak' } }],
      });

      await agent.generateContent('Panduan Pajak UMKM');

      const callArgs = mockCreate.mock.calls[0][0];
      const userPrompt = callArgs.messages.find((m) => m.role === 'user').content;
      expect(userPrompt).toContain('PPh');
      expect(userPrompt).toContain('regulasi');
    });
  });

  // --------------------------------------------------------------------------
  // extractScreenshotReferences
  // --------------------------------------------------------------------------
  describe('extractScreenshotReferences', () => {
    test('should extract single screenshot reference', () => {
      const markdown = 'Buka menu [screenshot:menu-akuntansi] lalu klik.';
      const result = agent.extractScreenshotReferences(markdown);
      expect(result).toEqual(['menu-akuntansi']);
    });

    test('should extract multiple screenshot references', () => {
      const markdown = `
        [screenshot:dashboard-keuangan]
        Langkah pertama.
        [screenshot:input-jurnal-umum]
        Langkah kedua.
        [screenshot:laporan-laba-rugi]
      `;
      const result = agent.extractScreenshotReferences(markdown);
      expect(result).toEqual([
        'dashboard-keuangan',
        'input-jurnal-umum',
        'laporan-laba-rugi',
      ]);
    });

    test('should return empty array when no references found', () => {
      const markdown = 'No screenshot references here.';
      const result = agent.extractScreenshotReferences(markdown);
      expect(result).toEqual([]);
    });

    test('should return empty array for null input', () => {
      expect(agent.extractScreenshotReferences(null)).toEqual([]);
    });

    test('should return empty array for empty string', () => {
      expect(agent.extractScreenshotReferences('')).toEqual([]);
    });

    test('should handle references with Indonesian descriptions', () => {
      const markdown = '[screenshot:halaman-pembayaran-gaji-karyawan]';
      const result = agent.extractScreenshotReferences(markdown);
      expect(result).toEqual(['halaman-pembayaran-gaji-karyawan']);
    });
  });

  // --------------------------------------------------------------------------
  // buildPrompt
  // --------------------------------------------------------------------------
  describe('buildPrompt', () => {
    test('should include the topic in the prompt', () => {
      const prompt = agent.buildPrompt('Panduan BPJS Ketenagakerjaan');
      expect(prompt).toContain('Panduan BPJS Ketenagakerjaan');
    });

    test('should request Markdown format', () => {
      const prompt = agent.buildPrompt('Test');
      expect(prompt).toContain('Markdown');
    });

    test('should request screenshot references', () => {
      const prompt = agent.buildPrompt('Test');
      expect(prompt).toContain('[screenshot:');
    });

    test('should specify Bahasa Indonesia', () => {
      const prompt = agent.buildPrompt('Test');
      expect(prompt).toContain('Bahasa Indonesia');
    });

    test('should reference Indonesian regulations', () => {
      const prompt = agent.buildPrompt('Test');
      expect(prompt).toContain('regulasi');
    });

    test('should mention tax context', () => {
      const prompt = agent.buildPrompt('Test');
      expect(prompt).toContain('pajak');
    });
  });
});
