import React from "react";

import Layout from "components/Layout";
import SEO from "components/SEO";
import PageLayout from "components/PageLayout";

function WatchPage() {
  return (
    <Layout>
      <SEO title="Watch" />
      <PageLayout header="Watch" icon="twitch" />
    </Layout>
  );
}

export default WatchPage;

WatchPage.displayName = "WatchPage";
