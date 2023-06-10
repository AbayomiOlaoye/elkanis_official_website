/* eslint-disable arrow-body-style */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
import React, { useRef, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { TiMail } from 'react-icons/ti';
import { CiLocationOn } from 'react-icons/ci';
import { SlCallEnd } from 'react-icons/sl';
import axios from 'axios';
import Hero from '../sections/Hero';
import Motivation from '../sections/Motivation';
import Product from '../sections/features/ProductFeat';
import Service from '../sections/features/ServiceFeat';
import Funnel from '../sections/Funnel';
import Sponsors from '../sections/Sponsors';
import { Logo } from '../Nav/Nav';

const FORM_ID = 'mrgvwvka';

const Home = () => {
  const location = useLocation();
  const sectionRef = useRef(null);

  const [animateContent, setAnimateContent] = useState(false);

  useEffect(() => {
    setAnimateContent(true);
  }, []);

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

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const feedBack = () => {
    if (status === 'SUCCESS') {
      setTimeout(() => {
        setStatus('');
      }, 3000);

      return (
        <p className="success relative">* Thank you. We will be in touch!!!</p>
      );
    }

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      message,
    };

    try {
      const res = await axios.post(`https://formspree.io/f/${FORM_ID}/`, data);
      if (res.status === 200) {
        setName('');
        setEmail('');
        setMessage('');
        setStatus('SUCCESS');
      }
    } catch (error) {
      setStatus('ERROR');
    }
  };

  return (
    <div className={`home--container w--100 ${animateContent ? 'slide-in' : ''}`}>
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
        <form className="form flex column" onSubmit={handleSubmit}>
          <div className="input-div flex w-100">
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              required
              className="contact__form--input
              text-input"
            />

            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email *"
              className="contact__form--input text-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Message *"
            className="contact__form--input"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button
            type="submit"
            className="contact__form--btn button"
            style={{ marginTop: '0', fontSize: '1.25rem', padding: '3%' }}
          >
            Send Message
          </button>
          { feedBack() }
        </form>
      </footer>
    </div>
  );
};

export default Home;
