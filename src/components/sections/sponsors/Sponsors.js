/* eslint-disable import/no-extraneous-dependencies */
import React, { memo } from 'react';
import styled from 'styled-components';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SPONSORS from '../../../storage/sponsors';
import configure from '../configure';
import styles from './sponsors.module.scss';

const CustomCarousel = styled(Carousel)`
  .react-multi-carousel-item {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 70%;
      height: 50%;
      object-fit: contain;
    }
  }
 `;

const Sponsors = () => {
  const sponsors = SPONSORS.map((sponsor) => (
    <img src={sponsor} alt="sponsor logo" key={sponsor} className="sponsor--logo d-flex" />
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
      <CustomCarousel
        style={{ alignSelf: 'center', gap: '2rem' }}
        className={`${styles.logoX} d-flex a-i-c`}
        autoPlay
        autoPlaySpeed={3000}
        infinite
        keyBoardControl
        responsive={configure()}
      >
        { sponsors }
      </CustomCarousel>
    </section>
  );
};

export default memo(Sponsors);
