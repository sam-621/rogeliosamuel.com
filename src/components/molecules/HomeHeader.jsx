import React from 'react';
import '../../assets/styles/molecules/homeHeader.css';

import { MyNameHeder, NavInDesk } from '../molecules';

const HomeHeader = () => {
  return (
    <div className="HomeHeader">
      <div className="HomeHeader-MyName-Container">
        <MyNameHeder />
        <NavInDesk />
      </div>
    </div>
  );
};

export default HomeHeader;
