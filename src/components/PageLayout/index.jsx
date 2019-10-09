import React from "react";
import PropTypes from "prop-types";
import { isNil } from "utility";

import Icon from "components/Icon";
import { Container } from "react-bootstrap";

function PageLayout({ children, header, icon, noHeader }) {
  return (
    <Container className="pt-5">
      {!noHeader && (
        <h1>
          {isNil(icon) ? null : <Icon name={icon} className="mr-4" />}
          {header}
        </h1>
      )}
      {children}
    </Container>
  );
}

export default PageLayout;

PageLayout.propTypes = {
  header: PropTypes.string,
  noHeader: PropTypes.bool,
  icon: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
};

PageLayout.defaultProps = {
  header: "",
  noHeader: false,
  icon: null
};

PageLayout.displayName = "PageLayout";
