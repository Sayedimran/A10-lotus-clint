import { createBrowserRouter } from "react-router-dom";
import MainLayOuts from "../layouts/MainLayOuts";
import AllEquipment from "../pages/AllEquipment";
import AddEquipment from "../pages/AddEquipment";
import MyEquipmentList from "../pages/MyEquipmentList";
import Register from "../pages/Register";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import SportCard from "../pages/SportCard";
import SportDetails from "../pages/SportDetails";
import PrivateRoute from "./PrivateRoute";
import UpdateEquipment from "../pages/UpdateEquipment";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOuts />,

    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/sport"),
        children: [
          {
            path: "/category/:id",
            element: <SportCard />,
            
           
          },
        ],
      },
      {
        path: "allequipe",
        element: (
          <PrivateRoute>
            <AllEquipment />
          </PrivateRoute>
        ),

        loader: () => fetch(`http://localhost:5000/sport`),
      },
      {
        path: "adduser",
        element: (
          <PrivateRoute>
            <AddEquipment />
          </PrivateRoute>
        ),
      },
      {
        path: "equiplist",
        element: (
          <PrivateRoute>
            <MyEquipmentList />
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "detail/:id",
        element: (
          <PrivateRoute>
            <SportDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/sport/${params.id}`),
      },
      {
        path: "prductList",
        element: (
          <PrivateRoute>
            <MyEquipmentList />
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/sport"),
      },
      {
        path: "updateCard/:id",
        element: (
          <PrivateRoute>
            <UpdateEquipment />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/sport/${params.id}`),
      },
    ],
  },
]);

export default Router;
