// eslint-disable-next-line import/no-extraneous-dependencies
import { PropTypes } from 'prop-types';

const Button = ({ text, action }) => (
  <button title={text === 'Place Order' ? 'Now in stock!' : ''} type="button" className="button" onClick={action}>
    {text}
  </button>
);

Button.defaultProps = {
  action: () => {},
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  action: PropTypes.func,
};

export default Button;
