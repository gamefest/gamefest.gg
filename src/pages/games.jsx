import React from "react";

import Layout from "components/Layout";
import SEO from "components/SEO";
import { Container } from "react-bootstrap";

function GamesPage() {
  return (
    <Layout>
      <SEO title="Games" />
      <Container>
        <h1>Games</h1>
      </Container>
    </Layout>
  );
}

export default GamesPage;
