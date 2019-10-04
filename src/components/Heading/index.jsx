import React from "react";
import PropTypes from "prop-types";
import { getTextContents, slugify } from "utility";

import "./style.scss";

function createHeading({ component: Component }) {
  const heading = ({ children, id, ...rest }) => {
    return (
      <div className="anchor-wrapper">
        <a className="anchor" name={slugify(getTextContents(children))}>
          {" "}
        </a>
        <Component {...rest}>{children}</Component>
      </div>
    );
  };
  heading.propTypes = { component: PropTypes.string };
  heading.displayName = `Heading-${Component}`;
  return heading;
}

export default createHeading;
