//const { pool, pool } = require('.');

const db = require('./src/db');

pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error connecting to database:', err.stack);
  }

  console.log('Connected to database');
  release();
});

module.exports = pool;
//CLI argument parsing
export const command = process.argv[2];

