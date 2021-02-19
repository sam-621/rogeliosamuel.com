import React from 'react';
import '../../styles/containers/nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  function toggle() {
    document.getElementById('hamburger').classList.toggle('convert');
  }
  return (
    <nav className="Nav">
      <div className="Nav-left">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dnvp4s8pe/image/upload/v1608145205/My%20Website/myLogo_hc28py.svg"
            alt="Rogelio Samuel Logo"
          />
        </Link>
      </div>
      <div id="hamburger" className="Nav-hamburger" onClick={toggle}>
        <div className="Nav-hamburger-1"></div>
        <div className="Nav-hamburger-2"></div>
        <div className="Nav-hamburger-3"></div>
      </div>
    </nav>
  );
};

export default Nav;
