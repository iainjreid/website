'use strict'

// Dependencies
import { Layer } from './Layer'

const layers = []

function createLayer () {
  return (layers[layers.length] = new Layer())
}

function getLayers () {
  return layers
}

/**
 * To ensure that the application respects the boundaries of the Browser window, we must resize all of the relevant
 * Layers.
 */
window.addEventListener('resize', () => {
  let layer

  for (let i = 0, n = layers.length; i < n; i++) {
    layer = layers[i]
    if (!layer._boundariesLocked) {
      layer.resizeCanvas()
    }
  }
}, false)

export let View = { createLayer, getLayers }
