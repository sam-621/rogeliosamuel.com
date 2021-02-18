import React from 'react';
import '../../styles/containers/nav.css';
import { Link } from 'react-router-dom';

import { PrimaryButton } from '../atoms';

const Nav = () => {
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
      <div className="Nav-right">
        <a
          rel="noreferrer"
          href="https://dev.to/rogeliosamuel621"
          target="_blank"
        >
          Blog
        </a>
        <Link to="/about">About</Link>

        <PrimaryButton url="projects" text="Projects" />
      </div>
    </nav>
  );
};

export default Nav;
