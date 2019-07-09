import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "components/Header";
import "scss/main.scss";

function Layout({ children }) {
  return (
    <>
      <Header siteTitle={"gamefest"} />
      <main>{children}</main>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
