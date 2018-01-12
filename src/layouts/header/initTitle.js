import {initTween} from './initTween.js'
import * as THREE from 'three';
import * as OBJLoader from 'three-obj-loader';
OBJLoader.default(THREE)

export function initTitle(threeLoader, objFile, titleColor, titleGroup, tween){
  console.log("in initTitle", objFile, titleColor)

  let titleMaterial = new THREE.MeshLambertMaterial({color: `${titleColor}`})

  let titleLoader = new threeLoader.OBJLoader()
  titleLoader.load(`${objFile}`, function(object){
      object.traverse(function(child){
        if(child instanceof THREE.Mesh){
          child.material = titleMaterial
        }
      })
    object.scale.set(2, 2, 2)
    object.position.x = -7.5
    titleGroup.add(object)
    initTween(object)
  }.bind(this))
}
