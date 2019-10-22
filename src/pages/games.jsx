import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "components/Layout";
import SEO from "components/SEO";
import GameList from "components/GameList";
import GameBar from "components/GameBar";
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
      <article className="games-content-wrapper">
        <div className="games-content">
          <Mdx content={content} scope={{ GameList }} />
        </div>
        <div className="games-nav-spacer" />
        <aside className="games-nav-outer">
          <GameBar vertical />
        </aside>
      </article>
    </Layout>
  );
}

export default GamesPage;

GamesPage.displayName = "GamesPage";
