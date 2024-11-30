import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import HomeLogout from "./pages/HomeLogout";
import HomeLogin from "./pages/HomeLogin";
import Freelances from "./pages/Freelances";
import PrivateRoute from "./utils/PrivateRoute";
import Profile from "./pages/Profile";
import Courses from "./pages/Courses";
import Projects from "./pages/Projects";
import Error404 from "./pages/Error404";
import Companies from "./pages/Companies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLogout />,
  },
  {
    path: "/home",
    element: (
      <PrivateRoute>
        <HomeLogin />
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
        <Projects />
      </PrivateRoute>
    )
  },
  {
    path: "/companies",
    element: (
      <PrivateRoute>
        <Companies />
      </PrivateRoute>
    )
  },
  {
    path: "/courses",
    element: (
      <PrivateRoute>
        <Courses />
      </PrivateRoute>
    )
  },
  {
    path: "/profile",
    element: (
      <PrivateRoute>
        <Profile />
      </PrivateRoute>
    )
  },
  {
    path: "*",
    element: <Error404 />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
