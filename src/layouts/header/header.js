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
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    this.mount.appendChild(this.renderer.domElement)

    //CAMERA
    this.camera = new THREE.PerspectiveCamera(
      75,
      width / height,
      0.1,
      1000
    )

    //CONTROLS
    this.controls = new OrbitControls(this.camera, this.mount)
    this.controls.enableZoom = true;
    this.controls.enablePan = false;
    this.controls.maxPolarAngle = Math.PI/2
    this.controls.maxDistance = 50
    console.log(this.controls)

    if(this.mount.clientWidth < 500){
      this.camera.position.z = 20
      this.camera.position.x = 8
      this.camera.position.y = 5
      this.camera.lookAt(-.6, -1, 0)
      this.controls.target.set(-.6, -1, 0)

      this.scene.fog = new THREE.Fog(0xffffff, 30, 50);
    } else {
      this.camera.position.z = 7
      this.camera.position.x = 2
      this.camera.position.y = .5
      this.scene.fog = new THREE.Fog(0xffffff, 5, 15);
      this.camera.lookAt(0.5, -1, 0)
      this.controls.target.set(0.5, -1, 0)
    }

    this.controls.update()





    //KEYLIGHT
    this.keyLight = new THREE.AmbientLight(0xffffff, 0.5)
    this.scene.add(this.keyLight);

    //POINTLIGHT
    this.pointLight = new THREE.PointLight( 0xffffff, 1 )
    this.pointLight.position.set( -3, 7, 5 )
    this.pointLight.castShadow = true
    this.scene.add(this.pointLight)

    this.pointLight.shadow.mapSize.width = 512;  // default
    this.pointLight.shadow.mapSize.height = 512; // default
    this.pointLight.shadow.camera.near = 0.5;       // default
    this.pointLight.shadow.camera.far = 500      // default




    //ADD TITLE
    this.titleGroup = new THREE.Group()
    this.objFiles = ['./models/title/1-1-C.obj', './models/title/1-2-O.obj', './models/title/1-3-L.obj', './models/title/1-4-E.obj', './models/title/2-1-S.obj', './models/title/2-2-H.obj', './models/title/2-3-A.obj', './models/title/2-4-P.obj', './models/title/2-5-I.obj', './models/title/2-6-R.obj', './models/title/2-7-O.obj' ]
    this.titleColors = randomColor({luminosity: 'bright', count: 11})

    this.addTitle()

    this.titleGroup.position.set(-2, -1, 0)
    this.scene.add(this.titleGroup)

    //ADD FLOOR
    this.floorGeometry = new THREE.PlaneBufferGeometry(100, 100, 32, 32)
    this.floorMaterial = new THREE.MeshStandardMaterial({color: 'blue'})
    this.floor = new THREE.Mesh(this.floorGeometry, this.floorMaterial)
    this.floor.rotation.x = - Math.PI / 2
    this.floor.position.y = -2.05
    this.floor.receiveShadow = true
    this.scene.add(this.floor)


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

  render(){
    const color = randomColor({luminosity: 'light'})
    return(
      <div
       style={{ height: `75vh`, width: `100%`}}
       ref={(mount) => { this.mount = mount }}
      />
    )
  }
}

export default Header
