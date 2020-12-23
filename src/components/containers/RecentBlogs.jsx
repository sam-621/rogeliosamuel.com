import React from 'react';
import '../../styles/containers/RecentBlogs.css';

import { Title } from '../atoms';
const RecentBlogs = () => {
  return (
    <section className="RecentBlogs">
      <Title title="Recent blogs" icon={0} />
    </section>
  );
};

export default RecentBlogs;
