import React, { useContext } from 'react';
import '../../styles/atoms/SocialIcons.css';
import '../../styles/molecules/Hero.css';

import ColorTheme from '../../context/ColorTheme';
import TwitterIcon from '../../assets/img/twitterBlue.svg';
import MailToIcon from '../../assets/img/mailBlue.svg';
import GitIcon from '../../assets/img/githubBlue.svg';
import TwitterIconGreen from '../../assets/img/twitterGreen.svg';
import MailToIconGreen from '../../assets/img/mailGreen.svg';
import GitIconGreen from '../../assets/img/githubGreen.svg';
import TelegramIconBlue from '../../assets/img/telegram-blue.svg';
import TelegramIconGreen from '../../assets/img/telegram-green.svg';

const SocialIcons = () => {
  const { theme, setTheme } = useContext(ColorTheme);
  return (
    <div className="Hero-content-links">
      <a
        rel="noreferrer"
        target="_blank"
        href="https://twitter.com/rogeliosamuel21"
      >
        <img
          src={theme ? TwitterIcon : TwitterIconGreen}
          alt="Twitter icon"
          title="Twitter"
          width="40px"
          height="40px"
        />
      </a>
      <a rel="noreferrer" target="_blank" href="#">
        <img
          src={theme ? MailToIcon : MailToIconGreen}
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
          src={theme ? GitIcon : GitIconGreen}
          alt="Github icon"
          title="Github"
          width="40px"
          height="40px"
        />
      </a>
      <a rel="noreferrer" target="_blank" href="https://t.me/rogeliosamuel621">
        <img
          src={theme ? TelegramIconBlue : TelegramIconGreen}
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
