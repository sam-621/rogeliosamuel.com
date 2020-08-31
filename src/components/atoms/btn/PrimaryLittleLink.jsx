import React from "react";
import "../../../assets/styles/atoms/btn/primaryLittleLink.css";
import { Link } from "react-router-dom";

const PrimaryLittleLink = ({ Url, Content }) => {
  return (
    <Link className="PrimaryLittleLink" to={Url}>
      {Content}
    </Link>
  );
};

export default PrimaryLittleLink;
