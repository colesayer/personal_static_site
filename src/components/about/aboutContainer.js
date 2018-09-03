import React, { Component } from 'react';
import Link from 'gatsby-link'
import Helmet from "react-helmet";
import randomColor from 'randomcolor'


class AboutContainer extends Component{
  state = {
    email: "",
    resume: "",
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
    const colors = randomColor({luminosity: 'dark', count: 17})
    this.setState({
      randomColors: colors
    })
  }
  render(){
    return(
      <div className="about-container">
        <div className="about-card-static">
        <h1>
          <span style={{color: `${this.state.randomColors[0]}`}}>
            I am a full stack web developer and visual artist, based in New York. I like{" "}
          </span>
          <span style={{color: `${this.state.randomColors[1]}`}}>
          Ruby on Rails,{" "}
          </span>
          <span style={{color: `${this.state.randomColors[2]}`}}>
           React,{" "}
           </span>
           <span style={{color: `${this.state.randomColors[0]}`}}>
           and{" "}
           </span>
           <span style={{color: `${this.state.randomColors[3]}`}}>l</span>
           <span style={{color: `${this.state.randomColors[4]}`}}>o</span>
           <span style={{color: `${this.state.randomColors[5]}`}}>o</span>
           <span style={{color: `${this.state.randomColors[6]}`}}>o</span>
           <span style={{color: `${this.state.randomColors[7]}`}}>o</span>
           <span style={{color: `${this.state.randomColors[8]}`}}>o</span>
           <span style={{color: `${this.state.randomColors[9]}`}}>o</span>
           <span style={{color: `${this.state.randomColors[10]}`}}>v</span>
           <span style={{color: `${this.state.randomColors[11]}`}}>e{" "}</span>
           <span style={{color: `${this.state.randomColors[12]}`}}>Three.js</span>
        </h1>
        </div>

        <div className="about-card" style={{backgroundColor: `${this.state.email}`}} onMouseEnter={this.handleMouseEnter.bind(this, "email")} onMouseLeave={this.handleMouseLeave.bind(this, "email")}>
          <a id="emailMe" href="mailto:colesayershapiro@gmail.com">
            <h1 style={{color: `${this.state.randomColors[13]}`}}>Email Me</h1>
          </a>
        </div>

        <div className="about-card" style={{backgroundColor: `${this.state.resume}`}} onMouseEnter={this.handleMouseEnter.bind(this, "resume")} onMouseLeave={this.handleMouseLeave.bind(this, "resume")}>
          <a href="http://res.cloudinary.com/dwnehv6tb/image/upload/v1519938715/Cole_Shapiro__Resume_ihxxvq.pdf" download>
            <h1 style={{color: `${this.state.randomColors[14]}`}}>Download Resume</h1>
          </a>
        </div>
      </div>
    )
  }
}

export default AboutContainer

function hexToRgb(hex){
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
  } : null;
}
