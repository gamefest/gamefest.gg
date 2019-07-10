import React from "react";

import Layout from "components/Layout";
import SEO from "components/SEO";
import { Container } from "react-bootstrap";

function SchedulePage() {
  return (
    <Layout>
      <SEO title="Schedule" />
      <Container>
        <h1>Schedule</h1>
      </Container>
    </Layout>
  );
}

export default SchedulePage;
