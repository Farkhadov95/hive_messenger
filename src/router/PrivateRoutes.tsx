import { Navigate, Outlet } from "react-router-dom";
import { routes } from "./Routes";

const PrivateRoutes = () => {
  const token = sessionStorage.getItem("X-Auth-Token");
  if (!token) return <Navigate to={`${routes.login}`} />;
  return <Outlet />;
};

export default PrivateRoutes;
