import React from 'react';
import '../../styles/molecules/featureProject.css';

import GitHubIcon from '../../assets/img/code.svg';

const FeatureProject = () => {
  return (
    <article className="FeatureProject">
      <div className="FeatureProject-img">
        <img
          src="https://res.cloudinary.com/dnvp4s8pe/image/upload/v1608400402/My%20Website/AuthApp_ivdwwq.png"
          alt="Feature project img"
        />
      </div>
      <div className="FeatureProject-content">
        <div className="FeatureProject-content-text">
          <h4>Auth app</h4>
          <p>
            An app where you can login, see your data, modify your data and
            manage multiply user authentication
          </p>
        </div>
        <div className="FeatureProject-content-actions">
          <a href="" className="FeatureProject-content-actions-demo">
            View demo
          </a>
          <a href="" className="FeatureProject-content-actions-code">
            <img src={GitHubIcon} alt="Github icon" />
            Code
          </a>
        </div>
      </div>
    </article>
  );
};

export default FeatureProject;
