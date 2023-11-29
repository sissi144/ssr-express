
import { Router as originalRouter } from 'express';
import { renderToString } from 'react-dom/server';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { StaticRouter } from "react-router-dom/server";
import routes from '../../src/routes';

const router = originalRouter();
router.get('*', async (req, res) => {
  let appHtml = renderToString(
    <StaticRouter location={req.url}>
      <Routes>
        {routes.map(({ path, exact, component }) => (
          <Route path={path} exact={exact} key={path} element={component} />
        ))}
      </Routes>
    </StaticRouter>);
  let tplName = 'index';
  res.render(tplName, {
    title: '腾讯新闻',
    appHtml: appHtml,
  });
});

module.exports = router;
