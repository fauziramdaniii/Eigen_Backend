// controllers/bookController.js
const BookService = require('../domain/bookService');

exports.getBooks = async (req, res) => {
  try {
    const books = await BookService.getAvailableBooks();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
