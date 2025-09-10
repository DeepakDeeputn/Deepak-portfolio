import React from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { motion } from 'framer-motion';

// NOTE: some react-icons exports vary by react-icons version and CDN builds.
// To avoid "No matching export" build errors, this file uses commonly available
// FontAwesome icons (react-icons/fa) as safe fallbacks for Excel, Power BI and VS Code.
// If you want the official brand icons (e.g., SiPowerbi or TbBrandExcel),
// please ensure your react-icons package is up-to-date and supports those icons.

// Icon imports (safe, commonly available icons)
import {
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaTable,
  FaFileExcel,
  FaChartBar,
  FaCode
} from 'react-icons/fa';

import { SiJavascript, SiExpress, SiMongodb } from 'react-icons/si';
import { TbSql } from 'react-icons/tb';

const skills = [
  // Full-stack development
  'Core Java', 'Python', 'JavaScript', 'HTML', 'CSS',
  'Bootstrap', 'React', 'Node.js', 'Express.js',
  'Git', 'SQL', 'MongoDB', 'VS Code',
  // Data analysis
  'Excel', 'Power BI', 'Tableau'
];

const skillIcons = {
  'corejava': FaJava,
  'python': FaPython,
  'javascript': SiJavascript,
  'html': FaHtml5,
  'css': FaCss3Alt,
  'bootstrap': FaBootstrap,
  'react': FaReact,
  'node.js': FaNodeJs,
  'express.js': SiExpress,
  'git': FaGitAlt,
  'sql': TbSql,
  'mongodb': SiMongodb,
  'vscode': FaCode,        // safe fallback for VS Code icon
  'excel': FaFileExcel,    // safe File Excel icon
  'powerbi': FaChartBar,   // generic analytics icon as Power BI fallback
  'tableau': FaTable
};

const skillColors = {
  'corejava': '#f89820',
  'python': '#3776ab',
  'javascript': '#f7df1e',
  'html': '#e34f26',
  'css': '#1572b6',
  'bootstrap': '#7952b3',
  'react': '#61dafb',
  'node.js': '#339933',
  'express.js': '#000000',
  'git': '#f05032',
  'sql': '#00758f',
  'mongodb': '#47a248',
  'vscode': '#007acc',
  'excel': '#217346',
  'powerbi': '#f2c811',
  'tableau': '#e97627'
};

const pillVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
};

const Skills = () => (
  <Container className="my-5">
    <h2 className="display-3 fw-bold mb-4 text-center text-black">Skills</h2>
    <Row className="justify-content-center">
      {skills.map((skill, skillIndex) => {
        const formattedSkill = skill.toLowerCase().replace(/\s+/g, '');
        const IconComponent = skillIcons[formattedSkill];
        const iconColor = skillColors[formattedSkill];

        return (
          <Col xs="auto" key={skillIndex} className="mb-2">
            <motion.div
              variants={pillVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: skillIndex * 0.1 }}
            >
              <Badge pill className="p-2 d-flex align-items-center skill-badge text-black bg-light border">
                {IconComponent && (
                  <IconComponent style={{ marginRight: '8px', color: iconColor }} />
                )}
                {skill}
              </Badge>
            </motion.div>
          </Col>
        );
      })}
    </Row>
  </Container>
);

export default Skills;
