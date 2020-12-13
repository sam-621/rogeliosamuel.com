import React, { useContext } from 'react';
import ColorTheme from '../../context/ColorTheme';
import '../../styles/atoms/SkillCard.css';

const SkillCard = ({ img, title }) => {
  const { theme } = useContext(ColorTheme);
  const color = theme ? 'White' : 'Dark';
  return (
    <article className={`SkillCard-${color} SkillCard`}>
      <img src={img} alt={title} width="60px" height="60px" title={title} />
    </article>
  );
};

export default SkillCard;
