import React, { Component } from 'react';
import Link from 'gatsby-link'
import Helmet from "react-helmet";
import randomColor from 'randomcolor'
import styled from "styled-components";

const Section = styled.div`
 background-color: rgba(0, 0, 0, 0.1);
 padding: 5px;
 margin-top: 5%;
 h3 {
   margin: 0 0 10px;
   font-weight: lighter;
 }
`;

const ProjectWrapper = styled.div`
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

const StyledList = styled.ul`
  list-style: none;
  padding: 5px;
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
    margin: 0 -10px;
    flex: 1;
    padding: 5px;
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


class ProjectsContainer extends Component{
  state = {
    backgroundColor: ""
  }


  render(){
    const color = randomColor({luminosity: 'light', count: 5})
    return(
      <Section>
        <ProjectWrapper style={{borderColor: `${color[0]}`}}>
          <h3 style={{color: `${color[0]}`, fontSize: '18px'}}>Things I've made:</h3>
          <StyledList>
            <li>
              <Link to="/projects/my-life-socks" style={{color: `${color[1]}`}}>
                <span>
                  <h3>My Life Socks</h3>
                </span>
              </Link>
            </li>
            <li>
              <Link to="/projects/gallerina" style={{color: `${color[2]}`}}>
                <span>
                  <h3>Gallerina</h3>
                </span>
              </Link>
            </li>
            <li>
              <Link to="/projects/hey-mr-postman" style={{color: `${color[3]}`}}>
                <span>
                  <h3>Hey Mr. Postman</h3>
                </span>
              </Link>
            </li>
            <li>
              <Link to="/projects/dnd-campaign-manager" style={{color: `${color[4]}`}}>
                <span>
                  <h3>D&D Campaign Manager</h3>
                </span>
              </Link>
            </li>

          </StyledList>
        </ProjectWrapper>
      </Section>
    )
  }
}

export default ProjectsContainer
