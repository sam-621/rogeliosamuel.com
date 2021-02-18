import React from 'react';
import '../../styles/atoms/primaryButton.css';
import { Link } from 'react-router-dom';

const PrimaryButton = ({ url, text }) => {
  return (
    <Link to={`/${url}`} className="PrimaryButton">
      {text}
    </Link>
  );
};

export default PrimaryButton;
