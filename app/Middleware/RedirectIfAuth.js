'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const $route = require('../../constants/route')

class RedirectIfAuth {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ auth, response }, next) {
    // call next to advance the request
    try {
      if (await auth.check()) {
        await auth.check() && await response.route($route.ADMIN_DASHBOARD)
      }
    } catch (error) {
      await next()
    }
  }
}

module.exports = RedirectIfAuth
