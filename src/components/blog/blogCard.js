import React, { Component } from 'react';
import Link from "gatsby-link";
import randomColor from 'randomcolor'


class BlogCard extends Component{
  render(){
    const post = this.props.post
    const color = randomColor({luminosity: 'light'})
    return(
      <li className="blog-post-preview">
        <Link to={post.frontmatter.path} style={{color: `${color}`, borderColor: `${color}`}}>
          <span>
          <h3>{post.frontmatter.title}</h3>
          </span>
          <span>
          <h4>{post.frontmatter.date}</h4>
          </span>

        </Link>
      </li>
    )
  }
}

export default BlogCard

// <p>{post.excerpt}</p>
