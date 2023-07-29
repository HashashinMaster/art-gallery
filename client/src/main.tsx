import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home/index.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Add from "./pages/Add/index.tsx";
import Error from "./pages/Error/index.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/add",
    element: <Add />,
    errorElement: <Error />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
