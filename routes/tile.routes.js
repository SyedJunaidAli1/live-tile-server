import express from "express";
import { getTiles } from "../models/tile.model.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const tiles = await getTiles();
    res.json(tiles);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch tiles" });
  }
});

export default router;
