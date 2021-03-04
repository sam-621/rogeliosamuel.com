import React from 'react';
import '../../styles/containers/aboutContent.css';
import { Me } from '../atoms';

const AboutContent = () => {
  return (
    <main className="AboutContent">
      <div className="AboutContent-first">
        <Me />
        <h1>Hello im Rogelio Samuel</h1>
        <p>
          Web developer, intern at EDteam, MERN stack. Always learning and open
          to working with other people.
        </p>
      </div>
    </main>
  );
};

export default AboutContent;
