import React from 'react';
import '../../assets/styles/molecules/project.css';

import { Title, Description } from '../atoms';

const Project = ({
  projectImage,
  projectTitle,
  projectDescription,
  projectDemo,
  projectCode,
}) => {
  return (
    <article className="Project">
      <div className="Project-Image-Container">
        <img
          src={projectImage}
          alt={projectTitle}
          width="249px"
          height="118.85px"
        />
      </div>
      <div className="Project-Description">
        <Title content={projectTitle} />
        <Description content={projectDescription} />
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
            className="Project-Demo-btn"
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
