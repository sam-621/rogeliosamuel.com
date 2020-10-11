import React from 'react';
import '../../assets/styles/containers/aboutSkills.css';

import { Title } from '../atoms';
import { FrontendSkills, BackendSkills } from '../molecules';
import skills from '../../assets/img/skills.svg';
import Tools from '../../assets/img/tools.svg';
import commandLine from '../../assets/img/commanLine.svg';
import Git from '../../assets/img/git.svg';
import PostMan from '../../assets/img/postman.svg';

const AboutSkills = () => {
  return (
    <section className="AboutSkills">
      <div className="About-Skills">
        <div className="AboutSkills-Title">
          <Title content="Skills" />
          <img src={skills} alt="Skills icon" width="30px" height="30px" />
        </div>
        <div className="Skills-icons">
          <FrontendSkills />
          <BackendSkills />
        </div>
      </div>
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
    </section>
  );
};

export default AboutSkills;
