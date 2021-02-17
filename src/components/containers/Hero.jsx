import React from 'react';
import '../../styles/containers/hero.css';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <header className="Hero">
      <div className="Hero-left">
        <div className="Hero-left-text">
          <h1>Rogelio Samuel</h1>
          <p>
            A web developer who prefer build systems in the server side but also
            likes frontend, UX, design and experiment with new technologies
          </p>
        </div>
        <div className="Hero-left-actions">
          <div className="Hero-left-actions-btn">
            <Link to="/projects" className="Hero-left-actions-btn-project">
              Projects
            </Link>
            <Link to="/about" className="Hero-left-actions-btn-about">
              About me
            </Link>
          </div>
          <div className="Hero-left-actions-links"></div>
        </div>
      </div>
      <div className="Hero-right">
        <img
          src="https://res.cloudinary.com/dnvp4s8pe/image/upload/v1613453026/My%20Website/hero_xdxvbz.svg"
          alt="Hero illustration"
        />
      </div>
    </header>
  );
};

export default Hero;
