/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import Card from 'react-bootstrap/Card';
import styles from '../sections/features/features.module.scss';

const FeaturedProduct = (
  {
    id, featureImg, headline,
  },
) => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const checkId = (any) => {
    let tag = [];
    if (any === 'fiems') {
      tag = ['Fiems', 'checkFiems'];
    }
    if (any === 'livestock') {
      tag = ['Livestock', 'checkLivestock'];
    } if (any === 'elkanRice') {
      tag = ['Rice', 'checkElkanRice'];
    }
    return tag;
  };

  const handleContextMenu = (event) => {
    event.preventDefault();
  };

  return (
    <Link
      to={{
        pathname: `/products/${checkId(id)[0]}`,
        state: { scrollToSection: id },
      }}
      className={styles.productWrapper}
      data-aos="fade-up"
    >
      <Card className={styles.featuresDiv}>
        <Card.Img
          variant="top"
          className={styles.featureImg}
          src={featureImg}
          onContextMenu={handleContextMenu}
        />
        <Card.Body className={`${styles.featBody} ${checkId(id)[1]}`}>
          <Card.Title className={styles.featureTitle}>{headline}</Card.Title>
          <hr className={styles.aboutBorder} />
        </Card.Body>
      </Card>
    </Link>
  );
};

FeaturedProduct.propTypes = {
  id: PropTypes.string.isRequired,
  featureImg: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
};

export default FeaturedProduct;
