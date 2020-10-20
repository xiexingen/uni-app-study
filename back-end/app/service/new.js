const Service = require('egg').Service;

class NewService extends Service{
    async findList(page){
        const result=await this.ctx.model.New.find().skip((page-1)*20).limit(20);
        return result;
    }

    async find(id){
        const result=await this.ctx.model.New.find({_id:id});
        return result;
    }
}

module.exports=NewService;