import React from 'react';
import '../../styles/molecules/Blog.css';

const Blog = ({ img, title, date, url }) => {
  return (
    <article>
      <a href={url} target="_blank" className="Blog">
        <div className="Blog-image">
          <img src={img} alt="blog icon" width="60px" height="60px" />
        </div>
        <div className="Blog-text">
          <h2>{title}</h2>
          <p>{date}</p>
        </div>
      </a>
    </article>
  );
};

export default Blog;
