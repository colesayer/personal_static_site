import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Header from './header.js'
import Helmet from 'react-helmet'
import FaGithub from 'react-icons/lib/fa/github'
import FaLinkedin from 'react-icons/lib/fa/linkedin'
import MdColorLens from 'react-icons/lib/md/color-lens'

import './index.scss'

const Footer = () => (
  <div style={{ margin: `0 auto`, textAlign: `center`}}>
    <footer>
      <a href="https://www.linkedin.com/in/cole-shapiro-54646b9/" style={{ textShadow: `none`, backgroundImage: `none`, padding: `.5rem` }}><FaLinkedin /></a>
      <a href="https://github.com/colesayer" target="_blank" style={{ textShadow: `none`, backgroundImage: `none`, padding: `.5rem` }}><FaGithub /></a>
      <a href="http://www.jttnyc.com/6953,6954,6964" target="_blank" style={{ textShadow: `none`, backgroundImage: `none`, padding: `.5rem` }}><MdColorLens /></a>
    </footer>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div style={{ margin: `0 auto`, maxWidth: 800, padding: `1.25rem 1rem` }}>
    <Helmet
      title="Cole Shapiro"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
