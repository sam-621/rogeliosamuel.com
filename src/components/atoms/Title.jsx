import React from 'react';
import '../../styles/atoms/title.css';

const Title = ({ title }) => {
  return (
    <div className="Title">
      <h2>{title}</h2>
      <hr />
    </div>
  );
};

export default Title;
