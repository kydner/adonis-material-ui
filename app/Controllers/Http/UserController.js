/* eslint-disable no-undef */
'use strict'

const User = use('App/Models/User')
// const $route = require('./../../../constants/Route')
class UserController {
  index ({ view, auth, params }) {
    return view.render('admin/pages/user/list', { title: 'test' })
  }

  form ({ view, auth, params }) {
    return view.render('admin/pages/user/form', { title: 'test' })
  }

  getAll ({ auth, params }) {
    if (auth.user.id !== Number(params.id)) {
      return "You cannot see someone else's profile"
    }
    return auth.user
  }

  async getOne ({ response, params }) {
    try {
      const { id } = params
      const data = await User.find(id)
      if (data) return response.status(200).json(data)
      return response(501).json(null)
    } catch (error) {
      response.status(500).json(error)
    }
  }
}

module.exports = UserController
