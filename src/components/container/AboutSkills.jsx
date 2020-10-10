import React from 'react';
import '../../assets/styles/containers/aboutSkills.css';

import { Title } from '../atoms';
import skills from '../../assets/img/skills.svg';
import Tools from '../../assets/img/tools.svg';
import JS from '../../assets/img/js.svg';
import react from '../../assets/img/react-brands.svg';
import Webpack from '../../assets/img/webpack.svg';
import Node from '../../assets/img/node-js.svg';
import Git from '../../assets/img/git.svg';
import MySQL from '../../assets/img/mysql.svg';
import commandLine from '../../assets/img/commanLine.svg';
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
          <img
            width="40px"
            height="40px"
            src={JS}
            alt="Javascript"
            title="Javascript"
          />
          <img
            width="40px"
            height="40px"
            src={react}
            alt="React"
            title="React"
          />
          <img
            width="40px"
            height="40px"
            src={Webpack}
            alt="Webpack"
            title="Webpack"
          />
          <img
            width="40px"
            height="40px"
            src={Node}
            alt="Nodejs"
            title="Nodejs"
          />
          <img width="40px" height="40px" src={Git} alt="Git" title="Git" />
          <img
            width="40px"
            height="40px"
            src={MySQL}
            alt="MySQL"
            title="MySQL"
          />
        </div>
      </div>
      <div className="About-Tools">
        <div className="AboutSkills-Title">
          <Title content="Tools" />
          <img src={Tools} alt="Tools icon" width="30px" height="30px" />
        </div>
        <div className="About-Tools-List">
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
