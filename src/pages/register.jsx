import React from "react";

import Layout from "components/Layout";
import SEO from "components/SEO";
import { Container } from "react-bootstrap";

function RegisterPage() {
  return (
    <Layout>
      <SEO title="Register" />
      <Container>
        <h1>Register</h1>
      </Container>
    </Layout>
  );
}

export default RegisterPage;
