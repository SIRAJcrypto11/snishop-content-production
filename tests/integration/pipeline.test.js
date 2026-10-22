/**
 * Integration test: End-to-end content production pipeline.
 *
 * Tests the flow: plan -> create content -> generate PDF -> distribute
 *
 * Uses actual agent classes with mocked external APIs.
 * Timeout: 60 seconds.
 */

// Mock external dependencies before requiring anything
jest.mock('openai', () => {
  return jest.fn().mockImplementation(() => ({
    chat: {
      completions: {
        create: jest.fn().mockResolvedValue({
          choices: [{ message: { content: '# Mock Tutorial\n\nStep 1: Setup\n\nStep 2: Configure\n\nStep 3: Deploy\n\n[screenshot:main-dashboard]\n\n[screenshot:settings-page]\n\nConclusion: Done.' } }],
        }),
      },
    },
  }));
});

jest.mock('puppeteer', () => ({
  launch: jest.fn().mockResolvedValue({
    newPage: jest.fn().mockResolvedValue({
      setContent: jest.fn().mockResolvedValue(undefined),
      pdf: jest.fn().mockResolvedValue(Buffer.from('%PDF-1.4 mock pdf content')),
    }),
    close: jest.fn().mockResolvedValue(undefined),
  }),
}));

jest.mock('marked', () => ({
  marked: { parse: jest.fn((md) => `<p>${md}</p>`) },
  parse: jest.fn((md) => `<p>${md}</p>`),
}));

jest.mock('../../src/config/database', () => {
  const queryFn = jest.fn().mockResolvedValue({ rows: [], rowCount: 0 });
  return {
    query: queryFn,
    connect: jest.fn().mockResolvedValue({ query: queryFn, release: jest.fn() }),
    end: jest.fn(),
    pool: {},
  };
});

jest.mock('../../src/config/queue', () => ({
  taskQueue: {
    add: jest.fn().mockResolvedValue({ id: 'job-1' }),
  },
}));

jest.mock('../../src/config/redis', () => ({}));

jest.mock('../../src/distribution/SNISHOPAppAPI', () => {
  return jest.fn().mockImplementation(() => ({
    createProduct: jest.fn().mockResolvedValue({ id: 'snishop-product-1', status: 'listed' }),
  }));
});

jest.mock('../../src/distribution/LynkAPI', () => {
  return jest.fn().mockImplementation(() => ({
    createProduct: jest.fn().mockResolvedValue({ id: 'lynk-product-1', status: 'listed' }),
  }));
});

// Now require modules after mocks
const OrchestratorAgent = require('../../src/agents/orchestrator/OrchestratorAgent');
const AITechContentAgent = require('../../src/agents/content/AITechContentAgent');
const PDFGenerator = require('../../src/agents/design/PDFGenerator');
const DistributionManager = require('../../src/distribution/DistributionManager');
const db = require('../../src/config/database');
const { taskQueue } = require('../../src/config/queue');

describe('Content Production Pipeline (Integration)', () => {
  jest.setTimeout(60000);

  let orchestrator;
  let contentAgent;
  let pdfGenerator;
  let distributionManager;

  beforeAll(() => {
    orchestrator = new OrchestratorAgent({ qualityThreshold: 50, dailyTarget: 5 });
    contentAgent = new AITechContentAgent();
    pdfGenerator = new PDFGenerator();
    distributionManager = new DistributionManager();
  });

  // -------------------------------------------------------------------------
  // Step 1: Planning
  // -------------------------------------------------------------------------

  describe('Step 1: Orchestrator daily planning', () => {
    test('should fetch pending topics and assign them to agents', async () => {
      // Mock DB to return pending topics
      db.query.mockResolvedValueOnce({
        rows: [
          { id: 'topic-1', topic: 'Prompt Engineering Guide', category: 'tutorial', priority: 10 },
          { id: 'topic-2', topic: 'AI Tools Overview', category: 'ai-tools', priority: 8 },
        ],
      });

      const assignments = await orchestrator.dailyPlanning();

      expect(assignments).toBeDefined();
      expect(Array.isArray(assignments)).toBe(true);
      // Each topic should be assigned to an agent
      for (const a of assignments) {
        expect(a).toHaveProperty('topicId');
        expect(a).toHaveProperty('topic');
        expect(a).toHaveProperty('agent');
      }
      // taskQueue.add should have been called for each assignment
      expect(taskQueue.add).toHaveBeenCalledTimes(assignments.length);
    });
  });

  // -------------------------------------------------------------------------
  // Step 2: Content creation
  // -------------------------------------------------------------------------

  describe('Step 2: Content generation', () => {
    test('should generate markdown content for a topic', async () => {
      const result = await contentAgent.generateContent('Prompt Engineering Basics');

      expect(result).toBeDefined();
      expect(result).toHaveProperty('markdown');
      expect(result).toHaveProperty('screenshotReferences');
      expect(result).toHaveProperty('wordCount');
      expect(result).toHaveProperty('estimatedPages');
      expect(typeof result.markdown).toBe('string');
      expect(result.markdown.length).toBeGreaterThan(0);
      expect(result.wordCount).toBeGreaterThan(0);
    });

    test('should extract screenshot references from generated content', async () => {
      const result = await contentAgent.generateContent('Vibecoding Tutorial');

      expect(Array.isArray(result.screenshotReferences)).toBe(true);
    });
  });

  // -------------------------------------------------------------------------
  // Step 3: Quality check
  // -------------------------------------------------------------------------

  describe('Step 3: Quality evaluation', () => {
    test('should evaluate content quality and return scores', () => {
      const content = {
        body: '# Title\n\n## Section 1\n\nStep 1: Do this\n\nStep 2: Do that\n\n## Section 2\n\nMore content here with enough words to pass the threshold for a reasonable score that makes the content look realistic and well-written for testing purposes. We need at least a few hundred words to get a decent content depth score.\n\n## Section 3\n\nEven more content with actionable steps and references to make the quality check pass. This is important for the pipeline test.\n\n## Section 4\n\nAdditional sections with code examples:\n\n```javascript\nconst x = 1;\n```\n\n- List item 1\n- List item 2\n- List item 3\n\nParagraph one.\n\nParagraph two.\n\nParagraph three.\n\nParagraph four.\n\nParagraph five.',
        screenshots: [
          { path: 'screenshot1.png', width: 1920 },
          { path: 'screenshot2.png', width: 1920 },
          { path: 'screenshot3.png', width: 1280 },
        ],
        examples: ['Example 1', 'Example 2'],
        references: ['Ref 1'],
        targetAudience: 'developers',
        summary: 'A comprehensive guide.',
        files: ['guide.pdf'],
      };

      const result = orchestrator.qualityCheck(content);

      expect(result).toHaveProperty('overall');
      expect(result).toHaveProperty('passed');
      expect(result).toHaveProperty('dimensions');
      expect(typeof result.overall).toBe('number');
      expect(result.overall).toBeGreaterThanOrEqual(0);
      expect(result.overall).toBeLessThanOrEqual(100);
    });
  });

  // -------------------------------------------------------------------------
  // Step 4: PDF generation
  // -------------------------------------------------------------------------

  describe('Step 4: PDF generation', () => {
    test('should generate a PDF buffer from content', async () => {
      const pdfBuffer = await pdfGenerator.generate({
        title: 'Test Guide',
        markdown: '# Hello\n\nThis is a test document.',
      });

      expect(Buffer.isBuffer(pdfBuffer)).toBe(true);
      expect(pdfBuffer.length).toBeGreaterThan(0);
    });
  });

  // -------------------------------------------------------------------------
  // Step 5: Distribution
  // -------------------------------------------------------------------------

  describe('Step 5: Product distribution', () => {
    test('should distribute product to all channels', async () => {
      const product = {
        title: 'Prompt Engineering Guide',
        description: 'A comprehensive guide to prompt engineering',
        category: 'tutorial',
        pages: 15,
        qualityScore: 92,
        images: ['cover.png'],
      };

      const result = await distributionManager.distributeProduct(product);

      expect(result).toBeDefined();
      expect(result).toHaveProperty('success');
      expect(result).toHaveProperty('failed');
      expect(result).toHaveProperty('price');
      expect(result).toHaveProperty('distributedAt');
      expect(Array.isArray(result.success)).toBe(true);
    });
  });

  // -------------------------------------------------------------------------
  // Full pipeline
  // -------------------------------------------------------------------------

  describe('Full pipeline: plan -> create -> quality check -> PDF -> distribute', () => {
    test('should complete the entire pipeline end-to-end', async () => {
      // 1. Generate content
      const content = await contentAgent.generateContent('Full Pipeline Test Topic');
      expect(content.markdown).toBeTruthy();

      // 2. Quality check
      const quality = orchestrator.qualityCheck({
        body: content.markdown,
        screenshots: [],
        examples: [],
        references: [],
      });
      expect(quality.overall).toBeGreaterThanOrEqual(0);

      // 3. Generate PDF
      const pdf = await pdfGenerator.generate({
        title: 'Pipeline Test',
        markdown: content.markdown,
      });
      expect(Buffer.isBuffer(pdf)).toBe(true);

      // 4. Distribute
      const distribution = await distributionManager.distributeProduct({
        title: 'Pipeline Test Guide',
        description: content.markdown.substring(0, 200),
        category: 'tutorial',
        pages: content.estimatedPages,
        qualityScore: quality.overall,
      });
      expect(distribution).toHaveProperty('success');
      expect(distribution).toHaveProperty('distributedAt');
    });
  });
});
