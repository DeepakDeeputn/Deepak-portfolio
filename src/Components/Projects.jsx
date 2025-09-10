import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

// Adjust these paths to where your images are stored.
import shiftlyImg from '../assets/image.png';
import project2Img from '../assets/image.png';
import project3Img from '../assets/image.png';

// --- UPDATED projects data structure ---
const projects = [
    {
        title: 'EasyBill',
        description: 'A modern application designed to enable online bill generation for a network company(u-admin, p-admin123).',
        //imgSrc: shiftlyImg, // Use the imported image variable
        liveLink: 'https://bill-generations.netlify.app/', // Replace with your live preview link
        githubLink: '#', // Replace with your GitHub link
    },
    {
        title: 'Hospital-Administration',
        description: 'A full-stack project designed to offer online hospital consultation services',
        //imgSrc: project2Img, // Use the imported image variable
        //liveLink: 'https://example.com/ecommerce-live',
        githubLink: 'https://github.com/DeepakDeeputn/Hospital-Administration/tree/main/htdocs',
    },
    {
        title: 'Data_analysis',
        description: 'An in-depth analysis of insurance claim data to extract meaningful insights.',
        //imgSrc: project3Img, // Use the imported image variable
        liveLink: '#', // Use '#' if no live link is available
        githubLink: 'https://github.com/DeepakDeeputn/Data_analysis',
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: 'easeOut',
        },
    },
};

const Projects = () => (
    <Container className="my-5" id="projects">
        <h2 className="text-center mb-5 projects-heading">Projects</h2>
        <Row>
            {projects.map((project, index) => (
                // Use md={6} and lg={4} for a responsive 2 or 3 column layout
                // --- 2. USE INDEX FOR A STABLE, UNIQUE KEY ---
                <Col md={6} lg={4} className="mb-4" key={index}>
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delay: index * 0.1 }}
                        className="h-100"
                    >
                        <Card className="project-card h-100 ">
                            
                            <Card.Body className="d-flex flex-column">
                                <Card.Title className="project-title">{project.title}</Card.Title>
                                <Card.Text className="project-description">{project.description}</Card.Text>
                                <div className="mt-auto pt-3">
                                    <Button href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn-live-preview me-2">
                                        Live Preview
                                    </Button>
                                    <Button href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn-github">
                                        View Code
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </motion.div>
                </Col>
            ))}
        </Row>
    </Container>
);

export default Projects;