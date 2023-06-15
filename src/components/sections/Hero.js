/* eslint-disable react/style-prop-object */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import { Link } from 'react-router-dom';
import Video from '../../assets/backgrounds/drone-view.mp4';
import './css/bgVideo.css';
import drone from '../../assets/generic/drones.svg';

const Hero = () => (
  <div className="hero video--container d-flex column relative">
    <video autoPlay muted loop className="media none--mobile">
      <source src={Video} type="video/mp4" />
    </video>
    <div className="video--overlay d-flex column a-i-c j-c-c">
      <h1 className="hero--title text--left temp--font">
        Revolutionizing
        <span className="hero--bold"> food production </span>
        with technology
      </h1>
      <img src={drone} alt="Flying Drone" className="droner" />
      <p className="hero--text text--left white">
        El-kanis and Partners is a leading food production company that is changing the game in
        the agriculture sector in Nigeria by leveraging cutting-edge technology to produce
        high-quality rice and livestock supplements
      </p>
      <Link
        to="/about-us"
        className="learn--more"
      >
        Learn more

      </Link>
    </div>

  </div>
);

export default Hero;
