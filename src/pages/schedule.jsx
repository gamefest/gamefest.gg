import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import SchedulePane from "components/SchedulePane";
import Layout from "components/Layout";
import SEO from "components/SEO";
import Mdx from "components/Mdx";

function SchedulePage() {
  const data = useStaticQuery(graphql`
    query SchedulePage {
      content: file(
        sourceInstanceName: { eq: "pages" }
        extension: { eq: "mdx" }
        name: { eq: "schedule" }
      ) {
        childMdx {
          body
        }
      }
    }
  `);
  const content = data.content.childMdx.body;
  return (
    <Layout className="schedule-page">
      <SEO title="Schedule" />
      <article>
        <Mdx content={content} scope={{ SchedulePane }} />
      </article>
    </Layout>
  );
}

export default SchedulePage;

SchedulePage.displayName = "SchedulePage";
