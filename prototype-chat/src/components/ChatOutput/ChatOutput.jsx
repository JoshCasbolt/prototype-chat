import PropTypes from 'prop-types';
import React from 'react';

function ChatOutput(props) {
  const { user, messages } = props;
  return (
    <div>
      <div className="name sender">{user}</div>

      <ul className="message-list">
        {messages.map((message) => (
          <li
            key={message.uniqueId}
            className={
                    message.username === user ? 'message sender' : 'message recipient'
                }
          >
            <p>{`${message.username}: ${message.text}`}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

ChatOutput.propTypes = {
  messages: PropTypes.array.isRequired,
  user: PropTypes.string.isRequired,
  users: PropTypes.array.isRequired,
};

export default ChatOutput;
