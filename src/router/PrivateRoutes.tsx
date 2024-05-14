import { Navigate, Outlet } from "react-router-dom";
import { useUserStore } from "../store/userStore";
import { routes } from "./Routes";

const PrivateRoutes = () => {
  const currentUser = useUserStore((state) => state.currentUser);
  console.log("currentUser", currentUser);
  console.log("route", routes.login);
  return currentUser ? <Outlet /> : <Navigate to={`${routes.login}`} />;
};

export default PrivateRoutes;
