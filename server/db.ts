import { Client } from 'pg';

export default new Client({
  connectionString: process.env.PGRES_URL,
  ssl: {
    rejectUnauthorized: false
  }
});
