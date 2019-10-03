import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { isEmptyOrNil } from "utility";
import { useStaticQuery, graphql } from "gatsby";

import Tooltip from "components/Tooltip";
import Link from "components/Link";

import "./style.scss";

function GamesBar({ className, show, ...rest }) {
  const data = useStaticQuery(graphql`
    query GamesListQuery {
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
    <div className={classNames("games-bar glass", className)} {...rest}>
      {show ? (
        games.map(({ slug, icon, name }) => (
          <GamesBarItem
            key={slug}
            icon={icon.publicURL}
            label={name}
            href={`${gamesRoot}#${slug}`}
          />
        ))
      ) : (
        <h5 className="placeholder">Games to be announced</h5>
      )}
    </div>
  );
}

export default GamesBar;

GamesBar.propTypes = {
  show: PropTypes.bool,
  className: PropTypes.string
};

GamesBar.defaultProps = {
  show: true,
  className: null
};

GamesBar.displayName = "GamesBar";

function GamesBarItem({ icon, label, href }) {
  return (
    <Tooltip bottom text={label} padding="0.35rem" hide={isEmptyOrNil(label)}>
      <div className="games-bar-item">
        <Link href={href}>
          <img src={icon} />
        </Link>
      </div>
    </Tooltip>
  );
}

GamesBarItem.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string,
  href: PropTypes.string.isRequired
};

GamesBarItem.defaultProps = {
  label: null
};

GamesBarItem.displayName = "GamesBarItem";
