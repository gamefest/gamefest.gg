import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "components/Layout";
import SEO from "components/SEO";
import PageLayout from "components/PageLayout";

function GamesPage() {
  const data = useStaticQuery(graphql`
    query GamesPage {
      file(name: { eq: "games" }, extension: { eq: "yaml" }) {
        childDataYaml {
          gamesOrder
        }
      }
      allFile(filter: { sourceInstanceName: { eq: "games" } }) {
        edges {
          node {
            childMdx {
              frontmatter {
                name
                slug
                logo {
                  publicURL
                }
              }
            }
          }
        }
      }
    }
  `);
  const { gamesOrder } = data.file.childDataYaml;
  const gameNodes = data.allFile.edges.map(e => e.node.childMdx.frontmatter);
  const games = gamesOrder.map(s => gameNodes.find(({ slug }) => s === slug));
  return (
    <Layout>
      <SEO title="Games" />
      <PageLayout header="Games" icon="list">
        {games.map(({ slug, name, logo, banner }) => (
          <GamesSection
            key={slug}
            slug={slug}
            name={name}
            logo={logo}
            banner={banner}
          />
        ))}
      </PageLayout>
    </Layout>
  );
}

export default GamesPage;

GamesPage.displayName = "GamesPage";

function GamesSection({ slug, name, logo, banner }) {
  return null;
}

GamesSection.displayName = "GamesSection";
