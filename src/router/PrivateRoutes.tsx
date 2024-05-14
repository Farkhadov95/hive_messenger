import { Navigate } from "react-router-dom";
import { routes } from "./Routes";
import Home from "../pages/Home";

const PrivateRoutes = () => {
  const token = sessionStorage.getItem("X-Auth-Token");
  return token ? <Home /> : <Navigate to={`${routes.login}`} />;
};

export default PrivateRoutes;
