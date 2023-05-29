/* eslint-disable import/no-extraneous-dependencies */
import { Link, Outlet } from 'react-router-dom';
import Logo from '../../assets/logos/main_logo.svg';
import './css/nav.css';

const Nav = () => (
  <main className="main--container w--100">
    <header className="header--container flex">
      <Link to="/" className="logo--link flex block">
        <img src={Logo} className="logo max--100" alt="elkanis & partners's logo" />
      </Link>
      <nav className="nav--container">
        <ul className="nav--list un-list flex">
          <li className="nav--item--container list">
            <Link to="/" className="nav--item">Home</Link>
          </li>
          <li className="nav--item--container list">
            <Link to="/about-us" className="nav--item">About Us</Link>
          </li>
          <li className="nav--item--container list">
            <Link to="/products" className="nav--item">Products</Link>
          </li>
          <li className="nav--item--container list">
            <Link to="/services" className="nav--item">Services</Link>
          </li>
          <li className="nav--item--container list">
            <Link to="projects" className="nav--item">Projects</Link>
          </li>
          <li className="nav--item--container list">
            <Link to="/blog" className="nav--item">Blog</Link>
          </li>
          <li className="nav--item--container list">
            <Link
              to="/"
              state={{ scrollToSection: 'name' }}
              className="nav--item"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>

    <Outlet />
  </main>
);

export { Nav, Logo };
