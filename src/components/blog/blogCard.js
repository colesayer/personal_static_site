import React, { Component } from 'react';
import Link from "gatsby-link";
import randomColor from 'randomcolor'


class BlogCard extends Component{
  render(){

    const post = this.props.post
    console.log("BLOG CARD", post)
    const color = randomColor({luminosity: 'dark'})
    return(
      <li className="blog-post-preview">
        <Link to={post.frontmatter.path} style={{color: `${color}`, borderColor: `${color}`}}>
          <div className="blog-post-preview-text">
            <h3>{post.frontmatter.title}</h3>
            <h4>{post.frontmatter.date}</h4>
            <p>{post.excerpt}</p>
          </div>
          <img src={post.frontmatter.img}/>
        </Link>
      </li>
    )
  }
}

export default BlogCard

// <p>{post.excerpt}</p>
