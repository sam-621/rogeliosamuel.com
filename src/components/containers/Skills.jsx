import React from 'react';
import '../../styles/containers/Skills.css';

import { Title, SkillCard, SoftSkillCard } from '../atoms/';
import { SubTitle } from '../molecules/';
import { skills, softSkills } from '../../assets/skills';

const Skills = () => {
  return (
    <section className="Skills">
      <Title icon={0} title="Skills" />
      <div className="Skills-Soft">
        <SubTitle subtitle="Soft skills" />
        <div className="Skills-soft-icons">
          {softSkills.map((skill, index) => {
            return (
              <SoftSkillCard
                rol={skill.rol}
                title={skill.name}
                url={skill.url}
                urlName={skill.urlName}
                key={index}
              />
            );
          })}
        </div>
      </div>

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
