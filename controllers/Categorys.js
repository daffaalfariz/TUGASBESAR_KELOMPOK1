const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const Category = require('../models/Categorys');

module.exports.getAllCategorys = (req, res) => {
	Categorys.findAll()
	.then((categorys) => {
		res.json(categorys);
	}).catch((error) => {
		throw error;
	})
}

module.exports.getCategorysById = (req, res) => {
	Categorys.findById(req.params.id)
	.then((categorys) => {
		res.json(categorys);
	}).catch((error) => {
		throw error;
	})
}

module.exports.postCategorys = (req, res) =>{
	jwt.verify(req.token, process.env.SECRETKEY, (error,authData)=>{
		if (error) {
			res.sendStatus(403);
		}else{
			
			var categorysName = req.body.categorysName;

			Categorys.create({
				categorysName: categorysName
			})
			.then(categorys => {
				res.json(categorys);
			});
		}
	});
}