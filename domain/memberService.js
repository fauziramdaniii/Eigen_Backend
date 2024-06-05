// domain/member/MemberService.js
const { Member, Borrow, Book } = require('../models');

class MemberService {
  async getMembers() {
    const members = await Member.findAll({
      include: {
        model: Borrow,
        as: 'borrows',
        where: {
          returnDate: null
        },
        include: {
          model: Book,
          as: 'book'
        },
        required: false // Allow members with no active borrows
      }
    });

    return members.map(member => ({
      code: member.code,
      name: member.name,
      borrows: member.borrows.map(borrow => ({
        id: borrow.id,
        book: {
          code: borrow.book.code,
          title: borrow.book.title,
          author: borrow.book.author
        },
        borrowDate: borrow.borrowDate,
        returnDate: borrow.returnDate,
        penalty: borrow.penalty
      }))
    }));
  }
}

module.exports = new MemberService();
