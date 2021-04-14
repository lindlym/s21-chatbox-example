import React from 'react';
import { Media } from 'react-bootstrap';

const ChatMessage = (props) => {
    let { message, timestamp, user } = props.messageData;
    user = JSON.parse(user);

    return (
        <Media style={ { backgroundColor: user.backgroundColor } } className="chat-message">
            <img
                width={64}
                height={64}
                className="chat-message-user-avatar"
                src={user.avatarUrl}
                alt="user avatar"
            />
            <Media.Body>
                <h5 className="chat-message-user-name">{user.username}</h5>
                <p className="chat-message-user-message">{message}</p>
                {/* <tiny>{timestamp.toLocaleString(2)}</tiny> */}
            </Media.Body>
        </Media>
    );
};

export default ChatMessage;