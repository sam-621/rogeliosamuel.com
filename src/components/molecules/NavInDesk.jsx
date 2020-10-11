import React from 'react';
import '../../assets/styles/molecules/navInDesk.css';
import { Link } from 'react-router-dom';

const NavInDesk = () => {
  return (
    <div className="NavInDesk">
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default NavInDesk;
