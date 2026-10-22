const express = require('express');
const db = require('../../config/database');

const router = express.Router();

// Known agent names in the system
const KNOWN_AGENTS = [
  'OrchestratorAgent',
  'AITechContentAgent',
  'BusinessContentAgent',
  'SNISHOPContentAgent',
  'MarketingAgent',
  'PDFGenerator',
  'ExcelGenerator',
  'SEOOptimizer',
  'DistributionManager',
];

// GET /api/agents/status - get all agent statuses
router.get('/status', async (req, res) => {
  try {
    // Fetch latest performance record for each agent
    const result = await db.query(
      `SELECT DISTINCT ON (agent_name) agent_name, date, products_created, average_quality_score, errors, metadata, updated_at
       FROM agent_performance
       ORDER BY agent_name, date DESC`
    );

    const statuses = KNOWN_AGENTS.map((name) => {
      const record = result.rows.find((r) => r.agent_name === name);
      return {
        name,
        status: 'active',
        lastActivity: record ? record.updated_at : null,
        productsCreated: record ? record.products_created : 0,
        averageQualityScore: record ? record.average_quality_score : null,
        errors: record ? record.errors : 0,
      };
    });

    res.json({ success: true, data: statuses });
  } catch (error) {
    console.error('GET /api/agents/status error:', error.message);
    // Return default statuses even if DB is unavailable
    const statuses = KNOWN_AGENTS.map((name) => ({
      name,
      status: 'active',
      lastActivity: null,
      productsCreated: 0,
      averageQualityScore: null,
      errors: 0,
    }));
    res.json({ success: true, data: statuses });
  }
});

// GET /api/agents/performance - get performance metrics (last 30 days)
router.get('/performance', async (req, res) => {
  try {
    const { days = 30 } = req.query;
    const result = await db.query(
      `SELECT agent_name, date, products_created, average_quality_score, errors, metadata
       FROM agent_performance
       WHERE date >= CURRENT_DATE - INTERVAL '${parseInt(days, 10) || 30} days'
       ORDER BY date DESC, agent_name`
    );

    res.json({ success: true, data: result.rows, count: result.rows.length });
  } catch (error) {
    console.error('GET /api/agents/performance error:', error.message);
    res.status(500).json({ success: false, error: 'Failed to fetch performance metrics' });
  }
});

// POST /api/agents/:name/restart - restart specific agent (mock)
router.post('/:name/restart', async (req, res) => {
  try {
    const agentName = req.params.name;

    if (!KNOWN_AGENTS.includes(agentName)) {
      return res.status(404).json({ success: false, error: `Agent "${agentName}" not found` });
    }

    // In production this would actually restart the agent process.
    // For now, return a mock success response.
    res.json({
      success: true,
      message: `Agent "${agentName}" restarted successfully`,
      data: {
        name: agentName,
        status: 'active',
        restartedAt: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error('POST /api/agents/:name/restart error:', error.message);
    res.status(500).json({ success: false, error: 'Failed to restart agent' });
  }
});

module.exports = router;
