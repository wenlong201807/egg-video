'use strict';
module.exports = (app) => {
  const { STRING, INTEGER, DATE, ENUM, TEXT } = app.Sequelize;
  // 配置（重要：一定要配置详细，一定要！！！）
  const CardDetail = app.model.define('card_detail', {
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

  // 关联关系
  CardDetail.associate = function (models) {
    // 关联用户
    CardDetail.belongsTo(app.model.Card);
  };

  return CardDetail;
};
