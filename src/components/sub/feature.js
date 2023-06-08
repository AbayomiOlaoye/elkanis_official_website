/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import Card from 'react-bootstrap/Card';

const FeaturedProduct = (
  {
    id, featureImg, headline, selected,
  },
) => (
  <Link to={`/products/${id}`} className={`product--link ${selected ? 'selected' : ''}`}>
    <Card className="feature--pro flex column" style={{ width: '21rem', background: 'white' }}>
      <div className="img--div">
        <Card.Img variant="top" className="feature--img" src={featureImg} />
      </div>
      <Card.Body className="feature--body">
        <Card.Title className="feature--title">{headline}</Card.Title>
      </Card.Body>
    </Card>
  </Link>
);

FeaturedProduct.propTypes = {
  id: PropTypes.string.isRequired,
  featureImg: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
};

export default FeaturedProduct;
