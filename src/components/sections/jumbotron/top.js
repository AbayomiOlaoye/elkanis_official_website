import React from 'react';
import PropTypes from 'prop-types';
import heroBg from '../../../assets/backgrounds/vid_placeholder.png';
import hero from '../../../assets/generic/feature_hd.png';
import '../css/about.css';

const Top = ({ title, id }) => {
  const heroStyle = {
    backgroundImage: `url(${heroBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '40vh',
    width: '100%',
  };

  return (
    <div id={id} className="top--container relative d-flex column j-c-c a-i-c" style={heroStyle}>
      <img
        src={hero}
        alt="hero"
        className="hero--img relative"
        style={
          {
            top: '20vh',
            width: '80%',
            height: '40vh',
            textAlign: 'center',
            boxShadow: '0 32px 20px rgba(0, 0, 0, 0.05)',
          }
        }
      />
      <div className="image--overlay" />
      <h1 className="temp--font hero--title absolute">
        {title}
      </h1>
    </div>
  );
};

Top.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Top;
