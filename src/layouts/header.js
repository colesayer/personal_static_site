import React, { Component } from 'react';
import Link from 'gatsby-link';
import * as THREE from 'three';
import randomColor from 'randomcolor'

class Header extends Component{
 //  constructor(props) {
 //   super(props)
 //
 //   this.start = this.start.bind(this)
 //   this.stop = this.stop.bind(this)
 //   this.animate = this.animate.bind(this)
 // }
  componentDidMount(){
 //    const width = this.mount.clientWidth
 //    const height = this.mount.clientHeight
 //
 //    const scene = new THREE.Scene()
 //    const camera = new THREE.PerspectiveCamera(
 //      75,
 //      width / height,
 //      0.1,
 //      1000
 //    )
 //    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
 //    const geometry = new THREE.BoxGeometry(2, 2, 2)
 //    const material = new THREE.MeshBasicMaterial({ color: '#433F81' })
 //    const cube = new THREE.Mesh(geometry, material)
 //
 //    camera.position.z = 4
 //    scene.add(cube)
 //    renderer.setClearColor(0x000000, 0)
 //    renderer.setSize(width, height)
 //
 //    this.scene = scene
 //    this.camera = camera
 //    this.renderer = renderer
 //    this.material = material
 //    this.cube = cube
 //
 //    this.mount.appendChild(this.renderer.domElement)
 //    this.start()
  }
 //
 //
 //  componentWillUnmount() {
 //    this.stop()
 //    this.mount.removeChild(this.renderer.domElement)
 //  }
 //
 //  start() {
 //    if (!this.frameId) {
 //      this.frameId = requestAnimationFrame(this.animate)
 //    }
 //  }
 //
 //  stop() {
 //    cancelAnimationFrame(this.frameId)
 //  }
 //
 //  animate() {
 //    this.cube.rotation.x += 0.01
 //    this.cube.rotation.y += 0.01
 //
 //    this.renderScene()
 //    this.frameId = window.requestAnimationFrame(this.animate)
 //  }
 //
 //  renderScene() {
 //    this.renderer.render(this.scene, this.camera)
 //  }

  render(){
    const color = randomColor({luminosity: 'light'})
    return(
      <div >
        <header className="title" style={{ marginBottom: `1.5rem`}}>
          <Link to="/" style={{ textShadow: `none`, backgroundImage: `none`, textDecoration: 'none' }}>
            <h1 style={{ textAlign: `center`, color: `${color}`, textShadow: '10px 10px 10px rgba(0, 0, 0, 0.25)' }}>COLE SHAPIRO</h1>
          </Link>
        </header>
      </div>
    )
  }
}

export default Header




// <div
//  style={{ height: `10rem`}}
//  ref={(mount) => { this.mount = mount }}
// />
