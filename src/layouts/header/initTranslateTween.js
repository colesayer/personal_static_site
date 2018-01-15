import TWEEN from 'tween.js'

export function initTranslateTween(object){
  let randomNumber1 = (Math.random() * (2 - (-2)) + (-2))
  let randomNumber2 = generateRandomNumber(randomNumber1)
  let randomNumber3 = generateRandomNumber(randomNumber2)
  let randomNumber4 = generateRandomNumber(randomNumber3)
  let randomNumber5 = generateRandomNumber(randomNumber4)
  let randomNumber6 = generateRandomNumber(randomNumber5)

  let originalPosition = object.position.y

  console.log("RANDOM NUMBER", randomNumber1, randomNumber2)

  let tween = new TWEEN.Tween(object.position)
    .to({ x: object.position.x, y: randomNumber1, z: object.position.z }, 2500)
    .easing(TWEEN.Easing.Sinusoidal.Out)

  let returnTween = new TWEEN.Tween(object.position)
    .to({ y: originalPosition}, 2500)
    .easing(TWEEN.Easing.Sinusoidal.In)

  let tween2 = new TWEEN.Tween(object.position)
    .to({ x: object.position.x, y: randomNumber2, z: object.position.z }, 2500)
    .easing(TWEEN.Easing.Sinusoidal.Out)

  let returnTween2 = new TWEEN.Tween(object.position)
    .to({ y: originalPosition}, 2500)
    .easing(TWEEN.Easing.Sinusoidal.In)

  let tween3 = new TWEEN.Tween(object.position)
    .to({ x: object.position.x, y: randomNumber3, z: object.position.z }, 2500)
    .easing(TWEEN.Easing.Sinusoidal.Out)

  let returnTween3 = new TWEEN.Tween(object.position)
    .to({ y: originalPosition}, 2500)
    .easing(TWEEN.Easing.Sinusoidal.In)

  let tween4 = new TWEEN.Tween(object.position)
    .to({ x: object.position.x, y: randomNumber4, z: object.position.z }, 2500)
    .easing(TWEEN.Easing.Sinusoidal.Out)

  let returnTween4 = new TWEEN.Tween(object.position)
    .to({ y: originalPosition}, 2500)
    .easing(TWEEN.Easing.Sinusoidal.In)

  let tween5 = new TWEEN.Tween(object.position)
    .to({ x: object.position.x, y: randomNumber5, z: object.position.z }, 2500)
    .easing(TWEEN.Easing.Sinusoidal.Out)

  let returnTween5 = new TWEEN.Tween(object.position)
      .to({ y: originalPosition}, 2500)
      .easing(TWEEN.Easing.Sinusoidal.In)

  let tween6 = new TWEEN.Tween(object.position)
    .to({ x: object.position.x, y: randomNumber6, z: object.position.z }, 2500)
    .easing(TWEEN.Easing.Sinusoidal.Out)

  let returnTween6 = new TWEEN.Tween(object.position)
    .to({ y: originalPosition}, 2500)
    .easing(TWEEN.Easing.Sinusoidal.In)

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

function generateRandomNumber(previousNumber){
  let x
  previousNumber > 0 ? x = -1 : x = 1
  let randomNumber = Math.abs((Math.random() * (2 - (-2)) + (-2))) * x
  return randomNumber
}
