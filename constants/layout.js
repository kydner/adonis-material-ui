const uuidv4 = require('uuid/v4')
const $route = require('./route')
exports.sidebars = [
  {
    id: uuidv4(),
    title: 'General',
    icon: 'dashboard',
    route: $route.ADMIN_DASHBOARD
  },
  {
    id: uuidv4(),
    title: 'User',
    icon: 'person',
    route: $route.ADMIN_USER_LIST,
    items: [
      {
        id: (id) => id,
        title: 'Baru',
        icon: 'person',
        route: $route.ADMIN_USER_FORM,
        link: 'user'
      },
      {
        id: (id) => id,
        title: 'List',
        icon: null,
        route: $route.ADMIN_USER_LIST
      }
    ]
  },
  {
    id: uuidv4(),
    title: 'User',
    icon: 'image',
    items: [
      {
        id: 1,
        title: 'Baru',
        icon: null,
        route: null,
        link: 'user'
      },
      {
        id: 2,
        title: 'List',
        icon: null,
        route: null
      }
    ]
  }
]
