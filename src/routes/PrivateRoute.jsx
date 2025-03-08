import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loding from "../pages/Loding";

const PrivateRoute = ({ children }) => {
  const { user, loding } = useContext(AuthContext);
  const locetion = useLocation();
  if (loding) {
    return <Loding />;
  }
  if (user && user?.email) {
    return children;
  }
  return <Navigate state={locetion.pathname} to={"/login"}></Navigate>;
};

export default PrivateRoute;
