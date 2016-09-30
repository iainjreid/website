'use strict'

import { Platform, View } from './_engine'

class Ball extends View.Item {
  constructor (dx, dy, color) {
    super(dx, dy, 12, 12)

    this.color = color
    this.vectorX = Platform.utils.randomNumberBetween(1, 9)
    this.vectorY = Platform.utils.randomNumberBetween(1, 9)
  }

  get directionalMagnitude () {
    return Math.sqrt(Math.pow(this.vectorX, 2) + Math.pow(this.vectorY, 2))
  }

  draw (ctx) {
    ctx.beginPath()
    ctx.arc(6, 6, 6, Math.PI * 2, false)
    ctx.fillStyle = this.color
    ctx.fill()
    ctx.closePath()
  }
}

window.addEventListener('resize', () => {
  const ball1 = new Ball(60, window.innerHeight / 2, 'red')
  const ball2 = new Ball(window.innerWidth - 60, window.innerHeight / 2, 'blue')

  const layer = View
    .createLayer()
    .addEntity(ball1)
    .addEntity(ball2)

  Platform.loop
    .add(() => {
      // Collision checking
      const collisions = layer.getCollisions()

      if (collisions.length) {
        console.log(collisions)

        // const collisionCoordinates = Platform.utils.getCentreBetweenTwoPoints(ball1.getCenterCoorindinates(), ball2.getCenterCoorindinates())

        // const ball1CenterCoordinates = ball1.getCenterCoorindinates()

        // console.log(Platform.utils.getAngleBetweenThreePoints(...[
        //   { dx: ball1CenterCoordinates.dx + ball1.vectorX, dy: ball1CenterCoordinates.dy + ball1.vectorY },
        //   ball1CenterCoordinates,
        //   collisionCoordinates
        // ]))

        for (let i = 0, n = collisions.length; i < n; i++) {
          collisions[i][0].vectorX = [collisions[i][1].vectorX, collisions[i][1].vectorX = collisions[i][0].vectorX][0]
          collisions[i][0].vectorY = [collisions[i][1].vectorY, collisions[i][1].vectorY = collisions[i][0].vectorY][0]
        }
      }
    })
    .add(() => {
      const entities = layer.getEntities()

      // Loop through the entities
      let ball
      let i = 0
      let n = entities.length

      for (; i < n;) {
        ball = entities[i++]

        // Ball Controls
        let {dx: ballX, dy: ballY} = ball.getCoordinates()

        if (ballX + ball.getWidth() > View.getLayers()[0].getWidth() || ballX <= 0) {
          ball.vectorX = -ball.vectorX
        }

        if (ballY + ball.getHeight() > View.getLayers()[0].getHeight() || ballY <= 0) {
          ball.vectorY = -ball.vectorY
        }

        ball.setCoordinates({
          dx: ballX + ball.vectorX,
          dy: ballY + ball.vectorY
        })
      }
    })
    .start()
})

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
