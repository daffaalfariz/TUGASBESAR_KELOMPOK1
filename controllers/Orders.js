const Orders = require('../models/Orders');

module.exports.getAllOrders = (req, res) =>{
	Orders.findAll()
	.then(orders=> {
		res.json(orders);
	}).catch((error) => {
		throw error;
	})
}

module.exports.getOrdersByUserId = (req, res) =>{
	Orders.findAll({ where: { userId: req.params.userId } })
	.then(orders => {
		res.json(orders)
	}).then(orders => {
		res.json(categorys)
	});
}