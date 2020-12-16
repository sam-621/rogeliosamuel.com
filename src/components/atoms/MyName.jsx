import React, { useContext } from 'react';
import '../../styles/atoms/MyName.css';

import ColorTheme from '../../context/ColorTheme';
import MyLogo from '../../assets/img/myLogo.svg';
import { Link } from 'react-router-dom';

const MyName = () => {
  const { theme } = useContext(ColorTheme);
  const color = theme ? 'White' : 'Dark';
  return (
    <Link to="/" className="MyName">
      <img src={MyLogo} alt="Rogelio Samuel Logo" width="40px" height="40px" />
      <h1 className={`MyName-Text-${color}`}>Rogelio Samuel</h1>
    </Link>
  );
};

export default MyName;
