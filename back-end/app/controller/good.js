'use strict';

const Controller = require('egg').Controller;

class GoodController extends Controller {
  async getGoods(){
    const { ctx,service }=this;
    const {page=1}=ctx.query;
    const result=await service.good.find(page);
    ctx.body=result
  }
}

module.exports = GoodController;
