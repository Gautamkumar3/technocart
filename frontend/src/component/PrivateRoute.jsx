import React, { Children } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = JSON.parse(localStorage.getItem("token"));

  if (!token) {
    return <Navigate to="/super_admin/login" />;
  }
  return children;
};

export default PrivateRoute;
