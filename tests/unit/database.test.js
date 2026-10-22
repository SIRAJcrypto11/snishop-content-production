const db = require('../../src/config/database');

describe('Database Connection', () => {
  afterAll(async () => {
    await db.end();
  });

  test('pool should be defined', () => {
    expect(db.pool).toBeDefined();
  });

  test('query function should be defined', () => {
    expect(db.query).toBeDefined();
    expect(typeof db.query).toBe('function');
  });

  test('connect function should be defined', () => {
    expect(db.connect).toBeDefined();
    expect(typeof db.connect).toBe('function');
  });

  test('end function should be defined', () => {
    expect(db.end).toBeDefined();
    expect(typeof db.end).toBe('function');
  });

  test('pool should have correct default configuration', () => {
    expect(db.pool.options.max).toBe(20);
    expect(db.pool.options.idleTimeoutMillis).toBe(30000);
    expect(db.pool.options.connectionTimeoutMillis).toBe(2000);
  });
});
