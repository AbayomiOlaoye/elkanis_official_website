import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ header }) => (
  <header>
    <h2 className="header--title">{ header }</h2>
  </header>
);

Header.propTypes = {
  header: PropTypes.string.isRequired,
};

export default Header;
