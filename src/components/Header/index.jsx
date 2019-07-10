import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { useStaticQuery, graphql } from "gatsby";
import { isEmptyOrNil, useScrollThreshold } from "utility";
import { Navbar, Nav, Container } from "react-bootstrap";
import Link from "components/Link";
import LogoSvg from "assets/logoText_dark.svg";
import "./style.scss";

function Header({ transparentTop }) {
  const { links } = useStaticQuery(graphql`
    query HeaderContent {
      file(
        extension: { regex: "/md/" }
        sourceInstanceName: { eq: "data" }
        name: { eq: "nav" }
      ) {
        childMarkdownRemark {
          frontmatter {
            links {
              ...Links
            }
          }
        }
      }
    }
  `).file.childMarkdownRemark.frontmatter;

  // Split links into main and social links
  const firstIconLink = links.findIndex(l => isEmptyOrNil(l.text));
  const mainLinks = links.slice(0, firstIconLink);
  const iconLinks = links.slice(firstIconLink);
  const isTop = useScrollThreshold(50);

  return (
    <Navbar
      bg="primary"
      sticky="top"
      expand="lg"
      variant="dark"
      className={classNames("navbar-primary", {
        "navbar-primary__top": transparentTop && isTop
      })}
    >
      <Container>
        <Navbar.Brand href="/" aria-label="Gamefest">
          <LogoSvg />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="primary-nav" />
        <Navbar.Collapse id="primary-nav">
          <div className="collapse-inner">
            <LinkBar className="mr-auto main-nav" links={mainLinks} />
            <LinkBar className="flex-row icon-nav" links={iconLinks} />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

Header.propTypes = {
  transparentTop: PropTypes.bool
};

Header.defaultProps = {
  transparentTop: false
};

// ? ================
// ? Helper component
// ? ================

function LinkBar({ links, ...rest }) {
  return (
    <Nav {...rest}>
      {links.map(link => (
        <Nav.Item key={link.href} children={<Link {...link} />} />
      ))}
    </Nav>
  );
}
