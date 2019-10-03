import React from "react";
import PropTypes from "prop-types";
import { addMissingUnit } from "utility";

import Header from "components/Header";
import Footer from "components/Footer";

import "scss/main.scss";

function Layout({ children, headerProps, footerProps, navOffset }) {
  return (
    <>
      <Header {...headerProps} />
      <main
        style={{ marginTop: addMissingUnit(navOffset) }}
        children={children}
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
};

Layout.defaultProps = {
  headerProps: {},
  footerProps: {},
  navOffset: 60
};

Layout.displayName = "Layout";
