import React from "react";
import "../../assets/styles/containers/footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="Footer-info-container">
        <div className="Footer-Roles">
          <h3>Roles</h3>
          <p>Backend developer</p>
          <p>Frontend developer</p>
        </div>
        <div className="Footer-contact">
          <h3>Let's make something together</h3>
          <div className="Footer-btn-container">
            <a
              rel="noreferrer"
              href="http://twitter.com/rogeliosamuel21"
              target="_blank"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
      <div className="Footer-text-me-container">
        <p>{"Made with <3 by rogeliosamuel621"} </p>
      </div>
    </footer>
  );
};

export default Footer;
