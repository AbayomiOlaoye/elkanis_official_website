/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PROJECTS from '../../storage/projects';
import Top from '../sections/jumbotron/top';
import Footer from '../Nav/Footer';
import '../sections/css/sections.css';
import '../sections/css/about.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  useEffect(() => {
    const selectedProject = PROJECTS.find((project) => project.id === id);
    setProject(selectedProject);
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return <div>Loading...</div>;
  }

  const renderHyperlinks = (description) => {
    const parser = new DOMParser();
    const descriptionNodes = parser.parseFromString(description, 'text/html').body.childNodes;

    const paragraphs = [[]];

    Array.from(descriptionNodes).forEach((node) => {
      if (node.nodeName === 'A') {
        const link = <a key={node} href={node.href}>{node.textContent}</a>;
        paragraphs[paragraphs.length - 1].push(link);
      } else if (node.nodeName === '#text' && node.textContent.trim() !== '') {
        const words = node.textContent.trim().split(' ');
        paragraphs[paragraphs.length - 1] = paragraphs[paragraphs.length - 1].concat(words);
      } else if (node.nodeName === 'BR') {
        paragraphs.push([]);
      }
    });

    return paragraphs.map((paragraph, index) => (
      <p key={index}>
        {paragraph.map((element, elementIndex) => (
          <React.Fragment key={`${index}-${elementIndex}`}>
            {elementIndex > 0 && ' '}
            {element}
          </React.Fragment>
        ))}
      </p>
    ));
  };

  return (
    <div className="sub--container flex column j-c-c a-i-c" style={{ backgroundColor: '#f9faf7', overflow: 'hidden', lineHeight: '30px' }}>
      <Top
        title="Project Summary"
        img={project.img}
      />
      <div
        className="pro--summary about--content about--product page--content j-c-c a-i-c grid w--100 g--32"
      >
        <div className="project--details w--80 d-flex column gap-one">
          <h3 className="project--title" data-aos="fade-up" style={{ color: '#fff' }}>{project.theme}</h3>
          <img src={project.img} data-aos="fade-right" alt={project.title} className="project--img" />
          <div className="project--text" data-aos="fade-up">
            <h2 className="project--headline" style={{ margin: '2rem 0 1rem', textAlign: 'center', color: '#2a310c' }}>Project Overview</h2>
            <p key={project.id} className="project--description text--just">{renderHyperlinks(project.overview)}</p>
            {project.action && (
              <ul className="project--action disc">
                {project.action.map((item) => <li key={item}>{item}</li>)}
              </ul>
            )}
            <h2 className="project--headline" style={{ margin: '2rem 0 1rem', textAlign: 'center', color: '#2a310c' }}>Expected Impact</h2>
            <ul className="project--action disc">
              {project.result.map((para, index) => <li key={index} className="project--description">{para}</li>)}
            </ul>
            { project.subtitle && (
              <div className="project--subtitle">
                <h4 className="project--headline text--just" style={{ margin: '1rem 0 0.5rem 0' }}>{project.subtitle}</h4>
                <ul className="project--action disc">
                  {project.areas.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            )}
            {project.duration && (
            <h4 className="project--description" style={{ margin: '0.5rem 0', color: '#2a310c' }}>
              Project&#39;s Duration:
              {' '}
              {project.duration}
            </h4>
            )}
            {project.more && (
            <p className="project--description" style={{ marginTop: '1rem' }}>
              Learn more:
              {' '}
              {renderHyperlinks(project.more)}
            </p>
            )}
          </div>
          <Link to="/projects" className="project--link" data-aos="zoom-in" data-aos-easing="ease">See all Projects</Link>
        </div>

        <div className="project--links" style={{ alignSelf: 'start', backgroundColor: '#bfca90', padding: '10% 5%' }}>
          <h3 className="project--headline" style={{ margin: '2rem 0 1rem', textAlign: 'center' }}>Other Recent Projects</h3>
          <ul className="project--action">
            {PROJECTS.map((item) => (
              <li key={item.id} data-aos="fade-up" data-aos-duration="500" style={{ padding: '1rem', borderBottom: '1px solid #3c4044' }}>
                <Link
                  to={`/projects/${item.id}`}
                  style={
                    {
                      marginTop: '1rem', fontSize: '0.9rem',
                    }
                  }
                >
                  {item.theme}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
