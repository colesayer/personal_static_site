import React, { Component } from 'react';
import Link from 'gatsby-link'
import Helmet from "react-helmet";

class AboutContainer extends Component{
  render(){
    return(
      <div style={{border: `1px solid black`, marginTop: '5%'}}>
        <h1>About Component</h1>
        <p>About ME</p>
        <Link to="/">Go back to the homepage</Link>
      </div>
    )
  }
}

export default AboutContainer
