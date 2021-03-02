import React from 'react';
import '../../styles/molecules/blog.css';

const Blog = ({ url, icon, date, title }) => {
  return (
    <article>
      <a target="_blank" rel="noreferrer" href={url} className="Blog">
        <div className="Blog-icon">
          <img src={icon} alt={title} />
        </div>
        <div className="Blog-text">
          <h3>{title}</h3>
          <p>{date}</p>
        </div>
      </a>
    </article>
  );
};

export default Blog;
