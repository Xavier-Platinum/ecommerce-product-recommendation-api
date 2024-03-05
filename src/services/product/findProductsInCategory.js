import { pool } from "../../database/index.js";

export default async (category) => {
    const query = `
        SELECT id
        FROM products
        WHERE category = $1
    `;

    try {
        const res = await pool.query(query, [category]);
        return res.rows;
    } catch (err) {
        console.error('Error querying products in category:', err);
        throw err;
    }
}