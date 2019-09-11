import React from "react";
import PropTypes from "prop-types";
import githubIcon from "./components/images/github.svg";
import "./components/styles.css";

const GithubLink = ({ link, text }) => (
  <a href={link} className="githubSection">
    <img className="githubIcon" src={githubIcon} alt="github" />
    {text}
  </a>
);

GithubLink.propTypes = {
  link: PropTypes.string,
  text: PropTypes.string
};

GithubLink.defaultProps = {
  link: "",
  text: ""
};

export default GithubLink;
