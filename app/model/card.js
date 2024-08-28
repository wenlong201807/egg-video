'use strict'
module.exports = (app) => {
  const { STRING, INTEGER, DATE, ENUM, TEXT } = app.Sequelize
  // 配置（重要：一定要配置详细，一定要！！！）
  // title: '建生活卡',
  // cardNo: '1234567890123456',
  // applyNo: 'YGdfhbwsrhwrh',
  // isPass: true,
  const Card = app.model.define('card', {
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
  })
  return Card
}
