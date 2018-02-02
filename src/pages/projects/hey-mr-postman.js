import React from 'react'
import { logos } from '../../components/services/logos.js'
import FaGithub from 'react-icons/lib/fa/github'
import FaAngleDoubleLeft from 'react-icons/lib/fa/angle-double-left'
import Link from 'gatsby-link'
import video from './videos/hey-mr-postman.mp4'

const HeyMrPostman = () => (
  <div className="project-page-container">
    <div className="project-page">
    <h1 id="postman"> HEY MR. POSTMAN </h1>
    <div className="project-links">
      <ul>
        <li><a href="https://github.com/colesayer/sock_dev_frontend"><FaGithub style={{fontSize: '1.5rem'}}/></a></li>
        <li><Link to="/projects" ><FaAngleDoubleLeft style={{fontSize: '1.5rem'}}/>back to projects</Link></li>
      </ul>
    </div>
    <h3>My current project! A fully customizable, photorealistic, virtual product display </h3>



    <div className="video-player">
      <video id="project-video" src={video}  playsInline autoPlay loop muted/>
    </div>
    <p>Inbox:</p>
    <img src="http://res.cloudinary.com/dwnehv6tb/image/upload/f_auto/v1517459727/postman-inbox_urdysw.jpg"/>
    <p>Outbox:</p>
    <img src="http://res.cloudinary.com/dwnehv6tb/image/upload/f_auto/v1517459727/postman-outbox_taxal5.jpg"/>

    </div>

    {logos(["react", "rails", "threejs", "postgresql", "css3" ])}
  </div>
)

export default HeyMrPostman
