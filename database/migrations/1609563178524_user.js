/* eslint-disable no-undef */
'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const $db = require('./../../constants/database')
class UserSchema extends Schema {
  up () {
    this.create($db.TBL_USERS, (table) => {
      table.uuid($db.COL_ID).primary()
      table.string($db.COL_USERNAME, 80).notNullable().unique()
      table.string($db.COL_EMAIL, 254).notNullable().unique()
      table.string($db.COL_FIRST_NAME, 80).notNullable()
      table.string($db.COL_LAST_NAME, 80).nullable()
      table.string($db.COL_PASSWORD, 60).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop($db.TBL_USERS)
  }
}

module.exports = UserSchema
