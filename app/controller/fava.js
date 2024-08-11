'use strict';

const Controller = require('egg').Controller;

class FavaController extends Controller {
    // 收藏/取消收藏作品
    async video() {
        const { ctx, app } = this;
        let user_id = ctx.authUser.id;

        ctx.validate({
            video_id: {
                type: "int",
                required: true,
                desc: "作品ID"
            }
        });

        let {
            video_id
        } = ctx.request.body;

        let fava = await app.model.Fava.findOne({
            where: {
                user_id,
                video_id
            }
        });

        if (fava) {
            fava.destroy();
            return ctx.apiSuccess({
                status: false,
                msg: "取消收藏成功"
            });
        }

        let video = await app.model.Video.findOne({
            where: {
                id: video_id
            }
        });

        if (!video) {
            return ctx.apiFail('视频不存在');
        }

        await app.model.Fava.create({
            user_id,
            video_id
        });

        ctx.apiSuccess({
            status: true,
            msg: "收藏成功"
        });
    }

    // 指定用户的收藏列表
    async list() {
        const { ctx, app } = this;

        ctx.validate({
            user_id: {
                required: true,
                type: "int",
                desc: "用户ID"
            },
            page: {
                required: true,
                type: "int",
                desc: "页码"
            }
        });

        const user_id = ctx.query.user_id;

        let rows = await ctx.page(app.model.Fava, {
            user_id
        }, {
            include: [{
                model: app.model.Video
            }]
        });

        rows = rows.map(item => {
            return {
                created_time: item.video.created_time,
                id: item.video.id,
                title: item.video.title,
                cover: item.video.cover,
                category_id: item.video.category_id,
                user_id: item.video.user_id,
                duration: item.video.duration,
                desc: item.video.desc,
                play_count: item.video.play_count,
                danmu_count: item.video.danmu_count,
            }
        });

        ctx.apiSuccess(rows);
    }
}

module.exports = FavaController;
