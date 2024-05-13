import { Navigate, Outlet } from "react-router-dom";
import { routes } from "./routes";

const PrivateRoutes = () => {
  const hasToken = sessionStorage.getItem("X-Auth-Token");
  if (!hasToken) {
    return <Navigate to={`${routes.login}`} />;
  }
  return <Outlet />;
};

export default PrivateRoutes;
