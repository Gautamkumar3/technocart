import React from "react";
import { Navigate, useParams } from "react-router-dom";

const PartnerPrivateRoute = ({ children }) => {
  const partner = localStorage.getItem("partner");
  const { name } = useParams();
  console.log(name);
  if (!partner) {
    return <Navigate to={`/${name}/login`} />;
  }
  return children;
};

export default PartnerPrivateRoute;
