import React from 'react';
import Smart from '../sub/smart';
import './css/sections.css';

const Motivation = () => (
  <section className="motivation div w--100">
    <div className="sub--hero--div ml--120">
      <h2 className="green-title-text max--text-1 border-image temp--font">What Motivates Us</h2>
      <p className="hero--text w-6 sub-text green">
        With a mission to provide sustainable and nutritious food options to consumers,
        El-kanis and Partners has established itself as a pioneer in the agricultural
        sector by utilizing
        <span className="dark-text"> Farmers&#39; information and Enterprise Management System (FIEMS) </span>
        to optimize food production while minimizing environmental impact.
      </p>
    </div>
    <div className="backgd" />
    <Smart />
    <article className="climate-art ml--120">
      <h2 className="green-title-text temp--font">Climate Smart Technology</h2>
      <p className="hero--text w-6 sub-text deep--green">
        Through the use of remote sensing, satellite imagery and improved seeds, the company
        is able to monitorand manage 64,000 hectares of rice fields in real-time, optimizing
        resource utilization and minimizing environmental impact.
      </p>
      <p className="hero--text w-6 sub-text deep--green">
        This approach not only ensures the production of healthy and safe rice, but also helps
        to conserve precious natural resources, making it a win-win for both consumers and
        the environment.
      </p>
    </article>
  </section>
);

export default Motivation;
