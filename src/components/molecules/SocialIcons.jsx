import React from 'react';
import '../../styles/molecules/socialIcons.css';

import TwitterIcon from '../../assets/img/twitterBlue.svg';
import MailToIcon from '../../assets/img/mailBlue.svg';
import GitIcon from '../../assets/img/githubBlue.svg';
import TelegramIconBlue from '../../assets/img/telegram-blue.svg';

const SocialIcons = () => {
  return (
    <div className="Hero-content-links">
      <a
        rel="noreferrer"
        target="_blank"
        href="https://twitter.com/rogeliosamuel21"
      >
        <img
          src={TwitterIcon}
          alt="Twitter icon"
          title="Twitter"
          width="40px"
          height="40px"
        />
      </a>
      <a rel="noreferrer" target="_blank" href="#">
        <img
          src={MailToIcon}
          alt="Email icon"
          title="Mail"
          width="40px"
          height="40px"
        />
      </a>
      <a
        rel="noreferrer"
        target="_blank"
        href="https://github.com/rogeliosamuel621"
      >
        <img
          src={GitIcon}
          alt="Github icon"
          title="Github"
          width="40px"
          height="40px"
        />
      </a>
      <a rel="noreferrer" target="_blank" href="https://t.me/rogeliosamuel621">
        <img
          src={TelegramIconBlue}
          alt="Telegram icon"
          title="Telegram"
          width="40px"
          height="40px"
        />
      </a>
    </div>
  );
};

export default SocialIcons;
