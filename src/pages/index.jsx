import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "components/Layout";
import Icon from "components/Icon";
import SEO from "components/SEO";
import Mdx from "components/Mdx";
import { Col } from "react-bootstrap";

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
        }
      }
    }
  `).file.childMdx.body;

  return (
    <Layout headerProps={{ transparentTop: true }}>
      <SEO />
      <Mdx content={mdx} />
    </Layout>
  );
}

export default IndexPage;

// ? ==============
// ? Sub-components
// ? ==============

// Near full-page title content
IndexPage.Title = function({ date, location }) {
  return null;
};

IndexPage.Title.propTypes = {
  date: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired
};

// Hero content with large hex icon
IndexPage.Hero = function({ children }) {
  return null;
};

IndexPage.Hero.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
};

// TODO implement
// "Feature" column with header and icon
IndexPage.Col = function({ header, icon }) {
  return (
    <Col>
      <Icon name={icon} />
      <h3>{header}</h3>
    </Col>
  );
};

IndexPage.Col.propTypes = {
  header: PropTypes.string,
  icon: PropTypes.string
};

IndexPage.Col.defaultProps = {
  header: "",
  icon: "trophy"
};

// TODO implement
// Sponsors content element at the bottom of the Index Page
IndexPage.Sponsors = function({ children }) {
  return null;
};

IndexPage.Sponsors.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
};
