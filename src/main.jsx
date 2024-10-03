import { Children, StrictMode, useContext } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./LayOut/Root.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";
import AddSpot from "./components/AddSpot.jsx";
import Home from "./components/Home.jsx";
import AuthProviders, { AuthContext } from "./providers/AuthProviders.jsx";
import PrivateRoutes from "./routes/PrivateRoutes.jsx";
import MyList from "./components/MyList.jsx";
import ViewDetails from "./components/ViewDetails.jsx";
import AllSpot from "./components/AllSpot.jsx";
import TouristSpot from "./components/TouristSpot.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/spot"),
      },
      {
        path: "/allspot",
        element: <AllSpot></AllSpot>,
        loader: () => fetch("http://localhost:5000/allspot"),
      },
      { path: "/register", element: <Register></Register> },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/addspot",
        element: (
          <PrivateRoutes>
            <AddSpot></AddSpot>
          </PrivateRoutes>
        ),
      },
      {
        path: "/mylist",
        element: (
          <PrivateRoutes>
            <MyList></MyList>
          </PrivateRoutes>
        ),
        loader: () => fetch("http://localhost:5000/mylist"),
      },
      {
        path: "/viewdetails/:id",
        element: (
          <PrivateRoutes>
            <ViewDetails></ViewDetails>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/viewDetails/${params.id}`),
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </StrictMode>
);
