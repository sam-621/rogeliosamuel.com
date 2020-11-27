import React from 'react';
import '../../../assets/styles/containers/aboutHomeSection.css';
import { Link } from 'react-router-dom';

const AboutHomeSection = () => {
  return (
    <>
      <section className="AboutHomeSection">
        <div className="AboutHomeSection-Illustration">
          <img
            src="https://res.cloudinary.com/dnvp4s8pe/image/upload/v1605650812/My%20Website/fvflzqcfkgzuhunlrdwj.svg"
            alt="About Me Illustration"
            width="579px"
            height="359px"
          />
        </div>
        <div className="AboutHomeSection-Description-Container">
          <h1>ABOUT</h1>
          <p className="AboutHomeSection-Description">
            Self-taught programmer who is always <strong>learning</strong> and
            open to working with other people. <br /> <br /> I mostly work with{' '}
            <strong>MERN stack</strong>, but also i work with MySQL or Java.
          </p>
          <Link to="/about">About me</Link>
        </div>
      </section>
      <hr className="AboutHomeSection-HR" />
    </>
  );
};

export default AboutHomeSection;
