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

/*
const DB_URL =
  process.env.DATABASE_URL || `postgres://localhost:5432/${DB_NAME}`;

let client;

// github actions client config
if (process.env.CI) {
  client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'postgres',
    port: 5432,
  });
} else {
  // local / heroku client config
  client = new Client(DB_URL);
}
*/
