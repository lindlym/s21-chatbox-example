import './Chatbox.css';
import Chatroom from './Chatroom';
import ChannelList from './ChannelList';
import UserPreferencesModal from './UserPreferencesModal';
import { Container, Row, Col } from 'react-bootstrap';

import { useSelector } from 'react-redux';
import { selectChannel, selectCurrentChannelId } from '../../state/channelList/channelListSlice';

const Chatbox = () => {
    const channelList = useSelector(selectChannel);
    let currentChannelId = useSelector(selectCurrentChannelId);
    let currentChannel = channelList.find(channel => channel.id === currentChannelId);

    return (
        <>
            <Container className="chatbox-main-container">
                <Row>
                    <Col>
                        <ChannelList channels={channelList} />
                    </Col>
                    <Col xs={10}>
                        <Chatroom channel={currentChannel} />
                    </Col>
                </Row>
            </Container>
            <UserPreferencesModal />
        </>
    );
};

export default Chatbox;