'use strict'

// Dependencies
import { Platform } from '../../../Platform'

const entities = []

export function gravity (superclass) {
  return class Gravity extends superclass {
    constructor () {
      super(...arguments)
      entities.push(this)

      this.gravityDx = 0
      this.gravityDy = 0
    }

    getGravity () {
      return {
        dx: this.gravityDx,
        dy: this.gravityDy
      }
    }

    setGravity ({ dx, dy }) {
      this.setGravityDx(dx)
      this.setGravityDy(dy)
    }

    getGravityDx (dx) {
      return this.gravityDx
    }

    setGravityDx (dx) {
      this.gravityDx = dx
    }

    getGravityDy (dy) {
      return this.gravityDy
    }

    setGravityDy (dy) {
      this.gravityDy = dy
    }
  }
}

Platform.loop.add(() => {
  for (let entity of entities) {
    let ballCentre = entity.getCenterCoordinates()
    let ballGravity = entity.getGravity()

    const angle = Platform.utils.radiansToDegrees(Platform.utils.getAngleBetweenThreePoints({
      dx: ballCentre.dx,
      dy: ballGravity.dy
    }, ballGravity, ballCentre))

    const diffX = Platform.utils.adjacentLength(angle, 0.3)
    const diffY = Platform.utils.oppositeLength(angle, 0.3)

    entity.setVectorX(entity.getVectorX() + (ballCentre.dx < ballGravity.dx ? diffX : -diffX))
    entity.setVectorY(entity.getVectorY() + (ballCentre.dy < ballGravity.dy ? diffY : -diffY))
  }
}, 0)
