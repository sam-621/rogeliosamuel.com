import React, { useContext } from 'react';
import '../../styles/molecules/Blog.css';

import ColorTheme from '../../context/ColorTheme';

const Blog = ({ img, title, date, url }) => {
  const { theme } = useContext(ColorTheme);
  const color = theme ? 'White' : 'Dark';
  return (
    <article className="Blog-article">
      <a href={url} target="_blank" className={`Blog Blog-${color}`}>
        <div className="Blog-image">
          <img src={img} alt="blog icon" width="60px" height="60px" />
        </div>
        <div className={`Blog-text Blog-text-${color}`}>
          <h2>{title}</h2>
          <p>{date}</p>
        </div>
      </a>
    </article>
  );
};

export default Blog;
