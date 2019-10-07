import React, { useRef } from "react";
import PropTypes from "prop-types";
import { addMissingUnit, isClient } from "utility";

import Header from "components/Header";
import Footer from "components/Footer";
import Tooltip from "components/Tooltip";

import "scss/main.scss";

// Load smooth scrolling
if (isClient) {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]');
}

function Layout({
  children,
  className,
  headerProps,
  footerProps,
  navOffset,
  noFooter
}) {
  const portalRef = useRef(null);
  return (
    <Tooltip.PortalRefContext.Provider value={portalRef}>
      <div id="tooltip-portal" ref={portalRef} />
      <Header {...headerProps} />
      <main
        style={{ marginTop: addMissingUnit(navOffset) }}
        children={children}
        className={className}
      />
      {!noFooter && <Footer {...footerProps} />}
    </Tooltip.PortalRefContext.Provider>
  );
}

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  headerProps: PropTypes.object,
  footerProps: PropTypes.object,
  navOffset: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  className: PropTypes.string,
  noFooter: PropTypes.bool
};

Layout.defaultProps = {
  headerProps: {},
  footerProps: {},
  navOffset: 60,
  className: "",
  noFooter: false
};

Layout.displayName = "Layout";
