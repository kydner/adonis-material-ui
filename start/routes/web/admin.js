/* eslint-disable no-undef */
const Route = use('Route')
const $route = require('./../../../constants/route')
Route.group(() => {
  Route.get('login', 'AuthController.viewLogin').as($route.LOGIN).middleware(['redirectIfAuth'])
  Route.post('login', 'AuthController.login').as($route.POST_LOGIN)
  Route.get('/logout', 'AuthController.logout').as($route.LOGOUT)
})

Route.group(() => {
  Route.get('/', 'DashboardController.index').as($route.ADMIN_DASHBOARD)
  Route.get('/user/', 'UserController.index').as($route.ADMIN_USER_LIST)
  Route.get('/user/form', 'UserController.form').as($route.ADMIN_USER_FORM)
  Route.get('/user/:id', 'UserController.getOne')
})
  .prefix('admin')
  // .middleware(['redirectIfNoAuth', 'auth'])
Route.on('/').render('welcome')
