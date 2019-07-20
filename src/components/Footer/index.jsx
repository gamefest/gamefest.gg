import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Container from "components/Container";
import Mdx from "components/Mdx";
import LinkBar from "components/LinkBar";

import "./style.scss";

function Footer() {
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
    <Container className="bg-dark footer">
      <LinkBar links={links} />
      <Mdx content={body} />
    </Container>
  );
}

export default Footer;

Footer.propTypes = {};

Footer.defaultProps = {};
