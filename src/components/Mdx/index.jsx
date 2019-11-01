import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
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
};

Mdx.displayName = "Mdx";

export const query = graphql`
  fragment MdxImages on MdxFrontmatter {
    images {
      key
      selectable
      src {
        publicURL
        childImageSvg {
          svgURL
        }
        childImageSharp {
          fluid(maxWidth: 2560, srcSetBreakpoints: [400, 800, 1200, 1920]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`;
