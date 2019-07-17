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

module.exports.postBooks = (req, res) => {
	Books.create({
		Book_name: req.body.name,
		Book_page: req.body.page,
		Book_stock: req.body.stock,
		Book_price: req.body.price
	})
	.then((books) => {
		res.json(books);
	}).catch((error) => {
		throw error;
	})
}

module.exports.deleteBooks = (req, res) => {
	 Books.destroy({
      where: {
        id: req.params.id
      }
    })
	.then((books) => {
		res.json(books);
	}).catch((error) => {
		throw error;
	})
}

module.exports.putBooks = (req, res) => {
	 Books.update({
		Book_name: req.body.name,
		Book_page: req.body.page,
		Book_stock: req.body.stock,
		Book_price: req.body.price
    },{
      where: {
        id: req.params.id
      }
    })
	.then((books) => {
		res.json(books);
	}).catch((error) => {
		throw error;
	})
}