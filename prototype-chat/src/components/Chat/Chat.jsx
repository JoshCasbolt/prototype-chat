import React from 'react';
import PropTypes from 'prop-types';
import ChatOutput from '../ChatOutput/ChatOutput';
import ChatInput from '../ChatInput/ChatInput';

function Chat(props) {
  const {
    user, users, messages, handleAddMessage,
  } = props;

  return (
    <div className="chat-window">
      <h2>Super Awesome Chat</h2>
      <ChatOutput user={user} users={users} messages={messages} />
      <ChatInput user={user} handleAddMessage={handleAddMessage} />
    </div>
  );
}
Chat.propTypes = {
  user: PropTypes.string.isRequired,
  users: PropTypes.array.isRequired,
  messages: PropTypes.array.isRequired,
  handleAddMessage: PropTypes.func.isRequired,
};

export default Chat;
