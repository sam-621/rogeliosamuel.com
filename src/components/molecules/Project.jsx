import React from 'react';
import '../../styles/molecules/project.css';

import GitHubIcon from '../../assets/img/code.svg';
import { Link } from 'react-router-dom';

const Project = () => {
  return (
    <article className="Project">
      <div className="Project-image">
        <img
          src="https://res.cloudinary.com/dnvp4s8pe/image/upload/v1608400402/My%20Website/AuthApp_ivdwwq.png"
          alt="Project image"
        />
      </div>
      <div className="Project-text">
        <h1>Auth app</h1>
        <p>
          An app where you can login, see your data, modify your data and manage
          multiply user authentication
        </p>
        <div className="Project-text-action">
          <a href="">demo</a>
          <a href="">Code</a>
        </div>
      </div>
    </article>
  );
};

export default Project;
