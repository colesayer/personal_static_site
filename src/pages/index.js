import React, { Component } from 'react'
import Link from 'gatsby-link'
import ThreeTitle from '../components/three/threeTitle.js'


class IndexPage extends Component {

  render(){
    return(
      <div style={{width: '100%', height: '100%'}}>
        <ThreeTitle />
      </div>
    )
  }
}

export default IndexPage
