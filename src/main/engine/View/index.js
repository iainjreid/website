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
const View = { Item, Layer }
const layers = []

/**
 * @description This method will create a new Layer that will in turn be added to the View.
 *
 * @param {Number=} width  - The width of the Layer
 * @param {Number=} height - The height of the Layer
 *
 * @returns {Layer} The newly created Layer
 */
View.createLayer = (width, height) => {
  let layer = layers[layers.length] = new Layer(width, height)

  return layer
}

View.createItem = ({draw = Function, coordinates: {dx, dy}, dimensions: {width, height}}) => {
  return new (class extends Item {
    constructor (draw, dx, dy, width, height) {
      super(dx, dy, width, height)
      this.draw = draw
    }
  })(draw, dx, dy, width, height)
}

/**
 * @description This method will return a reference to the Layer with the supplied unique identifier. If no Layer with
 *              the supplied unique identifier is found, then undefined will be returned.
 *
 * @param {String} uid - The unique identifier of the Layer
 *
 * @returns {Layer} The Layer with the supplied unique identifier
 */
View.getLayer = (uid) => {
  for (let layer of layers) {
    if (layer.uid === uid) {
      return layer
    }
  }
}

/**
 * @description This method will return a reference to all of the Layers within the View.
 *
 * @returns {Layer[]} The Layers within the View
 */
View.getLayers = () => {
  return layers
}

/**
 * To ensure that the application respects the boundaries of the Browser window, we must resize all of the relevant
 * Layers when required.
 */
window.addEventListener('resize', () => {
  for (let layer of layers) {
    if (!layer._boundariesLocked) {
      layer.resizeCanvas()
    }
  }
}, false)

export { View }
