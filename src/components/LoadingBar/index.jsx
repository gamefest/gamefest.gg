import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

function LoadingBar({ progress, animationDuration }) {
  const style = {
    marginLeft: `${(-1 + progress) * 100}%`,
    transitionDuration: `${animationDuration}ms`
  };

  return (
    <div className="loading-bar" style={style}>
      <span className="loading-bar--inner" />
    </div>
  );
}
export default LoadingBar;

LoadingBar.propTypes = {
  animationDuration: PropTypes.number.isRequired,
  progress: PropTypes.number.isRequired
};

LoadingBar.displayName = "LoadingBar";
