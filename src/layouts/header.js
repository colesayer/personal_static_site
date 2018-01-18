import React, { Component } from 'react';
import { navigateTo } from 'gatsby-link';
import './index.css';

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
    this.setState({clicked: false})
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
  }

  handleAbout = (e) => {
    e.preventDefault()
    navigateTo('/about')
    this.setState({clicked: false, dropMenuActive: false})
  }

  handleProjects = (e) => {
    e.preventDefault()
    navigateTo('/projects')
    this.setState({clicked: false, dropMenuActive: false})
  }

  handleBlog = (e) => {
    e.preventDefault()
    navigateTo('/blog')
    this.setState({clicked: false, dropMenuActive: false})
  }



  render(){
    console.log("HEADER", this.state)

    var dropButton = ""
    var dropMenu = ""

    if(this.state.clicked === false){
      dropButton = <button className="dropbtn" style={{backgroundColor: `${this.props.linkColor}`}}  onClick={this.handleClick} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}><span>CS</span></button>
      dropMenu = ""
    } else if (this.state.clicked === true || this.state.dropMenuActive === true) {
      dropButton = <button className="dropbtnActive" style={{backgroundColor: `${this.props.linkColor}`}} onClick={this.handleClick}><span>CS</span></button>
      dropMenu = <div className="dropdown-content" onMouseEnter={this.handleDropMenuActive} onMouseLeave={this.handleDropMenuInactive}>
                    <span style={{ padding: `5%`}} onClick={this.handleHome}>Home</span>
                    <span style={{ padding: `5%`}} onClick={this.handleAbout}>About</span>
                    <span style={{ padding: `5%`}} onClick={this.handleProjects}>Projects</span>
                    <span style={{ padding: `5%`}} onClick={this.handleBlog}>Blog</span>
                </div>
    }


    return(
      <div>
        <div className="dropdown">
          {dropButton }
          {dropMenu}
        </div>
      </div>
    )
  }
}

export default Header

// const Header = () => (
//   <div>
//     <div className="dropdown">
//       <button className="dropbtn" style={{backgroundColor: `${linkColor}`}}><span>CS</span></button>
//         <div className="dropdown-content">
//           <Link to="/" style={{ padding: `5%`}}><span onClick={void(0)}>Home</span></Link>
//           <Link to="/about" style={{ padding: `5%`}}><span onClick={void(0)}>About</span></Link>
//           <Link to="/blog" style={{ padding: `5%`}}><span onClick={void(0)}>Blog</span></Link>
//           <Link to="/projects" style={{ padding: `5%`}}><span onClick={void(0)}>Projects</span></Link>
//         </div>
//     </div>
//
//
//   </div>
// )

// <Link to="/blog" style={{ padding: `5%`}}>Blog</Link>
// <Link to="/projects" style={{ padding: `5%`}}>Projects</Link>
