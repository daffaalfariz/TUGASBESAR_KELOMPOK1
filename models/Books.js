const Sequelize = require('sequelize');

const sequelize = require('../configs/sequelize');

class Books extends Sequelize.Model {}

Books.init({
	Book_name: Sequelize.STRING,
	Book_page: Sequelize.INTEGER,
	Book_stock: Sequelize.INTEGER,
	Book_price: Sequelize.INTEGER	
}, {sequelize, modelName: 'books' });

module.exports = Books;