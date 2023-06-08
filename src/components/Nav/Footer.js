/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { TiMail } from 'react-icons/ti';
import { CiLocationOn } from 'react-icons/ci';
import { SlCallEnd } from 'react-icons/sl';
import { Logo } from './Nav';

const Footer = () => {
  const [state, handleSubmit] = useForm('mrgjorja');
  if (state.succeeded) {
    return <p>Thanks for reaching out!</p>;
  }

  return (
    <footer className="footer--container grid" id="contact-us">
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
      <form className="form flex column" onSubmit={handleSubmit}>
        <div className="input-div flex w-100">
          <input type="text" name="name" id="name" placeholder="Name" className="contact__form--input text-input" />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
          <input type="email" name="email" id="email" placeholder="Email *" className="contact__form--input text-input" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <textarea name="message" id="message" cols="30" rows="10" placeholder="Message *" className="contact__form--input" />
        <button type="submit" className="contact__form--btn" disabled={state.submitting}>Send Message</button>
      </form>
    </footer>
  );
};

export default Footer;
