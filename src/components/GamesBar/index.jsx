import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { isEmptyOrNil } from "utility";
import { useStaticQuery, graphql } from "gatsby";

import Link from "components/Link";
import Tooltip from "components/Tooltip";

import "./style.scss";

function GamesBar({ className, show, ...rest }) {
  const mdx = useStaticQuery(graphql`
    query GamesBarContent {
      file(
        sourceInstanceName: { eq: "data" }
        extension: { eq: "mdx" }
        name: { eq: "footer" }
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
  `).file.childMdx;
  return (
    <div className={classNames("games-bar glass", className)} {...rest}>
      {show ? null : <h5>Games to be announced</h5>}
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
  const innerLink = (
    <Link className="games-bar-item" href={href}>
      <img src={icon}/>
    </Link>);
  return isEmptyOrNil(label) ? innerLink : (
    <Tooltip bottom text={label} children={innerLink} />
  )
}

GamesBarItem.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string,
  href: PropTypes.string.isRequired
}

GamesBarItem.defaultProps = {
  label: null
}

GamesBarItem.displayName = "GamesBarItem";
