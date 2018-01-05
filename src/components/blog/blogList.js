import React, { Component } from 'react';
import BlogCard from './blogCard.js'
import styled from "styled-components";



const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  a {
    color: white;
    display: flex;
    flex-direction: column;
    transition: all 0.3s;
    padding: 10px;
    margin: 0 -10px;
    flex: 1;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 4px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    margin: 10px;
    align-items: center;
    text-decoration: none;
    text-align: center;
    &:hover {
      box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.25);
      padding: 15px 10px;
      text-decoration: none;
      transition: all 0.3s;
    }
    span:first-child {
      font-size: 18px;
      font-weight: bold;
      padding-bottom: 5px;
    }
    span:last-child {
      font-size: 14px;
    }
  }
`;

class BlogList extends Component{



  render(){
    var blogPosts = this.props.posts
      .filter(post => post.node.frontmatter.title.length > 0)
      .map(({ node: post}) => <BlogCard post={post} key={post.id}/>)

    return(
      <StyledList>
        {blogPosts}
      </StyledList>
    )
  }
}

export default BlogList
