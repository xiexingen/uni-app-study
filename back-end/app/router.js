'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  
  router.get('/api/home/getSwapers',controller.home.getSwapers)

  router.get('/api/good/getGoods',controller.good.getGoods)

  router.get('/api/picture/getCateGorys',controller.picture.getCateGorys)
  router.get('/api/picture/getPictures',controller.picture.getPictures)
};
