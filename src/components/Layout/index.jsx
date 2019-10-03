import React from "react";
import PropTypes from "prop-types";
import { addMissingUnit, isClient } from "utility";

import Header from "components/Header";
import Footer from "components/Footer";

import "scss/main.scss";

// Load smooth scrolling
if (isClient) {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]');
}

function Layout({ children, className, headerProps, footerProps, navOffset }) {
  return (
    <>
      <div id="tooltip-portal" />
      <Header {...headerProps} />
      <main
        style={{ marginTop: addMissingUnit(navOffset) }}
        children={children}
        className={className}
      />
      <Footer {...footerProps} />
    </>
  );
}

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  headerProps: PropTypes.object,
  footerProps: PropTypes.object,
  navOffset: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  className: PropTypes.string
};

Layout.defaultProps = {
  headerProps: {},
  footerProps: {},
  navOffset: 60,
  className: ""
};

Layout.displayName = "Layout";
