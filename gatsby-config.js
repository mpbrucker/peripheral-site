/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Peripheral Study`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-sitemap", "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", 
    {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "posts",
      "path": `${__dirname}/posts/`
    },
    __key: "posts"
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Peripheral Study`,
      short_name: `Peripheral`,
      start_url: `/`,
      display: `standalone`,
      icon: `src/images/icon.png`,
    }
  },
  {
    resolve: `gatsby-omni-font-loader`,
    options: {
      enableListener: true,
      preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
      web: [
        {
          name: `Libre Baskerville`,
          file: `https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap`,
        },
        {
          name: `Inter Tight`,
          file: `https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100..900;1,100..900`
        }
      ],
    },
  }]
};