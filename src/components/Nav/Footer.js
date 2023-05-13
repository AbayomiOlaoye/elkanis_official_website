import { AiOutlineFieldTime } from 'react-icons/ai';
import { TiMail } from 'react-icons/ti';
import { CiLocationOn } from 'react-icons/ci';
import { SlCallEnd } from 'react-icons/sl';
import React from 'react';
import { Logo } from './Nav';

const Footer = () => (
  <footer className="footer--container flex">
    <img src={Logo} alt="elkanis & partners' logo" />
    <small className="footer__links flex column">
      <div className="footer__links--top flex">
        <CiLocationOn className="footer--icon" />
        <p className="footer--text">
          1 Enen Afaha Street, Opposite LG Showroom
          Ikot Ekpene Road, Uyo, Akwa Ibom State - Nigeria
        </p>
        <p className="footer--text">
          66 Kwame Nkrumah Street, Asokoro, Abuja - Nigeria
        </p>
      </div>
      <div className="footer__links--top flex">
        <SlCallEnd className="footer--icon" />
        <p className="footer--text">
          +234 802 733 1036
        </p>
      </div>
      <div className="footer__links--top flex">
        <TiMail className="footer--icon" />
        <p className="footer--text">
          info@elkanisgroup.com
        </p>
      </div>
      <div className="footer__links--top flex">
        <AiOutlineFieldTime className="footer--icon" />
        <p className="footer--text">
          Mon - Fri: 8:00am - 5:00pm
        </p>
      </div>
    </small>
    <form action="#" method="POST" className="contact__form grid">
      <input type="text" name="name" id="name" placeholder="Name" className="contact__form--input" />
      <input type="email" name="email" id="email" placeholder="Email *" className="contact__form--input" />
      <textarea name="message" id="message" cols="30" rows="10" placeholder="Message *" className="contact__form--input" />
      <button type="submit" className="contact__form--btn">Send Message</button>
    </form>
  </footer>
);

export default Footer;
