require('dotenv').config()

const queries = require('./src/utils/algolia.queries')

module.exports = {
  siteMetadata: {
    title: `My blog`,
    description: `Meu blog pessoal!`,
    author: `Marcos Olavo Silva Buganeme`,
    position: `Developer | Devops`,
    siteUrl: `https://marcosbuganeme.com.br`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-161993060-1`,
        head: true,
        anonymize: true,
        respectDNT: true,
        pageTransitionDelay: 650
      },
    },
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/assets/img`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images-v2`,
            options: {
              name: `uploads`
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
              linkImagesToOriginal: false
            }
          },
          `gatsby-remark-lazy-load`,
          `gatsby-remark-prismjs`
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-algolia-search`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
        queries,
        chunkSize: 10000,
        enablePartialUpdates: true
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Marcos Buganeme`,
        short_name: `MBuganeme`,
        start_url: `/`,
        background_color: `#1C2938`,
        theme_color: `#1C2938`,
        display: `minimal-ui`,
        icon: `static/assets/img/marcosbuganeme-icon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify-cms`
  ],
}
