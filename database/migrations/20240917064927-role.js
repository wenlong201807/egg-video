'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING, DATE } = Sequelize
    await queryInterface.createTable('role', {
      id: {
        type: INTEGER(20),
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: STRING(100),
        allowNull: false,
        defaultValue: '',
        comment: '角色名称',
      },
      created_time: DATE,
      updated_time: DATE,
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('role')
  },
}
