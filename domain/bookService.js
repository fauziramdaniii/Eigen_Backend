// domain/book/BookService.js
const { Book, Borrow } = require('../models');

class BookService {
  async getAvailableBooks() {
    const books = await Book.findAll({
      include: {
        model: Borrow,
        as: 'borrows',
        where: {
          returnDate: null
        },
        required: false
      }
    });

    return books
      .filter(book => book.stock > 0) // Filter books with stock > 0
      .map(book => ({
        code: book.code,
        title: book.title,
        author: book.author,
        stock: book.stock,
        createdAt: book.createdAt,
        updatedAt: book.updatedAt
      }));
  }
}

module.exports = new BookService();
