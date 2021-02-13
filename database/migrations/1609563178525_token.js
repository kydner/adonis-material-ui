/* eslint-disable no-undef */
'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const $db = require('./../../constants/database')
class TokensSchema extends Schema {
  up () {
    this.create($db.TBL_TOKENS, (table) => {
      table.uuid($db.COL_ID).primary()
      table.uuid($db.COL_USER_ID).references($db.COL_ID).inTable($db.TBL_USERS)
      table.string($db.COL_TOKEN, 255).notNullable().unique().index()
      table.string($db.COL_TYPE, 80).notNullable()
      table.boolean($db.COL_IS_REVOKED).defaultTo(false)
      table.timestamps()
    })
  }

  down () {
    this.drop($db.TBL_TOKENS)
  }
}

module.exports = TokensSchema
