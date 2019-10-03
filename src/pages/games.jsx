import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "components/Layout";
import SEO from "components/SEO";
import PageLayout from "components/PageLayout";
import GameList from "components/GameList";
import GamesBar from "components/GamesBar";
import Mdx from "components/Mdx";

import "./scss/games.scss";

function GamesPage() {
  const data = useStaticQuery(graphql`
    query GamesPage {
      content: file(
        sourceInstanceName: { eq: "pages" }
        extension: { eq: "mdx" }
        name: { eq: "games" }
      ) {
        childMdx {
          body
        }
      }
    }
  `);
  const content = data.content.childMdx.body;
  return (
    <Layout className="games-page">
      <SEO title="Games" />
      <PageLayout noHeader>
        <article className="games-content-wrapper">
          <div className="games-content">
            <Mdx content={content} scope={{ GameList }} />
          </div>
          <div className="games-nav-spacer" />
          <aside className="games-nav-outer">
            <GamesBar vertical />
          </aside>
        </article>
      </PageLayout>
    </Layout>
  );
}

export default GamesPage;

GamesPage.displayName = "GamesPage";
