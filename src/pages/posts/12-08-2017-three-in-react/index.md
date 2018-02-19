---
path: "/three-in-react"
date: "2018-02-17"
title: "Using Three.js in React"
img: "http://res.cloudinary.com/dwnehv6tb/image/upload/v1516665144/teapot_lakeht.jpg"
---

As of writing this, I know of two Three.js wrappers made especially for React, React-Three, which you can find <a href="https://github.com/Izzimach/react-three">here</a>, and React-Three-Render, found <a href="https://github.com/toxicFork/react-three-renderer">here</a>. But what if you want to incorporate the original and highly maintained Three.js library in your React project?

The following guide lets you do just that, using React’s component lifecycle methods and refs, which I will explain in more detail in a sec (the pattern described below is not just for Three.js, it is helpful for any kind of playback or animation in React, like Tween.js, video.js, etc).

I originally found this solution on <a href="https://stackoverflow.com/questions/41248287/how-to-connect-threejs-to-react">Stack Overflow</a>. I’ve cleaned up the code a bit using arrow functions, no constructor, etc.

```
import React, { Component } from 'react';
import * as THREE from 'three';

class ThreeScene extends Component{

  componentDidMount(){
    const width = this.mount.clientWidth
    const height = this.mount.clientHeight

    //ADD SCENE
    this.scene = new THREE.Scene()

    //ADD CAMERA
    this.camera = new THREE.PerspectiveCamera(
      75,
      width / height,
      0.1,
      1000
    )
    this.camera.position.z = 4

    //ADD RENDERER
    this.renderer = new THREE.WebGLRenderer({ antialias: true })
    this.renderer.setClearColor('#000000')
    this.renderer.setSize(width, height)
    this.mount.appendChild(this.renderer.domElement)

    //ADD CUBE
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({ color: '#433F81'     })
    this.cube = new THREE.Mesh(geometry, material)
    this.scene.add(this.cube)

    this.start()
  }

  componentWillUnmount(){
    this.stop()
    this.mount.removeChild(this.renderer.domElement)
  }

  start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate)
    }
  }

  stop = () => {
    cancelAnimationFrame(this.frameId)
  }
  animate = () => {
    this.cube.rotation.x += 0.01
    this.cube.rotation.y += 0.01
    this.renderScene()
    this.frameId = window.requestAnimationFrame(this.animate)
  }

  renderScene = () => {
    this.renderer.render(this.scene, this.camera)
  }

  render(){
    return(
      <div
      style={{ width: '400px', height: '400px' }}
      ref={(mount) => { this.mount = mount }}
      />
    )
  }
}

export default ThreeScene
```

Yarn add or npm install the <a href="https://www.npmjs.com/package/three">Three.js library</a> . Going forward with Three, you will discover that the majority of your troubleshooting occurs hunting down, importing, and implementing the various libraries for things like orbit controls and object loaders. These parts still rely on Three.js global namespace pollution and would be unusable, if it weren’t for the kind souls of the internet converting many of these libraries to npm modules of their own and clearing up some of the naming problems. In a later post, I will give a rundown of which of these npm modules I have found that work. In the meantime, the three library linked to above is the core library and is steadily maintained.

The pattern above makes use of React’s lifecycle methods `componentDidMount()` and `componentWillUnmount()`. For a fantastic guide to React's component lifecycle methods, check out this <a href="https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1">article</a>. You will use `componentDidMount()` to initialize your Three.js scene, calling the scene, renderer, camera, and anything else you want in your scene.

Notice that the Three.js renderer is attached to the React Element utilizing `ref`. According to the React documentation, refs are used when “you need to imperatively modify a child outside of the typical dataflow.” This is especially good for dealing with imperative animations inside of React. It’s actually the only time I’ve ever used refs, which you typically want to avoid.

Also, make special note of `componentWillUnmount()` where you stop the animation and remove it from the DOM. This is hugely important, and saves what would otherwise be a big memory leak.

For some other examples of this pattern at work, you can check out two of my projects on Github, <a href="https://github.com/colesayer/sock_dev_frontend">My Life Socks</a> and <a href="https://github.com/colesayer/final_frontend">Gallerina</a> to see how I resolved different issues while incorporating Three.js with React using Redux to manage its state.
