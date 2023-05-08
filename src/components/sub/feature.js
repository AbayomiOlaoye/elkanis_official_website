import { PropTypes } from 'prop-types';

const FeaturedProject = ({ featureImg, headline }) => (
  <article className="feature--pro">
    <img src={featureImg} alt={headline} className="feature--img" />
    <h3 className="feature--title white ">{headline}</h3>
  </article>
);

FeaturedProject.propTypes = {
  featureImg: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
};

export default FeaturedProject;
