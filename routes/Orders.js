const express = require('express');

const router = express.Router();

const ordersController = require('../controllers/Orders');

router.get('/', keranjangController.getAllOrders);

module.exports = router;