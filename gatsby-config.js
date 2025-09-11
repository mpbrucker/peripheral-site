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
      resolve: `gatsby-transformer-remark`,
      options: {
        footnotes: true,
        gfm: true,
        plugins: [
          {
            resolve: `gatsby-remark-footnotes`,
            options: {
            }
          }
        ]
      },
    },
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
          name: `Playfair Display`,
          file: `https://fonts.googleapis.com/css2?family=Ballet:opsz@16..72&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap`,
        },
        {
          name: `Inter Tight`,
          file: `https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100..900;1,100..900`
        }
      ],
    },
  }
]
};