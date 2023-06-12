/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { MdKeyboardArrowUp } from 'react-icons/md';
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PropTypes from 'prop-types';
import { IoIosArrowDown } from 'react-icons/io';

const animateBook = {
  isHidden: { opacity: 0, x: '-100%' },
  isVisible: (transit) => ({
    opacity: 1,
    x: 0,
    transition: { delay: transit },
  }),
};

const Member = ({ member, counter }) => {
  const [isReadMore, setIsReadMore] = useState(false);
  const teamRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: 'ease-in',
    });
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      if (teamRef.current && !teamRef.current.contains(e.target)) {
        setIsReadMore(false);
      }
    };
    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick);
  }, [isReadMore]);

  const handleReadMore = () => {
    setIsReadMore(!isReadMore);
    if (isReadMore) {
      document.querySelector('.team--member').scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  const partial = (
    <AnimatePresence>
      <motion.div
        key={counter}
        className="booklet-card flex"
        variants={animateBook}
        initial="isHidden"
        animate="isVisible"
        exit="isHidden"
        layoutId={member.id}
        transit={(counter + 1) * 0.2}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 1.1 }}
      >
        <div className="team--action d-flex column a-i-c" style={{ overflow: 'hidden' }} ref={teamRef}>
          <h5 className="team--name" data-aos="fade-up">{member.designation}</h5>
          <h4 className="team--role" data-aos="fade-up">{member.name}</h4>
          <p className="team--text text--just" data-aos="fade-up" style={{ textAlign: 'center' }}>{member.headshot}</p>
          <a
            className="team--action--button relative"
            onClick={handleReadMore}
            style={{ top: '0', alignSelf: 'center' }}
          >
            <button type="button" className="know--more" data-aos="fade-right">
              Know More
              <IoIosArrowDown />
            </button>
          </a>
        </div>
      </motion.div>
    </AnimatePresence>
  );

  const full = (
    <div
      className="full relative team--action text--just d-flex column a-i-c"
      style={
        {
          top: '-10vw',
          backgroundColor: 'var(--primary--04)',
          color: '#fff',
          padding: '40px 18px 32px',
          borderRadius: '12px',
          border: 'none',
          overflow: 'hidden',
        }
      }
    >
      <h5 className="team--name" style={{ color: 'var(--primary--08)' }} data-aos="ease-in">{member.designation}</h5>
      <h4 className="team--role" style={{ color: 'var(--primary--06)', marginBottom: '1rem' }}>{member.name}</h4>
      <p className="team--text" data-aos="zoom-in">{member.Intro}</p>
      <div className="team--skills relative flex column w--100">

        <div className="team--skills--card flex column">
          <h5 className="team--skills--title" data-aos="fade-right">Expertise</h5>
          <ul className="team--skills--list">
            {member.expertise.map((skill) => (
              <li className="team--skills--item team--text" data-aos="fade-down" key={skill}>
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className="team--skills--card flex column">
          <h5 className="team--skills--title" data-aos="fade-left">Skills</h5>
          <ul className="team--skills--list">
            {member.skills.map((skill) => (
              <li className="team--skills--item team--text" data-aos="fade-down" key={skill}>
                {skill}
              </li>
            ))}
          </ul>
          <a
            className="team--action--button a-i-c d-block"
            data-aos="fade-down"
            onClick={handleReadMore}
            style={
            {
              marginTop: '3vh',
              alignSelf: 'center',
              zIndex: '110',
            }
          }
          >
            <button type="button" style={{ color: '#fff' }}>
              Know Less
              <MdKeyboardArrowUp />
            </button>
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div
      className="team--member d-flex relative column a-i-c"
      key={member.id}
      ref={teamRef}
      style={{ zIndex: isReadMore ? '100' : '10' }}
    >
      <img src={member.image} alt={member.name} className="team--img" />
      { isReadMore ? full : partial }
    </div>
  );
};

Member.propTypes = {
  counter: PropTypes.number.isRequired,
  member: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    designation: PropTypes.string.isRequired,
    headshot: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    Intro: PropTypes.string.isRequired,
    expertise: PropTypes.arrayOf(PropTypes.string).isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Member;
