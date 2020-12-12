import React, { useContext } from 'react';
import ColorTheme from '../../context/ColorTheme';
import '../../styles/containers/Project.css';

const Project = ({ title, image }) => {
  const { theme } = useContext(ColorTheme);
  const color = theme ? 'White' : 'Dark';
  return (
    <article className="Project">
      <div className={`Project-title-${color} Project-title`}>
        <h1>{title}</h1>
      </div>
      <div className="Project-image">
        <img src={image} alt="Project image" width="249px" height="118.79px" />
      </div>
    </article>
  );
};

export default Project;
