import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { isNil } from "utility";

import Helmet from "react-helmet";

// Adds all meta/link tags to the document <head> using Helmet, including those
// geared towards SEO
function SEO({ description, lang, meta, title }) {
  const {
    title: globalTitle,
    description: globalDescription,
    author,
    themeColor,
    msTileColor
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            themeColor
            msTileColor
          }
        }
      }
    `
  ).site.siteMetadata;

  const metaDescription = description || globalDescription;
  const formattedTitle = isNil(title)
    ? globalTitle
    : `${title} | ${globalTitle}`;
  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={formattedTitle}
      meta={[
        {
          "http-equiv": "Content-Type",
          content: "text/html; charset=UTF-8"
        },
        // Web crawler
        {
          name: "robots",
          content: "index, follow"
        },
        // Misc. display meta
        {
          name: "theme-color",
          content: themeColor
        },
        {
          name: "msapplication-config",
          content: "/browserconfig.xml"
        },
        {
          name: "msapplication-TileColor",
          content: msTileColor
        },
        // Open Graph (Facebook)
        {
          property: "og:type",
          content: "website"
        },
        {
          property: "og:image",
          content: "/img/card.jpg"
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        // Twitter
        {
          name: "twitter:card",
          content: "summary"
        },
        {
          name: `twitter:creator`,
          content: author
        },
        {
          name: `twitter:title`,
          content: formattedTitle
        },
        {
          name: `twitter:description`,
          content: metaDescription
        },
        // Other
        {
          name: `description`,
          content: metaDescription
        },
        ...meta
      ]}
      link={[
        // PWA
        {
          rel: "manifest",
          href: "/site.webmanifest"
        },
        // Favicons
        {
          rel: "mask-icon",
          color: themeColor,
          href: "/img/safari-pinned-tab.svg"
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/img/apple-touch-icon.png"
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/img/favicon-32x32.png"
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/img/favicon-16x16.png"
        },
        {
          rel: "shortcut icon",
          href: "/img/favicon.ico"
        }
      ]}
    />
  );
}

export default SEO;

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  title: null
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string
};

SEO.displayName = "SEO";
