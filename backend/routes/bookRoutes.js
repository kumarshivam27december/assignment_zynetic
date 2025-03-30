const express = require('express');
const { createBook, getAllBooks, getBookById, updateBook, deleteBook } = require('../controllers/bookController');
const { protect } = require('../middleware/authMiddleware');
const validateBook = require('../middleware/validateBook');
const { errorHandler } = require('../middleware/errorMiddleware');

const router = express.Router();

router.post('/', protect, validateBook, createBook);
router.get('/', protect, getAllBooks);
router.get('/:id', protect, getBookById);
router.put('/:id', protect, validateBook, updateBook);
router.delete('/:id', protect, deleteBook);

router.use(errorHandler);

module.exports = router;
