import React from 'react';
import '../../styles/molecules/SubTitle.css';

const SubTitle = ({ subtitle }) => {
  return (
    <div className="SubTitle">
      <h3>{subtitle}</h3>
      <hr />
    </div>
  );
};

export default SubTitle;
