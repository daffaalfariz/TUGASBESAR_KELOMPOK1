const Sequelize = require('sequelize');

const sequelize = require('../configs/sequelize');

class Categorys extends Sequelize.Model {}

Categorys.init({
  Category_name: Sequelize.STRING
}, { sequelize, modelName: 'categorys' });

module.exports = Categorys;