import React from 'react';
import '../../styles/molecules/project.css';

const Project = ({ img, title, description, repo, demo }) => {
  return (
    <article className="Project">
      <div className="Project-image">
        <img src={img} alt={title} />
      </div>
      <div className="Project-text">
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="Project-text-action">
          <a href={demo} target="_blank" rel="noreferrer">
            demo
          </a>
          <a href={repo} target="_blank" rel="noreferrer">
            Code
          </a>
        </div>
      </div>
    </article>
  );
};

export default Project;
