import React, { Component } from 'react';
import Link from 'gatsby-link';
import randomColor from 'randomcolor'
import {initTitle} from './initTitle.js'
import * as THREE from 'three';
import TWEEN from 'tween.js'
var OrbitControls = require('three-orbit-controls')(THREE)

class ThreeTitle extends Component{
  constructor(props) {
   super(props)

   this.start = this.start.bind(this)
   this.stop = this.stop.bind(this)
   this.animate = this.animate.bind(this)
   this.THREE = THREE
   this.addTitle = this.addTitle.bind(this)
 }

  componentDidMount(){
    const width = this.mount.clientWidth
    const height = this.mount.clientHeight

    this.isMobile
    width <=500 ? this.isMobile = true : this.isMobile = false

    //SCENE
    this.scene = new THREE.Scene()


    //RENDERER
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    this.renderer.setClearColor(0x000000, 0)
    this.renderer.setSize(width, height)
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    this.mount.appendChild(this.renderer.domElement)

    //CAMERA
    this.camera = new THREE.PerspectiveCamera(
      35,
      width / height,
      0.1,
      1000
    )

    //CONTROLS
    this.controls = new OrbitControls(this.camera, this.mount)
    this.controls.enableZoom = true;
    this.controls.enablePan = false;
    this.controls.maxPolarAngle = Math.PI/2
    this.controls.maxDistance = 80

    //KEYLIGHT
    this.keyLight = new THREE.AmbientLight(0xffffff, 0.5)
    this.scene.add(this.keyLight);

    //POINTLIGHT
    this.pointLight = new THREE.PointLight( 0xffffff, 1 )

    this.pointLight.castShadow = true
    this.scene.add(this.pointLight)

    this.pointLight.shadow.camera.near = 0.5;       // default
    this.pointLight.shadow.camera.far = 500      // default

    //ADD TITLE
    this.titleGroup = new THREE.Group()
    if(this.isMobile){
      this.objFiles = ['./models/title/1-1-C.obj', './models/title/1-2-O.obj', './models/title/1-3-L.obj', './models/title/1-4-E.obj']
    } else {
      this.objFiles = ['./models/title/1-1-C.obj', './models/title/1-2-O.obj', './models/title/1-3-L.obj', './models/title/1-4-E.obj', './models/title/2-1-S.obj', './models/title/2-2-H.obj', './models/title/2-3-A.obj', './models/title/2-4-P.obj', './models/title/2-5-I.obj', './models/title/2-6-R.obj', './models/title/2-7-O.obj' ]
    }
    this.titleColors = randomColor({luminosity: 'bright', count: 11})

    this.addTitle()

    this.titleGroup.position.set(-2, -1, 0)
    this.scene.add(this.titleGroup)

    //ADD FLOOR
    // var floorColors = ["#4fd5f9", "#6635ea", "#21b226", "#dd4b81", "#4cefd1", "#0fc4a0", "#57fc05", "#57ede8", "#26c91e"]
    // var floorIdx = (Math.floor(Math.random() * (8 - 0 + 1)) + 0)
    // var floorColor = floorColors[floorIdx]
    // console.log("FLOOR COLOR", floorColor)
    var floorColor = "#21b226"
    this.floorGeometry = new THREE.PlaneBufferGeometry(200, 200, 32, 32)
    this.floorMaterial = new THREE.MeshStandardMaterial({color: `${floorColor}`})
    this.floorMaterial.roughness = .7;
    this.floor = new THREE.Mesh(this.floorGeometry, this.floorMaterial)
    this.floor.rotation.x = - Math.PI / 2
    this.isMobile ? this.floor.position.y = -4.05 : this.floor.position.y = -4.05
    this.floor.receiveShadow = true
    this.scene.add(this.floor)

    //MOBILE
    if(this.isMobile){
      console.log(this.camera)
      this.camera.position.z = 18
      this.camera.position.x = 5
      this.camera.position.y = 2
      this.camera.lookAt(-0.87, -1, 0)
      this.controls.target.set(-0.87, -1, 0)
      this.scene.fog = new THREE.Fog(0xffffff, 55, 100);
      this.pointLight.position.set(-3, 5, -5 )
      this.pointLight.shadow.mapSize.width = 512;
      this.pointLight.shadow.mapSize.height = 512;
    } else {
      //DESKTOP
      this.camera.position.z = 18
      this.camera.position.x = 1
      this.camera.position.y = 0
      this.scene.fog = new THREE.Fog(0xffffff, 12, 50);
      this.camera.lookAt(-2.15, -1, 0)
      this.controls.target.set(-2.15, -1, 0)
      this.pointLight.position.set( 0, 5, 5 )
      this.pointLight.shadow.mapSize.width = 512;
      this.pointLight.shadow.mapSize.height = 512;
    }
    this.controls.update()

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

      initTitle(this.THREE, objFile, titleColor, this.titleGroup, idx, this.isMobile )
    }
  }

  render(){
    const color = randomColor({luminosity: 'light'})
    return(
      <div
       style={{ height: `100vh`, width: `100%`}}
       ref={(mount) => { this.mount = mount }}
      />
    )
  }
}

export default ThreeTitle
