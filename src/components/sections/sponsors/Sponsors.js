/* eslint-disable import/no-extraneous-dependencies */
import React, { memo } from 'react';
import Carousel from 'react-multi-carousel';
import SPONSORS from '../../../storage/sponsors';
import configure from '../configure';
import styles from './sponsors.module.scss';

const Sponsors = () => {
  const sponsors = SPONSORS.map((sponsor) => (
    <img src={sponsor} alt="sponsor logo" key={sponsor} className="sponsor--logo d-block" />
  ));
  return (
    <section
      className={styles.sponsorsSection}
      style={{ position: 'relative' }}
    >
      <div className={styles.sponsorsDiv}>
        <h3 className={styles.title}>Clients & Partners</h3>
        <hr className={styles.hrLine} />
      </div>
      <Carousel
        style={{ justifyContent: 'center', height: 'max-content' }}
        className="sponsor--logo d-flex align-items-center"
        autoPlay
        autoPlaySpeed={3000}
        infinite
        keyBoardControl
        responsive={configure([4, 3, 2])}
      >
        { sponsors }
      </Carousel>
    </section>
  );
};

export default memo(Sponsors);
