import React, { Component } from 'react';
import Chat from '../Chat/Chat';

class ChatWindow extends Component {
    state = {
      users: [
        { username: 'Amy' },
        { username: 'John' },
      ],

      messages: [
        { username: 'Amy', text: 'Hi, Jon!', uniqueId: 'message-1' },
        { username: 'Amy', text: 'How are you?', uniqueId: 'message-2' },
        { username: 'John', text: 'Hi, Amy! Good, you?', uniqueId: 'message-3' },
      ],
    }

    getUniqueArrayId(arrayObject) {
      const uniqueId = arrayObject.length + 1;
      return `message-${uniqueId}`;
    }

    addMessage = (message) => {
      const {
        messages,
      } = this.state;

      const messageToAdd = message;
      messageToAdd.uniqueId = this.getUniqueArrayId(messages);

      this.setState((currentState) => ({
        messages: [
          ...currentState.messages,
          messageToAdd,
        ],

      }));
    }

    render() {
      const {
        users, messages,
      } = this.state;

      return (
        <div className="container">
          <Chat handleAddMessage={this.addMessage} users={users} messages={messages} user="Amy" />
          <Chat handleAddMessage={this.addMessage} users={users} messages={messages} user="John" />
        </div>
      );
    }
}

export default ChatWindow;
