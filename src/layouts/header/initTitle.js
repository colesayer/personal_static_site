import {initTranslateTween} from './initTranslateTween.js'
import {initRotateTween} from './initRotateTween.js'
import * as THREE from 'three';
import * as OBJLoader from 'three-obj-loader';
OBJLoader.default(THREE)

export function initTitle(threeLoader, objFile, titleColor, titleGroup, idx){
  console.log("in initTitle", objFile, titleColor)

  let titleMaterial = new THREE.MeshLambertMaterial({color: `${titleColor}`})

  let titleLoader = new threeLoader.OBJLoader()
  titleLoader.load(`${objFile}`, function(object){

    var objBbox = new THREE.Box3().setFromObject(object);
    let offset = objBbox.getCenter();

    // Geometry vertices centering to world axis
    var bboxCenter = objBbox.getCenter().clone();
    bboxCenter.multiplyScalar(-1);

    object.traverse(function(child){
      if(child instanceof THREE.Mesh){
        console.log("in instance", child.geometry)
        // var bsphereCenter = child.boundingSphere.center
        child.geometry.translate(bboxCenter.x, bboxCenter.y, bboxCenter.z);
        child.material = titleMaterial
      }
    })
    object.scale.set(2, 2, 2)
    var letterPosition = 0

    switch(idx) {
    case 0:
        letterPosition = -7.5
        break;
    case 1:
        letterPosition = -5.75
        break;
    case 2:
        letterPosition = -4.25
        break;
    case 3:
        letterPosition = -3
        break;
    case 4:
        letterPosition = -1
        break;
    case 5:
        letterPosition = 0.4
        break;
    case 6:
        letterPosition = 2.1
        break;
    case 7:
        letterPosition = 3.5
        break;
    case 8:
        letterPosition = 4.4
        break;
    case 9:
        letterPosition = 5.6
        break;
    case 10:
        letterPosition = 7
        break;
    default:
        console.log("not yet")
        break;
    }

    object.position.x = (letterPosition)

    console.log("add pivot point?", object.children[0].geometry)
    titleGroup.add(object)
    initTranslateTween(object)
    initRotateTween(object)
  }.bind(this))
}
