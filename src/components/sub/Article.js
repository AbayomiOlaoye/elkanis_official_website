/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import '../sections/css/about.css';
import Statistics from './statistics';

const Article = ({ article, id }) => {
  // Whatsapp message
  const PHONE_NUMBER = '2348027331036';

  const handleOrder = (name) => {
    const message = `Hello, I would like to place an order for ${name}`;
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <article
      className="drive--us g--32 d-flex"
      style={
        { alignSelf: 'flex-start', width: '90%', marginTop: '4rem' }
}
    >
      <div className="rice--img--div relative w--100 d-flex column a-i-c">
        <img src={article.productImage} alt={article.id} className="livestock--img" style={{ width: '500px', lineHeight: '38px' }} />
        { id === 'elkanRice' && <button type="button" className="button action--btn" onClick={() => handleOrder('El-kanis Rice')}>Place Order</button>}
      </div>

      <div className="cover">
        <div className="drive-us--text flex gap-one flow column">
          <h3 id={id} style={{ fontSize: '68px', maxWidth: '637px' }} className="green-title-text boarder special-title temp--font light--green">{article.featureHeadline}</h3>
          { article.intro.map((para) => <p key={para.length - 1} className="sub--text text--just">{para}</p>) }
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
        icon: PropTypes.string.isRequired,
        counter: PropTypes.number.isRequired,
        info: PropTypes.string.isRequired,
      }),
      land: PropTypes.object,
    }).isRequired,
  }).isRequired,
};

export default Article;
