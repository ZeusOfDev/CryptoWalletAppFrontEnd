import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import { routers } from "./routes/Routes";
import Layout from "./utils/Layout";
import Home from "./pages/Home";
function TestComponent() {
  return (
    <div className="bg-[#151517]/40 w-3/5 h-90px mx-4 rounded-2xl"></div>
  );
}
function App() {
  return (
    <div>
      <Layout>
        <Home />
      </Layout>
    </div>
  );
  /*
  return (
    <RouterProvider router={routers} />
  );*/
}

export default App;
