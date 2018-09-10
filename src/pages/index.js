import React, { Component } from 'react'
import Link from 'gatsby-link'
import ThreeTitle from '../components/three/threeTitle.js'
import scrollToComponent from 'react-scroll-to-component';
import Waypoint from 'react-waypoint';
import SideLinks from '../components/nav/sideLinks.js'

import SideLinksPlaceholder from '../components/nav/sideLinksPlaceholder.js'
import ThreePlaceholder from '../components/three/threePlaceholder.js'

class IndexPage extends Component {

  state = {
    title: true,
    windowWidth: 0,
    windowHeight: 0
  }

  handleClick = () => {
    if(this.state.title){
      scrollToComponent(this.info, {
        offset: 100,
        align: 'top',
        duration: 1000
      })
    } else {
      scrollToComponent(this.title, {
        offset: 0,
        align: 'bottom',
        duration: 1000
      })
    }
    // if(this.state.title){
    //   this.setState({
    //     title: false
    //   }, () => (
    //     scrollToComponent(this.info, {
    //     offset: 100,
    //     align: 'top',
    //     duration: 1000
    //     })
    //   ))
    // } else {
    //   this.setState({
    //     title: true
    //   }, () => (
    //     scrollToComponent(this.title, {
    //     offset: 0,
    //     align: 'bottom',
    //     duration: 1000
    //     })
    //   ))
    // }
  }

  handleWaypointEnter = () => {
    console.log("entered")
    this.setState({
      title: true
    })
  }

  handleWaypointLeave = () => {
    console.log("left")
    this.setState({
      title: false
    })
  }

  updateWindowDimensions = () => {
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    })
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  render(){
    let appHeight = this.state.windowHeight * 2
    console.log("width: ", this.state.windowWidth, "height: ", appHeight)
    return(
      <div className="index-wrapper" style={{width: this.state.windowWidth, height: appHeight}}>
        <ThreePlaceholder ref={(section) => { this.title = section; }} isTitle={this.state.title} handleClick={this.handleClick}/>
        <Waypoint onEnter={this.handleWaypointEnter} onLeave={this.handleWaypointLeave} topOffset={'50%'}/>
        <SideLinksPlaceholder ref={(section) => { this.info = section; }} isTitle={this.state.title} handleClick={this.handleClick}/>
      </div>
    )
  }
}

export default IndexPage
