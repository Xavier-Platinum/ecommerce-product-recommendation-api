import pkg from 'pg';
const { Pool } = pkg;
import { config } from 'dotenv';
config();
const { DB_USER, DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT } = process.env;

console.log(DB_USER, DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT)

export const pool = new Pool({
    user: DB_USER,
    host: DB_HOST,
    database: DB_NAME,
    password: DB_PASSWORD,
    port: DB_PORT,
})
