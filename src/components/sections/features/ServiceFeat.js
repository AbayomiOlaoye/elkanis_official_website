import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useParams } from 'react-router-dom';
import FeaturedService from '../../../storage/service';
import FeatService from '../../sub/featService';
import styles from './features.module.scss';

const Service = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const { serviceId } = useParams();
  const services = FeaturedService.map((service) => (
    <FeatService
      key={service.id}
      id={service.id}
      featureImg={service.featureImg}
      headline={service.featureHeadline}
      selected={service.id === serviceId}
    />
  ));
  return (
    <>
      <section className={styles.serviceContainer} data-aos="fade-up" style={{ overflow: 'hidden' }}>
        <div className={styles.featureHeader}>
          <h3 className={styles.aboutTitle}>Featured Services</h3>
          <hr className={styles.aboutBorderBig} />
        </div>
        <div className={styles.container}>{services}</div>
      </section>
    </>
  );
};

export default Service;
