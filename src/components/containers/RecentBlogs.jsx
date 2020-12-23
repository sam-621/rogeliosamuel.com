import React, { useContext } from 'react';
import '../../styles/containers/RecentBlogs.css';

import { Title } from '../atoms';
import { Blog } from '../molecules';
import { blogs } from '../../assets/blogs';
const RecentBlogs = () => {
  return (
    <section className="RecentBlogs">
      <Title title="Recent blogs" icon={0} />
      <div className="RecentBlogs-blogs">
        {blogs.map((blog) => {
          return (
            <Blog
              title={blog.title}
              date={blog.date}
              img={blog.icon}
              url={blog.url}
            />
          );
        })}
      </div>
    </section>
  );
};

export default RecentBlogs;
