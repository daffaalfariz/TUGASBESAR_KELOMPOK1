const Sequelize = require('sequelize');

const sequelize = require('../configs/sequelize');

class Orders extends Sequelize.Model {}

Orders.init({
  bookId: Sequelize.INTEGER,
  userId: Sequelize.INTEGER
}, { sequelize, modelName: 'orders' });

module.exports = Orders;