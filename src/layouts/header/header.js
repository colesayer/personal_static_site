import React, { Component } from 'react';
import Link from 'gatsby-link';
import randomColor from 'randomcolor'
import {initTitle} from './initTitle.js'
import * as THREE from 'three';
import TWEEN from 'tween.js'
var OrbitControls = require('three-orbit-controls')(THREE)

class Header extends Component{
  constructor(props) {
   super(props)

   this.start = this.start.bind(this)
   this.stop = this.stop.bind(this)
   this.animate = this.animate.bind(this)
   this.THREE = THREE
   this.addTitle = this.addTitle.bind(this)
  //  this.rotateLetters = this.rotateLetters.bind(this)
 }

  componentDidMount(){
    const width = this.mount.clientWidth
    const height = this.mount.clientHeight

    //SCENE
    this.scene = new THREE.Scene()

    //RENDERER
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    this.renderer.setClearColor(0x000000, 0)
    this.renderer.setSize(width, height)
    this.mount.appendChild(this.renderer.domElement)

    //CAMERA
    this.camera = new THREE.PerspectiveCamera(
      25,
      width / height,
      0.1,
      1000
    )
    console.log("set camera", this.mount.clientWidth)
    if(this.mount.clientWidth < 500){
      this.camera.position.z = 20
    } else {
      this.camera.position.z = 15
    }


    //KEYLIGHT
    this.keyLight = new THREE.AmbientLight(0xffffff, 0.5)
    this.scene.add(this.keyLight);

    //POINTLIGHT
    this.pointLight = new THREE.PointLight( 0xffffff, 1 )
    this.pointLight.position.set( -3, 7, 5 )
    this.scene.add(this.pointLight)

    //CONTROLS
    this.controls = new OrbitControls(this.camera, this.mount)
    this.controls.enableZoom = false;
    this.controls.enablePan = false;


    //ADD TITLE
    this.titleGroup = new THREE.Group()
    this.objFiles = ['./models/title/1-1-C.obj', './models/title/1-2-O.obj', './models/title/1-3-L.obj', './models/title/1-4-E.obj', './models/title/2-1-S.obj', './models/title/2-2-H.obj', './models/title/2-3-A.obj', './models/title/2-4-P.obj', './models/title/2-5-I.obj', './models/title/2-6-R.obj', './models/title/2-7-O.obj' ]
    this.titleColors = randomColor({luminosity: 'bright', count: 11})

    this.addTitle()



    this.scene.add(this.titleGroup)
    setTimeout(() => { console.log(this.titleGroup) }, 3000)
    this.start()
  }


  componentWillUnmount() {
    this.stop()
    this.mount.removeChild(this.renderer.domElement)
  }

  start() {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate)
    }
  }

  stop() {
    cancelAnimationFrame(this.frameId)
  }

  animate() {
    // this.titleGroup.rotation.x += 0.01
    // this.titleGroup.rotation.y += 0.01

    this.renderScene()
    TWEEN.update()
    this.frameId = window.requestAnimationFrame(this.animate)
  }

  renderScene() {
    this.renderer.render(this.scene, this.camera)
  }

  addTitle(){
    for(let idx = 0; idx < this.objFiles.length; idx++){
      let objFile = this.objFiles[idx]
      let titleColor = this.titleColors[idx]

      initTitle(this.THREE, objFile, titleColor, this.titleGroup, idx )
    }
  }

  // rotateLetters(){
  //   this.titleGroup.children.forEach(function(child){
  //     child.rotateY(.02)
  //   })
  // }


  render(){
    const color = randomColor({luminosity: 'light'})
    return(
      <div
       style={{ height: `12rem`, width: `100%`}}
       ref={(mount) => { this.mount = mount }}
      />
    )
  }
}

export default Header

// <div >
//   <header className="title" style={{ marginBottom: `1.5rem`}}>
//     <Link to="/" style={{ textShadow: `none`, backgroundImage: `none`, textDecoration: 'none' }}>
//       <h1 style={{ textAlign: `center`, color: `${color}`, textShadow: `0px 0px 20px ${color}`, fontSize: '48px', fontFamily: 'Arial, sans-serif' }}>COLE SHAPIRO</h1>
//     </Link>
//   </header>
// </div>
