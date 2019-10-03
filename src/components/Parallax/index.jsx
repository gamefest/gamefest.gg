import React from "react";
import PropTypes from "prop-types";
import { isDefined, addMissingUnit } from "utility";

import "./style.scss";

function Parallax({ children, inner, overlay, height, speed }) {
  return (
    <div
      style={{ height: addMissingUnit(height) }}
      className="jarallax"
      data-speed={speed}
    >
      <div className="jarallax-img">{children} </div>
      {isDefined(overlay) ? (
        <div className="mask" style={{ backgroundColor: overlay }} />
      ) : null}
      {inner}
    </div>
  );
}

export default Parallax;

Parallax.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  inner: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  speed: PropTypes.number,
  overlay: PropTypes.string
};

Parallax.defaultProps = {
  inner: null,
  height: 200,
  speed: 0.3,
  overlay: null
};

Parallax.displayName = "Parallax";
