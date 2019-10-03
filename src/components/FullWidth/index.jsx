import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Container from "components/Container";

import "./style.scss";

function FullWidth({ style, className, container, children }) {
  return (
    <div
      className={classNames(className, "full-width")}
      style={style}
      children={container ? <Container children={children} /> : children}
    />
  );
}

export default FullWidth;

FullWidth.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  container: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
};

FullWidth.defaultProps = {
  style: {},
  className: "",
  container: false
};
