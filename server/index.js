const express = require("express");
const path = require("path");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const cors = require("cors");
const bodyParser = require("body-parser");
const webpush = require("web-push"); //requiring the web-push module

app.use(cors());
app.use(bodyParser.json());

const port = 4000;

const dummyDb = { subscription: null }; //dummy in memory store

/* web push */
const vapidKeys = {
  publicKey:
    "BLHxWiNVmr7ROB8O3KpPRJFAMhMypwe4X9TdWMmhsPSzHszo32PDkndpvWx3H0OY2HwFCQRU98JBpZ_AEsVxWG4",
  privateKey: "VXcSZD3mdKyXEmDZNrB02WTxgUZmdIpAEo5tnXR4OH4"
};
//setting our previously generated VAPID keys
webpush.setVapidDetails(
  "mailto:coachingmonk@email.com",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);
//function to send the notification to the subscribed device
const sendNotification = (subscription, dataToSend = "") => {
  webpush.sendNotification(subscription, dataToSend);
};

/* <- web push */

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

//route to test send notification
app.get("/send-notification", (req, res) => {
  const subscription = dummyDb.subscription; //get subscription from your databse here.
  const message = "Hello World from server";
  sendNotification(subscription, message);
  res.json({ message: "message sent" });
});

http.listen(port, () => {
  console.log(`Listening on ${port}`);
});

io.on("connection", function(socket) {
  // This event will trigger when any user is connected.
  // You can use 'socket' to emit and receive events.
  console.log("a user connected.");
});
