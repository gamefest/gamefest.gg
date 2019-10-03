import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "components/Layout";
import SEO from "components/SEO";
import PageLayout from "components/PageLayout";
import GameList from "components/GameList";
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
    <Layout>
      <SEO title="Games" />
      <PageLayout noHeader>
        <article>
          <Mdx content={content} scope={{ GameList }} />
        </article>
      </PageLayout>
    </Layout>
  );
}

export default GamesPage;

GamesPage.displayName = "GamesPage";

// ? ==============
// ? Sub-components
// ? ==============

// Lead info
GamesPage.Lead = function({ className, children }) {
  return (
    <div className={classNames("games-lead", className)} children={children} />
  );
};

GamesPage.Lead.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
};

GamesPage.Lead.defaultProps = {
  className: ""
};

GamesPage.Lead.displayName = "GamesPage.Lead";
