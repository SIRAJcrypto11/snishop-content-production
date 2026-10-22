const { Queue } = require('bullmq');
const redis = require('./redis');

const taskQueue = new Queue('content-production', {
  connection: redis,
  defaultJobOptions: {
    removeOnComplete: 100,
    removeOnFail: 50,
    attempts: 3,
    backoff: {
      type: 'exponential',
      delay: 2000,
    },
  },
});

module.exports = { taskQueue };
