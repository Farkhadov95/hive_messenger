import { Navigate, Outlet } from "react-router-dom";
import { routes } from "./Routes";

const PrivateRoutes = () => {
  const token = sessionStorage.getItem("X-Auth-Token");
  return token ? <Outlet /> : <Navigate to={`${routes.login}`} />;
};

export default PrivateRoutes;
