/* eslint-disable import/no-extraneous-dependencies */
import { PropTypes } from 'prop-types';
import Card from 'react-bootstrap/Card';

const FeaturedProduct = ({ featureImg, headline }) => (
  <Card className="feature--pro flex column" style={{ width: '21rem', background: 'white' }}>
    <div className="img--div">
      <Card.Img variant="top" className="feature--img" src={featureImg} />
    </div>
    <Card.Body className="feature--body">
      <Card.Title className="feature--title">{headline}</Card.Title>
    </Card.Body>
  </Card>
);

FeaturedProduct.propTypes = {
  featureImg: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
};

export default FeaturedProduct;
