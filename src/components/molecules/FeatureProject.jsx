import React from 'react';

import GitHubIcon from '../../assets/img/code.svg';

const FeatureProject = () => {
  return (
    <article className="FeatureProject">
      <div className="FeatureProject-img"></div>
      <div className="FeatureProject-content">
        <div className="FeatureProject-content-text">
          <h4>Auth app</h4>
          <p>
            An app where you can login, see your data, modify your data and
            manage multiply user authentication
          </p>
        </div>
        <div className="FeatureProject-content-actions">
          <a href="">View demo</a>
          <a href="">
            <img src={GitHubIcon} alt="Github icon" />
            Code
          </a>
        </div>
      </div>
    </article>
  );
};

export default FeatureProject;
