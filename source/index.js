'use strict'

import { loop, View } from './engine'
import { ball, box } from './assets'

const rootLayer = View.createLayer()

var x = rootLayer.getWidth() / 2
var y = rootLayer.getHeight() / 2
var dx = 2
var dy = -2
var ballRadius = 30

window.addEventListener('resize', () => {
  x = rootLayer.getWidth() / 2
  y = rootLayer.getHeight() / 2
}, false)

loop(() => {
  rootLayer.clearCanvas()

  // Ball Control
  if (x + ballRadius * 2 > rootLayer.getWidth() || x <= 0) {
    dx = -dx
  }

  if (y + ballRadius * 2 > rootLayer.getHeight() || y <= 0) {
    dy = -dy
  }

  ball.coordinates(x, y)
  ball.draw(rootLayer)

  x += dx
  y += dy

  // Box Control
  box.coordinates(10, 10)
  box.draw(rootLayer)
})
