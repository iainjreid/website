'use strict'

import { loop, Input, Util, View } from './engine'
import { ball, box } from './assets'

const rootLayer = View.createLayer()

var bx = rootLayer.getWidth() / 2
var by = rootLayer.getHeight() / 2
var mx = rootLayer.getWidth() / 4
var my = rootLayer.getHeight() / 4
var dx = 2
var dy = -2
var ballRadius = 30

window.addEventListener('resize', () => {
  bx = rootLayer.getWidth() / 2
  by = rootLayer.getHeight() / 2
  mx = rootLayer.getWidth() / 4
  my = rootLayer.getHeight() / 4
}, false)

loop(() => {
  rootLayer.clearCanvas()

  // Box Control
  if (Input.upArrow) {
    my -= 4
  }

  if (Input.downArrow) {
    my += 4
  }

  if (Input.leftArrow) {
    mx -= 4
  }

  if (Input.rightArrow) {
    mx += 4
  }

  box.coordinates(mx, my)

  // Ball Control
  if (bx + ballRadius * 2 > rootLayer.getWidth() || bx <= 0 || Util.collision.boxes(box, ball)) {
    dx = -dx
  }

  if (by + ballRadius * 2 > rootLayer.getHeight() || by <= 0 || Util.collision.boxes(box, ball)) {
    dy = -dy
  }

  bx += dx
  by += dy

  ball.coordinates(bx, by)

  ball.draw(rootLayer)
  box.draw(rootLayer)
})
