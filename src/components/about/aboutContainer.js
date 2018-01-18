import React, { Component } from 'react';
import Link from 'gatsby-link'
import Helmet from "react-helmet";
import randomColor from 'randomcolor'
import styled from "styled-components";

const AboutWrapper = styled.div`
display: inline-block;
flex-flow: row wrap;
align-items: center;
justify-content: center;
textAlign: center;
background-color: #605;
padding: 20px;
h3{
  font-size: 18px;
  font-family: Ariel, sans-serif;
  font-weight: lighter;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  textAlign: center;
}
`;

const Section = styled.div`

`;

class AboutContainer extends Component{
  render(){
    const color = randomColor({count: 12, luminosity: 'light'})
    return(
      <AboutWrapper >
        <h3>
          <span style={{color: `${color[0]}`}}>
            Full stack web developer and visual artist, based in New York. I like{" "}
          </span>
          <span style={{color: `${color[1]}`}}>
          Ruby on Rails,{" "}
          </span>
          <span style={{color: `${color[2]}`}}>
           React,{" "}
           </span>
           <span style={{color: `${color[0]}`}}>
           and{" "}
           </span>
           <span style={{color: `${color[3]}`}}>l</span>
           <span style={{color: `${color[4]}`}}>o</span>
           <span style={{color: `${color[5]}`}}>o</span>
           <span style={{color: `${color[6]}`}}>o</span>
           <span style={{color: `${color[9]}`}}>v</span>
           <span style={{color: `${color[10]}`}}>e{" "}</span>
           <span style={{color: `${color[11]}`}}>Three.js</span>
        </h3>
      </AboutWrapper>
    )
  }
}

export default AboutContainer
