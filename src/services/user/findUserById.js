import { pool } from "../../database/index.js";

export default async(userId) => {
    const query = `
        SELECT id
        FROM users
        WHERE id = $1
    `;

    try {
        const res = await pool.query(query, [userId]);

        if (!res.rowCount && res.rows.length === 0) return null;

        return res.rows[0];
    } catch (error) {
        console.error(`Error querying for user ${error}`)
        throw error;
    }
}
