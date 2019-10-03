import React from "react";
import PropTypes from "prop-types";

function Space({ h }) {
  return <div style={{ height: h }} />;
}

export default Space;

Space.propTypes = {
  h: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Space.defaultProps = {
  h: "1rem"
};

Space.displayName = "Space";
