'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const { INTEGER, STRING, DATE, ENUM, TEXT } = Sequelize;
    return queryInterface.createTable('card', {
      id: {
        type: INTEGER(20),
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: STRING,
        allowNull: false,
        defaultValue: '',
        comment: '卡片标题',
      },
      card_no: {
        type: STRING,
        allowNull: true,
        defaultValue: '',
        comment: '卡号',
      },
      apply_no: {
        type: STRING,
        allowNull: false,
        defaultValue: '',
        comment: '卡片运输单号',
      },
      is_pass: {
        type: INTEGER(20),
        allowNull: false,
        defaultValue: 0,
        comment: '是否通过审核',
      },
      created_time: DATE,
      updated_time: DATE,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('card');
  },
};
