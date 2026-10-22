const db = require('../config/database');
const logger = require('./logger');

/**
 * Record a metric value in the database.
 *
 * @param {string} name   - Metric name (e.g. "content_generated")
 * @param {number} value  - Numeric value
 * @param {object} [tags] - Arbitrary key/value tags stored as JSONB
 * @returns {Promise<void>}
 */
async function recordMetric(name, value, tags = {}) {
  try {
    await db.query(
      `INSERT INTO agent_performance (agent_name, date, products_created, metadata)
       VALUES ($1, CURRENT_DATE, $2, $3)
       ON CONFLICT (agent_name, date)
       DO UPDATE SET products_created = agent_performance.products_created + EXCLUDED.products_created,
                     metadata = jsonb_merge(agent_performance.metadata, EXCLUDED.metadata),
                     updated_at = NOW()`,
      [name, value, JSON.stringify(tags)]
    );
  } catch (error) {
    // Fallback: the jsonb_merge function may not exist; use a simpler upsert
    try {
      await db.query(
        `INSERT INTO agent_performance (agent_name, date, products_created, metadata)
         VALUES ($1, CURRENT_DATE, $2, $3)
         ON CONFLICT (agent_name, date)
         DO UPDATE SET products_created = agent_performance.products_created + EXCLUDED.products_created,
                       updated_at = NOW()`,
        [name, value, JSON.stringify(tags)]
      );
    } catch (fallbackError) {
      logger.error('Failed to record metric', {
        name,
        value,
        error: fallbackError.message,
      });
    }
  }
}

/**
 * Retrieve metric records for a given name and period.
 *
 * @param {string} name          - Metric name
 * @param {string} [period='30'] - Number of days to look back
 * @returns {Promise<object[]>}
 */
async function getMetrics(name, period = '30') {
  try {
    const days = parseInt(period, 10) || 30;
    const result = await db.query(
      `SELECT agent_name, date, products_created, average_quality_score, errors, metadata
       FROM agent_performance
       WHERE agent_name = $1
         AND date >= CURRENT_DATE - INTERVAL '${days} days'
       ORDER BY date DESC`,
      [name]
    );
    return result.rows;
  } catch (error) {
    logger.error('Failed to get metrics', { name, period, error: error.message });
    return [];
  }
}

module.exports = {
  recordMetric,
  getMetrics,
};
