/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { MdKeyboardArrowUp } from 'react-icons/md';
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { IoIosArrowDown } from 'react-icons/io';

const Member = ({ member }) => {
  const [isReadMore, setIsReadMore] = useState(false);
  const teamRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (teamRef.current && !teamRef.current.contains(e.target)) {
        setIsReadMore(false);
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [isReadMore]);

  const handleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const partial = (
    <div className="team--action text--just d-flex column a-i-c">
      <h5 className="team--name">{member.designation}</h5>
      <h4 className="team--role">{member.name}</h4>
      <p className="team--text">{member.headshot}</p>
      <a
        className="team--action--button a-i-c absolute"
        onClick={handleReadMore}
        style={{ top: '27vh', alignSelf: 'center' }}
      >
        <button type="button">
          Know More
          <IoIosArrowDown />
        </button>
      </a>
    </div>
  );

  const full = (
    <div
      className="full absolute team--action text--just d-flex column a-i-c"
      style={
        {
          top: '3.5vw',
          backgroundColor: 'var(--primary--04)',
          color: '#fff',
          padding: '60px 18px 32px',
          borderRadius: '12px',
          border: 'none',
        }
      }
    >
      <h5 className="team--name" style={{ color: 'var(--primary--08)' }}>{member.designation}</h5>
      <h4 className="team--role" style={{ color: 'var(--primary--06)' }}>{member.name}</h4>
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
            className="team--action--button a-i-c d-block"
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
    <div className="team--member d-flex relative column a-i-c" key={member.id} ref={teamRef}>
      <img src={member.image} alt={member.name} className="team--img" />
      { isReadMore ? full : partial }
    </div>
  );
};

Member.propTypes = {
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
