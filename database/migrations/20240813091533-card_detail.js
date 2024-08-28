'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const { INTEGER, STRING, DATE, ENUM, TEXT } = Sequelize;
    return queryInterface.createTable('card_detail', {
      id: {
        type: INTEGER(20),
        primaryKey: true,
        autoIncrement: true,
      },
      card_id: {
        type: STRING,
        allowNull: true,
        defaultValue: '',
        comment: '卡号',
      },
      apply_no: {
        type: STRING,
        allowNull: false,
        defaultValue: '',
        comment: '申请编号',
      },
      apply_type: {
        type: STRING,
        allowNull: false,
        defaultValue: '',
        comment: '申请卡种',
      },
      apply_result: {
        type: STRING,
        allowNull: false,
        defaultValue: '',
        comment: '办卡结果',
      },
      email_date: {
        type: STRING,
        allowNull: false,
        defaultValue: '',
        comment: '办卡结果',
      },
      created_time: DATE,
      updated_time: DATE,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('card_detail');
  },
};
