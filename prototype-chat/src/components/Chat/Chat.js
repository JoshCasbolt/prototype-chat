import React, { Component } from 'react';
import ChatOutput from '../ChatOutput/ChatOutput.js';
import ChatInput from '../ChatInput/ChatInput.js';

class Chat extends Component {
    render() {
        return (
            <div className="chat-window">
                <h2>Super Awesome Chat</h2>
                <ChatOutput user={this.props.user} users={this.props.users} messages={this.props.messages}/>
                <ChatInput user={this.props.user} handleAddMessage={this.props.handleAddMessage} />
            </div>
        );
    }
}

export default Chat;