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
import UpdateSpot from "./components/UpdateSpot.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://tourism-hub-server.vercel.app/spot"),
      },
      {
        path: "/allspot",
        element: <AllSpot></AllSpot>,
        loader: () => fetch("https://tourism-hub-server.vercel.app/allspot"),
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
        loader: () => fetch("https://tourism-hub-server.vercel.app/mylist"),
      },
      {
        path: "/viewdetails/:id",
        element: (
          <PrivateRoutes>
            <ViewDetails></ViewDetails>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://tourism-hub-server.vercel.app/viewDetails/${params.id}`
          ),
      },
      {
        path: "/mylist/:id",
        element: (
          <PrivateRoutes>
            {" "}
            <UpdateSpot></UpdateSpot>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://tourism-hub-server.vercel.app/mylist/${params.id}`),
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
