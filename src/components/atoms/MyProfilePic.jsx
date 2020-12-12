import React, { useContext } from 'react';
import '../../styles/atoms/MyProfilePic.css';

import ColorTheme from '../../context/ColorTheme';

const MyProfilePic = () => {
  const { theme, setTheme } = useContext(ColorTheme);
  const color = theme ? 'White' : 'Dark';

  return (
    <div className="MyProfilePic">
      <img
        className={`Hero-hero-img-${color}`}
        src="https://res.cloudinary.com/dnvp4s8pe/image/upload/v1605650225/My%20Website/lwzhs8kdvhersxmxw3hd.svg"
        alt="Rogelio Samuel photo"
        width="250px"
        height="256,73px"
      />
    </div>
  );
};

export default MyProfilePic;
