'use strict'

// Dependencies
import { Item } from './Item'
import { Layer } from './Layer'

/**
 * @module View
 *
 * @description The View hosts and maintains all of the visble objects that make up the application. Most importantly,
 *              it manages the drawing and redrawing of these objects during runtime, to ensure a smooth transition
 *              between frames at all times.
 *
 *              Note that objects are drawn onto Layers, and not directly to the View.
 */
const View = {}
const layers = []

/**
 * @description This method will create a new Layer and add it to the View. The Layer must be given some sort of unique
 *              identifier so that it may be easily identified throughout the runtime of the application, so in the case
 *              that an identifier is not supplied, a unique hash will be generated instead.
 *
 * @param {String=} uid - The unique identifier to be assigned to the Layer
 *
 * @return {Layer} The newly created Layer
 */
View.createLayer = (elementId, width, height) => {
  const layer = layers[layers.length] = new Layer(width, height)

  return layer
}

/**
 * @description This method will return a reference to the Layer with the supplied unique identifier. If no Layer with
 *              the supplied unique identifier is found, then undefined will be returned.
 *
 * @param {String} uid - The unique identifier of the Layer
 *
 * @return {Layer} The Layer with the supplied unique identifier
 */
View.getLayer = (uid) => {
  for (let i = 0, n = layers.length; i < n; i++) {
    if (layers[i].uid === uid) {
      return layers[i]
    }
  }
}

/**
 * @description This method will return a references to all of the Layers within the View.
 *
 * @return {Layer[]} The Layers within the View
 */
View.getLayers = () => {
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

export { View, Item, Layer }
