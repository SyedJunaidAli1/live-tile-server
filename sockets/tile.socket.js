import { claimTile } from "../models/tile.model";
import "dotenv/config";

export default (io) => {
  io.on("connection", (socket) => {
    socket.on("claim_tile", async ({ tileId, userId, color }) => {
      const updatedTile = await claimTile(tileId, userId, color);

      if (updatedTile) {
        io.emit("tile_updated", updatedTile);
      } else {
        socket.emit("tile_taken", tileId);
      }
    });
  });
};
