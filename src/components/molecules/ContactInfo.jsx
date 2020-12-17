import React, { useContext } from 'react';
import '../../styles/containers/ContactInfo.css';

import ColorTheme from '../../context/ColorTheme';

const ContactInfo = () => {
  const { theme } = useContext(ColorTheme);
  const color = theme ? 'White' : 'Dark';
  return (
    <div className={`Contact-Text-Container-${color} Contact-Text-Container`}>
      <h1>Let's make something together</h1>
      <p>
        If you’d like to make a project, talk about technology or just ask for
        help, fell free to contact me.
      </p>
      <p className={`Contact-Way-${color} Contact-Way`}>
        The better way to contact me is{' '}
        <a
          rel="noreferrer"
          target="_blank"
          href="https://twitter.com/rogeliosamuel21"
        >
          Twitter{' '}
        </a>
        And you can see my projects and how i work in{' '}
        <a
          rel="noreferrer"
          target="_blank"
          href="https://github.com/rogeliosamuel21"
        >
          GitHub
        </a>
      </p>
      <p content="I can speak english and spanish" />
    </div>
  );
};

export default ContactInfo;
