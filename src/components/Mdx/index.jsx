import React from "react";
import PropTypes from "prop-types";
import scope from "./mdx_scope";

import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";

function Mdx({ content, ...props }) {
  return (
    <MDXProvider components={{ ...scope }}>
      <MDXRenderer children={content} {...props} />
    </MDXProvider>
  );
}

export default Mdx;

Mdx.propTypes = {
  content: PropTypes.string
};

Mdx.displayName = "Mdx";
