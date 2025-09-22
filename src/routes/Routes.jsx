import React from "react";

const Home = React.lazy(() => import("../pages/Home"));
const Login = React.lazy(() => import("../pages/Login"));
const News = React.lazy(() => import("../pages/News"));
const Pricing = React.lazy(() => import("../pages/Pricing"));
const Signup = React.lazy(() => import("../pages/Signup"));
const Trade = React.lazy(() => import("../pages/Trade"));
const TransactionHistory = React.lazy(() =>
  import("../pages/TransactionHistory")
);
const User = React.lazy(() => import("../pages/User"));
const Layout = React.lazy(() => import("../utils/Layout"));
import AxiosApi from "../utils/Interceptor";
import { createBrowserRouter, redirect } from "react-router-dom";
import ChallengeLayout from "../utils/ChallengeLayout";

var routers = createBrowserRouter([
  {
    element: <ChallengeLayout />, 
    loader: async () => {
      try {
        var res = await AxiosApi.get("/login");
        if (res.data.redirect) {
          return redirect("/home");
        }
        if (res.Token) {
          localStorage.setItem("acccessToken", res.Token);
        }
      } catch (err) {
        return { message: err.message};
      }
      
    },
    path: "/",
    children: [
      { path: "/login", element: <Login/> },
      { path: "/signup", element: <Signup/> },
    ],
  },
  
  {
    element: <Layout />,
    children: [
      {path: "/home",element:<Home />},
      {path: "/user",element: <User />},
      {path: "/news",element: <News />},
      {path: "/pricing",element: <Pricing />},
      {path: "transactionhistory",element: <TransactionHistory />},
      {path: "/trade",element: <Trade />},
    ]
  }  
]
);
export { routers };

