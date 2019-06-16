import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

/* Notification service worker check */
const check = () => {
  if (!("serviceWorker" in navigator)) {
    throw new Error("No Service Worker support!");
  }
  if (!("PushManager" in window)) {
    throw new Error("No Push API Support!");
  }
};

const registerServiceWorker = async () => {
  const swUrl = `${process.env.PUBLIC_URL}/sw-push.js`;
  console.log("swUrl", swUrl);

  const swRegistration = await navigator.serviceWorker.register(swUrl);
  return swRegistration;
};

const requestNotificationPermission = async () => {
  //const permission = await window.Notification.requestPermission();

  Notification.requestPermission(status => {
    console.log("Notification permission status:", status);
  });

  // value of permission can be 'granted', 'default', 'denied'
  // granted: user has accepted the request
  // default: user has dismissed the notification permission popup by clicking on x
  // denied: user has denied the request.

  // if (permission !== "granted") {
  //   throw new Error("Permission not granted for Notification");
  // }
};

const main = async () => {
  check();
  const swRegistration = await registerServiceWorker();
  const permission = await requestNotificationPermission();

  console.log("swReg", swRegistration);

  if (Notification.permission == "granted") {
    navigator.serviceWorker.getRegistration(swRegistration.scope).then(reg => {
      console.log("About to show notification", reg);
      reg.showNotification("Hello world!");
    });

    // navigator.serviceWorker.ready.then(function(reg) {
    //   new Notification("Helo");
    // });
  }
};

main();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
