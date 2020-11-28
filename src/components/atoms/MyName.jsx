import React, { useContext } from 'react';
import '../../styles/atoms/MyName.css';

import ColorTheme from '../../context/ColorTheme';
import { Link } from 'react-router-dom';

const MyName = () => {
  const { theme } = useContext(ColorTheme);
  const color = theme ? 'White' : 'Dark';
  return (
    <Link to="/" className={`MyName`}>
      <img
        src="https://res.cloudinary.com/dnvp4s8pe/image/upload/v1605550009/My%20Website/pltdoxjom4pvhfqwopwp.jpg"
        alt="Rogelio Samuel Logo"
        width="40px"
        height="40px"
      />
      <h1 className={`MyName-Text-${color}`}>Rogelio Samuel</h1>
    </Link>
  );
};

export default MyName;
