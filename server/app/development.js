
const path = require('path');
const createApplication = require('./common');
const routes = require('../routes/development');


const app = createApplication((orinalApp) => {
  // 模版设置
  orinalApp.set('view engine', 'ejs');
  orinalApp.set('views', path.resolve(__dirname, '../views/'));
  orinalApp.enable('view cache');


  orinalApp.use('/', routes);
});

module.exports = app;
