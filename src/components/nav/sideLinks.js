import React, { Component } from 'react'

class SideLinks extends Component{
  render(){
    return(
      <div className="side-links">
        <div className="side-links-content">
          Cole Shapiro
          <br/>
          New York, NY
          <br/>
          <br/>
          <a href="https://etr.plus/" target="_blank">ETR+</a>
          <br/>
          <a href="http://gallerina.herokuapp.com/login" target="_blank">Gallerina</a>
          <br/>
          <a href="http://wearhousesocks.herokuapp.com/" target="_blank">Wear House Socks</a>
          <br/>
          <br/>
          <a href="https://www.linkedin.com/in/cole-shapiro/" target="_blank">LinkedIn</a>
          <br />
          <a href="https://github.com/colesayer" target="_blank">Github</a>
          <br />
          <a id="emailMe" href="mailto:colesayershapiro@gmail.com">Email</a>
        </div>
      </div>
    )
  }
}

export default SideLinks
