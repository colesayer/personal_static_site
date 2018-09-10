import React, { Component } from 'react'
import ThreeTitle from './threeTitle.js'

class ThreePlaceholder extends Component{
  render(){
    return(
      <div className="three-placeholder" style={{width: '100%', height: '50%'}}>
        <ThreeTitle/>
        <div className="scroll-down-button-container" onClick={this.props.handleClick}>
          <div
            style={this.props.isTitle ? {visibility: 'visible', opacity: 1, transition: 'opacity 2s linear'} : {visibility: 'hidden', opacity: 0, transition: 'opacity 2s linear'}}
            className="scroll-down-button">
          </div>
        </div>
      </div>
    )
  }
}

export default ThreePlaceholder
