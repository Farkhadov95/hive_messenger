import { Navigate, Outlet } from "react-router-dom";
import { useUserStore } from "../store/userStore";
import { routes } from "./PublicRoutes";

const PrivateRoutes = () => {
  const currentUser = useUserStore((state) => state.currentUser);
  if (currentUser?._id === "") return <Navigate to={`${routes.login}`} />;
  return <Outlet />;
};

export default PrivateRoutes;
