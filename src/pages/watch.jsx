import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "components/Layout";
import SEO from "components/SEO";
import Mdx from "components/Mdx";

function WatchPage() {
  const data = useStaticQuery(graphql`
    query WatchPage {
      content: file(
        sourceInstanceName: { eq: "pages" }
        extension: { eq: "mdx" }
        name: { eq: "watch" }
      ) {
        childMdx {
          body
        }
      }
    }
  `);
  const content = data.content.childMdx.body;
  return (
    <Layout className="watch-page">
      <SEO title="Watch" />
      <article>
        <Mdx content={content} />
      </article>
    </Layout>
  );
}

export default WatchPage;

WatchPage.displayName = "WatchPage";
