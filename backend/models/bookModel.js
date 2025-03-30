const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
  },
  author: {
    type: String,
    required: [true, 'Author is required'],
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
  },
  rating: {
    type: Number,
    required: [true, 'Rating is required'],
    min: 0,
    max: 5,
  },
  publishedDate: {
    type: Date,
    required: [true, 'Published Date is required'],
  },
}, {
  timestamps: true
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
