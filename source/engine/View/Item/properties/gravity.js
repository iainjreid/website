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

Platform.loop.add(() => {
  for (let entity of entities) {
    entity.setVectorY(entity.getVectorY() + 1)
  }
}, 0)
