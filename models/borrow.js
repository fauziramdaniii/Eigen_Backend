// models/borrow.js
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Borrow = sequelize.define('Borrow', {
    memberId: DataTypes.INTEGER,
    bookId: DataTypes.INTEGER,
    borrowDate: DataTypes.DATE,
    returnDate: DataTypes.DATE,
    penalty: DataTypes.INTEGER
  }, {});

  Borrow.associate = function(models) {
    // associations can be defined here
    Borrow.belongsTo(models.Member, { foreignKey: 'memberId', as: 'member' });
    Borrow.belongsTo(models.Book, { foreignKey: 'bookId', as: 'book' });
  };

  return Borrow;
};
