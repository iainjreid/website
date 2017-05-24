'use strict'

// Dependencies
import { Platform } from '../../../Platform'

const entities = []

export function gravity (superclass) {
  return class Gravity extends superclass {
    constructor () {
      super(...arguments)
      entities.push(this)
    }
  }
}

const windowCentre = { dx: window.innerWidth / 2, dy: window.innerHeight / 2 }

Platform.loop.add(() => {
  for (let entity of entities) {
    let ballCentre = entity.getCenterCoordinates()

    const angle = Platform.utils.radiansToDegrees(Platform.utils.getAngleBetweenThreePoints({
      dx: ballCentre.dx,
      dy: windowCentre.dy
    }, windowCentre, ballCentre))

    const diffX = Platform.utils.adjacentLength(angle, 0.3)
    const diffY = Platform.utils.oppositeLength(angle, 0.3)

    entity.setVectorX(entity.getVectorX() + (ballCentre.dx < windowCentre.dx ? diffX : -diffX))
    entity.setVectorY(entity.getVectorY() + (ballCentre.dy < windowCentre.dy ? diffY : -diffY))
  }
}, 0)

document.addEventListener('click', evt => {
  windowCentre.dx = evt.clientX
  windowCentre.dy = evt.clientY
})
