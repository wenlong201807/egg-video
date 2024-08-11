module.exports = app => {
    const { STRING, INTEGER, DATE, ENUM, TEXT } = app.Sequelize;

    const VideoDetail = app.model.define('video_detail', {
        id: {
            type: INTEGER(20),
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: STRING(100),
            allowNull: false,
            defaultValue: '',
            comment: '子标题'
        },
        video_id: {
            type: INTEGER,
            allowNull: false,
            defaultValue: 0,
            comment: '视频id'
        },
        url: {
            type: STRING,
            allowNull: true,
            defaultValue: '',
            comment: '视频链接'
        },
        desc: {
            type: TEXT,
            allowNull: false,
            defaultValue: '',
            comment: '子描述',
        },
        created_time: DATE,
        updated_time: DATE,
    });

    // 关联关系
    VideoDetail.associate = function (models) {
        // 关联作品
        VideoDetail.belongsTo(app.model.Video);
    }

    return VideoDetail;
};