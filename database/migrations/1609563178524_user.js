/* eslint-disable no-undef */
'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const { COL_ID, COL_USERNAME, COL_EMAIL, COL_FIRST_NAME, COL_LAST_NAME, COL_PASSWORD } = require('./../../constants/database/column')
const { TBL_USERS } = require('./../../constants/database/table')
class UserSchema extends Schema {
  up () {
    this.create(TBL_USERS, (table) => {
      table.uuid(COL_ID).primary()
      table.string(COL_USERNAME, 80).notNullable().unique().index()
      table.string(COL_EMAIL, 254).notNullable().unique().index()
      table.string(COL_FIRST_NAME, 80).notNullable().index()
      table.string(COL_LAST_NAME, 80).nullable()
      table.string(COL_PASSWORD, 60).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop(TBL_USERS)
  }
}

module.exports = UserSchema
