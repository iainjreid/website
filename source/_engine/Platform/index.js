'use strict'

// Dependencies
import { config } from './config'
import { utils } from './utils'

/**
 * @module Platform
 *
 * @description The Platform is primarily responsible for the global configuration of the application. It also observes
 *              the browser window and document objects for changes and for user related actions like resizing and input
 *              events, and also exposes a number of utility functions.
 */
const Platform = {}

Platform.config = config
Platform.utils = utils

export { Platform }
