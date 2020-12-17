import React, { useContext } from 'react';
import '../../styles/atoms/BlogLink.css';
import ColorTheme from '../../context/ColorTheme';

const BlogLink = () => {
  const { theme } = useContext(ColorTheme);
  const color = theme ? 'White' : 'Dark';

  return (
    <a
      rel="noreferrer"
      className={`TitleMobile-right-a-${color} TitleMobile-right-a`}
      href="https://dev.to/rogeliosamuel21"
      target="_blank"
    >
      Blog
    </a>
  );
};

export default BlogLink;
