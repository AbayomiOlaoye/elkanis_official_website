/* eslint-disable max-len */
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Smart from '../../sub/smart';
import '../css/sections.css';
import talk from '../../../assets/backgrounds/motivate_bg.png';
import talkMb from '../../../assets/services/workers-b.png';
import climate from '../../../assets/generic/climate.png';
import styles from './motivation.module.scss';

const Motivation = () => {
  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: 'ease-in-out',
      once: true,

    });
  }, []);

  const handleContextMenu = (event) => {
    event.preventDefault();
  };

  return (
    <section className={styles.section}>
      <div className={styles.subSection}>
        <div className={styles.sectionSub}>
          <h2 className={styles.aboutTitle} data-aos="fade-up">What Motivates Us</h2>
          <hr className={styles.aboutBorder} data-aos="fade-up" />
          <img
            src={talkMb}
            data-aos="fade-in"
            alt="Farmers discussing farming operations"
            className={styles.aboutImg}
            onContextMenu={handleContextMenu}
          />
          <p className={styles.paraText} data-aos="fade-up">
            With a mission to provide sustainable and nutritious food options to consumers,
            El-kanis and Partners has established itself as a pioneer in the agricultural
            sector by utilizing
            <span className="dark-text"> Farmers&#39; information and Enterprise Management System (FIEMS) </span>
            to optimize food production while minimizing environmental impact.
          </p>
        </div>
        <img src={talk} alt="Farmers discussing farming operations" className={styles.mobAboutImg} />
      </div>

      <div className={styles.smartDiv}>
        <Smart />
      </div>

      <article className={styles.climateArt} data-aos="zoom-out">
        <h2 className={styles.climateTitle}>Climate Smart Technology</h2>
        <hr className={styles.aboutBorder} data-aos="fade-up" />
        <img src={climate} alt="Climate smart technology" className={styles.climateImg} />
        <p className="about--text green">
          Through the use of remote sensing, satellite imagery and improved seeds, the company
          is able to monitor and manage 64,000 hectares of rice fields in real-time, optimizing
          resource utilization and minimizing environmental impact.
        </p>
        <p className="about--text deep--green" style={{ marginTop: '1rem' }}>
          This approach not only ensures the production of healthy and safe rice, but also helps
          to conserve precious natural resources, making it a win-win for both consumers and
          the environment.
        </p>
      </article>
    </section>
  );
};

export default Motivation;
