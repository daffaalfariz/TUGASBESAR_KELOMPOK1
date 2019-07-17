const express = require('express');

const router = express.Router();

const booksController = require('../controllers/Books');

router.get('/', booksController.getAllListBooks);
router.get('/:id', booksController.getBooksById);
router.post('/', booksController.postBooks);
router.delete('/:id', booksController.deleteBooks);
router.put('/:id', booksController.putBooks);

module.exports = router;