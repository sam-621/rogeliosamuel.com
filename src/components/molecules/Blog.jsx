import React from 'react';
import '../../styles/molecules/blog.css';

const Blog = () => {
  return (
    <article className="Blog">
      <div className="Blog-icon">
        <img
          src="https://res.cloudinary.com/dnvp4s8pe/image/upload/v1606665660/My%20Website/webpack_xqbcwg.svg"
          alt="Webpack icon"
        />
      </div>
      <div className="Blog-text">
        <h3>React without create-react-app and pure CSS</h3>
        <p>14 December 2020</p>
      </div>
    </article>
  );
};

export default Blog;
