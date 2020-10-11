import React from 'react';
import '../../assets/styles/containers/header.css';

import { HomeHeader } from '../molecules/';

const Header = () => {
  return (
    <header className="Header">
      <HomeHeader />
      <div className="Header-Illustration">
        <div className="Illustration-container">
          <img
            src="https://res.cloudinary.com/dnvp4s8pe/image/upload/v1602359244/lm1crlv6n3wvgvbhtrqq.svg"
            alt="Header illustration"
            width="228"
            height="170"
          />
        </div>
        <p className="Header-Text">
          Self-taught programmer who is always <strong>learning</strong> and
          open to working with other people. <br /> <br /> I mostly work with{' '}
          <strong>MERN stack</strong>, but also i work with MySQL or Java.
        </p>
      </div>
      <hr className="HR-Header" />
    </header>
  );
};

export default Header;
