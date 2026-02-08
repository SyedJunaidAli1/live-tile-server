import express from "express";
import cors from "cors";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Health route (VERY smart to have)
app.get("/", (req, res) => {
  res.send("Server is running and healthy...");
});

export default app;
