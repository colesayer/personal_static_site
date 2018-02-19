import React, { Component } from 'react';
import Link from "gatsby-link";
import randomColor from 'randomcolor'


class BlogCard extends Component{
  state = {
    bgColor: "",
    randomColor: "",
    width: ""
  }

  handleMouseEnter = () => {
    var hexColor = randomColor({luminosity: 'bright'})
    var rgbColor = hexToRgb(hexColor)
    var bgRGBA = "rgba(" + `${rgbColor.r}` + ", " + `${rgbColor.g}` + ", " + `${rgbColor.b}` + ", 0.5)"

    this.setState({
      bgColor: bgRGBA
    })
  }

  handleMouseLeave = () => {
    this.setState({
      bgColor: ""
    })
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth })
  }

  componentDidMount(){
    this.setState({
      randomColor: randomColor({luminosity: 'dark', count: 2}),
      width: window.innerWidth,
    })
    window.addEventListener('resize', this.handleWindowSizeChange)
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.handleWindowSizeChange)
  }

  render(){
    const { width } = this.state;
    const isMobile = width <= 500;

    const post = this.props.post

    var textOrder = 1
    var imgOrder = 2
    if(this.state.width <= 500){
      textOrder = 1
      imgOrder = 2
    } else if(this.props.idx % 2 === 0){
      textOrder = 1
      imgOrder = 2
    } else {
      textOrder = 2
      imgOrder = 1
    }
    return(
        <Link to={post.frontmatter.path} style={{color: `${this.state.randomColor[0]}`, borderColor: `${this.state.randomColor[0]}`, backgroundColor: `${this.state.bgColor}`}} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
          <div className="blog-card" >
            <div className="blog-card-text" style={{order: textOrder}}>
              <h1>{post.frontmatter.title}</h1>
              <h4 className="blog-date">{post.frontmatter.date}</h4>
              <p style={{color: `${this.state.randomColor[1]}`}}>{post.excerpt}</p>
            </div>
            <div className="blog-card-image" style={{order: imgOrder}}>
              <img src={post.frontmatter.img}/>
            </div>
          </div>
        </Link>
    )
  }
}

export default BlogCard

function hexToRgb(hex){
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
  } : null;
}
