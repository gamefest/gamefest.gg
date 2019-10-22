import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { isDefined, isNil } from "utility";

import Img from "gatsby-image";

import "./style.scss";

function makeImage(svg, src, image, props) {
  const createImage = src => <img src={src} {...props} />;
  if (isDefined(svg)) {
    const { svgURL } = svg;
    if (isNil(svgURL) && isDefined(src)) {
      return createImage(src);
    } else {
      return createImage(svgURL);
    }
  } else if (isDefined(image)) {
    return <Img {...image} {...props} />;
  } else if (isDefined(src)) {
    return createImage(src);
  }
}

function Image({
  children,
  overlay,
  className,
  src,
  image,
  svg,
  alt,
  noWrapper,
  noSelect
}) {
  const props = noWrapper
    ? { className: classNames(className, { "no-select": noSelect }), alt }
    : { alt };
  const img = isDefined(children)
    ? children
    : makeImage(svg, src, image, props);
  return noWrapper ? (
    img
  ) : (
    <div className={classNames("image", className, { "no-select": noSelect })}>
      {img}
      {isDefined(overlay) ? (
        <div className="mask" style={{ backgroundColor: overlay }} />
      ) : null}
    </div>
  );
}

export default Image;

Image.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  overlay: PropTypes.string,
  className: PropTypes.string,
  src: PropTypes.string,
  image: PropTypes.object,
  svg: PropTypes.object,
  alt: PropTypes.string,
  noWrapper: PropTypes.bool,
  noSelect: PropTypes.bool
};

Image.defaultProps = {
  overlay: null,
  className: "",
  noWrapper: false,
  noSelect: false
};

Image.displayName = "Image";
