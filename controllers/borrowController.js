// controllers/borrowController.js
const BorrowService = require('../domain/borrowService');

exports.borrowBook = async (req, res) => {
  try {
    const { memberId, bookId } = req.body;
    const borrow = await BorrowService.borrowBook(memberId, bookId);
    res.json(borrow);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.returnBook = async (req, res) => {
  try {
    const { memberId, bookId } = req.body;
    const borrow = await BorrowService.returnBook(memberId, bookId);
    res.json(borrow);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
