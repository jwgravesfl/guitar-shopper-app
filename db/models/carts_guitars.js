'use strict'

const {STRING} = require('sequelize')

module.exports = db => db.define('carts_guitars')

module.exports.associations = (Carts_Guitars, {Cart, Guitar}) => {
  Favorite.belongsTo(Cart)
  Favorite.belongsTo(User)
}