import React from 'react';
import '../../styles/atoms/title.css';

const Title = ({ title }) => {
  return (
    <div className="Title">
      <hr />
      <h2>{title}</h2>
    </div>
  );
};

const TitleRight = ({ title }) => {
  return (
    <div className="TitleRight Title">
      <h2>{title}</h2>
      <hr />
    </div>
  );
};

const TitleLeft = ({ title }) => {
  return (
    <div className="TitleLeft Title">
      <hr />
      <h2>{title}</h2>
    </div>
  );
};
export { TitleLeft, TitleRight, Title };
