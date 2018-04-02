'use strict'

// Dependencies
import { Platform } from '../../../Platform'

const entities = []

export function resistance (superclass) {
  return class Resistance extends superclass {
    constructor () {
      super(...arguments)
      entities.push(this)
    }
  }
}

Platform.loop.add(() => {
  for (let entity of entities) {
    const vectorX = entity.getVectorX() * 0.998
    const vectorY = entity.getVectorY() * 0.998

    entity.setVectorX(vectorX < 0.8 && vectorX > -0.8 ? 0 : vectorX)
    entity.setVectorY(vectorY < 0.8 && vectorY > -0.8 ? 0 : vectorY)
  }
}, 0)
