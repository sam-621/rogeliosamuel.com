import React from 'react';
import '../../styles/containers/blogs.css';

import { Title } from '../atoms';
import { Blog } from '../molecules';

const Blogs = () => {
  return (
    <section className="BlogsSection">
      <div>
        <img
          src="https://res.cloudinary.com/dnvp4s8pe/image/upload/v1613486259/My%20Website/blog_ef2vor.svg"
          alt="Blog illustration"
        />
      </div>
      <div className="BlogSection-content">
        <Title title="Recent blogs" />
        <div className="BlogSection-content-blog">
          <Blog />
          <Blog />
        </div>

        <div className="BlogSection-content-link">
          <a href="">See all blogs on devto -{'>'}</a>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
