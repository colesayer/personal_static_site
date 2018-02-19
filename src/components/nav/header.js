import React, { Component } from 'react';
import { navigateTo } from 'gatsby-link';
import FaGithub from 'react-icons/lib/fa/github'
import FaLinkedin from 'react-icons/lib/fa/linkedin'
import MdColorLens from 'react-icons/lib/md/color-lens'
import '../../layouts/index.css';
import randomColor from 'randomcolor'

class Header extends Component{

  state = {
    clicked: false,
    dropMenuActive: false,
    randomColor: "#fff000",
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
    this.setState({dropMenuActive: false, clicked: false})
  }

  handleMenuClick = (e) => {
    e.preventDefault()
    this.setState({clicked: false, dropMenuActive: false})
    this.props.openModal(e)
  }

  handleHomeClick = (e) => {
    e.preventDefault()
    navigateTo('/')
    this.setState({clicked: false, dropMenuActive: false})
  }

  handleAboutClick = (e) => {
    e.preventDefault()
    navigateTo('/about')
    this.setState({clicked: false, dropMenuActive: false})
  }

  handleProjectsClick = (e) => {
    e.preventDefault()
    navigateTo('/projects')
    this.setState({clicked: false, dropMenuActive: false})
  }

  handleBlogClick = (e) => {
    e.preventDefault()
    this.setState({clicked: false, dropMenuActive: false})
    navigateTo("/blog")
  }

  componentDidMount(){
    const width = window.innerWidth
    this.isMobile
    width <=500 ? this.isMobile = true : this.isMobile = false
    const color = randomColor({luminosity: 'dark'})
    this.setState({
      randomColor: color,
    })
  }

  render(){
    var dropButton = ""
    var dropMenu = ""
    var sideLinksClass = ""


    if(this.isMobile){
      if(this.state.clicked === false && this.state.dropMenuActive === false){
        dropButton = <button className="dropbtn" style={{backgroundColor: `${this.state.randomColor}`}} onClick={this.handleClick} ><span>CS</span></button>
        dropMenu = ""
        sideLinksClass = "side-links"

      } else if (this.state.clicked === true || this.state.dropMenuActive === true) {
        dropButton = <button className="dropbtnActive" style={{backgroundColor: `${this.state.randomColor}`}} onClick={this.handleClick}><span>CS</span></button>
        dropMenu = <div className="dropdown-content">
                      <span style={{ padding: `5%`}} onClick={this.handleHomeClick}>Home</span>
                      <span style={{ padding: `5%`}} onClick={this.handleAboutClick}>About</span>
                      <span style={{ padding: `5%`}} onClick={this.handleProjectsClick}>Projects</span>
                      <span style={{ padding: `5%`}} onClick={this.handleBlogClick}>Blog</span>
                  </div>
        sideLinksClass = "side-links-open"

      }
    } else {
      if(this.state.clicked === false && this.state.dropMenuActive === false){
        dropButton = <button className="dropbtn" style={{backgroundColor: `${this.state.randomColor}`}} onMouseEnter={this.handleMouseEnter}><span>CS</span></button>
        dropMenu = ""
        sideLinksClass = "side-links"
      } else if (this.state.clicked === true || this.state.dropMenuActive === true) {
        dropButton = <button className="dropbtnActive" style={{backgroundColor: `${this.state.randomColor}`}}><span>CS</span></button>
        dropMenu =  <div className="dropdown-content" onMouseLeave={this.handleDropMenuInactive}>
                      <span style={{ padding: `5%`}} onClick={this.handleHomeClick}>Home</span>
                      <span style={{ padding: `5%`}} onClick={this.handleAboutClick}>About</span>
                      <span style={{ padding: `5%`}} onClick={this.handleProjectsClick}>Projects</span>
                      <span style={{ padding: `5%`}} onClick={this.handleBlogClick}>Blog</span>
                    </div>

        sideLinksClass = "side-links-open"
      }
    }

    return(
      <div>
        <div className="dropdown">
          {dropButton }
          {dropMenu}
        </div>
        <div className={sideLinksClass}>
          <ul>
            <li><a href="https://www.linkedin.com/in/cole-shapiro-54646b9/" style={{color: `${this.state.randomColor}`}}><FaLinkedin /></a></li>
            <li><a href="https://github.com/colesayer" target="_blank" style={{color: `${this.state.randomColor}`}}><FaGithub /></a></li>
            <li><a href="http://www.jttnyc.com/6953,6954,6964" target="_blank" style={{color: `${this.state.randomColor}`}}><MdColorLens /></a></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Header
