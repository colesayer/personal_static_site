import React from 'react';
import FaGithub from 'react-icons/lib/fa/github'
import FaLinkedin from 'react-icons/lib/fa/linkedin'
import MdColorLens from 'react-icons/lib/md/color-lens'

const Footer = () => {
  return(
    <div className="footer">
      <footer>
        <a href="https://www.linkedin.com/in/cole-shapiro-54646b9/" style={{ textShadow: `none`, backgroundImage: `none`, padding: `.5rem`, fontSize: `2rem`, margin: '2%', color: `black` }}><FaLinkedin /></a>
        <a href="https://github.com/colesayer" target="_blank" style={{ textShadow: `none`, backgroundImage: `none`, padding: `.5rem`, fontSize: `2rem`, margin: '2%', color: `black` }}><FaGithub /></a>
        <a href="http://www.jttnyc.com/6953,6954,6964" target="_blank" style={{ textShadow: `none`, backgroundImage: `none`, padding: `.5rem`, fontSize: `2rem`, margin: '2%', color: `black` }}><MdColorLens /></a>
      </footer>
    </div>
  )
}

export default Footer
