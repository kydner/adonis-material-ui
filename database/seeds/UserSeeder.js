/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/
const User = use('App/Models/User')
const { COL_USERNAME, COL_FIRST_NAME, COL_LAST_NAME, COL_PASSWORD, COL_EMAIL } = require('./../../constants/database/column')

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class UserSeeder {
  async run () {
    const u1 = new User()
    u1[COL_USERNAME] = 'admin'
    u1[COL_FIRST_NAME] = 'admin'
    u1[COL_LAST_NAME] = '1234'
    u1[COL_PASSWORD] = 'admin1234'
    u1[COL_EMAIL] = 'admin@gmail.com'
    await u1.save()
  }
}

module.exports = UserSeeder
