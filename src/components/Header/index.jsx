import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { useStaticQuery, graphql } from "gatsby";
import { useScrollThreshold } from "utility";
import { Navbar, Nav, Container } from "react-bootstrap";
import Link from "components/Link";
import LogoSvg from "assets/logoText_dark.svg";
import "./style.scss";

function Header({ transparentTop }) {
  const { leftLinks, rightLinks } = useStaticQuery(graphql`
    query NavLinks {
      file(name: { eq: "nav" }) {
        childDataYaml {
          leftLinks {
            ...Links
          }
          rightLinks {
            ...Links
          }
        }
      }
    }
  `).file.childDataYaml;
  // Top scroll behavior hook
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
            <LinkBar className="mr-auto main-nav" links={leftLinks} />
            <LinkBar className="flex-row icon-nav" links={rightLinks} />
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
