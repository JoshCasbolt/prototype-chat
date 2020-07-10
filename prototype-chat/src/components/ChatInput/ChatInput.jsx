import PropTypes from 'prop-types';
import React, { Component } from 'react';

class ChatInput extends Component {
    state = {
      input: '',
    }

    handleSubmit = (e) => {
      e.preventDefault();

      const {
        input,
      } = this.state;

      const {
        user, handleAddMessage,
      } = this.props;

      const messageToAdd = {
        text: input,
        username: user,
      };

      handleAddMessage(messageToAdd);

      this.setState(() => ({ input: '' })); // Reset input after 'sending' message
    }

    // eslint-disable-next-line react/destructuring-assignment
    shouldButtonBeDisabled = () => (!this.state.input)

    handleInputChange = (input) => {
      this.setState(() => ({
        input,
      }));
    }

    render() {
      const {
        input,
      } = this.state;

      return (
        <form className="input-group" onSubmit={(e) => this.handleSubmit(e)}>
          <input type="text" className="form-control" placeholder="Enter your message..." value={input} onChange={(e) => this.handleInputChange(e.target.value)} />
          <div className="input-group-append">
            <button className="btn submit-button" disabled={this.shouldButtonBeDisabled()} type="submit">
              Send
            </button>
          </div>
        </form>
      );
    }
}

ChatInput.propTypes = {
  handleAddMessage: PropTypes.func.isRequired,
  user: PropTypes.string.isRequired,
};

export default ChatInput;
