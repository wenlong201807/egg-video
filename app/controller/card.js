'use strict'

const Controller = require('egg').Controller

class CardController extends Controller {
  oldVersion() {
    const { ctx, app } = this
    const { version, time, page } = ctx.request.body
    ctx.apiSuccess({ version, time, page })
    // ctx.apiSuccess({ time: new Date(new Date().getTime() + 60000 * 1), version: '20240808', page: 'sing' })
  }
  heart() {
    const { ctx, app } = this
    // ctx.cookies.set('user', 'admin', { expires: new Date(new Date().getTime() + 60000 * 1) })
    ctx.set('custom', 'CustomValue--' + new Date(new Date().getTime() + 60000 * 1))
    ctx.apiSuccess({ version: '123', time: new Date().toLocaleDateString() })
  }
  // 获取卡片列表
  async list() {
    const { ctx, app } = this
    console.log('CardController:', ctx.query, ctx.params)

    // ctx.validate({
    //   page: {
    //     required: true,
    //     type: 'int',
    //     desc: '页码',
    //   },
    // });

    let rows = await ctx.page(app.model.Card)
    // let rows = await app.model.CardList.findAll();

    ctx.apiSuccess(rows)
  }

  // 查看卡片详情
  // 视频详情
  async read() {
    const { ctx, app, service } = this
    // let currentUser = ctx.authUser;

    ctx.validate({
      id: {
        type: 'int',
        required: true,
        desc: '作品ID',
      },
    })

    let { id } = ctx.params

    let cardDetail = await app.model.CardDetail.findOne({
      where: {
        card_id: id,
      },
      include: [
        {
          model: app.model.Card, // 可以关联查询出 对应 父级的数据
        },
        //   {
        //   model: app.model.User,
        //   attributes: ['id', 'username', 'nickname', 'avatar']
        //   }
      ],
    })

    // 5条热门视频
    // let hot = await this.hot();

    // // 是否已收藏
    // let fava = false
    // // 是否关注
    // let follow = false

    // if (currentUser) {
    //     fava = !!(await app.model.Fava.findOne({
    //         where: {
    //             video_id: id,
    //             user_id: currentUser.id
    //         }
    //     }))

    //     follow = await service.user.isFollow(currentUser.id, video.user_id);
    // }

    ctx.apiSuccess({
      cardDetail,
      // video,
      // hot,
      // fava,
      // follow
    })
  }
}

module.exports = CardController
