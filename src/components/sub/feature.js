/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import Card from 'react-bootstrap/Card';

const FeaturedProduct = (
  {
    id, featureImg, headline,
  },
) => {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollToSection) {
      const elem = document.getElementById(location.state.scrollToSection);
      if (elem) {
        elem.scrollIntoView({
          behavior: 'smooth',
        });
      }
    }
  }, [location.state]);

  return (
    <Link
      to={{
        pathname: `/products${id}`,
      }}
      className="product--link"
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
