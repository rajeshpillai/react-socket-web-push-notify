const express = require("express");
const path = require("path");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());

const port = 4000;

const dummyDb = { subscription: null }; //dummy in memory store

const saveToDatabase = async subscription => {
  // Since this is a demo app, I am going to save this in a dummy in memory store. Do not do this in your apps.
  // Here you should be writing your db logic to save it.
  dummyDb.subscription = subscription;
};
// The new /save-subscription endpoint
app.post("/save-subscription", async (req, res) => {
  const subscription = req.body;
  await saveToDatabase(subscription); //Method to save the subscription to Database
  res.json({ message: "success" });
});

http.listen(port, () => {
  console.log(`Listening on ${port}`);
});

io.on("connection", function(socket) {
  // This event will trigger when any user is connected.
  // You can use 'socket' to emit and receive events.
  console.log("a user connected.");
});
