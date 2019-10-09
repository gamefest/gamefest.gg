import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useMdxImages } from "utility";

import Layout from "components/Layout";
import SEO from "components/SEO";
import Mdx from "components/Mdx";

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
            ...MdxImages
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
  const images = useMdxImages(mdx);

  return (
    <Layout>
      <SEO title="Directions" />
      <Mdx content={body} images={images} />
    </Layout>
  );
}

export default DirectionsPage;

DirectionsPage.displayName = "DirectionsPage";
