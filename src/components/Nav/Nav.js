import Logo from '../../assets/logos/main_logo.svg';

const Nav = () => (
  <header>
    <a href="index.html" className="logo">
      <img src={Logo} alt="elkanis & partners' logo" />
    </a>
    <nav>
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contacts</li>
        <li>Products</li>
        {/* <li><a href='/'>Home</a></li>
        <li><a href=''>About Us</a></li>
        <li><a href=''>Products</a></li>
        <li><a href=''>Services</a></li>
        <li><a href=''>Projects</a></li>
        <li><a href=''>Blog</a></li>
        <li><a href=''>Contact</a></li> */}
      </ul>
    </nav>
  </header>
);

export default Nav;
