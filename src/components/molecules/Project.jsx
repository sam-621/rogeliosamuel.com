import React from 'react';
import '../../styles/molecules/project.css';

import GitHubIcon from '../../assets/img/code.svg';

const Project = () => {
  return (
    <article className="Project">
      <div className="Project-img">
        <img
          src="https://res.cloudinary.com/dnvp4s8pe/image/upload/v1608400402/My%20Website/AuthApp_ivdwwq.png"
          alt="Feature project img"
        />
      </div>
      <div className="Project-content">
        <div className="Project-content-text">
          <h4>Auth app</h4>
          <p>
            An app where you can login, see your data, modify your data and
            manage multiply user authentication
          </p>
        </div>
        <div className="Project-content-actions">
          <a href="" className="Project-content-actions-demo">
            View demo
          </a>
          <a href="" className="Project-content-actions-code">
            <img src={GitHubIcon} alt="Github icon" />
            Code
          </a>
        </div>
      </div>
    </article>
  );
};

export default Project;
