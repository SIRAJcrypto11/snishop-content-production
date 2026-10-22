const db = require('../../config/database');

const up = async () => {
  const client = await db.connect();
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS content_queue (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        topic VARCHAR(500) NOT NULL,
        priority INTEGER DEFAULT 0,
        assigned_to VARCHAR(255),
        status VARCHAR(50) DEFAULT 'pending',
        brief JSONB DEFAULT '{}'::jsonb,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      )
    `);

    await client.query(`
      CREATE INDEX IF NOT EXISTS idx_content_queue_status ON content_queue (status)
    `);
    await client.query(`
      CREATE INDEX IF NOT EXISTS idx_content_queue_priority ON content_queue (priority DESC)
    `);
    await client.query(`
      CREATE INDEX IF NOT EXISTS idx_content_queue_assigned_to ON content_queue (assigned_to)
    `);

    console.log('Migration 002: content_queue table created');
  } finally {
    client.release();
  }
};

const down = async () => {
  const client = await db.connect();
  try {
    await client.query(`DROP TABLE IF EXISTS content_queue`);
    console.log('Migration 002: content_queue table dropped');
  } finally {
    client.release();
  }
};

module.exports = { up, down };
