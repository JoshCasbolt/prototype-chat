import React, { Component } from 'react';

class ChatInput extends Component {
    state = {
        input: '',
    }
    handleSubmit = (e) => {
        e.preventDefault();

        const messageToAdd = {
            user: this.props.user,
            message: this.state.input,
        }

        this.props.handleAddMessage(messageToAdd);

        this.setState(() => ({input: ''})); // Reset input after 'sending' message

    }

    shouldButtonBeDisabled = () => {
        return !this.state.input ? true : false
    }

    handleInputChange = (input) => {
        this.setState((currentState) => ({
            input: input
        }))

    }

    render() {
        return (
            <form className="input-group" onSubmit={(e) => this.handleSubmit(e)}>
                <input type="text" className="form-control" placeholder="Enter your message..." value={this.state.input} onChange={(e) => this.handleInputChange(e.target.value)}/>
                <div className="input-group-append">
                    <button className="btn submit-button" disabled={this.shouldButtonBeDisabled()}>
                    SEND
                    </button>
                </div>
            </form>
        );
    }
}

export default ChatInput;