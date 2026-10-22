const { formatCurrency, slugify, generateId, sleep } = require('../../src/utils/helpers');

describe('helpers', () => {
  describe('formatCurrency', () => {
    test('formats a positive integer amount', () => {
      expect(formatCurrency(1500000)).toBe('Rp 1.500.000');
    });

    test('formats zero', () => {
      expect(formatCurrency(0)).toBe('Rp 0');
    });

    test('handles null/undefined gracefully', () => {
      expect(formatCurrency(null)).toBe('Rp 0');
      expect(formatCurrency(undefined)).toBe('Rp 0');
    });

    test('rounds decimal amounts', () => {
      expect(formatCurrency(99999.99)).toBe('Rp 100.000');
    });
  });

  describe('slugify', () => {
    test('converts text to URL-safe slug', () => {
      expect(slugify('Hello World')).toBe('hello-world');
    });

    test('removes special characters', () => {
      expect(slugify('AI & Tech: Tips!')).toBe('ai-tech-tips');
    });

    test('collapses multiple dashes', () => {
      expect(slugify('one   two   three')).toBe('one-two-three');
    });

    test('returns empty string for null/empty input', () => {
      expect(slugify('')).toBe('');
      expect(slugify(null)).toBe('');
    });
  });

  describe('generateId', () => {
    test('returns a valid UUID v4 string', () => {
      const id = generateId();
      expect(id).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
    });

    test('returns unique values on each call', () => {
      const ids = new Set(Array.from({ length: 100 }, () => generateId()));
      expect(ids.size).toBe(100);
    });
  });

  describe('sleep', () => {
    test('resolves after approximately the given time', async () => {
      const start = Date.now();
      await sleep(50);
      const elapsed = Date.now() - start;
      expect(elapsed).toBeGreaterThanOrEqual(40);
    });
  });
});
