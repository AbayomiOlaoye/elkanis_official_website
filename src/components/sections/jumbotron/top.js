import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PropTypes from 'prop-types';
import '../css/about.css';
import styles from './top.module.scss';

const Top = (
  {
    title, id, linkOne, linkTwo, linkThree, img,
  },
) => {
  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div id={id} className={styles.topSection} style={{ overflow: 'hidden' }}>
      <img
        src={img}
        alt={img}
        className={styles.topImage}
      />
      <div className={styles.overlay} />
      <h1 className={styles.topHeader} data-aos="zoom-out">
        {title}
      </h1>
      {
        linkOne && (
          <div
            data-aos="fade-up"
            className="top--links absolute d-flex j-c-c g--32 a-i-c"
          >
            <a href={`#${linkOne.id}`} className={styles.topLink}>{linkOne.link}</a>
            <a href={`#${linkTwo.id}`} className={styles.topLink}>{linkTwo.link}</a>
            <a href={`#${linkThree.id}`} className={styles.topLink}>{linkThree.link}</a>
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
  img: PropTypes.string.isRequired,
};

Top.defaultProps = {
  linkOne: '',
  linkTwo: '',
  linkThree: '',
};

export default Top;
