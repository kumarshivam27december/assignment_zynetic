const express = require('express');
const { createBook, getAllBooks, getBookById, updateBookById, deleteBookById } = require('../controllers/bookController');
const protect = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', protect, createBook);
router.get('/', getAllBooks);
router.get('/:id', getBookById);
router.put('/:id', protect, updateBookById);
router.delete('/:id', protect, deleteBookById);

module.exports = router;
