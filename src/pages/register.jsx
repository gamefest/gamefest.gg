import React from "react";

import Layout from "components/Layout";
import SEO from "components/SEO";
import PageLayout from "components/PageLayout";

function RegisterPage() {
  return (
    <Layout>
      <SEO title="Register" />
      <PageLayout header="Register" icon="ticket" />
    </Layout>
  );
}

export default RegisterPage;
