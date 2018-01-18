import React from 'react'
import AboutContainer from '../components/about/aboutContainer.js'
import '../layouts/index.css'

const AboutPage = () => (
  <div className="about-container">
    <h1 style={{textAlign: 'center', paddingTop: '10%'}}> About Me </h1>
    <AboutContainer />
  </div>
)

export default AboutPage
