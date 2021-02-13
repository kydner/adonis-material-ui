'use strict'

class DashboardController {
  index ({ view }) {
    return view.render('admin/pages/dashboard/index', { title: 'test' })
  }
}

module.exports = DashboardController
