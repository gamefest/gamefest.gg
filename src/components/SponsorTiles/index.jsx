import React, { useMemo } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { slugify, isNil } from "utility";
import { useStaticQuery, graphql } from "gatsby";

import Tooltip from "components/Tooltip";
import Link from "components/Link";
import Mdx from "components/Mdx";

import "./style.scss";

function SponsorTiles({
  level,
  className,
  tileClassName,
  tooltip,
  compact,
  headers
}) {
  const data = useStaticQuery(graphql`
    query SponsorTilesQuery {
      allFile(filter: { sourceInstanceName: { eq: "sponsors" } }) {
        edges {
          node {
            childMdx {
              body
              frontmatter {
                name
                link
                level
                hide
                logo {
                  publicURL
                }
              }
            }
          }
        }
      }
    }
  `);
  const sponsors = useMemo(
    () =>
      data.allFile.edges
        .map(e => {
          const mdx = e.node.childMdx;
          return { ...mdx.frontmatter, body: mdx.body };
        })
        .filter(s => !s.hide),
    [data]
  );
  const filtered = isNil(level)
    ? sponsors
    : useMemo(() => sponsors.filter(s => s.level === level), [level, sponsors]);

  return (
    <div className={classNames("sponsor-tiles", className, { compact })}>
      {filtered.map(({ name, link, body, logo }) => {
        const slug = slugify(name);
        return (
          <SponsorTiles.Tile
            key={slug}
            name={name}
            slug={slug}
            link={link}
            logo={logo.publicURL}
            className={tileClassName}
            tooltip={tooltip}
            header={headers}
          >
            {!compact && <Mdx content={body} />}
          </SponsorTiles.Tile>
        );
      })}
    </div>
  );
}

export default SponsorTiles;

SponsorTiles.propTypes = {
  level: PropTypes.number,
  className: PropTypes.string,
  tileClassName: PropTypes.string,
  compact: PropTypes.bool,
  tooltip: PropTypes.bool,
  headers: PropTypes.bool
};

SponsorTiles.defaultProps = {
  level: null,
  className: "",
  tileClassName: "",
  compact: false,
  headers: false
};

SponsorTiles.displayName = "SponsorTiles";

// ? ===============
// ? Sub-components
// ? ===============

SponsorTiles.Tile = function({
  name,
  slug,
  link,
  className,
  children,
  tooltip,
  logo,
  header
}) {
  const logoImage = (
    <img className="sponsor-tiles--tile-logo" alt={name} src={logo} />
  );
  return (
    <div className={classNames("sponsor-tiles--tile", className)}>
      <a className="sponsor-tiles--tile-anchor" name={slug} />
      <Link href={link} className="sponsor-tiles--tile-link">
        {tooltip ? (
          <Tooltip bottom text={name} children={logoImage} />
        ) : (
          logoImage
        )}
      </Link>
      <div className="sponsor-tiles--tile-content">
        {header && <h3>{name}</h3>}
        {children}
      </div>
    </div>
  );
};

SponsorTiles.Tile.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  link: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  tooltip: PropTypes.bool,
  logo: PropTypes.string,
  header: PropTypes.bool
};

SponsorTiles.Tile.defaultProps = {
  className: "",
  compact: false,
  header: false
};

SponsorTiles.Tile.displayName = "SponsorTiles.Tile";
