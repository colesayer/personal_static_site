import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components";
import BlogContainer from '../components/blog/blogContainer.js'


export default ({data}) => {
  console.log("BLOGPAGE", data)
  return(
    <div>
      <BlogContainer data={data}/>
    </div>

  )

}




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
          }
        }
      }
    }
  }
`;
