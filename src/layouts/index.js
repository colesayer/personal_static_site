import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import SideLinks from '../components/nav/sideLinks.js'
import './index.css'

class TemplateWrapper extends Component{
  state = {
    title: true
  }
  render(){
    return(
      <div>
        <Helmet
          title="Cole Shapiro"
          meta={[
            { name: 'description', content: 'Portfolio' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        {this.props.children()}
      </div>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
