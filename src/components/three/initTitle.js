import {initTranslateTween} from './initTranslateTween.js'
import {initRotateTween} from './initRotateTween.js'
import * as THREE from 'three';
import * as OBJLoader from 'three-obj-loader';
OBJLoader.default(THREE)

export function initTitle(threeLoader, objFile, titleColor, titleGroup, idx, isMobile){
  console.log("isMobile", isMobile)
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
    object.scale.set(3, 3, 3)
    var letterPosition = 0

    switch(idx) {
    case 0:
        letterPosition = -8.5
        break;
    case 1:
        letterPosition = -6.25
        break;
    case 2:
        letterPosition = -4.4
        break;
    case 3:
        letterPosition = -3
        break;
    case 4:
        letterPosition = -1
        break;
    case 5:
        letterPosition = 0.5
        break;
    case 6:
        letterPosition = 2.5
        break;
    case 7:
        letterPosition = 4.25
        break;
    case 8:
        letterPosition = 5.35
        break;
    case 9:
        letterPosition = 6.75
        break;
    case 10:
        letterPosition = 8.5
        break;
    default:
        letterPosition = 0
        break;
    }
    object.position.x = (letterPosition)
    isMobile ? object.position.y = -2 : object.position.y = -2
    titleGroup.add(object)
    initTranslateTween(object)
    initRotateTween(object)
  }.bind(this))
}
