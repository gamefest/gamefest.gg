import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { isDefined } from "utility";

import "./style.scss";

function Image({ image, overlay, className }) {
  return (
    <div className={classNames("image", className)}>
      {image}
      {isDefined(overlay) ? (
        <div className="mask" style={{ backgroundColor: overlay }} />
      ) : null}
    </div>
  );
}

export default Image;

Image.propTypes = {
  image: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  overlay: PropTypes.string,
  className: PropTypes.string
};

Image.defaultProps = {
  overlay: null,
  className: ""
};

Image.displayName = "Image";
