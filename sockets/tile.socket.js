require("./sockets/tile.socket")(io);

import "./sockets/tile.socket";

// export default (io) => {
//   io.on("connection", (socket) => {
//     console.log("Tile user connected:", socket.id);

//     socket.on("claim_tile", (tileId) => {
//       // claim logic here later
//     });
//   });
// };

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("hello", (data) => {
    console.log("Client says:", data);
  });
});
