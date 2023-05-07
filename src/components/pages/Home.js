import React from 'react';
import Nav from '../Nav/Nav';
import Button from '../sub/button';
import Video from '../../assets/backgrounds/drone-view.mp4';
import Smart from '../sub/smart';

const Home = () => (
  <div className="home--container">
    <video autoPlay muted loop className="media">
      <source src={Video} type="video/mp4" />
    </video>
    <Nav />
    <section className="hero--page">
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
    <section className="motivation">
      <div className="sub--hero--div">
        <h2 className="green-title-text">What Motivates Us</h2>
        <p className="hero--text w-6 sub-text green">
          With a mission to provide sustainable and nutritious food options to consumers,
          El-kanis and Partners has established itself as a pioneer in the agricultural
          sector by utilizing
          <span className="dark-text"> armers information and Enterprise Management System (FIEMS) </span>
          to optimize food production while minimizing environmental impact.
        </p>
      </div>
      <Smart />
      <article className="climate-art">
        <h2 className="green-title-text">Climate Smart Technology</h2>
        <p className="hero--text w-6 sub-text green">
          Through the use of remote sensing, satellite imagery and improved seeds, the company
          is able to monitorand manage 64,000 hectares of rice fields in real-time, optimizing
          resource utilization and minimizing environmental impact.
        </p>
        <p className="hero--text w-6 sub-text green">
          This approach not only ensures the production of healthy and safe rice, but also helps
          to conserve precious natural resources, making it a win-win for both consumers and
          the environment.
        </p>
      </article>
    </section>
  </div>
);

export default Home;
