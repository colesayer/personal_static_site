import React, { Component } from 'react';
import SideLinks from './sideLinks'

class SideLinksPlaceholder extends Component{
  render(){
    return(
      <div className="side-links-placeholder" style={{width: this.props.windowWidth, height: this.props.windowHeight}}>
        <SideLinks />
        <div
          style={!this.props.isTitle ? {visibility: 'visible', opacity: 1, transition: 'opacity 2s linear'} : {visibility: 'hidden', opacity: 0, transition: 'opacity 2s linear'}}
          className="scroll-up-button"
          onClick={this.props.handleClick}
          >
        </div>
      </div>
    )
  }
}

export default SideLinksPlaceholder
