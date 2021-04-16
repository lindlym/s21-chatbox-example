import { useState } from 'react';
import { Alert, Button, ListGroup, Modal, FormControl, InputGroup } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { changeCurrentChannelId, addChannel } from '../../state/channelList/channelListSlice';

const ChannelList = (props) => {
    const [show, setShow] = useState(false);
    const [newChannelName, setNewChannelName] = useState('');
    const channels = props.channels;
    const dispatch = useDispatch();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChannelChange = (e, channelObj) => {
        dispatch(changeCurrentChannelId(channelObj.id));
    }

    const createNewChannel = (e) => {
        handleClose();
        let objectId = ObjectId();
        dispatch(addChannel({ channelId: objectId, channelName: newChannelName }));
    }

    return (
        <>
            <Alert variant='secondary'>
                Channel List
                <Button variant="primary" onClick={handleShow}>
                    Create Channel
                </Button>
            </Alert>
            <ListGroup>
                {channels.map((channelObj, index) => {
                    return (
                        <Button
                            key={index}
                            onClick={(e) => handleChannelChange(e, channelObj)}>
                            {channelObj.name}
                        </Button>
                    );
                })}
            </ListGroup>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Channel</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <InputGroup className="mb-3">
                        <FormControl
                            onChange={(e) => setNewChannelName(e.target.value)}
                            placeholder="Type in new channel name..."
                            aria-label="Channel Name"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={createNewChannel}>
                        Create Channel
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

const ObjectId = (rnd = r16 => Math.floor(r16).toString(16)) =>
    rnd(Date.now()/1000) + ' '.repeat(16).replace(/./g, () => rnd(Math.random()*16));

export default ChannelList;