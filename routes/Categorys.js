const express = require('express');

const router = express.Router()

const categorysController = require("../controllers/Categorys");

router.get('/', categorysController.getAllCategorys);
router.get('/search/:id', categorysController.getCategorysById);
router.get('/search/name/:name', categorysController.getCategorysByName);

module.exports = router;