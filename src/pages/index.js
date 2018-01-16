import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components";

const IndexPage = ({data}) => {
  console.log("in index", data)
  return(
    <div style={{ margin: `0 auto`, textAlign: `center`}}>
    <Link to="/about" style={{ padding: `5%`}}>About</Link>
    <Link to="/blog" style={{ padding: `5%`}}>Blog</Link>
    <Link to="/projects" style={{ padding: `5%`}}>Projects</Link>

    </div>
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
