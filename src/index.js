import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import Home from "./home/Home";
import LoginPage from "./users/pages/LoginPage";
import RegisterPage from "./users/pages/RegisterPage";
import UsersPage from "./users/pages/UsersPage";
import NewTask from "./tasks/pages/NewTask";
import AboutApp from "./home/pages/AboutApp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/",
        element: <Navigate to={"/home"} />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <RegisterPage />,
      },
      {
        path: "/about",
        element: <AboutApp />,
      },
      {
        path: "/users",
        element: <UsersPage />,
      },
      {
        path: "/newTask",
        element: <NewTask />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
