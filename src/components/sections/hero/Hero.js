/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/style-prop-object */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Video from '../../../assets/backgrounds/drone_view.mp4';
import '../css/bgVideo.css';
import drone from '../../../assets/generic/drones.svg';
import styles from './hero.module.scss';

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 400, easing: 'ease-in-out' });
  }, []);

  return (
    <div className={`${styles.section} hero video--container d-flex column relative`} style={{ overflow: 'hidden' }}>
      <video autoPlay muted loop className="media none--mobile">
        <source src={Video} type="video/mp4" />
      </video>
      <div className="video--overlay d-flex column a-i-c j-c-c">
        <h1 className="hero--title text--left temp--font" data-aos="zoom-out">
          Revolutionizing
          <span className="hero--bold"> food production </span>
          with
          <span className="hero--bold"> technology</span>
        </h1>
        <img src={drone} alt="Flying Drone" className="droner" data-aos-delay="3000" data-aos-duration="3000" data-aos="zoom-in" />
        <p data-aos-delay="500" data-aos-duration="1000" data-aos="fade-down" className="hero--text text--left white relative">
          El-kanis and Partners is a leading food production company that is changing the game in
          the agriculture sector in Nigeria by leveraging cutting-edge technology to produce
          high-quality rice and livestock supplements
        </p>
        <Link
          to="/about-us"
          className="learn--more relative d-flex a-i-c j-c-c"
        >
          Learn more

        </Link>
      </div>

    </div>
  );
};

export default Hero;
