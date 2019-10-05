import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
import classNames from "classnames";

import Container from "components/Container";
import Mdx from "components/Mdx";
import LinkBar from "components/LinkBar";

import "./style.scss";

function Footer({ lighter }) {
  const mdx = useStaticQuery(graphql`
    query FooterContent {
      file(
        sourceInstanceName: { eq: "data" }
        extension: { eq: "mdx" }
        name: { eq: "footer" }
      ) {
        childMdx {
          body
          frontmatter {
            links {
              ...Links
            }
          }
        }
      }
    }
  `).file.childMdx;
  const body = mdx.body;
  const links = mdx.frontmatter.links;

  return (
    <Container className={classNames("footer bg-darker", { lighter })}>
      <LinkBar links={links} />
      <Mdx content={body} />
    </Container>
  );
}

export default Footer;

Footer.propTypes = {
  lighter: PropTypes.bool
};

Footer.defaultProps = {
  lighter: false
};

Footer.displayName = "Footer";
