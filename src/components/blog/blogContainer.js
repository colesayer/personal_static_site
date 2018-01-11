import React, { Component } from 'react';
import Link from "gatsby-link";
import Helmet from "react-helmet";
import randomColor from 'randomcolor'
import BlogList from './blogList.js'
import styled from "styled-components";

const Section = styled.div`
background-color: rgba(0, 0, 0, 0.1);
 padding: 10px;
 margin-top: 5%;
 h3 {
   margin: 0 0 10px;
 }
`;

const BlogWrapper = styled.div`
display: flex;
flex-flow: row wrap;
align-items: center;
justify-content: center;
p {
   width: 100%;
   text-align: center;
   margin: 20px 0 0;
   font-weight: bold;
   font-size: 24px;
 }
`;

class BlogContainer extends Component{
  render(){
    const { edges: posts } = this.props.data.allMarkdownRemark;
    const color = randomColor({luminosity: 'light'})
    return(
      <Section>
        <BlogWrapper style={{borderColor: `${color}`}}>
          <h3 style={{color: `${color}`, fontWeight: `lighter`, fontSize: '18px'}}>Words I've Written:</h3>
          <BlogList posts={posts}/>
        </BlogWrapper>
      </Section>
    )
  }
}

export default BlogContainer
