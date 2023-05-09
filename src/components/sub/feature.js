import { PropTypes } from 'prop-types';

const FeaturedProduct = ({ featureImg, headline }) => (
  <article className="feature--pro">
    <img src={featureImg} alt={headline} className="feature--img" />
    <h3 className="feature--title white ">{headline}</h3>
  </article>
);

FeaturedProduct.propTypes = {
  featureImg: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
};

export default FeaturedProduct;
