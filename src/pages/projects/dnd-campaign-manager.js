import React from 'react'
import { logos } from '../../components/services/logos.js'
import FaGithub from 'react-icons/lib/fa/github'
import FaAngleDoubleLeft from 'react-icons/lib/fa/angle-double-left'
import Link from 'gatsby-link'

const DndCampaignManager = () => (
  <div className="project-page-container">
    <div className="project-page">
    <h1 id="dnd"> D&D Campaign Manager </h1>
    <div className="project-links">
      <ul>
        <li><a href="https://github.com/colesayer/dnd-campaign-manager"><FaGithub style={{fontSize: '1.5rem'}}/></a></li>
        <li><Link to="/projects" ><FaAngleDoubleLeft style={{fontSize: '1.5rem'}}/>back to projects</Link></li>
      </ul>
    </div>
    <h3>The daunting task of creating a character for Dungeons and Dragons and organizing a campaign made easy.</h3>
    <p>Profile Page:</p>
    <img src="http://res.cloudinary.com/dwnehv6tb/image/upload/f_auto/v1517459726/dnd-main_blkmkr.jpg"/>
    <p>Character Builder:</p>
    <img src="http://res.cloudinary.com/dwnehv6tb/image/upload/f_auto/v1517459726/dnd-character_bhvjsu.jpg"/>
    <p>Campaign Manager:</p>
    <img src="http://res.cloudinary.com/dwnehv6tb/image/upload/f_auto/v1517459726/dnd-campaign_cr9z9y.jpg"/>
    <p>Dungeons and Dragons Compendium</p>
    <img src="http://res.cloudinary.com/dwnehv6tb/image/upload/f_auto/v1517459726/dnd-spell_gpok5n.jpg"/>
    </div>

    {logos(["rails", "postgresql", "bootstrap", "css3"])}
  </div>
)

export default DndCampaignManager
