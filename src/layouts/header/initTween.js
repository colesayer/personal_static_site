import TWEEN from 'tween.js'

export function initTween(object){
  console.log("IN INITTWEEN", object.children[0].rotation)

  let randomNumber1 = (Math.random() * (2 - (-2)) + (-2))
  let randomNumber2 = (Math.random() * (2 - (-2)) + (-2))
  let randomNumber3 = (Math.random() * (2 - (-2)) + (-2))
  let randomNumber4 = (Math.random() * (2 - (-2)) + (-2))
  let randomNumber5 = (Math.random() * (2 - (-2)) + (-2))

  console.log("RANDOM NUMBER", randomNumber1, randomNumber2)

  let tween = new TWEEN.Tween(object.position)
    .to({ x: object.position.x, y: randomNumber1, z: object.position.z }, 5000)
    .easing(TWEEN.Easing.Sinusoidal.InOut)

  let tween2 = new TWEEN.Tween(object.position)
    .to({ x: object.position.x, y: randomNumber2, z: object.position.z }, 5000)
    .easing(TWEEN.Easing.Sinusoidal.InOut)

  let tween3 = new TWEEN.Tween(object.position)
    .to({ x: object.position.x, y: randomNumber3, z: object.position.z }, 5000)
    .easing(TWEEN.Easing.Sinusoidal.InOut)

  let tween4 = new TWEEN.Tween(object.position)
    .to({ x: object.position.x, y: randomNumber4, z: object.position.z }, 5000)
    .easing(TWEEN.Easing.Sinusoidal.InOut)

  let tween5 = new TWEEN.Tween(object.position)
    .to({ x: object.position.x, y: randomNumber5, z: object.position.z }, 5000)
    .easing(TWEEN.Easing.Sinusoidal.InOut)

  tween.chain(tween2)
  tween2.chain(tween3)
  tween3.chain(tween4)
  tween4.chain(tween5)
  tween5.chain(tween)


  tween.start()

}
