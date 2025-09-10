import React from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion'; // 1. Import motion

const About = () => (
    <section id="about" className="section dotted-background">
        <Container className="text-center">
            {/* 2. Wrap elements with motion and add animation props */}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="display-5 fw-bold"
            >
                About Me
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="lead mb-4"
            >
                Passionate Full-Stack Developer with hands-on experience designing and delivering a wide range of dynamic, user-focused web applications using JavaScript, React, Node.js, MongoDB, and PHP, creating scalable and maintainable software across diverse domains. Additionally, an experienced Data Analyst proficient in Python, SQL, Excel, Power BI, and Tableau, skilled at transforming complex datasets into clear, actionable insights through analysis, visualization, and reporting. Combines strong technical expertise in both development and analytics with problem-solving abilities to deliver impactful solutions in collaborative, fast-paced environments.
            </motion.p>

            <motion.a
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                href="/Portfolio/Deepak T N Resume.pdf"
                download="Deepak T N Resume.pdf"
                className="pill-button"
            >
                Download Resume
            </motion.a>
        </Container>
    </section>
);

export default About;