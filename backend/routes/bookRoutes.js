const express = require('express');
const { createBook, getAllBooks, getBookById, updateBookById, deleteBookById } = require('../controllers/bookController');
const protect = require('../middleware/authMiddleware');
const validateBook = require('../middleware/validateBook');

const router = express.Router();

router.post('/', protect, validateBook,createBook);
router.get('/', getAllBooks);
router.get('/:id', getBookById);
router.put('/:id', protect,validateBook, updateBookById);
router.delete('/:id', protect, deleteBookById);

module.exports = router;
