/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/order */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion, useScroll, useSpring } from 'framer-motion';
import Top from '../sections/jumbotron/top';
import '../sections/css/sections.css';
import '../sections/css/about.css';
import blogData from '../../storage/blog';
import Footer from '../Nav/Footer';

const Blog = () => {
  const navigate = useNavigate();
  const [selectedPost, setSelectedPost] = useState(0);
  const blog = blogData[selectedPost];

  const handleTitleClick = (index) => {
    setSelectedPost(index);
    navigate(`/blogs/${blog.id}`);
    window.scrollTo(0, 0);
  };

  const formatText = blog.content.map((paragraph) => {
    if (paragraph.startsWith('<b>') && paragraph.endsWith('</b>')) {
      const bold = paragraph.substring(3, paragraph.length - 4);
      return <b key={bold} style={{ marginTop: '2rem' }}>{bold}</b>;
    } if (paragraph.startsWith('<h3>') && paragraph.endsWith('</h3>')) {
      const heading = paragraph.substring(4, paragraph.length - 5);
      return <h3 key={heading} style={{ margin: '2rem 0' }}>{heading}</h3>;
    }
    return (
      <p key={paragraph.id} className="project--description text--just" style={{ margin: '2vw 0' }}>
        {paragraph}
      </p>
    );
  });

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  AOS.init({
    duration: 400,
    easing: 'ease-in-out',
    once: true,
  });

  return (
    <div id="blog-section" className="sub--container flex column j-c-c a-i-c" style={{ backgroundColor: '#f9faf7', lineHeight: '24px', overflow: 'hidden' }}>
      <Top
        title="Blogs"
        img={blog.img}
      />
      <div
        className="pro--summary about--content about--product page--content j-c-c a-i-c grid w--100 g--32"
      >
        <div className="blog project--details d-flex column gap-one">
          <motion.div className="progress-bar" style={{ scaleX }} />
          <div className="project--title--container d-flex gap-one a-i-c">
            <div className="blog--date d-flex column a-i-c" data-aos="fade-right" style={{ backgroundColor: '#444', color: '#fff', padding: '0.5rem 1rem' }}>
              <h5 style={{ fontSize: '2.5vw' }}>{blog.day}</h5>
              <h5 style={{ fontSize: '2.5vw' }}>{blog.month}</h5>
            </div>
            <h5
              className="project--title"
              data-aos="fade-left"
              style={{
                fontSize: '2.5vw', padding: '3%', lineHeight: '1.9', color: '#fff', height: 'max-content',
              }}
            >
              {blog.title}
            </h5>
          </div>

          <img src={blog.img} alt={blog.img} className="project--img" />

          <div className="project--text" data-aos="fade-up">
            {formatText}
          </div>
        </div>

        <div className="project--links" style={{ alignSelf: 'start', backgroundColor: '#bfca90', padding: '10% 5%' }}>
          <h3 className="project--headline">Recent Blogs</h3>
          <ul className="project--action">
            {blogData.map((item, index) => (
              <li key={item.id} style={{ display: index === selectedPost ? 'none' : 'block', padding: '1rem', borderBottom: '1px solid #3c4044' }} className="blog--link" data-aos="fade-up">
                <Link
                  to={`/blogs/${item.id}`}
                  onClick={() => handleTitleClick(index)}
                  style={
                  {
                    marginTop: '1rem',
                    fontSize: '0.9rem',
                  }
                }
                >
                  {item.title}
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

export default Blog;
