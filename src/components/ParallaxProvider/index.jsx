import React from "react";
import PropTypes from "prop-types";
import { log } from "utility";

import { Helmet } from "react-helmet";
import { isDefined, testUntilPass } from "utility";

const mobileDisableConfig = {
  disableParallax: /iPad|iPhone|iPod|Android/,
  disableVideo: /iPad|iPhone|iPod|Android/
};

const cdnUrl = "https://unpkg.com/jarallax@1.10/dist/jarallax.min.js";

function ParallaxProvider({ children, disableOnMobile }) {
  React.useEffect(() => {
    const testInterval = testUntilPass(
      () => isDefined(window.jarallax),
      () => {
        log("Registering parallax handler");
        window.jarallax(
          document.querySelectorAll(".jarallax"),
          disableOnMobile ? mobileDisableConfig : {}
        );
      }
    );

    return () => {
      log("Unregistering parallax handler");
      clearInterval(testInterval);
      if (isDefined(window.jarallax)) {
        window.jarallax(document.querySelectorAll(".jarallax"), "destroy");
      }
    };
  }, []);

  return (
    <>
      <Helmet>
        <link rel="preload" href={cdnUrl} as="script" />
        <script src={cdnUrl} defer />
      </Helmet>
      {children}
    </>
  );
}

export default ParallaxProvider;

ParallaxProvider.propTypes = {
  disableOnMobile: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
};

ParallaxProvider.defaultProps = {
  disableOnMobile: true
};
