import { Children, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./LayOut/Root.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";
import AddSpot from "./components/AddSpot.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: "/register", element: <Register></Register> },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/addspot",
        element: <AddSpot></AddSpot>,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
