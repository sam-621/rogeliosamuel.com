import React from 'react';
import '../../assets/styles/molecules/homeHeader.css';

import { Title, MyName } from '../atoms/';
import MyLogo from '../../assets/img/Logo.jpg';

const HomeHeader = () => {
  return (
    <div className="HomeHeader">
      <div className="HomeHeader-Logo">
        <img src={MyLogo} alt="My logo" width="40" height="40" />
        <MyName />
      </div>
      <div className="HomeHeader-Text">
        <Title content="Hi!, I’m a backend developer. Web development" />
      </div>
    </div>
  );
};

export default HomeHeader;
