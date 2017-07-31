'use strict'

const Sequelize = require('sequelize')

module.exports = db => db.define('carts_guitars', {
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1
  }
}) 

module.exports.associations = (Carts_Guitars, {Cart, Guitar}) => {
  Carts_Guitars.belongsTo(Cart)
  Carts_Guitars.belongsTo(Guitar)
}