const express = require("express");
const http = require("http");
const socketIO = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIO(server, {
  cors: {
    origin: "*",
  },
});

const PORT = process.env.PORT || 3001;

io.on("connection", (socket) => {
  console.log("User is Connected");

  socket.on("message", (msg) => {
    console.log("MSG", msg);
    io.emit("message", msg);
  });

  socket.on("disconnect", () => {
    console.log("A User Disconnected");
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
