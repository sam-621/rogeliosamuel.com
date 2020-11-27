import React from 'react';
import '../../assets/styles/molecules/myNameHeder.css';
import { Link } from 'react-router-dom';

const MyNameHeader = () => {
  return (
    <div className="MyNameHeader-Container">
      <Link to="/" className="MyNameHeader-Logo">
        <img
          src="https://res.cloudinary.com/dnvp4s8pe/image/upload/v1605550009/My%20Website/pltdoxjom4pvhfqwopwp.jpg"
          alt="My logo"
          width="40"
          height="40"
        />
        <h1 className="MyName">Rogelio Samuel</h1>
      </Link>
      <div className="NavInDesk">
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link
          className="MyNameHeader-Projects"
          style={{ color: '#00c58e' }}
          to="/projects"
        >
          Projects
        </Link>
      </div>
    </div>
  );
};

export default MyNameHeader;
