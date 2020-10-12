import React from 'react';
import '../../../assets/styles/containers/aboutSkills.css';

import { Title } from '../../atoms';
import { FrontendSkills, BackendSkills } from '../../molecules';
import skills from '../../../assets/img/skills.svg';

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
    </section>
  );
};

export default AboutSkills;
