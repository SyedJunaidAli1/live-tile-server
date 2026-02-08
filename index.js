import "dotenv/config";
import app from "./app.js";
import http from "http";

const { Server } = require("socket.io");

const PORT = process.env.PORT;

// Create HTTP server
const server = http.createServer(app);

// Attach socket
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

// Socket connection
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

// Start server
server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
