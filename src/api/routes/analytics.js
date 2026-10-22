const express = require('express');
const db = require('../../config/database');

const router = express.Router();

// GET /api/analytics/revenue - revenue report (by period: day/week/month)
router.get('/revenue', async (req, res) => {
  try {
    const { period = 'month' } = req.query;

    let groupBy;
    let interval;

    switch (period) {
      case 'day':
        groupBy = 'DATE(sold_at)';
        interval = '1 day';
        break;
      case 'week':
        groupBy = "DATE_TRUNC('week', sold_at)";
        interval = '7 days';
        break;
      case 'month':
      default:
        groupBy = "DATE_TRUNC('month', sold_at)";
        interval = '30 days';
        break;
    }

    const result = await db.query(
      `SELECT
         ${groupBy} AS period_start,
         COUNT(*) AS total_sales,
         SUM(price) AS total_revenue,
         COUNT(DISTINCT product_id) AS unique_products_sold
       FROM sales
       WHERE sold_at >= NOW() - INTERVAL '${interval}'
       GROUP BY period_start
       ORDER BY period_start DESC`
    );

    // Grand total
    const totalResult = await db.query(
      `SELECT COUNT(*) AS total_sales, COALESCE(SUM(price), 0) AS total_revenue
       FROM sales
       WHERE sold_at >= NOW() - INTERVAL '${interval}'`
    );

    res.json({
      success: true,
      data: {
        period,
        breakdown: result.rows,
        total: {
          sales: parseInt(totalResult.rows[0].total_sales, 10),
          revenue: parseFloat(totalResult.rows[0].total_revenue),
        },
      },
    });
  } catch (error) {
    console.error('GET /api/analytics/revenue error:', error.message);
    res.status(500).json({ success: false, error: 'Failed to fetch revenue data' });
  }
});

// GET /api/analytics/production - production metrics
router.get('/production', async (req, res) => {
  try {
    const productStats = await db.query(
      `SELECT
         COUNT(*) AS total_products,
         AVG(quality_score) AS avg_quality_score,
         COUNT(*) FILTER (WHERE status = 'published') AS published,
         COUNT(*) FILTER (WHERE status = 'draft') AS drafts,
         MIN(created_at) AS first_product_at,
         MAX(created_at) AS last_product_at
       FROM products`
    );

    const queueStats = await db.query(
      `SELECT
         COUNT(*) AS total_queued,
         COUNT(*) FILTER (WHERE status = 'pending') AS pending,
         COUNT(*) FILTER (WHERE status = 'assigned') AS assigned,
         COUNT(*) FILTER (WHERE status = 'completed') AS completed
       FROM content_queue`
    );

    res.json({
      success: true,
      data: {
        products: productStats.rows[0],
        queue: queueStats.rows[0],
      },
    });
  } catch (error) {
    console.error('GET /api/analytics/production error:', error.message);
    res.status(500).json({ success: false, error: 'Failed to fetch production metrics' });
  }
});

// GET /api/analytics/quality - quality metrics breakdown
router.get('/quality', async (req, res) => {
  try {
    const result = await db.query(
      `SELECT
         COUNT(*) AS total_scored,
         AVG(quality_score) AS average_score,
         MIN(quality_score) AS min_score,
         MAX(quality_score) AS max_score,
         COUNT(*) FILTER (WHERE quality_score >= 85) AS excellent,
         COUNT(*) FILTER (WHERE quality_score >= 70 AND quality_score < 85) AS good,
         COUNT(*) FILTER (WHERE quality_score >= 50 AND quality_score < 70) AS fair,
         COUNT(*) FILTER (WHERE quality_score < 50) AS poor
       FROM products
       WHERE quality_score IS NOT NULL`
    );

    // Per-category quality
    const categoryResult = await db.query(
      `SELECT category,
         COUNT(*) AS count,
         AVG(quality_score) AS avg_score
       FROM products
       WHERE quality_score IS NOT NULL AND category IS NOT NULL
       GROUP BY category
       ORDER BY avg_score DESC`
    );

    res.json({
      success: true,
      data: {
        overall: result.rows[0],
        byCategory: categoryResult.rows,
      },
    });
  } catch (error) {
    console.error('GET /api/analytics/quality error:', error.message);
    res.status(500).json({ success: false, error: 'Failed to fetch quality metrics' });
  }
});

module.exports = router;
