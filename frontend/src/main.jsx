import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import HomeLogout from './pages/HomeLogout'
import HomeLogin from './pages/HomeLogin'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLogout />,
  },
  {
    path: "/login",
    element: <HomeLogin />
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
