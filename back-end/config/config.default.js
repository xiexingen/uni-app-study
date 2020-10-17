/* eslint valid-jsdoc: "off" */

"use strict";

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1602900031173_6401";

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.cors = {
    enable: true,
    package: "egg-cors",
    origin: ["*"],
    allowMethods: "GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS",
    credentials: true,
  };

  config.security = {
    // 关闭csrf验证
    csrf: {
      enable: false,
    },
    // 白名单
    domainWhiteList: ["*"],
  };

  return {
    ...config,
    ...userConfig,
  };
};
