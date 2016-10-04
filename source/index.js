'use strict'

import { Platform, View } from './engine'

class Ball extends View.Item.with('vectors') {
  constructor (color = Platform.utils.randomColorHex()) {
    // Set a random position
    super(Platform.utils.randomNumberBetween(60, window.innerWidth - 60), Platform.utils.randomNumberBetween(60, window.innerHeight - 60), 12, 12)

    this.color = color

    // Set a random trajectory
    this.vectorX = Platform.utils.randomNumberBetween(-5, 5)
    this.vectorY = Platform.utils.randomNumberBetween(-5, 5)
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

// window.addEventListener('resize', () => {
const layer = View.createLayer()

// const ball1 = new Ball()
// const ball2 = new Ball()

// ball1.setCoordinates({
//   dx: 100,
//   dy: 200
// })
// ball2.setCoordinates({
//   dx: 300,
//   dy: 201
// })

// ball1.vectorX = 2
// ball1.vectorY = 0
// ball2.vectorX = -2
// ball2.vectorY = 0

// layer.addEntity(ball1)
// layer.addEntity(ball2)

for (let i = 0; i < 25; i++) {
  layer.addEntity(new Ball())
}

Platform.loop
  .add(() => {
    // Collision checking
    const collisions = layer.getCollisions()

    for (let i = 0, n = collisions.length; i < n; i++) {
      // Determine which item has the greater magnitude
      const [item1, item2] = collisions[i].sort((a, b) => a.directionalMagnitude < b.directionalMagnitude)

      item1.vectorX = [item2.vectorX, item2.vectorX = item1.vectorX][0]
      item1.vectorY = [item2.vectorY, item2.vectorY = item1.vectorY][0]

      // // Retrieve the item center coordinates
      // const item1CenterCoordinates = item1.getCenterCoordinates()
      // const item2CenterCoordinates = item2.getCenterCoordinates()

      // // Calculate the angle of the collision from the angle of travel
      // const angleOfCollision = Platform.utils.radiansToDegrees(Platform.utils.getAngleBetweenThreePoints({
      //   dx: item1CenterCoordinates.dx + item1.vectorX,
      //   dy: item1CenterCoordinates.dy + item1.vectorY
      // }, item1CenterCoordinates, Platform.utils.getCenterBetweenTwoPoints(item1CenterCoordinates, item2CenterCoordinates)))

      // // Calculate the force of the collision
      // const forceOfCollision = item1.directionalMagnitude * (90 - angleOfCollision) / 90

      // const vectorXTransfer = Math.cos(angleOfCollision) * forceOfCollision
      // const vectorYTransfer = Math.sin(angleOfCollision) * forceOfCollision

      // item1.vectorX -= vectorXTransfer
      // item1.vectorY -= vectorYTransfer
      // item2.vectorX += vectorXTransfer
      // item2.vectorY += vectorYTransfer

      // console.log('vectorXTransfer', vectorXTransfer)
      // console.log('vectorYTransfer', vectorYTransfer)

      // console.log('item1.vectorX', item1.vectorX)
      // console.log('item1.vectorY', item1.vectorY)
      // console.log('item2.vectorX', item2.vectorX)
      // console.log('item2.vectorY', item2.vectorY)

      // throw Error

      // const [ball1, ball2] = collisions[i]
      // const ball1CenterCoordinates = ball1.getCenterCoorindinates()
      // const ball2CenterCoordinates = ball2.getCenterCoorindinates()
      // const collisionCoordinates = Platform.utils.getCenterBetweenTwoPoints(ball1CenterCoordinates, ball2CenterCoordinates)

      // const ball1angleOfCollision = Platform.utils.radiansToDegrees(Platform.utils.getAngleBetweenThreePoints(...[
      //   { dx: ball1CenterCoordinates.dx + ball1.vectorX, dy: ball1CenterCoordinates.dy + ball1.vectorY },
      //   ball1CenterCoordinates,
      //   collisionCoordinates
      // ]))
      // const ball2angleOfCollision = Platform.utils.radiansToDegrees(Platform.utils.getAngleBetweenThreePoints(...[
      //   { dx: ball2CenterCoordinates.dx + ball2.vectorX, dy: ball2CenterCoordinates.dy + ball2.vectorY },
      //   ball2CenterCoordinates,
      //   collisionCoordinates
      // ]))

      // const ball1ForceAtAngle = ball1.directionalMagnitude * (90 - ball1angleOfCollision) / 90
      // const ball2ForceAtAngle = ball2.directionalMagnitude * (90 - ball2angleOfCollision) / 90

      // const ball1VectorXTransfer = Math.cos(ball1angleOfCollision) * ball1ForceAtAngle
      // const ball1VectorYTransfer = Math.sin(ball1angleOfCollision) * ball1ForceAtAngle
      // const ball2VectorXTransfer = Math.cos(ball2angleOfCollision) * ball2ForceAtAngle
      // const ball2VectorYTransfer = Math.sin(ball2angleOfCollision) * ball2ForceAtAngle

      // ball1.vectorX += ball1VectorXTransfer
      // ball1.vectorY += ball1VectorYTransfer
      // ball2.vectorX += ball2VectorXTransfer
      // ball2.vectorY += ball2VectorYTransfer
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

      if (ballX + ball.vectorX + ball.getWidth() > View.getLayers()[0].getWidth() || ballX + ball.vectorX <= 0) {
        ball.vectorX = -ball.vectorX
      }

      if (ballY + ball.vectorY + ball.getHeight() > View.getLayers()[0].getHeight() || ballY + ball.vectorY <= 0) {
        ball.vectorY = -ball.vectorY
      }

      ball.setCoordinates({
        dx: ballX + ball.vectorX,
        dy: ballY + ball.vectorY
      })
    }
  })
  .add(() => {
    // Calculate total energy
    // const totalEnergy = layer.getEntities().reduce((a, b) => a + b.directionalMagnitude, 0)

    // console.log(totalEnergy)
  })
  .start()
// })

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
