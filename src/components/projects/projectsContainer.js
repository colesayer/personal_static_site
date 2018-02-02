import React, { Component } from 'react';
import Link from 'gatsby-link'
import Helmet from "react-helmet";
import randomColor from 'randomcolor'
import { logos } from '../../components/services/logos.js'


class ProjectsContainer extends Component{
  state = {
    sock: "",
    gallerina: "",
    postman: "",
    dnd: "",
    randomColors: [],
  }

  handleMouseEnter = (key) => {
    console.log("BG", key)
    var hexColor = randomColor({luminosity: 'bright'})
    var rgbColor = hexToRgb(hexColor)
    var bgRGBA = "rgba(" + `${rgbColor.r}` + ", " + `${rgbColor.g}` + ", " + `${rgbColor.b}` + ", 0.5)"

    var compKey = key
    this.setState({
      [key]: bgRGBA,
    })

    console.log(this.state)
  }

  handleMouseLeave = (key) => {
    this.setState({
      [key]: ""
    })
  }

  componentDidMount(){
    console.log("mounted")
    const colors = randomColor({luminosity: 'dark', count: 5})
    this.setState({
      randomColors: colors
    })
  }

  render(){
    return(
      <div className="projects-container">
        <h1 style={{color: `${this.state.randomColors[4]}`}}>Some things I've made:</h1>
        <Link to="/projects/my-life-socks">
          <div className="project-card" style={{borderColor: `${this.state.randomColors[0]}`, backgroundColor: `${this.state.sock}`}} onMouseEnter={this.handleMouseEnter.bind(this, "sock")} onMouseLeave={this.handleMouseLeave.bind(this, "sock")}>
            <div className="project-card-image">
              <img src="http://res.cloudinary.com/dwnehv6tb/image/upload/f_auto/v1517462724/socks_yy6yg2.jpg"/>
            </div>
            <div className="project-card-text">
              <h3 id="life-socks">My Life Socks</h3>
              <h4>A fully customizable, photorealistic, virtual product display.</h4>
              {logos(["react", "redux", "rails", "threejs", "blender"])}
            </div>
          </div>
        </Link>
        <Link to="/projects/gallerina">
          <div className="project-card" style={{borderColor: `${this.state.randomColors[1]}`, backgroundColor: `${this.state.gallerina}`}} onMouseEnter={this.handleMouseEnter.bind(this, "gallerina")} onMouseLeave={this.handleMouseLeave.bind(this, "gallerina")}>
            <div className="project-card-text">
            <h3 id="gallerina">Gallerina</h3>
              <h4>A lightning fast exhibition design tool for gallerists, curators, and artists.</h4>
              {logos(["react", "redux", "threejs", "rails"])}
            </div>
            <div className="project-card-image">
              <img src="http://res.cloudinary.com/dwnehv6tb/image/upload/f_auto/v1517462724/gallerina_inqeqa.jpg"/>
            </div>
          </div>
        </Link>
        <Link to="/projects/hey-mr-postman">
          <div key="postman" className="project-card" style={{borderColor: `${this.state.randomColors[2]}`, backgroundColor: `${this.state.postman}`}} onMouseEnter={this.handleMouseEnter.bind(this, "postman")} onMouseLeave={this.handleMouseLeave.bind(this, "postman")}>
            <div className="project-card-image">
              <img src="http://res.cloudinary.com/dwnehv6tb/image/upload/f_auto/v1517462724/postman_qokeax.jpg"/>
            </div>
            <div className="project-card-text">
            <h3 id="postman">HEY MR POSTMAN</h3>
              <h4>An exciting new way to read and write emails utilizing the power of WebGL.</h4>
              {logos(["react", "threejs", "rails"])}
            </div>
          </div>
        </Link>
        <Link to="projects/dnd-campaign-manager">
          <div className="project-card" style={{borderColor: `${this.state.randomColors[3]}`, backgroundColor: `${this.state.dnd}`}} onMouseEnter={this.handleMouseEnter.bind(this, "dnd")} onMouseLeave={this.handleMouseLeave.bind(this, "dnd")}>
            <div className="project-card-text">
            <h3 id="dnd">D&D Campaign Manager</h3>
            <h4>The daunting task of creating a character for Dungeons and Dragons and organizing a campaign made easy.</h4>
            {logos(["rails", "postgresql", "bootstrap"])}
            </div>
            <div className="project-card-image">
              <img src="http://res.cloudinary.com/dwnehv6tb/image/upload/f_auto/v1517462724/dnd_tuhdt7.jpg"/>
            </div>
          </div>
        </Link>
      </div>

    )
  }
}

export default ProjectsContainer

function hexToRgb(hex){
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
  } : null;
}
