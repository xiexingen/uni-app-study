'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async getSwapers(){
    const {ctx}=this;
    ctx.body=[
      {
        id:1,
        src:'http://m.360buyimg.com/mobilecms/s700x280_jfs/t1/126362/30/986/198724/5eb8d485E656bea31/649f6df5d9ee7087.jpg!cr_1125x445_0_171!q70.jpg.dpg'
      },
      {
        id:2,
        src:'http://img13.360buyimg.com/mcoss/s710x206_jfs/t1/124170/1/15119/68775/5f86b18eed4c70027/f97ed610efcc77fc.jpg!q70.dpg.webp'
      },
      {
        id:3,
        src:'http://img1.360buyimg.com/pop/s710x206_jfs/t1/133709/10/9939/118233/5f5f2d5ee7c33c7c6/b1beac87cc300a1b.jpg!cc_710x206!q70.dpg.webp'
      },
      {
        id:4,
        src:'//m.360buyimg.com/mobilecms/s700x280_jfs/t1/148766/31/9437/104633/5f6ff039Ebc893037/592f36a15a4198fc.jpg!q70.jpg.dpg'
      }
    ]
  }
}

module.exports = HomeController;
