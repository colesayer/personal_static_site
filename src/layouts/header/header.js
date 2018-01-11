import React, { Component } from 'react';
import Link from 'gatsby-link';
import randomColor from 'randomcolor'
import {initTitle} from './initTitle.js'
import * as THREE from 'three';
var OrbitControls = require('three-orbit-controls')(THREE)

class Header extends Component{
  constructor(props) {
   super(props)

   this.start = this.start.bind(this)
   this.stop = this.stop.bind(this)
   this.animate = this.animate.bind(this)
   this.THREE = THREE
 }

  componentDidMount(){
    const width = this.mount.clientWidth
    const height = this.mount.clientHeight

    console.log("OBJECT LOADER")
    console.log(typeof THREE.OBJLoader)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      50,
      width / height,
      0.1,
      1000
    )
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })



    camera.position.z = 7
    renderer.setClearColor(0x000000, 0)
    renderer.setSize(width, height)

    this.scene = scene
    this.camera = camera
    this.renderer = renderer


    this.mount.appendChild(this.renderer.domElement)

    //ADD TITLE
    this.titleGroup = new THREE.Group()
    this.titleColors = randomColor({luminosity: 'bright', count: 11})
    initTitle(this.THREE, this.titleGroup, this.titleColors)
    this.scene.add(this.titleGroup)

    this.keyLight = new THREE.AmbientLight(0xffffff, 0.5)
    this.scene.add(this.keyLight);

    //POINTLIGHT
    this.pointLight = new THREE.PointLight( 0xffffff, 1 )
    this.pointLight.position.set( -3, 7, 5 )
    this.scene.add(this.pointLight)

    var controls = new OrbitControls(this.camera, this.mount)

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
    this.frameId = window.requestAnimationFrame(this.animate)
  }

  renderScene() {
    this.renderer.render(this.scene, this.camera)
  }

  addModel(geometry) {
    var material = new THREE.MeshBasicMaterial({ color: '#433F81' })
    var model = new THREE.Mesh( geometry, material)
    model.scale.set(1, 1, 1)
    model.position.set(0, 0, 0)
    this.scene.add(model)

  }

  render(){
    const color = randomColor({luminosity: 'light'})
    return(
      <div
       style={{ height: `10rem`}}
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
