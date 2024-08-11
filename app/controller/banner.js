'use strict';

const await = require('await-stream-ready/lib/await');

const Controller = require('egg').Controller;

class BannerController extends Controller {
    // 新增
    async save() {
        const { ctx,app } = this;
        let res = await app.model.Banner.create(ctx.request.body)
        ctx.apiSuccess(res)
    }
    // 轮播图列表
    async list(){
        const { ctx,app } = this;
        let rows = await app.model.Banner.findAll()
        ctx.apiSuccess(rows)
    }
}

module.exports = BannerController;
