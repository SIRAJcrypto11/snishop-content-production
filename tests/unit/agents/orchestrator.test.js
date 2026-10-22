/**
 * Unit tests for OrchestratorAgent
 *
 * External dependencies (database, queue, logger) are mocked so that tests
 * run in isolation without requiring PostgreSQL or Redis.
 */

// ---- Mocks ------------------------------------------------------------------

jest.mock('../../../src/config/database', () => ({
  query: jest.fn(),
  connect: jest.fn(),
  end: jest.fn(),
}));

jest.mock('../../../src/config/queue', () => ({
  taskQueue: {
    add: jest.fn().mockResolvedValue({ id: 'job-1' }),
  },
}));

jest.mock('../../../src/utils/logger', () => ({
  info: jest.fn(),
  warn: jest.fn(),
  error: jest.fn(),
}));

// ---- Imports (after mocks) --------------------------------------------------

const OrchestratorAgent = require('../../../src/agents/orchestrator/OrchestratorAgent');
const db = require('../../../src/config/database');
const { taskQueue } = require('../../../src/config/queue');

// ---- Tests ------------------------------------------------------------------

describe('OrchestratorAgent', () => {
  let agent;

  beforeEach(() => {
    jest.clearAllMocks();
    agent = new OrchestratorAgent();
  });

  // --------------------------------------------------------------------------
  // Initialization
  // --------------------------------------------------------------------------
  describe('initialization', () => {
    test('should have default qualityThreshold of 85', () => {
      expect(agent.qualityThreshold).toBe(85);
    });

    test('should have default dailyTarget of 15', () => {
      expect(agent.dailyTarget).toBe(15);
    });

    test('should allow custom qualityThreshold', () => {
      const custom = new OrchestratorAgent({ qualityThreshold: 90 });
      expect(custom.qualityThreshold).toBe(90);
    });

    test('should allow custom dailyTarget', () => {
      const custom = new OrchestratorAgent({ dailyTarget: 25 });
      expect(custom.dailyTarget).toBe(25);
    });

    test('should define three agent types', () => {
      expect(Object.keys(agent.agents)).toEqual(['content', 'design', 'marketing']);
    });
  });

  // --------------------------------------------------------------------------
  // Agent Assignment
  // --------------------------------------------------------------------------
  describe('assignToAgent', () => {
    test('should assign ebook category to ContentAgent', () => {
      const result = agent.assignToAgent({ category: 'ebook' });
      expect(result.name).toBe('ContentAgent');
    });

    test('should assign template category to ContentAgent', () => {
      const result = agent.assignToAgent({ category: 'template' });
      expect(result.name).toBe('ContentAgent');
    });

    test('should assign graphic category to DesignAgent', () => {
      const result = agent.assignToAgent({ category: 'graphic' });
      expect(result.name).toBe('DesignAgent');
    });

    test('should assign mockup category to DesignAgent', () => {
      const result = agent.assignToAgent({ category: 'mockup' });
      expect(result.name).toBe('DesignAgent');
    });

    test('should assign social-media category to MarketingAgent', () => {
      const result = agent.assignToAgent({ category: 'social-media' });
      expect(result.name).toBe('MarketingAgent');
    });

    test('should assign ad-copy category to MarketingAgent', () => {
      const result = agent.assignToAgent({ category: 'ad-copy' });
      expect(result.name).toBe('MarketingAgent');
    });

    test('should be case-insensitive for category', () => {
      const result = agent.assignToAgent({ category: 'EBOOK' });
      expect(result.name).toBe('ContentAgent');
    });

    test('should fall back to ContentAgent for unknown category', () => {
      const result = agent.assignToAgent({ category: 'miscellaneous' });
      expect(result.name).toBe('ContentAgent');
    });

    test('should return null when topic has no category', () => {
      const result = agent.assignToAgent({});
      expect(result).toBeNull();
    });

    test('should return null when topic is null', () => {
      const result = agent.assignToAgent(null);
      expect(result).toBeNull();
    });
  });

  // --------------------------------------------------------------------------
  // Quality Check
  // --------------------------------------------------------------------------
  describe('qualityCheck', () => {
    test('should return overall 0 when content is null', () => {
      const result = agent.qualityCheck(null);
      expect(result.overall).toBe(0);
      expect(result.passed).toBe(false);
    });

    test('should return a result with all five dimensions', () => {
      const result = agent.qualityCheck({ body: 'Hello world' });
      expect(result.dimensions).toHaveProperty('contentDepth');
      expect(result.dimensions).toHaveProperty('screenshotQuality');
      expect(result.dimensions).toHaveProperty('formatting');
      expect(result.dimensions).toHaveProperty('originality');
      expect(result.dimensions).toHaveProperty('value');
    });

    test('should score high-quality content above threshold', () => {
      const content = {
        body: `# Introduction\nThis is a comprehensive guide.\n\n## Section 1\nDetailed explanation with examples.\n\n## Section 2\nMore content here.\n\n- Item one\n- Item two\n- Item three\n\n## Section 3\nStep 1: Do this\nStep 2: Do that\nStep 3: Verify\n\n## Section 4\n\`\`\`js\nconst example = true;\n\`\`\`\n\nAdditional insights.\n\n## Section 5\nFinal thoughts and conclusion.\n\n` + 'word '.repeat(1500),
        screenshots: [
          { width: 1920, path: 'screen1.png' },
          { width: 1920, path: 'screen2.png' },
          { width: 1280, path: 'screen3.png' },
          { width: 1920, path: 'screen4.png' },
          { width: 1920, path: 'screen5.png' },
        ],
        examples: ['Example 1', 'Example 2'],
        references: ['Ref 1'],
        files: ['file1.pdf', 'file2.zip'],
        targetAudience: 'developers',
        summary: 'A comprehensive guide to building great products.',
        metadata: { manuallyReviewed: true, customized: true },
      };

      const result = agent.qualityCheck(content);
      expect(result.overall).toBeGreaterThanOrEqual(85);
      expect(result.passed).toBe(true);
    });

    test('should score low-quality content below threshold', () => {
      const content = {
        body: 'Short text.',
      };

      const result = agent.qualityCheck(content);
      expect(result.overall).toBeLessThan(85);
      expect(result.passed).toBe(false);
    });

    test('each dimension score should be between 0 and 100', () => {
      const content = {
        body: '## Heading\nSome content with a list:\n- item 1\n- item 2\n\n```\ncode block\n```\n\nParagraph one.\n\nParagraph two.\n\nParagraph three.\n\nParagraph four.\n\nParagraph five.',
        screenshots: [{ width: 1920, path: 's.png' }],
        examples: ['ex1'],
        references: ['ref1'],
        files: ['f.pdf'],
        targetAudience: 'everyone',
        summary: 'Summary here.',
      };

      const result = agent.qualityCheck(content);

      Object.values(result.dimensions).forEach((score) => {
        expect(score).toBeGreaterThanOrEqual(0);
        expect(score).toBeLessThanOrEqual(100);
      });
    });
  });

  // --------------------------------------------------------------------------
  // Individual Scoring Methods
  // --------------------------------------------------------------------------
  describe('scoreContentDepth', () => {
    test('should give 0 for empty content', () => {
      expect(agent.scoreContentDepth({})).toBe(0);
    });

    test('should score higher for longer content', () => {
      const short = { body: 'word '.repeat(100) };
      const long = { body: 'word '.repeat(2500) };
      expect(agent.scoreContentDepth(long)).toBeGreaterThan(agent.scoreContentDepth(short));
    });

    test('should reward sections/headings', () => {
      const noHeadings = { body: 'word '.repeat(1000) };
      const withHeadings = { body: '# H1\n## H2\n### H3\n#### H4\n##### H5\n###### H6\nword '.repeat(200) };
      expect(agent.scoreContentDepth(withHeadings)).toBeGreaterThanOrEqual(
        agent.scoreContentDepth(noHeadings)
      );
    });
  });

  describe('scoreScreenshotQuality', () => {
    test('should return 0 when no screenshots', () => {
      expect(agent.scoreScreenshotQuality({})).toBe(0);
    });

    test('should score higher for more screenshots', () => {
      const few = { screenshots: [{ width: 1920, path: 'a.png' }] };
      const many = {
        screenshots: Array.from({ length: 12 }, (_, i) => ({
          width: 1920,
          path: `s${i}.png`,
        })),
      };
      expect(agent.scoreScreenshotQuality(many)).toBeGreaterThan(
        agent.scoreScreenshotQuality(few)
      );
    });

    test('should prefer PNG/WebP formats', () => {
      const png = { screenshots: [{ width: 1920, path: 'a.png' }] };
      const jpg = { screenshots: [{ width: 1920, path: 'a.jpg' }] };
      expect(agent.scoreScreenshotQuality(png)).toBeGreaterThanOrEqual(
        agent.scoreScreenshotQuality(jpg)
      );
    });
  });

  describe('scoreFormatting', () => {
    test('should return 0 for empty body', () => {
      expect(agent.scoreFormatting({})).toBe(0);
    });

    test('should reward headings, code blocks, and lists', () => {
      const formatted = {
        body: '# Title\n## Section\n1. Step one\n2. Step two\n```\ncode\n```\n\nPara 1.\n\nPara 2.\n\nPara 3.\n\nPara 4.\n\nPara 5.',
      };
      const plain = { body: 'Just a plain paragraph with no structure at all.' };
      expect(agent.scoreFormatting(formatted)).toBeGreaterThan(agent.scoreFormatting(plain));
    });
  });

  describe('scoreOriginality', () => {
    test('should start at baseline of 50', () => {
      // Empty content – no bonuses, no penalties (wordCount < 100 triggers penalty)
      const score = agent.scoreOriginality({ body: 'word '.repeat(200) });
      expect(score).toBeGreaterThanOrEqual(50);
    });

    test('should penalize very short content', () => {
      const short = agent.scoreOriginality({ body: 'Hi' });
      const long = agent.scoreOriginality({ body: 'word '.repeat(200) });
      expect(short).toBeLessThan(long);
    });

    test('should reward custom screenshots and examples', () => {
      const rich = agent.scoreOriginality({
        body: 'word '.repeat(200),
        screenshots: [{ path: 'a.png' }],
        examples: ['ex1'],
      });
      expect(rich).toBeGreaterThan(50);
    });
  });

  describe('scoreValue', () => {
    test('should return 0 for empty content', () => {
      expect(agent.scoreValue({})).toBe(0);
    });

    test('should reward actionable content', () => {
      const actionable = { body: 'Step 1: Do this\nStep 2: Do that' };
      const plain = { body: 'This is just a plain description.' };
      expect(agent.scoreValue(actionable)).toBeGreaterThan(agent.scoreValue(plain));
    });

    test('should reward files, audience, and summary', () => {
      const full = {
        body: 'Step 1: Setup',
        files: ['resource.pdf'],
        targetAudience: 'beginners',
        summary: 'Quick start guide.',
      };
      expect(agent.scoreValue(full)).toBeGreaterThan(30);
    });
  });

  // --------------------------------------------------------------------------
  // Daily Planning
  // --------------------------------------------------------------------------
  describe('dailyPlanning', () => {
    test('should fetch pending topics and assign them', async () => {
      db.query
        .mockResolvedValueOnce({
          rows: [
            { id: 't1', topic: 'Ebook about Node.js', category: 'ebook', priority: 1 },
            { id: 't2', topic: 'Social media pack', category: 'social-media', priority: 2 },
          ],
        })
        .mockResolvedValueOnce({ rowCount: 1 }) // UPDATE for t1
        .mockResolvedValueOnce({ rowCount: 1 }); // UPDATE for t2

      const result = await agent.dailyPlanning();

      expect(result).toHaveLength(2);
      expect(result[0].agent).toBe('ContentAgent');
      expect(result[1].agent).toBe('MarketingAgent');
      expect(taskQueue.add).toHaveBeenCalledTimes(2);
    });

    test('should return empty array when no pending topics', async () => {
      db.query.mockResolvedValueOnce({ rows: [] });

      const result = await agent.dailyPlanning();
      expect(result).toHaveLength(0);
      expect(taskQueue.add).not.toHaveBeenCalled();
    });

    test('should propagate database errors', async () => {
      db.query.mockRejectedValueOnce(new Error('DB connection failed'));

      await expect(agent.dailyPlanning()).rejects.toThrow('DB connection failed');
    });
  });
});
