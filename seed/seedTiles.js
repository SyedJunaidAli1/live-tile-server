import "dotenv/config"; // ALWAYS FIRST
import pool from "../config/db.js";

async function seedTiles() {
  for (let i = 0; i < 400; i++) {
    await pool.query("INSERT INTO tiles DEFAULT VALUES");
  }

  console.log("Tiles seeded!");
  process.exit();
}

seedTiles();
