import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import FeaturedProduct from '../../sub/feature';
import ARTICLES from '../../../storage/articles';
import styles from './features.module.scss';

const Product = () => {
  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const product = ARTICLES.map((product) => (
    <FeaturedProduct
      key={product.id}
      id={product.id}
      featureImg={product.featureImg}
      headline={product.featureHeadline}
    />
  ));
  return (
    <>
      <section className={styles.featureContainer} data-aos="fade-up" style={{ overflow: 'hidden' }}>
        <div className={styles.featureHeader}>
          <h3 className={styles.aboutTitle}>Featured Products</h3>
          <hr className={styles.aboutBorderBig} />
        </div>
        <div className={styles.container}>{product}</div>
      </section>
    </>
  );
};

export default Product;
