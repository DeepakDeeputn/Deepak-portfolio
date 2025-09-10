import React, { useState } from 'react';
import { Container, Form, Button, Modal } from 'react-bootstrap';
import './Contact.css'; // <-- add styles here

const Contact = () => {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <>
            <Container className="text-center my-4">
                <Button variant="primary" onClick={handleShow}>
                    Contact Me
                </Button>
            </Container>

            <Modal
                show={show}
                onHide={handleClose}
                centered
                dialogClassName="contact-modal"
                backdropClassName="blur-backdrop"
            >
                <Modal.Header closeButton className="glass-header">
                    <Modal.Title>Contact Me</Modal.Title>
                </Modal.Header>
                <Modal.Body className="glass-body">
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={4} placeholder="Your message" />
                        </Form.Group>
                        <div className="text-end">
                            <Button variant="secondary" onClick={handleClose} className="me-2">
                                Cancel
                            </Button>
                            <Button variant="primary" type="submit">
                                Send
                            </Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default Contact;
