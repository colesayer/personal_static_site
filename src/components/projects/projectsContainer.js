import React, { Component } from 'react';
import Link from 'gatsby-link'
import Helmet from "react-helmet";
import randomColor from 'randomcolor'

import './projects.scss'

class ProjectsContainer extends Component{
  render(){
    const color = randomColor({luminosity: 'light', count: 5})
    return(
      <div className="projects" style={{borderColor: `${color[0]}`, marginTop: '5%'}}>
        <ul>
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

        </ul>

      </div>
    )
  }
}

export default ProjectsContainer
