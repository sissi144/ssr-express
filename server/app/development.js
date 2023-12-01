
const path = require('path');
const webpack = require('webpack');
const routes = require('../routes/development');
const webpackConfig = require('../../config/webpack.config.ssr.js');
const webpackDevMiddleware = require('webpack-dev-middleware');

// webpack init dev && hot middleware add
const config = webpackConfig(process.env.NODE_ENV);;
const compiler = webpack(config);
const devMiddleware = webpackDevMiddleware(compiler, {
  serverSideRender: true,
  publicPath: config.output.publicPath,
});

const express = require('express');

// 创建应用程序
const createApplication = (inject) => {
  const orinalApp = express();
  // 注入并初始化一些路由或者webpack热更新中间件
  inject(orinalApp);
  return orinalApp;
};


const app = createApplication((orinalApp) => {
  // 模版设置
  orinalApp.set('view engine', 'ejs');
  orinalApp.set('views', path.resolve(__dirname, '../views/'));
  orinalApp.enable('view cache');

  // 静态资源访问
  orinalApp.use(devMiddleware);
  orinalApp.use('/', routes);
});

module.exports = app;
