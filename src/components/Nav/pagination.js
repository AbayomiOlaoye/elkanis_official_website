import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Pagination = ({ id }) => (
  <section className="pagination">
    <a href={`#${id}`} className="footer--link">Go to Top</a>
    <Link to="/" className="footer--link">Back to Homepage</Link>
  </section>
);

Pagination.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Pagination;
