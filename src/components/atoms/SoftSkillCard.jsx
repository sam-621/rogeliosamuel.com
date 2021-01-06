import React, { useContext } from 'react';
import ColorTheme from '../../context/ColorTheme';
import '../../styles/atoms/SoftSkillCard.css';

const SoftSkillCard = ({ url, urlName, rol, title }) => {
  const { theme } = useContext(ColorTheme);
  const color = theme ? 'White' : 'Dark';
  return (
    <article className={`SoftSkillCard SoftSkillCard-${color}`}>
      <h3>{title}</h3>
      <div className={`SoftSkillCard-div SoftSkillCard-div-${color}`}>
        <p>{rol}:</p>
        <a href={url}>{urlName}</a>
      </div>
    </article>
  );
};

export default SoftSkillCard;
