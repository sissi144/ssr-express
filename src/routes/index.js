import About from "../pages/about";
import Home from "../pages/home";
import React from "react";

const routes = [
  {
    path: '/',
    extract: true,
    component: <Home />
  },
  {
    path: '/about',
    extract: true,
    component: <About />
  },
  {
    path: '/home',
    extract: true,
    component: <Home />
  },
];

export default routes;
