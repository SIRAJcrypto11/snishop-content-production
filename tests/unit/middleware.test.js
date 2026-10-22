const authMiddleware = require('../../src/api/middleware/auth');
const { validate } = require('../../src/api/middleware/validation');

// ---------------------------------------------------------------------------
// Mock request / response helpers
// ---------------------------------------------------------------------------

function mockReq(headers = {}, body = {}) {
  return { headers, body };
}

function mockRes() {
  const res = {};
  res.statusCode = 200;
  res.body = null;
  res.status = (code) => { res.statusCode = code; return res; };
  res.json = (data) => { res.body = data; return res; };
  return res;
}

// ---------------------------------------------------------------------------
// Auth middleware
// ---------------------------------------------------------------------------

describe('auth middleware', () => {
  const ORIGINAL_API_KEY = process.env.API_KEY;

  afterEach(() => {
    if (ORIGINAL_API_KEY !== undefined) {
      process.env.API_KEY = ORIGINAL_API_KEY;
    } else {
      delete process.env.API_KEY;
    }
  });

  test('passes through when API_KEY env is not set', () => {
    delete process.env.API_KEY;
    const req = mockReq();
    const res = mockRes();
    const next = jest.fn();

    authMiddleware(req, res, next);
    expect(next).toHaveBeenCalled();
  });

  test('returns 401 when API_KEY is set but header is missing', () => {
    process.env.API_KEY = 'test-key-123';
    const req = mockReq();
    const res = mockRes();
    const next = jest.fn();

    authMiddleware(req, res, next);
    expect(res.statusCode).toBe(401);
    expect(next).not.toHaveBeenCalled();
  });

  test('returns 401 when API key is invalid', () => {
    process.env.API_KEY = 'test-key-123';
    const req = mockReq({ 'x-api-key': 'wrong-key' });
    const res = mockRes();
    const next = jest.fn();

    authMiddleware(req, res, next);
    expect(res.statusCode).toBe(401);
    expect(next).not.toHaveBeenCalled();
  });

  test('calls next when API key matches', () => {
    process.env.API_KEY = 'test-key-123';
    const req = mockReq({ 'x-api-key': 'test-key-123' });
    const res = mockRes();
    const next = jest.fn();

    authMiddleware(req, res, next);
    expect(next).toHaveBeenCalled();
  });
});

// ---------------------------------------------------------------------------
// Validation middleware
// ---------------------------------------------------------------------------

describe('validation middleware', () => {
  test('passes when all required fields are present', () => {
    const middleware = validate({ required: ['title', 'category'] });
    const req = mockReq({}, { title: 'Test', category: 'ebook' });
    const res = mockRes();
    const next = jest.fn();

    middleware(req, res, next);
    expect(next).toHaveBeenCalled();
  });

  test('returns 400 when a required field is missing', () => {
    const middleware = validate({ required: ['title'] });
    const req = mockReq({}, {});
    const res = mockRes();
    const next = jest.fn();

    middleware(req, res, next);
    expect(res.statusCode).toBe(400);
    expect(next).not.toHaveBeenCalled();
  });

  test('returns 400 when required field is empty string', () => {
    const middleware = validate({ required: ['title'] });
    const req = mockReq({}, { title: '' });
    const res = mockRes();
    const next = jest.fn();

    middleware(req, res, next);
    expect(res.statusCode).toBe(400);
  });

  test('returns 400 when field has wrong type', () => {
    const middleware = validate({ required: [], types: { price: 'number' } });
    const req = mockReq({}, { price: 'free' });
    const res = mockRes();
    const next = jest.fn();

    middleware(req, res, next);
    expect(res.statusCode).toBe(400);
  });

  test('passes when optional field is absent', () => {
    const middleware = validate({ required: [], types: { price: 'number' } });
    const req = mockReq({}, {});
    const res = mockRes();
    const next = jest.fn();

    middleware(req, res, next);
    expect(next).toHaveBeenCalled();
  });
});
