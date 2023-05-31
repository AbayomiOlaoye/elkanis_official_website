/* eslint-disable react/forbid-prop-types */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../sections/css/about.css';

const Article = ({ article, id }) => {
  const [counters, setCounters] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters((prevCounters) => {
        const updatedCounters = { ...prevCounters };
        Object.keys(article.stats).forEach((key) => {
          if (typeof article.stats[key].counter === 'number') {
            updatedCounters[key] = updatedCounters[key] || 400;
            if (updatedCounters[key] < article.stats[key].counter) {
              updatedCounters[key] += 1;
            }
          }
        });
        return updatedCounters;
      });
    }, 1);

    return () => {
      clearInterval(interval);
    };
  }, [article.stats]);

  return (
    <article
      className="drive--us g--32 d-flex"
      style={
        { alignSelf: 'flex-start', width: '90%', marginTop: '4rem' }
}
    >
      <div className="rice--img--div w--100 d-flex a-i-c">
        <img src={article.productImage} alt={article.id} className="livestock--img" style={{ width: '500px', lineHeight: '38px' }} />
      </div>
      <div className="cover">
        <div className="drive-us--text flex gap-one flow column">
          <h3 id={id} style={{ fontSize: '68px', maxWidth: '637px' }} className="green-title-text boarder special-title temp--font light--green">{article.featureHeadline}</h3>
          { article.intro.map((para) => <p key={para.length - 1} className="sub--text text--just">{para}</p>) }
        </div>
        <div className="stats--container gap-one d-flex" style={{ marginTop: '2rem' }}>
          {Object.keys(article.stats).map((key) => {
            const stat = article.stats[key];
            if (stat && typeof stat.counter === 'number') {
              const counterClassName = `counter-${key}`;
              return (
                <div className={`stat--div d-flex column a-i-c ${counterClassName}`} key={key} style={{ maxWidth: '175px' }}>
                  <img src={stat.icon} alt="icon" className="stat--icon" />
                  <p className="stat--text" style={{ fontSize: '32px', fontWeight: '700' }}>
                    {counters[key] || stat.counter}
                    <span className="plus">+</span>
                  </p>
                  <p className="stat--text" style={{ fontSize: '14px', fontWeight: '600', textAlign: 'center' }}>{stat.info}</p>
                </div>
              );
            }
            return null;
          })}
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
