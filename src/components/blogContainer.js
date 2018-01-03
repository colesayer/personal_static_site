import React, { Component } from 'react';
import Link from "gatsby-link";
import Helmet from "react-helmet";

class BlogContainer extends Component{
  render(){
    const { edges: posts } = this.props.data.allMarkdownRemark;
    return(
      <div className="blog-posts" style={{border: `1px solid black`, marginTop: '5%'}}>
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <div className="blog-post-preview" key={post.id}>
                <h1>
                  <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                </h1>
                <h2>{post.frontmatter.date}</h2>
                <p>{post.excerpt}</p>
              </div>
            );
          })}
      </div>

    )
  }
}

export default BlogContainer
