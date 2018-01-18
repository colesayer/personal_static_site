import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link'

// import '../css/blog-post.css';

export default function Template({
  data
}) {
  const { markdownRemark: post } = data;
  return (
    <div className="blog-post-container" style={{backgroundColor: 'white', padding: '10%'}}>
      <Helmet title={`Cole Shapiro - ${post.frontmatter.title}`} />
      <div className="blog-post">
        <h1>{post.frontmatter.title}</h1>
        <h3>{post.frontmatter.date}</h3>
        <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      <Link to ="/blog">Back</Link>
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
;
