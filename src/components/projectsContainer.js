import React, { Component } from 'react';
import Link from 'gatsby-link'
import Helmet from "react-helmet";

class ProjectsContainer extends Component{
  render(){
    return(
      <div style={{border: `1px solid black`, marginTop: '5%'}}>
        <h1>Projects Component</h1>
        <p>My Projects</p>
        <Link to="/">Go back to the homepage</Link>
      </div>
    )
  }
}

export default ProjectsContainer
