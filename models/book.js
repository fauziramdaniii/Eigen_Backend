// models/book.js
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    code: DataTypes.STRING,
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    stock: DataTypes.INTEGER
  }, {});

  Book.associate = function(models) {
    // associations can be defined here
    Book.hasMany(models.Borrow, { foreignKey: 'bookId', as: 'borrows' });
  };

  return Book;
};
