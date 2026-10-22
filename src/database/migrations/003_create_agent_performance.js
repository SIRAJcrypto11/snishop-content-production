const db = require('../../config/database');

const up = async () => {
  const client = await db.connect();
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS agent_performance (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        agent_name VARCHAR(255) NOT NULL,
        date DATE NOT NULL,
        products_created INTEGER DEFAULT 0,
        average_quality_score DECIMAL(5, 2),
        errors INTEGER DEFAULT 0,
        metadata JSONB DEFAULT '{}'::jsonb,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      )
    `);

    await client.query(`
      CREATE INDEX IF NOT EXISTS idx_agent_performance_agent_name ON agent_performance (agent_name)
    `);
    await client.query(`
      CREATE INDEX IF NOT EXISTS idx_agent_performance_date ON agent_performance (date)
    `);
    await client.query(`
      CREATE UNIQUE INDEX IF NOT EXISTS idx_agent_performance_agent_date ON agent_performance (agent_name, date)
    `);

    console.log('Migration 003: agent_performance table created');
  } finally {
    client.release();
  }
};

const down = async () => {
  const client = await db.connect();
  try {
    await client.query(`DROP TABLE IF EXISTS agent_performance`);
    console.log('Migration 003: agent_performance table dropped');
  } finally {
    client.release();
  }
};

module.exports = { up, down };
