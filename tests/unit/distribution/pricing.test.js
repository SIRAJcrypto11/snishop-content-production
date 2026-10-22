/**
 * Unit tests for PricingEngine
 */

// ---- Mocks ------------------------------------------------------------------

jest.mock('../../../src/utils/logger', () => ({
  info: jest.fn(),
  warn: jest.fn(),
  error: jest.fn(),
}));

// ---- Imports (after mocks) --------------------------------------------------

const PricingEngine = require('../../../src/distribution/PricingEngine');

// ---- Tests ------------------------------------------------------------------

describe('PricingEngine', () => {
  let engine;

  beforeEach(() => {
    jest.clearAllMocks();
    engine = new PricingEngine();
  });

  // --------------------------------------------------------------------------
  // Initialization
  // --------------------------------------------------------------------------
  describe('initialization', () => {
    test('should have base price tiers', () => {
      expect(engine.basePrices.under50).toBe(35000);
      expect(engine.basePrices.under100).toBe(100000);
      expect(engine.basePrices.over100).toBe(250000);
    });

    test('should have demand multipliers for all categories', () => {
      expect(engine.demandMultipliers['ai-tech']).toBe(1.2);
      expect(engine.demandMultipliers['business']).toBe(1.0);
      expect(engine.demandMultipliers['snishop']).toBe(1.3);
      expect(engine.demandMultipliers['templates']).toBe(0.9);
    });
  });

  // --------------------------------------------------------------------------
  // calculatePrice - Base Price
  // --------------------------------------------------------------------------
  describe('calculatePrice - base price tiers', () => {
    test('should use under50 base price for products with < 50 pages', () => {
      const price = engine.calculatePrice({ pages: 30, category: 'business', qualityScore: 85 });
      // 35000 * 1.0 * 1.0 = 35000
      expect(price).toBe(35000);
    });

    test('should use under100 base price for products with 50-99 pages', () => {
      const price = engine.calculatePrice({ pages: 75, category: 'business', qualityScore: 85 });
      // 100000 * 1.0 * 1.0 = 100000
      expect(price).toBe(100000);
    });

    test('should use over100 base price for products with >= 100 pages', () => {
      const price = engine.calculatePrice({ pages: 150, category: 'business', qualityScore: 85 });
      // 250000 * 1.0 * 1.0 = 250000
      expect(price).toBe(250000);
    });

    test('should default to under50 when pages is not specified', () => {
      const price = engine.calculatePrice({ category: 'business', qualityScore: 85 });
      expect(price).toBe(35000);
    });
  });

  // --------------------------------------------------------------------------
  // calculatePrice - Demand Multiplier
  // --------------------------------------------------------------------------
  describe('calculatePrice - demand multiplier', () => {
    test('should apply 1.2x multiplier for ai-tech category', () => {
      const price = engine.calculatePrice({ pages: 30, category: 'ai-tech', qualityScore: 85 });
      // 35000 * 1.2 * 1.0 = 42000
      expect(price).toBe(42000);
    });

    test('should apply 1.0x multiplier for business category', () => {
      const price = engine.calculatePrice({ pages: 30, category: 'business', qualityScore: 85 });
      // 35000 * 1.0 * 1.0 = 35000
      expect(price).toBe(35000);
    });

    test('should apply 1.3x multiplier for snishop category', () => {
      const price = engine.calculatePrice({ pages: 30, category: 'snishop', qualityScore: 85 });
      // 35000 * 1.3 * 1.0 = 45500
      expect(price).toBe(46000); // rounded to nearest 1000
    });

    test('should apply 0.9x multiplier for templates category', () => {
      const price = engine.calculatePrice({ pages: 30, category: 'templates', qualityScore: 85 });
      // 35000 * 0.9 * 1.0 = 31500
      expect(price).toBe(32000); // rounded to nearest 1000
    });

    test('should default to 1.0x for unknown category', () => {
      const price = engine.calculatePrice({ pages: 30, category: 'unknown', qualityScore: 85 });
      // 35000 * 1.0 * 1.0 = 35000
      expect(price).toBe(35000);
    });
  });

  // --------------------------------------------------------------------------
  // calculatePrice - Quality Multiplier
  // --------------------------------------------------------------------------
  describe('calculatePrice - quality multiplier', () => {
    test('should apply 1.3x for quality score >= 95', () => {
      const price = engine.calculatePrice({ pages: 30, category: 'business', qualityScore: 97 });
      // 35000 * 1.0 * 1.3 = 45500
      expect(price).toBe(46000); // rounded
    });

    test('should apply 1.2x for quality score >= 90', () => {
      const price = engine.calculatePrice({ pages: 30, category: 'business', qualityScore: 92 });
      // 35000 * 1.0 * 1.2 = 42000
      expect(price).toBe(42000);
    });

    test('should apply 1.0x for quality score >= 85', () => {
      const price = engine.calculatePrice({ pages: 30, category: 'business', qualityScore: 87 });
      // 35000 * 1.0 * 1.0 = 35000
      expect(price).toBe(35000);
    });

    test('should apply 0.8x for quality score < 85', () => {
      const price = engine.calculatePrice({ pages: 30, category: 'business', qualityScore: 70 });
      // 35000 * 1.0 * 0.8 = 28000
      expect(price).toBe(28000);
    });
  });

  // --------------------------------------------------------------------------
  // calculatePrice - Combined Multipliers
  // --------------------------------------------------------------------------
  describe('calculatePrice - combined multipliers', () => {
    test('should combine demand and quality multipliers correctly', () => {
      const price = engine.calculatePrice({ pages: 75, category: 'ai-tech', qualityScore: 96 });
      // 100000 * 1.2 * 1.3 = 156000
      expect(price).toBe(156000);
    });

    test('should handle high-value product with all premium factors', () => {
      const price = engine.calculatePrice({ pages: 120, category: 'snishop', qualityScore: 98 });
      // 250000 * 1.3 * 1.3 = 422500
      expect(price).toBe(423000); // rounded to nearest 1000
    });

    test('should handle low-value product with all discount factors', () => {
      const price = engine.calculatePrice({ pages: 20, category: 'templates', qualityScore: 60 });
      // 35000 * 0.9 * 0.8 = 25200
      expect(price).toBe(25000); // rounded to nearest 1000
    });
  });

  // --------------------------------------------------------------------------
  // calculatePrice - Rounding
  // --------------------------------------------------------------------------
  describe('calculatePrice - rounding', () => {
    test('should round to nearest 1000', () => {
      const price = engine.calculatePrice({ pages: 30, category: 'snishop', qualityScore: 92 });
      // 35000 * 1.3 * 1.2 = 54600
      expect(price).toBe(55000); // rounded to nearest 1000
    });

    test('result should always be divisible by 1000', () => {
      const products = [
        { pages: 10, category: 'ai-tech', qualityScore: 95 },
        { pages: 60, category: 'business', qualityScore: 88 },
        { pages: 150, category: 'snishop', qualityScore: 92 },
        { pages: 45, category: 'templates', qualityScore: 70 },
      ];

      products.forEach((product) => {
        const price = engine.calculatePrice(product);
        expect(price % 1000).toBe(0);
      });
    });
  });

  // --------------------------------------------------------------------------
  // calculatePrice - Edge Cases
  // --------------------------------------------------------------------------
  describe('calculatePrice - edge cases', () => {
    test('should return 0 for null product', () => {
      expect(engine.calculatePrice(null)).toBe(0);
    });

    test('should return 0 for product without category', () => {
      expect(engine.calculatePrice({ pages: 50 })).toBe(0);
    });

    test('should handle 0 pages', () => {
      const price = engine.calculatePrice({ pages: 0, category: 'business', qualityScore: 85 });
      expect(price).toBe(35000);
    });

    test('should handle exactly 50 pages', () => {
      const price = engine.calculatePrice({ pages: 50, category: 'business', qualityScore: 85 });
      // 50 pages falls in under100 tier
      expect(price).toBe(100000);
    });

    test('should handle exactly 100 pages', () => {
      const price = engine.calculatePrice({ pages: 100, category: 'business', qualityScore: 85 });
      // 100 pages falls in over100 tier
      expect(price).toBe(250000);
    });
  });

  // --------------------------------------------------------------------------
  // getQualityMultiplier
  // --------------------------------------------------------------------------
  describe('getQualityMultiplier', () => {
    test('should return 1.3 for score >= 95', () => {
      expect(engine.getQualityMultiplier(95)).toBe(1.3);
      expect(engine.getQualityMultiplier(100)).toBe(1.3);
    });

    test('should return 1.2 for score 90-94', () => {
      expect(engine.getQualityMultiplier(90)).toBe(1.2);
      expect(engine.getQualityMultiplier(94)).toBe(1.2);
    });

    test('should return 1.0 for score 85-89', () => {
      expect(engine.getQualityMultiplier(85)).toBe(1.0);
      expect(engine.getQualityMultiplier(89)).toBe(1.0);
    });

    test('should return 0.8 for score < 85', () => {
      expect(engine.getQualityMultiplier(84)).toBe(0.8);
      expect(engine.getQualityMultiplier(0)).toBe(0.8);
    });
  });
});
