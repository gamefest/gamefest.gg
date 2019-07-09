import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { resolveIcon } from "./loader";

const baseStyle = { display: "inline-block", height: "1em", width: "1em" };

// Embeds a FontAwesome SVG inline icon into the page, optionally allowing for
// custom icon definitions in ./custom.js
function Icon({ className, name, style, ...rest }) {
  return (
    <span className={className} style={{ ...baseStyle, ...style }}>
      <FontAwesomeIcon icon={resolveIcon(name)} />
    </span>
  );
}

export default Icon;

Icon.defaultProps = {
  className: "",
  name: "chevron-right",
  style: {}
};

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  style: PropTypes.object
};
