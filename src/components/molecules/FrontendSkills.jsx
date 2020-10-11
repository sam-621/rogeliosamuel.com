import React from 'react';
import '../../assets/styles/molecules/frontendSkills.css';

import { Title } from '../atoms';
import JS from '../../assets/img/js.svg';
import react from '../../assets/img/react-brands.svg';
import Webpack from '../../assets/img/webpack.svg';

const FrontendSkills = () => {
  return (
    <div className="Frontend-skills">
      <div>
        <Title content="Frontend" />
        <hr />
      </div>
      <div className="Frontend-icons">
        <img
          width="40px"
          height="40px"
          src={JS}
          alt="Javascript"
          title="Javascript"
        />
        <img width="40px" height="40px" src={react} alt="React" title="React" />
        <img
          width="40px"
          height="40px"
          src={Webpack}
          alt="Webpack"
          title="Webpack"
        />
      </div>
    </div>
  );
};

export default FrontendSkills;
