import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../sections/css/about.css';

const Article = ({ article }) => {
  const [counters, setCounters] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters((prevCounters) => {
        const updatedCounters = { ...prevCounters };
        Object.keys(article.stats).forEach((key) => {
          if (typeof article.stats[key].counter === 'number') {
            updatedCounters[key] = updatedCounters[key] || 0;
            if (updatedCounters[key] < article.stats[key].counter) {
              updatedCounters[key]++;
            }
          }
        });
        return updatedCounters;
      });
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [article.stats]);

  useEffect(() => {
    const initialCounters = {};
    Object.keys(article.stats).forEach((key) => {
      if (typeof article.stats[key].counter === 'number') {
        initialCounters[key] = article.stats[key].counter;
      }
    });
    setCounters(initialCounters);
  }, [article.stats]);

  return (
    <article className="drive-us g--32 d-flex a-i-c w--80" style={{ alignSelf: 'flex-start', width: '85%' }}>
      <div className="rice--img--div w--100 d-flex a-i-c">
        <img src={article.productImage} alt="A man transporting rice" className="livestock--img" style={{ width: '500px' }} />
      </div>
      <div className="cover">
        <div className="drive-us--text flex g--32 flow column">
          <h3 id="Livestock" style={{ fontSize: '68px', maxWidth: '637px' }} className="green-title-text boarder special-title temp--font light--green">{article.featureHeadline}</h3>
          { article.intro.map((para) => <p key={para.length - 1} className="sub--text text--just">{para}</p>) }
        </div>
        <div className="stats--div d-flex">
          { article.stats.yields && (
            <div className="stat--div d-flex column a-i-c" key="yields">
              <img src={article.stats.yields.icon} alt="icon" className="stat--icon" />
              <p className="stat--text">
                {counters.yields || article.stats.yields.counter}
                <span className="plus">+</span>
              </p>
              <p className="stat--text">{article.stats.yields.info}</p>
            </div>
          )}
          { article.stats.farmer && (
            <div className="stat--div d-flex column a-i-c" key="farmer">
              <img src={article.stats.farmer.icon} alt="icon" className="stat--icon" />
              <p className="stat--text">{counters.farmer || article.stats.farmer.counter}</p>
              <p className="stat--text">{article.stats.farmer.info}</p>
            </div>
          )}
          { article.stats.input && (
            <div className="stat--div d-flex column a-i-c" key="input">
              <img src={article.stats.input.icon} alt="icon" className="stat--icon" />
              <p className="stat--text">{counters.input || article.stats.input.counter}</p>
              <p className="stat--text">{article.stats.input.info}</p>
            </div>
          )}
          { article.stats.land && (
            <div className="stat--div d-flex column a-i-c" key="land">
              <img src={article.stats.land.icon} alt="icon" className="stat--icon" />
              <p className="stat--text">{counters.land || article.stats.land.counter}</p>
              <p className="stat--text">{article.stats.land.info}</p>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

Article.propTypes = {
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
