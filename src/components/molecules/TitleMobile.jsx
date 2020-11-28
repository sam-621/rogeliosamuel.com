import React from 'react';
import '../../styles/molecules/TitleMobile.css';

import { MyName, SwitcherTheme } from '../atoms/';

const TitleMobile = () => {
  return (
    <div className="TitleMobile">
      <MyName />
      <SwitcherTheme />
    </div>
  );
};

export default TitleMobile;
