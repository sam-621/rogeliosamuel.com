import React, { useContext } from 'react';
import ColorTheme from '../../context/ColorTheme';
import '../../styles/atoms/SkillCard.css';

const SkillCard = ({ img, title, skillName }) => {
  const { theme } = useContext(ColorTheme);
  const color = theme ? 'White' : 'Dark';
  return (
    <article className={`SkillCard-${color} SkillCard`}>
      <img src={img} alt={title} width="60px" height="60px" />
      {/* <h3 className={`SkillC  ard-h3`}>{skillName}</h3> */}
    </article>
  );
};

export default SkillCard;
