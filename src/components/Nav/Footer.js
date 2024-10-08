/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin } from 'react-icons/fa';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { TiMail } from 'react-icons/ti';
import { CiLocationOn } from 'react-icons/ci';
import { SlCallEnd } from 'react-icons/sl';
import axios from 'axios';
import { Logo } from './Nav';
import '../sections/css/about.css';

const FORM_ID = 'mrgvwvka';

const Footer = () => {
  const currentYear = new Date().getFullYear();
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    <footer className="about footer--container grid w--100" id="contact-us">
      <div>
        <div className="shared footer__top flex">
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
              <a href="tel:+23480000445566" className="footer--text" style={{ color: '#fff' }}>
                +234 800 0044 5566 (Toll-Free)
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
            <div className="socials">
              <h3 className="socials--title">Follow Us for News & Updates</h3>
              <a
                href="https://www.linkedin.com/company/elkanis-and-partners/"
                target="_blank"
                rel="noreferrer"
                title="Follow us on LinkedIn"
                className="socials--link"
              >
                <FaLinkedin className="linkedin" />
              </a>
            </div>
          </small>
        </div>
        <div className="privacy flex column a-i-c desktop">
          <p className="privacy--text">
            &copy;
            {` ${currentYear} `}
            Elkanis & Partners. All rights reserved.
          </p>
          <div className="privacy--divider flex">
            <Link to="/privacy-policy" className="privacy--link">
              Privacy Policy
            </Link>
            <Link to="/terms-of-use" className="privacy--link">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
      <form className="form flex column" onSubmit={handleSubmit}>
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
          className="contact__form--btn"
        >
          Send
        </button>
        { feedBack() }
      </form>
      <div className="privacy flex column a-i-c mobile">
        <p className="privacy--text">
          &copy;
          {` ${currentYear} `}
          Elkanis & Partners. All rights reserved.
        </p>
        <div className="privacy--divider flex">
          <Link to="/privacy-policy" className="privacy--link">
            Privacy Policy
          </Link>
          <Link to="/terms-of-use" className="privacy--link">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
