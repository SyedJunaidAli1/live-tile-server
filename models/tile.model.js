import pool from "../config/db.js";

export async function claimTile(tileId, userId, color) {
  const result = await pool.query(
    `UPDATE tiles
     SET owner_id = $1,
         color = $2,
         claimed_at = NOW()
     WHERE id = $3
     AND owner_id IS NULL
     RETURNING *`,
    [userId, color, tileId],
  );

  return result.rows[0]; // undefined if taken
}

export async function getTiles() {
  const result = await pool.query(
    "SELECT * FROM tiles ORDER BY id"
  );

  return result.rows;
}
