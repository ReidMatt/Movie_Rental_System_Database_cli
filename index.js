//require('dotenv').config();

const db = require('./db');

import { Pool } from 'pg';
import { command } from './database';
import { pool } from './pool';


//Function to display all movies
async function showMovies() {
  const res = await new Pool({
    user: process.env.PG_postgres,
    host: process.env.PG_localhost,
    database: process.env.PG_movie_rental_db,
    password: process.env.PG_Boxing,
    post: process.env.PG - 5432,
  }).query('SELECT * FROM movies');
  console.log(res.rows);
}

if (command === 'show') {
  showMovies();
};

exports.pool = new Pool({
  user: process.env.PG_postgres,
  host: process.env.PG_localhost,
  database: process.env.PG_movie_rental_db,
  password: process.env.PG_Boxing,
  post: process.env.PG - 5432,
});

exports.pool = pool;

