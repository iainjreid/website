'use strict'

import { Platform, View } from './_engine'

class Ball extends View.Item {
  constructor (dx, dy, color) {
    super(dx, dy, 12, 12)

    this.color = color
    this.vectorX = randomNumberBetween(1, 9)
    this.vectorY = randomNumberBetween(1, 9)
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

  ball1.vectorX = 4
  ball1.vectorY = 0
  ball2.vectorX = -4
  ball2.vectorY = 0

  const layer = View
    .createLayer()
    .addEntity(ball1)
    .addEntity(ball2)

  Platform.loop
    .add(() => {
      // Collision checking
      if (ball1.getMaxHorizontalCoordinate() === ball2.getMinHorizontalCoordinate()) {
        const collisionCoordinates = {
          dx: ball1.getMaxHorizontalCoordinate(),
          dy: ball1.getVerticalCenterCoordinate()
        }

        const ball1CenterCoordinates = ball1.getCenterCoorindinates()

        console.log(getAngleBetweenThreePoints(...[
          [ball1CenterCoordinates.dx + ball1.vectorX, ball1CenterCoordinates.dy + ball1.vectorY],
          [ball1CenterCoordinates.dx, ball1CenterCoordinates.dy],
          [collisionCoordinates.dx, collisionCoordinates.dy]
        ]))
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

        // Ball Control
        let {dx: ballX, dy: ballY} = ball.getCoordinates()

        if (ballX + ball.getWidth() > View.getLayers()[0].getWidth() || ballX <= 0) {
          ball.vectorX = -ball.vectorX

          // if (entities.length < 15) {
          //   layer.addEntity(new Ball(randomX(), randomY(), originBall.getCanvas()))
          // }
        }

        if (ballY + ball.getHeight() > View.getLayers()[0].getHeight() || ballY <= 0) {
          ball.vectorY = -ball.vectorY

          // if (entities.length < 15) {
          //   layer.addEntity(new Ball(randomX(), randomY(), originBall.getCanvas()))
          // }
        }

        ball.setCoordinates({
          dx: ballX + ball.vectorX,
          dy: ballY + ball.vectorY
        })
      }
    })
    .start()
})

// function randomX () {
//   return randomNumberBetween(100, window.innerWidth - 100)
// }

// function randomY () {
//   return randomNumberBetween(100, window.innerHeight - 100)
// }

function randomNumberBetween (a, b) {
  return Math.floor(Math.random() * (b - a + 1) + a)
}

function getDotProduct (a, b) {
  let v = 0
  let i = a.length

  while (i) {
    v += a[--i] * b[i]
  }

  return v
}

function getLengthBetweenTwoPoints (a, b) {
  return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))
}

function getAngleBetweenThreePoints (a, b, c) {
  const ab = [b[0] - a[0], b[1] - a[1]]
  const bc = [c[0] - b[0], c[1] - b[1]]

  return Math.acos(getDotProduct(ab, bc) / (getLengthBetweenTwoPoints(...ab) * getLengthBetweenTwoPoints(...bc)))
}

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
