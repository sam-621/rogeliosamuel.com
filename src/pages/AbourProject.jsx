import React from "react";
import { useParams } from "react-router-dom";

import Nav from "../containers/Nav";
//Technologies icon
import Node from "../assets/img/node-js.svg";
import react from "../assets/img/react-brands.svg";
import js from "../assets/img/js.svg";
import Webpack from "../assets/img/webpack.svg";
import MySQL from "../assets/img/mysql.svg";
import JobsListing from "../assets/img/jobs-listing.jpg";
import SocialMediaAPI from "../assets/img/SocialMedia-API.png";
import SafeContactsAPI from "../assets/img/safecontact-api.png";

const AboutProject = () => {
  const { projectID } = useParams();
  const techIcons = [Node, react, js, MySQL];
  const img = [SocialMediaAPI, SafeContactsAPI, JobsListing];

  return <Nav />;
};

export default AboutProject;
