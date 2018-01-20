import React, { Component } from 'react';
import { navigateTo } from 'gatsby-link';
import FaGithub from 'react-icons/lib/fa/github'
import FaLinkedin from 'react-icons/lib/fa/linkedin'
import MdColorLens from 'react-icons/lib/md/color-lens'
import '../../layouts/index.css';

class Header extends Component{

  state = {
    clicked: false,
    dropMenuActive: false,

  }

  handleClick = (e) => {
    e.preventDefault()
    this.state.clicked === false ? this.setState({clicked: true, dropMenuActive: true}) : this.setState({clicked: false, dropMenuActive: false})
    console.log("clicked", this.state.clicked)
  }

  handleMouseEnter = (e) => {
    e.preventDefault()
    this.setState({clicked: true})
  }

  handleMouseLeave = (e) => {
    e.preventDefault()
    this.setState({clicked: false, dropMenuActive: false})
  }

  handleDropMenuActive = (e) => {
    e.preventDefault()
    if(this.state.dropMenuActive === false)this.setState({dropMenuActive: true})
  }

  handleDropMenuInactive = (e) => {
    e.preventDefault()
    if(this.state.dropMenuActive === true)this.setState({dropMenuActive: false, clicked: false})
  }

  handleHome = (e) => {
    e.preventDefault()
    navigateTo('/')
    this.setState({clicked: false, dropMenuActive: false})
    this.props.closeModal(e)
  }

  handleMenuClick = (e) => {
    e.preventDefault()
    this.setState({clicked: false, dropMenuActive: false})
    this.props.openModal(e)
  }

  render(){
    var dropButton = ""
    var dropMenu = ""
    var sideLinksClass = ""

    if(this.state.clicked === false && this.state.dropMenuActive === false){
      dropButton = <button className="dropbtn" onClick={this.handleClick} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}><span>CS</span></button>
      dropMenu = ""
      sideLinksClass = "side-links"
    } else if (this.state.clicked === true || this.state.dropMenuActive === true) {
      dropButton = <button className="dropbtnActive" onClick={this.handleClick}  onMouseLeave={this.handleMouseLeave}><span>CS</span></button>
      dropMenu = <div className="dropdown-content" onMouseEnter={this.handleDropMenuActive} onMouseLeave={this.handleDropMenuInactive}>
                    <span style={{ padding: `5%`}} onClick={this.handleHome}>Home</span>
                    <span style={{ padding: `5%`}} onClick={this.handleMenuClick}>About</span>
                    <span style={{ padding: `5%`}} onClick={this.handleMenuClick}>Projects</span>
                    <span style={{ padding: `5%`}} onClick={this.handleMenuClick}>Blog</span>
                </div>
      sideLinksClass = "side-links-open"
    }


    return(
      <div>
        <div className="dropdown">
          {dropButton }
          {dropMenu}
        </div>
        <div className={sideLinksClass}>
          <ul>
            <li><a href="https://www.linkedin.com/in/cole-shapiro-54646b9/" ><FaLinkedin /></a></li>
            <li><a href="https://github.com/colesayer" target="_blank" ><FaGithub /></a></li>
            <li><a href="http://www.jttnyc.com/6953,6954,6964" target="_blank"><MdColorLens /></a></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Header
