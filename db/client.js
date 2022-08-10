// constructing client

const { Pool } = require('pg');

const connectionString =
  process.env.DATABASE_URL || 'https://localhost:5432/topsecret';

const client = new Pool({
  connectionString,
  ssl:
    process.env.NODE_ENV === 'production'
      ? { rejectUnauthorized: false }
      : undefined,
});

module.exports = client;
