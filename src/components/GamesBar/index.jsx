import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./style.scss";

function GamesBar({ className, show, ...rest }) {
  return (
    <div className={classNames("games-bar glass", className)} {...rest}>
      {show ? null : <h5>Games to be announced</h5>}
    </div>
  );
}

export default GamesBar;

GamesBar.propTypes = {
  show: PropTypes.bool,
  className: PropTypes.string
};

GamesBar.defaultProps = {
  show: true,
  className: null
};
