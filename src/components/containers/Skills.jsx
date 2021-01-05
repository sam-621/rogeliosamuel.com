import React from 'react';
import '../../styles/containers/Skills.css';

import { Title, SkillCard } from '../atoms/';
import { SubTitle } from '../molecules/';
import { skills } from '../../assets/skills';

const Skills = () => {
  return (
    <section className="Skills">
      <Title icon={0} title="Skills" />
      <div className="Skills-Technical">
        <SubTitle subtitle="Technical skills" />
        <div className="Skills-icons">
          {skills.map((skill, index) => {
            return (
              <SkillCard
                key={index}
                img={skill.icon}
                skillName={skill.name}
                title={skill.title}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
