const { Client } = require('pg');

const connectionString =
  process.env.DATABASE_URL || 'https://localhost:5432/topsecret';

const client = new Client({
  connectionString,
});

console.log(client, "THIS IS CLIENT")

module.exports = client;

// clear
