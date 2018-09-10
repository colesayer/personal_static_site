module.exports = {
  siteMetadata: {
    title: `Cole Shapiro`,
  },
  plugins: [
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/`,
        name: 'posts',
      },
    },
    {
     resolve: 'gatsby-transformer-remark',
     options: {
       plugins: [] // just in case those previously mentioned remark plugins sound cool :)
     }
   },
  ],
}
