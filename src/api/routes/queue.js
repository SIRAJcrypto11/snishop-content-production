const express = require('express');
const db = require('../../config/database');
const { validate } = require('../middleware/validation');

const router = express.Router();

// GET /api/queue - list content queue (ordered by priority DESC)
router.get('/', async (req, res) => {
  try {
    const { status } = req.query;
    let query = 'SELECT * FROM content_queue';
    const params = [];

    if (status) {
      params.push(status);
      query += ` WHERE status = $${params.length}`;
    }

    query += ' ORDER BY priority DESC, created_at ASC';

    const result = await db.query(query, params);
    res.json({ success: true, data: result.rows, count: result.rows.length });
  } catch (error) {
    console.error('GET /api/queue error:', error.message);
    res.status(500).json({ success: false, error: 'Failed to fetch queue' });
  }
});

// POST /api/queue - add topic to queue
router.post(
  '/',
  validate({ required: ['topic'], types: { topic: 'string' } }),
  async (req, res) => {
    try {
      const { topic, priority, brief } = req.body;

      const result = await db.query(
        `INSERT INTO content_queue (topic, priority, brief)
         VALUES ($1, $2, $3)
         RETURNING *`,
        [topic, priority || 0, JSON.stringify(brief || {})]
      );

      res.status(201).json({ success: true, data: result.rows[0] });
    } catch (error) {
      console.error('POST /api/queue error:', error.message);
      res.status(500).json({ success: false, error: 'Failed to add to queue' });
    }
  }
);

// PUT /api/queue/:id - update queue item (status, priority, assigned_to)
router.put('/:id', async (req, res) => {
  try {
    const { status, priority, assigned_to } = req.body;
    const setClauses = [];
    const params = [];
    let paramIndex = 1;

    if (status !== undefined) {
      setClauses.push(`status = $${paramIndex}`);
      params.push(status);
      paramIndex++;
    }
    if (priority !== undefined) {
      setClauses.push(`priority = $${paramIndex}`);
      params.push(priority);
      paramIndex++;
    }
    if (assigned_to !== undefined) {
      setClauses.push(`assigned_to = $${paramIndex}`);
      params.push(assigned_to);
      paramIndex++;
    }

    if (setClauses.length === 0) {
      return res.status(400).json({ success: false, error: 'No valid fields to update' });
    }

    setClauses.push('updated_at = NOW()');
    params.push(req.params.id);

    const result = await db.query(
      `UPDATE content_queue SET ${setClauses.join(', ')} WHERE id = $${paramIndex} RETURNING *`,
      params
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Queue item not found' });
    }

    res.json({ success: true, data: result.rows[0] });
  } catch (error) {
    console.error('PUT /api/queue/:id error:', error.message);
    res.status(500).json({ success: false, error: 'Failed to update queue item' });
  }
});

// DELETE /api/queue/:id - remove from queue
router.delete('/:id', async (req, res) => {
  try {
    const result = await db.query('DELETE FROM content_queue WHERE id = $1 RETURNING *', [req.params.id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Queue item not found' });
    }

    res.json({ success: true, message: 'Queue item deleted', data: result.rows[0] });
  } catch (error) {
    console.error('DELETE /api/queue/:id error:', error.message);
    res.status(500).json({ success: false, error: 'Failed to delete queue item' });
  }
});

module.exports = router;
