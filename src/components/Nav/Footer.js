import { AiOutlineFieldTime } from 'react-icons/ai';
import { TiMail } from 'react-icons/ti';
import { CiLocationOn } from 'react-icons/ci';
import { SlCallEnd } from 'react-icons/sl';
import React from 'react';
import { Logo } from './Nav';

const Footer = () => (
  <footer className="footer--container grid">
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
    <form className="form flex column">
      <div className="input-div flex w-100">
        <input type="text" name="name" id="name" placeholder="Name" className="contact__form--input text-input" />
        <input type="email" name="email" id="email" placeholder="Email *" className="contact__form--input text-input" />
      </div>
      <textarea name="message" id="message" cols="30" rows="10" placeholder="Message *" className="contact__form--input" />
      <button type="submit" className="contact__form--btn">Send Message</button>
    </form>
  </footer>
);

export default Footer;
