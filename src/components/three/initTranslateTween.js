import TWEEN from 'tween.js'

export function initTranslateTween(object){
  let randomNumber1 = generateRandomNumber()
  let randomNumber2 = generateRandomNumber()
  let randomNumber3 = generateRandomNumber()
  let randomNumber4 = generateRandomNumber()
  let randomNumber5 = generateRandomNumber()
  let randomNumber6 = generateRandomNumber()

  let originalPosition = object.position.y

  console.log("RANDOM NUMBER", randomNumber1, randomNumber2)

  let tween = new TWEEN.Tween(object.position)
    .to({ x: object.position.x, y: randomNumber1, z: object.position.z }, 1000)
    .easing(TWEEN.Easing.Quadratic.Out)

  let returnTween = new TWEEN.Tween(object.position)
    .to({ y: originalPosition}, 2500)
    .easing(TWEEN.Easing.Bounce.Out)

  let tween2 = new TWEEN.Tween(object.position)
    .to({ x: object.position.x, y: randomNumber2, z: object.position.z }, 1000)
    .easing(TWEEN.Easing.Quadratic.Out)

  let returnTween2 = new TWEEN.Tween(object.position)
    .to({ y: originalPosition}, 2500)
    .easing(TWEEN.Easing.Bounce.Out)

  let tween3 = new TWEEN.Tween(object.position)
    .to({ x: object.position.x, y: randomNumber3, z: object.position.z }, 1000)
    .easing(TWEEN.Easing.Quadratic.Out)

  let returnTween3 = new TWEEN.Tween(object.position)
    .to({ y: originalPosition}, 2500)
    .easing(TWEEN.Easing.Bounce.Out)

  let tween4 = new TWEEN.Tween(object.position)
    .to({ x: object.position.x, y: randomNumber4, z: object.position.z }, 1000)
    .easing(TWEEN.Easing.Quadratic.Out)

  let returnTween4 = new TWEEN.Tween(object.position)
    .to({ y: originalPosition}, 2500)
    .easing(TWEEN.Easing.Bounce.Out)

  let tween5 = new TWEEN.Tween(object.position)
    .to({ x: object.position.x, y: randomNumber5, z: object.position.z }, 1000)
    .easing(TWEEN.Easing.Quadratic.Out)

  let returnTween5 = new TWEEN.Tween(object.position)
      .to({ y: originalPosition}, 2500)
      .easing(TWEEN.Easing.Bounce.Out)

  let tween6 = new TWEEN.Tween(object.position)
    .to({ x: object.position.x, y: randomNumber6, z: object.position.z }, 1000)
    .easing(TWEEN.Easing.Quadratic.Out)

  let returnTween6 = new TWEEN.Tween(object.position)
    .to({ y: originalPosition}, 2500)
    .easing(TWEEN.Easing.Bounce.Out)

  tween.chain(returnTween)
  returnTween.chain(tween2)
  tween2.chain(returnTween2)
  returnTween2.chain(tween3)
  tween3.chain(returnTween3)
  returnTween3.chain(tween4)
  tween4.chain(returnTween4)
  returnTween4.chain(tween5)
  tween5.chain(returnTween5)
  returnTween5.chain(tween6)
  tween6.chain(returnTween6)
  returnTween6.chain(tween)


  tween.start()

}

function generateRandomNumber(){
  let randomNumber = Math.abs((Math.random() * (4 - (1.5)) + (1.5)))
  return randomNumber
}
