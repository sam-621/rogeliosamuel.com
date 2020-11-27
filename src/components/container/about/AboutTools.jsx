import React from 'react';
import '../../../assets/styles/containers/aboutTools.css';

import { Title } from '../../atoms';
import Tools from '../../../assets/img/tools.svg';
import commandLine from '../../../assets/img/commanLine.svg';
import Git from '../../../assets/img/git.svg';
import PostMan from '../../../assets/img/postman.svg';

const AboutTools = () => {
  return (
    <div className="About-Tools">
      <div className="AboutSkills-Title">
        <Title content="Tools" />
        <img src={Tools} alt="Tools icon" width="30px" height="30px" />
      </div>
      <div className="About-Tools-List">
        <div>
          <img src={Git} alt="GitHub" width="30px" height="30px" />
          <p>Git & GitHub</p>
        </div>
        <div>
          <img
            src={commandLine}
            alt="Command linen"
            width="30px"
            height="30px"
          />
          <p>Command line</p>
        </div>
        <div>
          <img src={PostMan} alt="PostMan" width="30px" height="30px" />
          <p>Postman</p>
        </div>
      </div>
    </div>
  );
};

export default AboutTools;
