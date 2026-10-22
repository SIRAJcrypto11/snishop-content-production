const express = require('express');
const db = require('../../config/database');
const { validate } = require('../middleware/validation');

const router = express.Router();

// GET /api/products - list all products (with optional filters: category, status)
router.get('/', async (req, res) => {
  try {
    const { category, status } = req.query;
    const conditions = [];
    const params = [];

    if (category) {
      params.push(category);
      conditions.push(`category = $${params.length}`);
    }
    if (status) {
      params.push(status);
      conditions.push(`status = $${params.length}`);
    }

    const where = conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : '';
    const result = await db.query(
      `SELECT * FROM products ${where} ORDER BY created_at DESC`,
      params
    );

    res.json({ success: true, data: result.rows, count: result.rows.length });
  } catch (error) {
    console.error('GET /api/products error:', error.message);
    res.status(500).json({ success: false, error: 'Failed to fetch products' });
  }
});

// GET /api/products/:id - get single product
router.get('/:id', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM products WHERE id = $1', [req.params.id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Product not found' });
    }

    res.json({ success: true, data: result.rows[0] });
  } catch (error) {
    console.error('GET /api/products/:id error:', error.message);
    res.status(500).json({ success: false, error: 'Failed to fetch product' });
  }
});

// POST /api/products - create new product
router.post(
  '/',
  validate({ required: ['title'], types: { title: 'string', description: 'string', category: 'string' } }),
  async (req, res) => {
    try {
      const {
        title,
        description,
        category,
        subcategory,
        price,
        pages,
        quality_score,
        status,
        files,
        screenshots,
        metadata,
      } = req.body;

      const result = await db.query(
        `INSERT INTO products (title, description, category, subcategory, price, pages, quality_score, status, files, screenshots, metadata)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
         RETURNING *`,
        [
          title,
          description || null,
          category || null,
          subcategory || null,
          price || 0,
          pages || 0,
          quality_score || null,
          status || 'draft',
          JSON.stringify(files || []),
          JSON.stringify(screenshots || []),
          JSON.stringify(metadata || {}),
        ]
      );

      res.status(201).json({ success: true, data: result.rows[0] });
    } catch (error) {
      console.error('POST /api/products error:', error.message);
      res.status(500).json({ success: false, error: 'Failed to create product' });
    }
  }
);

// PUT /api/products/:id - update product
router.put('/:id', async (req, res) => {
  try {
    const fields = req.body;
    const allowedFields = [
      'title', 'description', 'category', 'subcategory', 'price',
      'pages', 'quality_score', 'status', 'files', 'screenshots', 'metadata',
    ];

    const setClauses = [];
    const params = [];
    let paramIndex = 1;

    for (const field of allowedFields) {
      if (fields[field] !== undefined) {
        let value = fields[field];
        // JSONB fields need to be stringified
        if (['files', 'screenshots', 'metadata'].includes(field) && typeof value !== 'string') {
          value = JSON.stringify(value);
        }
        setClauses.push(`${field} = $${paramIndex}`);
        params.push(value);
        paramIndex++;
      }
    }

    if (setClauses.length === 0) {
      return res.status(400).json({ success: false, error: 'No valid fields to update' });
    }

    setClauses.push('updated_at = NOW()');
    params.push(req.params.id);

    const result = await db.query(
      `UPDATE products SET ${setClauses.join(', ')} WHERE id = $${paramIndex} RETURNING *`,
      params
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Product not found' });
    }

    res.json({ success: true, data: result.rows[0] });
  } catch (error) {
    console.error('PUT /api/products/:id error:', error.message);
    res.status(500).json({ success: false, error: 'Failed to update product' });
  }
});

// DELETE /api/products/:id - delete product
router.delete('/:id', async (req, res) => {
  try {
    const result = await db.query('DELETE FROM products WHERE id = $1 RETURNING *', [req.params.id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Product not found' });
    }

    res.json({ success: true, message: 'Product deleted', data: result.rows[0] });
  } catch (error) {
    console.error('DELETE /api/products/:id error:', error.message);
    res.status(500).json({ success: false, error: 'Failed to delete product' });
  }
});

module.exports = router;
