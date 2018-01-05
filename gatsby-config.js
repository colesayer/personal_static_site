module.exports = {
  siteMetadata: {
    title: `Cole Shapiro`,
  },
  plugins: [
    'gatsby-plugin-catch-links',
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/posts`,
        name: 'posts',
      },
    },
    {
     resolve: 'gatsby-transformer-remark',
     options: {
       plugins: [] // just in case those previously mentioned remark plugins sound cool :)
     }
   },
   {
     resolve: `gatsby-plugin-typography`,
     options: {
       pathToConfigModule: `src/utils/typography.js`,
     }
   },
  ],
}
