import React from 'react';
import Smart from '../sub/smart';
import './css/sections.css';

const Motivation = () => (
  <section className="motivation div w--100 flex column">
    <div className="sub--hero--div ml--120">
      <h2 className="green-title-text main--title max--text-1 border-image temp--font">What Motivates Us</h2>
      <p className="hero--text w-6 sub-text one green">
        With a mission to provide sustainable and nutritious food options to consumers,
        El-kanis and Partners has established itself as a pioneer in the agricultural
        sector by utilizing
        <span className="dark-text"> Farmers&#39; information and Enterprise Management System (FIEMS) </span>
        to optimize food production while minimizing environmental impact.
      </p>
    </div>
    <div className="backgd" />
    <Smart />
    <article className="climate-art flex column ml--120">
      <h2 className="climate--title green-title-text temp--font">Climate Smart Technology</h2>
      <p className="sub-text green" style={{ width: '85%' }}>
        Through the use of remote sensing, satellite imagery and improved seeds, the company
        is able to monitor and manage 64,000 hectares of rice fields in real-time, optimizing
        resource utilization and minimizing environmental impact.
      </p>
      <p className="sub-text deep--green" style={{ width: '85%', marginTop: '1rem' }}>
        This approach not only ensures the production of healthy and safe rice, but also helps
        to conserve precious natural resources, making it a win-win for both consumers and
        the environment.
      </p>
    </article>
  </section>
);

export default Motivation;
