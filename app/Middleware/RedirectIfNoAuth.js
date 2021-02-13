'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const $route = require('../../constants/Route')

class RedirectIfNoAuth {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ response, auth }, next) {
    // call next to advance the request
    try {
      await auth.check() && await next()
    } catch (error) {
      response.route($route.LOGOUT)
    }
  }
}

module.exports = RedirectIfNoAuth
