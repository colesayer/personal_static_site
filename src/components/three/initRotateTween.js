import TWEEN from 'tween.js'

export function initRotateTween(object){
  console.log("initializing rotate", object)

  let randomNumber1 = Math.floor((Math.random() * (6 - (2)) + (2)))
  let randomNumber2 = (Math.random() * (6 - (2)) + (2))
  let randomNumber3 = (Math.random() * (6 - (2)) + (2))
  let randomNumber4 = (Math.random() * (6 - (2)) + (2))
  let randomNumber5 = (Math.random() * (6 - (2)) + (2))
  let randomNumber6 = (Math.random() * (6 - (2)) + (2))

  let direction1 = generateDirection(randomNumber1)
  let direction2 = generateOppositeDirection(direction1)
  let direction3 = generateOppositeDirection(direction2)
  let direction4 = generateOppositeDirection(direction3)
  let direction5 = generateOppositeDirection(direction4)
  let direction6 = generateOppositeDirection(direction5)

  console.log("original rotation", direction1, direction2)

  let tween = new TWEEN.Tween(object.rotation)
    .to({y: `${direction1}` + Math.PI/randomNumber1}, 3500)
    .easing(TWEEN.Easing.Sinusoidal.Out)
  let tween2 = new TWEEN.Tween(object.rotation)
    .to({y: 0}, 3500)
    .easing(TWEEN.Easing.Sinusoidal.In)
  let tween3 = new TWEEN.Tween(object.rotation)
    .to({y: `${direction2}` + Math.PI/randomNumber2}, 3500)
    .easing(TWEEN.Easing.Sinusoidal.Out)
  let tween4 = new TWEEN.Tween(object.rotation)
    .to({y: 0}, 3500)
    .easing(TWEEN.Easing.Sinusoidal.In)
  let tween5 = new TWEEN.Tween(object.rotation)
    .to({y: `${direction3}` + Math.PI/randomNumber3}, 3500)
    .easing(TWEEN.Easing.Sinusoidal.Out)
  let tween6 = new TWEEN.Tween(object.rotation)
    .to({y: 0}, 3500)
    .easing(TWEEN.Easing.Sinusoidal.In)
  let tween7 = new TWEEN.Tween(object.rotation)
    .to({y: `${direction4}` + Math.PI/randomNumber4}, 3500)
    .easing(TWEEN.Easing.Sinusoidal.Out)
  let tween8 = new TWEEN.Tween(object.rotation)
    .to({y: 0}, 3500)
    .easing(TWEEN.Easing.Sinusoidal.In)
  let tween9 = new TWEEN.Tween(object.rotation)
    .to({y: `${direction5}` + Math.PI/randomNumber5}, 3500)
    .easing(TWEEN.Easing.Sinusoidal.Out)
  let tween10 = new TWEEN.Tween(object.rotation)
    .to({y: 0}, 3500)
    .easing(TWEEN.Easing.Sinusoidal.In)
  let tween11 = new TWEEN.Tween(object.rotation)
    .to({y: `${direction6}` + Math.PI/randomNumber6}, 3500)
    .easing(TWEEN.Easing.Sinusoidal.Out)
  let tween12 = new TWEEN.Tween(object.rotation)
    .to({y: 0}, 3500)
    .easing(TWEEN.Easing.Sinusoidal.In)
  tween.chain(tween2)
  tween2.chain(tween3)
  tween3.chain(tween4)
  tween4.chain(tween5)
  tween5.chain(tween6)
  tween6.chain(tween7)
  tween7.chain(tween8)
  tween8.chain(tween9)
  tween9.chain(tween10)
  tween10.chain(tween11)
  tween11.chain(tween12)
  tween12.chain(tween)

  tween.start()
}

function generateDirection(n) {
  let direction
  n % 2 === 0 ? direction = "-" : direction = "+"
  return direction
}

function generateOppositeDirection(direction1){
  let direction
  direction1 === "-" ? direction = "+" : direction = "-"
  return direction
}
