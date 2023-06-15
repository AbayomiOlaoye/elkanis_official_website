import { AiFillCloseCircle } from 'react-icons/ai';
import React, { useState, useEffect } from 'react';
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
      duration: 3000,
      easing: 'ease-in-out',
    });
  }, []);

  const [toggle, setToggle] = useState(false);

  const handleMenuOpen = () => {
    setToggle(!toggle);
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
              : <MdOutlineMenu className="menu hamburger hide--desk" onClick={handleMenuOpen} />
          }
        <nav className={`nav--container relative ${toggle ? '' : 'hide--mob'}`}>
          <ul className="nav--list un-list flex">
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
                state={{ scrollToSection: 'name' }}
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
