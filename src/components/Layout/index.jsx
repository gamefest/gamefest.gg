import React from "react";
import PropTypes from "prop-types";
import Header from "components/Header";
import "scss/main.scss";

function Layout({ children, headerProps }) {
  return (
    <>
      <Header {...headerProps} />
      <main>{children}</main>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  headerProps: PropTypes.object
};

export default Layout;
