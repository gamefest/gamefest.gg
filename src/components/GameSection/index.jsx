import React from "react";
import PropTypes from "prop-types";

import Img from "gatsby-image";

import "./style.scss";

function GameSection({ slug, name, logo, banner, children }) {
  return (
    <article className="game-section">
      <a className="game-section-anchor" id={slug} />
      <div className="game-section-title">
        <Img
          className="game-section-banner"
          fluid={banner.childImageSharp.fluid}
        />
        <GameSection.Title name={name} slug={slug} logo={logo} />
      </div>
      <section className="game-section-content" children={children} />
    </article>
  );
}

export default GameSection;

GameSection.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  logo: PropTypes.shape({ publicURL: PropTypes.string }),
  banner: PropTypes.shape({
    childImageSharp: PropTypes.shape({ fluid: PropTypes.object })
  }),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

GameSection.displayName = "GameSection";

GameSection.Title = function({ name, slug, logo }) {
  return logo ? (
    <>
      <img className="game-section-logo" src={logo.publicURL} />
    </>
  ) : (
    <h2 className="game-section-placeholder">{name}</h2>
  );
};

GameSection.Title.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  logo: PropTypes.shape({ publicURL: PropTypes.string })
};

GameSection.Title.displayName = "GameSection.Title";
