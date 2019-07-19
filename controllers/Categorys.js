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

module.exports.getCategorysByName = (req, res) =>{
  Categorys.findAll({ where: { Category_name: req.params.name } })
  .then(categorys => {
	res.json(categorys);
  }).catch((error) => {
		throw error;
  })
}
