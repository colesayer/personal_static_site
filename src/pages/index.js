import React, { Component } from 'react'
import Link from 'gatsby-link'
import ThreeTitle from '../components/three/threeTitle.js'
import scrollToComponent from 'react-scroll-to-component';
import SideLinks from '../components/nav/sideLinks.js'

import SideLinksPlaceholder from '../components/nav/sideLinksPlaceholder.js'
import ThreePlaceholder from '../components/three/threePlaceholder.js'

class IndexPage extends Component {

  state = {
    title: true
  }

  handleClick = () => {
    console.log("worked?")

    if(this.state.title){
      this.setState({
        title: false
      }, () => (
        scrollToComponent(this.info, {
        offset: 100,
        align: 'top',
        duration: 1000
        })
      ))
    } else {
      this.setState({
        title: true
      }, () => (
        scrollToComponent(this.title, {
        offset: 0,
        align: 'bottom',
        duration: 1000
        })
      ))
    }
  }

  render(){
    return(
      <div className="index-wrapper">
        <ThreePlaceholder ref={(section) => { this.title = section; }} isTitle={this.state.title} handleClick={this.handleClick}/>
        <SideLinksPlaceholder ref={(section) => { this.info = section; }} isTitle={this.state.title} handleClick={this.handleClick}/>
      </div>
    )
  }
}

export default IndexPage

// <ThreeTitle ref={(section) => { this.title = section; }}/>
// <button
//   style={
//     this.state.title ?
//     {backgroundColor: 'yellow'}
//     : {backgroundColor: 'blue'}
//   }
//   onClick={()=>this.handleClick()}
//   className="scroll-button">
//   touch me
// </button>
// <SideLinks ref={(section) => { this.info = section; }}/>
