import React from 'react';
import '../../assets/styles/molecules/featuredProject.css';

import { Title, Description } from '../atoms';

const FeaturedProject = ({
  projectImage,
  projectTitle,
  projectDescription,
  projectDemo,
  projectCode,
}) => {
  return (
    <article className="FeaturedProject">
      <div className="FeaturedProject-Image-Container">
        <img
          src={projectImage}
          alt={projectTitle}
          width="249px"
          height="118.79px"
        />
      </div>
      <div className="FeaturedProject-Description">
        <Title content={projectTitle} />
        <Description content={projectDescription} />
        <div className="FeaturedProject-Actions">
          <a
            rel="noreferrer"
            target="_blank"
            className="FeaturedProject-Code-btn"
            href={projectCode}
          >
            Code
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            className="FeaturedProject-Demo-btn"
            href={projectDemo}
          >
            View demo
          </a>
        </div>
      </div>
    </article>
  );
};

export default FeaturedProject;
