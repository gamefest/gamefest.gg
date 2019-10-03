import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./style.scss";

function Lead({ className, children, ...rest }) {
  return (
    <div
      className={classNames(className, "text-lead")}
      children={children}
      {...rest}
    />
  );
}

export default Lead;

Lead.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
};

Lead.defaultProps = {
  className: ""
}

Lead.displayName = "Lead";
