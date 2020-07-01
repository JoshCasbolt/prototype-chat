import React, { Component } from 'react';
import ChatOutput from './ChatOutput/ChatOutput.js';
import ChatInput from './ChatInput/ChatInput.js';

class Chat extends Component {
    render() {
        return (
            <div>
                <h2>Super Awesome Chat</h2>
                <ChatOutput/>
                <ChatInput/>
            </div>
        );
    }
}

export default Chat;