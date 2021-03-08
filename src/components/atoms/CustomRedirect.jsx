import React from 'react';
import { Redirect } from 'react-router-dom';

const CustomRedirect = ({ to_ = '/portfolio' }) => {
  return (
    <>
      <Redirect to={to_} />
    </>
  );
};

export default CustomRedirect;
