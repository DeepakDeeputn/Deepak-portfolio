import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import linkedinIcon from '../assets/linkedin.svg';
import githubIcon from '../assets/github.svg';
import gmailIcon from '../assets/gmail.svg';
import developerIllustration from '/assets/developer-illustration.svg';

const Home = () => (
    <>
        <div className="hero-background" />
        <Container className="position-relative z-1 d-flex justify-content-center align-items-center text-center" style={{ minHeight: '100vh' }}>
            <Row className="w-100 align-items-center">
                {/* Text Column */}
                <Col lg={6} md={12} className="mb-4 mb-lg-0">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="display-5 fw-bold mb-3 text-secondary chewy-regular"
                    >
                        Hi, I'm
                    </motion.h1>

                    <div style={{ position: 'relative', display: 'inline-block' }}>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="display-3 fw-bold mb-3"
                        >
                            Deepak T N
                        </motion.h1>

                        {/* Updated SVG container for the zig-zag underline */}

                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="lead mb-3"
                    >
                        Full-Stack Developer | Software Developer | Data Analyst
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="text-muted mb-4"
                    >
                        I specialize in developing scalable web applications using modern technologies and creating data-driven analytical solutions to support informed decision-making.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.0 }}
                        className="d-flex justify-content-center mt-4"
                    >
                        <a href="https://www.linkedin.com/in/deepak-tn-3a729925a/" target="_blank" rel="noopener noreferrer" className="mx-3 text-dark icon-trans">
                            <img src={linkedinIcon} alt="LinkedIn" height="50px" />
                        </a>
                        <a href="https://github.com/DeepakDeeputn" target="_blank" rel="noopener noreferrer" className="mx-3 text-dark icon-trans">
                            <img src={githubIcon} alt="GitHub" width="40" height="50" />
                        </a>
                        <a href="mailto:deepaktn2003@gmail.com" className="mx-3 text-dark icon-trans">
                            <img src={gmailIcon} alt="Gmail" height="50" />
                        </a>
                    </motion.div>
                </Col>

                {/* Illustration Column */}
                <Col lg={6} md={12}>
                    <motion.img
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 1.2 }}
                        src={developerIllustration}
                        alt="Developer Illustration"
                        className="img-fluid mx-auto"
                        style={{ maxWidth: '75%', height: 'auto' }}
                    />
                </Col>
            </Row>
        </Container>
    </>
);

export default Home;