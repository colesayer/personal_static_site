import React, { Component } from 'react';
import { navigateTo } from 'gatsby-link';
import '../../layouts/index.css';

class BlogHeader extends Component{
  state = {
    hovered: false,
  }

  handleClick = (e) => {
    e.preventDefault()
    this.setState({hovered: true})
    navigateTo('/')
  }

  handleMouseEnter = () => {
    this.setState({hovered: true})
  }

  handleMouseLeave = () => {
    this.setState({hovered: false})
  }

  render(){
    var dropButton = ""

    if(this.state.hovered === false){
      dropButton = <button className="dropbtn" style={{backgroundColor: `${this.props.linkColor}`}}  onClick={this.handleClick} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}><span>CS</span></button>
    } else if (this.state.hovered === true) {
      dropButton = <button className="dropbtnActive" style={{backgroundColor: `${this.props.linkColor}`}} onClick={this.handleClick}  onMouseLeave={this.handleMouseLeave}><span>CS</span></button>
    }

    return(
      <div>
        <div className="dropdown">
          {dropButton}
        </div>
      </div>
    )
  }
}

export default BlogHeader
