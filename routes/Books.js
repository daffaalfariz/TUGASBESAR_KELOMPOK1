const express = require('express');
const auth = require('../configs/auth');

const router = express.Router();

const booksController = require('../controllers/Books');

router.get('/', booksController.getAllListBooks);
router.get('/:id', booksController.getBooksById);
router.post('/',auth.verifyToken, booksController.postBooks);
router.delete('/:id',auth.verifyToken, booksController.deleteBooks);
router.put('/:id',auth.verifyToken, booksController.putBooks);

module.exports = router;

// salah push