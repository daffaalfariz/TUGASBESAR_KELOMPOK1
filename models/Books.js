const Sequelize = require('sequelize');

const sequelize = require('../configs/sequelize');

class Books extends Sequelize.Model {}

Books.init({
	name: Sequelize.STRING,
	stock: Sequelize.INTEGER,
	price: Sequelize.INTEGER,
	categorysId: Sequelize.INTEGER	
}, {sequelize, modelName: 'books' });

module.exports = Books;