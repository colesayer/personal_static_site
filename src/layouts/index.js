import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Header from './header.js'
import FaGithub from 'react-icons/lib/fa/github'
import FaLinkedin from 'react-icons/lib/fa/linkedin'
import MdColorLens from 'react-icons/lib/md/color-lens'
import styled from "styled-components";
import randomColor from 'randomcolor'

import './index.css'

const linkColor = randomColor({luminosity: 'dark', hue: 'blue'})

const Footer = () => (
  <div className="footer">
    <footer>
      <a href="https://www.linkedin.com/in/cole-shapiro-54646b9/" style={{ textShadow: `none`, backgroundImage: `none`, padding: `.5rem`, fontSize: `2rem`, margin: '2%', color: `${linkColor}` }}><FaLinkedin /></a>
      <a href="https://github.com/colesayer" target="_blank" style={{ textShadow: `none`, backgroundImage: `none`, padding: `.5rem`, fontSize: `2rem`, margin: '2%', color: `${linkColor}` }}><FaGithub /></a>
      <a href="http://www.jttnyc.com/6953,6954,6964" target="_blank" style={{ textShadow: `none`, backgroundImage: `none`, padding: `.5rem`, fontSize: `2rem`, margin: '2%', color: `${linkColor}` }}><MdColorLens /></a>
    </footer>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Cole Shapiro"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />

    <Header linkColor={linkColor}/>

    <div
      style={{
        maxWidth: '100%',
        maxHeight: '100vh',
        padding: 0,
        paddingTop: 0,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
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
