const express = require('express');
const auth = require('../configs/auth');

const router = express.Router()

const categorysController = require("../controllers/Categorys");

router.get('/', categorysController.getAllCategorys);
router.get('/:id', categorysController.getCategorysById);
router.post('/',auth.verifyToken, categorysController.postCategorys);

module.exports = router;