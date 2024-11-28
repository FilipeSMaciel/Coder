import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import HomeLogout from "./pages/HomeLogout";
import HomeLogin from "./pages/HomeLogin";
import Freelances from "./pages/Freelances";
import PrivateRoute from "./utils/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLogout />, // Página pública
  },
  {
    path: "/home",
    element: (
      <PrivateRoute>
        <HomeLogin /> {/* Página protegida */}
      </PrivateRoute>
    ),
  },
  {
    path: "/freelances",
    element: (
      <PrivateRoute>
        <Freelances />
      </PrivateRoute>
    ),
  },
  {
    path: "/projects",
    element: (
      <PrivateRoute>
        <div>Projects</div>
      </PrivateRoute>
    )
  },
  {
    path: "/courses",
    element: (
      <PrivateRoute>
        <div>Courses</div>
      </PrivateRoute>
    )
  },
  {
    path: "/profile",
    element: (
      <PrivateRoute>
        <div>Profile</div>
      </PrivateRoute>
    )
  },
  {
    path: "*",
    element: <div className="text-3xl text-verde_principal background font-jetbrains">404</div>,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
