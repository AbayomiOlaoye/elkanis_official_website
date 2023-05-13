// eslint-disable-next-line import/no-extraneous-dependencies
import { PropTypes } from 'prop-types';

const Button = ({ text }) => (
  <button type="button" className="button">
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
