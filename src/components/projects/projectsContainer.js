import React, { Component } from 'react';
import Link from 'gatsby-link'
import Helmet from "react-helmet";
import randomColor from 'randomcolor'


class ProjectsContainer extends Component{
  state = {
    backgroundColor: ""
  }


  render(){
    const color = randomColor({luminosity: 'dark', count: 5})
    return(
      <div className="projects-container">
          <h1>Some things I've made:</h1>
          <div className="projects-list">
            <ul>
              <li className="project-preview">
                <Link to="/projects/my-life-socks" style={{color: `${color[1]}`, borderColor: `${color[1]}`}}>
                  <div className="project-preview-text">
                    <h3>My Life Socks</h3>
                    <h4>A fully customizable virtual product display.</h4>
                  </div>
                  <img src="http://res.cloudinary.com/dwnehv6tb/image/upload/v1516506826/socks_q2wrxu.jpg"/>
              </Link>
              </li>
              <li className="project-preview">
                <Link to="/projects/gallerina" style={{color: `${color[2]}`, borderColor: `${color[2]}`}}>
                  <div className="project-preview-text">
                    <h3>Gallerina</h3>
                    <h4>A lightning fast exhibition design tool for gallerists, curators, and artists.</h4>
                  </div>
                </Link>
              </li>
              <li className="project-preview">
                <Link to="/projects/hey-mr-postman" style={{color: `${color[3]}`, borderColor: `${color[3]}`}}>
                  <div className="project-preview-text">
                    <h3>Hey Mr. Postman</h3>
                    <h4>An exciting new way to read and write emails utilizing the power of WebGL.</h4>
                  </div>
                </Link>
              </li>
              <li className="project-preview">
                <Link to="/projects/dnd-campaign-manager" style={{color: `${color[4]}`, borderColor: `${color[4]}`}}>
                  <div className="project-preview-text">
                    <h3>D&D Campaign Manager</h3>
                    <h4>The daunting task of creating a character for Dungeons and Dragons and organizing a campaign made easy.</h4>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
      </div>
    )
  }
}

export default ProjectsContainer
