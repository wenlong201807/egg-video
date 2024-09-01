/* eslint valid-jsdoc: "off" */

'use strict'

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {})

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1590069486464_5893'

  // add your middleware config here
  config.middleware = ['errorHandler', 'auth', 'getuser']

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  }

  // 改成你自己的！！！
  config.webUrl = 'localhost:7001'
  // config.webUrl = 'ceshi8.dishait.cn';

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
  }

  config.security = {
    // 关闭 csrf
    csrf: {
      enable: false,
      ignoreJSON: false, // 默认为 false，当设置为 true 时，将会放过所有 content-type 为 `application/json` 的请求
    },
    // 跨域白名单
    // domainWhiteList: ['http://localhost:3000'], // 运行跨域的白名单
  }
  // 允许跨域的方法
  config.cors = {
    origin: '*',
    allowMethods: 'GET, PUT, POST, DELETE, PATCH',
  }

  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    username: 'root',
    password: '157351',
    port: 3306,
    database: 'egg-video',
    // tablePre: 'lqs_', // 表前缀
    timezone: '+08:00', // 中国时区 东八时区
    define: {
      // 取消数据表名复数
      freezeTableName: true, // 强制表名称等于模型名称
      // 自动写入时间戳 created_at updated_at
      timestamps: true,
      // 字段生成软删除时间戳 deleted_at
      // paranoid: true,
      createdAt: 'created_time',
      updatedAt: 'updated_time',
      // deletedAt: 'deleted_time',
      // 所有驼峰命名格式化
      underscored: true, // 列字段名称是否使用驼峰转下划线。
      charset: 'utf8mb4', // 编码
      dialectOptions: {
        collate: 'utf8mb4_general_ci',
      },
    },
    logging: true, // 打印日志
    // dialectOptions: { // 时间格式化
    // 	dateStrings: true,
    // 	typeCast: true,
    // },
  }

  config.valparams = {
    locale: 'zh-cn',
    throwError: true,
  }

  config.crypto = {
    secret: 'qhdgw@45ncashdaksh2!#@3nxjdas*_672',
  }

  config.jwt = {
    secret: 'qhdgw@45ncashdaksh2!#@3nxjdas*_672', // 签名私钥
    // expiresIn: 3600, // 签名失效时间 - 秒 3600（1小时）
    // restExpiresIn: 1800, // 距离签名失效时间多少内可以重置签名- 秒 1800（0.5小时）
    // headerTokenKey: 'lqsblog-token', // Header头 Token 名称
  }

  config.redis = {
    client: {
      port: 6379, // Redis port
      host: '127.0.0.1', // Redis host
      password: '',
      db: 4,
    },
  }

  config.multipart = {
    fileSize: '50mb',
    mode: 'stream',
    fileExtensions: ['.xls', '.txt', '.jpg', '.JPG', '.png', '.PNG', '.gif', '.GIF', '.jpeg', '.JPEG'], // 扩展几种上传的文件格式
    /**
     * 自定义允许图片上传的类型
     * 注意：此参数是基于 config.multipart.whitelist 与 config.multipart.fileExtensions 配置的基础上进行的限制。
     */
    // imgType: [ 'image/png', 'image/gif', 'image/jpg', 'image/jpeg' ],
    /**
     * 自定义文件上传目录绑定的网址,必须设置，(必须 / 结尾)，如下格式：
     * uploadWeburl: 'http://127.0.0.1:7001/public/uploads/'
     * 注意：如果 config.multipart.uploadDir 为空，此项可设置为 http://当前项目域名/public/uploads/
     *      若 config.multipart.uploadDir 不为空，此项设置自定义上传目录绑定的网址
     */
    // uploadWeburl: 'http://127.0.0.1:7001/public/uploads/',
    /**
     * 自定义文件上传的目录(注意必须 / 结尾) 绝对地址（注意Linux和Windows上的目录结构不同）
     * uploadDir: 'E:/uploads/'
     * 注意：如果为空，系统默认上传目录 path.join(ctx.app.config.baseDir, 'app/public/uploads/')
     */
    // uploadDir: '',
  }

  config.customLoader = {
    // // 定义在 ctx 上的属性名 ctx.utils
    // utils: {
    //   // 相对于 app.config.baseDir
    //   directory: 'app/utils',
    //   // 如果是 app 则使用 loadToApp
    //   inject: 'ctx',
    //   // 是否加载框架和插件的目录
    //   loadunit: false,
    // },
    // // 定义在 app 上的属性名 app.enum
    // enum: {
    //   // 相对于 app.config.baseDir
    //   directory: 'app/enum',
    //   // 如果是 ctx 则使用 loadToContext
    //   inject: 'app',
    //   // 是否加载框架和插件的目录
    //   loadunit: false,
    // }
  }

  // log
  config.logger = {
    // 日志分为 NONE，DEBUG，INFO，WARN 和 ERROR 5 个级别。
    // 默认只会输出 INFO 及以上（WARN 和 ERROR）的日志到文件中。
    level: 'INFO',
    dir: path.join(appInfo.baseDir, 'logs'),
  }

  // 腾讯云vod
  config.tencentVod = {
    secret_id: 'AKIDZuynvasdfm33xb7ws9AuNbYv161gX2SVM',
    secret_key: 'jEXbYJnKdsafbS3oI2YonMddMpAF2FK',
    vodSubAppId: 1500100131,
  }

  return {
    ...config,
    ...userConfig,
  }
}
