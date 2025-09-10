import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';
import Home from './Components/Home.jsx';
import About from './Components/About.jsx';
import Skills from './Components/Skills.jsx';
import Projects from './Components/Projects.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
    viewport: { once: true }
  };

  return (
    <>
      <Navbar />

      <motion.section id="home" className="section" {...fadeInUp}>
        <Home />
      </motion.section>

      <motion.section id="about" className="section" {...fadeInUp}>
        <About />
      </motion.section>

      <motion.section id="skills" className="section" {...fadeInUp}>
        <Skills />
      </motion.section>

      <motion.section id="projects" className="section" {...fadeInUp}>
        <Projects />
      </motion.section>

      <Footer />
    </>
  );
}

export default App;
