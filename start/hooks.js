/* eslint-disable no-undef */
const Helpers = use('Helpers')
const { hooks } = require('@adonisjs/ignitor')
const $route = require('./../constants/route')
const $layout = require('./../constants/layout')
hooks.after.providersBooted(() => {
  const View = use('Adonis/Src/View')
  View.global('appTitle', () => 'Website ABC')
  View.global('sidebars', $layout.sidebars)
  View.global('test', () => new Date())
  View.global('$route', $route)
  View.global('viewUrl', (path) => Helpers.viewsPath(path))
})
