// domain/borrow/BorrowService.js
const { Borrow, Member, Book } = require('../models');
const { Op } = require('sequelize');

class BorrowService {
  async borrowBook(memberId, bookId) {
    // Check member penalties
    const member = await Member.findByPk(memberId);
    if (!member) {
      throw new Error('Member not found');
    }
    
    const currentPenalties = await Borrow.findOne({
      where: {
        memberId,
        penalty: 1,
        returnDate: {
          [Op.gt]: new Date(new Date() - 3 * 24 * 60 * 60 * 1000) // 3 days ago
        }
      }
    });

    if (currentPenalties) {
      throw new Error('Member is currently penalized');
    }

    // Check number of books already borrowed
    const borrowedBooksCount = await Borrow.count({
      where: {
        memberId,
        returnDate: null
      }
    });

    if (borrowedBooksCount >= 2) {
      throw new Error('Member cannot borrow more than 2 books');
    }

    // Check if the book is already borrowed
    const book = await Book.findByPk(bookId);

    if (!book) {
      throw new Error('Book not found');
    }

    if (book.stock <= 0) {
      throw new Error('Book is already borrowed');
    }

    // Borrow the book
    const borrow = await Borrow.create({
      memberId,
      bookId,
      borrowDate: new Date(),
      returnDate: null,
      penalty: 0
    });

    // Decrease the book stock
    book.stock -= 1;
    await book.save();

    return borrow;
  }

  async returnBook(memberId, bookId) {
    // Check if the book is borrowed by the member
    const borrow = await Borrow.findOne({
      where: {
        memberId,
        bookId,
        returnDate: null
      }
    });

    if (!borrow) {
      throw new Error('Book not borrowed by the member');
    }

    const borrowDate = new Date(borrow.borrowDate);
    const returnDate = new Date();
    const daysBorrowed = Math.floor((returnDate - borrowDate) / (1000 * 60 * 60 * 24));

    // Check for penalty
    let penalty = 0;
    if (daysBorrowed > 7) {
      penalty = 1;
    }

    // Update the borrow record
    borrow.returnDate = returnDate;
    borrow.penalty = penalty;
    await borrow.save();

    // Update book stock
    const book = await Book.findByPk(bookId);
    book.stock += 1;
    await book.save();

    return borrow;
  }
}

module.exports = new BorrowService();
