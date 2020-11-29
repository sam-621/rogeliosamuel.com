import React, { useContext } from 'react';
import '../../styles/atoms/Text.css';

import Skills from '../../assets/img/skills.svg';
import EmailIconGreen from '../../assets/img/mailGreen.svg';
import ColorTheme from '../../context/ColorTheme';
import EmailIconBlue from '../../assets/img/mailBlue.svg';
import SkillsBlue from '../../assets/img/skillsBlue.svg';

const Title = ({ title, icon }) => {
  const { theme, setTheme } = useContext(ColorTheme);
  const color = theme ? 'White' : 'Dark';
  const img = [
    { icon: theme ? SkillsBlue : Skills, title: 'skill icon' },
    { icon: theme ? EmailIconBlue : EmailIconGreen, title: 'email icon' },
  ];
  return (
    <div className="Title">
      <h2 className={`Title-h2-${color}`}>{title}</h2>
      <img
        className={`Title-img-${color}`}
        src={img[icon].icon}
        alt={img[icon].title}
        width="30px"
        height="30px"
      />
    </div>
  );
};

export { Title };
