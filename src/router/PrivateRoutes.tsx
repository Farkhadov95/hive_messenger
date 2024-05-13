import { Navigate, Outlet } from "react-router-dom";
import { routes } from "./routes";
import { useUserStore } from "../store/userStore";

const PrivateRoutes = () => {
  const currentUser = useUserStore((state) => state.currentUser);
  if (!currentUser) {
    return <Navigate to={`${routes.login}`} />;
  }
  return <Outlet />;
};

export default PrivateRoutes;
