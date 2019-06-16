const express = require("express");
const path = require("path");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const cors = require("cors");

app.use(cors());

const port = 4000;

http.listen(port, () => {
  console.log(`Listening on ${port}`);
});

io.on("connection", function(socket) {
  // This event will trigger when any user is connected.
  // You can use 'socket' to emit and receive events.
  console.log("a user connected.");
});
