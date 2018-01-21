import React, { Component } from 'react';
import BlogCard from './blogCard.js'

class BlogList extends Component{
  render(){
    var blogPosts = this.props.posts
      .filter(post => post.node.frontmatter.title.length > 0)
      .map(({ node: post}) => <BlogCard post={post} key={post.id}/>)
    return(
      <ul>
        {blogPosts}
      </ul>
    )
  }
}

export default BlogList
