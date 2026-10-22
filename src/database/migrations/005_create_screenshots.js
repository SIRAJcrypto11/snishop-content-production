const db = require('../../config/database');

const up = async () => {
  const client = await db.connect();
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS screenshots (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        filename VARCHAR(500) NOT NULL,
        path TEXT NOT NULL,
        category VARCHAR(255),
        tags TEXT[] DEFAULT '{}',
        metadata JSONB DEFAULT '{}'::jsonb,
        usage_count INTEGER DEFAULT 0,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      )
    `);

    await client.query(`
      CREATE INDEX IF NOT EXISTS idx_screenshots_category ON screenshots (category)
    `);
    await client.query(`
      CREATE INDEX IF NOT EXISTS idx_screenshots_tags ON screenshots USING GIN (tags)
    `);
    await client.query(`
      CREATE INDEX IF NOT EXISTS idx_screenshots_created_at ON screenshots (created_at)
    `);

    console.log('Migration 005: screenshots table created');
  } finally {
    client.release();
  }
};

const down = async () => {
  const client = await db.connect();
  try {
    await client.query(`DROP TABLE IF EXISTS screenshots`);
    console.log('Migration 005: screenshots table dropped');
  } finally {
    client.release();
  }
};

module.exports = { up, down };
