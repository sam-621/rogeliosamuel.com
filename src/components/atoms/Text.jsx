import React from 'react';
import '../../assets/styles/atoms/text.css';

export const MyName = () => {
  return <h1 className="MyName">Rogelio Samuel</h1>;
};

export const GreenText = ({ content }) => {
  return (
    <a
      target="_blank"
      href="https://github.com/rogeliosamuel621"
      className="GreenText"
    >
      {content}
    </a>
  );
};

export const Title = ({ content }) => {
  return <h2 className="Title">{content}</h2>;
};

export const Description = ({ content }) => {
  return <p className="Description">{content}</p>;
};
