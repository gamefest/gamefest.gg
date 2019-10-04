import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./style.scss";

function Lead({ className, strong, children, ...rest }) {
  return (
    <div
      className={classNames(className, "text-lead", { "lead-strong": strong })}
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
  ]),
  strong: PropTypes.bool
};

Lead.defaultProps = {
  className: "",
  strong: false
};

Lead.displayName = "Lead";
