const db = require('../../config/database');

const up = async () => {
  const client = await db.connect();
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS sales (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
        customer_id VARCHAR(255),
        channel VARCHAR(100),
        price DECIMAL(12, 2) NOT NULL,
        sold_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      )
    `);

    await client.query(`
      CREATE INDEX IF NOT EXISTS idx_sales_product_id ON sales (product_id)
    `);
    await client.query(`
      CREATE INDEX IF NOT EXISTS idx_sales_channel ON sales (channel)
    `);
    await client.query(`
      CREATE INDEX IF NOT EXISTS idx_sales_sold_at ON sales (sold_at)
    `);

    console.log('Migration 004: sales table created');
  } finally {
    client.release();
  }
};

const down = async () => {
  const client = await db.connect();
  try {
    await client.query(`DROP TABLE IF EXISTS sales`);
    console.log('Migration 004: sales table dropped');
  } finally {
    client.release();
  }
};

module.exports = { up, down };
