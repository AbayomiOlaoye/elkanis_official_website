/* eslint-disable import/extensions */
import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { TiMail } from 'react-icons/ti';
import { CiLocationOn } from 'react-icons/ci';
import { SlCallEnd } from 'react-icons/sl';
import Hero from '../sections/Hero';
import Motivation from '../sections/Motivation';
import Product from '../sections/features/ProductFeat';
import Service from '../sections/features/ServiceFeat';
import Funnel from '../sections/Funnel';
import Sponsors from '../sections/Sponsors';
import { Logo } from '../Nav/Nav';

const Home = () => {
  const location = useLocation();
  const sectionRef = useRef(null);

  useEffect(() => {
    if (location.state && location.state.scrollToSection) {
      const elem = document.getElementById(location.state.scrollToSection);
      if (elem) {
        elem.scrollIntoView({
          behavior: 'smooth',
        });
      }
    }
  }, [location.state]);

  return (
    <div className="home--container w--100">
      <Hero />
      <Motivation />
      <Product />
      <Service />
      <Funnel />
      <Sponsors />
      <footer className="footer--container grid" id="contact-us" ref={sectionRef}>
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
    </div>
  );
};

export default Home;
