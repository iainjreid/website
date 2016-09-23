'use strict'

// Game loop
import { loop } from './loop'

// Game objects
import { Item } from './objects/Item'
import { Sprite } from './objects/Sprite'

const objects = { Item, Sprite }

export let Game = { objects, loop }
