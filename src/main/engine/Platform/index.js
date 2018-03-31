'use strict'

// Dependencies
import * as config from './config'
import * as hooks from './hooks'
import * as input from './input'
import * as loop from './loop'
import * as utils from './utils'

/**
 * @module Platform
 *
 * @description The Platform is primarily responsible for the global configuration of the application. It also observes
 *              the browser window and document objects for changes and for user related actions like resizing and input
 *              events, and also exposes a number of utility functions.
 */
const Platform = { config, hooks, input, loop, utils }

export { Platform }
