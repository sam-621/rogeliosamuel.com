import React from 'react';
import '../../assets/styles/containers/header.css';

import { HomeHeader } from '../molecules/';
import { Title } from '../atoms/';

const Header = () => {
  return (
    <header className="Header">
      <HomeHeader />
      <div className="Header-Illustration">
        <div className="HomeHeader-Text">
          <Title content="Hi!, I’m a backend developer. Web development" />
        </div>
        <div className="Illustration-container">
          <img
            src="https://res.cloudinary.com/dnvp4s8pe/image/upload/v1602359244/lm1crlv6n3wvgvbhtrqq.svg"
            alt="Header illustration"
            width="228"
            height="170"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
