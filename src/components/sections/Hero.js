import React from 'react';
import Button from '../sub/button';

const Hero = () => (
  <section className="hero--page div">
    <h1 className="hero--title">
      Revolutionizing food
      <span className="hero--bold"> production </span>
      with technology
    </h1>
    <p className="hero--text">
      El-kanis and Partners is a leading food production company that is changing the game in
      the agriculture sector in Nigeria by leveraging cutting-edge technology to produce
      high-quality rice and livestock supplements
    </p>
    <Button text="Learn more" />
  </section>
);

export default Hero;
