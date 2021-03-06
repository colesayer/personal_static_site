export function initPosition(isMobile, idx){
  var letterPosition
  if(isMobile){
    switch(idx) {
      case 0:
          return {x: -7, y: -2, z: 0, scale: 3}
      case 1:
          return {x: -4.8, y: -2, z: 0, scale: 3}
      case 2:
          return {x: -2.9, y: -2.1, z: 0, scale: 3}
      case 3:
          return {x: -1.5, y: -2.1, z: 0, scale: 3}
      case 4:
          return {x: 0.5, y: -2, z: 0, scale: 3}
      case 5:
          return {x: 2.15, y: -2.1, z: 0, scale: 3}
      case 6:
          return {x: 4.1, y: -2.1, z: 0, scale: 3}
      case 7:
          return {x: 5.9, y: -2.1, z: 0, scale: 3}
      case 8:
          return {x: 6.95, y: -2.1, z: 0, scale: 3}
      case 9:
          return {x: 8.25, y: -2.1, z: 0, scale: 3}
      case 10:
          return {x: 10, y: -2, z: 0, scale: 3}
      default:
          return {x: 0, y: 0, z: 0, scale: 3}
      }
  } else {
    switch(idx) {
    case 0:
        return {x: -8.5, y: -2, z: 0, scale: 3}
    case 1:
        return {x: -6.3, y: -2, z: 0, scale: 3}
    case 2:
        return {x: -4.4, y: -2.1, z: 0, scale: 3}
    case 3:
        return {x: -3, y: -2.1, z: 0, scale: 3}
    case 4:
        return {x: -1, y: -2, z: 0, scale: 3}
    case 5:
        return {x: 0.65, y: -2.1, z: 0, scale: 3}
    case 6:
        return {x: 2.6, y: -2.1, z: 0, scale: 3}
    case 7:
        return {x: 4.4, y: -2.1, z: 0, scale: 3}
    case 8:
        return {x: 5.45, y: -2.1, z: 0, scale: 3}
    case 9:
        return {x: 6.75, y: -2.1, z: 0, scale: 3}
    case 10:
        return {x: 8.5, y: -2, z: 0, scale: 3}
    default:
        return {x: 0, y: 0, z: 0, scale: 3}
    }
  }

}
