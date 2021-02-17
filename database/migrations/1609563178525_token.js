/* eslint-disable no-undef */
'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const {COL_ID, COL_USER_ID, COL_TOKEN, COL_TYPE, COL_IS_REVOKED } = require('./../../constants/database/column')
const { TBL_TOKENS, TBL_USERS  } = require('./../../constants/database/table')
class TokensSchema extends Schema {
  up () {
    this.create(TBL_TOKENS, (table) => {
      table.uuid(COL_ID).primary()
      table.uuid(COL_USER_ID).references(COL_ID).inTable(TBL_USERS)
      table.string(COL_TOKEN, 255).notNullable().unique().index()
      table.string(COL_TYPE, 80).notNullable()
      table.boolean(COL_IS_REVOKED).defaultTo(false)
      table.timestamps()
    })
  }

  down () {
    this.drop(TBL_TOKENS)
  }
}

module.exports = TokensSchema
