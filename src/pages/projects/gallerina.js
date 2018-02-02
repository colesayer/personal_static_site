import React from 'react';
import { logos } from '../../components/services/logos.js';
import FaGithub from 'react-icons/lib/fa/github'
import FaAngleDoubleLeft from 'react-icons/lib/fa/angle-double-left'
import Link from 'gatsby-link'
import video from './videos/gallerina-web-2.mp4'


const Gallerina = () => (
  <div>
  <div className="project-page-container">
    <div className="project-page">
    <h1 id="gallerina"> Gallerina </h1>
    <div className="project-links">
      <ul>
        <li><a href="https://github.com/colesayer/final_frontend"><FaGithub style={{fontSize: '1.5rem'}}/></a></li>
        <li><Link to="/projects" ><FaAngleDoubleLeft style={{fontSize: '1.5rem'}}/>back to projects</Link></li>
      </ul>
    </div>
    <h3>A lightning fast exhibition design tool for gallerists, curators, and artists.</h3>
    <p>Creating a virtual gallery space is as easy as entering dimensions and uploading images of artworks:</p>

    <div className="video-player">
      <video id="project-video" src={video}  playsInline autoPlay loop muted/>
    </div>

    <p>Create a gallery, choose wall color, floor texture, and set dimensions:</p>
      <img src="http://res.cloudinary.com/dwnehv6tb/image/upload/f_auto/v1517459726/gallerina-gallery_fdrddm.jpg"/>
      <p>Upload an image of your artworks:</p>
      <img src="http://res.cloudinary.com/dwnehv6tb/image/upload/f_auto/v1517459727/gallerina-artworks_e9r1hk.jpg"/>
      <p>Curate a show:</p>
      <img src="http://res.cloudinary.com/dwnehv6tb/image/upload/f_auto/v1517459726/gallerina-3dview_vbxsxf.jpg" />
      <p>Save your installation:</p>
      <img src="http://res.cloudinary.com/dwnehv6tb/image/upload/f_auto/v1517459727/gallerina-scenes_cjkhcw.jpg"/>
    </div>
    {logos(["react", "redux", "threejs", "rails", "jwt", "postgresql", "cloudinary", "css3", "bootstrap"])}
  </div>
  </div>
)

export default Gallerina

// <ReactPlayer className="react-player" url='http://res.cloudinary.com/dwnehv6tb/video/upload/v1517022263/gallerina-web-2_drh1jb.mov' loop playing width='100%'/>
// <iframe
// src="http://res.cloudinary.com/dwnehv6tb/video/upload/v1517022263/gallerina-web-2_drh1jb.mp4"
// frameBorder='0'
// webkitAllowFullScreen
//    mozallowfullscreen
//    allowFullScreen
//    width='640px'
//    height='334px'
// />


// <video width="640" height="334" autoplay="">
//   <source src="http://res.cloudinary.com/dwnehv6tb/video/upload/v1517022263/gallerina-web-2_drh1jb.mp4" type="video/mp4"/>
// </video>

// <div className="video-player">
//   <video src={video} playsInline autoPlay loop muted />
// </div>
