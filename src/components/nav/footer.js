import React from 'react';
import FaGithub from 'react-icons/lib/fa/github'
import FaLinkedin from 'react-icons/lib/fa/linkedin'
import MdColorLens from 'react-icons/lib/md/color-lens'

const Footer = () => {
  return(
    <div className="footer">
      <footer>
        <a href="https://www.linkedin.com/in/cole-shapiro-54646b9/" ><FaLinkedin /></a>
        <a href="https://github.com/colesayer" target="_blank" ><FaGithub /></a>
        <a href="http://www.jttnyc.com/6953,6954,6964" target="_blank"><MdColorLens /></a>
      </footer>
    </div>
  )
}

export default Footer
