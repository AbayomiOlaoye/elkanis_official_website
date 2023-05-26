import { MdKeyboardArrowUp } from 'react-icons/md';
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { IoIosArrowDown } from 'react-icons/io';

const Member = ({ member }) => {
  const partial = (
    <div className="team--action flex column">
      <h4 className="team--name">{member.designation}</h4>
      <h5 className="team--role">{member.name}</h5>
      <p className="team--text">{member.headshot}</p>
    </div>
  );

  const full = (
    <div className="full team--action flex column">
      <h4 className="team--name">{member.designation}</h4>
      <h5 className="team--role">{member.name}</h5>
      <p className="team--text">{member.Intro}</p>
      <div className="team--skills flex column">

        <div className="team--skills--left flex column">
          <h5 className="team--skills--title">Expertise</h5>
          <ul className="team--skills--list">
            {member.expertise.map((skill) => (
              <li className="team--skills--item" key={skill}>
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className="team--skills--right flex column">
          <h5 className="team--skills--title">Skills</h5>
          <ul className="team--skills--list">
            {member.skills.map((skill) => (
              <li className="team--skills--item" key={skill}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  const [isReadMore, setIsReadMore] = useState(false);

  const ReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div className="team--member flex column" key={member.id}>
      <img src={member.image} alt={member.name} className="team--img" />
      { isReadMore ? full : partial }
      <a href="#" className="team--action--text" onClick={ReadMore}>
        { isReadMore
          ? (
            <button type="button">
              Know Less
              <MdKeyboardArrowUp />
            </button>
          ) : (
            <button type="button">
              Know More
              <IoIosArrowDown />
            </button>
          )}
      </a>
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
