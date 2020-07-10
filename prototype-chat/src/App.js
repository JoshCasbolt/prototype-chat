import React, { Component } from 'react';
import './App.css';
import ChatWindow from './components/ChatWindow/ChatWindow.js';

class App extends Component {
  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
  isDisabled = () => {
    return false;
  };

  render() {
    return (
      <ChatWindow />
    );
  }
}

export default App;
