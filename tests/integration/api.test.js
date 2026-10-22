/**
 * Integration test: REST API endpoints.
 *
 * Tests all API endpoints by creating test data, making requests,
 * and verifying responses. Tests CRUD operations for products, queue,
 * and analytics endpoints.
 */

// ---------------------------------------------------------------------------
// Mock database before requiring the app
// ---------------------------------------------------------------------------

const mockQuery = jest.fn();

jest.mock('../../src/config/database', () => ({
  query: mockQuery,
  connect: jest.fn().mockResolvedValue({
    query: mockQuery,
    release: jest.fn(),
  }),
  end: jest.fn(),
  pool: {},
}));

jest.mock('../../src/config/queue', () => ({
  taskQueue: { add: jest.fn() },
}));

jest.mock('../../src/config/redis', () => ({}));

const http = require('http');

// We need to require the app AFTER mocks are set up.
// Use supertest-like approach with raw http requests to avoid extra deps.
let app;
let server;
let baseUrl;

function request(method, path, body = null) {
  return new Promise((resolve, reject) => {
    const url = new URL(path, baseUrl);
    const options = {
      method,
      hostname: url.hostname,
      port: url.port,
      path: url.pathname + url.search,
      headers: { 'Content-Type': 'application/json' },
    };

    const req = http.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, body: JSON.parse(data) });
        } catch {
          resolve({ status: res.statusCode, body: data });
        }
      });
    });

    req.on('error', reject);
    if (body) req.write(JSON.stringify(body));
    req.end();
  });
}

beforeAll((done) => {
  // Import the app (server is already listening because index.js auto-listens)
  // We need to prevent auto-listen, so import just the app
  const express = require('express');
  const productsRouter = require('../../src/api/routes/products');
  const queueRouter = require('../../src/api/routes/queue');
  const agentsRouter = require('../../src/api/routes/agents');
  const analyticsRouter = require('../../src/api/routes/analytics');

  app = express();
  app.use(express.json());
  app.use('/api/products', productsRouter);
  app.use('/api/queue', queueRouter);
  app.use('/api/agents', agentsRouter);
  app.use('/api/analytics', analyticsRouter);
  app.get('/health', (req, res) => res.json({ status: 'ok' }));

  server = app.listen(0, () => {
    const port = server.address().port;
    baseUrl = `http://127.0.0.1:${port}`;
    done();
  });
});

afterAll((done) => {
  server.close(done);
});

beforeEach(() => {
  mockQuery.mockReset();
});

// ===========================================================================
// Health check
// ===========================================================================

describe('GET /health', () => {
  test('returns 200 with status ok', async () => {
    const res = await request('GET', '/health');
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('ok');
  });
});

// ===========================================================================
// Products CRUD
// ===========================================================================

describe('Products API', () => {
  describe('GET /api/products', () => {
    test('returns list of products', async () => {
      mockQuery.mockResolvedValueOnce({
        rows: [
          { id: 'p1', title: 'Product 1', category: 'ebook', status: 'published' },
          { id: 'p2', title: 'Product 2', category: 'template', status: 'draft' },
        ],
      });

      const res = await request('GET', '/api/products');
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data).toHaveLength(2);
      expect(res.body.count).toBe(2);
    });

    test('filters by category query param', async () => {
      mockQuery.mockResolvedValueOnce({
        rows: [{ id: 'p1', title: 'Product 1', category: 'ebook' }],
      });

      const res = await request('GET', '/api/products?category=ebook');
      expect(res.status).toBe(200);
      expect(res.body.data).toHaveLength(1);
    });
  });

  describe('GET /api/products/:id', () => {
    test('returns a single product', async () => {
      mockQuery.mockResolvedValueOnce({
        rows: [{ id: 'p1', title: 'Product 1' }],
      });

      const res = await request('GET', '/api/products/p1');
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.title).toBe('Product 1');
    });

    test('returns 404 when product not found', async () => {
      mockQuery.mockResolvedValueOnce({ rows: [] });

      const res = await request('GET', '/api/products/nonexistent');
      expect(res.status).toBe(404);
    });
  });

  describe('POST /api/products', () => {
    test('creates a new product', async () => {
      mockQuery.mockResolvedValueOnce({
        rows: [{ id: 'new-p', title: 'New Product', category: 'guide' }],
      });

      const res = await request('POST', '/api/products', {
        title: 'New Product',
        category: 'guide',
        price: 50000,
      });
      expect(res.status).toBe(201);
      expect(res.body.success).toBe(true);
      expect(res.body.data.title).toBe('New Product');
    });

    test('returns 400 when title is missing', async () => {
      const res = await request('POST', '/api/products', { category: 'guide' });
      expect(res.status).toBe(400);
      expect(res.body.error).toBe('Validation failed');
    });
  });

  describe('PUT /api/products/:id', () => {
    test('updates a product', async () => {
      mockQuery.mockResolvedValueOnce({
        rows: [{ id: 'p1', title: 'Updated Title', status: 'published' }],
      });

      const res = await request('PUT', '/api/products/p1', {
        title: 'Updated Title',
        status: 'published',
      });
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.title).toBe('Updated Title');
    });

    test('returns 404 when product does not exist', async () => {
      mockQuery.mockResolvedValueOnce({ rows: [] });

      const res = await request('PUT', '/api/products/nonexistent', { title: 'X' });
      expect(res.status).toBe(404);
    });

    test('returns 400 when no valid fields provided', async () => {
      const res = await request('PUT', '/api/products/p1', { invalidField: true });
      expect(res.status).toBe(400);
    });
  });

  describe('DELETE /api/products/:id', () => {
    test('deletes a product', async () => {
      mockQuery.mockResolvedValueOnce({
        rows: [{ id: 'p1', title: 'Deleted Product' }],
      });

      const res = await request('DELETE', '/api/products/p1');
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.message).toBe('Product deleted');
    });

    test('returns 404 when product does not exist', async () => {
      mockQuery.mockResolvedValueOnce({ rows: [] });

      const res = await request('DELETE', '/api/products/nonexistent');
      expect(res.status).toBe(404);
    });
  });
});

// ===========================================================================
// Queue CRUD
// ===========================================================================

describe('Queue API', () => {
  describe('GET /api/queue', () => {
    test('returns queue items ordered by priority', async () => {
      mockQuery.mockResolvedValueOnce({
        rows: [
          { id: 'q1', topic: 'High Priority', priority: 10, status: 'pending' },
          { id: 'q2', topic: 'Low Priority', priority: 1, status: 'pending' },
        ],
      });

      const res = await request('GET', '/api/queue');
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data).toHaveLength(2);
    });
  });

  describe('POST /api/queue', () => {
    test('adds a topic to the queue', async () => {
      mockQuery.mockResolvedValueOnce({
        rows: [{ id: 'new-q', topic: 'New Topic', priority: 5 }],
      });

      const res = await request('POST', '/api/queue', {
        topic: 'New Topic',
        priority: 5,
      });
      expect(res.status).toBe(201);
      expect(res.body.success).toBe(true);
    });

    test('returns 400 when topic is missing', async () => {
      const res = await request('POST', '/api/queue', { priority: 5 });
      expect(res.status).toBe(400);
    });
  });

  describe('PUT /api/queue/:id', () => {
    test('updates a queue item', async () => {
      mockQuery.mockResolvedValueOnce({
        rows: [{ id: 'q1', topic: 'Updated', status: 'assigned', assigned_to: 'ContentAgent' }],
      });

      const res = await request('PUT', '/api/queue/q1', {
        status: 'assigned',
        assigned_to: 'ContentAgent',
      });
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
    });

    test('returns 404 when queue item not found', async () => {
      mockQuery.mockResolvedValueOnce({ rows: [] });

      const res = await request('PUT', '/api/queue/nonexistent', { status: 'done' });
      expect(res.status).toBe(404);
    });
  });

  describe('DELETE /api/queue/:id', () => {
    test('deletes a queue item', async () => {
      mockQuery.mockResolvedValueOnce({
        rows: [{ id: 'q1', topic: 'Removed' }],
      });

      const res = await request('DELETE', '/api/queue/q1');
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
    });

    test('returns 404 when queue item not found', async () => {
      mockQuery.mockResolvedValueOnce({ rows: [] });

      const res = await request('DELETE', '/api/queue/nonexistent');
      expect(res.status).toBe(404);
    });
  });
});

// ===========================================================================
// Agents
// ===========================================================================

describe('Agents API', () => {
  describe('GET /api/agents/status', () => {
    test('returns agent statuses', async () => {
      mockQuery.mockResolvedValueOnce({
        rows: [
          { agent_name: 'OrchestratorAgent', date: '2025-12-01', products_created: 10, average_quality_score: 88, errors: 0, metadata: {}, updated_at: '2025-12-01T10:00:00Z' },
        ],
      });

      const res = await request('GET', '/api/agents/status');
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(Array.isArray(res.body.data)).toBe(true);
      expect(res.body.data.length).toBeGreaterThan(0);
      expect(res.body.data[0]).toHaveProperty('name');
      expect(res.body.data[0]).toHaveProperty('status');
    });
  });

  describe('GET /api/agents/performance', () => {
    test('returns performance metrics', async () => {
      mockQuery.mockResolvedValueOnce({
        rows: [
          { agent_name: 'ContentAgent', date: '2025-12-01', products_created: 5 },
        ],
      });

      const res = await request('GET', '/api/agents/performance');
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data).toHaveLength(1);
    });
  });

  describe('POST /api/agents/:name/restart', () => {
    test('restarts a known agent', async () => {
      const res = await request('POST', '/api/agents/OrchestratorAgent/restart');
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.name).toBe('OrchestratorAgent');
    });

    test('returns 404 for unknown agent', async () => {
      const res = await request('POST', '/api/agents/UnknownAgent/restart');
      expect(res.status).toBe(404);
    });
  });
});

// ===========================================================================
// Analytics
// ===========================================================================

describe('Analytics API', () => {
  describe('GET /api/analytics/revenue', () => {
    test('returns revenue breakdown', async () => {
      mockQuery
        .mockResolvedValueOnce({
          rows: [
            { period_start: '2025-12-01', total_sales: 10, total_revenue: '500000', unique_products_sold: 8 },
          ],
        })
        .mockResolvedValueOnce({
          rows: [{ total_sales: '10', total_revenue: '500000' }],
        });

      const res = await request('GET', '/api/analytics/revenue?period=day');
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data).toHaveProperty('breakdown');
      expect(res.body.data).toHaveProperty('total');
    });
  });

  describe('GET /api/analytics/production', () => {
    test('returns production metrics', async () => {
      mockQuery
        .mockResolvedValueOnce({
          rows: [{ total_products: 50, avg_quality_score: 82, published: 30, drafts: 20 }],
        })
        .mockResolvedValueOnce({
          rows: [{ total_queued: 100, pending: 50, assigned: 30, completed: 20 }],
        });

      const res = await request('GET', '/api/analytics/production');
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data).toHaveProperty('products');
      expect(res.body.data).toHaveProperty('queue');
    });
  });

  describe('GET /api/analytics/quality', () => {
    test('returns quality metrics', async () => {
      mockQuery
        .mockResolvedValueOnce({
          rows: [{ total_scored: 50, average_score: 82, min_score: 45, max_score: 98, excellent: 20, good: 15, fair: 10, poor: 5 }],
        })
        .mockResolvedValueOnce({
          rows: [
            { category: 'ebook', count: 20, avg_score: 88 },
            { category: 'template', count: 15, avg_score: 75 },
          ],
        });

      const res = await request('GET', '/api/analytics/quality');
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data).toHaveProperty('overall');
      expect(res.body.data).toHaveProperty('byCategory');
    });
  });
});
