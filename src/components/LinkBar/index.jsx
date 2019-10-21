import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { Nav } from "react-bootstrap";
import Link from "components/Link";

import "./style.scss";

function LinkBar({ links, linkClassName, ...rest }) {
  console.log(links);
  return (
    <Nav {...rest}>
      {links.map(({ className, ...link }) => (
        <Nav.Item
          key={link.href}
          children={
            <Link className={classNames(linkClassName, className)} {...link} />
          }
        />
      ))}
    </Nav>
  );
}

export default LinkBar;

LinkBar.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object),
  linkClassName: PropTypes.string
};

LinkBar.defaultProps = {
  links: [],
  linkClassName: ""
};

LinkBar.displayName = "LinkBar";
