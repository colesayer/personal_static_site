import React, { Component } from 'react';
import Link from "gatsby-link";
import Helmet from "react-helmet";
import randomColor from 'randomcolor'
import BlogCard from './blogCard.js'

import '../../layouts/index.css'


class BlogContainer extends Component{
  render(){
    const { edges: posts } = this.props.data.allMarkdownRemark;
    const color = randomColor({luminosity: 'dark'})

    var blogPosts = posts
      .filter(post => post.node.frontmatter.title.length > 0)
      .map(({ node: post}, idx) => <BlogCard post={post} key={post.id} idx={idx + 1}/>)

    return(
      <div className="blog-container">
        <div className="blog-header">
          <h2 style={{color: `${color}`}}>Some things I've written: </h2>
        </div>
        {blogPosts}
      </div>
    )
  }
}

export default BlogContainer
