import React, { Component } from 'react'
import ThreeTitle from './threeTitle.js'

class ThreePlaceholder extends Component{
  render(){
    return(
      <div className="three-placeholder">
        <ThreeTitle />
        <div
          style={this.props.isTitle ? {visibility: 'visible', opacity: 1, transition: 'opacity 2s linear'} : {visibility: 'hidden', opacity: 0, transition: 'opacity 2s linear'}}
          onClick={this.props.handleClick}
          className="scroll-down-button">
        </div>
      </div>
    )
  }
}

export default ThreePlaceholder
