const db = require('../../config/database');

const up = async () => {
  const client = await db.connect();
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS products (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        title VARCHAR(500) NOT NULL,
        description TEXT,
        category VARCHAR(255),
        subcategory VARCHAR(255),
        price DECIMAL(12, 2),
        pages INTEGER DEFAULT 0,
        quality_score DECIMAL(5, 2),
        status VARCHAR(50) DEFAULT 'draft',
        files JSONB DEFAULT '[]'::jsonb,
        screenshots JSONB DEFAULT '[]'::jsonb,
        metadata JSONB DEFAULT '{}'::jsonb,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      )
    `);

    await client.query(`
      CREATE INDEX IF NOT EXISTS idx_products_category ON products (category)
    `);
    await client.query(`
      CREATE INDEX IF NOT EXISTS idx_products_status ON products (status)
    `);
    await client.query(`
      CREATE INDEX IF NOT EXISTS idx_products_quality_score ON products (quality_score)
    `);
    await client.query(`
      CREATE INDEX IF NOT EXISTS idx_products_created_at ON products (created_at)
    `);

    console.log('Migration 001: products table created');
  } finally {
    client.release();
  }
};

const down = async () => {
  const client = await db.connect();
  try {
    await client.query(`DROP TABLE IF EXISTS products`);
    console.log('Migration 001: products table dropped');
  } finally {
    client.release();
  }
};

module.exports = { up, down };
