const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const Orders = require('../models/Orders');

module.exports.getAllOrders = (req, res) =>{
	Orders.findAll()
	.then(orders=> {
		res.json(orders);
	}).catch((error) => {
		throw error;
	})
}

module.exports.postOrders = (req, res) =>{
		jwt.verify(req.token, process.env.SECRETKEY, (error,authData)=>{
				if (error) {
						res.sendStatus(403);
				}else{
					if (authData['roles']=="user") {
						var bookId = req.body.bookId;
						Orders.create({
								userId: authData['id'],
								bookId : bookId
						})
						.then(orders => {
								res.json(orders);
						});
				}else{
					res.sendStatus(403);
				}
			}
	});
}