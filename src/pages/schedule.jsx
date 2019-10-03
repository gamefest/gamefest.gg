import React from "react";

import Layout from "components/Layout";
import SEO from "components/SEO";
import PageLayout from "components/PageLayout";

function SchedulePage() {
  return (
    <Layout>
      <SEO title="Schedule" />
      <PageLayout header="Schedule" icon="calendar-alt" />
    </Layout>
  );
}

export default SchedulePage;

SchedulePage.displayName = "SchedulePage";
