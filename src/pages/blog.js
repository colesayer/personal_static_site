import React from 'react'
import BlogContainer from '../components/blog/blogContainer.js'

const BlogPage = ({data}) => (
    <BlogContainer data={data}/>
)

export default BlogPage

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            img
          }
        }
      }
    }
  }
`;
