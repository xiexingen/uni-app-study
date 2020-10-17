'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }

  // mongoose 配置
  mongoose: {
    enable: true,
    package: 'egg-mongoose'
  }
};