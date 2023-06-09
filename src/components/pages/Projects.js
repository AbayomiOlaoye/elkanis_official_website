/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable import/extensions */
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Top from '../sections/jumbotron/top';
import PROJECTS from '../../storage/projects';

const Projects = () => {
  const containerRef = useRef(null);
  const [activeProject, setActiveProject] = useState(null);
  const navigate = useNavigate();

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

  const handleProjectClick = (id) => {
    setActiveProject(id === activeProject ? null : id);
    navigate(`/projects/${id}`);
  };

  return (
    <div className="sub--container flex column j-c-c a-i-c" style={{ backgroundColor: '#f9faf7' }}>
      <Top
        title="Projects"
      />
      <div className="project--container w--80 grid" ref={containerRef}>
        {PROJECTS.map((project) => (
          <div
            className="project--card relative"
            title="Click to check the Project!"
            key={project.id}
            id={project.id}
            onClick={() => handleProjectClick(project.id)}
          >
            <img src={project.img} alt={project.title} className="project--img" />
            <div className="project--head hover absolute d-flex column a-i-c j-c-c">
              <h3 className="project--title" style={{ lineHeight: '20px' }}>{project.theme}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
