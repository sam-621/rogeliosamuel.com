import React from 'react';
import '../../styles/molecules/socialIcons.css';

import TwitterIcon from '../../assets/img/twitterBlue.svg';
import GitIcon from '../../assets/img/githubBlue.svg';
import TelegramIconBlue from '../../assets/img/telegram-blue.svg';

const SocialIcons = () => {
  return (
    <div className="SocialIcons">
      <a
        rel="noreferrer"
        target="_blank"
        href="https://twitter.com/rogeliosamuel21"
      >
        <img src={TwitterIcon} alt="Twitter icon" title="Twitter" />
      </a>
      <a
        rel="noreferrer"
        target="_blank"
        href="https://github.com/rogeliosamuel621"
      >
        <img src={GitIcon} alt="Github icon" title="Github" />
      </a>
      <a rel="noreferrer" target="_blank" href="https://t.me/rogeliosamuel621">
        <img src={TelegramIconBlue} alt="Telegram icon" title="Telegram" />
      </a>
    </div>
  );
};

export default SocialIcons;
