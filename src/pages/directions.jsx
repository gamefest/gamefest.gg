import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "components/Layout";
import SEO from "components/SEO";
import Mdx from "components/Mdx";
import PageLayout from "components/PageLayout";

function DirectionsPage() {
  const mdx = useStaticQuery(graphql`
    query DirectionsContent {
      file(
        sourceInstanceName: { eq: "pages" }
        extension: { eq: "mdx" }
        name: { eq: "directions" }
      ) {
        childMdx {
          body
          frontmatter {
            parkingLegend {
              color
              label
            }
          }
        }
      }
    }
  `).file.childMdx;
  const body = mdx.body;

  return (
    <Layout>
      <SEO title="Directions" />
      <PageLayout header="Directions" icon="car">
        <Mdx content={body} />
      </PageLayout>
    </Layout>
  );
}

export default DirectionsPage;

DirectionsPage.displayName = "DirectionsPage";
