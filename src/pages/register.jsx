import React, { useState, useCallback } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useNProgress } from "@tanem/react-nprogress";
import { log } from "utility";
import classNames from "classnames";

import Layout from "components/Layout";
import SEO from "components/SEO";
import Mdx from "components/Mdx";
import LoadingBar from "components/LoadingBar";

import "./scss/register.scss";

function RegisterPage() {
  const data = useStaticQuery(graphql`
    query RegisterPage {
      content: file(
        sourceInstanceName: { eq: "pages" }
        extension: { eq: "mdx" }
        name: { eq: "register" }
      ) {
        childMdx {
          body
          frontmatter {
            embed
          }
        }
      }
    }
  `);
  const { body, frontmatter } = data.content.childMdx;
  const { embed } = frontmatter;

  // Iframe loading state
  const [isLoading, setIsLoading] = useState(true);
  const { animationDuration, progress } = useNProgress({
    isAnimating: isLoading
  });
  const onIframeLoad = useCallback(() => {
    log("Registration embed loaded");
    setIsLoading(false);
  });

  return (
    <Layout className="register-page" noFooter>
      <SEO title="Register" />
      <Mdx content={body} />
      <div className="register-page--content">
        <iframe src={embed} frameBorder="0" onLoad={onIframeLoad} />
        <div className={classNames("loading-overlay", { loading: isLoading })}>
          {isLoading && <span className="sr-only">Loading...</span>}
          <LoadingBar
            progress={progress}
            animationDuration={animationDuration}
          />
        </div>
      </div>
    </Layout>
  );
}

export default RegisterPage;

RegisterPage.displayName = "RegisterPage";
