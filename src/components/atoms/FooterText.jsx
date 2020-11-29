import React, { useContext } from 'react';
import '../../styles/atoms/FooterText.css';
import ColorTheme from '../../context/ColorTheme';

const FooterText = () => {
  const { theme } = useContext(ColorTheme);
  const color = theme ? 'White' : 'Dark';
  return (
    <footer className={`Footer`}>
      <p className={`Footer-p-${color}`}>
        Made with {'<3'} by @rogeliosamuel21
      </p>
    </footer>
  );
};

export default FooterText;
