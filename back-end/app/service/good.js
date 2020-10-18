const Service = require('egg').Service;

class GoodService extends Service{
    /**
     * 查询所有商品轮播图
     */
    async find(page){
        const result=await this.ctx.model.Good.find().skip((page-1)*20).limit(20);
        return result;
    }
}

module.exports=GoodService;