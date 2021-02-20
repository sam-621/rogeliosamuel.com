import React from 'react';
import '../../styles/containers/blogSection.css';

import { Title } from '../atoms';
import { Blog } from '../molecules';

const BlogSection = () => {
  return (
    <section className="BlogsSection">
      <div className="BlogSection-text">
        <Title title="Recent blogs" />
        <div className="BlogSection-text-blogs">
          <Blog />
          <Blog />
        </div>
        <div className="BlogSection-text-link">
          <a href="">See all blogs on devto -{'>'}</a>
        </div>
      </div>
      <div className="BlogSection-illustration">
        <img
          src="https://res.cloudinary.com/dnvp4s8pe/image/upload/v1613486259/My%20Website/blog_ef2vor.svg"
          alt="Blog illustration"
        />
      </div>
    </section>
  );
};

export default BlogSection;
