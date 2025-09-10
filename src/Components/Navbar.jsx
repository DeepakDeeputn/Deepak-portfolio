import React, { useState } from 'react';
import { Navbar, Nav, Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
    const [showContact, setShowContact] = useState(false);

    const handleShowContact = () => setShowContact(true);
    const handleCloseContact = () => setShowContact(false);

    return (
        <>
            {/* Navbar */}
            <Navbar expand="lg" className="custom-navbar">
                <Navbar.Brand as="a" href="#home" className="logo ms-3">
                    <FontAwesomeIcon icon={faCircle} className="logo-icon" style={{ marginRight: '8px' }} />
                    Deepak T N
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="me-3" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <div className="menu-container mx-auto">
                        <Nav>
                            <Nav.Link as="a" href="#home" className="nav-link">Home</Nav.Link>
                            <Nav.Link as="a" href="#about" className="nav-link">About</Nav.Link>
                            <Nav.Link as="a" href="#skills" className="nav-link">Skills</Nav.Link>
                            <Nav.Link as="a" href="#projects" className="nav-link">Projects</Nav.Link>

                            {/* Contact opens modal */}
                            <Nav.Link onClick={handleShowContact} className="nav-link" style={{ cursor: 'pointer' }}>
                                Contact
                            </Nav.Link>
                        </Nav>
                    </div>
                    <Nav className="ms-auto me-3">
                        <Nav.Link as="a" href="Deepak T N Resume.pdf" download="" className="premium-link">
                            <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '8px', color: '#343a40' }} />
                            Resume
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            {/* Contact Modal */}
            <Modal show={showContact} onHide={handleCloseContact} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Contact Information</Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center">
                    <p><strong>Email:</strong> <a href="mailto:deepaktn2003@gmail.com">deepaktn2003@gmail.com</a></p>
                    <p><strong>Phone:</strong> <a href="tel:+917795750506">+91 7795750506</a></p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseContact}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Navigation;
