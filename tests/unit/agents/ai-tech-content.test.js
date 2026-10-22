/**
 * Unit tests for AITechContentAgent
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

const AITechContentAgent = require('../../../src/agents/content/AITechContentAgent');
const OpenAI = require('openai');

// ---- Tests ------------------------------------------------------------------

describe('AITechContentAgent', () => {
  let agent;
  let mockCreate;

  beforeEach(() => {
    jest.clearAllMocks();
    process.env.OPENAI_API_KEY = 'test-api-key';
    agent = new AITechContentAgent();
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

    test('should have ai-tech specialization', () => {
      expect(agent.specialization).toBe('ai-tech');
    });

    test('should define content categories', () => {
      expect(agent.categories).toContain('prompt-engineering');
      expect(agent.categories).toContain('vibecoding');
      expect(agent.categories).toContain('ai-tools');
      expect(agent.categories).toContain('programming');
    });

    test('should initialize OpenAI client', () => {
      expect(OpenAI).toHaveBeenCalledWith({ apiKey: 'test-api-key' });
    });

    test('should allow custom model override', () => {
      const custom = new AITechContentAgent({ model: 'gpt-4-turbo' });
      expect(custom.model).toBe('gpt-4-turbo');
    });

    test('should allow custom temperature override', () => {
      const custom = new AITechContentAgent({ temperature: 0.5 });
      expect(custom.temperature).toBe(0.5);
    });
  });

  // --------------------------------------------------------------------------
  // generateContent
  // --------------------------------------------------------------------------
  describe('generateContent', () => {
    test('should return proper structure with markdown, screenshotReferences, wordCount, estimatedPages', async () => {
      const mockMarkdown = `# Tutorial Prompt Engineering

## Pendahuluan
Ini adalah panduan lengkap prompt engineering.

## Langkah 1
Buka tools AI Anda.

[screenshot:membuka-ai-tools]

## Langkah 2
Tulis prompt dengan jelas.

[screenshot:menulis-prompt]

## Kesimpulan
Prompt engineering adalah skill penting.`;

      mockCreate.mockResolvedValueOnce({
        choices: [{ message: { content: mockMarkdown } }],
      });

      const result = await agent.generateContent('Tutorial Prompt Engineering');

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
        choices: [{ message: { content: 'Konten test' } }],
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
      mockCreate.mockRejectedValueOnce(new Error('API rate limit'));

      await expect(agent.generateContent('Test')).rejects.toThrow('API rate limit');
    });

    test('should calculate wordCount correctly', async () => {
      const content = 'Satu dua tiga empat lima enam tujuh delapan';
      mockCreate.mockResolvedValueOnce({
        choices: [{ message: { content } }],
      });

      const result = await agent.generateContent('Test');
      expect(result.wordCount).toBe(8);
    });

    test('should calculate estimatedPages based on 300 words per page', async () => {
      const words = Array(900).fill('kata').join(' ');
      mockCreate.mockResolvedValueOnce({
        choices: [{ message: { content: words } }],
      });

      const result = await agent.generateContent('Test');
      expect(result.estimatedPages).toBe(3);
    });
  });

  // --------------------------------------------------------------------------
  // extractScreenshotReferences
  // --------------------------------------------------------------------------
  describe('extractScreenshotReferences', () => {
    test('should extract single screenshot reference', () => {
      const markdown = 'Some text [screenshot:dashboard-ai] more text';
      const result = agent.extractScreenshotReferences(markdown);
      expect(result).toEqual(['dashboard-ai']);
    });

    test('should extract multiple screenshot references', () => {
      const markdown = `
        [screenshot:langkah-1-buka-menu]
        Beberapa teks di tengah.
        [screenshot:langkah-2-klik-tombol]
        Teks lainnya.
        [screenshot:langkah-3-hasil-akhir]
      `;
      const result = agent.extractScreenshotReferences(markdown);
      expect(result).toEqual([
        'langkah-1-buka-menu',
        'langkah-2-klik-tombol',
        'langkah-3-hasil-akhir',
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

    test('should handle references with special characters in description', () => {
      const markdown = '[screenshot:halaman-settings-advanced-config]';
      const result = agent.extractScreenshotReferences(markdown);
      expect(result).toEqual(['halaman-settings-advanced-config']);
    });
  });

  // --------------------------------------------------------------------------
  // buildPrompt
  // --------------------------------------------------------------------------
  describe('buildPrompt', () => {
    test('should include the topic in the prompt', () => {
      const prompt = agent.buildPrompt('Prompt Engineering Dasar');
      expect(prompt).toContain('Prompt Engineering Dasar');
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
  });
});
