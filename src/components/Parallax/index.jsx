import React from "react";
import PropTypes from "prop-types";
import { isDefined, addMissingUnit, useMediaBreakpoints, isNil } from "utility";

import "./style.scss";

function getBreakpoints(breakpointMap) {
  return Object.keys(breakpointMap).filter(k => k !== "base");
}

function Parallax({ children, image, overlay, height, speed }) {
  const isResponsive = typeof height === "object";
  const breakpoints = isResponsive ? getBreakpoints(height) : [];
  const activeBreakpoint = useMediaBreakpoints(breakpoints);
  const currentHeight = isNil(activeBreakpoint)
    ? height.base
    : height[activeBreakpoint];

  return (
    <div
      style={{ height: addMissingUnit(isResponsive ? currentHeight : height) }}
      className="jarallax"
      data-speed={speed}
    >
      <div className="jarallax-img">{image}</div>
      {isDefined(overlay) ? (
        <div className="mask" style={{ backgroundColor: overlay }} />
      ) : null}
      {children}
    </div>
  );
}

export default Parallax;

Parallax.propTypes = {
  image: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  height: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.object
  ]),
  speed: PropTypes.number,
  overlay: PropTypes.string
};

Parallax.defaultProps = {
  children: null,
  height: 200,
  speed: 0.3,
  overlay: null
};

Parallax.displayName = "Parallax";
