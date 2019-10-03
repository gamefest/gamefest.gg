import React from "react";
import PropTypes from "prop-types";

import { Nav } from "react-bootstrap";
import Link from "components/Link";

function LinkBar({ links, ...rest }) {
  return (
    <Nav {...rest}>
      {links.map(link => (
        <Nav.Item key={link.href} children={<Link {...link} />} />
      ))}
    </Nav>
  );
}

export default LinkBar;

LinkBar.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object)
};

LinkBar.defaultProps = {
  links: []
};

LinkBar.displayName = "LinkBar";
