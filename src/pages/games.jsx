import React from "react";

import Layout from "components/Layout";
import SEO from "components/SEO";
import PageLayout from "components/PageLayout";

function GamesPage() {
  return (
    <Layout>
      <SEO title="Games" />
      <PageLayout header="Games" icon="list" />
    </Layout>
  );
}

export default GamesPage;
