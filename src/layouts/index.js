import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import SideLinks from '../components/nav/sideLinks.js'
import './index.css'

class TemplateWrapper extends Component{
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
