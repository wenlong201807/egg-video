'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    let res = [
      {
        id: 1,
        name: '一',
      },
    ];

    ctx.apiSuccess(res, '消息提示123');

    // ctx.throw(500, '123456');
  }
}

module.exports = HomeController;
