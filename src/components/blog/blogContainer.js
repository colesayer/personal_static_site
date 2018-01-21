import React, { Component } from 'react';
import Link from "gatsby-link";
import Helmet from "react-helmet";
import randomColor from 'randomcolor'
import BlogList from './blogList.js'

import '../../layouts/index.css'


class BlogContainer extends Component{
  render(){
    const { edges: posts } = this.props.data.allMarkdownRemark;
    const color = randomColor({luminosity: 'bright'})
    const bgColor = randomColor({luminosity: 'dark'})
    return(
      <div className="blog-container">
        <h1> Some things I've written: </h1>
        <div className="blog-list" style={{borderColor: `${color}`}}>
          <BlogList posts={posts} bgColor={"bgColor"}/>
        </div>
      </div>
    )
  }
}

export default BlogContainer
