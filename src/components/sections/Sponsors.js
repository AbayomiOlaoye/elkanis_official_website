/* eslint-disable import/no-extraneous-dependencies */
import React, { memo } from 'react';
import Carousel from 'react-multi-carousel';
import SPONSORS from '../../storage/sponsors';
import configure from './configure';

const Sponsors = () => {
  const sponsors = SPONSORS.map((sponsor) => (
    <img src={sponsor} alt="sponsor logo" key={sponsor} className="sponsor--logo d-block" />
  ));
  return (
    <section
      className="sponsors--page flex column"
      style={{ position: 'relative', top: '350px' }}
    >
      <div className="feature--header flex w--100">
        <h3 className="sub--theme temp--font light--green">Our Clients & Partners</h3>
        <hr className="hr--theme w--100" />
      </div>
      <Carousel
        style={{ justifyContent: 'center', height: 'max-content' }}
        className="d-flex align-items-center"
        autoPlay
        autoPlaySpeed={2000}
        infinite
        showArrows
        keyBoardControl
        responsive={configure([6, 6, 2])}
      >
        { sponsors }
      </Carousel>
    </section>
  );
};

export default memo(Sponsors);
