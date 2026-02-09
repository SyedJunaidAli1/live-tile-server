import { claimTile } from "../models/tile.model.js";

export default function tileSocket(io) {
  io.on("connection", (socket) => {
    socket.on("claim_tile", async ({ tileId, userId }) => {
      // generate color server-side (smart move)
      const color = `hsl(${Math.random() * 360},70%,60%)`;

      const updatedTile = await claimTile(tileId, userId, color);

      if (updatedTile) {
        // SUCCESS → tell everyone
        io.emit("tile_updated", updatedTile);
      } else {
        // FAIL → tell only that user
        socket.emit("tile_taken", tileId);
      }
    });
  });
}
