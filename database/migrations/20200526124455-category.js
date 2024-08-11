'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const { INTEGER, STRING, DATE, ENUM, TEXT } = Sequelize;
    return queryInterface.createTable('category', {
      id: {
        type: INTEGER(20),
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: STRING(100),
        allowNull: false,
        defaultValue: '',
        comment: '分类名称'
      },
      cover: {
        type: STRING,
        allowNull: true,
        defaultValue: '',
        comment: '分类图标'
      },
      desc: {
        type: TEXT,
        allowNull: false,
        defaultValue: '',
        comment: '分类描述',
      },
      created_time: DATE,
      updated_time: DATE
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('category');
  }
};