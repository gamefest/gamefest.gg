const themeColor = "#699433";

module.exports = {
  siteMetadata: {
    title: `Gamefest`,
    description: `Gamefest is one of the largest collegiate BYOC LANs in the southeast, hosted each year at Georgia Tech`,
    author: `@joazlazer`,
    siteUrl: `https://gamefest.gg`,
    themeColor,
    msTileColor: "#00a300" // Green Win10/8 color
  },
  pathPrefix: "/",
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/data/`,
        name: "data"
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 800,
              showCaptions: ["title"]
            }
          },
          {
            resolve: "gatsby-remark-responsive-iframe",
            options: {}
          },
          "gatsby-remark-smartypants"
        ]
      }
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: themeColor,
        showSpinner: false
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {}
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-remove-trailing-slashes`,
    // `gatsby-plugin-preact`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-catch-links`
  ]
};
