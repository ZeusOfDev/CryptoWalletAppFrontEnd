import { RouterProvider } from "react-router-dom";
import { routers } from "./routes/routes";
import React from "react";

function App() {
  return <RouterProvider router={routers} />;
}

export default App;
