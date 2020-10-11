import React from 'react';
import '../../assets/styles/molecules/backendSkills.css';

import { Title } from '../atoms';
import Node from '../../assets/img/node-js.svg';
import MySQL from '../../assets/img/mysql.svg';

const BackendSkills = () => {
  return (
    <div className="BackendSkills">
      <div className="BackendSkills-Title">
        <Title content="Backend" />
        <hr />
      </div>
      <div className="BackendSkills-Icons">
        <img
          width="40px"
          height="40px"
          src={Node}
          alt="Nodejs"
          title="Nodejs"
        />
        <img width="40px" height="40px" src={MySQL} alt="MySQL" title="MySQL" />
      </div>
    </div>
  );
};

export default BackendSkills;
