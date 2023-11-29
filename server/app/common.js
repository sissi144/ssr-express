const express = require('express');
// 创建应用程序
const createApplication = (inject) => {
  const orinalApp = express();

  // 注入并初始化一些路由或者webpack热更新中间件

  inject(orinalApp);

  return orinalApp;
};

// 导出app
module.exports = createApplication;
