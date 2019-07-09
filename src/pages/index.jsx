import React from "react";

import Layout from "components/Layout";
import SEO from "components/SEO";
import { Container } from "react-bootstrap";

function IndexPage() {
  return (
    <Layout headerProps={{ transparentTop: true }}>
      <SEO />
      <Container style={{ height: "2000px" }}>
        <p> Test content </p>
      </Container>
    </Layout>
  );
}

export default IndexPage;
