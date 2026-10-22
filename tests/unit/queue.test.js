const redis = require('../../src/config/redis');
const { taskQueue } = require('../../src/config/queue');

describe('Redis Configuration', () => {
  afterAll(async () => {
    await redis.quit();
  });

  test('should create a Redis connection', () => {
    expect(redis).toBeDefined();
    expect(redis.options.host).toBe(process.env.REDIS_HOST || 'localhost');
    expect(redis.options.port).toBe(parseInt(process.env.REDIS_PORT) || 6379);
  });

  test('should have correct retry settings', () => {
    expect(redis.options.maxRetriesPerRequest).toBeNull();
    expect(redis.options.enableReadyCheck).toBe(false);
  });
});

describe('BullMQ Queue Configuration', () => {
  afterAll(async () => {
    await taskQueue.close();
    await redis.quit();
  });

  test('should create a queue with correct name', () => {
    expect(taskQueue).toBeDefined();
    expect(taskQueue.name).toBe('content-production');
  });

  test('should have correct default job options', () => {
    expect(taskQueue.defaultJobOptions.attempts).toBe(3);
    expect(taskQueue.defaultJobOptions.backoff.type).toBe('exponential');
    expect(taskQueue.defaultJobOptions.backoff.delay).toBe(2000);
    expect(taskQueue.defaultJobOptions.removeOnComplete).toBe(100);
    expect(taskQueue.defaultJobOptions.removeOnFail).toBe(50);
  });
});
