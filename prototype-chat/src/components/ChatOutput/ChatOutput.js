import React from 'react';

function ChatOutput(props) {
    const { user, messages, users } = props;
    return (
        <div>
            <div className="name sender">{user}</div>

            <ul className="message-list">
            {messages.map((message, index) => (
                <li
                key={index}
                className={
                    message.username === users[0].username ? 'message sender' : 'message recipient'
                }
                >
                <p>{`${message.username}: ${message.text}`}</p>
                </li>
            ))}
            </ul>
        </div>
    );
}

export default ChatOutput;