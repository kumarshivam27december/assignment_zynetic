const { body, validationResult } = require('express-validator');

const validateBook = [
  body('title').notEmpty().withMessage('Title is required'),
  body('author').notEmpty().withMessage('Author is required'),
  body('category').notEmpty().withMessage('Category is required'),
  body('price').isNumeric().withMessage('Price must be a number'),
  body('rating').isFloat({ min: 0, max: 5 }).withMessage('Rating must be between 0 and 5'),
  body('publishedDate').isISO8601().withMessage('Published date must be a valid date'),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

module.exports = validateBook;
