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
    entity.setVectorX(entity.getVectorX() * 0.998)
    entity.setVectorY(entity.getVectorY() * 0.998)
  }
}, 0)
