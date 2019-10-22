import React from "react";
import PropTypes from "prop-types";
import { isDefined, formatList } from "utility";

import Img from "gatsby-image";
import Image from "components/Image";
import LinkBar from "components/LinkBar";

import "./style.scss";

function GameSection({ slug, name, logo, banner, children, links }) {
  return (
    <article className="game-section">
      <a className="game-section--anchor" id={slug} />
      <div className="game-section--title">
        <Img
          className="game-section--banner"
          fluid={banner.childImageSharp.fluid}
        />
        <GameSection.Title name={name} logo={logo} />
      </div>
      <section className="game-section--content">
        {isDefined(links) && links.length > 0 && (
          <LinkBar links={links} linkClassName="btn" className="button-bar" />
        )}
        {children}
      </section>
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
  ]),
  links: PropTypes.arrayOf(PropTypes.object)
};

GameSection.defaultProps = {
  links: []
};

GameSection.displayName = "GameSection";

// ? =================
// ? Sub-components
// ? =================

// Top title with logo & banner
GameSection.Title = function({ name, logo }) {
  return logo ? (
    <>
      <Image
        svg={logo.childImageSvg}
        src={logo.publicURL}
        image={logo.childImageSharp}
        alt={name}
        className="game-section--logo"
        noWrapper
      />
    </>
  ) : (
    <h2 className="game-section--placeholder">{name}</h2>
  );
};

GameSection.Title.propTypes = {
  name: PropTypes.string.isRequired,
  logo: PropTypes.object
};

GameSection.Title.displayName = "GameSection.Title";

// Game admin contact bottom section
GameSection.Contact = function({ contacts }) {
  return isDefined(contacts) && contacts.length > 0 ? (
    <div className="game-section--contact">
      <h4>Game Administration</h4>
      <p>
        For any concerns about the tournament, feel free to contact{" "}
        {formatList(contacts.map(c => c.name), "or")}:
      </p>
      <ul>
        {contacts.map(c => (
          <li key={c.name}>
            <code>{c.discord}</code>
          </li>
        ))}
      </ul>
    </div>
  ) : null;
};

GameSection.Contact.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, discord: PropTypes.string })
  )
};

GameSection.Contact.defaultProps = {
  contacts: []
};

GameSection.Contact.displayName = "GameSection.Contact";
