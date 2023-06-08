/* eslint-disable react/style-prop-object */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import { Link } from 'react-router-dom';
import Video from '../../assets/backgrounds/drone-view.mp4';
import './css/bgVideo.css';

const Hero = () => (
  <div className="video--container">
    <video autoPlay muted loop className="media">
      <source src={Video} type="video/mp4" />
    </video>
    <div className="video--overlay ml--120">
      <h1 className="hero--title temp--font">
        Revolutionizing
        <span className="hero--bold"> food production </span>
        with technology
      </h1>
      <p className="hero--text white">
        El-kanis and Partners is a leading food production company that is changing the game in
        the agriculture sector in Nigeria by leveraging cutting-edge technology to produce
        high-quality rice and livestock supplements
      </p>
      <Link
        to="/about-us"
        className="button"
        style={{
          cursor: 'pointer',
          padding: '18px 24px',
          color: 'var(--alt-white',
        }}
      >
        Learn more

      </Link>
    </div>

  </div>
);

export default Hero;
