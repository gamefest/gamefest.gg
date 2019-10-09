import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { useMedia, useMdxImages } from "utility";

import { Col, Alert } from "react-bootstrap";
import Layout from "components/Layout";
import Icon from "components/Icon";
import SEO from "components/SEO";
import Mdx from "components/Mdx";
import Parallax from "components/Parallax";
import GamesBar from "components/GamesBar";
import Link from "components/Link";
import Container from "components/Container";
import SponsorTiles from "components/SponsorTiles";
import ParallaxProvider from "components/ParallaxProvider";

import LogoSvg from "../../content/img/logo.svg";
import ArrowSvg from "assets/arrow_down.svg";
import HexSvg from "assets/logo_small_hex.svg";
import "./scss/index.scss";

function IndexPage() {
  const mdx = useStaticQuery(graphql`
    query IndexContent {
      file(
        sourceInstanceName: { eq: "pages" }
        extension: { eq: "mdx" }
        name: { eq: "index" }
      ) {
        childMdx {
          body
          frontmatter {
            ...MdxImages
          }
        }
      }
    }
  `).file.childMdx;
  const body = mdx.body;
  const images = useMdxImages(mdx);

  return (
    <Layout headerProps={{ transparentTop: true }} navOffset={0}>
      <SEO />
      <ParallaxProvider>
        <Mdx content={body} images={images} />
      </ParallaxProvider>
    </Layout>
  );
}

export default IndexPage;

IndexPage.displayName = "IndexPage";

// ? ==============
// ? Sub-components
// ? ==============

// Near full-page title content
IndexPage.Title = function({ date, location, image, showGames }) {
  const isShort = useMedia("(max-height: 620px)");
  const titleInner = (
    <>
      <Container row className="index-title">
        <Col lg={8}>
          <div className="index-title--logo" children={<LogoSvg />} />
          <div className="index-title--lead">
            <h2>{date}</h2>
            <h3>{location}</h3>
          </div>
          <GamesBar show={showGames} />
        </Col>
      </Container>
      <div className="index-title-overlay">
        <div className="index-title-overlay--arrow" children={<ArrowSvg />} />
      </div>
    </>
  );
  return (
    <Parallax
      children={titleInner}
      image={image}
      height={isShort ? "600px" : "85vh"}
      overlay="rgba(0,0,0,0.8)"
    />
  );
};

IndexPage.Title.propTypes = {
  date: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  showGames: PropTypes.bool
};

IndexPage.Title.defaultProps = {
  showGames: true
};

IndexPage.Title.displayName = "IndexPage.Title";

// Hero content with large hex icon
IndexPage.Hero = function({ children }) {
  return (
    <Container className="bg-hex">
      <div className="index-hero">
        <div className="index-hero--logo" children={<HexSvg />} />
        <div className="index-hero--text" children={children} />
      </div>
    </Container>
  );
};

IndexPage.Hero.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
};

IndexPage.Hero.displayName = "IndexPage.Hero";

// "Feature" column with icon
IndexPage.Col = function({ icon, children }) {
  return (
    <Col md={4} className="index-col" as="article">
      <Icon name={icon} size="3x" />
      {children}
    </Col>
  );
};

IndexPage.Col.propTypes = {
  icon: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
};

IndexPage.Col.defaultProps = {
  icon: "trophy"
};

IndexPage.Col.displayName = "IndexPage.Col";

// Sponsors content element at the bottom of the Index Page
IndexPage.Sponsors = function({ children, showSponsors }) {
  return (
    <div className="index-sponsors">
      {children}
      {showSponsors ? (
        <div className="sponsor-list">
          <SponsorTiles compact />
        </div>
      ) : (
        <Alert variant="info" className="mt-5 py-5">
          <div
            className="mb-3"
            children={
              <Icon name="calendar-day" size="2x" style={{ opacity: 0.4 }} />
            }
          />
          <h5 className="mb-0">
            Sponsors will be announced closer to the event
          </h5>
        </Alert>
      )}
      <Link className="btn btn-primary sponsor-info" href="/sponsors">
        View Sponsors
      </Link>
    </div>
  );
};

IndexPage.Sponsors.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  showSponsors: PropTypes.bool
};

IndexPage.Sponsors.defaultProps = {
  showSponsors: true
};

IndexPage.Sponsors.displayName = "IndexPage.Sponsors";
