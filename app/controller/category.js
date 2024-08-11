'use strict';

const Controller = require('egg').Controller;

class CategoryController extends Controller {
    async index() {
        const { ctx, app } = this;
        let rows = await app.model.Category.findAll();
        ctx.apiSuccess(rows);
    }
}

module.exports = CategoryController;
