import React from 'react';

const Home = React.lazy(() => import('../pages/Home'));
const Login = React.lazy(() => import('../pages/Login'));
const News = React.lazy(() => import('../pages/News'));
const Pricing = React.lazy(() => import('../pages/Pricing'));
const Signup = React.lazy(() => import('../pages/Signup'));
const Trade = React.lazy(() => import('../pages/Trade'));
const TransactionHistory = React.lazy(() => import('../pages/TransactionHistory'));
const User = React.lazy(() => import('../pages/User'));


import { createBrowserRouter } from "react-router-dom";

var routers = createBrowserRouter([
  {
    path:"/",
    element: <Home/>
  },
  {
    path:"/user",
    element: <User/>
  },
  {
    path:"/login",
    element: <Login/>
  },
  {
    path:"/news",
    element: <News/>
  },
  {
    path:"/pricing",
    element: <Pricing/>
  },
  {
    path: "transactionhistory",
    element: <TransactionHistory/>
  },
  {
    path:"/signup",
    element: <Signup/>
  },
  {
    path:"/trade",
    element: <Trade/>
  }
]);
export {routers};