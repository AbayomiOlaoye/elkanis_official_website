/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/order */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Top from '../sections/jumbotron/top';
import '../sections/css/sections.css';
import '../sections/css/about.css';
import blogData from '../../storage/blog';

const Blog = () => {
  const navigate = useNavigate();
  const [selectedPost, setSelectedPost] = useState(0);
  const blog = blogData[selectedPost];

  const handleTitleClick = (index) => {
    setSelectedPost(index);
    navigate(`/blogs/${blog.id}`);
  };

  return (
    <div className="sub--container flex column j-c-c a-i-c" style={{ backgroundColor: '#f9faf7', lineHeight: '30px' }}>
      <Top
        title="Blogs"
      />
      <div
        className="about--content about--product page--content j-c-c a-i-c grid w--100 g--32"
        style={{ padding: '20% 5%', gridTemplateColumns: '2fr 1fr' }}
      >
        <div className="project--details d-flex column gap-one">
          <div className="project--title--container d-flex gap-one a-i-c">
            <div className="blog--date d-flex column a-i-c">
              <h4 style={{ fontSize: '3vw' }}>{blog.day}</h4>
              <h4 style={{ fontSize: '2vw' }}>{blog.month}</h4>
            </div>
            <h3
              className="project--title"
              style={{
                fontSize: '2.5vw', padding: '3% 0', color: '#fff', height: 'max-content',
              }}
            >
              {blog.title}
            </h3>
          </div>

          <img src={blog.img} alt={blog.img} className="project--img" />

          <div className="project--text">
            {blog.content.map((paragraph, index) => (
              <p key={index} className="project--description text--just" style={{ margin: '2vw' }}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="project--links" style={{ alignSelf: 'start', backgroundColor: '#bfca90', padding: '10% 5%' }}>
          <h3 className="project--headline">Recent Blogs</h3>
          <ul className="project--action">
            {blogData.map((item, index) => (
              <li key={item.id} style={{ display: index === selectedPost ? 'none' : 'block', padding: '1rem', borderBottom: '1px solid #3c4044' }}>
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
    </div>
  );
};

export default Blog;
