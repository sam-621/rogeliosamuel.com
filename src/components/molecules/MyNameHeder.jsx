import React from 'react';
import '../../assets/styles/molecules/myNameHeder.css';
import { Link } from 'react-router-dom';

import { MyName } from '../atoms/';
import { NavInDesk } from '../molecules/';

const MyNameHeader = () => {
  return (
    <div className="MyNameHeader-Container">
      <Link to="/" className="MyNameHeader-Logo">
        <img
          src="https://res.cloudinary.com/dnvp4s8pe/image/upload/v1602359377/rwgi2xs3x8m1bjaq1z2d.jpg"
          alt="My logo"
          width="40"
          height="40"
        />
        <MyName />
      </Link>
      <NavInDesk />
    </div>
  );
};

export default MyNameHeader;
