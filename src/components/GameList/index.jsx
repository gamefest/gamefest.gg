import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import GameSection from "components/GameSection";
import Mdx from "components/Mdx";

// Main games list section
function GameList() {
  const data = useStaticQuery(graphql`
    fragment Places on PrizingPlace {
      place
      amount
      items {
        text
        quantity
      }
    }

    query GamesPageList {
      metadata: file(name: { eq: "games" }, extension: { eq: "yaml" }) {
        childDataYaml {
          gamesOrder
        }
      }
      games: allFile(filter: { sourceInstanceName: { eq: "games" } }) {
        edges {
          node {
            childMdx {
              body
              frontmatter {
                name
                slug
                logo {
                  publicURL
                  childImageSvg {
                    svgURL
                  }
                }
                banner {
                  childImageSharp {
                    fluid(maxWidth: 1100, srcSetBreakpoints: [400, 600, 880]) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
                links {
                  ...Links
                }
                contacts {
                  name
                  discord
                }
                prizing {
                  places {
                    ...Places
                  }
                  tiers {
                    label
                    places {
                      ...Places
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `);
  const { gamesOrder } = data.metadata.childDataYaml;
  const gameNodes = data.games.edges.map(e => e.node.childMdx);
  const games = gamesOrder.map(s =>
    gameNodes.find(n => s === n.frontmatter.slug)
  );
  return games.map(
    ({
      body,
      frontmatter: { slug, name, logo, banner, links, contacts, prizing }
    }) => (
      <GameSection
        key={slug}
        slug={slug}
        name={name}
        logo={logo}
        banner={banner}
        links={links}
      >
        <Mdx
          content={body}
          scope={{
            Contact: GameSection.Contact,
            Prizing: GameSection.Prizing,
            MultiPrizing: GameSection.MultiPrizing,
            Section: GameSection.BottomSection
          }}
          contacts={contacts}
          prizing={prizing}
        />
      </GameSection>
    )
  );
}

export default GameList;

GameList.displayName = "GameList";
