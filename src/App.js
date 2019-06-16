import React from "react";
import "./App.css";

const socket = require("socket.io-client")("http://localhost:4000");

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React:Socket:Push Notification
        </a>
      </header>
      <h2>Make a GET rquest to</h2>
      <a href="http://localhost:4000/send-notification" target="_blank">
        http://localhost:4000/send-notification
      </a>
      <h2>to test PUSH notification.</h2>
    </div>
  );
}

export default App;
