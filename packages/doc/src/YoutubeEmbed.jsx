import React from "react";
import PropTypes from "prop-types";
import "./components/styles.css";

const YoutubeEmbed = ({ link }) => {
  return (
    <div className="video-responsive">
      <iframe
        title="youtube video"
        width="750"
        height="422"
        src={link}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

YoutubeEmbed.propTypes = {
  link: PropTypes.string
};

YoutubeEmbed.defaultProps = {
  link: ""
};

export default YoutubeEmbed;
