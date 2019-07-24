const Sequelize = require('sequelize');

const sequelize = new Sequelize('if1_kelompok1_readbooks', 'root', '', {
	host: 'localhost',
	dialect: 'mysql'
});

module.exports = sequelize;