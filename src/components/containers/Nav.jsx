import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="Nav">
      <div className="Nav-left">
        <img
          src="https://res.cloudinary.com/dnvp4s8pe/image/upload/v1608145205/My%20Website/myLogo_hc28py.svg"
          alt="Rogelio Samuel Logo"
        />
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
        <Link to="/projects" className="Nav-right-projects">
          Projects
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
