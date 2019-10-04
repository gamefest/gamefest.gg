const themeColor = "#699433";
const bgColor = "#222222";

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
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/pages/`,
        name: "pages"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/img/`,
        name: "img"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/games/`,
        name: "games"
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
      options: {
        trackingId: "UA-141036948-2"
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-smartypants",
            options: {}
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1500,
              withWebp: true,
              backgroundColor: bgColor,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Titillium Web`,
            variants: [`300`, `500`, `700`]
          },
          {
            family: `Roboto`,
            variants: [`300`, `300i`, `400`, `400i`, `700`, `700i`]
          }
        ]
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-react-svg`,
    `gatsby-transformer-yaml`
  ]
};
