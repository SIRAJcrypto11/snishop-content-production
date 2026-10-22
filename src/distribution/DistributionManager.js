const logger = require('../utils/logger');
const SNISHOPAppAPI = require('./SNISHOPAppAPI');
const LynkAPI = require('./LynkAPI');
const PricingEngine = require('./PricingEngine');

/**
 * DistributionManager - Coordinates multi-channel distribution.
 *
 * Manages product distribution across SNISHOP App and Lynk platforms,
 * handling pricing, listing creation, and parallel distribution.
 */
class DistributionManager {
  constructor() {
    this.channels = {
      snishopApp: new SNISHOPAppAPI(),
      lynk: new LynkAPI(),
    };
    this.pricingEngine = new PricingEngine();

    logger.info('DistributionManager initialized', {
      channels: Object.keys(this.channels),
    });
  }

  /**
   * Distribute a product to all channels in parallel.
   *
   * @param {object} product - Product data to distribute
   * @param {string} product.title - Product title
   * @param {string} product.description - Product description
   * @param {string} product.category - Product category
   * @param {number} [product.pages] - Number of pages
   * @param {number} [product.qualityScore] - Quality score (0-100)
   * @param {string[]} [product.images] - Array of image URLs
   * @returns {Promise<object>} Distribution result with success, failed, and details
   */
  async distributeProduct(product) {
    logger.info('Starting product distribution', { title: product.title });

    // Calculate price
    const price = this.pricingEngine.calculatePrice(product);

    // Prepare listing data
    const listing = {
      title: product.title,
      description: product.description,
      price,
      category: product.category,
      images: product.images || [],
      metadata: {
        pages: product.pages,
        qualityScore: product.qualityScore,
        distributedAt: new Date().toISOString(),
      },
    };

    // Distribute to all channels in parallel
    const results = await Promise.allSettled([
      this.distributeToSNISHOPApp(listing),
      this.distributeToLynk(listing),
    ]);

    // Process results
    const success = [];
    const failed = [];
    const details = {};

    results.forEach((result, index) => {
      const channelName = index === 0 ? 'snishopApp' : 'lynk';
      if (result.status === 'fulfilled') {
        success.push(channelName);
        details[channelName] = {
          status: 'success',
          data: result.value,
        };
      } else {
        failed.push(channelName);
        details[channelName] = {
          status: 'failed',
          error: result.reason?.message || 'Unknown error',
        };
        logger.error(`Distribution to ${channelName} failed`, {
          error: result.reason?.message,
        });
      }
    });

    const distributionResult = {
      success,
      failed,
      details,
      price,
      distributedAt: new Date().toISOString(),
    };

    logger.info('Product distribution complete', {
      title: product.title,
      successCount: success.length,
      failedCount: failed.length,
    });

    return distributionResult;
  }

  /**
   * Distribute product to SNISHOP App.
   *
   * @param {object} listing - Prepared listing data
   * @returns {Promise<object>} API response
   */
  async distributeToSNISHOPApp(listing) {
    logger.info('Distributing to SNISHOP App', { title: listing.title });
    return this.channels.snishopApp.createProduct(listing);
  }

  /**
   * Distribute product to Lynk.
   *
   * @param {object} listing - Prepared listing data
   * @returns {Promise<object>} API response
   */
  async distributeToLynk(listing) {
    logger.info('Distributing to Lynk', { title: listing.title });
    return this.channels.lynk.createProduct(listing);
  }
}

module.exports = DistributionManager;
