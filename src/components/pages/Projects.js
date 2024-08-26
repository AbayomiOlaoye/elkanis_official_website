/* eslint-disable jsx-quotes */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable import/extensions */
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import Top from '../sections/jumbotron/top';
import PROJECTS from '../../storage/projects';
import Footer from '../Nav/Footer';
import project from '../../assets/projects/project.webp';

const Projects = () => {
  const containerRef = useRef(null);
  const [activeProject, setActiveProject] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: 'ease',
      once: false,
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleScroll = () => {
    const container = containerRef.current;
    const containerTop = container.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (containerTop < windowHeight) {
      container.classList.add('show');
      window.removeEventListener('scroll', handleScroll);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const handleProjectClick = (theme) => {
    setActiveProject(theme === activeProject ? null : theme);
    navigate(`/projects/${theme}`);
  };

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
      id="project-section"
      className="pro sub--container flex column j-c-c a-i-c"
      style={{ backgroundColor: '#f9faf7' }}
    >
      <Top
        title="Projects"
        img={project}
      />
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
        className="project--container w--80 grid"
        style={{ overflow: 'hidden' }}
        ref={containerRef}
      >
        {PROJECTS.map((project) => (
          <div
            className="project--card relative"
            title="Click to check the Project!"
            data-aos="fade-left"
            data-aos-duration="800"
            key={project.id}
            id={project.id}
            onClick={() => handleProjectClick(project.theme)}
          >
            <img data-aos="fade-in" src={project.img} alt={project.title} className="project--img trans" />
            <div className="project--head hover absolute d-flex column a-i-c j-c-c">
              <h3 data-aos="zoom-in" className="project--title" style={{ lineHeight: '18px', fontSize: '0.8rem' }}>{project.theme}</h3>
            </div>
          </div>
        ))}
      </motion.div>
      <Footer />
    </motion.div>
  );
};

export default Projects;
