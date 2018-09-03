import React from 'react'
import { logos } from '../../components/services/logos.js'
import FaGithub from 'react-icons/lib/fa/github'
import FaAngleDoubleLeft from 'react-icons/lib/fa/angle-double-left'
import Link from 'gatsby-link'
import video from './videos/my_life_socks_big_web.mp4'


const WearHouseSocks = () => (
  <div className="project-page-container">
    <div className="project-page">
    <h1 id="life-socks"> Wear House Socks </h1>
    <div className="project-links">
      <ul>
        <li><a href="https://github.com/colesayer/sock_dev_frontend"><FaGithub style={{fontSize: '1.5rem'}}/></a></li>
        <li><Link to="/projects" ><FaAngleDoubleLeft style={{fontSize: '1.5rem'}}/>back to projects</Link></li>
      </ul>
    </div>
    <h3>My current project! A fully customizable, photorealistic, virtual product display </h3>
    <p>{" "}</p>
    <div className="video-player">
      <video id="project-video" src={video}  playsInline autoPlay loop muted/>
    </div>
    <p style={{marginTop: ".5%"}}>{" "}</p>
    <p>Pick your toe, heel, and welt color:</p>
    <img src="http://res.cloudinary.com/dwnehv6tb/image/upload/f_auto/v1517459727/life-socks-color_y4vqj9.jpg"/>
    <p>Upload a design and see it appear on the sock model instantly:</p>
    <img src="http://res.cloudinary.com/dwnehv6tb/image/upload/f_auto/v1517459727/life-socks-designs_doahhs.jpg"/>
    <p>Picking the type of knit updates the bump map:</p>
    <img src="http://res.cloudinary.com/dwnehv6tb/image/upload/f_auto/v1517459727/life-socks-bump_lxif99.jpg"/>
    </div>

    {logos(["react", "redux", "rails", "threejs", "blender", "postgresql", "cloudinary", "css3", "bootstrap"])}
  </div>
)

export default WearHouseSocks
