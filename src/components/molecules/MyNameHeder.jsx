import React from 'react';
import '../../assets/styles/molecules/myNameHeder.css';

import { MyName } from '../atoms/';

const MyNameHeader = () => {
  return (
    <div className="HomeHeader-Logo">
      <img
        src="http://res.cloudinary.com/dnvp4s8pe/image/upload/v1602359377/rwgi2xs3x8m1bjaq1z2d.jpg"
        alt="My logo"
        width="40"
        height="40"
      />
      <MyName />
    </div>
  );
};

export default MyNameHeader;
