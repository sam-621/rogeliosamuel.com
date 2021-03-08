import React from 'react';
import '../../styles/containers/blogSection.css';

import { Title } from '../atoms';
import { Blog } from '../molecules';
import { blogs } from '../../assets/blogs';

const BlogSection = () => {
  return (
    <section className="BlogsSection">
      <div className="BlogSection-text">
        <Title title="Featured blogs" />
        <div className="BlogSection-text-blogs">
          {blogs.map((blog, index) => {
            return (
              <Blog
                url={blog.url}
                date={blog.date}
                title={blog.title}
                icon={blog.icon}
                key={index}
              />
            );
          })}
        </div>
        <div className="BlogSection-text-link">
          <a
            href="https://dev.to/rogeliosamuel621"
            rel="noreferrer"
            target="_blank"
          >
            See all blogs on devto -{'>'}
          </a>
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
