import React from 'react';
import '../../styles/molecules/skills.css';

const Skill = ({ icon, name }) => {
  return (
    <div className="Skill">
      <img src={icon} alt={`${icon} icon`} />
      <p>{name}</p>
    </div>
  );
};

export default Skill;
