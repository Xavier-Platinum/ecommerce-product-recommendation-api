import { pool } from "../../database/index.js";

export default async (userId) => {
    const query = `
        SELECT p.product_id, pr.category
        FROM purchases p
        JOIN products pr ON p.product_id = pr.id
        WHERE p.user_id = $1
        LIMIT 1
    `;

    try {
        const res = await pool.query(query, [userId]);
        return res.rows[0];
    } catch (err) {
        console.error('Error querying the most recent purchase by user ID:', err);
        throw err;
    }
}