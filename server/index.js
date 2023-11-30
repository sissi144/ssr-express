
// ignore `.scss` imports
require('ignore-styles');

// transpile imports on the fly
require('@babel/register')({
  presets: [
    ['@babel/preset-env'],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [],
});
const Loadable = require('react-loadable');
const app = require('./app/development');

const hook = require('css-modules-require-hook');
const moduleAlias = require('module-alias');
const path = require('path');
hook({
  generateScopedName: '[hash:base64]',
});
// 支持服务端渲染
moduleAlias.addAlias('@', path.resolve(`${__dirname}/../src/`));
const PROT = 9000;
// import express server
Loadable.preloadAll()
  .then(() => {
    app.listen(PROT, (err) => {
      console.log('the app is now in http://localhost:9000')
      if (err) {
        console.error(err);
      }
    });
  })
  .catch((err) => {
    console.log('server fail', err);
    console.error(err);
  });

