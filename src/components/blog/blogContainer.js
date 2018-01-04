import React, { Component } from 'react';
import Link from "gatsby-link";
import Helmet from "react-helmet";
import randomColor from 'randomcolor'
import BlogList from './blogList.js'

import './blog.scss'

class BlogContainer extends Component{
  render(){
    const { edges: posts } = this.props.data.allMarkdownRemark;
    const color = randomColor({luminosity: 'light'})
    return(
      <div className="blog-posts" style={{borderColor: `${color}`}}>
        <BlogList posts={posts}/>
      </div>
    )
  }
}

export default BlogContainer
