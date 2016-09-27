'use strict'

import { Platform, View } from './_engine'

class Ball extends View.Item {
  constructor (dx, dy) {
    super(dx, dy, 60, 60)

    this.vectorX = 2
    this.vectorY = 2
  }

  draw (ctx) {
    ctx.beginPath()
    ctx.arc(30, 30, 30, Math.PI * 2, false)
    ctx.fillStyle = '#FF0000'
    ctx.fill()
    ctx.closePath()
  }
}

const layer = View
  .createLayer()
  .addEntity(new Ball(30, 30))

Platform.loop
  .add(() => {
    const entities = layer.getEntities()
    console.log(entities.length)

    // Loop through the entities
    let ball
    let i = 0
    let n = entities.length

    for (; i < n;) {
      ball = entities[i++]

      // Ball Control
      let {dx: ballX, dy: ballY} = ball.getCoordinates()

      if (ballX + ball.getWidth() > View.getLayers()[0].getWidth() || ballX <= 0) {
        ball.vectorX = -ball.vectorX

        if (entities.length < 2500) {
          layer.addEntity(new Ball(30, 30))
        }
      }

      if (ballY + ball.getHeight() > View.getLayers()[0].getHeight() || ballY <= 0) {
        ball.vectorY = -ball.vectorY

        if (entities.length < 2500) {
          layer.addEntity(new Ball(30, 30))
        }
      }

      ball.setCoordinates({
        dx: ballX + ball.vectorX,
        dy: ballY + ball.vectorY
      })
    }
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
