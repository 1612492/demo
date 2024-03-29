import { Pool } from 'pg';

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
});

export default pool;
