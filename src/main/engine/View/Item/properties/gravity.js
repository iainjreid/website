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
      this.gravityEnabledDx = true
      this.gravityEnabledDy = true
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

    disableGravityDx () {
      this.gravityEnabledDx = false
    }

    enableGravityDx () {
      this.gravityEnabledDx = true
    }

    getGravityDy (dy) {
      return this.gravityDy
    }

    setGravityDy (dy) {
      this.gravityDy = dy
    }

    disableGravityDy () {
      this.gravityEnabledDy = false
    }

    enableGravityDy () {
      this.gravityEnabledDx = true
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

    const diffX = entity.gravityEnabledDx ? Platform.utils.adjacentLength(angle, 2) : 0
    const diffY = entity.gravityEnabledDy ? Platform.utils.oppositeLength(angle, 2) : 0

    diffX && entity.setVectorX(entity.getVectorX() + (ballCentre.dx < ballGravity.dx ? diffX : -diffX))
    diffY && entity.setVectorY(entity.getVectorY() + (ballCentre.dy < ballGravity.dy ? diffY : -diffY))
  }
}, 0)
