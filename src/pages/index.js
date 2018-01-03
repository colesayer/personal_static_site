import React from 'react'
import Link from 'gatsby-link'
import AboutContainer from '../components/aboutContainer.js'
import ProjectsContainer from '../components/projectsContainer.js'
import BlogContainer from '../components/blogContainer.js'

const IndexPage = ({data}) => {
  console.log("in index", data)
  return(
    <div>
      <AboutContainer />
      <ProjectsContainer />
      <BlogContainer data={data}/>
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
