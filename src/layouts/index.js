import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import FaGithub from 'react-icons/lib/fa/github'
import FaLinkedin from 'react-icons/lib/fa/linkedin'
import MdColorLens from 'react-icons/lib/md/color-lens'
import styled from "styled-components";
import randomColor from 'randomcolor'

import './index.css'

const linkColor = randomColor({luminosity: 'dark', hue: 'blue'})

const Header = () => (
  <div>
    <div className="dropdown">
      <button className="dropbtn" style={{backgroundColor: `${linkColor}`}}><span>CS</span></button>
        <div className="dropdown-content">
          <Link to="/" style={{ padding: `5%`}}>Home</Link>
          <Link to="/about" style={{ padding: `5%`}}>About</Link>
          <Link to="/blog" style={{ padding: `5%`}}>Blog</Link>
          <Link to="/projects" style={{ padding: `5%`}}>Projects</Link>
        </div>
    </div>
    <div className="external-links">
      <ul>
        <li><a href="http://www.jttnyc.com/6953,6954,6964" target="_blank" style={{ textShadow: `none`, backgroundImage: `none`, padding: `.5rem`, fontSize: `24px`, margin: '2%', color: `${linkColor}` }}><MdColorLens /></a></li>
        <li><a href="https://github.com/colesayer" target="_blank" style={{ textShadow: `none`, backgroundImage: `none`, padding: `.5rem`, fontSize: `24px`, margin: '2%', color: `${linkColor}` }}><FaGithub /></a></li>
        <li><a href="https://www.linkedin.com/in/cole-shapiro-54646b9/" style={{ textShadow: `none`, backgroundImage: `none`, padding: `.5rem`, fontSize: `24px`, margin: '2%', color: `${linkColor}` }}><FaLinkedin /></a></li>
      </ul>
    </div>
  </div>
)

// const Footer = () => (
//   <div style={{ margin: `0 auto`, textAlign: `center`, paddingTop: '2%'}}>
//     <footer>
//       <a href="https://www.linkedin.com/in/cole-shapiro-54646b9/" style={{ textShadow: `none`, backgroundImage: `none`, padding: `.5rem`, fontSize: `24px`, margin: '2%', color: `${linkColor}` }}><FaLinkedin /></a>
//       <a href="https://github.com/colesayer" target="_blank" style={{ textShadow: `none`, backgroundImage: `none`, padding: `.5rem`, fontSize: `24px`, margin: '2%', color: `${linkColor}` }}><FaGithub /></a>
//       <a href="http://www.jttnyc.com/6953,6954,6964" target="_blank" style={{ textShadow: `none`, backgroundImage: `none`, padding: `.5rem`, fontSize: `24px`, margin: '2%', color: `${linkColor}` }}><MdColorLens /></a>
//     </footer>
//   </div>
// )

const TemplateWrapper = ({ children }) => (
  <div style={{ margin: `0 auto`, maxWidth: 960, maxHeight: '100vh', padding: `1.25rem 1rem` }}>
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
        maxWidth: '100%',
        padding: 0,
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
