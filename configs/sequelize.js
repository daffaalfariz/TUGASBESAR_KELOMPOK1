const Sequelize = require('sequelize');

const sequelize = new Sequelize('IF1_Kelompok1_ReadBooks', 'root', '', {
	host: 'localhost',
	dialect: 'mysql'
});

module.exports = sequelize;