/* eslint-disable react/style-prop-object */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import Video from '../../assets/backgrounds/drone-view.mp4';
import './css/bgVideo.css';
import Button from '../sub/button';

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
      <p className="hero--text">
        El-kanis and Partners is a leading food production company that is changing the game in
        the agriculture sector in Nigeria by leveraging cutting-edge technology to produce
        high-quality rice and livestock supplements
      </p>
      <Button text="Learn more" />
    </div>

  </div>
);

export default Hero;
