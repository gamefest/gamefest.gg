import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { isDefined, formatList, formatPlace } from "utility";

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
          className="game-section--banner no-select"
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
GameSection.Title = function ({ name, logo }) {
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
GameSection.Contact = function ({ contacts }) {
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

// Game prizing bottom section
const PLACE_REGEX = /[1-9][0-9]*/g
GameSection.Prizing = function ({ prizing }) {
  return isDefined(prizing) ? (
    <div className="game-section--prizing">
      <div
        className={classNames("game-section--places", {
          places__wide:
            prizing.places.length >= 3 &&
            !(
              prizing.places.length % 2 === 0 && prizing.places.length % 3 !== 0
            )
        })}
      >
        {prizing.places &&
          prizing.places.map(({ place, amount, items }) => (
            <div className={`game-section--place place__${place}`} key={place}>
              <h4>
                <span
                  className="game-section--place-header"
                  dangerouslySetInnerHTML={{ __html: place.replace(PLACE_REGEX, m => formatPlace(parseInt(m), true)) }}
                />
                {amount && (
                  <span className="game-section--amount-text">({amount})</span>
                )}
              </h4>
              {items && <ul className={classNames("game-section--place-items", { "items__no-quantity": items.findIndex(i => isDefined(i.quantity) == -1) } > {
                items.map(({ text, quantity }) => <li className={classNames("game-section--place-item", { "item__quantity": isDefined(quantity) })}>
                  <span>{quantity && <span className="game-section--place-quantity">{quantity} ×&nbsp;&nbsp;</span>}
                    <span className="game-section--place-content" dangerouslySetInnerHTML={{ __html: text }} /></span>
                </li>)
              }</ul>}
      </div>
      ))}
      </div>
    </div >
  ) : null;
};

GameSection.Prizing.propTypes = {
  prizing: PropTypes.shape({
    places: PropTypes.arrayOf(
      PropTypes.shape({
        place: PropTypes.string.isRequired,
        amount: PropTypes.string,
        items: PropTypes.arrayOf(
          PropTypes.shape({
            text: PropTypes.string.isRequired,
            quantity: PropTypes.number
          }).isRequired
        )
      }).isRequired
    )
  })
};

GameSection.Prizing.defaultProps = {
  prizing: []
};

GameSection.Prizing.displayName = "GameSection.Prizing";

// Bottom section wrapper
GameSection.BottomSection = function ({ className, ...rest }) {
  return (
    <section
      className={classNames(className, "game-section--bottom")}
      {...rest}
    />
  );
};

GameSection.BottomSection.propTypes = {
  className: PropTypes.string
};

GameSection.BottomSection.defaultProps = {
  className: ""
};

GameSection.BottomSection.displayName = "GameSection.BottomSection";
