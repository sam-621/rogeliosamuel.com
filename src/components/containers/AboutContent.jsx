import React from 'react';
import { skills } from '../../assets/skills';
import '../../styles/containers/aboutContent.css';
import { Me } from '../atoms';
import { Skill } from '../molecules';

const AboutContent = () => {
  return (
    <main className="AboutContent">
      <div className="AboutContent-first">
        <Me />
        <div>
          <h1>Hello im Rogelio Samuel</h1>
          <p>
            Web developer, intern at @EDteam, MERN stack. Always learning and
            open to working with other people.
          </p>
        </div>
      </div>
      <div className="AboutContent-whoAmI">
        <h2>Who am i?</h2>
        <p>
          A developer from mexico who likes math and programming, im 18 years
          old, currently im learning web development. <br /> <br /> I enjoy
          teaching my knowledge and working with other people. i have a{' '}
          <a href="https://dev.to/rogeliosamuel621" target="_blank">
            blog
          </a>{' '}
          and also write code with friends in{' '}
          <a href="https://github.com/trexcodes" target="_blank">
            T-Rex Codes
          </a>
        </p>
      </div>
      <div className="AboutContent-skills">
        <h2>Tecnical skills</h2>
        <p>
          I work with{' '}
          <a
            href="https://platzi.com/blog/que-es-mern-stack-javascript/"
            target="_blank"
          >
            MERN
          </a>{' '}
          stack but also i know other tecnologies and other skills thant just
          coding
        </p>
        <div className="AboutContent-skills-skill">
          {skills.map((skill, index) => {
            return <Skill key={index} icon={skill.icon} name={skill.name} />;
          })}
          <p>
            You can verify this skills seeing my{' '}
            <a href="https://github.com/rogeliosamuel621" target="_blank">
              projects
            </a>{' '}
          </p>
        </div>
      </div>
      <div className="AboutContent-interests">
        <h2>Interests</h2>
        <p>
          out of coding, maths and learning, i like play videogames which has
          history, i watch streams and i practice jiu-jitsu. I like chemistry
          and psychology.
        </p>
      </div>
    </main>
  );
};

export default AboutContent;
