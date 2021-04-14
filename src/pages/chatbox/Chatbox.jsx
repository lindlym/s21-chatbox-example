import { useState } from 'react';
import './Chatbox.css';
import UserPreferencesModal from './UserPreferencesModal';
import ChatMessage from './ChatMessage';
import { Container, InputGroup, FormControl, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { addMessage, selectMessages } from '../../state/messageList/messageListSlice';

const Chatbox = () => {
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();
    const messageList = useSelector(selectMessages);

    const handleSendMessage = () => {
        let user = localStorage.getItem('user');
        if (!user) return alert('You are not logged in!');
        dispatch(addMessage({ message, user }));
    }

    return (
        <>
            <Container className="chatbox-main-container">
                <Container className="chatbox-container">
                    {
                        messageList.map((messageObj, index) => {
                            return <ChatMessage messageData={messageObj} />
                        })
                    }
                </Container>
                <InputGroup className="mb-3">
                    <FormControl
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Enter your message..."
                        aria-label="The message to send in the chatbox..."
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                        <Button onClick={handleSendMessage} variant="outline-secondary">Send</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Container>
            <UserPreferencesModal />
        </>
    );
};

export default Chatbox;