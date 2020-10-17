const Service = require('egg').Service;

class SwiperService extends Service{
    /**
     * 查询所有swiper轮播图
     */
    async find(){
        const result=await this.ctx.model.Swaper.find();
        return result;
    }
}

module.exports=SwiperService;