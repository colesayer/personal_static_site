import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link'
import FaAngleDoubleLeft from 'react-icons/lib/fa/angle-double-left'

import '../layouts/index.css';

export default class Template extends Component{
  render(){

    const { markdownRemark: post } = this.props.data;
    console.log(post)
    return (
      <div>
        <Helmet title={`Cole Shapiro - ${post.frontmatter.title}`} />
        <div className="blog-post-container">
          <div className="blog-post">
            <h1>{post.frontmatter.title}</h1>
            <h3>{post.frontmatter.date}</h3>
            <Link to="/blog" ><FaAngleDoubleLeft style={{fontSize: '1.5rem'}}/>back to blog</Link>
            <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
        </div>
      </div>
    );
  }
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
`;
