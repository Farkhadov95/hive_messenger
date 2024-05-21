import { Navigate } from "react-router-dom";
import { routes } from "./Routes";
import React from "react";

interface PrivateRouteProps {
  element: React.ReactNode;
}

const PrivateRoutes: React.FC<PrivateRouteProps> = ({ element }) => {
  const token = sessionStorage.getItem("X-Auth-Token");
  if (!token) return <Navigate to={`${routes.login}`} />;
  return element;
};

export default PrivateRoutes;
