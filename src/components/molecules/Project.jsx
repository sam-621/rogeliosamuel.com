import React from 'react';
import '../../styles/molecules/project.css';

import GitHubIcon from '../../assets/img/code.svg';
import { Link } from 'react-router-dom';

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
          <a href={demo}>demo</a>
          <a href={repo}>Code</a>
        </div>
      </div>
    </article>
  );
};

export default Project;
