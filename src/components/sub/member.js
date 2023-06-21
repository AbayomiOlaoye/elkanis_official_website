/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { MdKeyboardArrowUp } from 'react-icons/md';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import 'animate.css';
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
  const [selectedMember, setSelectedMember] = useState(null);
  const teamRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      const clickedElement = e.target;
      const isInsideCard = teamRef.current && teamRef.current.contains(clickedElement);
      const isKnowMoreButton = clickedElement.classList.contains('know--more');

      if (!isInsideCard || isKnowMoreButton) {
        setSelectedMember(null);
      }
    };
    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const handleReadMore = (memberId) => {
    setSelectedMember((prevMember) => (prevMember === memberId ? null : memberId));

    if (memberId) {
      const teamMemberElement = teamRef.current;
      if (teamMemberElement) {
        teamMemberElement.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
    }

    if (selectedMember !== null && memberId !== null) {
      handleReadMore(null);
    }
  };

  const partial = (
    <AnimatePresence>
      <motion.div
        key={counter}
        className="team--action d-flex column a-i-c"
        style={{ overflow: 'hidden' }}
        ref={teamRef}
        variants={animateBook}
        initial="isHidden"
        animate="isVisible"
        exit="isHidden"
        layoutId={member.id}
        transit={(counter + 1) * 0.2}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 1.1 }}
      >
        <h5 className="team--name">{member.designation}</h5>
        <h4 className="team--role">{member.name}</h4>
        <p className="team--text text--just">{member.headshot}</p>
        <a
          className="team--action--button relative"
          onClick={() => handleReadMore(member.id)}
          style={{ top: '0', alignSelf: 'center' }}
        >
          <button type="button" className="know--more">
            Know More
            <IoIosArrowDown />
          </button>
        </a>
      </motion.div>
    </AnimatePresence>
  );

  const full = (
    <div
      className="full relative team--action text--just d-flex column a-i-c animate__fadeIn"
    >
      <h5 className="team--name" style={{ color: 'var(--primary--08)' }}>{member.designation}</h5>
      <h4 className="team--role" style={{ color: 'var(--primary--06)', marginBottom: '1rem' }}>{member.name}</h4>
      <p className="team--text">{member.Intro}</p>
      <div className="team--skills relative flex column w--100">

        <div className="team--skills--card flex column">
          <h5 className="team--skills--title">Expertise</h5>
          <ul className="team--skills--list">
            {member.expertise.map((skill) => (
              <li className="team--skills--item team--text" key={skill}>
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className="team--skills--card flex column">
          <h5 className="team--skills--title">Skills</h5>
          <ul className="team--skills--list">
            {member.skills.map((skill) => (
              <li className="team--skills--item team--text" key={skill}>
                {skill}
              </li>
            ))}
          </ul>
          <a
            className="team--action--button a-i-c d-block animate__backInUp"
            onClick={() => handleReadMore(null)}
            style={
            {
              marginTop: '3vh',
              alignSelf: 'center',
              zIndex: '110',
            }
          }
          >
            <button type="button" className="know--more" style={{ color: '#2a310c' }}>
              Less
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
      style={{ zIndex: selectedMember === member.id ? '100' : '10' }}
    >
      <img src={member.image} alt={member.name} className="team--img" />
      { selectedMember === member.id ? full : partial }
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
