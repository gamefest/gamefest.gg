import React from "react";
import PropTypes from "prop-types";
import scope from "./mdx_scope";

import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";

function Mdx({ content }) {
  return (
    <MDXProvider components={{ ...scope }}>
      <MDXRenderer children={content} />
    </MDXProvider>
  );
}

export default Mdx;

Mdx.propTypes = {
  content: PropTypes.string
};
