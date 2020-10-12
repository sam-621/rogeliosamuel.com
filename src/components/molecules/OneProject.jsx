import React from 'react';
import '../../assets/styles/molecules/oneProject.css';

import { Title, Description } from '../atoms';

const OneProject = ({
  projectImage,
  projectTitle,
  projectDescription,
  projectDemo,
  projectCode,
}) => {
  return (
    <article className="OneProject">
      <div className="OneProject-Image-Container">
        <img
          src={projectImage}
          alt={projectTitle}
          width="249px"
          height="118.79px"
        />
      </div>
      <div className="OneProject-Description">
        <Title content={projectTitle} />
        <Description content={projectDescription} />
        <div className="OneProject-Actions">
          <a
            rel="noreferrer"
            target="_blank"
            className="OneProject-Code-btn"
            href={projectCode}
          >
            Code
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            className="OneProject-Demo-btn"
            href={projectDemo}
          >
            View demo
          </a>
        </div>
      </div>
    </article>
  );
};

export default OneProject;
