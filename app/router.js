'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  router.post('/reg', controller.user.reg);
  router.post('/login', controller.user.login);
  router.post('/logout', controller.user.logout);

  router.get('/category', controller.category.index);

  // 添加作品
  router.post('/video', controller.video.save);
  // 更新作品
  router.post('/video/:id', controller.video.update);

  // 上传文件
  router.post('/upload', controller.file.upload);

  // 指定用户的作品列表
  router.get('/video_list/:page', controller.video.index);

  // 搜索作品
  router.get('/video_search/:page', controller.video.search);

  // 指定作品下的视频列表
  router.get('/video_detail/:video_id', controller.videoDetail.index);
  // 添加视频
  router.post('/video_detail', controller.videoDetail.save);
  // 删除视频
  router.post('/video_detail/destroy', controller.videoDetail.destroy);
  // 修改视频
  router.post('/video_detail/:id', controller.videoDetail.update);
  // vod签名
  router.post('/vod/sign', controller.vod.sign);

  router.get('/category/:category_id/video/:page', controller.video.list);

  // 收藏/取消收藏视频
  router.post('/fava/video', controller.fava.video);
  // 收藏列表
  router.get('/fava_list/:page', controller.fava.list);

  // 评论
  router.post('/comment', controller.comment.save);

  // 指定作品的评论列表
  router.get('/video_comment/:id', controller.video.comment);

  // 关注
  router.post('/user/follow', controller.user.follow);
  // 取消关注
  router.post('/user/unfollow', controller.user.unfollow);

  // 我的关注列表
  router.get('/user/follows/:page', controller.user.follows);
  // 我的粉丝列表
  router.get('/user/fens/:page', controller.user.fens);

  // 统计相关数据
  router.get('/user/statistics', controller.user.statistics);
  // 查看视频详情
  router.get('/video_read/:id', controller.video.read);
  // 获取用户相关信息
  router.get('/user/user_info', controller.user.user_info);

  // 首页视频列表
  router.get('/index_data',controller.video.index_data);
  // router.post('/banner',controller.banner.save);
  router.get('/banner/list',controller.banner.list);
};
