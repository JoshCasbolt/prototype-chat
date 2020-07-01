import React, { Component } from 'react';
import Chat from '../Chat/Chat.js';

class ChatWindow extends Component {
    state = {
        users: [
            { username: 'Amy' },
            { username: 'John' }
        ],

        messages: [
          { username: 'Amy', text: 'Hi, Jon!' },
          { username: 'Amy', text: 'How are you?' },
          { username: 'John', text: 'Hi, Amy! Good, you?' },
        ],
    }

    render() {
        return (
            <div className='chat-window'>
                <Chat users={this.state.users} messages={this.state.messages} user='Amy' />
                <Chat users={this.state.users} messages={this.state.messages} user='John'/>
            </div>
        );
    }
}

export default ChatWindow;