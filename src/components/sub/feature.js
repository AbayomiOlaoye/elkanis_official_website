/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import Card from 'react-bootstrap/Card';

const FeaturedProduct = (
  {
    id, featureImg, headline,
  },
) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <Link
      to={{
        pathname: `/products/${id}`,
        state: { scrollToSection: id },
      }}
      className="product--link"
      data-aos="fade-up"
    >
      <Card className="feature--pro flex column" style={{ background: 'white' }}>
        <Card.Img variant="top" className="feature--img" src={featureImg} />
        <Card.Body className="feature--body">
          <Card.Title className="feature--title">{headline}</Card.Title>
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
