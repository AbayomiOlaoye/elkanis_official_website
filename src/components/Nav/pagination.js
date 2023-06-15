import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Pagination = ({ id }) => (
  <section className="pagination d-flex" style={{ marginBottom: '48px' }}>
    <a href={`#${id}`} className="footer--link d-block">Go to Top</a>
    <Link to="/" className="footer--link d-block">Back to Homepage</Link>
  </section>
);

Pagination.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Pagination;
