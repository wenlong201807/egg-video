'use strict';
module.exports = app => {
    const { STRING, INTEGER, DATE, ENUM, TEXT } = app.Sequelize;
    // 配置（重要：一定要配置详细，一定要！！！）
    const Banner = app.model.define('banner',  {
        id: {
          type: INTEGER(20),
          primaryKey: true,
          autoIncrement: true
        },
        title: {
          type: STRING(100),
          allowNull: false,
          defaultValue: '',
          comment: '广告图名称'
        },
        cover: {
          type: STRING,
          allowNull: true,
          defaultValue: '',
          comment: '广告图链接'
        },
        video_id: {
          type: INTEGER,
          allowNull: false,
          defaultValue: 0,
          comment: '视频id',
          references: {
            model: 'video',
            key: 'id'
          },
          onDelete: 'cascade',
          onUpdate: 'restrict', // 更新时操作
        },
        created_time: DATE,
        updated_time: DATE
      });
    return Banner;
};