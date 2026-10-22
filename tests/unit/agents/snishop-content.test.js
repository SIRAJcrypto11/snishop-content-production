/**
 * Unit tests for SNISHOPContentAgent
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

const SNISHOPContentAgent = require('../../../src/agents/content/SNISHOPContentAgent');
const OpenAI = require('openai');

// ---- Tests ------------------------------------------------------------------

describe('SNISHOPContentAgent', () => {
  let agent;
  let mockCreate;

  beforeEach(() => {
    jest.clearAllMocks();
    process.env.OPENAI_API_KEY = 'test-api-key';
    agent = new SNISHOPContentAgent();
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

    test('should have snishop specialization', () => {
      expect(agent.specialization).toBe('snishop');
    });

    test('should define SNISHOP content categories', () => {
      expect(agent.categories).toContain('snishop-tutorial');
      expect(agent.categories).toContain('snishop-guide');
      expect(agent.categories).toContain('snishop-pos');
      expect(agent.categories).toContain('snishop-hr');
      expect(agent.categories).toContain('snishop-crm');
      expect(agent.categories).toContain('snishop-accounting');
      expect(agent.categories).toContain('snishop-inventory');
    });

    test('should initialize OpenAI client', () => {
      expect(OpenAI).toHaveBeenCalledWith({ apiKey: 'test-api-key' });
    });

    test('should define SNISHOP modules', () => {
      expect(agent.modules).toHaveProperty('pos');
      expect(agent.modules).toHaveProperty('hr');
      expect(agent.modules).toHaveProperty('crm');
      expect(agent.modules).toHaveProperty('accounting');
      expect(agent.modules).toHaveProperty('inventory');
      expect(agent.modules).toHaveProperty('ecommerce');
      expect(agent.modules).toHaveProperty('purchasing');
      expect(agent.modules).toHaveProperty('reporting');
    });

    test('each module should have name and description', () => {
      Object.values(agent.modules).forEach((mod) => {
        expect(mod).toHaveProperty('name');
        expect(mod).toHaveProperty('description');
        expect(typeof mod.name).toBe('string');
        expect(typeof mod.description).toBe('string');
      });
    });

    test('should allow custom model override', () => {
      const custom = new SNISHOPContentAgent({ model: 'gpt-4-turbo' });
      expect(custom.model).toBe('gpt-4-turbo');
    });

    test('should allow custom temperature override', () => {
      const custom = new SNISHOPContentAgent({ temperature: 0.9 });
      expect(custom.temperature).toBe(0.9);
    });
  });

  // --------------------------------------------------------------------------
  // generateContent
  // --------------------------------------------------------------------------
  describe('generateContent', () => {
    test('should return proper structure with markdown, screenshotReferences, wordCount, estimatedPages', async () => {
      const mockMarkdown = `# Cara Menggunakan Fitur POS SNISHOP

## Pendahuluan
Fitur POS SNISHOP memudahkan transaksi penjualan.

## Cara Mengakses
Buka menu Kasir > POS.

[screenshot:menu-pos-snishop]

## Langkah 1: Tambah Produk
Klik tombol Tambah Produk.

[screenshot:tambah-produk-pos]

## Langkah 2: Proses Pembayaran
Pilih metode pembayaran.

[screenshot:pembayaran-pos]

## Tips
Gunakan shortcut keyboard untuk kecepatan.

## Kesimpulan
POS SNISHOP optimal untuk retail.`;

      mockCreate.mockResolvedValueOnce({
        choices: [{ message: { content: mockMarkdown } }],
      });

      const result = await agent.generateContent('Fitur POS SNISHOP');

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
        choices: [{ message: { content: 'Konten SNISHOP test' } }],
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

    test('should accept context with module parameter', async () => {
      mockCreate.mockResolvedValueOnce({
        choices: [{ message: { content: 'Konten HR' } }],
      });

      const result = await agent.generateContent('Panduan Absensi', { module: 'hr' });

      expect(result).toHaveProperty('markdown');
      expect(mockCreate).toHaveBeenCalled();

      const callArgs = mockCreate.mock.calls[0][0];
      const userPrompt = callArgs.messages.find((m) => m.role === 'user').content;
      expect(userPrompt).toContain('Human Resource');
    });

    test('should accept context with screenshots parameter', async () => {
      mockCreate.mockResolvedValueOnce({
        choices: [{ message: { content: 'Konten dengan screenshot' } }],
      });

      await agent.generateContent('Tutorial POS', {
        screenshots: ['pos-dashboard.png', 'pos-transaksi.png'],
      });

      const callArgs = mockCreate.mock.calls[0][0];
      const userPrompt = callArgs.messages.find((m) => m.role === 'user').content;
      expect(userPrompt).toContain('pos-dashboard.png');
      expect(userPrompt).toContain('pos-transaksi.png');
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
      mockCreate.mockRejectedValueOnce(new Error('Model overloaded'));

      await expect(agent.generateContent('Test')).rejects.toThrow('Model overloaded');
    });

    test('should calculate wordCount correctly', async () => {
      const content = 'Satu dua tiga empat lima enam tujuh';
      mockCreate.mockResolvedValueOnce({
        choices: [{ message: { content } }],
      });

      const result = await agent.generateContent('Test');
      expect(result.wordCount).toBe(7);
    });

    test('should calculate estimatedPages based on 300 words per page', async () => {
      const words = Array(1200).fill('kata').join(' ');
      mockCreate.mockResolvedValueOnce({
        choices: [{ message: { content: words } }],
      });

      const result = await agent.generateContent('Test');
      expect(result.estimatedPages).toBe(4);
    });
  });

  // --------------------------------------------------------------------------
  // extractScreenshotReferences
  // --------------------------------------------------------------------------
  describe('extractScreenshotReferences', () => {
    test('should extract single screenshot reference', () => {
      const markdown = 'Buka [screenshot:menu-pos-utama] untuk mulai.';
      const result = agent.extractScreenshotReferences(markdown);
      expect(result).toEqual(['menu-pos-utama']);
    });

    test('should extract multiple screenshot references', () => {
      const markdown = `
        [screenshot:dashboard-snishop]
        Login ke SNISHOP.
        [screenshot:menu-sidebar-pos]
        Buka modul POS.
        [screenshot:halaman-transaksi]
        Buat transaksi baru.
        [screenshot:struk-pembayaran]
        Cetak struk.
      `;
      const result = agent.extractScreenshotReferences(markdown);
      expect(result).toEqual([
        'dashboard-snishop',
        'menu-sidebar-pos',
        'halaman-transaksi',
        'struk-pembayaran',
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

    test('should handle SNISHOP-specific reference names', () => {
      const markdown = '[screenshot:modul-hr-absensi-karyawan-form]';
      const result = agent.extractScreenshotReferences(markdown);
      expect(result).toEqual(['modul-hr-absensi-karyawan-form']);
    });
  });

  // --------------------------------------------------------------------------
  // buildPrompt
  // --------------------------------------------------------------------------
  describe('buildPrompt', () => {
    test('should include the topic in the prompt', () => {
      const prompt = agent.buildPrompt('Cara Menggunakan Modul HR');
      expect(prompt).toContain('Cara Menggunakan Modul HR');
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

    test('should include module info when context.module is provided', () => {
      const prompt = agent.buildPrompt('Test', { module: 'pos' });
      expect(prompt).toContain('Point of Sale');
    });

    test('should include screenshot list when context.screenshots is provided', () => {
      const prompt = agent.buildPrompt('Test', {
        screenshots: ['file1.png', 'file2.png'],
      });
      expect(prompt).toContain('file1.png');
      expect(prompt).toContain('file2.png');
    });

    test('should reference SNISHOP UI elements', () => {
      const prompt = agent.buildPrompt('Test');
      expect(prompt).toContain('menu');
    });

    test('should mention module integration', () => {
      const prompt = agent.buildPrompt('Test');
      expect(prompt).toContain('modul');
    });
  });
});
