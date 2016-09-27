'use strict'

import { Platform, View } from './_engine'

let dx = 2
let dy = 2

const ball = View.createItem({
  draw: function (ctx) {
    ctx.beginPath()
    ctx.arc(30, 30, 30, Math.PI * 2, false)
    ctx.fillStyle = '#FF0000'
    ctx.fill()
    ctx.closePath()
  },
  coordinates: {
    dx: 10,
    dy: 10
  },
  dimensions: {
    width: 60,
    height: 60
  }
})

View
  .createLayer()
  .addEntity(ball)

Platform.loop
  .add(() => {
    // Ball Control
    let {dx: ballX, dy: ballY} = ball.getCoordinates()

    if (ballX + 30 * 2 > View.getLayers()[0].getWidth() || ballX <= 0) {
      dx = -dx
    }

    if (ballY + 30 * 2 > View.getLayers()[0].getHeight() || ballY <= 0) {
      dy = -dy
    }

    ball.setCoordinates({
      dx: ballX + dx,
      dy: ballY + dy
    })
  })
  .start()

// import { Game, Input, Util, View } from './engine'
// import { ball } from './assets'
// import { player } from './objects/player'

// const rootLayer = View.createLayer()

// var bx = rootLayer.getWidth() / 2
// var by = rootLayer.getHeight() / 2
// var mx = rootLayer.getWidth() / 4
// var my = rootLayer.getHeight() / 4
// var dx = 2
// var dy = -2
// var ballRadius = 30

// window.addEventListener('resize', () => {
//   bx = rootLayer.getWidth() / 2
//   by = rootLayer.getHeight() / 2
//   mx = rootLayer.getWidth() / 4
//   my = rootLayer.getHeight() / 4
// }, false)

// Game.loop.add(() => {
//   rootLayer.clearCanvas()

//   // Box Control
//   if (Input.upArrow) {
//     my -= 4
//   }

//   if (Input.downArrow) {
//     my += 4
//   }

//   if (Input.leftArrow) {
//     mx -= 4
//   }

//   if (Input.rightArrow) {
//     mx += 4
//   }

//   player.coordinates(mx, my)

//   // Ball Control
//   if (bx + ballRadius * 2 > rootLayer.getWidth() || bx <= 0 || Util.collision.boxes(player, ball)) {
//     dx = -dx
//   }

//   if (by + ballRadius * 2 > rootLayer.getHeight() || by <= 0 || Util.collision.boxes(player, ball)) {
//     dy = -dy
//   }

//   bx += dx
//   by += dy

//   ball.coordinates(bx, by)

//   ball.draw(rootLayer)
//   player.draw(rootLayer)
// })

// Game.loop.start()
