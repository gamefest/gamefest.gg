import React, { useMemo } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { useStaticQuery, graphql } from "gatsby";

import Img from "gatsby-image";
import Mdx from "components/Mdx";
import SEO from "components/SEO";
import Layout from "components/Layout";
import Container from "components/Container";
import SponsorTiles from "components/SponsorTiles";
import ParallaxProvider from "components/ParallaxProvider";

import "./scss/sponsors.scss";

function SponsorsPage() {
  const { content, sponsorNodes } = useStaticQuery(graphql`
    query SponsorsContent {
      content: file(
        sourceInstanceName: { eq: "pages" }
        extension: { eq: "mdx" }
        name: { eq: "sponsors" }
      ) {
        childMdx {
          body
          frontmatter {
            images {
              key
              selectable
              src {
                childImageSharp {
                  fluid(
                    maxWidth: 2560
                    srcSetBreakpoints: [400, 800, 1200, 1920]
                  ) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
      sponsorNodes: allFile(
        filter: { sourceInstanceName: { eq: "sponsors" } }
      ) {
        edges {
          node {
            childMdx {
              frontmatter {
                level
                hide
              }
            }
          }
        }
      }
    }
  `);
  const body = content.childMdx.body;
  const images = content.childMdx.frontmatter.images;
  const imageNodes = Object.assign(
    {},
    ...images.map(i => ({
      [i.key]: (
        <Img
          fluid={i.src.childImageSharp.fluid}
          className={classNames({ "no-select": !i.selectable })}
        />
      )
    }))
  );
  const sponsors = useMemo(() =>
    sponsorNodes.edges
      .map(e => e.node.childMdx.frontmatter)
      .filter(s => !s.hide)
  );
  const tiers = useMemo(
    () => Array.from(new Set(sponsors.map(({ level }) => level))),
    [sponsors]
  );

  return (
    <Layout className="sponsors-page">
      <ParallaxProvider>
        <SEO title="Sponsors" />
        <Mdx content={body} images={imageNodes} />
        <SponsorsPage.Tiers tiers={tiers} />
      </ParallaxProvider>
    </Layout>
  );
}

export default SponsorsPage;

SponsorsPage.displayName = "SponsorsPage";

// ? ===============
// ? Sub-components
// ? ===============

SponsorsPage.Tiers = function({ tiers }) {
  const sorted = useMemo(() => [...tiers].sort().reverse(), [tiers]);
  return sorted.map(t => {
    return (
      <section className={`sponsors-tier-${t}`} key={t}>
        <Container>
          <SponsorTiles level={t} headers={t === 2} compact={t === 0} />
        </Container>
      </section>
    );
  });
};

SponsorsPage.Tiers.propTypes = {
  tiers: PropTypes.arrayOf(PropTypes.number).isRequired
};

SponsorsPage.Tiers.defaultProps = {
  tiers: []
};

SponsorsPage.Tiers.displayName = "SponsorsPage.Tiers";
