import React from "react";
import Love from "../assets/img/love.svg";
import "../assets/styles/containers/footer.css";

const Footer = () => {
  return (
    <footer>
      <h2>
        Made with <img src={Love} alt="" width="30" height="30" /> by
        rogeliosamuel621
      </h2>
    </footer>
  );
};

export default Footer;
