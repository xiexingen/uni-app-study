'use strict';

const Controller = require('egg').Controller;

class NewController extends Controller {
  async getNews(){
    const { ctx,service }=this;
    const {page}=ctx.query;
    const result=await service.new.findList(page);
    ctx.body=result
  }

  async getNew(){
    const { ctx,service }=this;
    const {id}=ctx.query;
    const result=await service.new.find(id);
    ctx.body=result[0];
  }
}

module.exports = NewController;
