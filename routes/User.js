const express = require('express');

const userController = require('../controllers/User');

const router = express.Router();

router.post('/register', userController.postRegister);
router.post('/login', userController.postLogin);

module.exports = router;