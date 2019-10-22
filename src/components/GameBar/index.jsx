import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { isEmptyOrNil } from "utility";
import { useStaticQuery, graphql } from "gatsby";

import Tooltip from "components/Tooltip";
import Link from "components/Link";
import Image from "components/Image";

import "./style.scss";

function GameBar({ className, show, vertical, ...rest }) {
  const data = useStaticQuery(graphql`
    query GameBarQuery {
      file(name: { eq: "games" }, extension: { eq: "yaml" }) {
        childDataYaml {
          gamesRoot
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
                icon {
                  publicURL
                  childImageSvg {
                    svgURL
                  }
                  childImageSharp {
                    fixed(
                      width: 44
                      height: 44
                      traceSVG: { color: "#777777" }
                    ) {
                      ...GatsbyImageSharpFixed_withWebp_tracedSVG
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
  const { gamesRoot, gamesOrder } = data.file.childDataYaml;
  const gameNodes = data.allFile.edges.map(e => e.node.childMdx.frontmatter);
  const games = gamesOrder.map(s => gameNodes.find(({ slug }) => s === slug));
  return (
    <div
      className={classNames("games-bar glass", className, { vertical })}
      {...rest}
    >
      {show ? (
        games.map(({ slug, icon, name }) => (
          <GameBar.Item
            key={slug}
            icon={
              <Image
                svg={icon.childImageSvg}
                src={icon.publicURL}
                image={icon.childImageSharp}
                alt={`${name} logo`}
                className="games-bar-item--logo"
                noWrapper
              />
            }
            label={name}
            vertical={vertical}
            href={`${gamesRoot}#${slug}`}
          />
        ))
      ) : (
        <h5 className="placeholder">Games to be announced</h5>
      )}
    </div>
  );
}

export default GameBar;

GameBar.propTypes = {
  show: PropTypes.bool,
  vertical: PropTypes.bool,
  className: PropTypes.string
};

GameBar.defaultProps = {
  show: true,
  vertical: false,
  className: null
};

GameBar.displayName = "GameBar";

GameBar.Item = function({ vertical, icon, label, href }) {
  return (
    <Tooltip
      bottom={!vertical}
      text={label}
      padding="0.35rem"
      hide={isEmptyOrNil(label)}
    >
      <div className="games-bar-item">
        <Link href={href}>{icon}</Link>
      </div>
    </Tooltip>
  );
};

GameBar.Item.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)])
    .isRequired,
  label: PropTypes.string,
  href: PropTypes.string.isRequired,
  vertical: PropTypes.bool
};

GameBar.Item.defaultProps = {
  label: null,
  vertical: false
};

GameBar.Item.displayName = "GameBar.Item";
