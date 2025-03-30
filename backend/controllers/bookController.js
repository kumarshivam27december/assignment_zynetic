const Book = require('../models/bookModel');

const createBook = async (req, res) => {
  const { title, author, category, price, rating, publishedDate } = req.body;
  
  try {
    const book = await Book.create({ title, author, category, price, rating, publishedDate });
    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
const getAllBooks = async (req, res) => {
    try {
      const { author, category, rating, search, sortBy, sortOrder, page = 1, limit = 10 } = req.query;
      const filter = {};
  
      if (author) filter.author = author;
      if (category) filter.category = category;
      if (rating) filter.rating = { $gte: Number(rating) };
  
      if (search) {
        filter.title = { $regex: search, $options: 'i' };
      }
  
      const sortOptions = {};
      if (sortBy) {
        sortOptions[sortBy] = sortOrder === 'desc' ? -1 : 1;
      }
  
      const skip = (Number(page) - 1) * Number(limit);
  
      const books = await Book.find(filter)
        .sort(sortOptions)
        .skip(skip)
        .limit(Number(limit));
  
      const totalBooks = await Book.countDocuments(filter);
  
      res.json({
        totalBooks,
        currentPage: Number(page),
        totalPages: Math.ceil(totalBooks / Number(limit)),
        books,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  

const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json({ message: 'Book deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createBook, getAllBooks, getBookById, updateBook, deleteBook };
