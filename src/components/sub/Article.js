/* eslint-disable react/forbid-prop-types */
import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../sections/css/about.css';
import Statistics from './statistics';

const Article = ({ article, id }) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  // Whatsapp message
  const PHONE_NUMBER = '2348027331036';

  const handleOrder = (name) => {
    const message = `Hello, I would like to place an order for ${name}`;
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${message}`, '_blank');
  };

  const { identity } = useParams();
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollToSection) {
      const section = document.getElementById(location.state.scrollToSection);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.state]);

  return (
    <article
      className="drive--us g--32 d-flex"
      data-aos="fade-up"
      style={
        { alignSelf: 'flex-start' }
      }
      id={id}
    >
      <div className={`rice--img--div relative d-flex column a-i-c ${article.id === 'elkanRice' ? 'rice--bag' : ''}`} id={identity}>
        <img src={article.productImage} alt={article.id} className="livestock--img" />
        { article.id === 'elkanRice' && <button type="button" title="Now in stock!" className="button action--btn" onClick={() => handleOrder('El-kanis Rice')}>Place Order</button>}
      </div>

      <div className="cover">
        <div className="drive-us--text flex gap-one flow column">
          <h3 id={id} className="green-title-text boarder special-title temp--font light--green">{article.featureHeadline}</h3>
          { article.intro.map((para) => <p key={para.length - 1} className="sub--text">{para}</p>) }
        </div>
        <div className="stats--container gap-one d-flex" style={{ marginTop: '2rem' }}>
          <Statistics stats={article.stats} />
        </div>
      </div>
    </article>
  );
};

Article.propTypes = {
  id: PropTypes.string.isRequired,
  article: PropTypes.shape({
    id: PropTypes.string.isRequired,
    featureImg: PropTypes.string.isRequired,
    featureHeadline: PropTypes.string.isRequired,
    productImage: PropTypes.string.isRequired,
    intro: PropTypes.arrayOf(PropTypes.string).isRequired,
    result: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]).isRequired,
    stats: PropTypes.shape({
      yields: PropTypes.object,
      farmer: PropTypes.shape({
        icon: PropTypes.string.isRequired,
        counter: PropTypes.number.isRequired,
        info: PropTypes.string.isRequired,
      }),
      input: PropTypes.shape({
        icon: PropTypes.string,
        counter: PropTypes.number,
        info: PropTypes.string,
      }),
      land: PropTypes.object,
    }).isRequired,
  }).isRequired,
};

export default Article;
