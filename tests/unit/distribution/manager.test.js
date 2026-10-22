/**
 * Unit tests for DistributionManager
 *
 * External dependencies (APIs, logger) are mocked so that tests
 * run in isolation without requiring actual API connections.
 */

// ---- Mocks ------------------------------------------------------------------

jest.mock('../../../src/utils/logger', () => ({
  info: jest.fn(),
  warn: jest.fn(),
  error: jest.fn(),
}));

jest.mock('../../../src/distribution/SNISHOPAppAPI', () => {
  return jest.fn().mockImplementation(() => ({
    createProduct: jest.fn().mockResolvedValue({
      success: true,
      id: 'mock-snishop-id',
      url: 'https://api.app.snishop.com/products/test',
    }),
  }));
});

jest.mock('../../../src/distribution/LynkAPI', () => {
  return jest.fn().mockImplementation(() => ({
    createProduct: jest.fn().mockResolvedValue({
      success: true,
      id: 'mock-lynk-id',
      url: 'https://api.lynk.id/products/test',
    }),
  }));
});

// ---- Imports (after mocks) --------------------------------------------------

const DistributionManager = require('../../../src/distribution/DistributionManager');
const PricingEngine = require('../../../src/distribution/PricingEngine');

// ---- Tests ------------------------------------------------------------------

describe('DistributionManager', () => {
  let manager;

  beforeEach(() => {
    jest.clearAllMocks();
    manager = new DistributionManager();
  });

  // --------------------------------------------------------------------------
  // Initialization
  // --------------------------------------------------------------------------
  describe('initialization', () => {
    test('should have two distribution channels', () => {
      expect(Object.keys(manager.channels)).toEqual(['snishopApp', 'lynk']);
    });

    test('should have a pricing engine', () => {
      expect(manager.pricingEngine).toBeInstanceOf(PricingEngine);
    });
  });

  // --------------------------------------------------------------------------
  // distributeProduct
  // --------------------------------------------------------------------------
  describe('distributeProduct', () => {
    const sampleProduct = {
      title: 'Test Ebook',
      description: 'A test ebook about testing',
      category: 'ai-tech',
      pages: 75,
      qualityScore: 90,
      images: ['img1.png', 'img2.png'],
    };

    test('should distribute to all channels in parallel', async () => {
      const result = await manager.distributeProduct(sampleProduct);

      expect(result.success).toHaveLength(2);
      expect(result.failed).toHaveLength(0);
      expect(result.details.snishopApp.status).toBe('success');
      expect(result.details.lynk.status).toBe('success');
    });

    test('should include calculated price in result', async () => {
      const result = await manager.distributeProduct(sampleProduct);

      expect(result.price).toBeDefined();
      expect(typeof result.price).toBe('number');
      expect(result.price).toBeGreaterThan(0);
    });

    test('should include distributedAt timestamp', async () => {
      const result = await manager.distributeProduct(sampleProduct);

      expect(result.distributedAt).toBeDefined();
      expect(new Date(result.distributedAt).getTime()).not.toBeNaN();
    });

    test('should handle partial failures gracefully', async () => {
      // Make Lynk fail
      manager.channels.lynk.createProduct = jest.fn().mockRejectedValue(new Error('Lynk API down'));

      const result = await manager.distributeProduct(sampleProduct);

      expect(result.success).toContain('snishopApp');
      expect(result.failed).toContain('lynk');
      expect(result.details.lynk.status).toBe('failed');
      expect(result.details.lynk.error).toBe('Lynk API down');
    });

    test('should handle all channels failing', async () => {
      manager.channels.snishopApp.createProduct = jest.fn().mockRejectedValue(new Error('SNISHOP down'));
      manager.channels.lynk.createProduct = jest.fn().mockRejectedValue(new Error('Lynk down'));

      const result = await manager.distributeProduct(sampleProduct);

      expect(result.success).toHaveLength(0);
      expect(result.failed).toHaveLength(2);
    });
  });

  // --------------------------------------------------------------------------
  // distributeToSNISHOPApp
  // --------------------------------------------------------------------------
  describe('distributeToSNISHOPApp', () => {
    test('should call SNISHOP App API createProduct', async () => {
      const listing = { title: 'Test', price: 50000 };
      const result = await manager.distributeToSNISHOPApp(listing);

      expect(result).toBeDefined();
      expect(result.success).toBe(true);
      expect(manager.channels.snishopApp.createProduct).toHaveBeenCalledWith(listing);
    });
  });

  // --------------------------------------------------------------------------
  // distributeToLynk
  // --------------------------------------------------------------------------
  describe('distributeToLynk', () => {
    test('should call Lynk API createProduct', async () => {
      const listing = { title: 'Test', price: 50000 };
      const result = await manager.distributeToLynk(listing);

      expect(result).toBeDefined();
      expect(result.success).toBe(true);
      expect(manager.channels.lynk.createProduct).toHaveBeenCalledWith(listing);
    });
  });
});
