import React, { useEffect } from "react";

import SEO from "components/SEO";
import Link from "components/Link";
import Layout from "components/Layout";
import Container from "components/Container";

const discordUrl = "https://discord.gg/f65UDtd";

function DiscordPage() {
  useEffect(() => {
    window.location.replace(discordUrl);
  });
  return (
    <Layout className="games-page">
      <SEO title="Games" />
      <Container className="pt-4">
        <h2>Gamefest Discord</h2>
        <p>
          You will be redirected soon. If that doesn't work,{" "}
          <Link href={discordUrl}>click here</Link>.
        </p>
      </Container>
    </Layout>
  );
}

export default DiscordPage;

DiscordPage.displayName = "DiscordPage";
