'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  
  // 轮播
  router.get('/api/home/getSwapers',controller.home.getSwapers)

  //商品
  router.get('/api/good/getGoods',controller.good.getGoods)

  // 图片
  router.get('/api/picture/getCateGorys',controller.picture.getCateGorys)
  router.get('/api/picture/getPictures',controller.picture.getPictures)

  //新闻
  router.get('/api/new/getNews',controller.new.getNews)
  router.get('/api/new/getNew',controller.new.getNew)
};
