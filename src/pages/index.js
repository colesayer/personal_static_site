import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components";
import ThreeTitle from '../components/three/threeTitle.js'

const IndexPage = ({data}) => {
  console.log("in index", data)
  return(
    <ThreeTitle />
  )

}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
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

// <AboutContainer />
// <ProjectsContainer />
// <BlogContainer data={data}/>
