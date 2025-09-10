import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => (
    <footer className="bg-dark text-white text-center py-3">
        <Container>
            <p>© 2025 Deepak T N. All rights reserved.</p>
            <p>
                <a href="https://github.com/DeepakDeeputn" target="_blank" rel="noopener noreferrer" className="text-white mx-2">GitHub</a>
                <a href="https://www.linkedin.com/in/deepak-tn-3a729925a/" target="_blank" rel="noopener noreferrer" className="text-white mx-2">LinkedIn</a>
            </p>
        </Container>
    </footer>
);
export default Footer;