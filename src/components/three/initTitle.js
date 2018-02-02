import {initTranslateTween} from './initTranslateTween.js'
import {initRotateTween} from './initRotateTween.js'
import {initPosition} from './initPosition.js'
import * as THREE from 'three';
import * as OBJLoader from 'three-obj-loader';
OBJLoader.default(THREE)

export function initTitle(threeLoader, objFile, titleColor, titleGroup, idx, isMobile){
  let titleMaterial = new THREE.MeshPhongMaterial({color: `${titleColor}`})

  let titleLoader = new threeLoader.OBJLoader()
  titleLoader.load(`${objFile}`, function(object){

    var objBbox = new THREE.Box3().setFromObject(object);
    let offset = objBbox.getCenter();

    // Geometry vertices centering to world axis
    var bboxCenter = objBbox.getCenter().clone();
    bboxCenter.multiplyScalar(-1);

    object.traverse(function(child){
      if(child instanceof THREE.Mesh){
        child.geometry.translate(bboxCenter.x, bboxCenter.y, bboxCenter.z);
        child.material = titleMaterial
        child.castShadow = true
      }
    })

    var letterPosition = initPosition(isMobile, idx)
    var scale = letterPosition.scale
    object.scale.set(scale, scale, scale)



    object.position.x = (letterPosition.x - 1)
    object.position.y = (letterPosition.y)
    object.position.z = (letterPosition.z)

    titleGroup.add(object)
    initTranslateTween(object)
    initRotateTween(object)
  }.bind(this))
}
