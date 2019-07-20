import React from "react";

import Layout from "components/Layout";
import SEO from "components/SEO";
import PageLayout from "components/PageLayout";

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="Not Found" />
      <PageLayout header="Page Not Found 😕" />
    </Layout>
  );
}

export default NotFoundPage;
