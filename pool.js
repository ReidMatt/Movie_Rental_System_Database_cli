import { Pool } from "pg";

export const pool = new Pool({
  user: process.env.ostgres,
  host: process.env.localhost,
  database: process.env.movie_rental_db,
  password: process.env.Boxing,
  port: process.env, .5432: 
}
);
