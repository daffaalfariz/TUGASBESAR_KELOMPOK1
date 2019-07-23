const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const Books = require('../models/Books');

module.exports.getAllListBooks = (req, res) => {
	Books.findAll()
	.then((books) => {
		res.json(books);
	}).catch((error) => {
		throw error;
	})
}

module.exports.getBooksById = (req, res) => {
	Books.findById(req.params.id)
	.then((books) => {
		res.json(books);
	}).catch((error) => {
		throw error;
	})
}

module.exports.postBooks = (req, res) =>{
	jwt.verify(req.token, process.env.SECRETKEY, (error,authData)=>{
		if (error) {
			res.sendStatus(403);
		}else{
			if (authData['roles']=="admin") {
				var name: req.body.name,
				var stock: req.body.stock,
				var price: req.body.price,
				var categorysId: req.body.categorysId
				console.log(categorysId);
				Books.create({
					Name:       Name,
					Stock:      Stock,
					Price:      Price,
					CategoryId: CategoryId
				})
				.then(books => {
					res.json(books)
				});
			}else{
				res.send('You must Login as Admin');
			}
		}
	});
}

module.exports.deleteBooks = (req, res) =>{
	jwt.verify(req.token, process.env.SECRETKEY, (error,authData)=>{
		if (error) {
			res.sendStatus(403);
		}else{
			if (authData['roles']=="admin") {
				Books.destroy({
					where: {
						Id: req.body.id
					}
				})
				.then(function (deletedRecord) {
					if(deletedRecord === 1){
						res.status(200).json({message:"Deleted Successfully"});          
					}
					else
					{
						res.status(404).json({message:"Record Not Found"})
					}
				})
				.catch(function (error){
					res.status(500).json(error);
				});
			}else{
				res.sendStatus(403);
			}
		}   
	})
}

module.exports.putBooks = (req, res) =>{
	jwt.verify(req.token, process.env.SECRETKEY, (error,authData)=>{
		if (error) {
			res.sendStatus(403);
		}else{
			if (authData['roles']=="admin") {
				var name: req.body.name,
				var stock: req.body.stock,
				var price: req.body.price,
				var categorysId: req.body.categorysId

				Books.update({
  					Name:        Name,
					Stock:       Stock,
					Price:       Price,
					CategorysId: CategorysId
						}, {
  						where: { 
								Id:    Id
								}
						}).then(books => {
							res.json(books);
						});
			}
			else{
				res.sendStatus(403);
			}
		}
	}
)}

// salah push