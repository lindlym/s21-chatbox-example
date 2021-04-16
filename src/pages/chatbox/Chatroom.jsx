import { useState } from 'react';
import ChatMessage from './ChatMessage';
import { Container, InputGroup, FormControl, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addMessageToChannel } from '../../state/channelList/channelListSlice';

const Chatroom = (props) => {
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();

    const channel = props.channel;

    const handleSendMessage = () => {
        let user = localStorage.getItem('user');
        if (!user) return alert('You are not logged in!');
        dispatch(addMessageToChannel({ message, user, channelId: channel.id }));
    }

    return (
        <>
            <Container className="chatbox-container">
                {
                    channel.messageList.map((messageObj, index) => {
                        return <ChatMessage key={index} messageData={messageObj} />
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
        </>
    )
};

export default Chatroom;