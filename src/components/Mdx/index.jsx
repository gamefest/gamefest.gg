import React from "react";
import PropTypes from "prop-types";
import defaultScope from "./mdx_scope";

import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";

function Mdx({ content, scope, ...props }) {
  return (
    <MDXProvider components={{ ...defaultScope, ...scope }}>
      <MDXRenderer children={content} {...props} />
    </MDXProvider>
  );
}

export default Mdx;

Mdx.propTypes = {
  content: PropTypes.string,
  scope: PropTypes.object
};

Mdx.defaultProps = {
  scope: {}
}

Mdx.displayName = "Mdx";
