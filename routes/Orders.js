const express = require('express');
const auth = require('../configs/auth');

const router = express.Router();

const ordersController = require('../controllers/Orders');

router.get('/', ordersController.getAllOrders);
router.post('/',auth.verifyToken, ordersController.postOrders);

module.exports = router;