const logger = require('../utils/logger');

/**
 * PricingEngine - Dynamic pricing based on content characteristics.
 *
 * Calculates optimal prices using base price tiers, demand multipliers
 * by category, and quality-based adjustments.
 */
class PricingEngine {
  constructor() {
    // Base price tiers by page count
    this.basePrices = {
      under50: 35000,
      under100: 100000,
      over100: 250000,
    };

    // Demand multipliers by category
    this.demandMultipliers = {
      'ai-tech': 1.2,
      'business': 1.0,
      'snishop': 1.3,
      'templates': 0.9,
    };

    // Quality multipliers by score
    this.qualityTiers = [
      { minScore: 95, multiplier: 1.3 },
      { minScore: 90, multiplier: 1.2 },
      { minScore: 85, multiplier: 1.0 },
      { minScore: 0, multiplier: 0.8 },
    ];

    logger.info('PricingEngine initialized');
  }

  /**
   * Calculate the optimal price for a product.
   *
   * @param {object} product - Product data
   * @param {number} [product.pages] - Number of pages
   * @param {string} product.category - Product category
   * @param {number} [product.qualityScore] - Quality score (0-100)
   * @returns {number} Calculated price in IDR, rounded to nearest 1000
   */
  calculatePrice(product) {
    if (!product || !product.category) {
      logger.warn('calculatePrice called with invalid product data');
      return 0;
    }

    // 1. Determine base price by page count
    const pages = product.pages || 0;
    let basePrice;
    if (pages < 50) {
      basePrice = this.basePrices.under50;
    } else if (pages < 100) {
      basePrice = this.basePrices.under100;
    } else {
      basePrice = this.basePrices.over100;
    }

    // 2. Apply demand multiplier by category
    const demandMultiplier = this.demandMultipliers[product.category] || 1.0;
    let price = basePrice * demandMultiplier;

    // 3. Apply quality multiplier
    const qualityScore = product.qualityScore || 0;
    const qualityMultiplier = this.getQualityMultiplier(qualityScore);
    price = price * qualityMultiplier;

    // 4. Round to nearest 1000
    const finalPrice = Math.round(price / 1000) * 1000;

    logger.info('Price calculated', {
      category: product.category,
      pages,
      qualityScore,
      basePrice,
      demandMultiplier,
      qualityMultiplier,
      finalPrice,
    });

    return finalPrice;
  }

  /**
   * Get quality multiplier based on score tier.
   *
   * @param {number} score - Quality score (0-100)
   * @returns {number} Multiplier value
   */
  getQualityMultiplier(score) {
    for (const tier of this.qualityTiers) {
      if (score >= tier.minScore) {
        return tier.multiplier;
      }
    }
    return 1.0; // fallback
  }
}

module.exports = PricingEngine;
