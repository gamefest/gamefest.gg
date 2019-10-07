import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "components/Layout";
import SEO from "components/SEO";
import Mdx from "components/Mdx";

import "./scss/404.scss";

function NotFoundPage() {
  const mdx = useStaticQuery(graphql`
    query NotFoundPage {
      content: file(
        sourceInstanceName: { eq: "pages" }
        extension: { eq: "mdx" }
        name: { eq: "404" }
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
  `).content.childMdx;
  const content = mdx.body;
  const links = mdx.frontmatter.links;
  return (
    <Layout className="not-found-page">
      <SEO title="Not Found" />
      <article>
        <Mdx content={content} links={links} />
      </article>
    </Layout>
  );
}

export default NotFoundPage;

NotFoundPage.displayName = "NotFoundPage";
