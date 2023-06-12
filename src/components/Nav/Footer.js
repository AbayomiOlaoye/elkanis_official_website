/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { TiMail } from 'react-icons/ti';
import { CiLocationOn } from 'react-icons/ci';
import { SlCallEnd } from 'react-icons/sl';
import { Logo } from './Nav';
import '../sections/css/about.css';

const Footer = () => (
  <footer className="about footer--container grid w--100" id="contact-us">
    <div className="footer__top flex">
      <img src={Logo} alt="elkanis & partners' logo" className="footer--logo mt-1" />
      <small className="footer__links flex column mt-1">
        <div className="footer__links--top flex">
          <CiLocationOn className="footer--icon" />
          <p className="footer--text">
            1 Enen Afaha Street,
            <br />
            Opposite LG Showroom,
            <br />
            Ikot Ekpene Road, Uyo,
            <br />
            Akwa Ibom State - Nigeria
            <br />
            <br />
            66 Kwame Nkrumah Street,
            <br />
            Asokoro, Abuja - Nigeria
          </p>
        </div>
        <div className="footer__links--top flex">
          <SlCallEnd className="footer--icon" />
          <a href="tel:+2348027331036" className="footer--text" style={{ color: '#fff' }}>
            +234 802 733 1036
          </a>
        </div>
        <div className="footer__links--top flex">
          <TiMail className="footer--icon" />
          <a
            href="mailto:info@elkanisgroup.com"
            className="footer--text"
            style={{ color: '#fff' }}
          >
            info@elkanisgroup.com
          </a>
        </div>
        <div className="footer__links--top flex">
          <AiOutlineFieldTime className="footer--icon" />
          <p className="footer--text">
            Mon - Fri: 8:00am - 5:00pm
          </p>
        </div>
      </small>
    </div>
  </footer>
);

export default Footer;
