import React from 'react';

function ChatInput(props) {
    return (
        <form className="input-group">
            <input type="text" className="form-control" placeholder="Enter your message..." />
            <div className="input-group-append">
                <button className="btn submit-button" disabled={this.isDisabled()}>
                SEND
                </button>
            </div>
        </form>
    );
}

export default ChatInput;