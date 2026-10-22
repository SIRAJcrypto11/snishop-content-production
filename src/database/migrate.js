const fs = require('fs');
const path = require('path');
const db = require('../config/database');

const MIGRATIONS_DIR = path.join(__dirname, 'migrations');

async function migrate() {
  const client = await db.connect();

  try {
    // Create migrations tracking table
    await client.query(`
      CREATE TABLE IF NOT EXISTS migrations (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL UNIQUE,
        executed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      )
    `);

    // Get list of migration files
    const files = fs.readdirSync(MIGRATIONS_DIR)
      .filter(f => f.endsWith('.js'))
      .sort();

    // Get already executed migrations
    const { rows: executed } = await client.query('SELECT name FROM migrations');
    const executedSet = new Set(executed.map(r => r.name));

    let count = 0;

    for (const file of files) {
      if (executedSet.has(file)) {
        console.log(`Skipping already executed: ${file}`);
        continue;
      }

      console.log(`Running migration: ${file}`);
      const migration = require(path.join(MIGRATIONS_DIR, file));

      await migration.up();
      await client.query('INSERT INTO migrations (name) VALUES ($1)', [file]);
      count++;
    }

    console.log(`\nCompleted ${count} migration(s)`);
  } catch (err) {
    console.error('Migration failed:', err.message);
    process.exit(1);
  } finally {
    client.release();
    await db.end();
  }
}

// Run if called directly
if (require.main === module) {
  migrate();
}

module.exports = { migrate };
