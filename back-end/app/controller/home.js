'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async getSwapers(){
    const { ctx,service }=this;
    const result=await service.swiper.find();
    ctx.body=result
  }
}

module.exports = HomeController;
