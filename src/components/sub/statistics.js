import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ stats }) => {
  const [counters, setCounters] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters((prevCounters) => {
        const updatedCounters = { ...prevCounters };
        Object.keys(stats).forEach((key) => {
          if (typeof stats[key].counter === 'number') {
            updatedCounters[key] = updatedCounters[key] || 400;
            if (updatedCounters[key] < stats[key].counter) {
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
  }, [stats]);

  const formatCount = (value) => value.toLocaleString();

  return (
    <>
      {Object.keys(stats).map((key) => {
        const stat = stats[key];
        if (stat && typeof stat.counter === 'number') {
          const counterClassName = `counter-${key}`;
          return (
            <div className={`stat--div d-flex column a-i-c ${counterClassName}`} key={key} style={{ maxWidth: '175px' }}>
              <img src={stat.icon} alt="icon" className="stat--icon" />
              <p className="stat--text" style={{ fontSize: '32px', fontWeight: '700' }}>
                {formatCount(counters[key] || stat.counter)}
                <span className="plus">+</span>
              </p>
              <p className="stat--text" style={{ fontSize: '14px', fontWeight: '600', textAlign: 'center' }}>{stat.info}</p>
            </div>
          );
        }
        return null;
      })}
    </>
  );
};

Statistics.propTypes = {
  stats: PropTypes.shape({
    counter: PropTypes.number,
    icon: PropTypes.string,
    info: PropTypes.string,
  }).isRequired,
};

export default Statistics;
