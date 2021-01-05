import React, { useContext } from 'react';
import ColorTheme from '../../context/ColorTheme';
import '../../styles/molecules/SubTitle.css';

const SubTitle = ({ subtitle }) => {
  const { theme } = useContext(ColorTheme);
  const color = theme ? 'White' : 'Dark';
  return (
    <div className={`SubTitle SubTitle-${color}`}>
      <h3>{subtitle}</h3>
      <hr />
    </div>
  );
};

export default SubTitle;
