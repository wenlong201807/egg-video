/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1590069486464_5893';

  // add your middleware config here
  config.middleware = ['errorHandler', 'auth', 'getuser'];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  // 改成你自己的！！！
  config.webUrl = 'ceshi8.dishait.cn';

  config.auth = {
    match: [
      '/logout',
      '/video',
      '/video_detail',
      '/vod/sign',
      '/comment',
      '/fava',
      '/user/follow',
      '/user/unfollow',
      '/user/follows',
      '/user/fens',
      '/user/statistics',
    ],
  };

  config.security = {
    // 关闭 csrf
    csrf: {
      enable: false,
    },
    // 跨域白名单
    // domainWhiteList: ['http://localhost:3000'],
  };
  // 允许跨域的方法
  config.cors = {
    origin: '*',
    allowMethods: 'GET, PUT, POST, DELETE, PATCH',
  };

  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    username: 'root',
    password: '157351',
    port: 3306,
    database: 'egg-video',
    // 中国时区
    timezone: '+08:00',
    define: {
      // 取消数据表名复数
      freezeTableName: true,
      // 自动写入时间戳 created_at updated_at
      timestamps: true,
      // 字段生成软删除时间戳 deleted_at
      // paranoid: true,
      createdAt: 'created_time',
      updatedAt: 'updated_time',
      // deletedAt: 'deleted_time',
      // 所有驼峰命名格式化
      underscored: true,
    },
  };

  config.valparams = {
    locale: 'zh-cn',
    throwError: true,
  };

  config.crypto = {
    secret: 'qhdgw@45ncashdaksh2!#@3nxjdas*_672',
  };

  config.jwt = {
    secret: 'qhdgw@45ncashdaksh2!#@3nxjdas*_672',
  };

  config.redis = {
    client: {
      port: 6379, // Redis port
      host: '127.0.0.1', // Redis host
      password: '',
      db: 4,
    },
  };

  config.multipart = {
    fileSize: '50mb',
    mode: 'stream',
    fileExtensions: [
      '.xls',
      '.txt',
      '.jpg',
      '.JPG',
      '.png',
      '.PNG',
      '.gif',
      '.GIF',
      '.jpeg',
      '.JPEG',
    ], // 扩展几种上传的文件格式
  };

  // 腾讯云vod
  config.tencentVod = {
    secret_id: 'AKIDZuynvasdfm33xb7ws9AuNbYv161gX2SVM',
    secret_key: 'jEXbYJnKdsafbS3oI2YonMddMpAF2FK',
    vodSubAppId: 1500100131,
  };

  return {
    ...config,
    ...userConfig,
  };
};
