import React from 'react';
import './App.css';

const socket = require('socket.io-client')('http://localhost:4000');

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
      <button id="btnSendPushNotif">Send Push Notification</button>
    </div>
  );
}

export default App;
