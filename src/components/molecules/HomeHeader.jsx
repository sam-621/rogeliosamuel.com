import React from 'react';
import '../../assets/styles/molecules/homeHeader.css';

import { Title, MyName } from '../atoms/';

const HomeHeader = () => {
  return (
    <div className="HomeHeader">
      <div className="HomeHeader-Logo">
        <img
          src="http://res.cloudinary.com/dnvp4s8pe/image/upload/v1602359377/rwgi2xs3x8m1bjaq1z2d.jpg"
          alt="My logo"
          width="40"
          height="40"
        />
        <MyName />
      </div>
      <div className="HomeHeader-Text">
        <Title content="Hi!, I’m a backend developer. Web development" />
      </div>
    </div>
  );
};

export default HomeHeader;
