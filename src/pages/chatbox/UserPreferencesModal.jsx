import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function UserPreferencesModal() {
    const [user, setUser] = useState({});
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSave = () => {
        localStorage.setItem('user', JSON.stringify(user));
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>Set User Preferences</Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Set User Preferences</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="chatboxUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control onChange={(e) => setUser({...user, username: e.target.value})} type="text" placeholder="Enter your username..." />
                        </Form.Group>
                        <Form.Group controlId="chatboxAvatarUrl">
                            <Form.Label>Avatar URL</Form.Label>
                            <Form.Control onChange={(e) => setUser({...user, avatarUrl: e.target.value})} type="text" placeholder="Enter your avatar URL..." />
                        </Form.Group>
                        <Form.Group controlId="chatboxBackgroundColor">
                            <Form.Label>Background Color (in HEX)</Form.Label>
                            <Form.Control onChange={(e) => setUser({...user, backgroundColor: e.target.value})} type="text" placeholder="Enter your background color..." />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close without Saving
                    </Button>
                        <Button onClick={handleSave} ariant="primary">Save</Button>
                    </Modal.Footer>
            </Modal>
        </>
    );
}

export default UserPreferencesModal;