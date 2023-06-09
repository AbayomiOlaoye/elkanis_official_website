/* eslint-disable import/no-extraneous-dependencies */
import { AiFillCloseCircle } from 'react-icons/ai';
import React, { useState, useEffect, useRef } from 'react';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MdOutlineMenu } from 'react-icons/md';
/* eslint-disable import/no-extraneous-dependencies */
import { Link, Outlet } from 'react-router-dom';
import Logo from '../../assets/logos/main_logo.svg';
import './css/nav.css';
import '../../index.css';

const Nav = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: 'ease-in-out',
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [toggle, setToggle] = useState(false);
  const navRef = useRef(null);

  const handleMenuOpen = () => {
    setToggle(!toggle);
    navRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleMenuClose = () => {
    setToggle(false);
  };

  return (
    <>
      <header className="header--container flex">
        <Link to="/" className="logo--link flex block">
          <img src={Logo} className="logo max--100" data-aos="fade-down" alt="elkanis & partners's logo" />
        </Link>
        {
            toggle
              ? <AiFillCloseCircle className="exit hamburger hide--desk" onClick={handleMenuClose} />
              : <MdOutlineMenu className="menu hamburger hide--desk animate__lightSpeedOutRight" onClick={handleMenuOpen} />
          }

        <nav className={`nav--container ${toggle ? '' : 'hide--mob'}`} ref={navRef}>
          <ul className="nav--list un-list flex animate__slideInRight">
            <li className="nav--item--container list">
              <Link to="/" className="nav--item" data-aos="fade-up" onClick={handleMenuClose}>Home</Link>
            </li>
            <li className="nav--item--container list">
              <Link to="/about-us" className="nav--item" data-aos="fade-up" onClick={handleMenuClose}>About Us</Link>
            </li>
            <li className="nav--item--container list">
              <Link to="/products" className="nav--item" data-aos="fade-down" onClick={handleMenuClose}>Products</Link>
            </li>
            <li className="nav--item--container list">
              <Link to="/services" className="nav--item" data-aos="fade-up" onClick={handleMenuClose}>Services</Link>
            </li>
            <li className="nav--item--container list">
              <Link to="/projects" className="nav--item" data-aos="fade-up" onClick={handleMenuClose}>Projects</Link>
            </li>
            <li className="nav--item--container list">
              <Link to="/blogs" className="nav--item" data-aos="fade-down" onClick={handleMenuClose}>Blog</Link>
            </li>
            <li className="nav--item--container list">
              <Link
                to="/"
                state={{ scrollToSection: 'email' }}
                className="nav--item"
                onClick={handleMenuClose}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

      </header>

      <Outlet />
    </>
  );
};

export { Nav, Logo };
