import React from 'react';
import PropTypes from 'prop-types';
import heroBg from '../../../assets/backgrounds/vid_placeholder.png';
import hero from '../../../assets/generic/feature_hd.png';
import '../css/about.css';

const Top = (
  {
    title, id, linkOne, linkTwo, linkThree,
  },
) => {
  const heroStyle = {
    backgroundImage: `url(${heroBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '60vh',
    width: '100%',
    zIndex: '1',
  };

  return (
    <div id={id} className="top--container relative d-flex column j-c-c a-i-c" style={heroStyle}>
      <img
        src={hero}
        alt="hero"
        className="hero--img relative"
        style={
          {
            top: '30vh',
            width: '80%',
            height: '50vh',
            textAlign: 'center',
            boxShadow: '0 32px 20px rgba(0, 0, 0, 0.05)',
          }
        }
      />
      <div className="image--overlay" />
      <h1 className="temp--font hero--title absolute">
        {title}
      </h1>
      {
        linkOne && (
          <div
            className="top--links absolute d-flex j-c-c g--32 a-i-c"
            style={{ top: '70vh', borderTop: '1px solid #fff', paddingTop: '1vh' }}
          >
            <a href={`#${linkOne.id}`} className="page--link">{linkOne.link}</a>
            <a href={`#${linkTwo.id}`} className="page--link">{linkTwo.link}</a>
            <a href={`#${linkThree.id}`} className="page--link">{linkThree.link}</a>
          </div>
        )
}
    </div>
  );
};

Top.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  linkOne: PropTypes.objectOf(PropTypes.string),
  linkTwo: PropTypes.objectOf(PropTypes.string),
  linkThree: PropTypes.objectOf(PropTypes.string),
};

Top.defaultProps = {
  linkOne: '',
  linkTwo: '',
  linkThree: '',
};

export default Top;
