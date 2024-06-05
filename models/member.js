// models/member.js
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Member = sequelize.define('Member', {
    code: DataTypes.STRING,
    name: DataTypes.STRING
  }, {});

  Member.associate = function(models) {
    // associations can be defined here
    Member.hasMany(models.Borrow, { foreignKey: 'memberId', as: 'borrows' });
  };

  return Member;
};
