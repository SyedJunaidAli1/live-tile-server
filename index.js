import "dotenv/config";
import app from "./app.js";
import http from "http";
import { Server } from "socket.io";
import pool from "./config/db.js";

const PORT = process.env.PORT;

// Create HTTP server
const server = http.createServer(app);

// Attach socket
// console.log("FRONTEND:", process.env.FRONTEND_ENDPOINT);

const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_ENDPOINT,
  },
});

// Socket connection
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error("DB connection error:", err);
  } else {
    console.log("DB connected:", res.rows[0]);
  }
});

// Start server
server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
