import * as THREE from 'three';
import * as OBJLoader from 'three-obj-loader';
OBJLoader.default(THREE)

export function initTitle(THREEloader, titleGroup, titleColors){
  console.log("in initTitle")
  var objFiles = ['./models/title/1-1-C.obj', './models/title/1-2-O.obj', './models/title/1-3-L.obj', './models/title/1-4-E.obj', './models/title/2-1-S.obj', './models/title/2-2-H.obj', './models/title/2-3-A.obj', './models/title/2-4-P.obj',
'./models/title/2-5-I.obj', './models/title/2-6-R.obj', './models/title/2-7-O.obj' ]

  var titleLoader = new THREEloader.OBJLoader()

  for(let i = 0; i < objFiles.length; i++){
    let titleMaterial = new THREE.MeshLambertMaterial({color: `${titleColors[i]}`})
    titleLoader.load(objFiles[i], function(object){
      console.log("in titleLoader", object)
      object.traverse(function(child){
        if(child instanceof THREE.Mesh){
          child.material = titleMaterial
        }
      })
      object.scale.set(2, 2, 2)
      object.position.x = -8
      titleGroup.add(object)
    }.bind(this))
  }

}
