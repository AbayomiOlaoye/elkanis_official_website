import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PropTypes from 'prop-types';

const Statistics = ({ stats }) => {
  const [counters, setCounters] = useState({});

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease',
      once: false,
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters((prevCounters) => {
        const updatedCounters = { ...prevCounters };
        Object.keys(stats).forEach((key) => {
          if (typeof stats[key].counter === 'number') {
            updatedCounters[key] = updatedCounters[key] || 400;
            if (updatedCounters[key] < stats[key].counter) {
              updatedCounters[key] += 599;
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
            <div className={`stat--div d-flex column a-i-c ${counterClassName}`} data-aos="zoom-in" key={key}>
              <img src={stat.icon} alt="icon" data-aos="fade-in" className="stat--icon" />
              <p data-aos="fade-left" className="stat--text" style={{ fontWeight: '700' }}>
                {formatCount(counters[key] || stat.counter)}
                <span className="plus">+</span>
              </p>
              <p className="stat--text" style={{ fontWeight: '600', textAlign: 'center' }}>{stat.info}</p>
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
