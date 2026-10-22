#!/usr/bin/env node

/**
 * setup.js - Initial setup script for the Content Production System.
 *
 * 1. Runs database migrations
 * 2. Seeds initial data (topics)
 * 3. Verifies the setup completed successfully
 */

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

const { migrate } = require('../src/database/migrate');
const db = require('../src/config/database');

async function setup() {
  console.log('='.repeat(60));
  console.log('SNISHOP Content Production System - Initial Setup');
  console.log('='.repeat(60));
  console.log();

  try {
    // Step 1: Run migrations
    console.log('[1/3] Running database migrations...');
    await migrate();
    console.log('      Migrations complete.\n');

    // Step 2: Seed initial data
    console.log('[2/3] Seeding initial data...');
    const seedTopics = require('./seed-topics');
    await seedTopics.seed();
    console.log('      Seeding complete.\n');

    // Step 3: Verify setup
    console.log('[3/3] Verifying setup...');
    const tableCheck = await db.query(
      `SELECT table_name FROM information_schema.tables
       WHERE table_schema = 'public'
       ORDER BY table_name`
    );
    const tables = tableCheck.rows.map((r) => r.table_name);
    console.log(`      Found ${tables.length} tables: ${tables.join(', ')}`);

    const productCount = await db.query('SELECT COUNT(*) FROM products');
    const queueCount = await db.query('SELECT COUNT(*) FROM content_queue');
    console.log(`      Products: ${productCount.rows[0].count}`);
    console.log(`      Queue items: ${queueCount.rows[0].count}`);

    console.log();
    console.log('='.repeat(60));
    console.log('Setup complete!');
    console.log('='.repeat(60));
  } catch (error) {
    console.error('\nSetup failed:', error.message);
    console.error(error);
    process.exit(1);
  } finally {
    await db.end();
  }
}

setup();
