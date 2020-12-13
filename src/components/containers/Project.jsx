import React, { useContext } from 'react';
import ColorTheme from '../../context/ColorTheme';
import '../../styles/containers/Project.css';

const Project = ({
  projectImage,
  projectTitle,
  projectDescription,
  projectDemo,
  projectCode,
}) => {
  const { theme } = useContext(ColorTheme);
  const color = theme ? 'White' : 'Dark';
  return (
    <article className={`Project-${color} Project`}>
      <div className="Project-Image-Container">
        <img
          src={projectImage}
          alt={projectTitle}
          width="249px"
          height="118.79px"
          title={projectTitle}
        />
      </div>
      <div className="Project-Description">
        <h1>{projectTitle}</h1>
        <p>{projectDescription}</p>
        <div className="Project-Actions">
          <a
            rel="noreferrer"
            target="_blank"
            className="Project-Code-btn"
            href={projectCode}
          >
            Code
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            className={`Project-Demo-btn-${color} Project-Demo-btn`}
            href={projectDemo}
          >
            View demo
          </a>
        </div>
      </div>
    </article>
  );
};

export default Project;
