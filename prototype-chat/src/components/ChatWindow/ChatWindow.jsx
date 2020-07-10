import React, { Component } from 'react';
import Chat from '../Chat/Chat';

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

    addMessage = (message) => {
        console.table(message);
        this.setState((currentState) => ({
            messages: [
                ...currentState.messages,
                message,
            ],

        }))
    }

    render() {
        return (
            <div className='container'>
                <Chat handleAddMessage={this.addMessage} users={this.state.users} messages={this.state.messages} user='Amy' />
                <Chat handleAddMessage={this.addMessage} users={this.state.users} messages={this.state.messages} user='John'/>
            </div>
        );
    }
}

export default ChatWindow;